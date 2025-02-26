/**
 * Check if the value is an object.
 *
 * @example
 * ```js
 * isObject(1);  // false
 * isObject(undefined);  // false
 * isObject({});  // true
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an object, `false` otherwise
 */
export default function isObject(value: unknown): value is object {
  return value !== null && typeof value === 'object';
}
