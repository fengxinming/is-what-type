[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isArrayLike

# isArrayLike

## 函数

### default()

> **default**\<`T`\>(`value`): `value is ArrayLike<T>`

定义于: [isArrayLike.ts:24](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isArrayLike.ts#L24)

Check if the value is array-like

校验是否是类数组

#### 类型参数

##### T

`T` = `any`

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is ArrayLike<T>`

`true` if the value is array-like, else `false`

#### 示例

```js
import { isArrayLike } from 'is-what-type';

isArrayLike([1, 2, 3]); // true
isArrayLike('hello'); // true
isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c' }); // true
isArrayLike(function() {}); // false
isArrayLike(null); // false
isArrayLike(undefined); // false
isArrayLike({}); // false
```
