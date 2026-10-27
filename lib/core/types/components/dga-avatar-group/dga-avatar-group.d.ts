import { SxProps } from '../../utils/sx-handler';
export type AvatarSize = 120 | 80 | 68 | 48 | 40 | 32 | 24;
export declare class DgaAvatarGroup {
    el: HTMLElement;
    /******************
     * Private Properties
     ******************/
    private sxHandler;
    /******************
     * States
     ******************/
    /**
     * Internal state to track overflow count.
     */
    private overflowCount;
    /******************
     * Props
     ******************/
    /**
     * The styles to apply to the component.
     */
    sx?: SxProps | string;
    /**
     * Whether the avatars are stacked.
     */
    stacked?: boolean;
    /**
     * The total number of avatars in the set.
     */
    total?: number;
    /**
     * Maximum number of avatars to display.
     * Additional avatars will be represented by a "+N" indicator.
     * Set to 0 or undefined to show all avatars.
     */
    max?: number;
    /**
     * The size of the avatars.
     * Supported sizes: 24, 32, 40, 48, 68, 80, 120.
     * Default is 32.
     */
    size?: AvatarSize;
    /**
     * Whether the avatars are square.
     * Default is false.
     */
    square?: boolean;
    /**
     * Whether the avatars have a border.
     * Default is false.
     */
    border?: boolean;
    /******************
     * Methods
     ******************/
    /**
     * Get the overlap value, using size-based defaults if not provided.
     */
    private getOverlap;
    onPropsChange(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    sxChanged(): void;
    disconnectedCallback(): void;
    /**
     * Calculate overflow count from light DOM children.
     * Called before render to avoid state changes during componentDidLoad.
     */
    private calculateOverflow;
    /**
     * Setup listener for slot changes.
     */
    private setupSlotListener;
    /**
     * Update child avatar elements with set properties.
     */
    private updateChildAvatars;
    render(): any;
}
