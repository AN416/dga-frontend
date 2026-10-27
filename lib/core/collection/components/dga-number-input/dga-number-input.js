import { h, Host } from "@stencil/core";
import { guid } from "../../utils";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaNumberInput {
    constructor() {
        this.placeholder = '0000';
        this.size = 'lg';
        this.variant = 'default';
        this.error = false;
        this.helperText = '';
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.fullwidth = true;
        this.name = guid();
        this.value = 0;
        this.isActive = false;
        this.isFocused = false;
        this.handleIncrement = () => {
            if (!this.disabled && !this.readonly) {
                this.value += 1;
                if (this.onChange) {
                    this.onChange({ target: { value: this.value } });
                }
            }
        };
        this.handleDecrement = () => {
            if (!this.disabled && !this.readonly) {
                this.value -= 1;
                if (this.onChange) {
                    this.onChange({ target: { value: this.value } });
                }
            }
        };
        // Generate a unique ID if not provided
        this.componentId = `dga-number-input-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string' ? JSON.parse(this.sx) : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '37e46ffa20c683421bd48ecd94f1387502eef69a', id: this.componentId, style: this.rootStyles }, h("div", { key: '68a4cdb395d2e14f701fa0506dfbee9c78e2b659', class: "dga-form-control" }, this.label && h("dga-label", { key: 'caf2a4f150ad1af51b3720bbcdc6a6d0ed6f0c7a', label: this.label, size: this.size, required: this.required, disabled: this.disabled }), h("div", { key: '7a57f470de4d1da7d8945476a728b6107627335c', class: `dga-number-input dga-number-input--${this.size} ${this.error ? 'dga-number-input--error' : ''} ${this.fullwidth ? 'dga-number-input--full-width' : ''} ${this.variant !== 'default' ? `dga-number-input--${this.variant}` : ''} ${this.isActive ? 'active' : ''} ${this.isFocused ? 'focus' : ''} ${this.disabled ? 'dga-number-input--disabled' : ''} ${this.readonly ? 'readOnly' : ''}`, ref: el => (this.inputContainerRef = el) }, h("button", { key: '6a20ba974009e774cf4406143ceb61fbf82fd7a6', class: `dga-number-input__prefix`, onClick: this.handleIncrement, disabled: this.disabled || this.readonly }, h("span", { key: '7109eb247ac989a4f7fbea9e8fa16bc44a65cab6', class: "dga-number-input__prefix-icon" }, h("dga-icon", { key: 'ad9e422149a79c891c4b2938856da5d2cc256bf7', name: "plus-sign", variant: "stroke", type: "rounded" }))), h("input", { key: '108a917e3c4514f688d0f74cc0034d86b02a169c',
            // id={id}
            value: this.value, name: this.name, type: 'number', onFocus: () => (this.isFocused = true), onBlur: e => {
                this.isFocused = false;
                this.onBlur(e);
            }, class: "dga-number-input__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, required: this.required, onMouseDown: () => (this.isActive = true), onMouseUp: () => (this.isActive = false), onMouseOut: () => (this.isActive = false), onChange: this.onChange, onInput: this.onInput }), h("button", { key: 'dfc4b5231754275924ce37d946e142a16d924b6b', class: `dga-number-input__suffix`, onClick: this.handleDecrement, disabled: this.disabled || this.readonly }, h("span", { key: '14dcd6a8a9b023cee7588dfcb68b8ac4db8756b8', class: "dga-number-input__suffix-icon" }, h("dga-icon", { key: '76a60117aba6f360bf832b1ccd572131091a7d00', name: "minus-sign", variant: "stroke", type: "rounded" })))), this.helperText && h("dga-helper-text", { key: 'c5da074a3a051163fd8d072ea59c0b55247a8b1a', helperText: this.helperText, helperTextIcon: this.helperTextIcon, error: this.error }))));
    }
    static get is() { return "dga-number-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-number-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-number-input.css"]
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
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                "defaultValue": "'0000'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\"",
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
                "defaultValue": "'lg'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'lighter' | 'darker'",
                    "resolved": "\"darker\" | \"default\" | \"lighter\"",
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
                "defaultValue": "'default'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
            },
            "fullwidth": {
                "type": "boolean",
                "attribute": "fullwidth",
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
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "guid()"
            },
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
                "reflect": false,
                "defaultValue": "0"
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
                    "references": {}
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
            "onInput": {
                "type": "unknown",
                "attribute": "on-input",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
                    "references": {}
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
            "onBlur": {
                "type": "unknown",
                "attribute": "on-blur",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
                    "references": {}
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "CSSProperties & NestedSelector | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-system",
                            "id": "src/utils/sx-system.ts::SxProps"
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
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "isFocused": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
