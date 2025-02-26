import getType from './getType';

/**
 * Check if value is an async function
 *
 * @example
 * ```js
 * isAsyncFunction(async () => { });      //true
 * isAsyncFunction(() => { });      //false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is an async function, `false` otherwise
 */
export default function isAsyncFunction<T = unknown>(value: T): value is T {
  return getType(value) === 'AsyncFunction';
}
