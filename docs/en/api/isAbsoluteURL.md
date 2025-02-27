[**is-what-type**](index.md)

***

[is-what-type](modules.md) / isAbsoluteURL

# isAbsoluteURL

## Functions

### default()

> **default**(`value`): `boolean`

Defined in: [isAbsoluteURL.ts:23](https://github.com/fengxinming/is-what-type/blob/0c5056645ee3ca915d569899c6e6192d9d8dc8a8/src/isAbsoluteURL.ts#L23)

Checks if `url` is an absolute URL.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`boolean`

`true` if the value is an absolute URL, `false` otherwise.

#### Example

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
