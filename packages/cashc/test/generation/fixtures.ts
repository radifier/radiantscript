import { Artifact } from '@cashscript/utils';

interface Fixture {
  fn: string,
  artifact: Artifact,
}

export const fixtures: Fixture[] = [
  {
    fn: 'p2pkh.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'P2PKH',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [{ name: 's', type: 'Sig' }, { name: 'pk', type: 'PubKey' }],
        },
        {
          type: 'constructor', params: [{ name: 'pkh', type: 'Ripemd160' }],
        },
      ],
      asm: 'OP_DUP OP_HASH160 $pkh OP_EQUALVERIFY OP_CHECKSIG',
    },
  },
  {
    fn: 'reassignment.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Reassignment',
      abi: [
        {
          type: 'function', index: 0, name: 'hello', params: [{ name: 'pk', type: 'PubKey' }, { name: 's', type: 'Sig' }],
        },
        { type: 'constructor', params: [{ name: '_x', type: 'int' }, { name: '_y', type: 'string' }] },
      ],
      asm:
        '$_y $_x '
        // int myVariable = 10 - 4
        + 'OP_10 OP_4 OP_SUB '
        // int myOtherVariable = 20 + myVariable % 2
        + '14 OP_SWAP OP_2 OP_MOD OP_ADD '
        // require(myOtherVariable > x)
        + 'OP_LESSTHAN OP_VERIFY '
        // string hw = "Hello World"
        + '48656c6c6f20576f726c64 '
        // hw = hw + y
        + 'OP_DUP OP_ROT OP_CAT '
        // require(ripemd160(pk) == ripemd160(hw))
        + 'OP_3 OP_PICK OP_RIPEMD160 OP_SWAP OP_RIPEMD160 OP_EQUALVERIFY '
        // require(checkSig(s, pk))
        + 'OP_SWAP OP_ROT OP_CHECKSIG '
        + 'OP_NIP',
    },
  },
  {
    fn: 'if_statement.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'IfStatement',
      abi: [
        {
          type: 'function', index: 0, name: 'hello', params: [{ name: 'a', type: 'int' }, { name: 'b', type: 'int' }],
        },
        {
          type: 'constructor', params: [{ name: 'x', type: 'int' }, { name: 'y', type: 'int' }],
        },
      ],
      asm:
        '$y $x '
        // int d = a + b
        + 'OP_2OVER OP_ADD '
        // d = d - a
        + 'OP_DUP OP_5 OP_PICK OP_SUB '
        // if (d == x - 2) {
        + 'OP_DUP OP_3 OP_ROLL OP_2 OP_SUB OP_NUMEQUAL OP_IF '
        // int c = d + b
        + 'OP_DUP OP_4 OP_PICK OP_ADD '
        // d = a + c
        + 'OP_5 OP_PICK OP_OVER OP_ADD OP_ROT OP_DROP OP_SWAP '
        // require(c > d)
        + 'OP_2DUP OP_LESSTHAN OP_VERIFY '
        // } else {
        + 'OP_DROP OP_ELSE '
        // require(d == a) }
        + 'OP_DUP OP_5 OP_PICK OP_NUMEQUALVERIFY OP_ENDIF '
        // d = d + a
        + 'OP_DUP OP_5 OP_ROLL OP_ADD '
        // require(d == y)
        + 'OP_3 OP_ROLL OP_NUMEQUAL '
        + 'OP_NIP OP_NIP OP_NIP',
    },
  },
  {
    fn: 'multifunction.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'MultiFunction',
      abi: [
        {
          type: 'function', index: 0, name: 'transfer', params: [{ name: 'recipientSig', type: 'Sig' }],
        },
        {
          type: 'function', index: 1, name: 'timeout', params: [{ name: 'senderSig', type: 'Sig' }],
        },
        { type: 'constructor', params: [{ name: 'sender', type: 'PubKey' }, { name: 'recipient', type: 'PubKey' }, { name: 'timeout', type: 'int' }] },
      ],
      asm:
        // function transfer
        'OP_DUP OP_0 OP_NUMEQUAL OP_IF '
        // require(checkSig(recipientSig, recipient))
        + 'OP_SWAP $recipient OP_CHECKSIG '
        + 'OP_NIP OP_ELSE '
        // function timeout
        + 'OP_1 OP_NUMEQUALVERIFY '
        // require(checkSig(senderSig, sender))
        + '$sender OP_CHECKSIGVERIFY '
        // require(tx.time >= timeout)
        + '$timeout OP_CHECKLOCKTIMEVERIFY OP_DROP OP_1 '
        + 'OP_ENDIF',
    },
  },
  {
    fn: 'multifunction_if_statements.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'MultiFunctionIfStatements',
      abi: [
        {
          type: 'function', index: 0, name: 'transfer', params: [{ name: 'a', type: 'int' }, { name: 'b', type: 'int' }],
        },
        {
          type: 'function', index: 1, name: 'timeout', params: [{ name: 'b', type: 'int' }],
        },
        { type: 'constructor', params: [{ name: 'x', type: 'int' }, { name: 'y', type: 'int' }] },
      ],
      asm:
        '$y $x '
        // function transfer
        + 'OP_2 OP_PICK OP_0 OP_NUMEQUAL OP_IF '
        // int d = a + b
        + 'OP_4 OP_PICK OP_4 OP_PICK OP_ADD '
        // d = d - a
        + 'OP_DUP OP_6 OP_PICK OP_SUB '
        // if (d == x) {
        + 'OP_DUP OP_3 OP_ROLL OP_NUMEQUAL OP_IF '
        // int c = d + b
        + 'OP_DUP OP_5 OP_PICK OP_ADD '
        // d = a + c
        + 'OP_6 OP_PICK OP_OVER OP_ADD OP_ROT OP_DROP OP_SWAP '
        // require(c > d)
        + 'OP_2DUP OP_LESSTHAN OP_VERIFY '
        // } else {
        + 'OP_DROP OP_ELSE '
        // d = a }
        + 'OP_5 OP_PICK OP_NIP OP_ENDIF '
        // d = d + a
        + 'OP_DUP OP_6 OP_ROLL OP_ADD '
        // require(d == y)
        + 'OP_3 OP_ROLL OP_NUMEQUALVERIFY '
        + 'OP_2DROP OP_2DROP OP_1 OP_ELSE '
        // function timeout
        + 'OP_ROT OP_1 OP_NUMEQUALVERIFY '
        // int d = b
        + 'OP_2 OP_PICK '
        // d = d + 2
        + 'OP_DUP OP_2 OP_ADD '
        // if (d == x) {
        + 'OP_DUP OP_3 OP_ROLL OP_NUMEQUAL OP_IF '
        // int c = d + b
        + 'OP_DUP OP_4 OP_PICK OP_ADD '
        // d = c + d
        + 'OP_2DUP OP_ADD OP_ROT OP_DROP OP_SWAP '
        // require(c > d) }
        + 'OP_2DUP OP_LESSTHAN OP_VERIFY '
        + 'OP_DROP OP_ENDIF '
        // d = b
        + ''
        // require(d == y)
        + 'OP_2SWAP OP_NUMEQUAL '
        + 'OP_NIP OP_NIP OP_ENDIF',
    },
  },
  {
    fn: '2_of_3_multisig.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'MultiSig',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [{ name: 's1', type: 'Sig' }, { name: 's2', type: 'Sig' }],
        },
        { type: 'constructor', params: [{ name: 'pk1', type: 'PubKey' }, { name: 'pk2', type: 'PubKey' }, { name: 'pk3', type: 'PubKey' }] },
      ],
      asm:
        // require(checkMultiSig([s1, s2], [pk1, pk2, pk3]))
        'OP_0 OP_ROT OP_ROT OP_2 $pk1 $pk2 $pk3 OP_3 OP_CHECKMULTISIG'
    },
  },
  {
    fn: 'split_size.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'SplitSize',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [],
        },
        { type: 'constructor', params: [{ name: '_b', type: 'bytes' }] },
      ],
      asm:
        '$_b '
        // bytes x = b.split(b.length / 2)[1]
        + 'OP_DUP OP_DUP OP_SIZE OP_NIP OP_2 OP_DIV OP_SPLIT OP_NIP '
        // require(x != b)
        + 'OP_2DUP OP_EQUAL OP_NOT OP_VERIFY '
        // bytes x = b.split(b.length / 2)[1]
        + 'OP_SWAP OP_4 OP_SPLIT OP_DROP OP_EQUAL OP_NOT',
    },
  },
  {
    fn: 'cast_hash_checksig.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'CastHashChecksig',
      abi: [
        {
          type: 'function', index: 0, name: 'hello', params: [{ name: 'pk', type: 'PubKey' }, { name: 's', type: 'Sig' }],
        },
        { type: 'constructor', params: [] },
      ],
      asm:
        // require((ripemd160(bytes(pk)) == hash160(0x0) == !true));
        'OP_OVER OP_RIPEMD160 OP_0 OP_HASH160 OP_EQUAL OP_1 OP_NOT OP_EQUALVERIFY OP_SWAP '
        // require(checkSig(s, pk));
        + 'OP_CHECKSIG',
    },
  },
  {
    fn: 'hodl_vault.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'HodlVault',
      abi: [
        {
          type: 'function',
          index: 0,
          name: 'spend',
          params: [
            { name: 'ownerSig', type: 'Sig' },
            { name: 'oracleSig', type: 'datasig' },
            { name: 'oracleMessage', type: 'bytes' },
          ],
        },
        {
          type: 'constructor',
          params: [
            { name: '_ownerPk', type: 'PubKey' },
            { name: '_oraclePk', type: 'PubKey' },
            { name: '_minBlock', type: 'int' },
            { name: '_priceTarget', type: 'int' },
          ],
        },
      ],
      asm:
        '$_priceTarget $_minBlock $_oraclePk $_ownerPk '
        // bytes4 blockHeightBin, bytes4 priceBin = oracleMessage.split(4);
        + 'OP_4 OP_PICK OP_4 OP_SPLIT '
        // int blockHeight = int(blockHeightBin);
        + 'OP_SWAP OP_BIN2NUM '
        // int price = int(priceBin);
        + 'OP_SWAP OP_BIN2NUM '
        // require(blockHeight >= minBlock);
        + 'OP_OVER OP_5 OP_ROLL OP_GREATERTHANOREQUAL OP_VERIFY '
        // require(tx.time >= blockHeight);
        + 'OP_SWAP OP_CHECKLOCKTIMEVERIFY OP_DROP '
        // require(price >= priceTarget);
        + 'OP_3 OP_ROLL OP_GREATERTHANOREQUAL OP_VERIFY '
        // require(checkDataSig(oracleSig, oracleMessage, oraclePk));
        + 'OP_2SWAP OP_3 OP_ROLL OP_CHECKDATASIGVERIFY '
        // require(checkSig(ownerSig, ownerPk));
        + 'OP_CHECKSIG',
    },
  },
  {
    fn: 'deep_replace.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'DeepReplace',
      abi: [
        {
          type: 'function', index: 0, name: 'hello', params: [],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm:
        // int a = 1; int b = 2; int c = 3; int d = 4; int e = 5; int f = 6;
        'OP_1 OP_2 OP_3 OP_4 OP_5 OP_6 '
        // if (a < 3) {
        + 'OP_5 OP_PICK OP_3 OP_LESSTHAN OP_IF '
        // a = 3 }
        + 'OP_3 OP_6 OP_ROLL OP_DROP OP_SWAP OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP '
        + 'OP_TOALTSTACK OP_SWAP OP_TOALTSTACK OP_SWAP OP_FROMALTSTACK OP_FROMALTSTACK '
        + 'OP_FROMALTSTACK OP_FROMALTSTACK OP_ENDIF '
        // require(a > b + c + d + e + f);
        + 'OP_2ROT OP_5 OP_ROLL OP_ADD OP_4 OP_ROLL OP_ADD '
        + 'OP_3 OP_ROLL OP_ADD OP_ROT OP_ADD OP_GREATERTHAN',
    },
  },
  {
    fn: 'bounded_bytes.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'BoundedBytes',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [{ name: 'b', type: 'bytes' }, { name: 'i', type: 'int' }],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm: 'OP_4 OP_NUM2BIN OP_EQUAL', // require(b == bytes4(i))
    },
  },
  {
    fn: 'covenant.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Covenant',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [],
        },
        {
          type: 'constructor',
          params: [
            {
              name: 'requiredVersion',
              type: 'int',
            },
          ],
        },
      ],
      asm:
        // require(tx.version == requiredVersion)
        'OP_TXVERSION $requiredVersion OP_NUMEQUALVERIFY '
        // require(tx.bytecode == 0x00)
        + 'OP_ACTIVEBYTECODE 00 OP_EQUAL',
    },
  },
  {
    fn: 'covenant_all_fields.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Covenant',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm:
        // require(tx.version == 2)
        'OP_TXVERSION OP_2 OP_NUMEQUALVERIFY '
        // require(tx.locktime == 0)
        + 'OP_TXLOCKTIME OP_0 OP_NUMEQUALVERIFY '
        // require(tx.inputs.length == 1)
        + 'OP_TXINPUTCOUNT OP_1 OP_NUMEQUALVERIFY '
        // require(tx.outputs.length == 1)
        + 'OP_TXOUTPUTCOUNT OP_1 OP_NUMEQUALVERIFY '
        // require(this.activeInputIndex == 0)
        + 'OP_INPUTINDEX OP_0 OP_NUMEQUALVERIFY '
        // require(this.activeBytecode.length == 300)
        + 'OP_ACTIVEBYTECODE OP_SIZE OP_NIP 2c01 OP_NUMEQUALVERIFY '
        // require(tx.inputs[0].value == 10000)
        + 'OP_0 OP_UTXOVALUE 1027 OP_NUMEQUALVERIFY '
        // require(tx.inputs[0].lockingBytecode.length == 10000)
        + 'OP_0 OP_UTXOBYTECODE OP_SIZE OP_NIP 1027 OP_NUMEQUALVERIFY '
        // require(tx.inputs[0].outpointTransactionHash == 0x00...00)
        + 'OP_0 OP_OUTPOINTTXHASH 0000000000000000000000000000000000000000000000000000000000000000 OP_EQUALVERIFY '
        // require(tx.inputs[0].outpointIndex == 0)
        + 'OP_0 OP_OUTPOINTINDEX OP_0 OP_NUMEQUALVERIFY '
        // require(tx.inputs[0].unlockingBytecode.length == 100)
        + 'OP_0 OP_INPUTBYTECODE OP_SIZE OP_NIP 64 OP_NUMEQUALVERIFY '
        // require(tx.inputs[0].sequenceNumber == 0)
        + 'OP_0 OP_INPUTSEQUENCENUMBER OP_0 OP_NUMEQUALVERIFY '
        // require(tx.outputs[0].value == 10000)
        + 'OP_0 OP_OUTPUTVALUE 1027 OP_NUMEQUALVERIFY '
        // require(tx.outputs[0].lockingBytecode.length == 100)
        + 'OP_0 OP_OUTPUTBYTECODE OP_SIZE OP_NIP 64 OP_NUMEQUAL',
    },
  },
  {
    fn: 'mecenas.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Mecenas',
      abi: [
        {
          type: 'function', index: 0, name: 'receive', params: [],
        },
        {
          type: 'function', index: 1, name: 'reclaim', params: [{ name: 'pk', type: 'PubKey' }, { name: 's', type: 'Sig' }],
        },
        {
          type: 'constructor',
          params: [
            { name: '_recipient', type: 'Ripemd160' },
            { name: '_funder', type: 'Ripemd160' },
            { name: '_pledge', type: 'int' },
            { name: '_period', type: 'int' },
          ],
        },
      ],
      asm:
        '$_period $_pledge $_funder $_recipient '
        // function receive
        + 'OP_4 OP_PICK OP_0 OP_NUMEQUAL OP_IF '
        // require(tx.age >= period)
        + 'OP_3 OP_ROLL OP_CHECKSEQUENCEVERIFY OP_DROP '
        // require(tx.outputs[0].lockingBytecode == new LockingBytecodeP2PKH(recipient))
        + 'OP_0 OP_OUTPUTBYTECODE 76a914 OP_ROT OP_CAT 88ac OP_CAT OP_EQUALVERIFY '
        // int minerFee = 1000
        + 'e803 '
        // int currentValue = tx.inputs[this.activeInputIndex].value
        + 'OP_INPUTINDEX OP_UTXOVALUE '
        // int changeValue = currentValue - pledge - minerFee
        + 'OP_DUP OP_4 OP_PICK OP_SUB OP_2 OP_PICK OP_SUB '
        // if (changeValue <= pledge + minerFee) {
        + 'OP_DUP OP_5 OP_PICK OP_4 OP_PICK OP_ADD OP_LESSTHANOREQUAL OP_IF '
        // require(tx.outputs[0].value == currentValue - minerFee)
        + 'OP_0 OP_OUTPUTVALUE OP_2OVER OP_SWAP OP_SUB OP_NUMEQUALVERIFY '
        // } else {
        + 'OP_ELSE '
        // require(tx.outputs[0].value == pledge)
        + 'OP_0 OP_OUTPUTVALUE OP_5 OP_PICK OP_NUMEQUALVERIFY '
        // require(
        //   tx.outputs[1].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode
        // )
        + 'OP_1 OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY '
        // require(tx.outputs[1].value == changeValue) }
        + 'OP_1 OP_OUTPUTVALUE OP_OVER OP_NUMEQUALVERIFY '
        // Cleanup
        + 'OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_1 OP_ELSE '
        // function reclaim
        + 'OP_4 OP_ROLL OP_1 OP_NUMEQUALVERIFY '
        // require(hash160(pk) == funder)
        + 'OP_5 OP_PICK OP_HASH160 OP_ROT OP_EQUALVERIFY '
        // require(checkSig(s, pk))
        + 'OP_3 OP_ROLL OP_4 OP_ROLL OP_CHECKSIG '
        // Cleanup
        + 'OP_NIP OP_NIP OP_NIP OP_ENDIF',
    },
  },
  {
    fn: 'announcement.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Announcement',
      abi: [
        {
          type: 'function', index: 0, name: 'announce', params: [],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm:
        // bytes announcement = new LockingBytecodeNullData(...)
        '6a 6d02 OP_SIZE OP_SWAP OP_CAT OP_CAT '
        + '4120636f6e7472616374206d6179206e6f7420696e6a75726520612068756d616e20626'
        + '5696e67206f722c207468726f75676820696e616374696f6e2c20616c6c6f77206120687'
        + '56d616e206265696e6720746f20636f6d6520746f206861726d2e '
        + 'OP_SIZE OP_DUP 4b OP_GREATERTHAN OP_IF 4c OP_SWAP OP_CAT OP_ENDIF OP_SWAP OP_CAT OP_CAT '
        // require(tx.outputs[0].value == 0)
        + 'OP_0 OP_OUTPUTVALUE OP_0 OP_NUMEQUALVERIFY '
        // require(tx.outputs[0].lockingBytecode == announcement)
        + 'OP_0 OP_OUTPUTBYTECODE OP_EQUALVERIFY '
        // int minerFee = 1000
        + 'e803 '
        // int changeAmount = tx.inputs[this.activeInputIndex].value - minerFee
        + 'OP_INPUTINDEX OP_UTXOVALUE OP_OVER OP_SUB '
        // if (changeAmount >= minerFee)
        + 'OP_DUP OP_ROT OP_GREATERTHANOREQUAL OP_IF '
        // require(
        //  tx.outputs[1].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode
        // )
        + 'OP_1 OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY '
        // require(tx.outputs[1].value == changeAmount) }
        + 'OP_1 OP_OUTPUTVALUE OP_OVER OP_NUMEQUALVERIFY OP_ENDIF '
        // Stack clean-up
        + 'OP_DROP OP_1',
    },
  },
  {
    fn: 'p2palindrome.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'P2Palindrome',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [{ name: 'palindrome', type: 'string' }],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm: 'OP_DUP OP_REVERSEBYTES OP_EQUAL',
    },
  },
  {
    fn: 'num2bin_variable.cash',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Num2Bin',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [{ name: 'size', type: 'int' }],
        },
        {
          type: 'constructor', params: [],
        },
      ],
      asm: 'OP_10 OP_SWAP OP_NUM2BIN OP_BIN2NUM OP_10 OP_NUMEQUAL',
    },
  },
  {
    fn: 'radiant.rad',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'Radiant',
      abi: [
        {
          type: 'function', index: 0, name: 'spend', params: [],
        },
        {
          type: 'constructor',
          params: [
            {
              name: 'REF',
              type: 'bytes',
            },
          ],
        },
      ],
      asm:
        // stateSeparator
        'OP_1 OP_VERIFY OP_STATESEPARATOR '

        // Push ref expressions
        + 'OP_PUSHINPUTREF aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa00000000 00 OP_EQUAL OP_NOT OP_VERIFY '
        + 'OP_REQUIREINPUTREF bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb00000000 00 OP_EQUAL OP_NOT OP_VERIFY '
        + 'OP_DISALLOWPUSHINPUTREF cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc00000000 00 OP_EQUAL OP_NOT OP_VERIFY '
        + 'OP_DISALLOWPUSHINPUTREFSIBLING dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd00000000 00 OP_EQUAL OP_NOT OP_VERIFY '
        + 'OP_PUSHINPUTREFSINGLETON eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000 00 OP_EQUAL OP_NOT OP_VERIFY '

        // Push ref statements
        + 'OP_PUSHINPUTREF aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa00000000 OP_DROP '
        + 'OP_REQUIREINPUTREF bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb00000000 OP_DROP '
        + 'OP_DISALLOWPUSHINPUTREF cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc00000000 OP_DROP '
        + 'OP_DISALLOWPUSHINPUTREFSIBLING dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd00000000 OP_DROP '
        + 'OP_PUSHINPUTREFSINGLETON eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000 OP_DROP '

        // tx.inputs[1].refHashDataSummary
        + 'OP_1 OP_REFHASHDATASUMMARY_UTXO ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff OP_EQUALVERIFY '

        // tx.inputs.refHashValueSum
        + 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa OP_REFHASHVALUESUM_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs[1].refHashDataSummary
        + 'OP_1 OP_REFHASHDATASUMMARY_OUTPUT bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb OP_EQUALVERIFY '

        // tx.outputs.refHashValueSum
        + 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc OP_REFHASHVALUESUM_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.refType(0x);
        + 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd00000000 OP_REFTYPE_UTXO OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.refType
        + 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000 OP_REFTYPE_OUTPUT OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.refValueSum
        + 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000 OP_REFVALUESUM_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.refValueSum
        + 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa00000000 OP_REFVALUESUM_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.refOutputCount
        + 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb00000000 OP_REFOUTPUTCOUNT_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.refOutputCount
        + 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc00000000 OP_REFOUTPUTCOUNT_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.zeroValue.refOutputCount
        + 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd00000000 OP_REFOUTPUTCOUNTZEROVALUED_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.zeroValue.refOutputCount
        + 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000 OP_REFOUTPUTCOUNTZEROVALUED_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs[1].refDataSummary
        + 'OP_1 OP_REFDATASUMMARY_UTXO 00 OP_EQUALVERIFY '

        // tx.outputs[1].refDataSummary
        + 'OP_1 OP_REFDATASUMMARY_OUTPUT 00 OP_EQUALVERIFY '

        // tx.outputs.codeScriptValueSum
        + 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff OP_CODESCRIPTHASHVALUESUM_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.codeScriptValueSum
        + 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa OP_CODESCRIPTHASHVALUESUM_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.codeScriptOutputCount
        + 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb OP_CODESCRIPTHASHOUTPUTCOUNT_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.codeScriptOutputCount
        + 'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc OP_CODESCRIPTHASHOUTPUTCOUNT_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs.zeroValue.codeScriptCount
        + 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd OP_CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_UTXOS OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs.zeroValue.codeScriptCount
        + 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee OP_CODESCRIPTHASHZEROVALUEDOUTPUTCOUNT_OUTPUTS OP_1 OP_NUMEQUALVERIFY '

        // tx.inputs[1].codeScript
        + 'OP_1 OP_CODESCRIPTBYTECODE_UTXO 00 OP_EQUALVERIFY '

        // tx.outputs[1].codeScript
        + 'OP_1 OP_CODESCRIPTBYTECODE_OUTPUT 00 OP_EQUALVERIFY '

        // tx.inputs[1].stateScript
        + 'OP_1 OP_STATESCRIPTBYTECODE_UTXO 00 OP_EQUALVERIFY '

        // tx.outputs[1].stateScript
        + 'OP_1 OP_STATESCRIPTBYTECODE_OUTPUT 00 OP_EQUALVERIFY '

        // tx.inputs[1].stateSeparatorIndex
        + 'OP_1 OP_STATESEPARATORINDEX_UTXO OP_1 OP_NUMEQUALVERIFY '

        // tx.outputs[1].stateSeparatorIndex
        + 'OP_1 OP_STATESEPARATORINDEX_OUTPUT OP_1 OP_NUMEQUALVERIFY '

        // sha512_256
        + 'ff OP_SHA512_256 00 OP_EQUALVERIFY '

        // hash512_256
        + 'ff OP_HASH512_256 00 OP_EQUALVERIFY '

        // Push ref with identifier
        + 'OP_PUSHINPUTREF $REF OP_DROP '

        + 'OP_1',
    },
  },
  {
    fn: 'state_script_function.rad',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'StateScriptFunction',
      abi: [
        {
          type: 'function',
          index: 0,
          name: 'function1',
          params: [
            {
              name: 'functionVar',
              type: 'int',
            },
            {
              name: 'stateOnlyVar',
              type: 'int',
            },
            {
              name: 'stateVar',
              type: 'int',
            },
            {
              name: 'stateVarInIf',
              type: 'int',
            },
          ],
        },
        {
          type: 'function',
          index: 1,
          name: 'function2',
          params: [
            {
              name: 'functionVar',
              type: 'int',
            },
            {
              name: 'stateOnlyVar',
              type: 'int',
            },
            {
              name: 'stateVar',
              type: 'int',
            },
            {
              name: 'stateVarInIf',
              type: 'int',
            },
          ],
        },
        {
          type: 'constructor',
          params: [
            {
              name: 'REF',
              type: 'bytes',
            },
          ],
        },
      ],
      asm: 'OP_PUSHINPUTREF $REF OP_DROP OP_ROT OP_1ADD OP_1 OP_IF OP_OVER OP_1ADD OP_ROT OP_DROP OP_SWAP OP_ENDIF OP_2 OP_PICK OP_1 OP_NUMEQUALVERIFY OP_2DROP OP_STATESEPARATOR OP_OVER OP_0 OP_NUMEQUAL OP_IF OP_ROT OP_ADD OP_3 OP_NUMEQUAL OP_NIP OP_ELSE OP_SWAP OP_1 OP_NUMEQUALVERIFY OP_ADD OP_4 OP_NUMEQUAL OP_ENDIF',
    },
  },
  {
    fn: 'rxd_fungible_token.rad',
    artifact: {
      version: 9,
      compilerVersion: 'radc 0.1.0',
      contract: 'FungibleToken',
      abi: [
        {
          type: 'function',
          index: 0,
          name: 'unlock',
          params: [
            {
              name: 's',
              type: 'Sig',
            },
            {
              name: 'pk',
              type: 'PubKey',
            },
          ],
        },
        {
          type: 'constructor',
          params: [
            {
              name: 'REF',
              type: 'bytes',
            },
            {
              name: 'PKH',
              type: 'Ripemd160',
            },
          ],
        },
      ],
      asm: 'OP_DUP OP_HASH160 $PKH OP_EQUALVERIFY OP_CHECKSIGVERIFY OP_STATESEPARATOR OP_PUSHINPUTREF $REF OP_INPUTINDEX OP_CODESCRIPTBYTECODE_UTXO OP_HASH256 OP_DUP OP_CODESCRIPTHASHOUTPUTCOUNT_OUTPUTS OP_ROT OP_REFOUTPUTCOUNT_OUTPUTS OP_NUMEQUALVERIFY OP_DUP OP_CODESCRIPTHASHVALUESUM_UTXOS OP_SWAP OP_CODESCRIPTHASHVALUESUM_OUTPUTS OP_NUMEQUAL',
    },
  },
];
