import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-BdC9G5yq.js';

const DgaRadioButtonUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaRadioButtonUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.activeStep = 1;
        this.activeRadio = "radion-1";
    }
    render() {
        return (h("div", { key: '81285606e6e0554eba38953edab8ab5aa86fb6e7' }, h("h1", { key: '3a54d4995ead395308c7b415ab28ed12ecfeac89' }, "RadioButton Example"), h("div", { key: 'e14ab5d5c398d1ba62601e8f1f02b67b7420c90e', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '24751c1364d372b90f881ce201f5bc3cb0b3a51c', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-radio-button", { key: '77a22c16f14dea52ba0eb146bc3d241e33cad090',
            // id="radio1"
            label: "Radio Label 1", hasHelperText: true, helperText: "When a selection needs a further detailed explanation, it goes here.", alertMessage: true, alertText: "Error/Warning message", name: "radio", value: 'radion-1', checked: this.activeRadio === 'radion-1', onChange: (e) => this.activeRadio = e.target.value }), h("dga-radio-button", { key: '010d446e65b32fba5598248e5b22de995761ded1',
            // id="radio2"
            label: "Radio Label 2", hasHelperText: true, helperText: "When a selection needs a further detailed explanation, it goes here.", alertMessage: true, alertText: "Error/Warning message", name: "radio", value: 'radion-2', checked: this.activeRadio === 'radion-2', onChange: (e) => this.activeRadio = e.target.value })), h("div", { key: '75e252b941f9f6719bbe0e487563380c4a2388c2', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-radio-button-usage", {
        "activeStep": [32],
        "activeRadio": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-radio-button-usage", "dga-icon", "dga-radio-button"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-radio-button-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaRadioButtonUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-radio-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaRadioButtonUsage = DgaRadioButtonUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaRadioButtonUsage, defineCustomElement };
