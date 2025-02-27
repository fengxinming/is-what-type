import getType from './getType';
import isObject from './isObject';

/**
 * Check if the value is a plain object
 *
 * @example
 * ```js
 * import { isPlainObject } from 'is-what-type';
 *
 * isPlainObject({}); // true
 * isPlainObject({ key: 'value' }); // true
 * isPlainObject([]); // false
 * isPlainObject(null); // false
 * isPlainObject(undefined); // false
 * isPlainObject(function() {}); // false
 * isPlainObject(new Date()); // false
 * isPlainObject(new (class {})()); // false
 *
 * function Fn() {}
 * isPlainObject(new Fn()); // false
 * ```
 *
 * @param value The value to check
 * @returns `true` if the value is a plain object, else `false`
 */
export default function isPlainObject<T = object>(value: T): value is T {
  if (!isObject(value) || getType(value) !== 'Object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
