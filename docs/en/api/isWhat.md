[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isWhat

# isWhat

## Functions

### default()

> **default**\<`T`\>(`value`, `type`, `comparingType`): `value is T`

Defined in: isWhat.ts:16

Check if the value is what you want

校验是否是想要的类型

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### value

`unknown`

The value to check

##### type

`unknown`

The type of the value

##### comparingType

`unknown`

The type to compare with

#### Returns

`value is T`

#### Example

```js
import { isWhat } from 'is-what-type';
```
