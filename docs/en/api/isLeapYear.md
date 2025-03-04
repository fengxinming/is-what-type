[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isLeapYear

# isLeapYear

## Functions

### default()

> **default**(`value`): `boolean`

Defined in: [isLeapYear.ts:27](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isLeapYear.ts#L27)

Check if the year is a leap year

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`boolean`

`true` if the value is a leap year, `false` otherwise

#### Example

```js
import { isLeapYear } from 'is-what-type';

isLeapYear(2000); // true
isLeapYear(2020); // true
isLeapYear(1900); // false
isLeapYear(2021); // false
isLeapYear(new Date(2000, 0, 1)); // true
isLeapYear(new Date(2020, 0, 1)); // true
isLeapYear(new Date(1900, 0, 1)); // false
isLeapYear(new Date(2021, 0, 1)); // false
isLeapYear('2000'); // false
isLeapYear(null); // false
isLeapYear(undefined); // false
```
