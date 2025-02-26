import isObject from './isObject';

const hasSymbol
  = typeof Symbol === 'function'
  && typeof Symbol.toStringTag === 'symbol';

/**
 * Check if the value is an ES Module
 *
 * @example
 * ```js
 * isESModule({})
 * // false
 * ```
 *
 * @param value THe value to check
 * @returns `true` if the value is an ES Module, else `false`
 */
export default function isESModule<T = unknown>(value: T): value is T {
  return isObject(value)
    && ((value as any).__esModule || (hasSymbol && value[Symbol.toStringTag] === 'Module'));
}
