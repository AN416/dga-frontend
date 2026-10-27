import { h } from "@stencil/core";
export class DgaSlideoutMenuActions {
    render() {
        return (h("div", { key: 'a6580fd6ca95d69cb70f8800839c6cc1d1e16e8e', class: "dga-slideout-menu__actions" }, h("slot", { key: '01d3442a54bf0603420f74cf9ec9899602d10ded' })));
    }
    static get is() { return "dga-slideout-menu-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu.css"]
        };
    }
}
