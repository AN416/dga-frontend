import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-3iqQMUow.js';

const DgaTextareaUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaTextareaUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'eedd21e1d488194fba129acfbc4dcaaea7965044' }, h("h1", { key: '2bac950452467a303fa6e067c48a4b3fd4638e6b' }, "Textarea Example"), h("div", { key: '598e7f33f3583e4b7546da9f141b81b9ceb93518', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '149b5622df28b4ea0dd4eb57fafd66de903615c8', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-textarea", { key: 'abff65ce309d12412270a48ff3898afa991be11b', label: "Label", placeholder: "Placeholder...", scrollbar: true, readonly: true }), h("dga-textarea", { key: 'cfb003723ee656013d6ecd9d011a629257ff1143', placeholder: "Placeholder...", scrollbar: true })), h("div", { key: '5e81eb3feac0aff14f7e0dbff1c6db7719b8478a', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-textarea-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-textarea-usage", "dga-icon", "dga-textarea"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-textarea-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaTextareaUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaTextareaUsage = DgaTextareaUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaTextareaUsage, defineCustomElement };
