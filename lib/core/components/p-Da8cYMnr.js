import { p as proxyCustomElement, H, h, d as Host } from './p-CqmCtiRl.js';

const DgaSecondNavHeaderContent = /*@__PURE__*/ proxyCustomElement(class DgaSecondNavHeaderContent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '8c6a8cbca0a45bb98b169619b6b088a0fcf87155' }, h("div", { key: '028f1f65e4a7a0e1fefcc7ee631d59138e281aa6', class: `items-container` }, h("slot", { key: 'd680b0dcdaf2000234bf20254ea671397eb37c14' }))));
    }
}, [4, "dga-second-nav-header-content"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-second-nav-header-content"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-second-nav-header-content":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSecondNavHeaderContent);
            }
            break;
    } });
}

export { DgaSecondNavHeaderContent as D, defineCustomElement as d };
