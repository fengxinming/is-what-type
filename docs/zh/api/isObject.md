[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isObject

# isObject

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isObject.ts:27](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isObject.ts#L27)

Check if the value is an object.

校验是否是一个对象

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
