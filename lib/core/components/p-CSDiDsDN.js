import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$1 } from './p-CDMKY2c-.js';

const DgaButtonLeadingIcon = /*@__PURE__*/ proxyCustomElement(class DgaButtonLeadingIcon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    render() {
        // Check if there are any child elements
        return (h("span", { key: 'dd4808dcfff3a4a8d0d1741697bbc53b78cfe115', class: "dga-btn-icon dga-btn-icon--leading", "aria-hidden": "true", slot: "leading-icon" }, h("dga-icon", { key: '357872db74147b48df88f4ea90f1ceca8ff52332', name: this.name, size: this.size, color: this.color, variant: this.variant, type: this.type })));
    }
    get el() { return this; }
}, [0, "dga-button-leading-icon", {
        "name": [1537],
        "size": [2],
        "color": [1],
        "variant": [1],
        "type": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-button-leading-icon", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-button-leading-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaButtonLeadingIcon);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { DgaButtonLeadingIcon as D, defineCustomElement as d };
