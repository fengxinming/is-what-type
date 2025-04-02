[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isIterable

# isIterable

## Functions

### default()

> **default**\<`T`\>(`value`): `value is Iterable<T, any, any>`

Defined in: [isIterable.ts:22](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isIterable.ts#L22)

Check if the value is an iterable object.

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
