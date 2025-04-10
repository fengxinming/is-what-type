[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPlainObject

# isPlainObject

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isPlainObject.ts:29](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isPlainObject.ts#L29)

Check if the value is a plain object

校验是否是一个普通对象

#### 类型参数

##### T

`T` = `object`

#### 参数

##### value

`T`

The value to check

#### 返回

`value is T`

`true` if the value is a plain object, else `false`

#### 示例

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
