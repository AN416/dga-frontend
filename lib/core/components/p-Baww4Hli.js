import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaLabel = /*@__PURE__*/ proxyCustomElement(class DgaLabel extends H {
    constructor() {
        super();
        this.__registerHost();
        this.label = '';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
        this.required = false;
    }
    render() {
        return (h("label", { key: '692ee36b718139de64025241bc4fa8a146566c97', class: `dga-label dga-label--${this.size} ${this.disabled ? "disabled" : ""}` }, this.required && h("span", { key: 'e9b496087978459abe4ca6371d34d021e7a499d6', class: "star" }, "*"), this.label));
    }
}, [0, "dga-label", {
        "label": [1],
        "variant": [1],
        "size": [1],
        "disabled": [4],
        "required": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-label"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-label":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaLabel);
            }
            break;
    } });
}

export { DgaLabel as D, defineCustomElement as d };
