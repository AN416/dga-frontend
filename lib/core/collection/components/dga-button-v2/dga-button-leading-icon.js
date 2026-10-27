import { h } from "@stencil/core";
export class DgaButtonLeadingIcon {
    constructor() {
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    render() {
        // Check if there are any child elements
        return (h("span", { key: 'dd4808dcfff3a4a8d0d1741697bbc53b78cfe115', class: "dga-btn-icon dga-btn-icon--leading", "aria-hidden": "true", slot: "leading-icon" }, h("dga-icon", { key: '357872db74147b48df88f4ea90f1ceca8ff52332', name: this.name, size: this.size, color: this.color, variant: this.variant, type: this.type })));
    }
    static get is() { return "dga-button-leading-icon"; }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": true,
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
                "reflect": true
            },
            "size": {
                "type": "number",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            },
            "color": {
                "type": "string",
                "attribute": "color",
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
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk'",
                    "resolved": "\"bulk\" | \"duotone\" | \"solid\" | \"stroke\" | \"twotone\"",
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
                "defaultValue": "'bulk'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'rounded' | 'sharp' | 'standard'",
                    "resolved": "\"rounded\" | \"sharp\" | \"standard\"",
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
                "defaultValue": "'rounded'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
