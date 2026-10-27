import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-C05zhJ_Y.js';

const DgaButtonUsage = /*@__PURE__*/ proxyCustomElement(class DgaButtonUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'ece24a1e44f579e141d33235b85d7e59e77cd667', style: {
                margin: "10px"
            } }, h("floating-button", { key: '33004737190fb80be82b5a31c12c5dfc66c7dd92', variant: "secondary-solid" }), h("div", { key: '6af7e8b066aa63de7c8279bd95e20a9c5d9bdf1c', style: {
                marginTop: "10px",
            } }, h("floating-button", { key: '22df7a63273349cfd76385a9e96f90306ac1442f', variant: "primary-neutral", iconOnly: true }))));
    }
}, [0, "dga-floating-button-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-floating-button-usage", "dga-icon", "floating-button"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-floating-button-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaButtonUsage);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "floating-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaFloatingButtonUsage = DgaButtonUsage;
const defineCustomElement = defineCustomElement$1;

export { DgaFloatingButtonUsage, defineCustomElement };
