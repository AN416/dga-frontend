import { h } from "@stencil/core";
export class DgaHeader {
    constructor() {
        this.fullWidth = true;
        this.divider = true;
        this.sticky = false;
    }
    render() {
        return (h("header", { key: 'fb02e568909a7d61e1f3316b93b29964dcb60524', class: `header ${this.divider ? 'header--divider' : ''} ${this.sticky ? 'header--sticky' : ''}` }, h("nav", { key: 'ed8356ed3e8272afb3353e8936f95d8514108cbe', class: `header-nav--${this.fullWidth ? 'full' : 'fixed'}` }, h("slot", { key: '24b3b0fa235e99eca059c636beb9f1c1f5935d1f' }))));
    }
    static get is() { return "dga-header-vv2"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header.css"]
        };
    }
    static get properties() {
        return {
            "fullWidth": {
                "type": "boolean",
                "attribute": "full-width",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "true"
            },
            "divider": {
                "type": "boolean",
                "attribute": "divider",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "true"
            },
            "sticky": {
                "type": "boolean",
                "attribute": "sticky",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            }
        };
    }
}
