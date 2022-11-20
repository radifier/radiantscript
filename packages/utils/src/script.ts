import {
  OpcodesBCH,
  encodeDataPush,
  parseBytecode,
  serializeAuthenticationInstructions,
  AuthenticationInstructions,
  hexToBin,
  disassembleBytecodeBCH,
  flattenBinArray,
} from '@bitauth/libauth';
import { decodeInt, encodeInt } from './data.js';
import OptimisationsEquivFile from './cashproof-optimisations.js';

export const Op = OpcodesBCH;
export type Op = number;
export type OpOrData = Op | Uint8Array;
export type Script = OpOrData[];

// TODO: Replace this when these opcodes are in Libauth
export enum IntrospectionOp {
  OP_INPUTINDEX = 192,
  OP_ACTIVEBYTECODE = 193,
  OP_TXVERSION = 194,
  OP_TXINPUTCOUNT = 195,
  OP_TXOUTPUTCOUNT = 196,
  OP_TXLOCKTIME = 197,
  OP_UTXOVALUE = 198,
  OP_UTXOBYTECODE = 199,
  OP_OUTPOINTTXHASH = 200,
  OP_OUTPOINTINDEX = 201,
  OP_INPUTBYTECODE = 202,
  OP_INPUTSEQUENCENUMBER = 203,
  OP_OUTPUTVALUE = 204,
  OP_OUTPUTBYTECODE = 205,
}

export const introspectionOpMapping: any = {
  OP_INPUTINDEX: 'OP_UNKNOWN192',
  OP_ACTIVEBYTECODE: 'OP_UNKNOWN193',
  OP_TXVERSION: 'OP_UNKNOWN194',
  OP_TXINPUTCOUNT: 'OP_UNKNOWN195',
  OP_TXOUTPUTCOUNT: 'OP_UNKNOWN196',
  OP_TXLOCKTIME: 'OP_UNKNOWN197',
  OP_UTXOVALUE: 'OP_UNKNOWN198',
  OP_UTXOBYTECODE: 'OP_UNKNOWN199',
  OP_OUTPOINTTXHASH: 'OP_UNKNOWN200',
  OP_OUTPOINTINDEX: 'OP_UNKNOWN201',
  OP_INPUTBYTECODE: 'OP_UNKNOWN202',
  OP_INPUTSEQUENCENUMBER: 'OP_UNKNOWN203',
  OP_OUTPUTVALUE: 'OP_UNKNOWN204',
  OP_OUTPUTBYTECODE: 'OP_UNKNOWN205',
};

export const reverseIntrospectionOpMapping = Object.fromEntries(
  Object.entries(introspectionOpMapping).map(([k, v]) => ([v, k])),
);

export enum RadiantOp {
  OP_STATESEPARATOR = 0xbd,
  OP_STATESEPARATORINDEX_UTXO = 0xbe,
  OP_STATESEPARATORINDEX_OUTPUT = 0xbf,

  OP_SHA512_256 = 0xce,
  OP_HASH512_256 = 0xcf,

  OP_PUSHINPUTREF = 0xd0,
  OP_REQUIREINPUTREF = 0xd1,
  OP_DISALLOWPUSHINPUTREF = 0xd2,
  OP_DISALLOWPUSHINPUTREFSIBLING = 0xd3,

  OP_REFHASHDATASUMMARY_UTXO = 0xd4,
  OP_REFHASHVALUESUM_UTXOS = 0xd5,
  OP_REFHASHDATASUMMARY_OUTPUT = 0xd6,
  OP_REFHASHVALUESUM_OUTPUTS = 0xd7,

  OP_PUSHINPUTREFSINGLETON = 0xd8,
  OP_REFTYPE_UTXO = 0xd9,
  OP_REFTYPE_OUTPUT = 0xda,

  OP_REFVALUESUM_UTXOS = 0xdb,
  OP_REFVALUESUM_OUTPUTS = 0xdc,
  OP_REFOUTPUTCOUNT_UTXOS = 0xdd,
  OP_REFOUTPUTCOUNT_OUTPUTS = 0xde,
  OP_REFOUTPUTCOUNTZEROVALUED_UTXOS = 0xdf,
  OP_REFOUTPUTCOUNTZEROVALUED_OUTPUTS = 0xe0,
  OP_REFDATASUMMARY_UTXO = 0xe1,
  OP_REFDATASUMMARY_OUTPUT = 0xe2,

