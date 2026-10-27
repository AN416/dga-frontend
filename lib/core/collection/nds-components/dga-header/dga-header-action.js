import { Host } from "@stencil/core";
import { h } from "@stencil/core";
export class DgaHeaderAction {
    constructor() {
        this.iconPosition = 'inline';
        this.iconProps = {
            type: 'rounded',
            variant: 'stroke',
        };
        this.active = false;
        this.extraClasses = '';
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
            if (el.tagName === 'DGA-HEADER-SUB-MENU' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'dga-header-sub-menu');
            }
        });
    }
    render() {
        return (h(Host, { key: '5c41af56c5104da63eb7b20e370ac0519df6f776' }, h("li", { key: '946823eb649a1fddcdc6f3d3fc2b6c6dd5e14955', onMouseEnter: () => {
                this.openSubMenu = true;
                //   this.active = true;
            }, onMouseLeave: () => {
                this.openSubMenu = false;
                //   this.active = false;
            } }, h("a", { key: '83a17b2e7ca9acf0ceebafc0ed3cab8ed2277f62', href: "#", class: `header-menu__item ${this.active ? 'header-menu__item--active' : ''} 
            
            ${this.iconPosition === 'inline' ? 'header-menu__item--inline' : 'header-menu__item--top'}
            
            ${this.extraClasses}`, onClick: this.handleClick.bind(this) }, h("span", { key: '4c6cc232d765f7628bc9e076fc79b83c703d7e29', class: "header-menu__item-arrow" }, h("dga-icon-v2", Object.assign({ key: 'b57341573a2ec2edd09f4f0e6f1ae532904f627f', name: this.icon }, this.iconProps))), h("span", { key: 'c749791e2d18e81e95d4f007196bae3f18174591', class: "header-menu__item-label" }, this.label)), this.openSubMenu && h("slot", { key: 'aa88516909114220d3ec08b621a241e61d12ee42', name: "dga-header-sub-menu" }))));
    }
    static get is() { return "dga-header-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-action.css"]
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
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "'inline' | 'top'",
                    "resolved": "\"inline\" | \"top\"",
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
                "defaultValue": "'inline'"
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
