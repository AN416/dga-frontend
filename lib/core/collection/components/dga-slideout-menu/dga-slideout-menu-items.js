import { h, Host } from "@stencil/core";
export class DgaSlideoutMenuItems {
    render() {
        return (h(Host, { key: 'a6457afead8b2eb627a0b3fd5d0f8b12f175d6df' }, h("slot", { key: '1a50a2c7ab95c0ccd4e124279e1c2358d494e8be' })));
    }
    static get is() { return "dga-slideout-menu-items"; }
    static get encapsulation() { return "shadow"; }
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
            "title": {
                "type": "string",
                "attribute": "title",
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
            "description": {
                "type": "string",
                "attribute": "description",
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
            }
        };
    }
}
