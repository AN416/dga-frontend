import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$6 } from './p-v5oHxLBb.js';
import { d as defineCustomElement$5 } from './p-BTW0zmd3.js';
import { d as defineCustomElement$4 } from './p-CWlbqSIy.js';
import { d as defineCustomElement$3 } from './p-EM3U0EYL.js';
import { d as defineCustomElement$2 } from './p-D8gOMiDr.js';

const LineSkeleton = /*@__PURE__*/ proxyCustomElement(class LineSkeleton extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: 'f42ef5a4c610f1069e40214d9384ae239636c29b' }, h("dga-line-skeleton", { key: '081e4f476ea7d3524f4a9ab38ed22774dc1ecee5' }), h("dga-circle-skeleton", { key: 'dea01d885a0a1c2a1e375a70e1cf18eeda063ca0' }), h("dga-rectangle-skeleton", { key: '5342522a60e97b8178796a515d3486235dea9750' }), h("dga-square-skeleton", { key: '7766914eaf08c4a7e367031dfb9c5bc07114b539' }), h("dga-skeleton-component", { key: '41d8a06e4d46896f6b14c2e3618483f68772bdfc' })));
    }
}, [0, "dga-skeleton-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-skeleton-usage", "dga-circle-skeleton", "dga-line-skeleton", "dga-rectangle-skeleton", "dga-skeleton-component", "dga-square-skeleton"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-skeleton-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LineSkeleton);
            }
            break;
        case "dga-circle-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-line-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-rectangle-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-skeleton-component":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-square-skeleton":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaSkeletonUsage = LineSkeleton;
const defineCustomElement = defineCustomElement$1;

export { DgaSkeletonUsage, defineCustomElement };
