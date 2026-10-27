import { h } from "@stencil/core";
export class CodeSnippet {
    constructor() {
        var _a;
        this.snippets = {};
        this.showButton = false;
        this.type = 'multi-line';
        this.showSidebar = false;
        this.showTabList = false;
        this.showMore = false;
        this.activeTab = ((_a = Object.keys(this.snippets || {})) === null || _a === void 0 ? void 0 : _a[0]) || '';
    }
    componentDidLoad() {
        var _a;
        this.activeTab = ((_a = Object.keys(this.snippets || {})) === null || _a === void 0 ? void 0 : _a[0]) || '';
    }
    handleTabClick(tab) {
        this.activeTab = tab;
        this.showMore = false;
    }
    handleCopy() {
        navigator.clipboard.writeText(this.snippets[this.activeTab]);
    }
    renderWithLineNumbers(code) {
        var _a;
        const isMultiLine = this.type === 'multi-line';
        if (isMultiLine) {
            return (_a = code === null || code === void 0 ? void 0 : code.split('\n')) === null || _a === void 0 ? void 0 : _a.map((line, index) => (h("div", { key: index, class: "code-snippet-code-line" }, this.showSidebar && (h("div", { class: "code-snippet-number_container" }, h("span", { class: "code-snippet-line-number" }, index + 1))), h("span", { class: "code-snippet-line-content" }, line))));
        }
        else {
            return code
                .split('\n')
                .slice(0, 1)
                .map((line, index) => (h("div", { key: index, class: "code-snippet-code-line" }, h("span", { class: "code-snippet-line-content green" }, line))));
        }
    }
    render() {
        return (h("div", { key: 'ce73923556f916d0bfa605c745044e8ffca483d6', class: "code-snippet-container" }, this.showTabList && (h("div", { key: '51eeb0541400556f44755559ee06202774c65faf', class: "code-snippet-tabs" }, h("dga-tabs", { key: '09c06a91095329b863e914a8dc5777c97d68c739', divider: true, orientation: "horizontal", size: "lg", tabsList: Object.keys(this.snippets).map(tab => ({
                label: tab,
                onClick: () => this.handleTabClick(tab),
            })) }))), h("pre", { key: '79f2a0b519cffde2ee9b7cdd3e29225db312069f', class: "code-snippet-code-display" }, h("dga-button-v2", { key: '75ca3f58a7b8d07eba4f26371ea79af91432802e', size: "lg", iconOnly: true, variant: 'subtle', leadIcon: true, leadIconProps: {
                name: 'copy-01',
                size: 24,
                color: '#161616',
                variant: 'stroke',
            }, class: `code-snippet-icon ${this.type}`, onClick: () => this.handleCopy(), onColor: false }), h("code", { key: 'c10578da53d13dbde56dba9dad9731dcd12d8e37', style: {
                height: this.showButton && this.type === 'multi-line' && !this.showMore ? '150px' : 'auto',
            } }, this.renderWithLineNumbers(this.snippets[this.activeTab])), this.showButton && this.type === 'multi-line' && (h("div", { key: '8bf4f16e1b8036bc365015f1a9f5a368f5c43fed', class: "code-snippet-wrapper" }, h("dga-button-v2", { key: 'fbe4b8e7f7260b041af049c54232157158643812', label: this.showMore ? 'Show Less' : 'Show More', size: "md", trailIcon: true, variant: 'subtle', trailIconProps: { name: !this.showMore ? 'arrow-down-01' : 'arrow-up-01', size: 20, color: '#161616', variant: 'stroke' }, onClick: () => (this.showMore = !this.showMore), onColor: false }))))));
    }
    static get is() { return "dga-codesnippet"; }
    static get originalStyleUrls() {
        return {
            "$": ["./style.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["style.css"]
        };
    }
    static get properties() {
        return {
            "snippets": {
                "type": "unknown",
                "attribute": "snippets",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
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
                "defaultValue": "{}"
            },
            "showButton": {
                "type": "boolean",
                "attribute": "show-button",
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'multi-line' | 'single'",
                    "resolved": "\"multi-line\" | \"single\"",
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
                "defaultValue": "'multi-line'"
            },
            "showSidebar": {
                "type": "boolean",
                "attribute": "show-sidebar",
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
            "showTabList": {
                "type": "boolean",
                "attribute": "show-tab-list",
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
            }
        };
    }
    static get states() {
        return {
            "showMore": {},
            "activeTab": {}
        };
    }
}
