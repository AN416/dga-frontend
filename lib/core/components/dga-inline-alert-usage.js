import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-85h-4DuK.js';

const DgaInlineAlertUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaInlineAlertUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'd901d95d27bac64c2b9cdee3073c20b1f01ed75c', dir: 'rlt' }, h("h1", { key: '76ab5d220a88625d261e02744fbd8a7bbd129a86' }, "Inline ALert Example"), h("div", { key: '2120971ffdca5a5b24de95db91656b61d2f796f5', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'ad0d4262cb6affc27d839003767e343822db2054', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-inline-alert", { key: '5e9dba1aab7224d098a8a4ba42cdc41c6309dfce', type: "neutral", leadText: "Notification/Alert message title ", helperText: "When a nation, it goes here.", colored: true }), h("dga-inline-alert", { key: 'cccfa78df7c64f308b7c0b0afe59e93cd25b6ce7', type: "error", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: '4ee5ca0b17e271b04969702c733b180116336d46', type: "info", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: 'd7fb2a8a0ce9c0228b6c7d9f379455f89e367516', type: "success", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true }), h("dga-inline-alert", { key: '744ac9cf4862cb1599400a256c4a21441e63347b', type: "warning", leadText: "Notification/Alert message title ", helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", colored: true })), h("div", { key: '817228849cbea26cd35d1eb4eb85fc4dc082b0ef', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-inline-alert-usage", {
        "variant": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-inline-alert-usage", "dga-icon", "dga-inline-alert"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-inline-alert-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaInlineAlertUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-inline-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaInlineAlertUsage = DgaInlineAlertUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaInlineAlertUsage, defineCustomElement };
