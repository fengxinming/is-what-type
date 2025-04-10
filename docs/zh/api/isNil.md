[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isNil

# isNil

## 函数

### default()

> **default**(`value`): value is undefined \| null

定义于: [isNil.ts:23](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isNil.ts#L23)

Check if the value is null or undefineds

校验是否是 null 或者 undefined

#### 参数

##### value

`unknown`

The value to check

#### 返回

value is undefined \| null

`true` if the value is null or undefined, `false` otherwise

#### 示例

```js
import { isNil } from 'is-what-type';

isNil(null); // true
isNil(undefined); // true
isNil({}); // false
isNil(''); // false
isNil(0); // false
isNil(false); // false
isNil(NaN); // false
```
