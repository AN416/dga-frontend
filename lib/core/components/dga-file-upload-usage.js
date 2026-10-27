import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$5 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$4 } from './p-CA2ar_je.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-6QvzwII5.js';

const DgaFileUploadUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaFileUploadUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'af1c443f53967bb37ba7def816f0da3f09f9af19' }, h("h1", { key: '967658803fe7da8969c70e2a586fefaeae38b8c7' }, "File Upload Example"), h("div", { key: 'ec7578d4b387aed891709cb89ce28f1a1e1e5453', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: 'b45995c48d0bb445dcabed9ebfe439bbd1deb0c7', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-file-upload", { key: '72b377b73a7b447682b139e61ac8f386ea937d7a' })), h("div", { key: '372ad2ef199d830ced0405e9a47f5393c6779114', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
}, [0, "dga-file-upload-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-file-upload-usage", "dga-button-v2", "dga-file-upload", "dga-icon", "dga-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-file-upload-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaFileUploadUsage$1);
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-file-upload":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaFileUploadUsage = DgaFileUploadUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaFileUploadUsage, defineCustomElement };
