import getType from './getType';

/**
 * Check if value is an async function
 *
 * @example
 * ```js
 * import { isAsyncFunction } from 'is-what-type';
 *
 * isAsyncFunction(async () => { }); // true
 * isAsyncFunction(() => { }); // false
 * isAsyncFunction(function() { }); // false
 * isAsyncFunction(async function() { }); // true
 * isAsyncFunction(123); // false
 * isAsyncFunction('string'); // false
 * isAsyncFunction({}); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is an async function, `false` otherwise
 */
export default function isAsyncFunction<T = unknown>(value: T): value is T {
  return getType(value) === 'AsyncFunction';
}
