[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isNumber

# isNumber

## 函数

### default()

> **default**(`value`): `value is number`

定义于: [isNumber.ts:27](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isNumber.ts#L27)

Check if the value is a number

校验是否是一个数字

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is number`

`true` if the value is a number, `false` otherwise

#### 示例

```js
import { isNumber } from 'is-what-type';

isNumber(1); // true
isNumber(0); // true
isNumber(-1); // true
isNumber(3.14); // true
isNumber(NaN); // false
isNumber(Infinity); // true
isNumber(-Infinity); // true
isNumber({}); // false
isNumber('1'); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber(function() {}); // false
```
