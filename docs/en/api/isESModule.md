[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isESModule

# isESModule

## Functions

### default()

> **default**\<`T`\>(`value`): `value is T`

Defined in: [isESModule.ts:28](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isESModule.ts#L28)

Check if the value is an ES Module

校验是否是 ES Module

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
