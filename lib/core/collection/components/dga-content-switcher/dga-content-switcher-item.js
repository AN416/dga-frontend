import { h } from "@stencil/core";
export class DgaContentSwitcherItem {
    render() {
        return h("slot", { key: '83516f09f1675ae6bc38dd7ea81717b8df682d5b' });
    }
    static get is() { return "dga-content-switcher-item"; }
    static get properties() {
        return {
            "label": {
                "type": "any",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "reflect": false
            },
            "content": {
                "type": "any",
                "attribute": "content",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "reflect": false
            }
        };
    }
}
