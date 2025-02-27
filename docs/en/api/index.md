**is-what-type**

***

# is-what-type

[![npm package](https://nodei.co/npm/is-what-type.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/is-what-type)

> A simple type-checking utility library.

[![NPM Version](https://img.shields.io/npm/v/is-what-type.svg?style=flat)](https://npmjs.org/package/is-what-type)
[![NPM Downloads](https://img.shields.io/npm/dm/is-what-type.svg?style=flat)](https://npmjs.org/package/is-what-type)

## Installation

::: code-group

```bash [npm]
npm add is-what-type
```

```bash [pnpm]
pnpm add is-what-type
```

```bash [yarn]
yarn add is-what-type
```

```bash [bun]
bun add is-what-type
```

:::

## Feature Overview

- :clipboard: **API Count**: Provides 15 practical type-checking functions.
- :zap: **Efficient and Accurate**: Provides efficient type-checking functions to ensure accurate results.
- :book: **Easy to Use**: Offers a clean and concise API design for quick developer adoption.
- :package: **Cross-Platform Compatibility**: Works in both JavaScript and TypeScript environments.
- :white_check_mark: **Unit Test Coverage**: All functionalities are thoroughly covered by unit tests to ensure code quality.
- :link: **No External Dependencies**: Does not rely on any third-party libraries, keeping it lightweight.

## API List

### getType

Get the type of a value.

```typescript
import { getType } from 'is-what-type';

console.log(getType(null)); // 'Null'
console.log(getType(undefined)); // 'Undefined'
console.log(getType(1)); // 'Number'
console.log(getType('string')); // 'String'
console.log(getType(true)); // 'Boolean'
console.log(getType([])); // 'Array'
console.log(getType({})); // 'Object'
console.log(getType(function() {})); // 'Function'
console.log(getType(new Date())); // 'Date'
console.log(getType(new RegExp(''))); // 'RegExp'
console.log(getType(new Error())); // 'Error'
console.log(getType(new Map())); // 'Map'
console.log(getType(new Set())); // 'Set'
console.log(getType(new WeakMap())); // 'WeakMap'
console.log(getType(new WeakSet())); // 'WeakSet'
console.log(getType(new Promise(() => {}))); // 'Promise'
console.log(getType(Symbol())); // 'Symbol'
console.log(getType(new Int8Array())); // 'Int8Array'
console.log(getType(new Uint8Array())); // 'Uint8Array'
console.log(getType(new Uint8ClampedArray())); // 'Uint8ClampedArray'
console.log(getType(new Int16Array())); // 'Int16Array'
console.log(getType(new Uint16Array())); // 'Uint16Array'
console.log(getType(new Int32Array())); // 'Int32Array'
console.log(getType(new Uint32Array())); // 'Uint32Array'
console.log(getType(new Float32Array())); // 'Float32Array'
console.log(getType(new Float64Array())); // 'Float64Array'
console.log(getType(new BigInt64Array())); // 'BigInt64Array'
console.log(getType(new BigUint64Array())); // 'BigUint64Array'
```

### isAbsoluteURL

Check if a value is an absolute URL.

```typescript
import { isAbsoluteURL } from 'is-what-type';

console.log(isAbsoluteURL('https://github.com')); // true
console.log(isAbsoluteURL('/src/index.js')); // false
console.log(isAbsoluteURL('http://example.com')); // true
console.log(isAbsoluteURL('example.com')); // false
```

### isArrayLike

Check if a value is an array-like object.

```typescript
import { isArrayLike } from 'is-what-type';

console.log(isArrayLike('123')); // true
console.log(isArrayLike(() => {})); // false
console.log(isArrayLike([])); // true
console.log(isArrayLike([1, 2, 3])); // true
console.log(isArrayLike({ 0: 1, length: 1 })); // true
```

### isAsyncFunction

Check if a value is an async function.

```typescript
import { isAsyncFunction } from 'is-what-type';

async function asyncFunction() {}

console.log(isAsyncFunction(asyncFunction)); // true
console.log(isAsyncFunction(() => {})); // false
console.log(isAsyncFunction(function() {})); // false
console.log(isAsyncFunction({})); // false
```

### isESModule

Check if a value is an ES module.

```typescript
import { isESModule } from 'is-what-type';

const esModule = { __esModule: true };
const generatorFunction = function*() {};
const generatorObject = generatorFunction();

console.log(isESModule(esModule)); // true
console.log(isESModule(generatorFunction)); // false
console.log(isESModule(generatorObject)); // false
console.log(isESModule({})); // false
```

### isError

Check if a value is an error object.

```typescript
import { isError } from 'is-what-type';

console.log(isError(new Error('error'))); // true
console.log(isError({ name: 'Error' })); // true
console.log(isError('error')); // false
console.log(isError({})); // false
```

### isIterable

Check if a value is an iterable object.

```typescript
import { isIterable } from 'is-what-type';

console.log(isIterable([])); // true
console.log(isIterable('string')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable({})); // false
console.log(isIterable(null)); // false
console.log(isIterable(undefined)); // false
```

### isLeapYear

Check if a year is a leap year.

```typescript
import { isLeapYear } from 'is-what-type';

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2004)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2021)); // false
```

### isLength

Check if a value is a valid array-like length.

```typescript
import { isLength } from 'is-what-type';

console.log(isLength(3)); // true
console.log(isLength(Number.MIN_VALUE)); // false
console.log(isLength(Infinity)); // false
console.log(isLength('3')); // false
```

### isNil

Check if a value is `null` or `undefined`.

```typescript
import { isNil } from 'is-what-type';

console.log(isNil(null)); // true
console.log(isNil(undefined)); // true
console.log(isNil({})); // false
```

### isNumber

Check if a value is a number.

```typescript
import { isNumber } from 'is-what-type';

console.log(isNumber(1)); // true
console.log(isNumber(NaN)); // false
console.log(isNumber('1')); // false
```

### isObject

Check if a value is an object.

```typescript
import { isObject } from 'is-what-type';

console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(null)); // false
console.log(isObject(1)); // false
```

### isPlainObject

Check if a value is a plain object.

```typescript
import { isPlainObject } from 'is-what-type';

console.log(isPlainObject({})); // true
console.log(isPlainObject(new Date())); // false
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(undefined)); // false
```

### isPromiseLike

Check if a value is a promise-like object.

```typescript
import { isPromiseLike } from 'is-what-type';

console.log(isPromiseLike(new Promise(() => {}))); // true
console.log(isPromiseLike({ then: () => {} })); // true
console.log(isPromiseLike({ then: 'not a function' })); // false
console.log(isPromiseLike({})); // false
```

### isValidDate

Check if a value is a valid date.

```typescript
import { isValidDate } from 'is-what-type';

console.log(isValidDate(new Date())); // true
console.log(isValidDate(new Date('invalid'))); // false
console.log(isValidDate('2023-10-01')); // false
```
