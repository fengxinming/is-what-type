[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isObject

# isObject

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isObject.ts:25](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isObject.ts#L25)

Check if the value is an object.

#### Type Parameters

##### T

`T` = `object`

#### Parameters

##### value

`unknown`

The value to check

#### Returns

`value is T`

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
