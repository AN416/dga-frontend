import { g as getAssetPath, p as proxyCustomElement, H, h, d as Host } from './p-CqmCtiRl.js';

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
const parseIconString = (iconString) => {
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
const getIconMap = () => {
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
const getUrl = (i) => {
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
const getName = (iconName, icon) => {
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
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const validateContent = (svgContent) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    // setup this way to ensure it works on our buddy IE
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
        if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
            div.removeChild(div.childNodes[i]);
        }
    }
    // must only have 1 root element
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
        const svgClass = svgElm.getAttribute('class') || '';
        svgElm.setAttribute('class', (svgClass + ' s-ion-icon').trim());
        // root element must be an svg
        // lets double check we've got valid elements
        // do not allow scripts
        if (isValid(svgElm)) {
            return div.innerHTML;
        }
    }
    return '';
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const name = elm.attributes[i].name;
            if (isStr(name) && name.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};
const isSvgDataUrl = (url) => url.startsWith('data:image/svg+xml');
const isEncodedDataUrl = (url) => url.indexOf(';utf8,') !== -1;

const gdsIconContent = new Map();
const requests = new Map();
let parser;
/**
 * Safely fallback to an empty svg
 */
function safeFallback(url) {
    const svg = '';
    gdsIconContent.set(url, svg);
    return svg;
}
const getSvgContent = (url, sanitize) => {
    /**
     * See if we already have a request for this url
     */
    const req = requests.get(url);
    if (req) {
        return req;
    }
    if (typeof fetch !== 'undefined' && typeof document !== 'undefined') {
        /**
         * If the url is a data url of an svg, then try to parse it
         * with the DOMParser. This works with content security policies enabled.
         */
        if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
            return Promise.resolve(getSvgByUrl(url));
        }
        return fetchSvg(url, sanitize);
    }
    return Promise.resolve(safeFallback(url));
};
function getSvgByUrl(url) {
    if (!parser) {
        /**
         * Create an instance of the DOM parser. This creates a single
         * parser instance for the entire app, which is more efficient.
         */
        parser = new DOMParser();
    }
    const doc = parser.parseFromString(url, 'text/html');
    const svg = doc.querySelector('svg');
    if (svg) {
        gdsIconContent.set(url, svg.outerHTML);
        return svg.outerHTML;
    }
    throw new Error(`Could not parse svg from ${url}`);
}
function fetchSvg(url, sanitize) {
    /**
     * We don't already have a request
     */
    const req = fetch(url)
        .then((rsp) => {
        /**
         * When fetching from a file:// URL, some browsers return
         * a 0 status code even when the request succeeds so don't
         * rely on rsp.ok as the only signal of success.
         */
        return rsp
            .text()
            .then((svgContent) => {
            if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
            }
            const svg = svgContent || '';
            gdsIconContent.set(url, svg);
            return svg;
        })
            .catch(() => safeFallback(url));
    })
        .catch(() => safeFallback(url));
    /**
     * Cache for the same requests
     */
    requests.set(url, req);
    return req;
}

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (el, attributes = []) => {
    const attributeObject = {};
    attributes.forEach((attr) => {
        if (el.hasAttribute(attr)) {
            const value = el.getAttribute(attr);
            if (value !== null) {
                attributeObject[attr] = el.getAttribute(attr);
            }
            el.removeAttribute(attr);
        }
    });
    return attributeObject;
};

/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
    if (hostEl) {
        if (hostEl.dir !== '') {
            return hostEl.dir.toLowerCase() === 'rtl';
        }
    }
    return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};

const guid = () => {
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
const parseCSSValue = (value) => {
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

const dgaIconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}.icon-inner,.gds-icon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}@supports (not selector(:dir(rtl))) and (selector(:host-context([dir='rtl']))){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{transform:scaleX(1)}}";

