
/**
 * Check if the value is null or undefineds
 *
 * @example
 * ```js
 * import { isNil } from 'is-what-type';
 *
 * isNil(null); // true
 * isNil(undefined); // true
 * isNil({}); // false
 * isNil(''); // false
 * isNil(0); // false
 * isNil(false); // false
 * isNil(NaN); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is null or undefined, `false` otherwise
 */
export default function isNil(value: unknown): value is null | undefined {
  return value == null;
}
