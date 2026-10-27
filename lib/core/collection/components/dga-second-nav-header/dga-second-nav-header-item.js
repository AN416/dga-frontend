import { Host, h } from "@stencil/core";
export class DgaSecondNavHeaderItem {
    connectedCallback() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-ICON'.toLocaleUpperCase() && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'icon');
            }
        });
    }
    render() {
        return (h(Host, { key: 'b02dc9f1e6650ac6bd6cf85d44b105283d9d3171' }, h("slot", { key: 'af18cafbd1e955f713d22a83299889e589392e63', name: 'icon' }), h("slot", { key: '7022e55daef2703b0a56897a3e9ac4f3dc500d0b', name: 'label' }, this.label)));
    }
    static get is() { return "dga-second-nav-header-item"; }
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
                "required": true,
                "optional": false,
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
    static get elementRef() { return "el"; }
}
