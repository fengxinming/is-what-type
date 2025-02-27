[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isObject

# isObject

## Functions

### default()

> **default**(`value`): `value is object`

Defined in: [isObject.ts:25](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isObject.ts#L25)

Check if the value is an object.

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is object`

`true` if the value is an object, `false` otherwise

#### Example

```js
import { isObject } from 'is-what-type';

isObject(1); // false
isObject(undefined); // false
isObject({}); // true
isObject([]); // true
isObject(null); // false
isObject(function() {}); // true
isObject(new Date()); // true
isObject('string'); // false
isObject(true); // false
isObject(false); // false
isObject(NaN); // false
isObject(Infinity); // false
```
