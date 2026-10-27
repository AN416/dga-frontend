import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-97R4z8de.js';

const DgaCollapseUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaCollapseUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
        this.open = false;
    }
    render() {
        return (h("div", { key: '2ee3612aaca78d39f0509089455b256ed86616da' }, h("h1", { key: 'e632757f4ede5bd38c71491618943735941a95be' }, "Collapse Example"), h("div", { key: '5ac52a77124fa68aa5e7f59b400f40d842650600', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'b1d8a410b9726247c0dbd6670dc3fb315398e5f5', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: 'a934695dff9b9f689b539dc9cdda8e7c2e40dc67', style: { display: "flex", justifyContent: "center" } }, h("button", { key: '1d854b80ec52f66bdeefd3eabd5cc18732914ffa', onClick: () => this.open = true }, "open"), h("button", { key: 'ca6b919dd74e1e5733b06d2a0c31387dec6a5b1e', onClick: () => this.open = false }, "close"))), h("dga-collapse", { key: '9b055bf2339e697e5fb8fad6386989502bfcadee', open: this.open, "transition-duration": "0.1s" }, h("div", { key: 'f24c79aff41ba4c44e52124b297a2451db464b48' }, "Your content here")), h("div", { key: '0807156df64bb7a775e16adc549d719d249adb67', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-collapse-usage", {
        "variant": [32],
        "open": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-collapse-usage", "dga-collapse"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-collapse-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaCollapseUsage$1);
            }
            break;
        case "dga-collapse":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaCollapseUsage = DgaCollapseUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaCollapseUsage, defineCustomElement };
