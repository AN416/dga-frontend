import { getAssetPath } from "@stencil/core";
let CACHED_MAP;
const VALID_VARIANTS = ['stroke', 'solid', 'duotone', 'twotone', 'bulk'];
const DEPRECATED_VARIANT_MAP = {
    twotone: 'stroke',
    duotone: 'solid',
    bulk: 'solid',
};
const normalizeVariant = (variant) => {
    var _a;
    if (!variant)
        return 'stroke';
    return (_a = DEPRECATED_VARIANT_MAP[variant]) !== null && _a !== void 0 ? _a : variant;
};
/**
 * Parses an icon string in the format `[icon-name]-[variant]`
 * Example: `1st-bracket-circle-solid` -> { name: '1st-bracket-circle', variant: 'solid' }
 * Also handles legacy `[icon-name]-[variant]-[type]` strings by stripping the type.
 * If no variant suffix is found, returns the original string as the name.
 */
export const parseIconString = (iconString) => {
    if (!iconString || typeof iconString !== 'string') {
        return { name: iconString };
    }
    const lowerStr = iconString.toLowerCase().trim();
    const LEGACY_TYPES = ['rounded', 'sharp', 'standard'];
    for (const variant of VALID_VARIANTS) {
        for (const type of LEGACY_TYPES) {
            const suffix = `-${variant}-${type}`;
            if (lowerStr.endsWith(suffix)) {
                const name = lowerStr.slice(0, -suffix.length);
                if (name.length > 0) {
                    return { name, variant };
                }
            }
        }
        const suffix = `-${variant}`;
        if (lowerStr.endsWith(suffix)) {
            const name = lowerStr.slice(0, -suffix.length);
            if (name.length > 0) {
                return { name, variant };
            }
        }
    }
    return { name: lowerStr };
};
export const getIconMap = () => {
    if (typeof window === 'undefined') {
        return new Map();
    }
    else {
        if (!CACHED_MAP) {
            const win = window;
            win.GDSIcons = win.GDSIcons || {};
            CACHED_MAP = win.GDSIcons.map = win.GDSIcons.map || new Map();
        }
        return CACHED_MAP;
    }
};
/**
 * Convert ordinal numbers and special cases to words to create valid JavaScript identifiers
 */
export const ordinalToWord = (name) => {
    const ordinalMap = {
        '1st': 'First',
        '2nd': 'Second',
        '3rd': 'Third',
        '3-d': 'ThreeD',
        '3d': 'ThreeD',
        '4-k': 'FourK',
        '4k': 'FourK',
    };
    // First handle special character replacements that need to be treated as separate words
    let processedName = name.replace(/\+\+/g, '-plus-plus');
    // Remove spaces and replace with hyphens for consistent processing
    processedName = processedName.replace(/\s+/g, '-');
    // Apply ordinal conversions
    processedName = processedName.replace(/\b(1st|2nd|3rd|3-d|4-k|4k|3d)\b/g, (match) => ordinalMap[match] || match);
    return processedName;
};
export const addIcons = (icons) => {
    Object.keys(icons).forEach((name) => {
        addToIconMap(name, icons[name]);
        /**
         * Developers can also pass in the SVG object directly
         * and GDS Icons can map the object to a kebab case name.
         * Example: addIcons({ addCircleOutline });
         * This will create an "addCircleOutline" entry and
         * an "add-circle-outline" entry.
         * Usage: <ion-icon name="add-circle-outline"></ion-icon>
         * Using name="addCircleOutline" is valid too, but the
         * kebab case naming is preferred.
         */
        const toKebabCase = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2').toLowerCase();
        if (name !== toKebabCase) {
            addToIconMap(toKebabCase, icons[name]);
        }
    });
};
const addToIconMap = (name, data) => {
    const map = getIconMap();
    const existingIcon = map.get(name);
    if (existingIcon === undefined) {
        map.set(name, data);
        /**
         * Importing and defining the same icon reference
         * multiple times should not yield a warning.
         */
    }
    else if (existingIcon !== data) {
        console.warn(`[GDS Icons Warning]: Multiple icons were mapped to name "${name}". Ensure that multiple icons are not mapped to the same icon name.`);
    }
};
export const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    // Check if icon prop contains a full icon string with variant suffix
    // e.g., "1st-bracket-circle-solid"
    if (i.icon && isStr(i.icon) && !isSrc(i.icon)) {
        const parsed = parseIconString(i.icon);
        if (parsed.variant) {
            const iconName = getName(parsed.name, undefined);
            if (iconName) {
                return getNamedUrlWithVariant(iconName, parsed.variant, i);
            }
        }
    }
    url = getName(i.name, i.icon);
    if (url) {
        const parsed = parseIconString(url);
        if (parsed.variant) {
            return getNamedUrlWithVariant(parsed.name, parsed.variant, i);
        }
        return getNamedUrl(url, i);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
    }
    return null;
};
/**
 * Get the URL for a named icon using an explicit variant value.
 * Used when parsing icon strings like "icon-name-variant"
 */
const getNamedUrlWithVariant = (iconName, variant, iconEl) => {
    const normalized = normalizeVariant(variant);
    const fullName = `${iconName}-${normalized}`;
    const url = getIconMap().get(fullName) || getIconMap().get(iconName);
    if (url) {
        return url;
    }
    try {
        // const assetPath = `assets/svg/${normalized}/${iconName}-${normalized}.svg`;
        const assetPath = `assets/svg/${iconName}-${normalized}.svg`;
        const result = getAssetPath(assetPath);
        return result;
    }
    catch (e) {
        console.log('e', e);
        console.warn(`[GDS Icons Warning]: Could not load icon with name "${iconName}" (variant: ${normalized}). Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
    }
};
const getNamedUrl = (iconName, iconEl) => {
    const url = getIconMap().get(iconName);
    if (url) {
        return url;
    }
    try {
        const variant = normalizeVariant(iconEl.variant);
        const assetPath = `assets/svg/${iconName}-${variant}.svg`;
        const result = getAssetPath(assetPath);
        return result;
    }
    catch (e) {
        console.log('e', e);
        /**
         * In the custom elements build version of gds-icons, referencing an icon
         * by name will throw an invalid URL error because the asset path is not defined.
         * This catches that error and logs something that is more developer-friendly.
         * We also include a reference to the ion-icon element so developers can
         * figure out which instance of ion-icon needs to be updated.
         */
        console.warn(`[GDS Icons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
    }
};
export const getName = (iconName, icon) => {
    if (!iconName && icon && !isSrc(icon)) {
        iconName = icon;
    }
    if (isStr(iconName)) {
        iconName = toLower(iconName);
    }
    if (!isStr(iconName) || iconName.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return iconName;
};
export const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
export const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
export const isStr = (val) => typeof val === 'string';
export const toLower = (val) => val.toLowerCase();
