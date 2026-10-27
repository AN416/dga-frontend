import { h } from "@stencil/core";
export class DgaList {
    constructor() {
        this.type = 'unordered';
        this.color = 'primary';
        //   @Prop() id: string = guid();
        this.title = "";
        this.items = [];
        this.renderIcon = (type) => {
            if (type === "with-icon") {
                return h("span", { class: "list-icon" }, "\u2713"); // Using checkmark icon for "with-icon" type
            }
            return null;
        };
    }
    render() {
        const Tag = this.type === 'ordered' ? 'ol' : 'ul';
        return (h("div", { key: '8c77ba0b7ad984f146c366cc9651721e13361264', class: `list list--${this.type} list--${this.color}` }, this.title && h("h3", { key: '95b6402dd3f8136cae694cf8693c899f54ceebe1', class: "list-title" }, this.title), h(Tag, { key: '4bd11d52a4fb8919da7728e531c8d7c0dd67c0d5' }, this.items.map((item, index) => (h("li", { key: index, class: "list-item" }, this.type === "with-icon" && this.renderIcon(this.type), item))))));
    }
    static get is() { return "dga-list"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'ordered' | 'unordered' | 'with-icon'",
                    "resolved": "\"ordered\" | \"unordered\" | \"with-icon\"",
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
                "defaultValue": "'unordered'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"primary\"",
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
                "reflect": false,
                "defaultValue": "\"\""
            },
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "[]"
            }
        };
    }
}
