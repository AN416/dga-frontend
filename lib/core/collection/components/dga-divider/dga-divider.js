import { Host, h } from "@stencil/core";
export class DgaDivider {
    constructor() {
        this.color = 'neutral';
        this.orientation = 'horizontal';
    }
    render() {
        return (h(Host, { key: '31af029b6d5ce054910ef1aa53610dfa25042af9', "data-orientation": this.orientation }, h("span", { key: 'e14e93020d0bda295f79f4811039e427747ab3e0', class: `dga-divider dga-divider--${this.color} dga-divider--${this.orientation}` })));
    }
    static get is() { return "dga-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-divider.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'alpha-white' | 'white' | 'primary'",
                    "resolved": "\"alpha-white\" | \"neutral\" | \"primary\" | \"white\"",
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
                "defaultValue": "'neutral'"
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
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
                "defaultValue": "'horizontal'"
            }
        };
    }
}
