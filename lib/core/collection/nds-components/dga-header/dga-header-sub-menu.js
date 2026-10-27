import { h } from "@stencil/core";
export class DgaHeaderSubMenu {
    constructor() {
        this.active = false;
        this.subMenuFullWidth = false;
        this.background = 'white';
    }
    onActiveChange() {
        if (this.active && this.submenu) {
            this.submenu.style.display = 'block';
            // this.submenu.style.maxHeight = `${this.submenu.scrollHeight}px`;
        }
        else if (this.submenu) {
            this.submenu.style.maxHeight = '';
        }
    }
    componentDidLoad() {
        this.submenu = this.el.shadowRoot.querySelector('.header__sub-menu');
        this.onActiveChange(); // Ensure styles are set on initial load
    }
    render() {
        const fullWidthClass = this.subMenuFullWidth ? 'header__sub-menu--full' : '';
        return (h("div", { key: 'ec89a8d94349d47711efbecf4290954a0f32fc5a', class: `header__sub-menu header__sub-menu--bg-${this.background} ${fullWidthClass}`, ref: el => (this.submenu = el) }, h("div", { key: 'a4c964e6f5e8996e6a77b81fb5ad295b818b0730', class: "sub-menu__container" }, h("slot", { key: 'e930c847711fb7dd74da2fff61133466ba2cb0ba' }))));
    }
    static get is() { return "dga-header-sub-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu.css"]
        };
    }
    static get properties() {
        return {
            "active": {
                "type": "boolean",
                "attribute": "active",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "subMenuFullWidth": {
                "type": "boolean",
                "attribute": "sub-menu-full-width",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'white'",
                    "resolved": "\"brand\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'white'"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "onActiveChange"
            }];
    }
}
