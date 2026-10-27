import { SxProps } from '../../utils/sx-handler';
export declare class DgaPagination {
    size?: 'small' | 'medium' | 'large';
    totalPageCount: number;
    currentPage: number;
    siblingCount?: number;
    onChange?: (value: number) => void;
    openDotsIndex: number | null;
    anchor: 'left' | 'right' | 'center';
    get paginationRange(): (number | string)[];
    private onNext;
    private onPrevious;
    private handelPageChange;
    private toggleDotsMenu;
    private closeDotsMenu;
    private handleOutsideClick;
    private handleDotsItemClick;
    sx?: SxProps | string;
    el: HTMLElement;
    private sxHandler;
    componentWillLoad(): void;
    componentDidLoad(): void;
    sxChanged(): void;
    disconnectedCallback(): void;
    render(): any;
}
