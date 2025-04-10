[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPromiseLike

# isPromiseLike

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isPromiseLike.ts:27](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isPromiseLike.ts#L27)

Check if the value is a Promise-like object.

校验是否是一个 Promise-like 对象

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### value

`T`

The value to check

#### Returns

`value is T`

`true` if the value is a Promise-like object, `false` otherwise

#### Example

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
