[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isError

# isError

## 函数

### default()

> **default**(`value`): `value is Error`

定义于: [isError.ts:22](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isError.ts#L22)

Check if the value is an Error object

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is Error`

`true` if the value is an Error object, else `false`

#### 示例

```js
import { isError } from 'is-what-type';

isError(new Error()); // true
isError(new TypeError()); // true
isError({}); // false
isError({ name: 'CustomError' }); // true
isError({ name: 'NotAnError' }); // false
isError(null); // false
isError(undefined); // false
isError('string'); // false
isError(123); // false
```
