import { p as proxyCustomElement, H, h, F as Fragment } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-Bml5Fqkq.js';

const DgaSliderUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaSliderUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.activeStep = 1;
        this.minValue = 10;
        this.maxValue = 100;
    }
    render() {
        return (h(Fragment, { key: 'c68f2326a490de38f5c207b41c7a834cb8e357da' }, h("br", { key: 'e4b091ef3fb9c02df1b156643bd485067faae55a' }), h("dga-slider", { key: 'aa37a2dcf1a522dcbd5cb7e5c9c7882a9cd13fac', min: this.minValue, max: this.maxValue, step: 1, range: true, size: "medium", helperText: "Helper Text Example", label: "Test", sx: {
                backgroundColor: "yellow",
                marginTop: "200px",
                ".range-slider-inner-rail": {
                    backgroundColor: "red"
                }
            } }), ";", h("br", { key: 'f49dd5a94922b20fd49336ed5482886aeed31742' }), this.minValue, " - ", this.maxValue, h("dga-slider", { key: 'cd6b5e663ed4cd00ac55509ff85ab3280654df37' })));
    }
}, [1, "dga-slider-usage", {
        "activeStep": [32],
        "minValue": [32],
        "maxValue": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-slider-usage", "dga-icon", "dga-slider"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-slider-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSliderUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-slider":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaSliderUsage = DgaSliderUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaSliderUsage, defineCustomElement };