const Icon = /*@__PURE__*/ proxyCustomElement(class Icon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.iconName = null;
        this.inheritedAttributes = {};
        this.didLoadIcon = false;
        this.isVisible = false;
        /**
         * The variant of the icon.
         * Supported options are: `"stroke"` and `"solid"`.
         *
         * Deprecated options:
         * - `"twotone"` → `"stroke"`
         * - `"duotone"` → `"solid"`
         * - `"bulk"` → `"solid"`
         *
         * Deprecated options: `"duotone"`, `"twotone"`, `"bulk"`.
         * @default "stroke"
         */
        this.variant = 'stroke';
        /**
         * @deprecated This prop will be removed in a future release.
         * The type/style of the icon.
         * Available options are: `"rounded"`, `"sharp"`, `"standard"`.
         * @default "rounded"
         */
        this.type = 'rounded';
        /**
         * The size of the icon.
         * Available options are: `"2xs"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`.
         */
        this.size = 24;
        /**
         * If enabled, gds-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /**
         * When set to `false`, SVG content that is HTTP fetched will not be checked
         * if the response SVG content has any `<script>` elements, or any attributes
         * that start with `on`, such as `onclick`.
         * @default true
         */
        this.sanitize = true;
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
    }
    connectedCallback() {
        /**
         * purposely do not return the promise here because loading
         * the svg file should not hold up loading the app
         * only load the svg if it's visible
         */
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    /**
     * Loads the icon after the component has finished rendering.
     */
    componentDidLoad() {
        /**
         * Addresses an Angular issue where property values are assigned after the 'connectedCallback' but prior to the registration of watchers.
         * This enhancement ensures the loading of an icon when the component has finished rendering and the icon has yet to apply the SVG data.
         * This modification pertains to the usage of Angular's binding syntax:
         * `<agds-icon-base [name]="myIconName"></agds-icon-base>`
         */
        if (!this.didLoadIcon) {
            this.loadIcon();
        }
    }
    /**
     * Disconnect the IntersectionObserver.
     */
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    /**
     * Wait until the icon is visible in the viewport.
     * @param el - The element to observe.
     * @param rootMargin - The root margin of the observer.
     * @param cb - The callback to call when the element is visible.
     */
    waitUntilVisible(el, rootMargin, cb) {
        /**
         * IntersectionObserver is a browser API that allows you to observe
         * the visibility of an element relative to a root element. It is
         * supported in all modern browsers, except IE and when server-side
         * rendering.
         */
        const hasIntersectionObserverSupport = Boolean(this.lazy && typeof window !== 'undefined' && window.IntersectionObserver);
        /**
         * browser doesn't support IntersectionObserver
         * so just fallback to always show it
         */
        if (!hasIntersectionObserverSupport) {
            return cb();
        }
        const io = (this.io = new window.IntersectionObserver((data) => {
            if (data[0].isIntersecting) {
                io.disconnect();
                this.io = undefined;
                cb();
            }
        }, { rootMargin }));
        io.observe(el);
    }
    /**
     * Watch for changes to the icon name, src, icon, or variant properties.
     * When a change is detected, the icon will be loaded.
     */
    loadIcon() {
        if (this.isVisible) {
            const url = getUrl(this);
            if (url) {
                if (gdsIconContent.has(url)) {
                    // sync if it's already loaded
                    this.svgContent = gdsIconContent.get(url);
                }
                else {
                    // async if it hasn't been loaded
                    getSvgContent(url, this.sanitize).then(() => (this.svgContent = gdsIconContent.get(url)));
                }
                this.didLoadIcon = true;
            }
        }
        // Handle parsed icon strings (e.g., "home-solid-rounded") for iconName
        if (this.icon && isStr(this.icon) && !isSrc(this.icon)) {
            const parsed = parseIconString(this.icon);
            if (parsed.variant) {
                this.iconName = parsed.name;
                return;
            }
        }
        this.iconName = getName(this.name, this.icon);
    }
    render() {
        const { flipRtl, iconName, inheritedAttributes, el, color, size } = this;
        /**
         * we have designated that arrows & chevrons should automatically flip (unless flip-rtl
         * is set to false) because "back" is left in ltr and right in rtl, and "forward" is the opposite
         */
        const shouldAutoFlip = iconName ? (iconName.includes('arrow') || iconName.includes('chevron')) && flipRtl !== false : false;
        /**
         * if shouldBeFlippable is true, the icon should change direction when `dir` changes
         */
        const shouldBeFlippable = flipRtl || shouldAutoFlip;
        return (h(Host, Object.assign({ key: 'fef141c50170ba962a02c663fd096bdb6e0f75e7', role: "img", class: {
                'flip-rtl': shouldBeFlippable,
                'icon-rtl': shouldBeFlippable && isRTL(el),
            } }, inheritedAttributes, { style: {
                color: color !== null && color !== void 0 ? color : 'inherit',
                fontSize: parseCSSValue(size),
            } }), this.svgContent ? (h("div", { class: {
                'icon-inner': true,
            }, innerHTML: this.svgContent })) : (h("div", { class: "icon-inner" }))));
    }
    static get assetsDirs() { return ["svg"]; }
    get el() { return this; }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"],
        "variant": ["loadIcon"]
    }; }
    static get style() { return dgaIconCss; }
}, [1, "dga-icon", {
        "color": [1],
        "flipRtl": [4, "flip-rtl"],
        "name": [513],
        "variant": [1],
        "type": [1],
        "src": [1],
        "icon": [8],
        "size": [8],
        "lazy": [4],
        "sanitize": [4],
        "svgContent": [32],
        "isVisible": [32]
    }, undefined, {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"],
        "variant": ["loadIcon"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}

export { Icon as I, defineCustomElement as d, guid as g, isRTL as i };
