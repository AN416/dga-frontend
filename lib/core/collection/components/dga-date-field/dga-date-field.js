import { h } from "@stencil/core";
import { guid } from "../../utils";
import { formatDate, isValidDate } from "../dga-datepicker/dateUtils";
import { alertCircleSolid } from "@platformscode/icons";
export class DgaDateField {
    constructor() {
        this.placeholder = "DD/MM/YYYY";
        this.size = 'lg';
        this.variant = 'default';
        this.error = false;
        this.helperText = '';
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.fullwidth = true;
        this.name = guid();
        this.value = '';
        this.isActive = false;
        this.isFocused = false;
        this.isDatepickerOpen = false;
        this.errorMessage = '';
        this.selectedDate = null;
        this.inputValue = '';
        this.handleInput = (event) => {
            var _a, _b;
            const input = event.target;
            this.inputValue = input.value;
            if (this.inputValue === '') {
                this.selectedDate = null;
                this.errorMessage = '';
                this.error = false;
                (_a = this.onChange) === null || _a === void 0 ? void 0 : _a.call(this, null);
                return;
            }
            if (isValidDate(this.inputValue)) {
                const [day, month, year] = this.inputValue.split('/').map(Number);
                this.selectedDate = new Date(year, month - 1, day);
                this.errorMessage = '';
                this.error = false;
                (_b = this.onChange) === null || _b === void 0 ? void 0 : _b.call(this, this.selectedDate);
            }
            else {
                this.errorMessage = 'Use DD/MM/YYYY format';
                this.error = true;
            }
        };
        this.handleFocus = () => {
            this.isFocused = true;
        };
        // Method to detect clicks outside
        this.handleClickOutside = (event) => {
            if (this.isDatepickerOpen &&
                this.inputContainerRef &&
                !this.inputContainerRef.contains(event.target) && // Click is outside input
                this.datepickerRef &&
                !this.datepickerRef.contains(event.target) // Click is outside datepicker popup
            ) {
                this.isDatepickerOpen = false;
                document.removeEventListener('click', this.handleClickOutside);
            }
        };
        // Modify handleOpenDatepickerPopup to add event listener
        this.handleOpenDatepickerPopup = () => {
            if (!this.readonly && !this.disabled) {
                this.isDatepickerOpen = true;
                document.addEventListener('click', this.handleClickOutside);
            }
        };
        // Modify handleDatepickerChange to remove event listener when selecting a date
        this.handleDatepickerChange = (event) => {
            var _a;
            this.selectedDate = event.detail;
            this.inputValue = formatDate(this.selectedDate);
            this.errorMessage = '';
            this.error = false;
            this.isDatepickerOpen = false;
            (_a = this.onChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedDate);
            document.removeEventListener('click', this.handleClickOutside);
        };
        // Remove listener when closing due to blur
        this.handleBlur = () => {
            setTimeout(() => {
                var _a;
                if (!((_a = this.inputContainerRef) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement))) {
                    this.isFocused = false;
                    this.isDatepickerOpen = false;
                    document.removeEventListener('click', this.handleClickOutside);
                    if (this.selectedDate) {
                        this.inputValue = formatDate(this.selectedDate);
                    }
                }
            }, 200);
        };
    }
    valueChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputEl['value'] = newValue;
        }
    }
    render() {
        const inputClasses = {
            'input': true,
            [`input--${this.size}`]: true,
            'input--error': this.error,
            [`input--${this.variant}`]: this.variant !== 'default',
            'active': this.isActive,
            'focus': this.isFocused,
            'input--disabled': this.disabled,
            'readOnly': this.readonly
        };
        return (h("div", { key: 'd793703a1c4340f8244224f8453f5219907460b4', class: { "dga-form-control": true, "dga-form-control--fullwidth": this.fullwidth } }, this.label &&
            h("dga-label", { key: '253c54ec79bc108e3fc9c3e4d1f89d26f779ec65', label: this.label, size: this.size, required: this.required, disabled: this.disabled }), h("div", { key: 'b71c376ab1731ec907e3c59bbc1dd85376bbfc3c', class: Object.keys(inputClasses).filter(key => inputClasses[key]).join(' '), ref: el => this.inputContainerRef = el }, this.icon && (h("span", { key: 'a0a562037b4a0c4ddec262853b7d308da643ff60', class: "input__icon" }, h("dga-icon", { key: 'd73726d7efa045b41f1e0ec1d6f33f84bc5338d0', name: this.icon.name, variant: this.icon.variant, type: this.icon.type, size: 20 }))), h("input", { key: '8c2e74656b3dcb6c800212388e280624e28198b3', ref: (el) => (this.inputEl = el), name: this.name, value: this.inputValue, type: "text", class: "input__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, required: this.required, onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleInput, onMouseDown: () => this.isActive = true, onMouseUp: () => this.isActive = false, onMouseOut: () => this.isActive = false }), h("dga-button-v2", { key: '026376d238cd50fc04c9480f202ef48e46b205f6', variant: "transparent", iconOnly: true, leadIcon: true, leadIconProps: { name: 'calendar-03', variant: 'stroke', type: 'rounded' }, onClick: this.handleOpenDatepickerPopup }), this.error && (h("span", { key: '1817cc3a14db27822d4cf89d3122440f70977c38', class: "input__feedback-icon input__feedback-icon--error" }, h("dga-icon", { key: 'de2ce10d3068836a14ee52fd2c2b9a4024d3806e', icon: alertCircleSolid })))), (this.errorMessage || this.helperText) &&
            h("dga-helper-text", { key: '0fe6b09c6d5047a4e414970bfa4c89de31290bab', helperText: this.errorMessage || this.helperText, error: this.error }), this.isDatepickerOpen &&
            h("div", { key: 'e7f1bfbd8e1dcbbb1131bfb5aa5361afef6d9563', class: "date-picker-dropdown", ref: el => this.datepickerRef = el }, h("dga-datepicker", Object.assign({ key: '12a29538a46b4493542b9942e6dccd56fc17df5b' }, this.datepickerOptions, { value: this.selectedDate, onChange: this.handleDatepickerChange, style: { width: "fit-content", display: "block" } })))));
    }
    static get is() { return "dga-date-field"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-date-field.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-date-field.css"]
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
                "defaultValue": "\"DD/MM/YYYY\""
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
                    "original": "(date: Date | null) => void",
                    "resolved": "(date: Date) => void",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
            "datepickerOptions": {
                "type": "unknown",
                "attribute": "datepicker-options",
                "mutable": false,
                "complexType": {
                    "original": "DatepickerOptions",
                    "resolved": "DatepickerOptions",
                    "references": {
                        "DatepickerOptions": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-date-field/dga-date-field.tsx",
                            "id": "src/components/dga-date-field/dga-date-field.tsx::DatepickerOptions"
                        }
                    }
                },
                "required": false,
                "optional": false,
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
            "isActive": {},
            "isFocused": {},
            "isDatepickerOpen": {},
            "errorMessage": {},
            "selectedDate": {},
            "inputValue": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
}
