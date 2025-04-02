[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isFunction

# isFunction

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: isFunction.ts:20

Check if value is an async function

#### Type Parameters

##### T

`T` = (...`args`) => `any`

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is T`

`true` if `value` is an async function, `false` otherwise

#### Example

```js
import { isAsyncFunction } from 'is-what-type';

isFunction(async () => { }); // true
isFunction(() => { }); // true
isFunction(function() { }); // true
isFunction(async function() { }); // true
isFunction(123); // false
isFunction('string'); // false
isFunction({}); // false
```
