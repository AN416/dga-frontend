import { h } from "@stencil/core";
import { guid } from "../../utils";
import { isRTL } from "../../utils/rtl";
import { tick03Solid, alertCircleStroke, remove01Solid, minusSignSolid } from "@platformscode/icons";
export class DgaCheckbox {
    constructor() {
        this.color = 'brand';
        this.size = 'md';
        this.disabled = false;
        this.name = guid();
        this.value = '';
        this.showBorderOnFocusAndFocusOute = true;
        this.checked = false;
        this.isChecked = this.checked;
        this.Indeterminate = false;
        // private handleActive = () => {
        //   this.labelRef?.classList.add('active');
        // };
        // private handleRemoveActive = () => {
        //   this.labelRef?.classList.remove('active');
        // };
        this.handleFocus = () => {
            var _a;
            if (!this.showBorderOnFocusAndFocusOute)
                return;
            (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.classList.add('focus');
        };
        this.handleFocusOut = () => {
            var _a;
            if (!this.showBorderOnFocusAndFocusOute)
                return;
            (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            var _a, _b;
            if (event.key === 'Escape') {
                this.handleFocusOut();
                (_b = (_a = this.labelRef) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.blur();
            }
        };
    }
    componentWillLoad() {
        this.isChecked = this.checked;
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleEscape);
    }
    watchMaxValue(newValue) {
        this.isChecked = newValue;
    }
    render() {
        const { el, disabled } = this;
        const dir = isRTL(el) ? 'rtl' : 'ltr';
        console.log(dir);
        return (h("label", { key: 'db91d78fcf976079261b8d0db86f464c94497718', ref: el => (this.labelRef = el), class: `checkbox ${this.color ? `checkbox--${this.color}` : ''} checkbox--${this.size}`,
            // onMouseDown={this.handleActive}
            // onMouseUp={this.handleRemoveActive}
            // onMouseOut={this.handleRemoveActive}
            // onChange={() => this.handleRemoveActive}
            //   htmlFor={id}
            tabindex: disabled ? undefined : 0 }, h("div", { key: '0e9b81ab063746bfee3cf2dc00ead61e3ecc8f1a', class: "checkbox-main" }, h("div", { key: '10f71c2ff6f649cae2007cdbf87a31c5bc8a7b6c', class: "checkbox-main__content" }, h("input", { key: '87a7138f8aba5728c68ea1cffce846de6e6feee1', type: "checkbox", name: this.name, value: this.value, disabled: this.disabled, onFocus: this.handleFocus, onBlur: this.handleFocusOut, onChange: e => {
                var _a;
                (_a = this.onChange) === null || _a === void 0 ? void 0 : _a.call(this, e);
                const target = e.target;
                this.isChecked = target.checked;
            }, onInput: this.onInput, checked: this.isChecked }), h("div", { key: '3cbeacd3d5533fac1d042bfb701f68180096c512', class: "checkbox-container" }, h("span", { key: '766abbcf5f74e2c23b810f895088971b0dbb1922', class: "checkbox-icon checkbox__checked-icon", style: { display: this.isChecked ? 'inline-block' : 'none' } }, this.Indeterminate ? h("dga-icon", { icon: minusSignSolid }) : h("dga-icon", { icon: tick03Solid })), h("span", { key: '265d11d898142d0c9d314fd9dde05f888625cbed', class: "checkbox-icon checkbox__indeterminate-icon", style: { display: this.isChecked ? 'none' : 'inline-block' } }, h("dga-icon", { key: '5dcef6545f46d6402d67dd3f397e167695433769', icon: remove01Solid }))), !this.helperText ? (this.label && h("span", { class: "checkbox__label" }, this.label)) : (h("div", { class: "dga-flex-column" }, h("span", { class: "checkbox__label" }, this.label), h("span", { class: "checkbox__helper-text" }, this.helperText)))), this.alertMessage && (h("div", { key: 'e0e392c277333a32b0a7ddbc466664dfd196c837', class: "checkbox__warning" }, h("span", { key: '415d8fdbb970d4788cb074f160bb41148e41c4fc', class: "checkbox__warning-icon" }, h("dga-icon", { key: '7c29080eaea262fa0a0ad68984de0f2586c43099', icon: alertCircleStroke, size: 16 })), h("span", { key: '6c64ffdd8f03da322181c1c04d1a3f5665d6348d', class: "checkbox__warning-text" }, this.alertText))))));
    }
    static get is() { return "dga-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'neutral'",
                    "resolved": "\"brand\" | \"neutral\"",
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
                "defaultValue": "'brand'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
                "defaultValue": "'md'"
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
                "optional": true,
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
            "showBorderOnFocusAndFocusOute": {
                "type": "boolean",
                "attribute": "show-border-on-focus-and-focus-oute",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "Indeterminate": {
                "type": "boolean",
                "attribute": "indeterminate",
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
    static get states() {
        return {
            "isChecked": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "watchMaxValue"
            }];
    }
}
