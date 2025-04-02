[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isArrayLike

# isArrayLike

## Functions

### default()

> **default**\<`T`\>(`value`): `value is ArrayLike<T>`

Defined in: [isArrayLike.ts:22](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isArrayLike.ts#L22)

Check if the value is array-like

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is ArrayLike<T>`

`true` if the value is array-like, else `false`

#### Example

```js
import { isArrayLike } from 'is-what-type';

isArrayLike([1, 2, 3]); // true
isArrayLike('hello'); // true
isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' }); // true
isArrayLike(function() {}); // false
isArrayLike(null); // false
isArrayLike(undefined); // false
isArrayLike({}); // false
```
