import { h } from "@stencil/core";
export class DgaContentSwitcherPanel {
    render() {
        return (h("div", { key: 'a5b0f5fc828acf1f689061956b9a27a11a30b95f', class: "content-switcher-panel", hidden: this.value !== this.index }, h("slot", { key: '49b4ec1bf9d71364b92e607d03cd868cc92373e4' })));
    }
    static get is() { return "dga-content-switcher-panel"; }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            "index": {
                "type": "number",
                "attribute": "index",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
