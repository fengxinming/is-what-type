/**
 * Checks if `value` is a valid array-like length.
 *
 * @example
 * ```js
 * isLength(3); // true
 * isLength(Number.MIN_VALUE); // false
 * isLength(Infinity); // false
 * isLength('3'); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is a valid length, `false` otherwise
 */
export default function isLength(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) > -1;
}
