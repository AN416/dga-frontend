import { Host, h } from "@stencil/core";
export class DgaNavHeader {
    constructor() {
        this.fullWidth = true;
        this.divider = true;
        this.sticky = false;
    }
    // @Prop() position: 'sticky' | 'relative' = 'relative';
    render() {
        return (h(Host, { key: 'cd9118ab9c62e251348926dba501c7c91541e56b' }, h("header", { key: '1e6e56d34c63f8ade0c2d2524b80ccd418abfed0', class: `header ${this.divider ? 'header--divider' : ''} ${this.sticky ? 'header--sticky' : ''}` }, h("nav", { key: '352c73cd5701aa3cb3c45878344063e9ce8008ee', class: `header-nav--${this.fullWidth ? 'full' : 'fixed'}` }, h("slot", { key: 'bdef336a6235ad2140c41f982b7fa0e3b0c8dad5' })))));
    }
    static get is() { return "dga-nav-header"; }
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
