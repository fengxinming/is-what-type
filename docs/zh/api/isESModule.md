[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isESModule

# isESModule

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isESModule.ts:26](https://github.com/fengxinming/is-what-type/blob/f4e09002a93d5c5e57581d09499897cd37947140/src/isESModule.ts#L26)

Check if the value is an ES Module

#### 类型参数

##### T

`T` = `object`

#### 参数

##### value

`unknown`

THe value to check

#### 返回

`value is T`

`true` if the value is an ES Module, else `false`

#### 示例

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
