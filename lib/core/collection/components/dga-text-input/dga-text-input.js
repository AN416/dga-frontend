import { h, Host } from "@stencil/core";
import { guid } from "../../utils";
import { SxStyleManager } from "../../utils/sx-style-manager";
import { alert02Solid, alertCircleSolid, checkmarkCircle02Solid } from "@platformscode/icons";
const feedbackIconTypes = {
    success: h("dga-icon", { icon: checkmarkCircle02Solid }),
    error: h("dga-icon", { icon: alertCircleSolid }),
    warning: h("dga-icon", { icon: alert02Solid }),
};
export class DgaTextInput {
    constructor() {
        this.size = 'lg';
        this.type = 'text';
        this.variant = 'default';
        this.error = false;
        this.feedbackIcon = false;
        this.feedbackIconType = 'success';
        this.feedbackIconRing = false;
        this.helperText = '';
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.fullwidth = true;
        //   @Prop() id: string = guid();
        this.name = guid();
        this.value = '';
        this.isActive = false;
        this.isFocused = false;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.textInputEl['value'] = newValue;
        }
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
        return (h(Host, { key: 'fe16cfffd4d8741bd35c0599b06bdadeac7f58dd', id: this.componentId, style: this.rootStyles }, h("div", { key: '12191cfbf577e4ca80be2d10e1de7c99dd7ec5f1', class: { "dga-form-control": true, "dga-form-control--fullwidth": this.fullwidth } }, this.label && h("dga-label", { key: '9af15d3e82af14d56091ca21ce753848b9e75cb2', label: this.label, size: this.size, required: this.required, disabled: this.disabled }), h("div", { key: 'ee6812f57348b118751d97af4a9b5804543e7436', class: `input input--${this.size} ${this.error ? 'input--error' : ''} ${this.variant !== 'default' ? `input--${this.variant}` : ''} ${this.isActive ? 'active' : ''} ${this.isFocused ? 'focus' : ''} ${this.disabled ? 'input--disabled' : ''} ${this.readonly ? 'readOnly' : ''}`, ref: el => (this.inputContainerRef = el) }, h("slot", { key: 'e135cfd4d52956ad4490a3470438aa196acd5acf', name: "prefix" }), this.icon && (h("span", { key: 'e49d3324a880d69af741e9dad98805bd0f72faf5', class: "input__icon" }, h("dga-icon", { key: '8dbfa5cb0d3086050007bc0d87c4a0f8f4c65d1e', name: this.icon.name, variant: this.icon.variant, type: this.icon.type, size: 20 }))), h("input", { key: '40ad73d3426765dbf745cb424a9f648672e4f5a5',
            // id={id}
            ref: (el) => (this.textInputEl = el), value: this.value, name: this.name, type: this.type, onFocus: () => (this.isFocused = true), onBlur: e => {
                this.isFocused = false;
                this.onBlur(e);
            }, class: "input__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, required: this.required, onMouseDown: () => (this.isActive = true), onMouseUp: () => (this.isActive = false), onMouseOut: () => (this.isActive = false), onChange: this.onChange, onInput: this.onInput }), this.error ? (h("span", { class: `input__feedback-icon input__feedback-icon--error ${this.feedbackIconRing ? 'input__feedback-icon--ring' : ''}` })) : this.feedbackIcon ? (h("span", { class: `input__feedback-icon input__feedback-icon--${this.feedbackIconType} ${this.feedbackIconRing ? 'input__feedback-icon--ring' : ''}` }, feedbackIconTypes[this.feedbackIconType])) : null, h("slot", { key: 'df0469c8a2916e509d9cd6adcd6b204290679ce1', name: "suffix" }), " "), this.helperText && h("dga-helper-text", { key: 'bf17345b0b29463ad7a2fc0fe05e7fe08b10d6fc', helperText: this.helperText, helperTextIcon: this.helperTextIcon, error: this.error }))));
    }
    static get is() { return "dga-text-input"; }
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
                "reflect": false
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'text' | 'number' | 'password'",
                    "resolved": "\"number\" | \"password\" | \"text\"",
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
                "defaultValue": "'text'"
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
            "feedbackIcon": {
                "type": "boolean",
                "attribute": "feedback-icon",
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
            "feedbackIconType": {
                "type": "string",
                "attribute": "feedback-icon-type",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'error' | 'warning'",
                    "resolved": "\"error\" | \"success\" | \"warning\"",
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
                "defaultValue": "'success'"
            },
            "feedbackIconRing": {
                "type": "boolean",
                "attribute": "feedback-icon-ring",
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
            "icon": {
                "type": "unknown",
                "attribute": "icon",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(event?: Event) => void",
                    "resolved": "(event?: Event) => void",
                    "references": {
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
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
            "onInput": {
                "type": "unknown",
                "attribute": "on-input",
                "mutable": false,
                "complexType": {
                    "original": "(event?: Event) => void",
                    "resolved": "(event?: Event) => void",
                    "references": {
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
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
            "onBlur": {
                "type": "unknown",
                "attribute": "on-blur",
                "mutable": false,
                "complexType": {
                    "original": "(event?: Event) => void",
                    "resolved": "(event?: Event) => void",
                    "references": {
                        "Event": {
                            "location": "global",
                            "id": "global::Event"
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
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
