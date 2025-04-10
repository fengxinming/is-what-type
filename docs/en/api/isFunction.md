[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isFunction

# isFunction

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isFunction.ts:22](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isFunction.ts#L22)

Check if value is an async function

校验是否为函数

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
