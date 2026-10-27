import { h, Host } from "@stencil/core";
import { guid } from "../../utils";
import { SxStyleManager } from "../../utils/sx-style-manager";
import { arrowDown01Stroke, tick02Solid } from "@platformscode/icons";
export class DgaDropdown {
    constructor() {
        /******************
        * Props
        ******************/
        this.id = guid();
        this.size = 'lg';
        this.variant = 'default';
        this.error = false;
        this.disabled = false;
        this.readonly = false;
        this.multiSelect = false;
        this.options = [];
        this.optionLabel = 'name';
        this.trackBy = 'value';
        /******************
        * State
        ******************/
        this.optionList = [];
        this.dropdownOpen = false;
        this.handleClickOutside = (event) => {
            if (this.containerRef && !this.containerRef.contains(event.target)) {
                this.closeDropdown();
            }
        };
        // Generate a unique ID if not provided
        this.componentId = `dga-dropdown-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleValueChange(newValue) {
        if (newValue) {
            this.updateSelectedFromValue(newValue);
        }
    }
    initializeOptions() {
        const cloneList = [...this.options].map(option => (Object.assign(Object.assign({}, option), { selected: false })));
        this.optionList = cloneList;
        // If we have a value, update selections after options change
        if (this.value) {
            this.updateSelectedFromValue(this.value);
        }
    }
    updateSelectedFromValue(value) {
        const cloneList = [...this.optionList];
        if (this.multiSelect && Array.isArray(value)) {
            cloneList.forEach(option => {
                option.selected = value.includes(option[this.trackBy]);
            });
        }
        else if (!this.multiSelect && typeof value === 'string') {
            cloneList.forEach(option => {
                option.selected = option[this.trackBy] === value;
            });
        }
        this.optionList = cloneList;
        this.updateDropdownLabel();
    }
    updateDropdownLabel() {
        var _a;
        const selectedOptions = this.optionList.filter(opt => opt.selected);
        // Use the shadow root instead of el to query inside shadow DOM
        const dropdownLabel = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.dropdown__label');
        if (dropdownLabel) {
            if (selectedOptions.length > 0) {
                const labels = selectedOptions.map(opt => opt[this.optionLabel]);
                dropdownLabel.textContent = labels.join(', ');
                dropdownLabel.classList.add('dropdown__label--selection');
            }
            else {
                dropdownLabel.textContent = '';
                dropdownLabel.classList.remove('dropdown__label--selection');
            }
        }
    }
    componentWillLoad() {
        this.initializeOptions();
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        document.addEventListener('click', this.handleClickOutside);
        this.updateDropdownLabel();
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    disconnectedCallback() {
        var _a;
        document.removeEventListener('click', this.handleClickOutside);
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    handleAddPressed(e) {
        const target = e.currentTarget;
        target.classList.add('active');
    }
    handleRemovePressed(e) {
        const target = e.currentTarget;
        target.classList.remove('active');
    }
    toggleDropdown() {
        var _a, _b;
        this.dropdownOpen = !this.dropdownOpen;
        if (this.dropdownOpen) {
            (_a = this.btnRef) === null || _a === void 0 ? void 0 : _a.classList.add('open');
        }
        else {
            (_b = this.btnRef) === null || _b === void 0 ? void 0 : _b.classList.remove('open');
        }
    }
    closeDropdown() {
        var _a;
        this.dropdownOpen = false;
        (_a = this.btnRef) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
    }
    handleToggleDropdown(e) {
        e.stopPropagation();
        this.toggleDropdown();
    }
    setSelectedOptions(option, index) {
        const cloneList = [...this.optionList];
        if (!this.multiSelect) {
            // Deselect all options for single select
            cloneList.forEach(opt => (opt.selected = false));
            cloneList[index].selected = true;
            if (this.onChange) {
                this.onChange(option[this.trackBy]);
            }
            if (this.getSelectedOptions) {
                this.getSelectedOptions(option);
            }
        }
        else {
            // Toggle selection for multi-select
            cloneList[index].selected = !cloneList[index].selected;
            if (this.onChange) {
                const selectedValues = cloneList.filter(opt => opt.selected).map(opt => opt[this.trackBy]);
                this.onChange(selectedValues);
            }
            if (this.getSelectedOptions) {
                this.getSelectedOptions({
                    selectedList: cloneList.filter(opt => opt.selected),
                    selectedOption: option,
                    selectedIndex: index,
                });
            }
        }
        this.optionList = cloneList;
        this.updateDropdownLabel();
    }
    handleOptionClick(e, option, index) {
        e.stopPropagation();
        this.setSelectedOptions(option, index);
        // Close dropdown for single select after selection
        if (!this.multiSelect) {
            this.closeDropdown();
        }
    }
    handleSxChange() {
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
    render() {
        const dropdownClasses = {
            'dropdown': true,
            [`dropdown--${this.size}`]: true,
            'dropdown--error': this.error,
            [`dropdown--${this.variant}`]: this.variant !== 'default',
            'dropdown--disabled': this.disabled,
            'dropdown--readonly': this.readonly,
            'dropdown--multi-select': this.multiSelect,
            [this.extraClass]: !!this.extraClass,
        };
        return (h(Host, { key: 'fc0a4b88d8f37f4925d4584afb0ab0b0d8f2c820', id: this.componentId, style: this.rootStyles, dir: document.documentElement.getAttribute('dir') }, this.label && h("dga-label", { key: '9af82a110c67ea13dbe9d1f959b8259e4331dd07', label: this.label, size: "md", disabled: this.disabled }), h("div", { key: '9cdf1a0259b9eb95872455eb3ebf250194f435b2', id: this.id, ref: el => (this.containerRef = el), class: Object.keys(dropdownClasses)
                .filter(key => dropdownClasses[key])
                .join(' ') }, h("button", { key: '81e1d66e04b2560cb271eb025a93eef13909feac', class: "dropdown__btn", ref: el => (this.btnRef = el), disabled: this.disabled || this.readonly, onClick: this.handleToggleDropdown.bind(this), onMouseDown: this.handleAddPressed.bind(this), onMouseUp: this.handleRemovePressed.bind(this), onMouseOut: this.handleRemovePressed.bind(this), type: "button" }, this.leadingIcon && h("dga-icon", { key: 'd24b25b4c0c704891f0252a51e43a4832fd0c72c', icon: this.leadingIcon, size: 20, color: 'currentColor' }), h("span", { key: '0f4d6a1e5be830a878e94cb5b1a2ca012b7fb4e3', class: "dropdown__label" }), h("span", { key: 'c31f938ecbefa2fe4a4e8b91551a13398f87afc1', class: "dropdown__label-placeholder" }, this.placeholder), h("span", { key: '27dd2f46dc6f124e8c691d09e0fd811c7af8c645', class: "dropdown__chevron" }, h("dga-icon", { key: '87f1a13ec5478535f4ca3da8773a39a63aa8db62', icon: arrowDown01Stroke, size: 20 }))), h("ul", { key: 'dec2407e5964beae2d37f9303328ec21b428bbff', class: "dropdown__list" }, this.optionList.map((option, index) => (h("li", { key: option[this.trackBy] || guid() }, h("button", { class: {
                'dropdown__option': true,
                'dropdown__option--checkbox': this.multiSelect,
                'selected': option.selected,
            }, "data-value": option[this.trackBy], onClick: e => this.handleOptionClick(e, option, index), onMouseDown: this.handleAddPressed.bind(this), onMouseUp: this.handleRemovePressed.bind(this), onMouseOut: this.handleRemovePressed.bind(this), type: "button" }, this.multiSelect && h("dga-checkbox", { checked: option.selected }), h("span", { class: "dropdown__option-label" }, option[this.optionLabel] || ''), !this.multiSelect && option.selected && (h("span", { class: "dropdown__option-icon" }, h("dga-icon", { icon: tick02Solid, size: 20 })))))))))));
    }
    static get is() { return "dga-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-dropdown.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "****************\nProps\n****************"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "guid()"
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
            "multiSelect": {
                "type": "boolean",
                "attribute": "multi-select",
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
            "leadingIcon": {
                "type": "string",
                "attribute": "leading-icon",
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
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
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
                "defaultValue": "[]"
            },
            "optionLabel": {
                "type": "string",
                "attribute": "option-label",
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
                "defaultValue": "'name'"
            },
            "trackBy": {
                "type": "string",
                "attribute": "track-by",
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
                "defaultValue": "'value'"
            },
            "getSelectedOptions": {
                "type": "unknown",
                "attribute": "get-selected-options",
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
            "extraClass": {
                "type": "string",
                "attribute": "extra-class",
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
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(value: string | string[]) => void",
                    "resolved": "(value: string | string[]) => void",
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
            "optionList": {},
            "dropdownOpen": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "options",
                "methodName": "initializeOptions"
            }, {
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
