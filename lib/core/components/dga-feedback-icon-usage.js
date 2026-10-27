import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaFeedbackIconUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaFeedbackIconUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.value = 'test';
    }
    render() {
        return (h("div", { key: '615b51fc7247d64779bd95f1038a6600d8dfe9c4' }, h("h1", { key: '96f000136cf7baca61d3206f8716a9735dba606a' }, "Search Box Example"), h("div", { key: 'eae9fb5e86179e1001abae46543f38e560e23c4a', style: { padding: '50px' } }, h("div", { key: '190ae2034fd29bf0ba3164790d8252755366f86f', style: { display: "flex", flexDirection: "column", gap: "16px" } }))));
    }
}, [0, "dga-feedback-icon-usage", {
        "value": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-feedback-icon-usage"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-feedback-icon-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaFeedbackIconUsage$1);
            }
            break;
    } });
}

const DgaFeedbackIconUsage = DgaFeedbackIconUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaFeedbackIconUsage, defineCustomElement };
