/**
 * Check if value is an async function
 *
 * @example
 * ```js
 * import { isAsyncFunction } from 'is-what-type';
 *
 * isFunction(async () => { }); // true
 * isFunction(() => { }); // true
 * isFunction(function() { }); // true
 * isFunction(async function() { }); // true
 * isFunction(123); // false
 * isFunction('string'); // false
 * isFunction({}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is an async function, `false` otherwise
 */
export default function isFunction<T =(...args: any[]) => any>(value: unknown): value is T {
  return typeof value === 'function';
}
