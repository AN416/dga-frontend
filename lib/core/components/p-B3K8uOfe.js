import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaContentSwitcherPanel = /*@__PURE__*/ proxyCustomElement(class DgaContentSwitcherPanel extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'a5b0f5fc828acf1f689061956b9a27a11a30b95f', class: "content-switcher-panel", hidden: this.value !== this.index }, h("slot", { key: '49b4ec1bf9d71364b92e607d03cd868cc92373e4' })));
    }
}, [4, "dga-content-switcher-panel", {
        "value": [2],
        "index": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-content-switcher-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-content-switcher-panel":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaContentSwitcherPanel);
            }
            break;
    } });
}

export { DgaContentSwitcherPanel as D, defineCustomElement as d };
