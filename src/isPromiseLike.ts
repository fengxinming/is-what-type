import isObject from './isObject';

/**
 * Check if the value is a Promise-like object.
 *
 * @example
 * ```js
 * isPromiseLike(null);  // false
 *
 * isPromiseLike(undefined);  // false
 *
 * isPromiseLike({});  // false
 *
 * isPromiseLike(new Promise(() => { }));  // true
 *
 * isPromiseLike({ then: () => { }, catch: () => { } });  // true
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a Promise-like object, `false` otherwise
 */
export default function isPromiseLike<T = unknown>(value: T): value is T {
  return isObject(value)
    && typeof (value as any).then === 'function';
}
