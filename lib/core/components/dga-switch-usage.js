import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-DO74BZcc.js';

const DgaSwitchUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaSwitchUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: '6074d83fe0199f37e131ca59b35af00a706e2571', style: { padding: '50px', display: 'flex', gap: '50px' } }, h("div", { key: '36be7a3fdffcda6075e635d619ad978062795e1e' }, h("h1", { key: '8cd3df84dff34e21680e704f97de9fdb42130e47' }, "Switch Example"), h("dga-switch", { key: 'f41bf31a44253516e07cadfa6cea40051fe6e706',
            // label="Switch Label"
            checked: true }))));
    }
}, [0, "dga-switch-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-switch-usage", "dga-icon", "dga-switch"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-switch-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSwitchUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaSwitchUsage = DgaSwitchUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaSwitchUsage, defineCustomElement };
