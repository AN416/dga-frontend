import { h } from "@stencil/core";
export class DgaNavHeaderSubMenuColumn {
    constructor() {
        this.label = '';
    }
    render() {
        return (h("div", { key: 'dedfbd919f9fe968f2881f91fd110d584393a1ca', class: "sub-menu__column" }, this.label && h("h2", { key: 'bba0c4312e4b456ad776b546f51551c1f34acff8', class: "sub-menu__column__label" }, this.label), h("slot", { key: 'fc82d7a28fd13e585e9be22d0cb18ca2eb4c6b5c' })));
    }
    static get is() { return "dga-nav-header-sub-menu-column"; }
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
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
