[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isValidDate

# isValidDate

## 函数

### default()

> **default**(`value`): `value is Date`

定义于: [isValidDate.ts:24](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isValidDate.ts#L24)

Check if the value is a valid date

校验是否是一个有效的日期

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is Date`

`true` if the value is a valid date, else `false`

#### 示例

```js
import { isValidDate } from 'is-what-type';

isValidDate(new Date()); // true
isValidDate(new Date('2023-10-01')); // true
isValidDate(new Date(NaN)); // false
isValidDate('2023-10-01'); // false
isValidDate(123456789); // false
isValidDate(null); // false
isValidDate(undefined); // false
isValidDate({}); // false
isValidDate(new Date('invalid-date')); // false
```
