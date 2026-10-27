import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CwFPFjba.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const DgaCheckboxUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaCheckboxUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '8e9770e2171e5ed18ae7748a0dfd8f2ef1d49f36' }, h("h1", { key: '25eeb941f63f0786bfe33575f5a8ccfe875db1be' }, "Checkbox Example"), h("div", { key: 'fe3f8928294560c9a533332d3ee08724aea6c512', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '0bb1e027631d1a3950122b03607342276498ce0f', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("h1", { key: '5138f921ce66ae2f080fdcbf2f36d96ea2e49d74' }, "test"), h("dga-checkbox", { key: 'ecaad6fbaaa2c71a19afd820bf314c0f0752aacc', label: 'Checkbox Label Checkbox Label Checkbox Label Checkbox Label', Indeterminate: false, alertMessage: true, alertText: "Error/Warning message" }), h("dga-checkbox", { key: '76720ac218f032d6244563f880b431ed7fef9c62', size: 'lg' }), h("dga-checkbox", { key: '45e3f13512132c47b9ccc5866c38399ec7dfca02', size: 'md' }), h("dga-checkbox", { key: '0580ec8a34878581b52ee3e192e6984005f3b25e', size: 'sm' })), h("div", { key: 'bf39eebf9b8b400d12557d34a5b925f8e017a227', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-checkbox-usage", {
        "variant": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-checkbox-usage", "dga-checkbox", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-checkbox-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaCheckboxUsage$1);
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaCheckboxUsage = DgaCheckboxUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaCheckboxUsage, defineCustomElement };
