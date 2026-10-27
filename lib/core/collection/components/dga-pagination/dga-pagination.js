import { h } from "@stencil/core";
import { guid } from "../../utils";
import { SxHandler } from "../../utils/sx-handler";
import { isRTL } from "../../utils/rtl";
import { arrowLeft01Stroke, arrowRight01Stroke, tick01Stroke } from "@platformscode/icons";
const DOTS = '...';
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
export class DgaPagination {
    constructor() {
        this.size = 'large';
        this.totalPageCount = 10;
        this.currentPage = 1;
        this.siblingCount = 1;
        this.onChange = () => { };
        this.openDotsIndex = null;
        this.anchor = 'center';
        this.onNext = () => {
            if (this.currentPage == this.totalPageCount)
                return;
            this.anchor = 'center';
            this.currentPage = this.currentPage + 1;
            this.onChange && this.onChange(this.currentPage);
        };
        this.onPrevious = () => {
            if (this.currentPage == 1)
                return;
            this.anchor = 'center';
            this.currentPage = this.currentPage - 1;
            this.onChange && this.onChange(this.currentPage);
        };
        this.handelPageChange = (activePage, anchor = 'center') => {
            this.anchor = anchor;
            if (activePage == this.currentPage)
                return;
            this.currentPage = activePage;
            this.onChange(this.currentPage);
        };
        this.toggleDotsMenu = (index) => {
            this.openDotsIndex = this.openDotsIndex === index ? null : index;
            if (this.openDotsIndex !== null) {
                document.addEventListener('click', this.handleOutsideClick);
            }
            else {
                document.removeEventListener('click', this.handleOutsideClick);
            }
        };
        this.closeDotsMenu = () => {
            this.openDotsIndex = null;
            document.removeEventListener('click', this.handleOutsideClick);
        };
        this.handleOutsideClick = (event) => {
            const target = event.target;
            if (!this.el.contains(target)) {
                this.closeDotsMenu();
            }
        };
        this.handleDotsItemClick = (page, anchor) => {
            this.handelPageChange(page, anchor);
            this.closeDotsMenu();
        };
    }
    get paginationRange() {
        var _a;
        const { totalPageCount, currentPage, anchor } = this;
        const siblingCount = (_a = this.siblingCount) !== null && _a !== void 0 ? _a : 1;
        const totalPageNumbers = siblingCount + 5;
        // If the number of pages is less than the page numbers we want to show in our pagination component, we return the range [1..totalPageCount]
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        let leftSiblingIndex;
        let rightSiblingIndex;
        if (anchor === 'right') {
            leftSiblingIndex = Math.max(currentPage - 2 * siblingCount, 1);
            rightSiblingIndex = currentPage;
        }
        else if (anchor === 'left') {
            leftSiblingIndex = currentPage;
            rightSiblingIndex = Math.min(currentPage + 2 * siblingCount, totalPageCount);
        }
        else {
            leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        }
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        let result;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            result = [...range(1, leftItemCount), DOTS, totalPageCount];
        }
        else if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            result = [firstPageIndex, DOTS, ...range(totalPageCount - rightItemCount + 1, totalPageCount)];
        }
        else if (shouldShowLeftDots && shouldShowRightDots) {
            result = [firstPageIndex, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, lastPageIndex];
        }
        else {
            return [];
        }
        // Inline DOTS that would hide only a single page (show the page directly instead)
        const inlined = [];
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            if (item === DOTS) {
                const prev = result[i - 1];
                const next = result[i + 1];
                if (next - prev === 2) {
                    inlined.push(prev + 1);
                    continue;
                }
            }
            inlined.push(item);
        }
        return inlined;
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
        document.removeEventListener('click', this.handleOutsideClick);
    }
    render() {
        const { el } = this;
        const dir = isRTL(el) ? 'rtl' : 'ltr';
        return (h("ul", { key: 'a36a677c4dc43255131af54c225334082f09c2a8', dir: dir, class: `pagination pagination--${this.size}` }, h("li", { key: '01a0d519fd0ef67f878a1a0e70cb04e13b73ba60', class: "pagination__item pagination__arrow" }, h("button", { key: '148c8ea8d0d149e38aba29cbdc9572ba2dbf2eb2', onClick: this.onPrevious, disabled: this.currentPage === 1 }, h("dga-icon", { key: 'ccaf5b086bb22688953b034e89f82e763e0c4b1e', icon: arrowLeft01Stroke, size: 24, color: '#161616' }))), this.paginationRange &&
            this.paginationRange.map((pageNumber, index, arr) => {
                if (pageNumber === DOTS) {
                    const prevPage = arr[index - 1];
                    const nextPage = arr[index + 1];
                    const hiddenPages = range(prevPage + 1, nextPage - 1);
                    const isOpen = this.openDotsIndex === index;
                    const dotsAnchor = index === 1 ? 'left' : 'right';
                    return (h("li", { key: guid(), class: `pagination__item pagination__item--dots ${isOpen ? 'pagination__item--dots-open' : ''}` }, h("button", { "aria-haspopup": "true", "aria-expanded": isOpen ? 'true' : 'false', onClick: (e) => {
                            e.stopPropagation();
                            this.toggleDotsMenu(index);
                        } }, "\u2026"), isOpen && (h("ul", { class: "pagination__dropdown" }, hiddenPages.map(page => (h("li", { key: page, class: `pagination__dropdown-item ${this.currentPage === page ? 'pagination__dropdown-item--active' : ''}`, onClick: () => this.handleDotsItemClick(page, dotsAnchor) }, h("span", { class: "pagination__dropdown-label" }, page), this.currentPage === page && (h("dga-icon", { icon: tick01Stroke, size: 16, color: "#161616" })))))))));
                }
                return (h("li", { key: guid(), class: `pagination__item ${this.currentPage === pageNumber ? 'pagination__item--active' : ''}` }, h("button", { onClick: () => {
                        this.handelPageChange(pageNumber);
                    } }, pageNumber)));
            }), h("li", { key: '316eee5365c410b337d9aea86b0cd782c1511029', class: "pagination__item pagination__arrow" }, h("button", { key: '5f89393a2e1802643d3c063db05d5192188b50ce', onClick: this.onNext, disabled: this.currentPage === this.totalPageCount }, h("dga-icon", { key: 'c9c6f7395882f8dde28f5ff081fe5f6e54c637d9', icon: arrowRight01Stroke, size: 24, color: '#161616' })))));
    }
    static get is() { return "dga-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-pagination.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'large'"
            },
            "totalPageCount": {
                "type": "number",
                "attribute": "total-page-count",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "siblingCount": {
                "type": "number",
                "attribute": "sibling-count",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(value: number) => void",
                    "resolved": "(value: number) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => {}"
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "openDotsIndex": {},
            "anchor": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
