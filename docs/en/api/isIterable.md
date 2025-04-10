[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isIterable

# isIterable

## Functions

### default()

> **default**\<`T`\>(`value`): `value is Iterable<T, any, any>`

Defined in: [isIterable.ts:24](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isIterable.ts#L24)

Check if the value is an iterable object.

校验是否是一个可迭代对象

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is Iterable<T, any, any>`

`true` if the value is an iterable object, `false` otherwise

#### Example

```js
import { isIterable } from 'is-what-type';

isIterable([]); // true
isIterable('string'); // true
isIterable(new Map()); // true
isIterable(new Set()); // true
isIterable({}); // false
isIterable(null); // false
isIterable(undefined); // false
isIterable(123); // false
isIterable(function() {}); // false
```
