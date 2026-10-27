import { p as proxyCustomElement, H, h, d as Host } from './p-CqmCtiRl.js';

const DgaSecondNavHeader = /*@__PURE__*/ proxyCustomElement(class DgaSecondNavHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'primary';
    }
    componentWillLoad() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && this.hideContent === true) {
                el.style.display = 'none';
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && this.hideActions === true) {
                el.style.display = 'none';
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'content');
            }
            if (el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'actions');
            }
        });
    }
    render() {
        return (h(Host, { key: 'e44b53e87e61c702a17f3da55ccde2d20a07b61b' }, h("div", { key: '6b1f69bfd45ce38abe16e991925743d9059151ba', class: `wrapper ${this.variant} `, "aria-label": 'a secondary navigation navbar' }, h("div", { key: 'cb5cba04d09c6a41d6fc347d80f3f8faf87dce54', class: `container ${this.hideDivider ? '' : 'border'}` }, h("div", { key: 'c66b315d6f5c863a5d7ec44c15ba26666b368082', class: `content` }, h("slot", { key: '5039905d7391d685536b1b4564273da0f2142480', name: "content" })), h("div", { key: '9a6394bdfc9ca1865aaacad5722164a956c94e4a', class: `actions` }, h("slot", { key: 'd561e06f2aa8bc0a3d4559d3a01caf3b0f9edeb9', name: "actions" }))))));
    }
    get el() { return this; }
}, [6, "dga-second-nav-header", {
        "variant": [1],
        "hideDivider": [1028, "hide-divider"],
        "hideActions": [4, "hide-actions"],
        "hideContent": [4, "hide-content"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-second-nav-header"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-second-nav-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaSecondNavHeader);
            }
            break;
    } });
}

export { DgaSecondNavHeader as D, defineCustomElement as d };
