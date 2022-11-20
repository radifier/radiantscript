import { PrimitiveType, ArrayType, BytesType } from '@cashscript/utils';
import { SymbolTable, Symbol } from './SymbolTable.js';

export const NumberUnit: { [index:string] : number } = {
  SATOSHIS: 1,
  SATS: 1,
  FINNEY: 10,
  BITS: 100,
  BITCOIN: 100000000,
  SECONDS: 1,
  MINUTES: 60,
  HOURS: 3600,
  DAYS: 86400,
  WEEKS: 604800,
};

export enum GlobalFunction {
  ABS = 'abs',
  MIN = 'min',
  MAX = 'max',
  WITHIN = 'within',
  RIPEMD160 = 'ripemd160',
  SHA1 = 'sha1',
  SHA256 = 'sha256',
  HASH160 = 'hash160',
  HASH256 = 'hash256',
  CHECKSIG = 'checkSig',
  CHECKMULTISIG = 'checkMultiSig',
  CHECKDATASIG = 'checkDataSig',
  SHA512_256 = 'sha512_256',
  HASH512_256 = 'hash512_256',
  REFHASHVALUESUM_UTXOS = 'tx.inputs.refHashValueSum',
  REFHASHVALUESUM_OUTPUTS = 'tx.outputs.refHashValueSum',
  REFTYPE_UTXO = 'tx.inputs.refType',
  REFTYPE_OUTPUT = 'tx.outputs.refType',
  REFVALUESUM_UTXOS = 'tx.inputs.refValueSum',
  REFVALUESUM_OUTPUTS = 'tx.outputs.refValueSum',
  REFOUTPUTCOUNT_UTXOS = 'tx.inputs.refOutputCount',
  REFOUTPUTCOUNT_OUTPUTS = 'tx.outputs.refOutputCount',
  REFOUTPUTCOUNTZEROVALUED_UTXOS = 'tx.inputs.zeroValue.refOutputCount',
  REFOUTPUTCOUNTZEROVALUED_OUTPUTS = 'tx.outputs.zeroValue.refOutputCount',
  CODESCRIPTHASHVALUESUM_UTXOS = 'tx.inputs.codeScriptValueSum',
  CODESCRIPTHASHVALUESUM_OUTPUTS = 'tx.outputs.codeScriptValueSum',
  CODESCRIPTHASHOUTPUTCOUNT_UTXOS = 'tx.inputs.codeScriptCount',
  CODESCRIPTHASHOUTPUTCOUNT_OUTPUTS = 'tx.outputs.codeScriptCount',
  CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_UTXOS = 'tx.inputs.zeroValue.codeScriptCount',
  CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_OUTPUTS = 'tx.outputs.zeroValue.codeScriptCount',
}

export enum TimeOp {
  CHECK_SEQUENCE = 'tx.age',
  CHECK_LOCKTIME = 'tx.time',
}

export enum PushRefOp {
  PUSHINPUTREF = 'pushInputRef',
  REQUIREINPUTREF = 'requireInputRef',
  DISALLOWPUSHINPUTREF = 'disallowPushInputRef',
  DISALLOWPUSHINPUTREFSIBLING = 'disallowPushInputRefSibling',
  PUSHINPUTREFSINGLETON = 'pushInputRefSingleton',
}

export enum Class {
  LOCKING_BYTECODE_P2PKH = 'LockingBytecodeP2PKH',
  LOCKING_BYTECODE_NULLDATA = 'LockingBytecodeNullData',
}

export enum Modifier {
  CONSTANT = 'constant',
}

export const GLOBAL_SYMBOL_TABLE = new SymbolTable();

// Classes
GLOBAL_SYMBOL_TABLE.set(
  Symbol.class(Class.LOCKING_BYTECODE_P2PKH, new BytesType(25), [new BytesType(20)]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.class(Class.LOCKING_BYTECODE_NULLDATA, new BytesType(), [new ArrayType(new BytesType())]),
);

// Global functions
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.ABS, PrimitiveType.INT, [PrimitiveType.INT]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.MIN, PrimitiveType.INT, [PrimitiveType.INT, PrimitiveType.INT]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.MAX, PrimitiveType.INT, [PrimitiveType.INT, PrimitiveType.INT]),
);
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.WITHIN, PrimitiveType.BOOL,
  [PrimitiveType.INT, PrimitiveType.INT, PrimitiveType.INT],
));
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.RIPEMD160, new BytesType(20), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.SHA1, new BytesType(20), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.SHA256, new BytesType(32), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.HASH160, new BytesType(20), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.HASH256, new BytesType(32), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CHECKSIG, PrimitiveType.BOOL,
  [PrimitiveType.SIG, PrimitiveType.PUBKEY],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CHECKMULTISIG, PrimitiveType.BOOL,
  [new ArrayType(PrimitiveType.SIG), new ArrayType(PrimitiveType.PUBKEY)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CHECKDATASIG, PrimitiveType.BOOL,
  [PrimitiveType.DATASIG, new BytesType(), PrimitiveType.PUBKEY],
));
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.SHA512_256, new BytesType(32), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(
  Symbol.function(GlobalFunction.HASH512_256, new BytesType(32), [PrimitiveType.ANY]),
);
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFHASHVALUESUM_UTXOS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFHASHVALUESUM_OUTPUTS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFTYPE_UTXO, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFTYPE_OUTPUT, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFVALUESUM_UTXOS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFVALUESUM_OUTPUTS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFOUTPUTCOUNT_UTXOS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFOUTPUTCOUNT_OUTPUTS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFOUTPUTCOUNTZEROVALUED_UTXOS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.REFOUTPUTCOUNTZEROVALUED_OUTPUTS, PrimitiveType.INT, [new BytesType(36)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHVALUESUM_UTXOS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHVALUESUM_OUTPUTS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHOUTPUTCOUNT_UTXOS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHOUTPUTCOUNT_OUTPUTS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_UTXOS, PrimitiveType.INT, [new BytesType(32)],
));
GLOBAL_SYMBOL_TABLE.set(Symbol.function(
  GlobalFunction.CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_OUTPUTS,
  PrimitiveType.INT, [new BytesType(32)],
));
