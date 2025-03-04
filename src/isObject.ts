/**
 * Check if the value is an object.
 *
 * @example
 * ```js
 * import { isObject } from 'is-what-type';
 *
 * isObject(1); // false
 * isObject(undefined); // false
 * isObject({}); // true
 * isObject([]); // true
 * isObject(null); // false
 * isObject(function() {}); // true
 * isObject(new Date()); // true
 * isObject('string'); // false
 * isObject(true); // false
 * isObject(false); // false
 * isObject(NaN); // false
 * isObject(Infinity); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an object, `false` otherwise
 */
export default function isObject(value: unknown): value is object {
  return value !== null && typeof value === 'object';
}
