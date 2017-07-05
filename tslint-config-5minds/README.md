# TSLint config for 5Minds projects

- install with `npm install --save-dev tslint-config-5minds`
- create a tslint.json in your project with the following content:

```json
{
    "extends": "tslint-config-5minds"
}
````

# Typescript specific

 1.1 **adjacent-overload-signatures:** Enforces function overloads to be consecutive.

```typescript
// good
interface ICanvas {
	draw(form: Circle);
	draw(form: Line);
	erase();
	erase(form: Line);
}
```

```typescript
// bad -> [All 'constructor' signatures should be adjacent]
class Foo {
	public static bar() {}
	private constructor() {}
	public bar() {}
	public constructor(foo: any) {}
}
```


 1.2 **member-access:** - Requires explicit visibility declarations for class members(properties, accessors, class methods).

```typescript
// good
class SecretNumbers {
    private get one() {
        return 1;
    }
}
```
```typescript
// bad -> The get property accessor 'one' must be marked either 'private', 'public', or 'protected'
class Numbers {
	get one() {
		return 1;
	}
}
```
 1.3 **member-ordering:** Enforces member ordering

```typescript
// good
class GoodOrderClass {
	public static firstStatic a = 1;
	protected static secondStatic = 2;
	public instanceVar = 3;
}
```
```typescript
// bad -> Declaration of protected static field not allowed after declaration of public instance field. Instead, this should come after public static fields.
class BadOrderClass {
	public static firstStatic a = 1;
	public instanceVar = 3;
	protected static secondStatic = 2;
}

```

 1.4 **no-any:** Disallows usages of `any` as a type declaration.
```typescript
// bad -> Type declaration of 'any' is forbidden.
const nothingIsAnything: any = true;

```

 1.5 **no-empty-interface:** Forbids empty interfaces.

```typescript
// good
interface IIsNamed {
	name: string;
}
```
```typescript
// bad -> An empty interface is equivalent to '{}'
interface IEmpty { }
```
```typescript
// bad -> An interface declaring no members is equivalent to its supertype.
interface IEmptySubtype extends IIsNamed { }
```

 <!-- 1.5 **no-inferrable-types:** Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.  -->


 1.6 **no-internal-module:** Disallows internal module. TypeScript introduced the equivalent keyword 'namespace' in order to avoid confusion with ES6 modules.
```typescript
// bad -> The internal 'module' syntax is deprecated, use the 'namespace' keyword instead.
declare module 'SomeModule' {
	export function fn(): string;
}
```

 1.7 **no-magic-numbers:**
Disallows the use constant number values outside of variable assignments.
When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
```typescript
// good
const leet: number = 1337;
console.log(leet);
```
```typescript
// bad -> 'magic numbers' are not allowed (no-magic-numbers)
console.log(1337);
```

 1.8 **no-namespace:** Disallows use of internal modules and namespaces. Use ES6 import/export.
 This rule prevents you from describing external modules with `declare namespace` but that should be an exception and should never be used in .ts-files anyway.

```typescript
// bad -> [tslint] 'namespace' and 'module' are disallowed (no-namespace)
declare namespace ExternalModule {
  ...
}
```


 1.9 **no-reference:** Disallows /// &lt;reference path="..." /&gt; imports (use ES6-style imports instead).
```typescript
// bad -> [tslint] <reference> is not allowed, use imports (no-reference)
/// <reference path="./typings.d.ts" />
```
 1.10 **no-var-requires:** Disallows the use of require statements except in import statements.


```typescript
// good
import * as path from 'path';
```
```typescript
// bad -> require statement not part of an import statement (no-var-requires)
const path = require("path");
```
1.11 **only-arrow-functions:** Disallows traditional (non-arrow), unnamed function expressions.

```typescript
// good
[1, 2, 3, 4].map((num: number) => {
    return num % 3 === 0 ? 'fizz' : num;
});
```
```typescript
// good
[1, 2, 3, 4].map(function fizz(num: number) {
    return num % 3 === 0 ? 'fizz' : num;
});
```
```typescript
// bad -> non-arrow functions are forbidden
[1, 2, 3, 4].map(function (num: number) {
    return num % 3 === 0 ? 'fizz' : num;
})
```

 1.12 **prefer-for-of:** Recommends a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.

```typescript
const cars = ['Audi', 'Ford', 'Mercedes'];
// good
for (const car of cars) {
  drive(car);
}
```
```typescript
// bad -> Expected a 'for-of' loop instead of a 'for' loop with this simple iteration
for (let i = 0; i < cars.length; i++) {
  drive(cars[i]);
}
```
 <!-- 1.132 **promise-function-async:** Requires any function or method that returns a promise to be marked async. -->


 1.13 **typedef:** Requires type definitions to exist.

```typescript
// good
function foo(bar: string): number {
	return parseInt(bar);
}
```
```typescript
// bad -> expected parameter: 'bar' to have a typedef (typedef) & expected call-signature: 'foo' to have a typedef (typedef)
function foo(bar) {
	return parseInt(bar);
}

