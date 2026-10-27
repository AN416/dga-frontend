export { a as dga_header_action_btn, f as dga_nav_header, D as dga_nav_header_actions, e as dga_nav_header_link, c as dga_nav_header_logos, b as dga_nav_header_main, d as dga_nav_header_menu } from './dga-header-action-btn-DTq2xlch.js';
import { r as registerInstance, h, H as Host, a as getElement } from './index-BLSc18AE.js';

const DgaSecondNavHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

const DgaSecondNavHeaderActions = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4f13bea9f9c1b8deb1cb7b9bdb908c92641dd193' }, h("div", { key: '32e25b10b8779acdbc0e60c32b5006a9dc7a0282', class: `items-container` }, h("slot", { key: 'bd989914f556098298fbca6c80f60749bf91819a' }))));
    }
};

const DgaSecondNavHeaderContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '8c6a8cbca0a45bb98b169619b6b088a0fcf87155' }, h("div", { key: '028f1f65e4a7a0e1fefcc7ee631d59138e281aa6', class: `items-container` }, h("slot", { key: 'd680b0dcdaf2000234bf20254ea671397eb37c14' }))));
    }
};

const DgaSecondNavHeaderItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    connectedCallback() {
        this.el.childNodes.forEach((item) => {
            const el = item;
            if (el.tagName === 'DGA-ICON'.toLocaleUpperCase() && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'icon');
            }
        });
    }
    render() {
        return (h(Host, { key: 'b02dc9f1e6650ac6bd6cf85d44b105283d9d3171' }, h("slot", { key: 'af18cafbd1e955f713d22a83299889e589392e63', name: 'icon' }), h("slot", { key: '7022e55daef2703b0a56897a3e9ac4f3dc500d0b', name: 'label' }, this.label)));
    }
    get el() { return getElement(this); }
};

export { DgaSecondNavHeader as dga_second_nav_header, DgaSecondNavHeaderActions as dga_second_nav_header_actions, DgaSecondNavHeaderContent as dga_second_nav_header_content, DgaSecondNavHeaderItem as dga_second_nav_header_item };
