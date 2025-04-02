[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isValidDate

# isValidDate

## 函数

### default()

> **default**(`value`): `value is Date`

定义于: [isValidDate.ts:22](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isValidDate.ts#L22)

Check if the value is a valid date

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
