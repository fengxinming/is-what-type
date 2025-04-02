[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPromiseLike

# isPromiseLike

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isPromiseLike.ts:25](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isPromiseLike.ts#L25)

Check if the value is a Promise-like object.

#### 类型参数

##### T

`T` = `unknown`

#### 参数

##### value

`T`

The value to check

#### 返回

`value is T`

`true` if the value is a Promise-like object, `false` otherwise

#### 示例

```js
import { isPromiseLike } from 'is-what-type';

isPromiseLike(null); // false
isPromiseLike(undefined); // false
isPromiseLike({}); // false
isPromiseLike(new Promise(() => { })); // true
isPromiseLike({ then: () => { }, catch: () => { } }); // true
isPromiseLike({ then: () => { } }); // true
isPromiseLike({ catch: () => { } }); // false
isPromiseLike('string'); // false
isPromiseLike(123); // false
isPromiseLike(function() {}); // false
```
