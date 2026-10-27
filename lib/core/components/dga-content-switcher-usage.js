import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-BgkHJMRe.js';
import { d as defineCustomElement$3 } from './p-D3r5Kurk.js';
import { d as defineCustomElement$2 } from './p-B3K8uOfe.js';

const DgaContentSwitcherUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaContentSwitcherUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.value = 0;
    }
    render() {
        return (h("div", { key: '4cb85b34e2b8d1318903616deafd81cd5d2c3444' }, h("h1", { key: '5245eb0bb3f05c5c3e1df24a10a93a21fdd04991' }, "Content Switcher Example"), h("dga-content-switcher", { key: '55b2b5169c8b566621b518e68f77f5953eedf271', size: 'lg' }, h("dga-content-switcher-item", { key: '11639573da16079061d39b0ad2acf1a4687352bf', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: '2a5c18c121d5a4ca250f97180e724c429a57be6e', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: 'c411296cb314406c5280b1b9b5bdb12ab050c6e4', label: "Option 3", content: "This is Option 3 content." })), h("dga-content-switcher", { key: 'de3898ff0e648116ecf389fd1d4408515ae3e776', size: 'md' }, h("dga-content-switcher-item", { key: '5cc1d305b663abd84bd31dfc41855351592693ab', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: '94633183eef22393a11b49bc14e69bab68e9b102', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: '494ef28c65e3a86ed0774acbbf155732328518f4', label: "Option 3", content: "This is Option 3 content." })), h("dga-content-switcher", { key: 'eed218e7fcb5199e66782827e5011fcd21a11811', size: 'sm', onColor: true }, h("dga-content-switcher-item", { key: 'c4c4242b28793da008d0d15405bff066eab21849', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: 'c6725103058de0b36983dc9aa554e9dcbf9e181e', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: '264a371a856015f795d767690978afb519ede779', label: "Option 3", content: "This is Option 3 content." })), h("h1", { key: '5ca35446456670c023f6bc02420864c6fdb65522' }, this.value), h("dga-content-switcher", { key: '8e99765f72224b41e064dbc6a5ed6d72b27148ee', size: 'lg', value: this.value, onChange: (val) => this.value = val }), h("dga-content-switcher-panel", { key: 'd927e44d96941524863925d5b39a9feb3357fc36', value: this.value, index: 0 }, h("div", { key: '095600338a79faff0533d15a15ae5879861dada2' }, "Content 111111111111111")), h("dga-content-switcher-panel", { key: '2a80d8fb2b362dd2487c5f6bfe27fb007bf695be', value: this.value, index: 1 }, h("div", { key: 'c4a317f2db0b2779a17d14906249df0010f96dd2' }, "Content 2")), h("dga-content-switcher-panel", { key: '78680868aa3263d9e50a90e6304467b330c7dfab', value: this.value, index: 2 }, h("div", { key: '9e93b77b7c7e625cbc1e2790f23d200326294b7c' }, "Content 3"))));
    }
}, [0, "dga-content-switcher-usage", {
        "value": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-content-switcher-usage", "dga-content-switcher", "dga-content-switcher-item", "dga-content-switcher-panel"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-content-switcher-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaContentSwitcherUsage$1);
            }
            break;
        case "dga-content-switcher":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-content-switcher-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-content-switcher-panel":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaContentSwitcherUsage = DgaContentSwitcherUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaContentSwitcherUsage, defineCustomElement };
