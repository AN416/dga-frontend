import { p as proxyCustomElement, H, h, d as Host } from './p-CqmCtiRl.js';

const DgaSecondNavHeaderItem = /*@__PURE__*/ proxyCustomElement(class DgaSecondNavHeaderItem extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    connectedCallback() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-ICON'.toLocaleUpperCase() && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'icon');
            }
        });
    }
    render() {
        return (h(Host, { key: 'b02dc9f1e6650ac6bd6cf85d44b105283d9d3171' }, h("slot", { key: 'af18cafbd1e955f713d22a83299889e589392e63', name: 'icon' }), h("slot", { key: '7022e55daef2703b0a56897a3e9ac4f3dc500d0b', name: 'label' }, this.label)));
    }
    get el() { return this; }
}, [4, "dga-second-nav-header-item", {
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-second-nav-header-item"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-second-nav-header-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSecondNavHeaderItem);
            }
            break;
    } });
}

export { DgaSecondNavHeaderItem as D, defineCustomElement as d };
