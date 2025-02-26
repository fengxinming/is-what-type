/**
 * Check if the value is an Error object
 *
 * @example
 * ```js
 * isError(new Error());  // true
 * isError({});  // false
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is an Error object, else `false`
 */
export default function isError(value: unknown): value is Error {
  if (value == null) {
    return false;
  }
  if (value instanceof Error) {
    return true;
  }
  // custom error
  const { name } = value as {name: string};
  return typeof name === 'string' && name.endsWith('Error');
}
