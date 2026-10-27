import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-DNAR5ou0.js';

const DgaLinkUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaLinkUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'd43875881d6013254bcbb764f567d333b7db3a6d' }, h("h1", { key: 'a80b635c9ed2f146a11ab406d57f32587999b26c' }, "Link Example"), h("div", { key: 'b17248d9a2f573c045646474db4390d2ad5d59d7', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'faace42dd8d20ba286cc1a35b552d1d336692a1a', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-link", { key: '24ee5e328f4078049340392e28be86862e1d3415', label: "Link", variant: "neutral" }), h("dga-link", { key: 'ff74833127759c9f556e51f041f5320eda14447f', label: "Link", variant: "on-color" }), h("dga-link", { key: 'd91fcd2c044ebc0d367e57d2a91cff40823245b2', label: "Link", variant: "primary" })), h("div", { key: 'f3d9fbb0880cc59384d53f739bca55ce59d8c0af', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-link-usage", {
        "variant": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-link-usage", "dga-link"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-link-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaLinkUsage$1);
            }
            break;
        case "dga-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaLinkUsage = DgaLinkUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaLinkUsage, defineCustomElement };
