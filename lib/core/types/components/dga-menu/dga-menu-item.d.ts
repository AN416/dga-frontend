import { EventEmitter } from '../../stencil-public-runtime';
export declare class DgaMenuItem {
    label?: string;
    disabled?: boolean;
    hasTrailElement?: boolean;
    hasLeadIcon?: boolean;
    /**
     * If the menu item is selected, it will be highlighted
     **/
    selected?: boolean;
    pressed: boolean;
    onClick?: EventEmitter<MouseEvent>;
    private handleClick;
    render(): any;
}
