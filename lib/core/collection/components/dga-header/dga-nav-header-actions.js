import { h, Fragment } from "@stencil/core";
export class DgaNavHeaderActions {
    constructor() {
        this.isMenuOpen = false; // State to control menu visibility
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.addEventListener('click', this.handleOutsideClick);
            }
            else {
                document.removeEventListener('click', this.handleOutsideClick);
            }
        };
        this.closeMenu = () => {
            this.isMenuOpen = false;
            document.removeEventListener('click', this.handleOutsideClick);
        };
        this.handleOutsideClick = (event) => {
            const target = event.target;
            if (!this.el.contains(target)) {
                this.closeMenu();
            }
        };
    }
    render() {
        return (h(Fragment, { key: '62ae926d4872259e55a62d1273f92aaa65870c22' }, h("div", { key: '48a2414dbf4841662af154b18ec3f4f5ecd580ac', style: { position: 'relative' } }, h("dga-button-v2", { key: '38e8184ada3f27400fda78108943d9151bc470ff', "aria-haspopup": "true", "aria-expanded": this.isMenuOpen ? 'true' : 'false', iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: this.toggleMenu, class: "header-menu__btn" }), this.isMenuOpen && (h("ul", { key: '2defede3c937e9702476f376dbfbbc0c9a057545', class: "dga-breadcrumb-dropdown" }, [{
                label: 'Item 1', path: '/item1'
            },
            { label: 'Item 2', path: '/item2' },
        ].map(ellipsedItem => (h("li", { key: ellipsedItem === null || ellipsedItem === void 0 ? void 0 : ellipsedItem.label, class: "dga-breadcrumb-dropdown-item" }, h("a", null, h("span", { class: "link__label" }, ellipsedItem.label)))))))), h("ul", { key: 'cf1b31fff1af5683950f1b26f9eaae859e99accc', class: "header-nav__actions" }, h("slot", { key: 'ef6d4f30cb8a1f2340b4e527c8765fab26b0c1e4' }))));
    }
    static get is() { return "dga-nav-header-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.css"]
        };
    }
    static get states() {
        return {
            "isMenuOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
