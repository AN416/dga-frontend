import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$9 } from './p-DrJOWVZZ.js';
import { d as defineCustomElement$8 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$7 } from './p-C1z-oJS3.js';
import { d as defineCustomElement$6 } from './p-B_CKQpN8.js';
import { d as defineCustomElement$5 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$4 } from './p-Baww4Hli.js';
import { d as defineCustomElement$3 } from './p-BgOL_zV2.js';
import { d as defineCustomElement$2 } from './p-Dzst0-mZ.js';

const DgaPickerUsage = /*@__PURE__*/ proxyCustomElement(class DgaPickerUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: '8fa29622d090a82e263647cde633bd5358b2cfb1' }, h("h1", { key: '368a9f85d0c798ecdb0c3e15fc966be7f373f620' }, "Datepicker Example"), h("div", { key: 'c4d67c8cdc9a0062dafd8b95aa4d9e4802172d26', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f8a45b6dd74b4803e455bad77d8ce9d625611e26', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-datepicker", { key: '070760d61aeb23fa3c3f70df134fa76a17b88298', inputField: false, qickOptions: true }), h("dga-datepicker", { key: '5fa85e9cdb6269ea515801996346412970222111', RTL: true, inputField: true, range: true, qickOptions: true }), h("dga-datepicker", { key: 'f3b2d504414d9a55096120f69d65b28e8d889962', range: true })), h("div", { key: 'cc5d75a313224591921b6cab04f1bf42b6a0cce9', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-datepicker-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-datepicker-usage", "date-cell", "dga-button-v2", "dga-datepicker", "dga-helper-text", "dga-icon", "dga-label", "dga-text-input", "month-navigator"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-datepicker-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaPickerUsage);
            }
            break;
        case "date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "dga-datepicker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "dga-helper-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-text-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "month-navigator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaDatepickerUsage = DgaPickerUsage;
const defineCustomElement = defineCustomElement$1;

export { DgaDatepickerUsage, defineCustomElement };
