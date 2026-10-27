import { p as proxyCustomElement, H, h, F as Fragment } from './p-CqmCtiRl.js';

const DgaMenu$1 = /*@__PURE__*/ proxyCustomElement(class DgaMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.anchorEl = null;
        this.open = false;
        this.onClose = () => { };
        // Method to detect outside click
        this.handleClickOutside = (event) => {
            if (this.anchorEl && !this.anchorEl.contains(event.target)) {
                this.onClose();
            }
        };
    }
    componentDidLoad() {
        // Add event listener to handle clicks outside the menu
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        // Cleanup event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    }
    getMenuStyle() {
        var _a;
        const rect = (_a = this.anchorEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            position: 'absolute',
            top: `${(rect === null || rect === void 0 ? void 0 : rect.bottom) + window.scrollY}px`,
            left: `${(rect === null || rect === void 0 ? void 0 : rect.left) + window.scrollX}px`,
            zIndex: '1000',
        };
    }
    render() {
        return (h(Fragment, { key: '7be8e401d4a5ff14f7afbf0147781b69de2dce42' }, this.open && this.anchorEl && (h("ul", { key: '90d0d2f33b6a5ac6dc3c5470d697cdda5d6c4aff', class: "menu", style: this.getMenuStyle() }, h("slot", { key: '6b0090edbff7518991b2f2af3e87d8715301713a' })))));
    }
}, [4, "dga-menu", {
        "anchorEl": [16, "anchor-el"],
        "open": [4],
        "onClose": [16, "on-close"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaMenu$1);
            }
            break;
    } });
}

const DgaMenu = DgaMenu$1;
const defineCustomElement = defineCustomElement$1;

export { DgaMenu, defineCustomElement };
