[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isLength

# isLength

## 函数

### default()

> **default**(`value`): `value is number`

定义于: [isLength.ts:22](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isLength.ts#L22)

Checks if `value` is a valid array-like length.

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is number`

`true` if `value` is a valid length, `false` otherwise

#### 示例

```js
import { isLength } from 'is-what-type';

isLength(3); // true
isLength(0); // true
isLength(Number.MIN_VALUE); // false
isLength(Infinity); // false
isLength(-1); // false
isLength(3.5); // false
isLength('3'); // false
isLength(null); // false
isLength(undefined); // false
```
