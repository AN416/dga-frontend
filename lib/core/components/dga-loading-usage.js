import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-6QvzwII5.js';

const DgaLoadingUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaLoadingUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: 'bb687eec027a7b1825b5c7a7c0de7d446fc6d192' }, h("h1", { key: 'cbd68a2575faa167d900a4514b6651713ef2919e' }, "Loading Example"), h("div", { key: '6134d21b479c58680362b1ef1bf94cdbae3214e0', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: 'db47bd243ea17843d5beaa6bb0b81d1b0930aa15', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-loading", { key: '7ce17408ee36f5b30f98eb181bc2e7c1365de532' })), h("div", { key: 'e9e03e1f95c1f9b29ca182fd9d3b003f03b9c69c', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
}, [0, "dga-loading-usage", {
        "activeStep": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-loading-usage", "dga-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-loading-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaLoadingUsage$1);
            }
            break;
        case "dga-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaLoadingUsage = DgaLoadingUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaLoadingUsage, defineCustomElement };
