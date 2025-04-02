[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isNumber

# isNumber

## Functions

### default()

> **default**(`value`): `value is number`

Defined in: [isNumber.ts:25](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isNumber.ts#L25)

Check if the value is a number

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is number`

`true` if the value is a number, `false` otherwise

#### Example

```js
import { isNumber } from 'is-what-type';

isNumber(1); // true
isNumber(0); // true
isNumber(-1); // true
isNumber(3.14); // true
isNumber(NaN); // false
isNumber(Infinity); // true
isNumber(-Infinity); // true
isNumber({}); // false
isNumber('1'); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber(function() {}); // false
```
