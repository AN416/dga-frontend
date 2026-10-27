import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-tf7cIqs3.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-DNAR5ou0.js';

const DgaDigitalSignatureUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaDigitalSignatureUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: '23da28f01461adfba68804f24c153489862fb13e', style: { width: '100%' } }, h("dga-digital-signature", { key: 'd57bf2e95d5f84f4fad67fd606c4fcba624c1f7f', language: "en", extension: ".gov.sa" }), h("dga-digital-signature", { key: '595c69f55ad788d3ede78b1b98321d526483b87f', extension: ".gov.sa", language: "en", linkProps: {
                inline: true,
                label: '20230103200',
                size: 'md',
                target: '_blank',
                external: true,
                url: 'https://scrimba.com/fullstack-path-c0fullstack',
                variant: 'primary'
            } })));
    }
}, [0, "dga-digital-signature-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-digital-signature-usage", "dga-digital-signature", "dga-icon", "dga-link"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-digital-signature-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaDigitalSignatureUsage$1);
            }
            break;
        case "dga-digital-signature":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaDigitalSignatureUsage = DgaDigitalSignatureUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaDigitalSignatureUsage, defineCustomElement };
