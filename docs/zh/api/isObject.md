[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isObject

# isObject

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isObject.ts:25](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isObject.ts#L25)

Check if the value is an object.

#### 类型参数

##### T

`T` = `object`

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is T`

`true` if the value is an object, `false` otherwise

#### 示例

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
