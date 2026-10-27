import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$5 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$4 } from './p-CgT9rr1E.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-b6bxHeWX.js';

const DgaModalUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaModalUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.show = false;
    }
    render() {
        return (h("div", { key: '2416cbd78e6774e730a1b5428bca098a95b43f25', style: { position: "relative" } }, h("h1", { key: '6635ba74dcd08aee09728f30b970b73c70feeda3' }, "Modal Example"), h("button", { key: 'e4eddb3889b1670af2b0f89fb2d615062d4659c0', onClick: () => this.show = true }, "Open Modal"), h("dga-modal", { key: '60d80213999c5988efb06c7685d126ea6ca88789', buttonsList: [
                {
                    extraClass: '',
                    label: 'Close',
                    onClick: () => { },
                    title: 'Close Modal'
                }
            ], closeButton: true, modalTitle: "Basic Modal", name: "basicModal", onClose: () => { }, open: this.show }, "This is a simple modal with default configuration."), this.show ? "shown" : "hidden"));
    }
}, [0, "dga-modal-usage", {
        "show": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-modal-usage", "dga-button-v2", "dga-featured-icon", "dga-icon", "dga-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-modal-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaModalUsage$1);
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-featured-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaModalUsage = DgaModalUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaModalUsage, defineCustomElement };
