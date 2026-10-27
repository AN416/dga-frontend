import { h, Host } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
import { alertCircleStroke } from "@platformscode/icons";
export class DgaSwitch {
    constructor() {
        this.color = 'brand';
        this.checked = false;
        this.disabled = false;
        this.id = this.generateGuid();
        this.name = this.generateGuid();
        this.value = true;
        this.isChecked = this.checked;
        // Handle active class on mouse down
        this.handleActive = () => {
            if (!this.disabled) {
                this.labelRef.classList.add('active');
            }
        };
        // Toggle switch on change event
        this.handleRemoveActive = () => {
            this.labelRef.classList.remove('active');
            this.isChecked = !this.isChecked;
        };
        // Handle focus
        this.handleFocus = () => {
            this.labelRef.classList.add('focus');
        };
        // Handle focus out
        this.handleFocusOut = () => {
            this.labelRef.classList.remove('focus');
        };
        // Handle Escape key event to remove focus
        this.handleEscape = (event) => {
            if (event.key === 'Escape') {
                this.handleFocusOut();
                const inputElement = this.el.querySelector('input');
                inputElement === null || inputElement === void 0 ? void 0 : inputElement.blur();
            }
        };
    }
    // Helper to generate a unique ID similar to React's `guid()`
    generateGuid() {
        return Math.random().toString(36).substr(2, 9);
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
        this.sxHandler.cleanup();
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-switch');
    }
    render() {
        return (h(Host, { key: '18130859e3e395c62b0ffb032f317aae45f7d6d9', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("label", { key: '22eadabb402d3b31d32f687415b1c90134546c96', ref: el => (this.labelRef = el), class: `switch ${this.color ? `switch--${this.color}` : ''}`, onMouseDown: this.handleActive, onChange: this.handleRemoveActive }, h("div", { key: 'eb1fb03bd0bf3236d2ab22abae3d8704abaf98ec', class: "switch-main" }, h("div", { key: '8f4179ee441d551fb910f03cf31f6002df83cc15', class: `switch-main__content ${this.disabled ? 'disabled' : ''}` }, h("div", { key: 'cdf986f984b8ddff533a7023ff0297d0284eb86c', class: "switch-wrapper" }, h("input", { key: '767b1a18c3f343a911529ffe43abe050c8d99bef', type: "checkbox", name: this.name, value: this.value, id: this.id, disabled: this.disabled, onFocus: this.handleFocus, onBlur: this.handleFocusOut, onChange: this.onChange, onInput: this.onInput, checked: this.isChecked }), h("span", { key: '45bcda090fdb983e8548842c6312be229f8c35dc', class: `slider round ${this.isChecked ? 'slider--active' : 'slider--inactive'}` })), !this.hasHelperText && !this.helperText ? (this.label && h("span", { class: "switch__label" }, this.label)) : (h("div", { class: "dga-flex-column" }, h("span", { class: "switch__label" }, this.label), h("span", { class: "switch__helper-text" }, this.helperText)))), this.alertMessage && (h("div", { key: 'e10f2766d553761c458e4f7904254e886b60207b', class: "switch__warning" }, h("span", { key: 'e5d6a5825aa129d0bb1eca2f2f69f7226e9c4909', class: "switch__warning-icon" }, h("dga-icon", { key: 'cd40a7db877e7af750f1a8f85fdfad6960fa9358', icon: alertCircleStroke, size: 16, color: 'currentColor' })), h("span", { key: '7069a7c3d2dfdd247f13ae7fbfdad061872ea22e', class: "switch__warning-text" }, this.alertText)))))));
    }
    static get is() { return "dga-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-switch.css"]
        };
    }
    static get properties() {
        return {
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string | undefined",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
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
            "checked": {
                "type": "boolean",
                "attribute": "checked",
                "mutable": true,
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
                "reflect": false
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
                "defaultValue": "this.generateGuid()"
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
                "defaultValue": "this.generateGuid()"
            },
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "boolean | any",
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
                "reflect": false,
                "defaultValue": "true"
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
            }
        };
    }
    static get states() {
        return {
            "isChecked": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
