[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isAsyncFunction

# isAsyncFunction

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isAsyncFunction.ts:22](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isAsyncFunction.ts#L22)

Check if value is an async function

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`T`

The value to check

#### Returns

`value is T`

`true` if `value` is an async function, `false` otherwise

#### Example

```js
import { isAsyncFunction } from 'is-what-type';

isAsyncFunction(async () => { }); // true
isAsyncFunction(() => { }); // false
isAsyncFunction(function() { }); // false
isAsyncFunction(async function() { }); // true
isAsyncFunction(123); // false
isAsyncFunction('string'); // false
isAsyncFunction({}); // false
```
