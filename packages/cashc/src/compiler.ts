import { Artifact, asmToBytecode, optimiseBytecode } from '@cashscript/utils';
import { binToHex, binToUtf8, hexToBin } from '@bitauth/libauth';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import fs from 'fs';
import { generateArtifact } from './artifact/Artifact.js';
import { Ast } from './ast/AST.js';
import AstBuilder from './ast/AstBuilder.js';
import ThrowingErrorListener from './ast/ThrowingErrorListener.js';
import GenerateTargetTraversal from './generation/GenerateTargetTraversal.js';
import { CashScriptLexer } from './grammar/CashScriptLexer.js';
import { CashScriptParser } from './grammar/CashScriptParser.js';
import SymbolTableTraversal from './semantic/SymbolTableTraversal.js';
import TypeCheckTraversal from './semantic/TypeCheckTraversal.js';
import EnsureFinalRequireTraversal from './semantic/EnsureFinalRequireTraversal.js';

export function compileString(code: string): Artifact {
  // Lexing + parsing
  let ast = parseCode(code);

  // Semantic analysis
  ast = ast.accept(new SymbolTableTraversal()) as Ast;
  ast = ast.accept(new TypeCheckTraversal()) as Ast;
  ast = ast.accept(new EnsureFinalRequireTraversal()) as Ast;

  // Code generation
  const traversal = new GenerateTargetTraversal();
  ast = ast.accept(traversal) as Ast;
  const bytecode = traversal.output;

  // Bytecode optimisation
  const optimisedBytecode = optimiseBytecode(bytecode);

  return generateArtifact(ast, optimisedBytecode);
}

export function compileFile(codeFile: string): Artifact {
  const code = fs.readFileSync(codeFile, { encoding: 'utf-8' });
  return compileString(code);
}

export function parseCode(code: string): Ast {
  // Lexing (throwing on errors)
  const inputStream = new ANTLRInputStream(code);
  const lexer = new CashScriptLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(ThrowingErrorListener.INSTANCE);
  const tokenStream = new CommonTokenStream(lexer);

  // Parsing (throwing on errors)
  const parser = new CashScriptParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(ThrowingErrorListener.INSTANCE);
  const parseTree = parser.sourceFile();

  // AST building
  const ast = new AstBuilder(parseTree).build() as Ast;

  return ast;
}

export function hexWithPlaceholders(asm: string): string {
  const matches = asm.matchAll(/OP_UNKNOWN255 ([0-9a-z]+)/g);
  const placeholders = [...matches].map(([, name]) => binToUtf8(hexToBin(name)));
  const parts = asm.split(/OP_UNKNOWN255 [0-9a-z]+/).map((p) => p.trim()); // Must be trimmed so ' ' parts don't get converted to 00
  return parts.map(
    (part: string, index: number) => `${index > 0 ? `<${placeholders[index - 1]}>` : ''}${part && binToHex(asmToBytecode(part))}`,
  ).join('');
}

export function asmWithPlaceholders(asm: string): string {
  return asm.replace(/OP_UNKNOWN255 ([0-9a-z]+)/g, (_, name) => `$${binToUtf8(hexToBin(name))}`);
}
