[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPlainObject

# isPlainObject

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isPlainObject.ts:29](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isPlainObject.ts#L29)

Check if the value is a plain object

校验是否是一个普通对象

#### Type Parameters

##### T

`T` = `object`

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