```


 1.14 **typedef-whitespace:** Requires or disallows whitespace for type definitions. You can define whether there is one or no space between the definition's colon and the previous or following symbol.

```typescript
// good
let foo: () => {};
```
```typescript
// bad -> [tslint] expected nospace before colon in variable-declaration (typedef-whitespace)
let bar: string;
```
```typescript
// bad -> [tslint] expected onespace after colon in variable-declaration (typedef-whitespace)
let qux:number;

```
 1.15 **unified-signatures:** Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
```typescript
// good
function log(logInput: number | string): void;
```
```typescript
// bad -> These overloads can be combined into one signature taking `number | string | number`.
function log(logInput: number): void;
function log(logInput: string): void;
```

# Functionality

<!-- **await-promise:** Warns for an awaited value that is not a Promise. -->


<!-- **ban:** Bans the use of specific functions or global methods. -->

  2.1 **curly:** Enforces braces for `if`/`for`/`do`/`while` statements.
```typescript
// good
if (result.type === 'JSON') {
    return res;
}
```
```typescript
// bad -> if statements must be braced
if (result.type === 'JSON')
    return res;
```

<!-- **forin:** Requires a `for ... in` statement to be filtered with an `if` statement. -->

  2.2 **import-blacklist:**
Disallows importing the specified modules directly via `import` and `require`.
Instead only sub modules may be imported from that module.
Some libraries allow importing their submodules instead of the entire module. This is good practise as it avoids loading unused modules.
```typescript
// good
import has from 'lodash/has';
```
```typescript
// bad -> This import is blacklisted, import a submodule instead
import _ from 'lodash';
```

  2.3 **label-position:** Only allows labels in sensible locations(like switch-cases).
Labels can be used in combination with `break`, `continue` and `switch`.

```typescript
// bad -> unexpected label on statement
function foo() {
    barLabel:
}
```

  2.4 **no-arg:** Disallows use of `arguments.callee`.
Usage of `arguments.callee` makes many optimizations impossible and almost every case can be expressed without.

```typescript
// good
[1, 2, 3, 4, 5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n-1)*n;
});
```
```typescript
// bad -> Access to arguments.callee is forbidden
[1, 2, 3, 4, 5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```
  2.5 **no-bitwise:** Disallows bitwise operators.
Bitwise operations are often typos(& instead of &&) and when used correctly they make code harder to understand.
```typescript
// bad -> Forbidden bitwise operatoration.
const eight: number = 0b1001 & 0b1000;
```

  2.6 **no-conditional-assignment:** Disallows any type of assignment in conditionals.
That happens mostly when you confuse `=` with `==`.

```typescript
// bad -> Assignments in conditional expressions are forbidden
if (i = true) {

}
```

  2.7 **no-console:** Bans the use of specified `console` methods.
```typescript
// bad -> Calls to 'console.log' are not allowed.
console.log('veritas numquam perit');
```

  2.8 **no-construct:** Disallows access to the constructors of `String`, `Number`, and `Boolean`.
The mentioned above classes are wrappers. Strings are not actually objects in JavaScript. Whenever you call a function on a string(for example `charAt`) the compiler wraps that string into the String Wrapper beforehand. Using wrappers manually never makes sense.
```typescript
// bad -> Forbidden constructor, use a literal or simple function call instead
((new String('foo') === 'foo') //sidenote: this expression equals false

```
  2.9 **no-debugger:** Disallows `debugger` statements.
```typescript
// bad -> Use of debugger statements is forbidden
debugger;
```

  2.10 **no-duplicate-variable:** Disallows duplicate variable declarations in the same block scope.

```typescript
// bad -> Cannot redeclare block-scoped variable 'two'.
let two: number = 2;
let two: string = "two";
```

  2.11 **no-empty:** Disallows empty blocks.
```typescript
// bad -> block is empty
function doNothing(): void {

}
```
  2.12 **no-eval:** Disallows `eval` function invocations.
`Eval` is often dangerous, slow and in most cases not required.

```typescript
// forbidden eval
((eval("2+2") + 2) === 6)

```

<!-- **no-floating-promises:** Promises returned by functions must be handled appropriately. Requires type info-->

<!-- **no-for-in-array:** Disallows iterating over an array with a for-in loop. -->

<!-- **no-inferred-empty-object-type:** Disallow type inference of {} (empty object type) at function and constructor call sites -->

  2.13 **no-invalid-this:** Disallows using the `this` keyword outside of classes.
```typescript
// good
class Foo() {
	constructor(bar) {
		this._bar = bar;
	}
}
```
```typescript
// bad -> the "this" keyword is disallowed outside of a class body
console.log(this === window);
```

  2.14 **no-misused-new:** Warns on apparent attempts to define constructors for interfaces or `new` for classes.
```typescript
// bad -> Interfaces cannot be constructed, only classes. Did you mean `declare class`?
interface I {
    new(): I;
}
```
```typescript
// bad -> `new` in a class is a method named "new". Did you mean `constructor`?
declare class C {
    new(): C;
}
```

<!-- **no-null-keyword:** Disallows use of the `null` keyword literal. -->

  2.15 **no-shadowed-variable:** Disallows shadowing variable declarations.
```typescript
// bad -> Shadowed variable: 'a'
function letShadow() {
    let a: number = 1;
    if (true) {
        let a: number = 2;
    }
}
```

<!-- **no-string-literal:** Disallows object access via string literals. -->

  2.16 **no-string-throw:** Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
```typescript
// good
function Foo(): void {
    throw new Error('errorMessage');
}
```
```typescript
// bad -> Throwing plain strings (not instances of Error) gives no stack traces
function Bar(): void {
    throw 'errorMessage';
}
```
<!-- **no-switch-case-fall-through:** Disallows falling through case statements. -->


<!-- **no-unbound-method:** Warns when a method is used as outside of a method call. -->


<!-- **no-unsafe-any:**  -->
<!-- Warns when using an expression of type ‘any’ in an unsafe way. -->
<!-- Type casts and tests are allowed. -->
<!-- Expressions that work on all values (such as ‘”” + x’) are allowed. -->

<!-- **no-unsafe-finally:**  -->
<!-- Disallows control flow statements, such as `return`, :`continue`, -->
<!-- `break` and `throws` in finally blocks. -->

  2.17 **no-unused-expression:** Disallows unused expression statements. Unused expressions are expression statements which are not assignments or function calls.
```typescript
// bad -> expected an assignment or function call
true;

```
<!--  2.18 **no-unused-new:** Disallows unused `new` expression statements.
```typescript
// Good
class Foo {
	doTheThing() {
	}
}
const foo: Foo = new Foo();
foo.doTheThing();
```
```typescript
// bad -> do not use 'new' for side effects
class Bar {
	constructor() {
		doTheThing();
	}
}
new Bar();
``` -->

<!-- **no-unused-variable:** Disallows unused imports, variables, functions and private class members. -->

  2.18 **no-use-before-declare:** Disallows usage of variables before their declaration.
```typescript
// bad -> variable 'lorem' used before declaration
console.log(lorem);
const lorem = 'Lorem ipsum dolor est...';
```
  2.19 **no-var-keyword:** Disallows usage of the `var` keyword.
```typescript
// good
let foo;
```
```typescript
// good
const bar;
```
```typescript
// bad -> Forbidden 'var' keyword, use 'let' or 'const' instead
var qux;
```

<!-- **no-void-expression:** Requires expressions of type `void` to appear in statement position. -->

<!-- **radix:** Requires the radix parameter to be specified when calling `parseInt`. -->

<!-- **restrict-plus-operands:** When adding two variables, operands must both be of type number or of type string. -->

<!-- **strict-boolean-expressions:**  -->
<!-- Restricts the types allowed in boolean expressions. By default only booleans are allowed. -->

<!-- The following nodes are checked: -->
<!-- * Arguments to the ‘!’, ‘&amp;&amp;’, and ‘||’ operators -->
<!-- * The condition in a conditional expression (‘cond ? x : y’) -->
<!-- * Conditions for ‘if’, ‘for’, ‘while’, and ‘do-while’ statements. -->

<!-- **strict-type-predicates:**  -->
<!-- Warns for type predicates that are always true or always false. -->
<!-- Works for ‘typeof’ comparisons to constants (e.g. ‘typeof foo === “string”’), and equality comparison to ‘null’/’undefined’. -->
<!-- (TypeScript won’t let you compare ‘1 === 2’, but it has an exception for ‘1 === undefined’.) -->
<!-- Does not yet work for ‘instanceof’. -->
<!-- Does <em>not</em> warn for ‘if (x.y)’ where ‘x.y’ is always truthy. For that, see strict-boolean-expressions. -->

  2.20 **switch-default:** Require a `default` case in all `switch` statements.
```typescript
// good
switch (new Date().getDay()) {
    case 0:
        day = "Monday";
        break;
    case default:
        day = "Okay Day";
}
```
```typescript
// bad -> Switch statement should include a 'default' case
switch (new Date().getDay()) {
    case 0:
        day = "Monday";
        break;
}
```

  2.21 **triple-equals:** Requires `===` and `!==` in place of `==` and `!=`.
```typescript
// good
parseInt('2') === 2;
```
```typescript
// bad -> == should be ===
`2` == 2;
```

  2.22 **typeof-compare:** Makes sure result of `typeof` is compared to correct string values
```typescript
// bad -> 'typeof' expression must be compared to one of: "undefined", "string", "boolean", "number", "function", "object", "symbol"
typeof (new Date()) === 'date';
```


  2.23 **use-isnan:** Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
```typescript
// good
isNaN('2' + 2);
```
```typescript
// bad -> Found an invalid comparison for NaN: ('2' + 2) === NaN
('2' + 2) === NaN;
```

#Maintainability

  3.1 **cyclomatic-complexity:** Enforces a threshold of cyclomatic complexity(McCabe complexity).
Does not refer to the number of instructions but rather to the number of paths.
Influenced by switchcases, `catch`, `if` and `? :` `||` and `&&` and any kind of loop.
```typescript
// bad -> The function numberIsEven has a cyclomatic complexity of 21 which is higher than the threshold of 20
function numberIsEven(num: number): boolean {
  switch(num) {
    case 1: return true;
    case 2: return false;
    case 3: return true;
    case 4: return false;
    case 5: return true;
    case 6: return false;
    case 7: return true;
    case 8: return false
    case 10: return true;
    case 11: return false;
    case 12: return true;
    case 13: return false;
    case 14: return true;
    case 15: return false;
    case 16: return true;
    case 17: return false;
    case 18: return true;
    case 19: return false;
    case 20: return true;
    case 21: return false;
  }
}
```

  3.2 **eofline:** Ensures the file ends with a newline.
Posix defines a line as a number of characters ending with the newline. Most software will recognize the last line anyways, but you should not rely on that.

  3.3 **indent:** Enforces indentation spaces. As soon as this rule supports setting the number of spaces per indentation it will be set to 2 spaces in the 5Minds-tslint-config.

  3.4 **linebreak-style:** Enforces a consistent linebreak style. You may choose between `CRLF` and `LF`, referencing the control characters `carriage return \r` and `line feed (\n).
Windows uses CRLF; Unix uses LF.

  3.5 **max-classes-per-file:** A file may not contain more than the specified number of classes
```typescript
class Foo {

}
```
```typescript
// bad -> [tslint] A maximum of 1 class per file is allowed (max-classes-per-file)
class Bar {

}
```

  3.6 **max-file-line-count:** Requires files to remain under 3000 lines

  3.7 **max-line-length:** Requires lines to be under a certain max length.
```typescript
// bad -> Exceeds maximum line length of 150
const deviceIsMobile: boolean = document.documentElement.clientWidth < 800 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i);
```

  3.8 **no-default-export:** Disallows default exports in ES6-style modules.
```typescript
// good
export class Foo {

}
```
```typescript
// bad -> Use of default exports is forbidden
export default class Foo {

}

```

  3.9 **no-mergeable-namespace:** Disallows mergeable namespaces in the same file.
```typescript
namespace RegExpNamespace {
    const lettersRegexp = /^[A-Za-z]+$/;
}
// bad -> Mergeable namespace RegExpNamespace found. Merge its contents with the namespace on line 0.
namespace RegExpNamespace {
    const numberRegexp = /^[0-9]+$/;
}
```

  3.10 **no-require-imports:** Disallows invocation of require()`.
```typescript
// good
import * as path from 'path';
```
```typescript
// bad -> require() style import is forbidden
const path = require('path');
```
```typescript
// bad -> require() style import is forbidden
import path = require('path');
```

  3.11 **no-trailing-whitespace:** Disallows trailing whitespace at the end of a line.

<!-- **object-literal-sort-keys:** Requires keys in object literals to be sorted alphabetically -->
<!-- ``` -->

<!-- ``` -->

  3.12 **prefer-const:** Requires that variable declarations use `const` instead of `let` if possible.
```typescript
function context() {
  // good
  const e: number = 2.72;

  // bad -> Identifier 'pi' is never reassigned; use 'const' instead of 'let'.
  let pi: number = 3.14;
}

```

  3.13 **trailing-comma:** Requires or disallows trailing commas in array and object literals, destructuring assignments, function and tuple typings,
named imports and function parameters.
```typescript
const musicList: Array<string> = [
    // good
    'Miles Davis',
];
```
```typescript
const carList: Array<string> = [
    'Audi',
    'BMW',
    // bad -> Missing trailing comma
    'Mercedes'
];
```

#Style

  4.1 **align:** Enforces vertical alignment.

```typescript
// good
function tokenize(text: string,
                  divider: string,
                  returnTokens: boolean): Array<string>;
```
```typescript
// bad -> parameters are not aligned
function tokenize(text: string,
    divider: string,
    returnTokens: boolean): Array<string>;

```

  4.2 **array-type:** Requires using `Array<T>` for arrays.
```typescript
// bad -> Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
const languages: string[] = ['TypeScript', 'JavaScript' , 'C'];
```

  4.3 **arrow-parens:** Requires parentheses around the parameters of arrow function definitions.
```typescript
// bad -> Parentheses are required around the parameters of an arrow function definition
unknown => {
    return typeof unknown;
}
```

<!-- **arrow-return-shorthand:** Suggests to convert `() =&gt; { return x; }` to `() =&gt; x`. -->
<!-- ``` -->

<!-- ``` -->

<!-- **callable-types:** An interface or literal type with just a call signature can be written as a function type. -->
<!-- ``` -->

<!-- ``` -->

  4.4 **class-name:** Enforces PascalCased class and interface names.
```typescript
// good
class PascalCase {

}
```
```typescript
// bad -> Class name must be in pascal case
class camelCase {

}
```
```typescript
// bad -> Class name must be in pascal case
class snake_case {

}
```

  4.5 **comment-format:** Enforces formatting rules for single-line comments.
```typescript
// good
// I start with a space
```
```typescript
// bad -> comment must start with a space
//I start directly
```

<!-- **completed-docs:** Enforces documentation for important items be filled out. -->
<!-- ``` -->

<!-- ``` -->

<!-- **file-header:** Enforces a certain header comment for all files, matched by a regular expression. -->
<!-- ``` -->

<!-- ``` -->

  4.6 **import-spacing:** Ensures proper spacing between import statement keywords
```typescript
// good
import * as path from 'path';
```
```typescript
// bad -> Add space after 'import'
// bad -> Add space after '*'
import*as fs from 'fs';

```

<!--   4.7 **interface-name:** Requires interface names to begin with a capital ‘I’ -->
<!-- ```typescript -->
<!-- // good -->
<!-- interface ICanvas { -->
<!--     draw(): void; -->
<!-- } -->

<!-- // bad -->
<!-- interface iCanvas { -->
<!--     draw(): void; -->
<!-- } -->

<!-- // bad -->
<!-- interface canvas { -->
<!--     draw(): void; -->
<!-- } -->
<!-- ``` -->

<!--   4.8 **interface-over-type-literal:** Prefer an interface declaration over a type literal (`type T = { ... }`) -->
<!-- ```typescript -->

<!-- ``` -->

<!--   4.9 **jsdoc-format:** Enforces basic format rules for JSDoc comments. -->
<!-- ```typescript -->

<!-- ``` -->

  4.7 **new-parens:** Requires parentheses when invoking a constructor via the `new` keyword.
```typescript
class Foo {

}
// good
let foo = new Foo();

// bad -> Parentheses are required when invoking a constructor
foo = new Foo;
```

<!--   4.11 **no-angle-bracket-type-assertion:** Requires the use of `as Type` for type assertions instead of `&lt;Type&gt;`. -->
<!-- ```typescript -->

<!-- ``` -->

<!--   4.12 **no-boolean-literal-compare:** Warns on comparison to a boolean literal, as in `x === true`. -->
<!-- ```typescript -->

<!-- ``` -->

  4.8 **no-consecutive-blank-lines:** Disallows one or more blank lines in a row.

  4.9 **no-parameter-properties:** Disallows parameter properties in class constructors.
```typescript
// good
class Foo {

  private bar: Bar;

  constructor(bar: Bar) {
    this.bar = bar;
  }

}
```
```typescript
// bad
class Foo {

  constructor(private bar: Bar) {}

}
```

  4.10 **no-unnecessary-initializer:** Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’.
```typescript
// good
const undefinedAlias = undefined;
```
```typescript
// good
let notInitialized;
```
```typescript
// bad -> Unnecessary initialization to 'undefined'.
let initialized = undefined;
```

<!--   4.11 **no-unnecessary-qualifier:** Warns when a namespace qualifier (`A.x`) is unnecessary. -->
<!-- ```typescript -->

<!-- ``` -->

  4.11 **object-literal-key-quotes:** Enforces consistent object literal property quote style.
```typescript
const obj = {
  // good
  foo: 'bar',
  // bad -> Unnecessarily quoted property 'qux' found.
  'qux': 'baz',
};
```

<!--   4.18 **object-literal-shorthand:** Enforces use of ES6 object literal shorthand when possible. -->
<!-- ```typescript -->

<!-- ``` -->

  4.12 **one-line:** Requires the specified tokens to be on the same line as the expression preceding them.

```typescript
// good
try {
    parseInt('r2d2');
} catch (error) {
    console.error(error);
}
```
```typescript
// bad -> misplaced 'catch'
try {
    parseInt('c3p0');
}
catch (error) {
    console.error(error);
}
```

  4.13 **one-variable-per-declaration:** Disallows multiple variable definitions in the same declaration statement.
```typescript
// good
const foo;
const bar = true;
```
```typescript
// bad -> Multiple variable declarations in the same statement are forbidden
const foo, bar = true;
```

  4.14 **ordered-imports:** Requires that import statements be alphabetized.
```typescript
// good
import * as BluebirdPromise from 'bluebird';
import * as Express from 'express';
```
```typescript
// bad -> Import sources within a group must be alphabetized.
import * as Express from 'express';
import * as BluebirdPromise from 'bluebird';
```

<!--   4.22 **prefer-function-over-method:** Warns for methods that do not use ‘this’. -->
<!-- ```typescript -->

<!-- ``` -->

  4.15 **prefer-method-signature:** Prefer `foo(): void` over `foo: () => void` in interfaces and types.
```typescript
// good
interface ICanvas {
  draw(): void;
}
```
```typescript
// bad -> Use a method signature instead of a property signature of function type.
interface ICanvas {
  draw: () => void;
}
```

  4.16 **quotemark:** Requires single or double quotes for string literals.

```typescript
// good
const anyText: string = 'A wizard is never late';
```
```typescript
// good -> if you want to use singlequotes within a string
const singleQuoteChar: string = `'`;
```
```typescript
// bad -> " should be '
const anyText: string = "nor is he early";
```
```typescript
// bad -> " should be '
const singleQuoteChar: string = "'";
```

  4.17 **semicolon:** Enforces consistent semicolon usage at the end of every statement.
```typescript
// good
const good: string = 'presence of semicolon';
```
```typescript
// bad -> lack of semicolon
const bad: string = 'lack of semicolon'
```

  4.18 **space-before-function-paren:** Require or disallow a space before function parenthesis
```typescript
// good
function foo(): void {

}
```
```typescript
// bad -> Spaces before function parens are disallowed
function bar (): void {

}
```

  4.19 **variable-name:** Checks variable names for various errors.
```typescript
// good
const STATIC_PI: number = 3.14;
```
```typescript
// good
let camelCased;
```
```typescript
// good
let _underscorePrefix;
```
```typescript
// bad -> variable name clashes with keyword/type
const undefined = 'not undefined';
```
```typescript
// bad -> variable name clashes with keyword/type
let any: any;
```
```typescript
// bad -> variable name must be in camelcase or uppercase
let PascalCased;
```
```typescript
// bad -> variable name must be in camelcase or uppercase
let snake_case;
```

  4.20 **whitespace:** Enforces whitespace style conventions.

```typescript
// good
if (true) {

}
```
```typescript
// bad -> missing whitespace
if(false) {

}
```
