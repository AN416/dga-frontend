type ActiveIconVariant = 'stroke' | 'solid';
/** @deprecated Use "stroke" or "solid" instead. */
type DeprecatedIconVariant = 'duotone' | 'twotone' | 'bulk';
export type IconVariant = ActiveIconVariant | DeprecatedIconVariant;
export declare class Icon {
    private io?;
    private iconName;
    private inheritedAttributes;
    private didLoadIcon;
    el: HTMLElement;
    private svgContent?;
    private isVisible;
    /**
     * The color to use for the color of the icon.
     */
    color?: string;
    /**
     * Specifies whether the icon should horizontally flip when `dir` is `"rtl"`.
     */
    flipRtl?: boolean;
    /**
     * Specifies which icon to use from the built-in set of icons.
     */
    name?: string;
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
    variant?: IconVariant;
    /**
     * @deprecated This prop will be removed in a future release.
     * The type/style of the icon.
     * Available options are: `"rounded"`, `"sharp"`, `"standard"`.
     * @default "rounded"
     */
    type?: 'rounded' | 'sharp' | 'standard';
    /**
     * Specifies the exact `src` of an SVG file to use.
     */
    src?: string;
    /**
     * A combination of both `name` and `src`. If a `src` url is detected
     * it will set the `src` property. Otherwise it assumes it's a built-in named
     * SVG and set the `name` property.
     */
    icon?: any;
    /**
     * The size of the icon.
     * Available options are: `"2xs"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`.
     */
    size?: string | number;
    /**
     * If enabled, gds-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    lazy: boolean;
    /**
     * When set to `false`, SVG content that is HTTP fetched will not be checked
     * if the response SVG content has any `<script>` elements, or any attributes
     * that start with `on`, such as `onclick`.
     * @default true
     */
    sanitize: boolean;
    componentWillLoad(): void;
    connectedCallback(): void;
    /**
     * Loads the icon after the component has finished rendering.
     */
    componentDidLoad(): void;
    /**
     * Disconnect the IntersectionObserver.
     */
    disconnectedCallback(): void;
    /**
     * Wait until the icon is visible in the viewport.
     * @param el - The element to observe.
     * @param rootMargin - The root margin of the observer.
     * @param cb - The callback to call when the element is visible.
     */
    private waitUntilVisible;
    /**
     * Watch for changes to the icon name, src, icon, or variant properties.
     * When a change is detected, the icon will be loaded.
     */
    loadIcon(): void;
    render(): any;
}
export {};
