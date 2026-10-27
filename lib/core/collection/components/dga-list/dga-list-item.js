import { h } from "@stencil/core";
export class DgaListItem {
    componentWillLoad() {
        const parentElement = this.el.closest('[type]');
        if (parentElement) {
            this.inheritedType = parentElement.getAttribute('type');
        }
    }
    // componentWillLoad() {
    //   if (this.type === 'with-icon' && !this.icon) {
    //     throw new Error('Icon prop is required when type is "with-icon"');
    //   }
    // }
    getListClass() {
        return {
            'list-item': true,
            [`list-item--level-${this.level}`]: true,
            [`list-item--${this.type}`]: true
        };
    }
    renderMarker() {
        if (this.type === 'ordered') {
            return (h("span", { class: "list-item__marker" }, this.level === 'one' ? this.itemNumber : this.itemLetter));
        }
        return null;
    }
    render() {
        return (h("li", { key: '941ce56a04fa1de8da717ccb47d92128cadccd1b', class: this.getListClass() }, this.type === 'with-icon' && (h("span", { key: 'f25c84b7a389caf05ba712d05b4c2f697dfe509e', class: "list-item__icon" }, h("dga-icon", { key: 'e538c18789748d0546a7a4c32907b3bafe203612', icon: this.icon, size: 16 }))), this.renderMarker(), h("span", { key: '566309b1437a543f906a92a7fbd12ab2b2c747ee', class: "list-item__text" }, this.itemText)));
    }
    static get is() { return "dga-list-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-list-item.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ListItemProps['type']",
                    "resolved": "\"ordered\" | \"unordered\" | \"with-icon\"",
                    "references": {
                        "ListItemProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-list/dga-list-item.tsx",
                            "id": "src/components/dga-list/dga-list-item.tsx::ListItemProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "level": {
                "type": "string",
                "attribute": "level",
                "mutable": false,
                "complexType": {
                    "original": "ListItemProps['level']",
                    "resolved": "\"one\" | \"two\"",
                    "references": {
                        "ListItemProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-list/dga-list-item.tsx",
                            "id": "src/components/dga-list/dga-list-item.tsx::ListItemProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "itemText": {
                "type": "string",
                "attribute": "item-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "itemNumber": {
                "type": "string",
                "attribute": "item-number",
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
            "itemLetter": {
                "type": "string",
                "attribute": "item-letter",
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
            }
        };
    }
    static get states() {
        return {
            "inheritedType": {}
        };
    }
    static get elementRef() { return "el"; }
}
