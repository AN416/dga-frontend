import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { g as guid, d as defineCustomElement$5 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$4 } from './p-YnYHk7bt.js';
import { d as defineCustomElement$3 } from './p-BtZloQh1.js';
import { d as defineCustomElement$2 } from './p-Q-XrGzcM.js';
import { d as defineCustomElement$1 } from './p-D1BB-kah.js';

const SidePanelMenu = /*@__PURE__*/ proxyCustomElement(class SidePanelMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.routes = [];
    }
    render() {
        return (h("ul", { key: 'a696170de6b4b01644a881dd298d16d3b4df90af', class: "sidepanel__menu-list" }, this.routes.map((route, index) => (h("li", { key: guid() }, h("tab-component", { route: route }), index < this.routes.length - 1 && (h("div", { class: "sidepanel__menu-tab-divider" })))))));
    }
}, [0, "side-panel-menu", {
        "routes": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["side-panel-menu", "dga-icon", "dga-tag", "submenu-component", "tab-component", "tab-link"];
    components.forEach(tagName => { switch (tagName) {
        case "side-panel-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, SidePanelMenu);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "submenu-component":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "tab-component":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "tab-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { SidePanelMenu as S, defineCustomElement as d };
