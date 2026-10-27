import { h } from "@stencil/core";
export class DgaNavHeaderLink {
    constructor() {
        this.iconProps = {
            type: 'rounded',
            variant: 'stroke',
        };
        this.active = false;
        this.subMenuBackground = 'white';
        this.subMenuFullWidth = true;
        this.openSubMenu = false;
        this.handleClick = (event) => {
            event.preventDefault();
            this.linkClicked.emit();
        };
    }
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-NAV-HEADER-SUB-MENU' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'dga-nav-header-sub-menu');
            }
        });
    }
    render() {
        return (h("li", { key: '219d3ca3b3ffc5e4804dae45ed7e0270d93fff9c', onMouseEnter: () => {
                this.openSubMenu = true;
            }, onMouseLeave: () => {
                this.openSubMenu = false;
            }, tabindex: "0" }, h("a", { key: 'c5b2c0b51e99534bde84b3e017e603003e6a089c', href: "#", class: `header-menu__item ${this.active ? 'header-menu__item--active' : ''}`, onClick: this.handleClick }, h("span", { key: 'cd4fd3708f149c61df9330eb9e959b324646b088', class: "header-menu__item-label" }, this.label), h("span", { key: '2e01a0a217f61aab95b96d2b2ee9682a68eba3c6', class: "header-menu__item-arrow" }, h("dga-icon", Object.assign({ key: 'fec92845aeff91d5c86e1169357445f648056880', name: this.icon }, this.iconProps)))), this.openSubMenu && h("slot", { key: '894778f630900db82bc2317881279068de9cf059', name: "dga-nav-header-sub-menu" })));
    }
    static get is() { return "dga-nav-header-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false
            },
            "iconProps": {
                "type": "unknown",
                "attribute": "icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n    size?: number;\n    color?: string;\n    variant?: 'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk';\n    type?: 'rounded' | 'sharp' | 'standard';\n  }",
                    "resolved": "{ size?: number; color?: string; variant?: \"stroke\" | \"solid\" | \"duotone\" | \"twotone\" | \"bulk\"; type?: \"rounded\" | \"sharp\" | \"standard\"; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    type: 'rounded',\n    variant: 'stroke',\n  }"
            },
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "subMenuBackground": {
                "type": "string",
                "attribute": "sub-menu-background",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'white'",
                    "resolved": "\"brand\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'white'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "openSubMenu": {}
        };
    }
    static get events() {
        return [{
                "method": "linkClicked",
                "name": "linkClicked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
