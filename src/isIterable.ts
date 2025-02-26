/**
 * Check if the value is an iterable object.
 *
 * @example
 * ```js
 * isIterable([]);  // true
 * isIterable('string');  // true
 * isIterable(new Map());  // true
 * isIterable({});  // false
 * isIterable(null);  // false
 * isIterable(undefined);  // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an iterable object, `false` otherwise
 */
export default function isIterable<T = any>(value: unknown): value is Iterable<T> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
