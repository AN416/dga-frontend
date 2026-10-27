import { h } from "@stencil/core";
export class DgaHeaderSubMenuItem {
    constructor() {
        this.linkStyle = 2;
        this.iconProps = {
            size: 24,
            type: 'rounded',
            variant: 'stroke',
        };
    }
    render() {
        const backgroundClass = this.background === 'Brand' ? 'sub-menu__link--on-color' : '';
        const linkStyleClass = this.linkStyle && this.linkStyle > 0 ? (this.linkStyle === 2 ? 'sub-menu__link-icon--bg' : 'sub-menu__link-icon') : '';
        return (h("a", { key: 'd842e2ce39102457cc2639d637ccdac17fe756b6', href: this.link, class: `sub-menu__link ${backgroundClass}` }, this.linkStyle && this.linkStyle > 0 ? h("div", { class: linkStyleClass }, this.icon && h("dga-icon-v2", Object.assign({ name: this.icon }, this.iconProps))) : null, h("dga-flex", { key: '3e0b006904b9296d549c43beceeaf6001d1e8528', direction: 'column', spacing: 4 }, h("dga-flex", { key: '314fb82bbc4e8818cde5c030a13075921ea5ae1b', direction: 'row', align: 'center', spacing: 8 }, h("span", { key: '78824aaa330f51253e9caf4b41637ebf0f00cb83', class: "sub-menu__link-label" }, this.label), h("slot", { key: '416eaed9505ddccfea4bf66d0b9801a5da7a5b57', name: "tag" })), this.helperText && h("span", { key: 'cf3b79c228f5510f61957894e5fbf42e17986981', class: "sub-menu__link-helper" }, this.helperText))));
    }
    static get is() { return "dga-header-sub-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-header-sub-menu-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-header-sub-menu-item.css"]
        };
    }
    static get properties() {
        return {
            "background": {
                "type": "string",
                "attribute": "background",
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
            "link": {
                "type": "string",
                "attribute": "link",
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
            "linkStyle": {
                "type": "number",
                "attribute": "link-style",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "2"
            },
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
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            "iconProps": {
                "type": "unknown",
                "attribute": "icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n      size?: number;\n      color?: string;\n      variant?: 'stroke' | 'solid' | 'duotone' | 'twotone' | 'bulk';\n      type?: 'rounded' | 'sharp' | 'standard';\n    }",
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
                "defaultValue": "{\n    size: 24,\n      type: 'rounded',\n      variant: 'stroke',\n    }"
            }
        };
    }
}
