[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isFunction

# isFunction

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isFunction.ts:22](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isFunction.ts#L22)

Check if value is an async function

校验是否为函数

#### 类型参数

##### T

`T` = (...`args`) => `any`

#### 参数

##### value

`unknown`

The value to check

#### 返回

`value is T`

`true` if `value` is an async function, `false` otherwise

#### 示例

```js
import { isAsyncFunction } from 'is-what-type';

isFunction(async () => { }); // true
isFunction(() => { }); // true
isFunction(function() { }); // true
isFunction(async function() { }); // true
isFunction(123); // false
isFunction('string'); // false
isFunction({}); // false
```
