import { h } from "@stencil/core";
export class DgaHelperText {
    constructor() {
        this.helperText = '';
        this.error = false;
    }
    render() {
        var _a;
        return (h("div", { key: 'f7b561b48aca76822961633a9ba5ef3db07f6755', class: `dga-helper-text ${this.error ? "dga-helper-text--error" : ""}` }, h("span", { key: '8ae46ec323e7cfb72656f6c28a5ac4a118e194c1', class: "dga-helper-text__icon" }, this.helperTextIcon && ((_a = this.helperTextIcon) === null || _a === void 0 ? void 0 : _a.name) && h("dga-icon", { key: '54df6f5eb3361ebac053656e929cbc58286067ca', name: this.helperTextIcon.name, variant: this.helperTextIcon.variant, type: this.helperTextIcon.type, size: 16 })), h("span", { key: '74fe3eea473c129305bb44683cbdb812933b36ee', class: "dga-helper-text__desc" }, this.helperText)));
    }
    static get is() { return "dga-helper-text"; }
    static get properties() {
        return {
            "helperTextIcon": {
                "type": "unknown",
                "attribute": "helper-text-icon",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            }
        };
    }
}
