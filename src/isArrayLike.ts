import isLength from './isLength';

/**
 * Check if the value is array-like
 *
 * @example
 * ```js
 * isArrayLike('123');    //true
 * isArrayLike(() => { });    //false
 * isArrayLike([]);    //true
 * isArrayLike([1, 2, 3]);    //true
 * isArrayLike({ 0: 1, length: 1 });    //true
 * ```
 *
 * @param value - The value to check
 * @returns `true` if the value is array-like, else `false`
 */
export default function isArrayLike<T = any>(value: unknown): value is ArrayLike<T> {
  return value != null
    && isLength((value as ArrayLike<T>).length)
    && typeof value !== 'function';
}
