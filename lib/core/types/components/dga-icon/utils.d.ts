import { Icon } from './dga-icon';
declare const VALID_VARIANTS: readonly ["stroke", "solid", "duotone", "twotone", "bulk"];
type IconVariant = (typeof VALID_VARIANTS)[number];
export interface ParsedIcon {
    name: string;
    variant?: IconVariant;
}
/**
 * Parses an icon string in the format `[icon-name]-[variant]`
 * Example: `1st-bracket-circle-solid` -> { name: '1st-bracket-circle', variant: 'solid' }
 * Also handles legacy `[icon-name]-[variant]-[type]` strings by stripping the type.
 * If no variant suffix is found, returns the original string as the name.
 */
export declare const parseIconString: (iconString: string) => ParsedIcon;
export declare const getIconMap: () => Map<string, string>;
/**
 * Convert ordinal numbers and special cases to words to create valid JavaScript identifiers
 */
export declare const ordinalToWord: (name: string) => string;
export declare const addIcons: (icons: {
    [name: string]: string;
}) => void;
export declare const getUrl: (i: Icon) => string;
export declare const getName: (iconName: string | undefined, icon: string | undefined) => string;
export declare const getSrc: (src: string | undefined) => string;
export declare const isSrc: (str: string) => boolean;
export declare const isStr: (val: any) => val is string;
export declare const toLower: (val: string) => string;
export {};
