import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$a } from './p-DrJOWVZZ.js';
import { d as defineCustomElement$9 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$8 } from './p-BzgqEk__.js';
import { d as defineCustomElement$7 } from './p-C1z-oJS3.js';
import { d as defineCustomElement$6 } from './p-B_CKQpN8.js';
import { d as defineCustomElement$5 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$4 } from './p-Baww4Hli.js';
import { d as defineCustomElement$3 } from './p-BgOL_zV2.js';
import { d as defineCustomElement$2 } from './p-Dzst0-mZ.js';

const DgaDateFieldUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaDateFieldUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.value = '';
    }
    render() {
        return (h("div", { key: '880139077b49e41c5d038d9bdbc04d43b7180c8d' }, h("h1", { key: '7d19d3f5bd3475abe0ca4e6c52af9a2bc0aeecca' }, "Date Field Example"), h("div", { key: 'bbd9a425c230db4290480c7ffd920c73825df780', style: { padding: '50px' } }, h("div", { key: '7504da2dfc0971e6610d9d22068ed9a9a53e2c9c', style: { display: "flex", flexDirection: "column", gap: "16px" } }, h("input", { key: '161827836294a5b910ba5df7069865e54c9acc24', type: "date", value: this.value, onChange: (e) => this.value = e.target.value }), h("dga-date-field", { key: '58b25234de5b01b644c99ca84d19f27b839d7fa0', value: this.value, onChange: (e) => this.value = e.target.value })))));
    }
}, [0, "dga-date-field-usage", {
        "value": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-date-field-usage", "date-cell", "dga-button-v2", "dga-date-field", "dga-datepicker", "dga-helper-text", "dga-icon", "dga-label", "dga-text-input", "month-navigator"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-date-field-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaDateFieldUsage$1);
            }
            break;
        case "date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "dga-date-field":
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

const DgaDateFieldUsage = DgaDateFieldUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaDateFieldUsage, defineCustomElement };
