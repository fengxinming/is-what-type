/**
 * Check if the value is a valid date
 *
 * @example
 * ```js
 * isValidDate(new Date(NaN)); // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a valid date, else `false`
 */
export default function isValidDate(value: unknown): value is Date {
  return value instanceof Date && value.toString() !== 'Invalid Date';
}
