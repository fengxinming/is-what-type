
const PROTOCOL = /^([a-z][a-z\d+\-.]*:)?\/\//i;

/**
 * Checks if `url` is an absolute URL.
 *
 * @example
 * ```js
 * import { isAbsoluteURL } from 'is-what-type';
 *
 * isAbsoluteURL('https://example.com'); // true
 * isAbsoluteURL('/foo/bar'); // false
 * isAbsoluteURL('ftp://example.com'); // true
 * isAbsoluteURL('mailto:foo@bar.com'); // true
 * isAbsoluteURL('file:///usr/bin/myfile'); // true
 * isAbsoluteURL('//example.com'); // true
 * isAbsoluteURL('example.com'); // false
 * ```
 *
 * @param value - The value to check.
 * @returns `true` if the value is an absolute URL, `false` otherwise.
 */
export default function isAbsoluteURL(value: any): boolean {
  return PROTOCOL.test(value);
}
