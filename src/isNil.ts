
/**
 * Check if the value is null or undefineds
 *
 * @example
 * ```js
 * isNil(null);  // true
 * isNil(undefined);  // true
 * isNil({});  // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is null or undefined, `false` otherwise
 */
export default function isNil(value: unknown): value is null | undefined {
  return value == null;
}
