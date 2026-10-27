import { h } from "@stencil/core";
export class DgaNavHeaderMenu {
    render() {
        return (h("ul", { key: '32d43e4a7ec685cc9844a4c6d2e55c80e38e60b5', class: "header-nav__menu" }, h("slot", { key: 'f3883b5d0bbb546784df4d64e16a89c3eb60da2b' })));
    }
    static get is() { return "dga-nav-header-menu"; }
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
}
