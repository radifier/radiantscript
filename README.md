# RadiantScript

## ⚠️ RadiantScript is alpha software and likely to have bugs. Mainnet use is not recommended. ⚠️
This project is in development. Language grammar is likely to change. Any contracts compiled with `radc` must be well tested to ensure compiled code behaves as expected. Please report any bugs.

RadiantScript is a fork of CashScript with support for Radiant opcodes. It is a high-level language that allows you to write Radiant smart contracts in a straightforward and familiar way.

## The RadiantScript Compiler
RadiantScript features a compiler as a standalone command line tool, called `radc`. It compiles `.rad` files into `.json` artifact files usable by rad-scryptlib. The `radc` package can also be imported inside JavaScript files to compile `.rad` files without using the command line tool.

### Installation
```bash
yarn
```

`radc` will be installed to `node_modules/.bin/radc`. This can be executed with `npx`.

### Usage
```bash
Usage: npx radc [options] [source_file]

Options:
  -V, --version        Output the version number.
  -o, --output <path>  Specify a file to output the generated artifact.
  -h, --hex            Compile the contract to hex format rather than a full artifact.
  -A, --asm            Compile the contract to ASM format rather than a full artifact.
  -c, --opcount        Display the number of opcodes in the compiled bytecode.
  -s, --size           Display the size in bytes of the compiled bytecode.
  -?, --help           Display help
```

## Example fungible token contract

```solidity
// Contract definition with scriptPubKey parameters
contract FungibleToken (bytes36 REF, bytes20 PKH)
// Function with first scriptSig parameters. These parameters are available to the state script and code script
function (sig s, pubkey pk) {
    // Contract parameters are always placed inline in the script. They should only be used once.
    // This gives the developer control over where they are placed in the compiled script
    // With parameters placed inline the below results in a standard P2PKH script
    require(hash160(pk) == PKH);
    require(checkSig(s, pk));

    stateSeparator;

    // codeScript below, consisting of one or more functions
    bytes36 ref = pushInputRef(REF);

    // Get code script hash for this input
    bytes32 csh = hash256(tx.inputs[this.activeInputIndex].codeScript);
    // Ensure reference isn't used in any output that doesn't contain this code script
    require(tx.outputs.codeScriptCount(csh) == tx.outputs.refOutputCount(ref));
    // Input sum must equal output sum
    require(tx.inputs.codeScriptValueSum(csh) == tx.outputs.codeScriptValueSum(csh));
}
```

## Multiple functions

A contract can have multiple functions by returning an object. For example:

```solidity
contract MultipleFunctions()
function () {
  // Code can be placed here

  // Return functions
  return {
    hello() {
      require(true);
    },
    world() {
      require(true);
    }
  }
}
```

## Tests

Run tests:
```
yarn test
```

Please see tests for example contracts including usage of Radiant specific op codes.
