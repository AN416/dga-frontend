import { h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaQuote {
    constructor() {
        this.size = 'sm';
        this.whiteBackground = false;
        this.showQuoteTitle = true;
        this.quoteTitle = '';
        this.showQuoteDescription = true;
        this.quoteDescription = '';
        this.showAuthorDetails = true;
        this.authorName = '';
        this.authorDescription = '';
        this.showAvatar = false;
        this.avatarSrc = '';
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h("div", { key: 'f3c31c6492d116f54ba020464e48c63af093ed06', class: { 'dga-quote': true, 'dga-quote--white-bg': this.whiteBackground } }, h("div", { key: '21cf9b7137d5a9d6e46b5a7f3e8c32a1350177f5', class: "dga-quote__body" }, h("dga-flex", { key: '4665daddf47cce975460ed2c295f8784a15e2489', spacing: 9 }, h("span", { key: '35dec680f9257d81858306a390ccdd715e10af52', class: "quote-icon" }, "\u201D"), h("dga-flex", { key: '72599788b5fa8fb88d8cf78c81981845265ddf0d', direction: "column", spacing: 16 }, this.showQuoteTitle && h("h2", { key: '1f35bef18c3c189f9cfc3fb84096f4ed0836aa5a', class: "dga-quote__body-title" }, this.quoteTitle), this.showQuoteDescription && h("p", { key: '7e167f136ed517ed34ddff7ab5eed631e67698a4', class: "dga-quote__body-desc" }, this.quoteDescription)))), this.showAuthorDetails && (h("div", { key: '72971563ab9783754e5b8249704ab4acd63d3b89', class: "dga-quote__auther-details" }, h("dga-flex", { key: 'ed3b04709e72a08e57592483a20c07a46e3899e1', direction: "row", spacing: 16, align: "center" }, this.showAvatar && h("dga-avatar", { key: 'e358f93c6a9d53fae8c072a4871bd54a0147df3a', size: 80, type: "image", border: false, imgUrl: this.avatarSrc }), h("dga-flex", { key: '8b0ec810801a63594bf66ccc4ade33596c42082a', direction: "column", spacing: 8 }, h("h3", { key: 'b95aca8376c571e7b299d87140566222779c45b4', class: "auther-title" }, this.authorName), h("p", { key: '90765edb1eb1bda64730385755e10ebce8de4e7a', class: "auther-desc" }, this.authorDescription))), h("span", { key: '734cd68680d6a91d42aad9544a72944e080366d0', class: "quote-icon" }, "\u201C")))));
    }
    static get is() { return "dga-quote"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-quote.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-quote.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'lg'",
                    "resolved": "\"lg\" | \"sm\"",
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
                "defaultValue": "'sm'"
            },
            "whiteBackground": {
                "type": "boolean",
                "attribute": "white-background",
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
            "showQuoteTitle": {
                "type": "boolean",
                "attribute": "show-quote-title",
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
            "quoteTitle": {
                "type": "string",
                "attribute": "quote-title",
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
            "showQuoteDescription": {
                "type": "boolean",
                "attribute": "show-quote-description",
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
            "quoteDescription": {
                "type": "string",
                "attribute": "quote-description",
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
            "showAuthorDetails": {
                "type": "boolean",
                "attribute": "show-author-details",
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
            "authorName": {
                "type": "string",
                "attribute": "author-name",
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
            "authorDescription": {
                "type": "string",
                "attribute": "author-description",
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
            "showAvatar": {
                "type": "boolean",
                "attribute": "show-avatar",
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
            "avatarSrc": {
                "type": "string",
                "attribute": "avatar-src",
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
                        }
                    }
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
