grammar CashScript;

sourceFile
    : pragmaDirective* contractDefinition EOF
    ;

pragmaDirective
    : 'pragma' pragmaName pragmaValue ';'
    ;

pragmaName
    : 'radiantscript'
    ;

pragmaValue
    : versionConstraint versionConstraint?
    ;

versionConstraint
    : versionOperator? VersionLiteral
    ;

versionOperator
    : '^' | '~' | '>=' | '>' | '<' | '<=' | '='
    ;

contractDefinition
    : 'contract' Identifier parameterList parameterList? '{' stateScriptStatement? statement* functionDefinition* '}'
    ;

functionDefinition
    : 'function' Identifier parameterList '{' statement* '}'
    ;

parameterList
    : '(' (parameter (',' parameter)* ','?)? ')'
    ;

parameter
    : typeName modifier? Identifier
    ;

block
    : '{' statement* '}'
    | statement
    ;

statement
    : variableDefinition
    | tupleAssignment
    | assignStatement
    | timeOpStatement
    | requireStatement
    | ifStatement
    | pushDataStatement
    | pushRefStatement
    | unsetStatement
    ;

variableDefinition
    : typeName modifier? Identifier '=' expression ';'
    ;

tupleAssignment
    : typeName Identifier ',' typeName Identifier '=' expression ';'
    ;

assignStatement
    : Identifier '=' expression ';'
    ;

timeOpStatement
    : 'require' '(' TxVar '>=' expression ')' ';'
    ;

requireStatement
    : 'require' '(' expression ')' ';'
    ;

ifStatement
    : 'if' '(' expression ')' ifBlock=block ('else' elseBlock=block)?
    ;

functionCall
    : Identifier expressionList // Only built-in functions are accepted
    ;

stateScriptStatement
    : 'state' stateScriptBlock=block
    ;

pushDataStatement
    : 'pushData' '(' (HexLiteral | Identifier) ')' ';'
    ;

pushRefStatement
    : pushRef ';'
    ;

pushRef
    : op=('pushInputRef' | 'requireInputRef' | 'disallowPushInputRefSibling' | 'disallowPushInputRef' | 'pushInputRefSingleton') '(' (HexLiteral | Identifier) ')'
    ;

unsetStatement
    : 'unset' '(' Identifier ')' ';'
    ;

expressionList
    : '(' (expression (',' expression)* ','?)? ')'
    ;

expression
    : '(' expression ')' # Parenthesised
    | typeName '(' castable=expression (',' size=expression)? ','? ')' # Cast
    | functionCall # FunctionCallExpression
    | 'new' Identifier expressionList #Instantiation
    | expression '[' index=NumberLiteral ']' # TupleIndexOp
    | scope='tx.outputs' '[' expression ']' '.' op=Identifier # UnaryIntrospectionOp
    | scope='tx.inputs' '[' expression ']' '.' op=Identifier # UnaryIntrospectionOp
    | scope='tx.outputs' '.' Identifier expressionList # IntrospectionFunctionCall
    | scope='tx.inputs' '.' Identifier expressionList # IntrospectionFunctionCall
    | scope='tx.outputs.zeroValue' '.' Identifier expressionList # IntrospectionFunctionCall
    | scope='tx.inputs.zeroValue' '.' Identifier expressionList # IntrospectionFunctionCall
    | pushRef # PushRefExpression
    | expression op=('.reverse()' | '.length') # UnaryOp
    | left=expression op='.split' '(' right=expression ')' # BinaryOp
    | op=('!' | '-') expression # UnaryOp
    | left=expression op=('*' | '/' | '%') right=expression # BinaryOp
    | left=expression op=('+' | '-') right=expression # BinaryOp
    // | expression ('>>' | '<<') expression --- OP_LSHIFT & RSHIFT are disabled in BCH Script
    | left=expression op=('<' | '<=' | '>' | '>=') right=expression # BinaryOp
    | left=expression op=('==' | '!=') right=expression # BinaryOp
    | left=expression op='&' right=expression # BinaryOp
    | left=expression op='^' right=expression # BinaryOp
    | left=expression op='|' right=expression # BinaryOp
    | left=expression op='&&' right=expression # BinaryOp
    | left=expression op='||' right=expression # BinaryOp
    | '[' (expression (',' expression)* ','?)? ']' # Array
    | NullaryOp # NullaryOp
    | Identifier # Identifier
    | literal # LiteralExpression
    ;

modifier
    : 'constant'
    ;

literal
    : BooleanLiteral
    | numberLiteral
    | StringLiteral
    | DateLiteral
    | HexLiteral
    ;

numberLiteral
    : NumberLiteral NumberUnit?
    ;

typeName
    : 'int' | 'bool' | 'string' | 'pubkey' | 'sig' | 'datasig' | Bytes
    ;

VersionLiteral
    : [0-9]+ '.' [0-9]+ '.' [0-9]+
    ;

BooleanLiteral
    : 'true' | 'false'
    ;

NumberUnit
    : 'satoshis' | 'sats' | 'finney' | 'bits' | 'bitcoin'
    | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks'
    ;

NumberLiteral
    : [-]?[0-9]+ ([eE] [0-9]+)?
    ;

Bytes
    : 'bytes' Bound? | 'byte'
    ;

Bound
    : [1-9] [0-9]*
    ;

StringLiteral
    : '"' ('\\"' | ~["\r\n])*? '"'
    | '\'' ('\\\'' | ~['\r\n])*? '\''
    ;

DateLiteral
    : 'date(' StringLiteral ')'
    ;

HexLiteral
    : '0' [xX] [0-9A-Fa-f]*
    ;

TxVar
    : 'tx.age'
    | 'tx.time'
    ;

NullaryOp
    : 'this.activeInputIndex'
    | 'this.activeBytecode'
    | 'tx.inputs.length'
    | 'tx.outputs.length'
    | 'tx.version'
    | 'tx.locktime'
    ;

Identifier
    : '$'? [a-zA-Z] [a-zA-Z0-9_]*
    ;

WHITESPACE
    : [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> channel(HIDDEN)
    ;
