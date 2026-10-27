import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$7 } from './p-B0xQl3VA.js';
import { d as defineCustomElement$6 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$5 } from './p-gDlGRjp5.js';
import { d as defineCustomElement$4 } from './p-CwFPFjba.js';
import { d as defineCustomElement$3 } from './p-CgT9rr1E.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const DgaCardUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaCardUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
        this.selected = false;
    }
    render() {
        return (h("div", { key: '139cf16aa0eef61fbfa90b4e9634872886967191' }, h("h1", { key: 'ce721f60451de00dc160f158288cb7a073a17b7f' }, "Card Example"), h("div", { key: 'da08682b2193085ab666cbaf1147182eff075b5a', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f924ab80749bec448c80e32f9af0f6941a371435', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-card", { key: 'bf1d05e88580a5aa0295957c4e550ddb6a467fdc', type: "expanded", cardTitle: "Card Title", description: "Card content placeholder text goes here", showFeaturedIcon: true }, h("div", { key: 'cd902b46247ad1502f940618a3907c2c35165412', slot: "collapse-content" }, "dgdsgdfgdfg")), h("dga-card", { key: 'e6e7c9f10f54bdd366d3d48f1a35da6391864147', type: "selectable", cardTitle: "Card Title", description: "Card content placeholder text goes here", isSelected: this.selected, onCheckboxChange: () => (this.selected = !this.selected) }), h("dga-card", { key: '7ec0551f901ea01e66f0ac1409bfe84abfe61005', cardTitle: "Card Title", sx: {
                '& > .card': {
                    backgroundColor: 'red',
                    height: '400px',
                },
            } }), h("dga-card", { key: 'b82d82591113cc0e485a937ad90ab9e40af3bc76', cardTitle: "No Shadow", effect: "no-shadow" }), h("dga-card", { key: 'ffd3595ddb5bb87925064ee40cc051df15133ab0', cardTitle: "Stroke", effect: "stroke" }), h("dga-card", { key: 'c2358fa77a47a3385de027b607858c911ca65641', cardTitle: "With Shadow", effect: "with-shadow" })), h("div", { key: '2fba0a6c97d268de7a8e20543c9fde5606e6878a', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-card-usage", {
        "variant": [32],
        "selected": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-card-usage", "dga-button", "dga-button-v2", "dga-card", "dga-checkbox", "dga-featured-icon", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-card-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaCardUsage$1);
            }
            break;
        case "dga-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-featured-icon":
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

const DgaCardUsage = DgaCardUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaCardUsage, defineCustomElement };
