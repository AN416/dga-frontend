import { h } from "@stencil/core";
export class DgaSlideoutMenu {
    constructor() {
        this.backgroundColor = 'gray';
        this.anchor = 'right';
        this.open = false;
        this.scrollbar = true;
    }
    // componentDidRender() {
    //     if (this.el.children.length > 0) {
    //         this.el.children
    //         .namedItem('DgaSlideoutMenuHeader')
    //         .setAttribute('slot', 'sideout-menu-header');
    //       this.el.children
    //         .namedItem('DgaSideoutMenuItems')
    //         .setAttribute('slot', 'sideout-menu-items');
    //       this.el.children
    //         .namedItem('DgaSideoutMenuActions')
    //         .setAttribute('slot', 'sideout-menu-actions');
    //     }
    //   }
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            //   if(el.tagName === 'DGA-SECOND-NAV-HEADER-CONTENT' && this.hideContent === true) {
            //     el.style.display = 'none';
            //   }
            //   if(el.tagName === 'DGA-SECOND-NAV-HEADER-ACTIONS' && this.hideActions === true) {
            //     el.style.display = 'none';
            //   }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-HEADER' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-header');
                // Pass onClose to header component
                el.setAttribute('on-close', 'true');
                el.addEventListener('closeClick', () => {
                    if (this.onClose) {
                        this.onClose();
                    }
                });
            }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-ITEMS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-items');
            }
            if (el.tagName === 'DGA-SLIDEOUT-MENU-ACTIONS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'slideout-menu-actions');
            }
        });
    }
    disconnectedCallback() {
        // Clean up listeners
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-SLIDEOUT-MENU-HEADER') {
                el.removeEventListener('closeClick', this.onClose);
            }
        });
    }
    render() {
        return (h("div", { key: '9abef3a50792757fe502b78dca2d5d5a240ce20b', class: `dga-slideout-menu dga-slideout-menu--${this.anchor} dga-slideout-menu--${this.backgroundColor} ${this.open ? "active" : ""}` }, h("slot", { key: 'f86ba376b9544c8ac128742e5a0240ab424a2307', name: "slideout-menu-header" }), h("div", { key: 'a6aec17b4785db7e6c76171b7956d183dd53a2b7', class: "dga-slideout-menu__body" }, h("div", { key: '3b25d520da3cd61e857b0c999db91e5951030f0a', class: {
                'dga-slideout-menu__items': true,
                'dga-slideout-menu__items--hide-scrollbar': !this.scrollbar,
            } }, h("slot", { key: 'ff57dd16812aefe17ce4b0cee7fb4f81d455f352', name: "slideout-menu-items" })), h("dga-divider", { key: '473787f6c432ce41bd8a8682b63b1d927c45f6fd' }), h("slot", { key: '08a18aababb1d496e8eb8c883a2d2e7913b93b80', name: "slideout-menu-actions" }))));
    }
    static get is() { return "dga-slideout-menu"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu.css"]
        };
    }
    static get properties() {
        return {
            "backgroundColor": {
                "type": "string",
                "attribute": "background-color",
                "mutable": false,
                "complexType": {
                    "original": "'gray' | 'white'",
                    "resolved": "\"gray\" | \"white\"",
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
                "defaultValue": "'gray'"
            },
            "anchor": {
                "type": "string",
                "attribute": "anchor",
                "mutable": false,
                "complexType": {
                    "original": "'left'|'right'",
                    "resolved": "\"left\" | \"right\"",
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
                "defaultValue": "'right'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "scrollbar": {
                "type": "boolean",
                "attribute": "scrollbar",
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
                "defaultValue": "true"
            },
            "onClose": {
                "type": "unknown",
                "attribute": "on-close",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
