import { h } from "@stencil/core";
export class DgaHeaderMenu {
    render() {
        return (h("ul", { key: '2092898882a07a65f420e90262c8568bb04b8ee5', class: "header-nav__menu" }, h("slot", { key: '20489f7c6747df2d80d43d8957aac0e1a948a165' })));
    }
    static get is() { return "dga-header-menu-vv2"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-menu.css"]
        };
    }
}
