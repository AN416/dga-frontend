import { EventEmitter } from '../../stencil-public-runtime';
export declare class DgaLink {
    variant: 'primary' | 'neutral' | 'on-color';
    size: 'sm' | 'md' | 'lg';
    label: string;
    url: string;
    inline?: boolean;
    icon?: boolean;
    iconType?: any;
    disabled?: boolean;
    /** @deprecated use target prop instead */
    external?: boolean;
    target?: '_blank' | '_self' | '_parent' | '_top';
    preventScrollReset?: boolean;
    state?: {};
    extraClass?: string;
    focus: boolean;
    /**
   * Emitted when the link is clicked. The event is composed and bubbles,
   * allowing it to be caught by parent components outside the shadow DOM.
   */
    ndsClick: EventEmitter<MouseEvent>;
    /**
     * Emitted when the link gains focus.
     */
    ndsFocus: EventEmitter<void>;
    /**
     * Emitted when the link loses focus.
     */
    ndsBlur: EventEmitter<void>;
    /** @deprecated use ndsClick event instead */
    onClick?: EventEmitter<MouseEvent>;
    private handleClick;
    private handleFocus;
    private handleBlur;
    render(): any;
}
