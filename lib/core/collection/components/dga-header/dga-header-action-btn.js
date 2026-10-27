import { h } from "@stencil/core";
export class DgaHeaderActionBtn {
    constructor() {
        this.active = false;
        this.extraClasses = '';
        this.subMenuBackground = 'white';
        this.subMenuFullWidth = true;
        this.openSubMenu = false;
    }
    handleClick(event) {
        event.preventDefault();
        if (this.onClick) {
            this.onClick();
        }
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
        return (h("li", { key: '4362ccf0124e2580aece0bdd51822e3faa362a1c', onMouseEnter: () => {
                this.openSubMenu = true;
                this.active = true;
            }, onMouseLeave: () => {
                this.openSubMenu = false;
                this.active = false;
            } }, h("a", { key: '335ae640998fe57bfc175f1812d4c5e1df559f64', href: "#", class: `header-menu__item ${this.active ? 'header-menu__item--active' : ''} ${this.extraClasses}`, onClick: this.handleClick.bind(this) }, h("span", { key: '5c88933079c15d3f2556b20c5e1fc762cae5dc3f', class: "header-menu__item-arrow" }, h("dga-icon", { key: '483281c425cf9457863fa23e7a91fb04088d5fba', icon: this.icon })), h("span", { key: '7ded8ffd291f43558cf2eba20947f39246de1878', class: "header-menu__item-label" }, this.label)), this.openSubMenu && h("slot", { key: '4ddbe5e9e668fda464d5688c4e645482134b5d1a', name: "dga-nav-header-sub-menu" })));
    }
    static get is() { return "dga-header-action-btn"; }
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
                "optional": true,
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
            "extraClasses": {
                "type": "string",
                "attribute": "extra-classes",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "onClick": {
                "type": "unknown",
                "attribute": "on-click",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
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
    static get elementRef() { return "el"; }
}
