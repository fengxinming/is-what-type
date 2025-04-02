[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isLength

# isLength

## Functions

### default()

> **default**(`value`): `value is number`

Defined in: [isLength.ts:22](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isLength.ts#L22)

Checks if `value` is a valid array-like length.

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is number`

`true` if `value` is a valid length, `false` otherwise

#### Example

```js
import { isLength } from 'is-what-type';

isLength(3); // true
isLength(0); // true
isLength(Number.MIN_VALUE); // false
isLength(Infinity); // false
isLength(-1); // false
isLength(3.5); // false
isLength('3'); // false
isLength(null); // false
isLength(undefined); // false
```
