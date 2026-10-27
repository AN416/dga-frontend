import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-B1ekvjhr.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const DgaAccordionUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaAccordionUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: '2c12863faabb147c879a0c555e7edcd107c7ff64' }, h("h1", { key: '140ed5011b336102d03c4f1f3013ecc845321a31' }, "Accordion Example"), h("div", { key: '968c0b79000aeb86ec0491ed912f66b9a81ccbf9', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f3fec41067a37a6f77007c129d5ef86d9632b6db', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-accordion", { key: 'cf11e7f77a46a5f16b30d87a1a3b5ded362175fd', title: "Accordion Title", size: "lg", content: "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion." }), h("dga-accordion", { key: 'ce1736b7394c809c95c486c32b64438d839d5707', title: "Accordion Title", size: "md" }), h("dga-accordion", { key: 'beafb882a6a69a71bd1f88d806ebf9334c2f0ae3', title: "Accordion Title", size: "sm" }), h("dga-accordion", { key: 'ead49a702f2c42b354230122d9939694775fe534', defaultExpanded: true, title: "Accordion Title", size: "lg", content: "The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.", disabled: true })), h("div", { key: 'da212916d04ef25ac3914e1285414223f2591714', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-accordion-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-accordion-usage", "dga-accordion", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-accordion-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaAccordionUsage$1);
            }
            break;
        case "dga-accordion":
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

const DgaAccordionUsage = DgaAccordionUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaAccordionUsage, defineCustomElement };
