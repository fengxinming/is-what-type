[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isAsyncFunction

# isAsyncFunction

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isAsyncFunction.ts:25](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isAsyncFunction.ts#L25)

Check if value is an async function

校验是否为异步函数

#### 类型参数

##### T

`T` = [`AsyncFunction`](typings.md#asyncfunction)

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

isAsyncFunction(async () => { }); // true
isAsyncFunction(() => { }); // false
isAsyncFunction(function() { }); // false
isAsyncFunction(async function() { }); // true
isAsyncFunction(123); // false
isAsyncFunction('string'); // false
isAsyncFunction({}); // false
```
