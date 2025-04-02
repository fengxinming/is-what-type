[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isAsyncFunction

# isAsyncFunction

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isAsyncFunction.ts:23](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isAsyncFunction.ts#L23)

Check if value is an async function

#### Type Parameters

##### T

`T` = [`AsyncFunction`](typings.md#asyncfunction)

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

isAsyncFunction(async () => { }); // true
isAsyncFunction(() => { }); // false
isAsyncFunction(function() { }); // false
isAsyncFunction(async function() { }); // true
isAsyncFunction(123); // false
isAsyncFunction('string'); // false
isAsyncFunction({}); // false
```
