[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isAbsoluteURL

# isAbsoluteURL

## 函数

### default()

> **default**(`value`): `boolean`

定义于: [isAbsoluteURL.ts:25](https://github.com/fengxinming/is-what-type/blob/b8637cab33d631a672cfc558f39e82fe4f36481a/src/isAbsoluteURL.ts#L25)

Checks if `url` is an absolute URL.

校验是否是绝对URL

#### 参数

##### value

`any`

The value to check.

#### 返回

`boolean`

`true` if the value is an absolute URL, `false` otherwise.

#### 示例

```js
import { isAbsoluteURL } from 'is-what-type';

isAbsoluteURL('https://example.com'); // true
isAbsoluteURL('/foo/bar'); // false
isAbsoluteURL('ftp://example.com'); // true
isAbsoluteURL('mailto:foo@bar.com'); // true
isAbsoluteURL('file:///usr/bin/myfile'); // true
isAbsoluteURL('//example.com'); // true
isAbsoluteURL('example.com'); // false
```
