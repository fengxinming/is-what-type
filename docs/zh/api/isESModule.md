[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isESModule

# isESModule

## 函数

### default()

> **default**\<`T`\>(`value`): `value is T`

定义于: [isESModule.ts:28](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isESModule.ts#L28)

Check if the value is an ES Module

校验是否是 ES Module

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
