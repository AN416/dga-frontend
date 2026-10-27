import { p as proxyCustomElement, H, h, d as Host } from './p-CqmCtiRl.js';

const DgaSecondNavHeaderActions = /*@__PURE__*/ proxyCustomElement(class DgaSecondNavHeaderActions extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '4f13bea9f9c1b8deb1cb7b9bdb908c92641dd193' }, h("div", { key: '32e25b10b8779acdbc0e60c32b5006a9dc7a0282', class: `items-container` }, h("slot", { key: 'bd989914f556098298fbca6c80f60749bf91819a' }))));
    }
}, [4, "dga-second-nav-header-actions"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-second-nav-header-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-second-nav-header-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSecondNavHeaderActions);
            }
            break;
    } });
}

export { DgaSecondNavHeaderActions as D, defineCustomElement as d };
