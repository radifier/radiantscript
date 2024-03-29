// Generated from src/grammar/CashScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CashScriptListener } from "./CashScriptListener";
import { CashScriptVisitor } from "./CashScriptVisitor";


export class CashScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly VersionLiteral = 60;
	public static readonly BooleanLiteral = 61;
	public static readonly NumberUnit = 62;
	public static readonly NumberLiteral = 63;
	public static readonly Bytes = 64;
	public static readonly Bound = 65;
	public static readonly StringLiteral = 66;
	public static readonly DateLiteral = 67;
	public static readonly HexLiteral = 68;
	public static readonly TxVar = 69;
	public static readonly NullaryOp = 70;
	public static readonly Identifier = 71;
	public static readonly WHITESPACE = 72;
	public static readonly COMMENT = 73;
	public static readonly LINE_COMMENT = 74;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_versionConstraint = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_contractDefinition = 6;
	public static readonly RULE_functions = 7;
	public static readonly RULE_mainIdentifier = 8;
	public static readonly RULE_stateScript = 9;
	public static readonly RULE_stateSeparator = 10;
	public static readonly RULE_functionDefinition = 11;
	public static readonly RULE_parameterList = 12;
	public static readonly RULE_parameter = 13;
	public static readonly RULE_block = 14;
	public static readonly RULE_statement = 15;
	public static readonly RULE_variableDefinition = 16;
	public static readonly RULE_tupleAssignment = 17;
	public static readonly RULE_assignStatement = 18;
	public static readonly RULE_timeOpStatement = 19;
	public static readonly RULE_requireStatement = 20;
	public static readonly RULE_ifStatement = 21;
	public static readonly RULE_functionCall = 22;
	public static readonly RULE_pushDataStatement = 23;
	public static readonly RULE_pushRefStatement = 24;
	public static readonly RULE_pushRef = 25;
	public static readonly RULE_unsetStatement = 26;
	public static readonly RULE_expressionList = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_modifier = 29;
	public static readonly RULE_literal = 30;
	public static readonly RULE_numberLiteral = 31;
	public static readonly RULE_typeName = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "pragmaDirective", "pragmaName", "pragmaValue", "versionConstraint", 
		"versionOperator", "contractDefinition", "functions", "mainIdentifier", 
		"stateScript", "stateSeparator", "functionDefinition", "parameterList", 
		"parameter", "block", "statement", "variableDefinition", "tupleAssignment", 
		"assignStatement", "timeOpStatement", "requireStatement", "ifStatement", 
		"functionCall", "pushDataStatement", "pushRefStatement", "pushRef", "unsetStatement", 
		"expressionList", "expression", "modifier", "literal", "numberLiteral", 
		"typeName",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'radiantscript'", "'^'", "'~'", "'>='", 
		"'>'", "'<'", "'<='", "'='", "'contract'", "'function'", "'{'", "'}'", 
		"'return'", "','", "'stateSeparator'", "'('", "')'", "'require'", "'if'", 
		"'else'", "'pushData'", "'pushInputRef'", "'requireInputRef'", "'disallowPushInputRefSibling'", 
		"'disallowPushInputRef'", "'pushInputRefSingleton'", "'unset'", "'new'", 
		"'['", "']'", "'tx.outputs'", "'.'", "'tx.inputs'", "'tx.outputs.zeroValue'", 
		"'tx.inputs.zeroValue'", "'.reverse()'", "'.length'", "'.split'", "'!'", 
		"'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='", "'&'", "'|'", "'&&'", 
		"'||'", "'constant'", "'int'", "'bool'", "'string'", "'pubkey'", "'sig'", 
		"'datasig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "VersionLiteral", "BooleanLiteral", 
		"NumberUnit", "NumberLiteral", "Bytes", "Bound", "StringLiteral", "DateLiteral", 
		"HexLiteral", "TxVar", "NullaryOp", "Identifier", "WHITESPACE", "COMMENT", 
		"LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CashScriptParser._LITERAL_NAMES, CashScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CashScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CashScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CashScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CashScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CashScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CashScriptParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CashScriptParser.T__0) {
				{
				{
				this.state = 66;
				this.pragmaDirective();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.contractDefinition();
			this.state = 73;
			this.match(CashScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CashScriptParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(CashScriptParser.T__0);
			this.state = 76;
			this.pragmaName();
			this.state = 77;
			this.pragmaValue();
			this.state = 78;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CashScriptParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(CashScriptParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CashScriptParser.RULE_pragmaValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.versionConstraint();
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__3) | (1 << CashScriptParser.T__4) | (1 << CashScriptParser.T__5) | (1 << CashScriptParser.T__6) | (1 << CashScriptParser.T__7) | (1 << CashScriptParser.T__8) | (1 << CashScriptParser.T__9))) !== 0) || _la === CashScriptParser.VersionLiteral) {
				{
				this.state = 83;
				this.versionConstraint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CashScriptParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__3) | (1 << CashScriptParser.T__4) | (1 << CashScriptParser.T__5) | (1 << CashScriptParser.T__6) | (1 << CashScriptParser.T__7) | (1 << CashScriptParser.T__8) | (1 << CashScriptParser.T__9))) !== 0)) {
				{
				this.state = 86;
				this.versionOperator();
				}
			}

			this.state = 89;
			this.match(CashScriptParser.VersionLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CashScriptParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__3) | (1 << CashScriptParser.T__4) | (1 << CashScriptParser.T__5) | (1 << CashScriptParser.T__6) | (1 << CashScriptParser.T__7) | (1 << CashScriptParser.T__8) | (1 << CashScriptParser.T__9))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CashScriptParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(CashScriptParser.T__10);
			this.state = 94;
			this.match(CashScriptParser.Identifier);
			this.state = 95;
			this.parameterList();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.T__11) {
				{
				this.state = 96;
				this.match(CashScriptParser.T__11);
				this.state = 97;
				this.parameterList();
				}
			}

			this.state = 100;
			this.match(CashScriptParser.T__12);
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 101;
				this.stateScript();
				}
				break;
			}
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__19) | (1 << CashScriptParser.T__20) | (1 << CashScriptParser.T__22) | (1 << CashScriptParser.T__23) | (1 << CashScriptParser.T__24) | (1 << CashScriptParser.T__25) | (1 << CashScriptParser.T__26) | (1 << CashScriptParser.T__27) | (1 << CashScriptParser.T__28))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0)) {
				{
				{
				this.state = 104;
				this.statement();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.T__14) {
				{
				this.state = 110;
				this.functions();
				}
			}

			this.state = 113;
			this.match(CashScriptParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functions(): FunctionsContext {
		let _localctx: FunctionsContext = new FunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CashScriptParser.RULE_functions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(CashScriptParser.T__14);
			this.state = 116;
			this.match(CashScriptParser.T__12);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.Identifier) {
				{
				this.state = 117;
				this.functionDefinition();
				this.state = 122;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 118;
						this.match(CashScriptParser.T__15);
						this.state = 119;
						this.functionDefinition();
						}
						}
					}
					this.state = 124;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CashScriptParser.T__15) {
					{
					this.state = 125;
					this.match(CashScriptParser.T__15);
					}
				}

				}
			}

			this.state = 130;
			this.match(CashScriptParser.T__13);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.T__1) {
				{
				this.state = 131;
				this.match(CashScriptParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mainIdentifier(): MainIdentifierContext {
		let _localctx: MainIdentifierContext = new MainIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CashScriptParser.RULE_mainIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(CashScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateScript(): StateScriptContext {
		let _localctx: StateScriptContext = new StateScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CashScriptParser.RULE_stateScript);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 136;
				this.statement();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__19) | (1 << CashScriptParser.T__20) | (1 << CashScriptParser.T__22) | (1 << CashScriptParser.T__23) | (1 << CashScriptParser.T__24) | (1 << CashScriptParser.T__25) | (1 << CashScriptParser.T__26) | (1 << CashScriptParser.T__27) | (1 << CashScriptParser.T__28))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0));
			this.state = 141;
			this.stateSeparator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateSeparator(): StateSeparatorContext {
		let _localctx: StateSeparatorContext = new StateSeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CashScriptParser.RULE_stateSeparator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(CashScriptParser.T__16);
			this.state = 144;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CashScriptParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(CashScriptParser.Identifier);
			this.state = 147;
			this.parameterList();
			this.state = 148;
			this.match(CashScriptParser.T__12);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__19) | (1 << CashScriptParser.T__20) | (1 << CashScriptParser.T__22) | (1 << CashScriptParser.T__23) | (1 << CashScriptParser.T__24) | (1 << CashScriptParser.T__25) | (1 << CashScriptParser.T__26) | (1 << CashScriptParser.T__27) | (1 << CashScriptParser.T__28))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0)) {
				{
				{
				this.state = 149;
				this.statement();
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 155;
			this.match(CashScriptParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CashScriptParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(CashScriptParser.T__17);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)))) !== 0)) {
				{
				this.state = 158;
				this.parameter();
				this.state = 163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 159;
						this.match(CashScriptParser.T__15);
						this.state = 160;
						this.parameter();
						}
						}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CashScriptParser.T__15) {
					{
					this.state = 166;
					this.match(CashScriptParser.T__15);
					}
				}

				}
			}

			this.state = 171;
			this.match(CashScriptParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CashScriptParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.typeName();
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.T__52) {
				{
				this.state = 174;
				this.modifier();
				}
			}

			this.state = 177;
			this.match(CashScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CashScriptParser.RULE_block);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CashScriptParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(CashScriptParser.T__12);
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__19) | (1 << CashScriptParser.T__20) | (1 << CashScriptParser.T__22) | (1 << CashScriptParser.T__23) | (1 << CashScriptParser.T__24) | (1 << CashScriptParser.T__25) | (1 << CashScriptParser.T__26) | (1 << CashScriptParser.T__27) | (1 << CashScriptParser.T__28))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0)) {
					{
					{
					this.state = 180;
					this.statement();
					}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 186;
				this.match(CashScriptParser.T__13);
				}
				break;
			case CashScriptParser.T__19:
			case CashScriptParser.T__20:
			case CashScriptParser.T__22:
			case CashScriptParser.T__23:
			case CashScriptParser.T__24:
			case CashScriptParser.T__25:
			case CashScriptParser.T__26:
			case CashScriptParser.T__27:
			case CashScriptParser.T__28:
			case CashScriptParser.T__53:
			case CashScriptParser.T__54:
			case CashScriptParser.T__55:
			case CashScriptParser.T__56:
			case CashScriptParser.T__57:
			case CashScriptParser.T__58:
			case CashScriptParser.Bytes:
			case CashScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CashScriptParser.RULE_statement);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.variableDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.tupleAssignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 192;
				this.assignStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 193;
				this.timeOpStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 194;
				this.requireStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 195;
				this.ifStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 196;
				this.pushDataStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 197;
				this.pushRefStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 198;
				this.unsetStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let _localctx: VariableDefinitionContext = new VariableDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CashScriptParser.RULE_variableDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.typeName();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CashScriptParser.T__52) {
				{
				this.state = 202;
				this.modifier();
				}
			}

			this.state = 205;
			this.match(CashScriptParser.Identifier);
			this.state = 206;
			this.match(CashScriptParser.T__9);
			this.state = 207;
			this.expression(0);
			this.state = 208;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleAssignment(): TupleAssignmentContext {
		let _localctx: TupleAssignmentContext = new TupleAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CashScriptParser.RULE_tupleAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.typeName();
			this.state = 211;
			this.match(CashScriptParser.Identifier);
			this.state = 212;
			this.match(CashScriptParser.T__15);
			this.state = 213;
			this.typeName();
			this.state = 214;
			this.match(CashScriptParser.Identifier);
			this.state = 215;
			this.match(CashScriptParser.T__9);
			this.state = 216;
			this.expression(0);
			this.state = 217;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStatement(): AssignStatementContext {
		let _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CashScriptParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(CashScriptParser.Identifier);
			this.state = 220;
			this.match(CashScriptParser.T__9);
			this.state = 221;
			this.expression(0);
			this.state = 222;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeOpStatement(): TimeOpStatementContext {
		let _localctx: TimeOpStatementContext = new TimeOpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CashScriptParser.RULE_timeOpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(CashScriptParser.T__19);
			this.state = 225;
			this.match(CashScriptParser.T__17);
			this.state = 226;
			this.match(CashScriptParser.TxVar);
			this.state = 227;
			this.match(CashScriptParser.T__5);
			this.state = 228;
			this.expression(0);
			this.state = 229;
			this.match(CashScriptParser.T__18);
			this.state = 230;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requireStatement(): RequireStatementContext {
		let _localctx: RequireStatementContext = new RequireStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CashScriptParser.RULE_requireStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(CashScriptParser.T__19);
			this.state = 233;
			this.match(CashScriptParser.T__17);
			this.state = 234;
			this.expression(0);
			this.state = 235;
			this.match(CashScriptParser.T__18);
			this.state = 236;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CashScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(CashScriptParser.T__20);
			this.state = 239;
			this.match(CashScriptParser.T__17);
			this.state = 240;
			this.expression(0);
			this.state = 241;
			this.match(CashScriptParser.T__18);
			this.state = 242;
			_localctx._ifBlock = this.block();
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 243;
				this.match(CashScriptParser.T__21);
				this.state = 244;
				_localctx._elseBlock = this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CashScriptParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(CashScriptParser.Identifier);
			this.state = 248;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pushDataStatement(): PushDataStatementContext {
		let _localctx: PushDataStatementContext = new PushDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CashScriptParser.RULE_pushDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(CashScriptParser.T__22);
			this.state = 251;
			this.match(CashScriptParser.T__17);
			this.state = 252;
			_la = this._input.LA(1);
			if (!(_la === CashScriptParser.HexLiteral || _la === CashScriptParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 253;
			this.match(CashScriptParser.T__18);
			this.state = 254;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pushRefStatement(): PushRefStatementContext {
		let _localctx: PushRefStatementContext = new PushRefStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CashScriptParser.RULE_pushRefStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.pushRef();
			this.state = 257;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pushRef(): PushRefContext {
		let _localctx: PushRefContext = new PushRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CashScriptParser.RULE_pushRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__23) | (1 << CashScriptParser.T__24) | (1 << CashScriptParser.T__25) | (1 << CashScriptParser.T__26) | (1 << CashScriptParser.T__27))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 260;
			this.match(CashScriptParser.T__17);
			this.state = 261;
			_la = this._input.LA(1);
			if (!(_la === CashScriptParser.HexLiteral || _la === CashScriptParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 262;
			this.match(CashScriptParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsetStatement(): UnsetStatementContext {
		let _localctx: UnsetStatementContext = new UnsetStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CashScriptParser.RULE_unsetStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(CashScriptParser.T__28);
			this.state = 265;
			this.match(CashScriptParser.T__17);
			this.state = 266;
			this.match(CashScriptParser.Identifier);
			this.state = 267;
			this.match(CashScriptParser.T__18);
			this.state = 268;
			this.match(CashScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CashScriptParser.RULE_expressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(CashScriptParser.T__17);
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (CashScriptParser.T__17 - 18)) | (1 << (CashScriptParser.T__23 - 18)) | (1 << (CashScriptParser.T__24 - 18)) | (1 << (CashScriptParser.T__25 - 18)) | (1 << (CashScriptParser.T__26 - 18)) | (1 << (CashScriptParser.T__27 - 18)) | (1 << (CashScriptParser.T__29 - 18)) | (1 << (CashScriptParser.T__30 - 18)) | (1 << (CashScriptParser.T__32 - 18)) | (1 << (CashScriptParser.T__34 - 18)) | (1 << (CashScriptParser.T__35 - 18)) | (1 << (CashScriptParser.T__36 - 18)) | (1 << (CashScriptParser.T__40 - 18)) | (1 << (CashScriptParser.T__41 - 18)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.BooleanLiteral - 54)) | (1 << (CashScriptParser.NumberLiteral - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.StringLiteral - 54)) | (1 << (CashScriptParser.DateLiteral - 54)) | (1 << (CashScriptParser.HexLiteral - 54)) | (1 << (CashScriptParser.NullaryOp - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0)) {
				{
				this.state = 271;
				this.expression(0);
				this.state = 276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 272;
						this.match(CashScriptParser.T__15);
						this.state = 273;
						this.expression(0);
						}
						}
					}
					this.state = 278;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CashScriptParser.T__15) {
					{
					this.state = 279;
					this.match(CashScriptParser.T__15);
					}
				}

				}
			}

			this.state = 284;
			this.match(CashScriptParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, CashScriptParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesisedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 287;
				this.match(CashScriptParser.T__17);
				this.state = 288;
				this.expression(0);
				this.state = 289;
				this.match(CashScriptParser.T__18);
				}
				break;

			case 2:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 291;
				this.typeName();
				this.state = 292;
				this.match(CashScriptParser.T__17);
				this.state = 293;
				(_localctx as CastContext)._castable = this.expression(0);
				this.state = 296;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 294;
					this.match(CashScriptParser.T__15);
					this.state = 295;
					(_localctx as CastContext)._size = this.expression(0);
					}
					break;
				}
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CashScriptParser.T__15) {
					{
					this.state = 298;
					this.match(CashScriptParser.T__15);
					}
				}

				this.state = 301;
				this.match(CashScriptParser.T__18);
				}
				break;

			case 3:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 303;
				this.functionCall();
				}
				break;

			case 4:
				{
				_localctx = new InstantiationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 304;
				this.match(CashScriptParser.T__29);
				this.state = 305;
				this.match(CashScriptParser.Identifier);
				this.state = 306;
				this.expressionList();
				}
				break;

			case 5:
				{
				_localctx = new UnaryIntrospectionOpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 307;
				(_localctx as UnaryIntrospectionOpContext)._scope = this.match(CashScriptParser.T__32);
				this.state = 308;
				this.match(CashScriptParser.T__30);
				this.state = 309;
				this.expression(0);
				this.state = 310;
				this.match(CashScriptParser.T__31);
				this.state = 311;
				this.match(CashScriptParser.T__33);
				this.state = 312;
				(_localctx as UnaryIntrospectionOpContext)._op = this.match(CashScriptParser.Identifier);
				}
				break;

			case 6:
				{
				_localctx = new UnaryIntrospectionOpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 314;
				(_localctx as UnaryIntrospectionOpContext)._scope = this.match(CashScriptParser.T__34);
				this.state = 315;
				this.match(CashScriptParser.T__30);
				this.state = 316;
				this.expression(0);
				this.state = 317;
				this.match(CashScriptParser.T__31);
				this.state = 318;
				this.match(CashScriptParser.T__33);
				this.state = 319;
				(_localctx as UnaryIntrospectionOpContext)._op = this.match(CashScriptParser.Identifier);
				}
				break;

			case 7:
				{
				_localctx = new IntrospectionFunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 321;
				(_localctx as IntrospectionFunctionCallContext)._scope = this.match(CashScriptParser.T__32);
				this.state = 322;
				this.match(CashScriptParser.T__33);
				this.state = 323;
				this.match(CashScriptParser.Identifier);
				this.state = 324;
				this.expressionList();
				}
				break;

			case 8:
				{
				_localctx = new IntrospectionFunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 325;
				(_localctx as IntrospectionFunctionCallContext)._scope = this.match(CashScriptParser.T__34);
				this.state = 326;
				this.match(CashScriptParser.T__33);
				this.state = 327;
				this.match(CashScriptParser.Identifier);
				this.state = 328;
				this.expressionList();
				}
				break;

			case 9:
				{
				_localctx = new IntrospectionFunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 329;
				(_localctx as IntrospectionFunctionCallContext)._scope = this.match(CashScriptParser.T__35);
				this.state = 330;
				this.match(CashScriptParser.T__33);
				this.state = 331;
				this.match(CashScriptParser.Identifier);
				this.state = 332;
				this.expressionList();
				}
				break;

			case 10:
				{
				_localctx = new IntrospectionFunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 333;
				(_localctx as IntrospectionFunctionCallContext)._scope = this.match(CashScriptParser.T__36);
				this.state = 334;
				this.match(CashScriptParser.T__33);
				this.state = 335;
				this.match(CashScriptParser.Identifier);
				this.state = 336;
				this.expressionList();
				}
				break;

			case 11:
				{
				_localctx = new PushRefExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 337;
				this.pushRef();
				}
				break;

			case 12:
				{
				_localctx = new UnaryOpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 338;
				(_localctx as UnaryOpContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CashScriptParser.T__40 || _la === CashScriptParser.T__41)) {
					(_localctx as UnaryOpContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 339;
				this.expression(14);
				}
				break;

			case 13:
				{
				_localctx = new ArrayContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 340;
				this.match(CashScriptParser.T__30);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (CashScriptParser.T__17 - 18)) | (1 << (CashScriptParser.T__23 - 18)) | (1 << (CashScriptParser.T__24 - 18)) | (1 << (CashScriptParser.T__25 - 18)) | (1 << (CashScriptParser.T__26 - 18)) | (1 << (CashScriptParser.T__27 - 18)) | (1 << (CashScriptParser.T__29 - 18)) | (1 << (CashScriptParser.T__30 - 18)) | (1 << (CashScriptParser.T__32 - 18)) | (1 << (CashScriptParser.T__34 - 18)) | (1 << (CashScriptParser.T__35 - 18)) | (1 << (CashScriptParser.T__36 - 18)) | (1 << (CashScriptParser.T__40 - 18)) | (1 << (CashScriptParser.T__41 - 18)))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.BooleanLiteral - 54)) | (1 << (CashScriptParser.NumberLiteral - 54)) | (1 << (CashScriptParser.Bytes - 54)) | (1 << (CashScriptParser.StringLiteral - 54)) | (1 << (CashScriptParser.DateLiteral - 54)) | (1 << (CashScriptParser.HexLiteral - 54)) | (1 << (CashScriptParser.NullaryOp - 54)) | (1 << (CashScriptParser.Identifier - 54)))) !== 0)) {
					{
					this.state = 341;
					this.expression(0);
					this.state = 346;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 342;
							this.match(CashScriptParser.T__15);
							this.state = 343;
							this.expression(0);
							}
							}
						}
						this.state = 348;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
					}
					this.state = 350;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CashScriptParser.T__15) {
						{
						this.state = 349;
						this.match(CashScriptParser.T__15);
						}
					}

					}
				}

				this.state = 354;
				this.match(CashScriptParser.T__31);
				}
				break;

			case 14:
				{
				_localctx = new NullaryOpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 355;
				this.match(CashScriptParser.NullaryOp);
				}
				break;

			case 15:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 356;
				this.match(CashScriptParser.Identifier);
				}
				break;

			case 16:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 357;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 401;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 399;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 360;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 361;
						(_localctx as BinaryOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CashScriptParser.T__42 - 43)) | (1 << (CashScriptParser.T__43 - 43)) | (1 << (CashScriptParser.T__44 - 43)))) !== 0))) {
							(_localctx as BinaryOpContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 362;
						(_localctx as BinaryOpContext)._right = this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 363;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 364;
						(_localctx as BinaryOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CashScriptParser.T__41 || _la === CashScriptParser.T__45)) {
							(_localctx as BinaryOpContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 365;
						(_localctx as BinaryOpContext)._right = this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 366;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 367;
						(_localctx as BinaryOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CashScriptParser.T__5) | (1 << CashScriptParser.T__6) | (1 << CashScriptParser.T__7) | (1 << CashScriptParser.T__8))) !== 0))) {
							(_localctx as BinaryOpContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 368;
						(_localctx as BinaryOpContext)._right = this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 369;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 370;
						(_localctx as BinaryOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CashScriptParser.T__46 || _la === CashScriptParser.T__47)) {
							(_localctx as BinaryOpContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 371;
						(_localctx as BinaryOpContext)._right = this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 372;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 373;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__48);
						this.state = 374;
						(_localctx as BinaryOpContext)._right = this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 375;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 376;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__3);
						this.state = 377;
						(_localctx as BinaryOpContext)._right = this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 378;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 379;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__49);
						this.state = 380;
						(_localctx as BinaryOpContext)._right = this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 381;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 382;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__50);
						this.state = 383;
						(_localctx as BinaryOpContext)._right = this.expression(7);
						}
						break;

					case 9:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 385;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__51);
						this.state = 386;
						(_localctx as BinaryOpContext)._right = this.expression(6);
						}
						break;

					case 10:
						{
						_localctx = new TupleIndexOpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 388;
						this.match(CashScriptParser.T__30);
						this.state = 389;
						(_localctx as TupleIndexOpContext)._index = this.match(CashScriptParser.NumberLiteral);
						this.state = 390;
						this.match(CashScriptParser.T__31);
						}
						break;

					case 11:
						{
						_localctx = new UnaryOpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 392;
						(_localctx as UnaryOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CashScriptParser.T__37 || _la === CashScriptParser.T__38)) {
							(_localctx as UnaryOpContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 12:
						{
						_localctx = new BinaryOpContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CashScriptParser.RULE_expression);
						this.state = 393;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 394;
						(_localctx as BinaryOpContext)._op = this.match(CashScriptParser.T__39);
						this.state = 395;
						this.match(CashScriptParser.T__17);
						this.state = 396;
						(_localctx as BinaryOpContext)._right = this.expression(0);
						this.state = 397;
						this.match(CashScriptParser.T__18);
						}
						break;
					}
					}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CashScriptParser.RULE_modifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(CashScriptParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CashScriptParser.RULE_literal);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CashScriptParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.match(CashScriptParser.BooleanLiteral);
				}
				break;
			case CashScriptParser.NumberLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.numberLiteral();
				}
				break;
			case CashScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 408;
				this.match(CashScriptParser.StringLiteral);
				}
				break;
			case CashScriptParser.DateLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 409;
				this.match(CashScriptParser.DateLiteral);
				}
				break;
			case CashScriptParser.HexLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 410;
				this.match(CashScriptParser.HexLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CashScriptParser.RULE_numberLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(CashScriptParser.NumberLiteral);
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 414;
				this.match(CashScriptParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CashScriptParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CashScriptParser.T__53 - 54)) | (1 << (CashScriptParser.T__54 - 54)) | (1 << (CashScriptParser.T__55 - 54)) | (1 << (CashScriptParser.T__56 - 54)) | (1 << (CashScriptParser.T__57 - 54)) | (1 << (CashScriptParser.T__58 - 54)) | (1 << (CashScriptParser.Bytes - 54)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 28:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 24);

		case 10:
			return this.precpred(this._ctx, 16);

		case 11:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\u01A6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x07\x02F\n\x02\f\x02\x0E\x02I\v\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05W" +
		"\n\x05\x03\x06\x05\x06Z\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\be\n\b\x03\b\x03\b\x05\bi\n\b\x03\b\x07\bl\n" +
		"\b\f\b\x0E\bo\v\b\x03\b\x05\br\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x07\t{\n\t\f\t\x0E\t~\v\t\x03\t\x05\t\x81\n\t\x05\t\x83\n\t\x03" +
		"\t\x03\t\x05\t\x87\n\t\x03\n\x03\n\x03\v\x06\v\x8C\n\v\r\v\x0E\v\x8D\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\x99\n\r\f\r\x0E" +
		"\r\x9C\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xA4\n\x0E" +
		"\f\x0E\x0E\x0E\xA7\v\x0E\x03\x0E\x05\x0E\xAA\n\x0E\x05\x0E\xAC\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xB2\n\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x07\x10\xB8\n\x10\f\x10\x0E\x10\xBB\v\x10\x03\x10\x03\x10\x05" +
		"\x10\xBF\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\xCA\n\x11\x03\x12\x03\x12\x05\x12\xCE\n\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\xF8\n\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0115\n\x1D\f" +
		"\x1D\x0E\x1D\u0118\v\x1D\x03\x1D\x05\x1D\u011B\n\x1D\x05\x1D\u011D\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u012B\n\x1E\x03\x1E\x05\x1E\u012E\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u015B" +
		"\n\x1E\f\x1E\x0E\x1E\u015E\v\x1E\x03\x1E\x05\x1E\u0161\n\x1E\x05\x1E\u0163" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0169\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x07\x1E\u0192\n\x1E\f\x1E\x0E\x1E\u0195\v\x1E\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u019E\n \x03!\x03!\x05!\u01A2\n!\x03" +
		"\"\x03\"\x03\"\x02\x02\x03:#\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02\x02\f\x03\x02\x06\f\x04\x02FFII\x03\x02\x1A\x1E\x03" +
		"\x02+,\x03\x02-/\x04\x02,,00\x03\x02\b\v\x03\x0212\x03\x02()\x04\x028" +
		"=BB\x02\u01C9\x02G\x03\x02\x02\x02\x04M\x03\x02\x02\x02\x06R\x03\x02\x02" +
		"\x02\bT\x03\x02\x02\x02\nY\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0E_\x03" +
		"\x02\x02\x02\x10u\x03\x02\x02\x02\x12\x88\x03\x02\x02\x02\x14\x8B\x03" +
		"\x02\x02\x02\x16\x91\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x9F\x03" +
		"\x02\x02\x02\x1C\xAF\x03\x02\x02\x02\x1E\xBE\x03\x02\x02\x02 \xC9\x03" +
		"\x02\x02\x02\"\xCB\x03\x02\x02\x02$\xD4\x03\x02\x02\x02&\xDD\x03\x02\x02" +
		"\x02(\xE2\x03\x02\x02\x02*\xEA\x03\x02\x02\x02,\xF0\x03\x02\x02\x02.\xF9" +
		"\x03\x02\x02\x020\xFC\x03\x02\x02\x022\u0102\x03\x02\x02\x024\u0105\x03" +
		"\x02\x02\x026\u010A\x03\x02\x02\x028\u0110\x03\x02\x02\x02:\u0168\x03" +
		"\x02\x02\x02<\u0196\x03\x02\x02\x02>\u019D\x03\x02\x02\x02@\u019F\x03" +
		"\x02\x02\x02B\u01A3\x03\x02\x02\x02DF\x05\x04\x03\x02ED\x03\x02\x02\x02" +
		"FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02\x02\x02" +
		"IG\x03\x02\x02\x02JK\x05\x0E\b\x02KL\x07\x02\x02\x03L\x03\x03\x02\x02" +
		"\x02MN\x07\x03\x02\x02NO\x05\x06\x04\x02OP\x05\b\x05\x02PQ\x07\x04\x02" +
		"\x02Q\x05\x03\x02\x02\x02RS\x07\x05\x02\x02S\x07\x03\x02\x02\x02TV\x05" +
		"\n\x06\x02UW\x05\n\x06\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02W\t\x03" +
		"\x02\x02\x02XZ\x05\f\x07\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03" +
		"\x02\x02\x02[\\\x07>\x02\x02\\\v\x03\x02\x02\x02]^\t\x02\x02\x02^\r\x03" +
		"\x02\x02\x02_`\x07\r\x02\x02`a\x07I\x02\x02ad\x05\x1A\x0E\x02bc\x07\x0E" +
		"\x02\x02ce\x05\x1A\x0E\x02db\x03\x02\x02\x02de\x03\x02\x02\x02ef\x03\x02" +
		"\x02\x02fh\x07\x0F\x02\x02gi\x05\x14\v\x02hg\x03\x02\x02\x02hi\x03\x02" +
		"\x02\x02im\x03\x02\x02\x02jl\x05 \x11\x02kj\x03\x02\x02\x02lo\x03\x02" +
		"\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02" +
		"\x02\x02pr\x05\x10\t\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02" +
		"\x02\x02st\x07\x10\x02\x02t\x0F\x03\x02\x02\x02uv\x07\x11\x02\x02v\x82" +
		"\x07\x0F\x02\x02w|\x05\x18\r\x02xy\x07\x12\x02\x02y{\x05\x18\r\x02zx\x03" +
		"\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80" +
		"\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x81\x07\x12\x02\x02\x80\x7F\x03" +
		"\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82w\x03" +
		"\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x07" +
		"\x10\x02\x02\x85\x87\x07\x04\x02\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03" +
		"\x02\x02\x02\x87\x11\x03\x02\x02\x02\x88\x89\x07I\x02\x02\x89\x13\x03" +
		"\x02\x02\x02\x8A\x8C\x05 \x11\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x90\x05\x16\f\x02\x90\x15\x03\x02\x02\x02\x91\x92\x07" +
		"\x13\x02\x02\x92\x93\x07\x04\x02\x02\x93\x17\x03\x02\x02\x02\x94\x95\x07" +
		"I\x02\x02\x95\x96\x05\x1A\x0E\x02\x96\x9A\x07\x0F\x02\x02\x97\x99\x05" +
		" \x11\x02\x98\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C\x9A\x03" +
		"\x02\x02\x02\x9D\x9E\x07\x10\x02\x02\x9E\x19\x03\x02\x02\x02\x9F\xAB\x07" +
		"\x14\x02\x02\xA0\xA5\x05\x1C\x0F\x02\xA1\xA2\x07\x12\x02\x02\xA2\xA4\x05" +
		"\x1C\x0F\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03" +
		"\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03" +
		"\x02\x02\x02\xA8\xAA\x07\x12\x02\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03" +
		"\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA0\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x07\x15\x02\x02\xAE\x1B\x03" +
		"\x02\x02\x02\xAF\xB1\x05B\"\x02\xB0\xB2\x05<\x1F\x02\xB1\xB0\x03\x02\x02" +
		"\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x07I\x02" +
		"\x02\xB4\x1D\x03\x02\x02\x02\xB5\xB9\x07\x0F\x02\x02\xB6\xB8\x05 \x11" +
		"\x02\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02" +
		"\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02" +
		"\x02\xBC\xBF\x07\x10\x02\x02\xBD\xBF\x05 \x11\x02\xBE\xB5\x03\x02\x02" +
		"\x02\xBE\xBD\x03\x02\x02\x02\xBF\x1F\x03\x02\x02\x02\xC0\xCA\x05\"\x12" +
		"\x02\xC1\xCA\x05$\x13\x02\xC2\xCA\x05&\x14\x02\xC3\xCA\x05(\x15\x02\xC4" +
		"\xCA\x05*\x16\x02\xC5\xCA\x05,\x17\x02\xC6\xCA\x050\x19\x02\xC7\xCA\x05" +
		"2\x1A\x02\xC8\xCA\x056\x1C\x02\xC9\xC0\x03\x02\x02\x02\xC9\xC1\x03\x02" +
		"\x02\x02\xC9\xC2\x03\x02\x02\x02\xC9\xC3\x03\x02\x02\x02\xC9\xC4\x03\x02" +
		"\x02\x02\xC9\xC5\x03\x02\x02\x02\xC9\xC6\x03\x02\x02\x02\xC9\xC7\x03\x02" +
		"\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA!\x03\x02\x02\x02\xCB\xCD\x05B\"\x02" +
		"\xCC\xCE\x05<\x1F\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
		"\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x07I\x02\x02\xD0\xD1\x07\f\x02\x02\xD1" +
		"\xD2\x05:\x1E\x02\xD2\xD3\x07\x04\x02\x02\xD3#\x03\x02\x02\x02\xD4\xD5" +
		"\x05B\"\x02\xD5\xD6\x07I\x02\x02\xD6\xD7\x07\x12\x02\x02\xD7\xD8\x05B" +
		"\"\x02\xD8\xD9\x07I\x02\x02\xD9\xDA\x07\f\x02\x02\xDA\xDB\x05:\x1E\x02" +
		"\xDB\xDC\x07\x04\x02\x02\xDC%\x03\x02\x02\x02\xDD\xDE\x07I\x02\x02\xDE" +
		"\xDF\x07\f\x02\x02\xDF\xE0\x05:\x1E\x02\xE0\xE1\x07\x04\x02\x02\xE1\'" +
		"\x03\x02\x02\x02\xE2\xE3\x07\x16\x02\x02\xE3\xE4\x07\x14\x02\x02\xE4\xE5" +
		"\x07G\x02\x02\xE5\xE6\x07\b\x02\x02\xE6\xE7\x05:\x1E\x02\xE7\xE8\x07\x15" +
		"\x02\x02\xE8\xE9\x07\x04\x02\x02\xE9)\x03\x02\x02\x02\xEA\xEB\x07\x16" +
		"\x02\x02\xEB\xEC\x07\x14\x02\x02\xEC\xED\x05:\x1E\x02\xED\xEE\x07\x15" +
		"\x02\x02\xEE\xEF\x07\x04\x02\x02\xEF+\x03\x02\x02\x02\xF0\xF1\x07\x17" +
		"\x02\x02\xF1\xF2\x07\x14\x02\x02\xF2\xF3\x05:\x1E\x02\xF3\xF4\x07\x15" +
		"\x02\x02\xF4\xF7\x05\x1E\x10\x02\xF5\xF6\x07\x18\x02\x02\xF6\xF8\x05\x1E" +
		"\x10\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8-\x03\x02" +
		"\x02\x02\xF9\xFA\x07I\x02\x02\xFA\xFB\x058\x1D\x02\xFB/\x03\x02\x02\x02" +
		"\xFC\xFD\x07\x19\x02\x02\xFD\xFE\x07\x14\x02\x02\xFE\xFF\t\x03\x02\x02" +
		"\xFF\u0100\x07\x15\x02\x02\u0100\u0101\x07\x04\x02\x02\u01011\x03\x02" +
		"\x02\x02\u0102\u0103\x054\x1B\x02\u0103\u0104\x07\x04\x02\x02\u01043\x03" +
		"\x02\x02\x02\u0105\u0106\t\x04\x02\x02\u0106\u0107\x07\x14\x02\x02\u0107" +
		"\u0108\t\x03\x02\x02\u0108\u0109\x07\x15\x02\x02\u01095\x03\x02\x02\x02" +
		"\u010A\u010B\x07\x1F\x02\x02\u010B\u010C\x07\x14\x02\x02\u010C\u010D\x07" +
		"I\x02\x02\u010D\u010E\x07\x15\x02\x02\u010E\u010F\x07\x04\x02\x02\u010F" +
		"7\x03\x02\x02\x02\u0110\u011C\x07\x14\x02\x02\u0111\u0116\x05:\x1E\x02" +
		"\u0112\u0113\x07\x12\x02\x02\u0113\u0115\x05:\x1E\x02\u0114\u0112\x03" +
		"\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116" +
		"\u0117\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02" +
		"\x02\x02\u0119\u011B\x07\x12\x02\x02\u011A\u0119\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u0111\x03\x02" +
		"\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E" +
		"\u011F\x07\x15\x02\x02\u011F9\x03\x02\x02\x02\u0120\u0121\b\x1E\x01\x02" +
		"\u0121\u0122\x07\x14\x02\x02\u0122\u0123\x05:\x1E\x02\u0123\u0124\x07" +
		"\x15\x02\x02\u0124\u0169\x03\x02\x02\x02\u0125\u0126\x05B\"\x02\u0126" +
		"\u0127\x07\x14\x02\x02\u0127\u012A\x05:\x1E\x02\u0128\u0129\x07\x12\x02" +
		"\x02\u0129\u012B\x05:\x1E\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B" +
		"\x03\x02\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012E\x07\x12\x02\x02" +
		"\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03" +
		"\x02\x02\x02\u012F\u0130\x07\x15\x02\x02\u0130\u0169\x03\x02\x02\x02\u0131" +
		"\u0169\x05.\x18\x02\u0132\u0133\x07 \x02\x02\u0133\u0134\x07I\x02\x02" +
		"\u0134\u0169\x058\x1D\x02\u0135\u0136\x07#\x02\x02\u0136\u0137\x07!\x02" +
		"\x02\u0137\u0138\x05:\x1E\x02\u0138\u0139\x07\"\x02\x02\u0139\u013A\x07" +
		"$\x02\x02\u013A\u013B\x07I\x02\x02\u013B\u0169\x03\x02\x02\x02\u013C\u013D" +
		"\x07%\x02\x02\u013D\u013E\x07!\x02\x02\u013E\u013F\x05:\x1E\x02\u013F" +
		"\u0140\x07\"\x02\x02\u0140\u0141\x07$\x02\x02\u0141\u0142\x07I\x02\x02" +
		"\u0142\u0169\x03\x02\x02\x02\u0143\u0144\x07#\x02\x02\u0144\u0145\x07" +
		"$\x02\x02\u0145\u0146\x07I\x02\x02\u0146\u0169\x058\x1D\x02\u0147\u0148" +
		"\x07%\x02\x02\u0148\u0149\x07$\x02\x02\u0149\u014A\x07I\x02\x02\u014A" +
		"\u0169\x058\x1D\x02\u014B\u014C\x07&\x02\x02\u014C\u014D\x07$\x02\x02" +
		"\u014D\u014E\x07I\x02\x02\u014E\u0169\x058\x1D\x02\u014F\u0150\x07\'\x02" +
		"\x02\u0150\u0151\x07$\x02\x02\u0151\u0152\x07I\x02\x02\u0152\u0169\x05" +
		"8\x1D\x02\u0153\u0169\x054\x1B\x02\u0154\u0155\t\x05\x02\x02\u0155\u0169" +
		"\x05:\x1E\x10\u0156\u0162\x07!\x02\x02\u0157\u015C\x05:\x1E\x02\u0158" +
		"\u0159\x07\x12\x02\x02\u0159\u015B\x05:\x1E\x02\u015A\u0158\x03\x02\x02" +
		"\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D" +
		"\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02" +
		"\u015F\u0161\x07\x12\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03" +
		"\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0157\x03\x02\x02\x02\u0162" +
		"\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0169\x07\"\x02" +
		"\x02\u0165\u0169\x07H\x02\x02\u0166\u0169\x07I\x02\x02\u0167\u0169\x05" +
		"> \x02\u0168\u0120\x03\x02\x02\x02\u0168\u0125\x03\x02\x02\x02\u0168\u0131" +
		"\x03\x02\x02\x02\u0168\u0132\x03\x02\x02\x02\u0168\u0135\x03\x02\x02\x02" +
		"\u0168\u013C\x03\x02\x02\x02\u0168\u0143\x03\x02\x02\x02\u0168\u0147\x03" +
		"\x02\x02\x02\u0168\u014B\x03\x02\x02\x02\u0168\u014F\x03\x02\x02\x02\u0168" +
		"\u0153\x03\x02\x02\x02\u0168\u0154\x03\x02\x02\x02\u0168\u0156\x03\x02" +
		"\x02\x02\u0168\u0165\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168" +
		"\u0167\x03\x02\x02\x02\u0169\u0193\x03\x02\x02\x02\u016A\u016B\f\x0F\x02" +
		"\x02\u016B\u016C\t\x06\x02\x02\u016C\u0192\x05:\x1E\x10\u016D\u016E\f" +
		"\x0E\x02\x02\u016E\u016F\t\x07\x02\x02\u016F\u0192\x05:\x1E\x0F\u0170" +
		"\u0171\f\r\x02\x02\u0171\u0172\t\b\x02\x02\u0172\u0192\x05:\x1E\x0E\u0173" +
		"\u0174\f\f\x02\x02\u0174\u0175\t\t\x02\x02\u0175\u0192\x05:\x1E\r\u0176" +
		"\u0177\f\v\x02\x02\u0177\u0178\x073\x02\x02\u0178\u0192\x05:\x1E\f\u0179" +
		"\u017A\f\n\x02\x02\u017A\u017B\x07\x06\x02\x02\u017B\u0192\x05:\x1E\v" +
		"\u017C\u017D\f\t\x02\x02\u017D\u017E\x074\x02\x02\u017E\u0192\x05:\x1E" +
		"\n\u017F\u0180\f\b\x02\x02\u0180\u0181\x075\x02\x02\u0181\u0192\x05:\x1E" +
		"\t\u0182\u0183\f\x07\x02\x02\u0183\u0184\x076\x02\x02\u0184\u0192\x05" +
		":\x1E\b\u0185\u0186\f\x1A\x02\x02\u0186\u0187\x07!\x02\x02\u0187\u0188" +
		"\x07A\x02\x02\u0188\u0192\x07\"\x02\x02\u0189\u018A\f\x12\x02\x02\u018A" +
		"\u0192\t\n\x02\x02\u018B\u018C\f\x11\x02\x02\u018C\u018D\x07*\x02\x02" +
		"\u018D\u018E\x07\x14\x02\x02\u018E\u018F\x05:\x1E\x02\u018F\u0190\x07" +
		"\x15\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191\u016A\x03\x02\x02\x02\u0191" +
		"\u016D\x03\x02\x02\x02\u0191\u0170\x03\x02\x02\x02\u0191\u0173\x03\x02" +
		"\x02\x02\u0191\u0176\x03\x02\x02\x02\u0191\u0179\x03\x02\x02\x02\u0191" +
		"\u017C\x03\x02\x02\x02\u0191\u017F\x03\x02\x02\x02\u0191\u0182\x03\x02" +
		"\x02\x02\u0191\u0185\x03\x02\x02\x02\u0191\u0189\x03\x02\x02\x02\u0191" +
		"\u018B\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02\u0193\u0191\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194;\x03\x02\x02\x02\u0195\u0193" +
		"\x03\x02\x02\x02\u0196\u0197\x077\x02\x02\u0197=\x03\x02\x02\x02\u0198" +
		"\u019E\x07?\x02\x02\u0199\u019E\x05@!\x02\u019A\u019E\x07D\x02\x02\u019B" +
		"\u019E\x07E\x02\x02\u019C\u019E\x07F\x02\x02\u019D\u0198\x03\x02\x02\x02" +
		"\u019D\u0199\x03\x02\x02\x02\u019D\u019A\x03\x02\x02\x02\u019D\u019B\x03" +
		"\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E?\x03\x02\x02\x02\u019F" +
		"\u01A1\x07A\x02\x02\u01A0\u01A2\x07@\x02\x02\u01A1\u01A0\x03\x02\x02\x02" +
		"\u01A1\u01A2\x03\x02\x02\x02\u01A2A\x03\x02\x02\x02\u01A3\u01A4\t\v\x02" +
		"\x02\u01A4C\x03\x02\x02\x02%GVYdhmq|\x80\x82\x86\x8D\x9A\xA5\xA9\xAB\xB1" +
		"\xB9\xBE\xC9\xCD\xF7\u0116\u011A\u011C\u012A\u012D\u015C\u0160\u0162\u0168" +
		"\u0191\u0193\u019D\u01A1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CashScriptParser.__ATN) {
			CashScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CashScriptParser._serializedATN));
		}

		return CashScriptParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public contractDefinition(): ContractDefinitionContext {
		return this.getRuleContext(0, ContractDefinitionContext);
	}
	public EOF(): TerminalNode { return this.getToken(CashScriptParser.EOF, 0); }
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext {
		return this.getRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode { return this.getToken(CashScriptParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public parameterList(): ParameterListContext[];
	public parameterList(i: number): ParameterListContext;
	public parameterList(i?: number): ParameterListContext | ParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterListContext);
		} else {
			return this.getRuleContext(i, ParameterListContext);
		}
	}
	public stateScript(): StateScriptContext | undefined {
		return this.tryGetRuleContext(0, StateScriptContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public functions(): FunctionsContext | undefined {
		return this.tryGetRuleContext(0, FunctionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionsContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_functions; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterFunctions) {
			listener.enterFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitFunctions) {
			listener.exitFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitFunctions) {
			return visitor.visitFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainIdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_mainIdentifier; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterMainIdentifier) {
			listener.enterMainIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitMainIdentifier) {
			listener.exitMainIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitMainIdentifier) {
			return visitor.visitMainIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateScriptContext extends ParserRuleContext {
	public stateSeparator(): StateSeparatorContext {
		return this.getRuleContext(0, StateSeparatorContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_stateScript; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterStateScript) {
			listener.enterStateScript(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitStateScript) {
			listener.exitStateScript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitStateScript) {
			return visitor.visitStateScript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateSeparatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_stateSeparator; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterStateSeparator) {
			listener.enterStateSeparator(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitStateSeparator) {
			listener.exitStateSeparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitStateSeparator) {
			return visitor.visitStateSeparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_parameter; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDefinition(): VariableDefinitionContext | undefined {
		return this.tryGetRuleContext(0, VariableDefinitionContext);
	}
	public tupleAssignment(): TupleAssignmentContext | undefined {
		return this.tryGetRuleContext(0, TupleAssignmentContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
	}
	public timeOpStatement(): TimeOpStatementContext | undefined {
		return this.tryGetRuleContext(0, TimeOpStatementContext);
	}
	public requireStatement(): RequireStatementContext | undefined {
		return this.tryGetRuleContext(0, RequireStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public pushDataStatement(): PushDataStatementContext | undefined {
		return this.tryGetRuleContext(0, PushDataStatementContext);
	}
	public pushRefStatement(): PushRefStatementContext | undefined {
		return this.tryGetRuleContext(0, PushRefStatementContext);
	}
	public unsetStatement(): UnsetStatementContext | undefined {
		return this.tryGetRuleContext(0, UnsetStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public modifier(): ModifierContext | undefined {
		return this.tryGetRuleContext(0, ModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_variableDefinition; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterVariableDefinition) {
			listener.enterVariableDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitVariableDefinition) {
			listener.exitVariableDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleAssignmentContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CashScriptParser.Identifier);
		} else {
			return this.getToken(CashScriptParser.Identifier, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_tupleAssignment; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterTupleAssignment) {
			listener.enterTupleAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitTupleAssignment) {
			listener.exitTupleAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitTupleAssignment) {
			return visitor.visitTupleAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_assignStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterAssignStatement) {
			listener.enterAssignStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitAssignStatement) {
			listener.exitAssignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitAssignStatement) {
			return visitor.visitAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeOpStatementContext extends ParserRuleContext {
	public TxVar(): TerminalNode { return this.getToken(CashScriptParser.TxVar, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_timeOpStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterTimeOpStatement) {
			listener.enterTimeOpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitTimeOpStatement) {
			listener.exitTimeOpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitTimeOpStatement) {
			return visitor.visitTimeOpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequireStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_requireStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterRequireStatement) {
			listener.enterRequireStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitRequireStatement) {
			listener.exitRequireStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitRequireStatement) {
			return visitor.visitRequireStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public _ifBlock!: BlockContext;
	public _elseBlock!: BlockContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PushDataStatementContext extends ParserRuleContext {
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.HexLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pushDataStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPushDataStatement) {
			listener.enterPushDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPushDataStatement) {
			listener.exitPushDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPushDataStatement) {
			return visitor.visitPushDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PushRefStatementContext extends ParserRuleContext {
	public pushRef(): PushRefContext {
		return this.getRuleContext(0, PushRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pushRefStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPushRefStatement) {
			listener.enterPushRefStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPushRefStatement) {
			listener.exitPushRefStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPushRefStatement) {
			return visitor.visitPushRefStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PushRefContext extends ParserRuleContext {
	public _op!: Token;
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.HexLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_pushRef; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPushRef) {
			listener.enterPushRef(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPushRef) {
			listener.exitPushRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPushRef) {
			return visitor.visitPushRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsetStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_unsetStatement; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterUnsetStatement) {
			listener.enterUnsetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitUnsetStatement) {
			listener.exitUnsetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitUnsetStatement) {
			return visitor.visitUnsetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesisedContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterParenthesised) {
			listener.enterParenthesised(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitParenthesised) {
			listener.exitParenthesised(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitParenthesised) {
			return visitor.visitParenthesised(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends ExpressionContext {
	public _castable!: ExpressionContext;
	public _size!: ExpressionContext;
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstantiationContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterInstantiation) {
			listener.enterInstantiation(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitInstantiation) {
			listener.exitInstantiation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitInstantiation) {
			return visitor.visitInstantiation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleIndexOpContext extends ExpressionContext {
	public _index!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NumberLiteral(): TerminalNode { return this.getToken(CashScriptParser.NumberLiteral, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterTupleIndexOp) {
			listener.enterTupleIndexOp(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitTupleIndexOp) {
			listener.exitTupleIndexOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitTupleIndexOp) {
			return visitor.visitTupleIndexOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryIntrospectionOpContext extends ExpressionContext {
	public _scope!: Token;
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterUnaryIntrospectionOp) {
			listener.enterUnaryIntrospectionOp(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitUnaryIntrospectionOp) {
			listener.exitUnaryIntrospectionOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitUnaryIntrospectionOp) {
			return visitor.visitUnaryIntrospectionOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntrospectionFunctionCallContext extends ExpressionContext {
	public _scope!: Token;
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterIntrospectionFunctionCall) {
			listener.enterIntrospectionFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitIntrospectionFunctionCall) {
			listener.exitIntrospectionFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitIntrospectionFunctionCall) {
			return visitor.visitIntrospectionFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PushRefExpressionContext extends ExpressionContext {
	public pushRef(): PushRefContext {
		return this.getRuleContext(0, PushRefContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterPushRefExpression) {
			listener.enterPushRefExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitPushRefExpression) {
			listener.exitPushRefExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitPushRefExpression) {
			return visitor.visitPushRefExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOpContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterUnaryOp) {
			listener.enterUnaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitUnaryOp) {
			listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterBinaryOp) {
			listener.enterBinaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitBinaryOp) {
			listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullaryOpContext extends ExpressionContext {
	public NullaryOp(): TerminalNode { return this.getToken(CashScriptParser.NullaryOp, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterNullaryOp) {
			listener.enterNullaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitNullaryOp) {
			listener.exitNullaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitNullaryOp) {
			return visitor.visitNullaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(CashScriptParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_modifier; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.StringLiteral, 0); }
	public DateLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.DateLiteral, 0); }
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.HexLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode { return this.getToken(CashScriptParser.NumberLiteral, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(CashScriptParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public Bytes(): TerminalNode { return this.getToken(CashScriptParser.Bytes, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CashScriptParser.RULE_typeName; }
	// @Override
	public enterRule(listener: CashScriptListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CashScriptListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CashScriptVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


