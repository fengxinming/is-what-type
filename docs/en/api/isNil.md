[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isNil

# isNil

## Functions

### default()

> **default**(`value`): value is undefined \| null

Defined in: [isNil.ts:21](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isNil.ts#L21)

Check if the value is null or undefineds

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
