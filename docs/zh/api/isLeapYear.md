[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isLeapYear

# isLeapYear

## 函数

### default()

> **default**(`value`): `boolean`

定义于: [isLeapYear.ts:29](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isLeapYear.ts#L29)

Check if the year is a leap year

校验是否为闰年

#### 参数

##### value

`unknown`

The value to check

#### 返回

`boolean`

`true` if the value is a leap year, `false` otherwise

#### 示例

```js
import { isLeapYear } from 'is-what-type';

isLeapYear(2000); // true
isLeapYear(2020); // true
isLeapYear(1900); // false
isLeapYear(2021); // false
isLeapYear(new Date(2000, 0, 1)); // true
isLeapYear(new Date(2020, 0, 1)); // true
isLeapYear(new Date(1900, 0, 1)); // false
isLeapYear(new Date(2021, 0, 1)); // false
isLeapYear('2000'); // false
isLeapYear(null); // false
isLeapYear(undefined); // false
```
