export const guid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
};
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
export const parseCSSValue = (value) => {
    if (value === undefined || value === null) {
        return undefined;
    }
    // Handle zero explicitly - valid CSS value
    if (value === 0 || value === '0') {
        return '0px';
    }
    // If it's already a string with units or CSS functions, return as is
    if (typeof value === 'string' &&
        (value.includes('px') ||
            value.includes('rem') ||
            value.includes('em') ||
            value.includes('%') ||
            value.includes('vh') ||
            value.includes('vw') ||
            value.startsWith('var(') ||
            value.startsWith('calc(') ||
            value.startsWith('clamp(') ||
            value.startsWith('min(') ||
            value.startsWith('max(') ||
            value === 'auto' ||
            value === 'fit-content' ||
            value === 'max-content' ||
            value === 'min-content')) {
        return value;
    }
    // If it's a number or string number, convert to px (including negative values)
    if (typeof value === 'number' || !isNaN(Number(value))) {
        const numValue = Number(value);
        return `${numValue}px`;
    }
    return undefined;
};
