import { p as proxyCustomElement, H, h, F as Fragment } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$3 } from './p-YnYHk7bt.js';
import { d as defineCustomElement$2 } from './p-BtZloQh1.js';
import { d as defineCustomElement$1 } from './p-D1BB-kah.js';

const TabComponent = /*@__PURE__*/ proxyCustomElement(class TabComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.isExpanded = false;
    }
    handleExpanded(expanded) {
        this.isExpanded = expanded;
        if (expanded) {
            this.submenuElement.style.maxHeight = 'fit-content';
        }
        else {
            this.submenuElement.style.maxHeight = '';
        }
    }
    render() {
        return (h(Fragment, { key: 'b9eb28eb0e5582ad145c0126b01b76feb8c6b9e5' }, h("tab-link", { key: '105520edf7df8c57721784333a64aa06f2d4fe84', text: this.route.name, type: this.route.children && this.route.children.length > 0 ? 'parent' : 'child', icon: this.route.icon, link: this.route.path, onExpand: this.handleExpanded.bind(this), disabled: this.route.disabled }), this.route.children && this.route.children.length > 0 && (h("ul", { key: '3a742a8119e7ad5d0b50ab532025d10665508aa8', class: "sidepanel__submenu-list", ref: el => (this.submenuElement = el) }, this.route.children.map((childRoute, index) => (h("submenu-component", { key: index, route: this.route, childRoute: childRoute, onChildExpanded: expanded => {
                if (expanded) {
                    this.submenuElement.style.maxHeight = 'fit-content';
                }
            } })))))));
    }
}, [0, "tab-component", {
        "route": [16],
        "isExpanded": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tab-component", "dga-icon", "dga-tag", "submenu-component", "tab-link"];
    components.forEach(tagName => { switch (tagName) {
        case "tab-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TabComponent);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "submenu-component":
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

export { TabComponent as T, defineCustomElement as d };