  OP_CODESCRIPTHASHVALUESUM_UTXOS = 0xe3,
  OP_CODESCRIPTHASHVALUESUM_OUTPUTS = 0xe4,
  OP_CODESCRIPTHASHOUTPUTCOUNT_UTXOS = 0xe5,
  OP_CODESCRIPTHASHOUTPUTCOUNT_OUTPUTS = 0xe6,
  OP_CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_UTXOS = 0xe7,
  OP_CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_OUTPUTS = 0xe8,
  OP_CODESCRIPTBYTECODE_UTXO = 0xe9,
  OP_CODESCRIPTBYTECODE_OUTPUT = 0xea,
  OP_STATESCRIPTBYTECODE_UTXO = 0xeb,
  OP_STATESCRIPTBYTECODE_OUTPUT = 0xec,
}

const radiantOpMapping: any = Object.fromEntries(Object.entries(RadiantOp).map(([k, v]) => ([k, `OP_UNKNOWN${v}`])));

export const reverseRadiantOpMapping = Object.fromEntries(
  Object.entries(radiantOpMapping).map(([k, v]) => ([v, k])),
);

export function scriptToAsm(script: Script): string {
  return bytecodeToAsm(scriptToBytecode(script));
}

export function asmToScript(asm: string): Script {
  return bytecodeToScript(asmToBytecode(asm));
}

export function scriptToBytecode(script: Script): Uint8Array {
  // Convert the script elements to AuthenticationInstructions
  const instructions = script.map((opOrData) => {
    if (typeof opOrData === 'number') {
      return { opcode: opOrData };
    }

    return parseBytecode(encodeDataPush(opOrData))[0];
  });

  // Convert the AuthenticationInstructions to bytecode
  return serializeAuthenticationInstructions(instructions);
}

export function bytecodeToScript(bytecode: Uint8Array): Script {
  // Convert the bytecode to AuthenticationInstructions
  const instructions = parseBytecode(bytecode) as AuthenticationInstructions;

  // Convert the AuthenticationInstructions to script elements
  const script = instructions.map((instruction) => (
    'data' in instruction ? instruction.data : instruction.opcode
  ));

  return script;
}

export function asmToBytecode(asm: string): Uint8Array {
  // Remove any duplicate whitespace
  asm = asm.replace(/\s+/g, ' ').trim();

  // Replace introspection ops with OP_UNKNOWN... so Libauth gets it
  asm = asm.split(' ').map((token) => introspectionOpMapping[token] ?? radiantOpMapping[token] ?? token).join(' ');

  // Convert the ASM tokens to AuthenticationInstructions
  const instructions = asm.split(' ').map((token) => {
    if (token.startsWith('OP_')) {
      return { opcode: Op[token as keyof typeof Op] };
    }

    return parseBytecode(encodeDataPush(hexToBin(token)))[0];
  });

  // Convert the AuthenticationInstructions to bytecode
  return serializeAuthenticationInstructions(instructions);
}

export function bytecodeToAsm(bytecode: Uint8Array): string {
  // Convert the bytecode to libauth's ASM format
  let asm = disassembleBytecodeBCH(bytecode);

  // COnvert libauth's ASM format to BITBOX's
  asm = asm.replace(/OP_PUSHBYTES_[^\s]+/g, '');
  asm = asm.replace(/OP_PUSHDATA[^\s]+ [^\s]+/g, '');
  asm = asm.replace(/(^|\s)0x/g, ' ');

  // Replace OP_UNKNOWN... with the correct ops
  asm = asm.split(' ').map((token) => reverseIntrospectionOpMapping[token] ?? reverseRadiantOpMapping[token] ?? token).join(' ');

  // Remove any duplicate whitespace
  asm = asm.replace(/\s+/g, ' ').trim();

  return asm;
}

export function countOpcodes(script: Script): number {
  return script
    .filter((opOrData) => typeof opOrData === 'number')
    .filter((op) => op > Op.OP_16)
    .length;
}

export function calculateBytesize(script: Script): number {
  return scriptToBytecode(script).byteLength;
}

// For encoding OP_RETURN data (doesn't require BIP62.3 / MINIMALDATA)
export function encodeNullDataScript(chunks: OpOrData[]): Uint8Array {
  return flattenBinArray(
    chunks.map((chunk) => {
      if (typeof chunk === 'number') {
        return new Uint8Array([chunk]);
      }

      const pushdataOpcode = getPushDataOpcode(chunk);
      return new Uint8Array([...pushdataOpcode, ...chunk]);
    }),
  );
}

