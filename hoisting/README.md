Hoisting
========

Hoisting splits out variables into two statements. It moves the initialization step to the top of the block and leaves the assignment where it was.

### Basics

```
var varOne = 0,
    varTwo;
```

Expands to:

```
var varOne = undefined;
var varTwo = undefined;
varOne = 0;
```

### Assignment

```
console.log(varThree); // undefined
var varThree = 5;
console.log(varThree); // 5
```

Expands to:

```
var varThree = undefined;
console.log(varThree);
varThree = 5;
console.log(varThree);
```

### Functions

A function statement is expanded into a function variable assignment, and both the function and assignment are hoisted to the top of the block.

```
foo();

function foo() {};
```

Expands to

```
var foo = function foo() {};

foo();
```

Which expands to

```
var foo = undefined;
foo = function foo() {};

foo();
```
