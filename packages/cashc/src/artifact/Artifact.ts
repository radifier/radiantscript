import {
  AbiFunction, Artifact, Script, scriptToAsm,
} from '@cashscript/utils';
import { version } from '../index.js';
import { Ast } from '../ast/AST.js';
import { Modifier } from '../ast/Globals.js';

const scryptTypeMap: { [key: string]: string } = {
  bytes20: 'Ripemd160',
  bytes32: 'Sha256',
  sig: 'Sig',
  pubkey: 'PubKey',
};

const mapToScryptType = (type: string): string => {
  if (scryptTypeMap[type]) {
    return scryptTypeMap[type];
  }
  if (type.startsWith('bytes')) {
    return type.replace(/\d+/, '');
  }
  return type;
};

export function generateArtifact(ast: Ast, script: Script): Artifact {
  const { contract } = ast;

  const constructorParams = contract.parameters
    .map((parameter) => ({
      name: parameter.name.replace(/^\$/, ''),
      type: mapToScryptType(parameter.type.toString()),
    }));

  const scriptParams = contract.functionParameters.reverse()
    .map((parameter) => ({
      name: parameter.name.replace(/^\$/, ''),
      type: mapToScryptType(parameter.type.toString()),
    }));

  const abi: AbiFunction[] = contract.functions.map((func, index) => ({
    type: 'function',
    name: func.name,
    index,
    // Parameters are reversed to match sCrypt behaviour
    params: [...func.parameters.reverse().map((parameter) => ({
      name: parameter.name,
      type: mapToScryptType(parameter.type.toString()),
    })), ...scriptParams],
  }));

  abi.push({
    type: 'constructor',
    params: constructorParams,
  });

  const mutableParams = contract.parameters
    .filter((p) => p.modifier !== Modifier.CONSTANT)
    .map((p) => `$${p.name.replace(/^\$/, '')}`)
    .reverse()
    .join(' ');

  const asm = `${mutableParams} ${scriptToAsm(script)}`.trim();

  return {
    version: 9,
    compilerVersion: `radc ${version}`,
    contract: contract.name,
    abi,
    asm,
  };
}
