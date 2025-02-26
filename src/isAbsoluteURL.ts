
const PROTOCOL = /^([a-z][a-z\d+\-.]*:)?\/\//i;

/**
 * Checks if `url` is an absolute URL.
 *
 * @example
 * ```js
 * isAbsoluteURL('/src/isAbsoluteURL.js');   // false
 * isAbsoluteURL('https://github.com');   // true
 * ```
 *
 * @param url - The value to check.
 * @returns `true` if the value is an absolute URL, `false` otherwise.
 */
export default function isAbsoluteURL(value: any): boolean {
  return PROTOCOL.test(value);
}
