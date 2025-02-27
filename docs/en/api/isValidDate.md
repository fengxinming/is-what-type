[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isValidDate

# isValidDate

## Functions

### default()

> **default**(`value`): `value is Date`

Defined in: [isValidDate.ts:22](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isValidDate.ts#L22)

Check if the value is a valid date

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is Date`

`true` if the value is a valid date, else `false`

#### Example

```js
import { isValidDate } from 'is-what-type';

isValidDate(new Date()); // true
isValidDate(new Date('2023-10-01')); // true
isValidDate(new Date(NaN)); // false
isValidDate('2023-10-01'); // false
isValidDate(123456789); // false
isValidDate(null); // false
isValidDate(undefined); // false
isValidDate({}); // false
isValidDate(new Date('invalid-date')); // false
```