function getPushDataOpcode(data: Uint8Array): Uint8Array {
  const { byteLength } = data;

  if (byteLength === 0) return Uint8Array.from([0x4c, 0x00]);
  if (byteLength < 76) return Uint8Array.from([byteLength]);
  if (byteLength < 256) return Uint8Array.from([0x4c, byteLength]);
  throw Error('Pushdata too large');
}

/**
 * When cutting out the tx.bytecode preimage variable, the compiler does not know
 * the size of the final redeem scrip yet, because the constructor parameters still
 * need to get added. Because of this it does not know whether the VarInt is 1 or 3
 * bytes. During compilation, an OP_NOP is added at the spot where the bytecode is
 * cut out. This function replaces that OP_NOP and adds either 1 or 3 to the cut to
 * additionally cut off the VarInt.
 *
 * @param script incomplete redeem script
 * @returns completed redeem script
 */
export function replaceBytecodeNop(script: Script): Script {
  const index = script.findIndex((op) => op === Op.OP_NOP);
  if (index < 0) return script;

  // Remove the OP_NOP
  script.splice(index, 1);

  // Retrieve size of current OP_SPLIT
  let oldCut = script[index];
  if (oldCut instanceof Uint8Array) {
    oldCut = decodeInt(oldCut);
  } else if (oldCut === Op.OP_0) {
    oldCut = 0;
  } else if (oldCut >= Op.OP_1 && oldCut <= Op.OP_16) {
    oldCut -= 80;
  } else {
    return script;
  }

  // Update the old OP_SPLIT by adding either 1 or 3 to it
  script[index] = encodeInt(oldCut + 1);
  const bytecodeSize = calculateBytesize(script);
  if (bytecodeSize > 252) {
    script[index] = encodeInt(oldCut + 3);
  }

  // Minimally encode
  return asmToScript(scriptToAsm(script));
}

export function generateRedeemScript(baseScript: Script, encodedArgs: Script): Script {
  return replaceBytecodeNop([...encodedArgs, ...baseScript]);
}

export function optimiseBytecode(script: Script, runs: number = 1000): Script {
  const optimisations = OptimisationsEquivFile
    // Split by line and filter all line comments (#)
    .split('\n')
    .map((equiv) => equiv.trim())
    .filter((equiv) => !equiv.startsWith('#'))
    // Join back the lines, and split on semicolon
    .join('')
    .split(';')
    // Parse all optimisations in .equiv file
    .map((equiv) => equiv.trim())
    .map((equiv) => equiv.split('<=>').map((part) => part.trim()))
    .filter((equiv) => equiv.length === 2);

  for (let i = 0; i < runs; i += 1) {
    const oldScript = script;
    script = replaceOps(script, optimisations);

    // Break on fixed point
    if (scriptToAsm(oldScript) === scriptToAsm(script)) break;
  }

  return script;
}

function replaceOps(script: Script, optimisations: string[][]): Script {
  let asm = scriptToAsm(script);

  // Apply all optimisations in the cashproof file
  optimisations.forEach(([pattern, replacement]) => {
    asm = asm.replace(new RegExp(pattern, 'g'), replacement);
  });

  // Add optimisations that are not compatible with CashProof
  // CashProof can't prove OP_IF without parameters
  asm = asm.replace(/OP_NOT OP_IF/g, 'OP_NOTIF');
  // CashProof can't prove OP_CHECKMULTISIG without specifying N
  asm = asm.replace(/OP_CHECKMULTISIG OP_VERIFY/g, 'OP_CHECKMULTISIGVERIFY');
  // CashProof can't prove bitwise operators
  asm = asm.replace(/OP_SWAP OP_AND/g, 'OP_AND');
  asm = asm.replace(/OP_SWAP OP_OR/g, 'OP_OR');
  asm = asm.replace(/OP_SWAP OP_XOR/g, 'OP_XOR');
  asm = asm.replace(/OP_DUP OP_AND/g, '');
  asm = asm.replace(/OP_DUP OP_OR/g, '');

  // Remove any double spaces as a result of opcode removal
  asm = asm.replace(/\s+/g, ' ').trim();

  return asmToScript(asm);
}
