/**
 * Checks if `value` is a valid array-like length.
 *
 * @example
 * ```js
 * import { isLength } from 'is-what-type';
 *
 * isLength(3); // true
 * isLength(0); // true
 * isLength(Number.MIN_VALUE); // false
 * isLength(Infinity); // false
 * isLength(-1); // false
 * isLength(3.5); // false
 * isLength('3'); // false
 * isLength(null); // false
 * isLength(undefined); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if `value` is a valid length, `false` otherwise
 */
export default function isLength(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) > -1;
}
