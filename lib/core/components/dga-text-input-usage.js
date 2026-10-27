import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$6 } from './p-B_CKQpN8.js';
import { d as defineCustomElement$5 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$4 } from './p-Baww4Hli.js';
import { d as defineCustomElement$3 } from './p-BlgehTPT.js';
import { d as defineCustomElement$2 } from './p-BgOL_zV2.js';

const DgaTextInputUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaTextInputUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.value = 'Text Input Example';
    }
    render() {
        return (h("div", { key: '36d6cfcf6fb629ee6b74c1e72bae38a7d4f6adb4' }, h("h1", { key: '92d28a8adc3ccc24b8d5dda793ffeda154375261' }, "Text Input Example"), h("div", { key: '6d590a9c7168335df8e9c5daebf35e83e1c0170b', style: { padding: '50px' } }, h("div", { key: '1a850519e0bda4f3551858b5e26c9bd3200dec1a', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("input", { key: '77ee8f84053c4599c61cce4eaa46382afc760b1e', type: "text", value: this.value, onChange: (e) => (this.value = e.target.value) }), h("p", { key: 'efcc03926e4b6bc783cf5cc6134a703dc3795526' }, this.value), h("dga-text-input", { key: '3b8005e59eb56730b0d26965d1e237e0f4ff9857', readonly: false, variant: "darker", label: "Label", value: this.value, required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true, onInput: (e) => (this.value = e.target.value) }), h("dga-text-input", { key: '596864b454783dac5e27cbdd389c619ca86a841b', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }), h("dga-text-input", { key: 'ad6a3205781f90c804c28b41f1116d21976408a5', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }, h("dga-prefix", { key: 'a878360940fb5384ce9b5d810f84f28fc9a16297', type: "button", variant: "solid",
            // label="Button Label"
            icon: { name: 'search-01' } })), h("dga-label", { key: '341a6978553e586661eea52e29c925fe7455f9a0', label: "Mandatory Text Input" }), h("dga-label", { key: '317bb208755ffb2bd8eae60dc7bf353085bf04fd', label: "Mandatory Text Input", required: true })))));
    }
}, [0, "dga-text-input-usage", {
        "value": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-text-input-usage", "dga-helper-text", "dga-icon", "dga-label", "dga-prefix", "dga-text-input"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-text-input-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaTextInputUsage$1);
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
        case "dga-prefix":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-text-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaTextInputUsage = DgaTextInputUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaTextInputUsage, defineCustomElement };
