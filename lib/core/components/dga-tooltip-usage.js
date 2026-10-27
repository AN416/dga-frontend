import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-Bke0Wg5h.js';

const DgaTooltipUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaTooltipUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: '49e204f87a983fdef362ba15aa675ff88b154f6f' }, h("h1", { key: 'f72901552c7c15ffa756b2611f6e3f4ae12282c8' }, "Tooltip Example"), h("div", { key: 'ca767eeea3c7bcd148d47bb9f334a803b64d0fdc', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: '3677a428ee9986cff7fdcac5e82b23e6ccd32f00', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-tooltip", { key: '0557244092b40e17d7dc9e2b3f165f16ef5da332', title: "Tooltip title", helperText: "Max width of tooltips is 240px - text will wrap automatically", direction: 'right', theme: 'dark', icon: true, beakAlignment: 'end', beakPlacement: 'left', feedbackIcon: {
                type: "error-!",
                style: "container",
                size: 24
            } }, "Hello")), h("div", { key: 'dca6a8a3e51c917b14829e47f2cace5779472640', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
}, [0, "dga-tooltip-usage", {
        "activeStep": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-tooltip-usage", "dga-icon", "dga-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-tooltip-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaTooltipUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaTooltipUsage = DgaTooltipUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaTooltipUsage, defineCustomElement };
