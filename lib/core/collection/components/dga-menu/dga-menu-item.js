import { h } from "@stencil/core";
export class DgaMenuItem {
    constructor() {
        this.disabled = false;
        this.hasTrailElement = false;
        this.hasLeadIcon = false;
        /**
         * If the menu item is selected, it will be highlighted
         **/
        this.selected = false;
        this.pressed = false;
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
    render() {
        return (h("li", { key: 'b2e9597772d914e7381282bb10ee09b0b0d20a7b', class: `menu-item ${this.disabled ? 'disabled' : ''} ${this.pressed ? "pressed" : ""} ${this.selected ? 'selected' : ''}`, onMouseDown: () => this.pressed = true, onMouseUp: () => this.pressed = false, tabindex: "0", onClick: this.handleClick }, this.hasLeadIcon && h("span", { key: '0abb4f86e43ef4844a48712c61047916b71e3fd4', class: "menu-item__icon" }, h("slot", { key: 'ba0ef5db2821e35dc1f739b1be66ac8ab9165b2b', name: "lead-icon" })), h("span", { key: 'cb2341463fa358277569331ab708328687cd5a13', class: "menu-item__label" }, this.label), this.hasTrailElement && h("div", { key: '8e5dc079a38b4cc53da416bdc68e56fa8a8e7657', class: "menu-item__trail-element" }, h("slot", { key: '453a934fe5e163aad7a119b25824c1ff592dc0f1', name: "trail-element" }))));
    }
    static get is() { return "dga-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu-item.css"]
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            "hasTrailElement": {
                "type": "boolean",
                "attribute": "has-trail-element",
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
            "hasLeadIcon": {
                "type": "boolean",
                "attribute": "has-lead-icon",
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
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": "If the menu item is selected, it will be highlighted"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "pressed": {}
        };
    }
    static get events() {
        return [{
                "method": "onClick",
                "name": "onClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
