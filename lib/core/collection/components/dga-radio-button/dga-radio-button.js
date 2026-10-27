import { h } from "@stencil/core";
import { guid } from "../../utils";
import { isRTL } from "../../utils/rtl";
import { alertCircleStroke } from "@platformscode/icons";
export class RadioButton {
    constructor() {
        this.color = 'brand';
        this.hasHelperText = false;
        this.disabled = false;
        this.id = guid();
        this.value = '';
        this.checked = false;
        // New SX prop for custom styling
        this.sx = {};
        // Store computed styles
        this.customStyleSheet = null;
        this.styleId = '';
        this.handleActive = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        };
        this.handleRemoveActive = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        };
        this.handleFocus = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.add('focus');
        };
        this.handleFocusOut = () => {
            var _a;
            (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            var _a, _b;
            if (event.key === 'Escape') {
                (_b = (_a = this.radioLabelRef) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
                this.handleFocusOut();
            }
        };
    }
    handleSxChange() {
        this.processStyles();
    }
    componentWillLoad() {
        // Generate a unique ID for this component instance
        this.styleId = `dga-radio-${this.id}-styles`;
        this.processStyles();
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
        // Apply styles after the component is loaded
        this.applyCustomStyles();
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
        // Remove the style element when component is destroyed
        if (this.customStyleSheet && this.customStyleSheet.parentNode) {
            this.customStyleSheet.parentNode.removeChild(this.customStyleSheet);
        }
    }
    applyCustomStyles() {
        // Remove existing style element if it exists
        if (this.customStyleSheet && this.customStyleSheet.parentNode) {
            this.customStyleSheet.parentNode.removeChild(this.customStyleSheet);
        }
        // Create a new style element
        this.customStyleSheet = document.createElement('style');
        this.customStyleSheet.id = this.styleId;
        document.head.appendChild(this.customStyleSheet);
    }
    processStyles() {
        if (!this.sx || Object.keys(this.sx).length === 0) {
            return;
        }
        // Convert the sx prop to CSS
        let cssText = '';
        // Track if we need to add a style element
        let hasCustomSelectors = false;
        // Process each property in sx
        for (const [key, value] of Object.entries(this.sx)) {
            // Handle CSS-like selectors (e.g., "& .radio__label")
            if (key.includes('&')) {
                hasCustomSelectors = true;
                const selector = key.replace('&', `#${this.id}`);
                cssText += `${selector} { `;
                // Handle objects with multiple CSS properties
                if (typeof value === 'object') {
                    for (const [propName, propValue] of Object.entries(value)) {
                        cssText += `${this.camelToDash(propName)}: ${propValue}; `;
                    }
                }
                else {
                    // Handle single property value
                    cssText += `${value}; `;
                }
                cssText += `}\n`;
            }
        }
        // If we have custom selectors, apply them as a stylesheet
        if (hasCustomSelectors) {
            // Wait for component to be in the DOM
            setTimeout(() => {
                if (this.customStyleSheet) {
                    this.customStyleSheet.textContent = cssText;
                }
            }, 0);
        }
    }
    // Helper to convert camelCase to dash-case for CSS properties
    camelToDash(str) {
        return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    }
    render() {
        const { el, disabled } = this;
        const dir = isRTL(el) ? 'rtl' : 'ltr';
        console.log(dir);
        // Extract direct style properties (non-selector styles)
        const inlineStyles = {};
        for (const [key, value] of Object.entries(this.sx || {})) {
            if (!key.includes('&')) {
                inlineStyles[key] = value;
            }
        }
        return (h("label", { key: '48dcabf29679242b631118fd249a0fdb845d2b39', ref: el => (this.radioLabelRef = el), id: this.id, class: `radio ${this.color ? 'radio--' + this.color : ''}`, style: inlineStyles, onMouseDown: this.handleActive, onMouseUp: this.handleRemoveActive, onMouseOut: this.handleRemoveActive, onChange: this.handleRemoveActive, tabindex: disabled ? undefined : 0 }, h("div", { key: '1a3d997e1a72404fbb3eac4bb4bdf30dfcdf105e', class: "radio-main" }, h("div", { key: '0ab51466470fc613d680b7d02a3abbc2ada69863', class: "radio-main__content" }, h("input", { key: '875dc07157fcd7fa1209a0369c0eebd63a08bfc5', type: "radio", name: this.name, value: this.value,
            // id={this.id}
            onChange: this.onChange, onInput: this.onInput, disabled: this.disabled,
            // onFocus={this.handleFocus}
            // onBlur={this.handleFocusOut}
            checked: this.checked }), h("div", { key: '67a0745ae4769c8611e1868b7b9588a29716f87d', class: "radio-container" }), (this.label || this.hasHelperText) && h("div", { key: '21466b7e59f2e2d7ff483cb1958b2fc4ea338926', class: "dga-flex-column" }, this.label && h("span", { key: '0290c63e45372bae2584d0cbd6e53e178d454949', class: "radio__label" }, this.label), this.hasHelperText && this.helperText && h("span", { key: '943583fce2cda58ab9fbd6042726e923e3a9b000', class: "radio__helper-text" }, this.helperText))), this.alertMessage && this.alertText && (h("div", { key: '7591d3d4ba18a426c822b732a513c971c8dd4f5b', class: "radio__warning" }, h("span", { key: '0854d05e5ce0dda87578eead95b39c6723e558d8', class: "radio__warning-icon" }, h("dga-icon", { key: '29ab729dc4637642515b61b29dbee85d85971cfd', icon: alertCircleStroke, size: 16 })), h("span", { key: '59de2b012a82ce6485130c74f843ebf9d25cc34b', class: "radio__warning-text" }, this.alertText))))));
    }
    static get is() { return "dga-radio-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-radio-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-radio-button.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'brand'",
                    "resolved": "\"brand\" | \"neutral\"",
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
                "defaultValue": "'brand'"
            },
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
            "hasHelperText": {
                "type": "boolean",
                "attribute": "has-helper-text",
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
                "reflect": false
            },
            "alertMessage": {
                "type": "boolean",
                "attribute": "alert-message",
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
                "reflect": false
            },
            "alertText": {
                "type": "string",
                "attribute": "alert-text",
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
            "id": {
                "type": "string",
                "attribute": "id",
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
                "reflect": true
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "defaultValue": "''"
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
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
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
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
                "type": "unknown",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps",
                    "resolved": "SxProps",
                    "references": {
                        "SxProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-radio-button/dga-radio-button.tsx",
                            "id": "src/components/dga-radio-button/dga-radio-button.tsx::SxProps"
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
                "defaultValue": "{}"
            }
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
