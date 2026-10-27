import { JSX } from '../stencil-public-runtime';
export declare const guid: () => string;
export type StripHTML<T> = Omit<T, keyof JSX.Element>;
/**
 * Parse a CSS dimension value from string or number.
 * Numbers are converted to pixels, strings with units are returned as-is.
 *
 * @param value - The value to parse (string or number)
 * @returns The parsed CSS value string or undefined
 *
 * @example
 * parseCSSValue(16) // "16px"
 * parseCSSValue("100%") // "100%"
 * parseCSSValue("2rem") // "2rem"
 * parseCSSValue(0) // undefined
 */
export declare const parseCSSValue: (value: string | number | undefined) => string | undefined;
