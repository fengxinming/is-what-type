[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isNil

# isNil

## Functions

### default()

> **default**(`value`): value is undefined \| null

Defined in: [isNil.ts:23](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isNil.ts#L23)

Check if the value is null or undefineds

校验是否是 null 或者 undefined

#### Parameters

##### value

`unknown`

The value to check

#### Returns

value is undefined \| null

`true` if the value is null or undefined, `false` otherwise

#### Example

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
