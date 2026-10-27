import { h } from "@stencil/core";
export class DgaMenuGroup {
    render() {
        return (h("div", { key: '072832c738e73c3374e77bd81f96b8b31d2f2267', class: "menu-group" }, this.groupLabel && h("span", { key: '8afd1106c384a6225d5f0968ae83e273dec4226d', class: "menu-group__label" }, this.groupLabel), h("ul", { key: '73898671e93a5e3e62eda48c096096d4033911d6', class: "menu-group__items" }, h("slot", { key: '2bb0be5d8d7e97a0340cd0776f3ab5591d45d9bd' }))));
    }
    static get is() { return "dga-menu-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu-group.css"]
        };
    }
    static get properties() {
        return {
            "groupLabel": {
                "type": "string",
                "attribute": "group-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false
            }
        };
    }
}
