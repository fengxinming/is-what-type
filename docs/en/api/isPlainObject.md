[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPlainObject

# isPlainObject

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isPlainObject.ts:27](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isPlainObject.ts#L27)

Check if the value is a plain object

#### Type Parameters

• **T** = `object`

#### Parameters

##### value

`T`

The value to check

#### Returns

`value is T`

`true` if the value is a plain object, else `false`

#### Example

```js
import { isPlainObject } from 'is-what-type';

isPlainObject({}); // true
isPlainObject({ key: 'value' }); // true
isPlainObject([]); // false
isPlainObject(null); // false
isPlainObject(undefined); // false
isPlainObject(function() {}); // false
isPlainObject(new Date()); // false
isPlainObject(new (class {})()); // false

function Fn() {}
isPlainObject(new Fn()); // false
```
