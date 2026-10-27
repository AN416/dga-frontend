import { h } from "@stencil/core";
export class DgaHeaderSubMenuColumn {
    constructor() {
        this.label = '';
    }
    render() {
        return (h("div", { key: '65441a0781cc99ceb76baeda303a693c0df92d4f', class: "sub-menu__column" }, this.label && h("h2", { key: '2fbd6baeba9a0373385077cdd48d16e6c8e308e4', class: "sub-menu__column__label" }, this.label), h("slot", { key: 'cea2e6bc6494de4a9b775ba50c4f6dba5364c20c' })));
    }
    static get is() { return "dga-header-sub-menu-column"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu-column.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu-column.css"]
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
