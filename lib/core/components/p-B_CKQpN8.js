import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$1 } from './p-CDMKY2c-.js';

const DgaHelperText = /*@__PURE__*/ proxyCustomElement(class DgaHelperText extends H {
    constructor() {
        super();
        this.__registerHost();
        this.helperText = '';
        this.error = false;
    }
    render() {
        var _a;
        return (h("div", { key: 'f7b561b48aca76822961633a9ba5ef3db07f6755', class: `dga-helper-text ${this.error ? "dga-helper-text--error" : ""}` }, h("span", { key: '8ae46ec323e7cfb72656f6c28a5ac4a118e194c1', class: "dga-helper-text__icon" }, this.helperTextIcon && ((_a = this.helperTextIcon) === null || _a === void 0 ? void 0 : _a.name) && h("dga-icon", { key: '54df6f5eb3361ebac053656e929cbc58286067ca', name: this.helperTextIcon.name, variant: this.helperTextIcon.variant, type: this.helperTextIcon.type, size: 16 })), h("span", { key: '74fe3eea473c129305bb44683cbdb812933b36ee', class: "dga-helper-text__desc" }, this.helperText)));
    }
}, [0, "dga-helper-text", {
        "helperTextIcon": [16, "helper-text-icon"],
        "helperText": [1, "helper-text"],
        "error": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-helper-text", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-helper-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaHelperText);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { DgaHelperText as D, defineCustomElement as d };
