import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$3 } from './p-DFQ9kKUg.js';
import { d as defineCustomElement$2 } from './p-Bke0Wg5h.js';

const DgaSearchBoxUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaSearchBoxUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.value = 'test';
    }
    render() {
        return (h("div", { key: 'd8f976b4ceed23cad8f97d897fd18b54fe32ee4e' }, h("h1", { key: '9968d91b50ed57bd4e08d22bd6686a3becd9fd3c' }, "Search Box Example"), h("div", { key: '8218a4366748469c63860977d0bb367870caa31d', style: { padding: '50px' } }, h("div", { key: '63d4b748bb4fe70cc41b41fba9ad2e5600c32c21', style: { display: "flex", flexDirection: "column", gap: "16px" } }, h("dga-search-box", { key: '95d80d8bf9bc687d21fb292b568f414127a0ca46', variant: 'default', value: this.value, placeholder: 'test placeholder', onChange: (e) => {
                const target = e.target;
                console.log("search changed");
                this.value = target.value;
            }, onInput: (e) => {
                console.log("search changed", e.target.value);
                this.value = e.target.value;
            } })))));
    }
}, [0, "dga-search-box-usage", {
        "value": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-search-box-usage", "dga-icon", "dga-search-box", "dga-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-search-box-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSearchBoxUsage$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-search-box":
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

const DgaSearchBoxUsage = DgaSearchBoxUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaSearchBoxUsage, defineCustomElement };
