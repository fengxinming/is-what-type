[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isPromiseLike

# isPromiseLike

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isPromiseLike.ts:25](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isPromiseLike.ts#L25)

Check if the value is a Promise-like object.

#### Type Parameters

• **T** = `unknown`

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
