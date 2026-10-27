'use strict';

var index = require('./index-DuIfHULw.js');
var index$2 = require('./index-BCWGzgj9.js');
var sxStyleManager = require('./sx-style-manager-MFMlOw-g.js');
var index$1 = require('./index-BvSPeG4E.js');

const DgaHelperText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.helperText = '';
        this.error = false;
    }
    render() {
        var _a;
        return (index.h("div", { key: 'f7b561b48aca76822961633a9ba5ef3db07f6755', class: `dga-helper-text ${this.error ? "dga-helper-text--error" : ""}` }, index.h("span", { key: '8ae46ec323e7cfb72656f6c28a5ac4a118e194c1', class: "dga-helper-text__icon" }, this.helperTextIcon && ((_a = this.helperTextIcon) === null || _a === void 0 ? void 0 : _a.name) && index.h("dga-icon", { key: '54df6f5eb3361ebac053656e929cbc58286067ca', name: this.helperTextIcon.name, variant: this.helperTextIcon.variant, type: this.helperTextIcon.type, size: 16 })), index.h("span", { key: '74fe3eea473c129305bb44683cbdb812933b36ee', class: "dga-helper-text__desc" }, this.helperText)));
    }
};

const feedbackIconTypes = {
    success: index.h("dga-icon", { icon: index$1.checkmarkCircle02Solid }),
    error: index.h("dga-icon", { icon: index$1.alertCircleSolid }),
    warning: index.h("dga-icon", { icon: index$1.alert02Solid }),
};
const DgaTextInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.name = index$2.guid();
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
        this.sxStyleManager = new sxStyleManager.SxStyleManager(this.componentId, this.el);
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
        return (index.h(index.Host, { key: 'fe16cfffd4d8741bd35c0599b06bdadeac7f58dd', id: this.componentId, style: this.rootStyles }, index.h("div", { key: '12191cfbf577e4ca80be2d10e1de7c99dd7ec5f1', class: { "dga-form-control": true, "dga-form-control--fullwidth": this.fullwidth } }, this.label && index.h("dga-label", { key: '9af15d3e82af14d56091ca21ce753848b9e75cb2', label: this.label, size: this.size, required: this.required, disabled: this.disabled }), index.h("div", { key: 'ee6812f57348b118751d97af4a9b5804543e7436', class: `input input--${this.size} ${this.error ? 'input--error' : ''} ${this.variant !== 'default' ? `input--${this.variant}` : ''} ${this.isActive ? 'active' : ''} ${this.isFocused ? 'focus' : ''} ${this.disabled ? 'input--disabled' : ''} ${this.readonly ? 'readOnly' : ''}`, ref: el => (this.inputContainerRef = el) }, index.h("slot", { key: 'e135cfd4d52956ad4490a3470438aa196acd5acf', name: "prefix" }), this.icon && (index.h("span", { key: 'e49d3324a880d69af741e9dad98805bd0f72faf5', class: "input__icon" }, index.h("dga-icon", { key: '8dbfa5cb0d3086050007bc0d87c4a0f8f4c65d1e', name: this.icon.name, variant: this.icon.variant, type: this.icon.type, size: 20 }))), index.h("input", { key: '40ad73d3426765dbf745cb424a9f648672e4f5a5',
            // id={id}
            ref: (el) => (this.textInputEl = el), value: this.value, name: this.name, type: this.type, onFocus: () => (this.isFocused = true), onBlur: e => {
                this.isFocused = false;
                this.onBlur(e);
            }, class: "input__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, required: this.required, onMouseDown: () => (this.isActive = true), onMouseUp: () => (this.isActive = false), onMouseOut: () => (this.isActive = false), onChange: this.onChange, onInput: this.onInput }), this.error ? (index.h("span", { class: `input__feedback-icon input__feedback-icon--error ${this.feedbackIconRing ? 'input__feedback-icon--ring' : ''}` })) : this.feedbackIcon ? (index.h("span", { class: `input__feedback-icon input__feedback-icon--${this.feedbackIconType} ${this.feedbackIconRing ? 'input__feedback-icon--ring' : ''}` }, feedbackIconTypes[this.feedbackIconType])) : null, index.h("slot", { key: 'df0469c8a2916e509d9cd6adcd6b204290679ce1', name: "suffix" }), " "), this.helperText && index.h("dga-helper-text", { key: 'bf17345b0b29463ad7a2fc0fe05e7fe08b10d6fc', helperText: this.helperText, helperTextIcon: this.helperTextIcon, error: this.error }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"],
        "sx": ["handleSxChange"]
    }; }
};

exports.dga_helper_text = DgaHelperText;
exports.dga_text_input = DgaTextInput;
