import isNumber from './isNumber';
import isValidDate from './isValidDate';

/**
 * Check if the year is a leap year
 *
 * @example
 * ```js
 * isLeapYear(2000);
 * // true
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is a leap year, `false` otherwise
 */
export default function isLeapYear(value: unknown): boolean {
  let year: number = value as number;
  if (isValidDate(value)) {
    year = value.getFullYear();
  }
  else if (!isNumber(value)) {
    return false;
  }

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
