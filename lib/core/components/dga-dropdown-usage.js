import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$5 } from './p-CwFPFjba.js';
import { d as defineCustomElement$4 } from './p-BAdxHiJ0.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-Baww4Hli.js';

const DgaDropdownUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaDropdownUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.activeStep = 1;
        this.selectedValue = 'Option-1';
    }
    render() {
        return (h("div", { key: 'd5c7c751434bab47c4090661de9960f6d72ac895' }, h("h1", { key: '7429f907839c2f6ecfd6005020c177c2232b2057' }, "Dropdown Example"), h("div", { key: '3396f8275bde33ed4406a0b0a066a7616b7fef82', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'c207b4da23a291b591298f02e4576039dd4d472e', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-dropdown", { key: 'f71a19323024a83d27f1c9fd875fe81a0255c8cc', placeholder: "Placeholder text", variant: "default", optionLabel: "label", trackBy: "value", value: this.selectedValue, options: [
                {
                    label: 'Netherlands Antiles',
                    value: 'Option-1',
                },
                {
                    label: 'Option 2',
                    value: 'Option-2',
                },
                {
                    label: 'Option 3',
                    value: 'Option-3',
                },
            ], onChange: (value) => this.selectedValue = value }), this.selectedValue, h("dga-dropdown", { key: 'd25671d29a4a8f81de078ce9e55cf7ddd6766913', placeholder: "Placeholder text", variant: "darker", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option Optionbbb',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), h("dga-dropdown", { key: '8e45432bd23e39c9e2150b2e0950145e364e9b5f', placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), h("dga-dropdown", { key: 'fc9bb0ec277351b0a6b56294fe5aa89fb55fb9d6', error: true, placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), ['lg', 'md'].map((size) => (h("dga-dropdown", { key: size, size: size, placeholder: "Placeholder text", variant: "default", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }))), h("dga-dropdown", { key: '65a2d7e33d70997ceac98e399c21291e50d4e6e1', multiSelect: true, placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] })), h("div", { key: '7d0732bd74fa5f20403fb1712eae99bec360c648', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-dropdown-usage", {
        "activeStep": [32],
        "selectedValue": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-dropdown-usage", "dga-checkbox", "dga-dropdown", "dga-icon", "dga-label"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-dropdown-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaDropdownUsage$1);
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-dropdown":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaDropdownUsage = DgaDropdownUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaDropdownUsage, defineCustomElement };
