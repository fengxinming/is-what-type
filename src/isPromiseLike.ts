import isObject from './isObject';

/**
 * Check if the value is a Promise-like object.
 *
 * @example
 * ```js
 * import { isPromiseLike } from 'is-what-type';
 *
 * isPromiseLike(null); // false
 * isPromiseLike(undefined); // false
 * isPromiseLike({}); // false
 * isPromiseLike(new Promise(() => { })); // true
 * isPromiseLike({ then: () => { }, catch: () => { } }); // true
 * isPromiseLike({ then: () => { } }); // true
 * isPromiseLike({ catch: () => { } }); // false
 * isPromiseLike('string'); // false
 * isPromiseLike(123); // false
 * isPromiseLike(function() {}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a Promise-like object, `false` otherwise
 */
export default function isPromiseLike<T = unknown>(value: T): value is T {
  return isObject(value)
    && typeof (value as any).then === 'function';
}
