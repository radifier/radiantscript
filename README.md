# ⚠️⚠️⚠️ RadiantScript is a work in progress and likely to have bugs. Mainnet use is not recommended. ⚠️⚠️⚠️

# RadiantScript

RadiantScript is a high-level language that allows you to write Radiant smart contracts in a straightforward and familiar way. Its syntax is inspired by Ethereum's Solidity language, but its functionality is different since the underlying systems have very different fundamentals.

## The RadiantScript Compiler
RadiantScript features a compiler as a standalone command line tool, called `radc`. It can be installed through npm and used to compile `.rad` files into `.json` artifact files. These artifact files can be imported into rad-scryptlib. The `radc` NPM package can also be imported inside JavaScript files to compile `.rad` files without using the command line tool.

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

