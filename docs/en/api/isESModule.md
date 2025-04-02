[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isESModule

# isESModule

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isESModule.ts:26](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isESModule.ts#L26)

Check if the value is an ES Module

#### Type Parameters

##### T

`T` = `object`

#### Parameters

##### value

`unknown`

THe value to check

#### Returns

`value is T`

`true` if the value is an ES Module, else `false`

#### Example

```js
import { isESModule } from 'is-what-type';

isESModule({}); // false
isESModule({ __esModule: true }); // true
isESModule({ [Symbol.toStringTag]: 'Module' }); // true
isESModule('string'); // false
isESModule(123); // false
isESModule(null); // false
isESModule(undefined); // false
```
