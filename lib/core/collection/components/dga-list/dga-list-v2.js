import { h } from "@stencil/core";
export class DgaListV2 {
    constructor() {
        this.type = 'unordered';
        this.color = 'primary';
        this.title = "";
        this.items = [];
    }
    //   private getListClass() {
    //     return {
    //       'list-item': true,
    //       [`list-item--level-${this.level}`]: true,
    //       [`list-item--${this.type}`]: true
    //     };
    //   }
    //   private renderMarker() {
    //     if (this.type === 'ordered') {
    //       return (
    //         <span class="list-item__marker">
    //           {this.level === 'one' ? this.itemNumber : this.itemLetter}
    //         </span>
    //       );
    //     }
    //     return null;
    //   }
    render() {
        const Tag = this.type === 'ordered' ? 'ol' : 'ul';
        return (h(Tag, { key: '6e37445a2f374fdbddafefd0ee3de85744c1a0d5', class: `list list--${this.type} list--${this.color}` }, h("slot", { key: 'e0bee14714bee7ab0f6c20ba7f0289b18d2065d5' })));
    }
    static get is() { return "dga-list-v2"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-list-v2.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-list-v2.css"]
        };
    }
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
                    "original": "ListItem[]",
                    "resolved": "ListItem[]",
                    "references": {
                        "ListItem": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-list/dga-list-v2.tsx",
                            "id": "src/components/dga-list/dga-list-v2.tsx::ListItem"
                        }
                    }
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
