import { Host, h } from "@stencil/core";
export class DgaSecondNavHeader {
    constructor() {
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
    static get is() { return "dga-second-nav-header"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'gray'",
                    "resolved": "\"gray\" | \"primary\"",
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
                "defaultValue": "'primary'"
            },
            "hideDivider": {
                "type": "boolean",
                "attribute": "hide-divider",
                "mutable": true,
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
                "reflect": false
            },
            "hideActions": {
                "type": "boolean",
                "attribute": "hide-actions",
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
                "reflect": false
            },
            "hideContent": {
                "type": "boolean",
                "attribute": "hide-content",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
