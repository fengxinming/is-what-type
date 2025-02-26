/**
 * Check if the value is a number
 *
 * @example
 * ```js
 * isNumber(1);  // true
 * isNumber({});  // false
 * isNumber(NaN);  // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a number, `false` otherwise
 */
export default function isNumber(value: unknown): value is number {
  // The type of NaN is "number"
  // and it is the only value in JavaScript which is not equal to itself

  // eslint-disable-next-line no-self-compare
  return typeof value === 'number' && value === value;
}
