[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isESModule

# isESModule

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isESModule.ts:26](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isESModule.ts#L26)

Check if the value is an ES Module

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`T`

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
