import { h } from "@stencil/core";
export class DgaNavHeaderSubMenuLink {
    render() {
        const backgroundClass = this.background === 'Brand' ? 'sub-menu__link--on-color' : '';
        const linkStyleClass = this.linkStyle && this.linkStyle > 0 ? (this.linkStyle === 2 ? 'sub-menu__link-icon--bg' : 'sub-menu__link-icon') : '';
        return (h("a", { key: '23f876121d5aeebfe97c14b8b12b77ffe20b04a1', href: this.link, class: `sub-menu__link ${backgroundClass}` }, this.linkStyle && this.linkStyle > 0 ? h("div", { class: linkStyleClass }, this.icon && h("dga-icon", { icon: this.icon })) : null, h("div", { key: 'b0ccf2b90c7fc9ca4d2757ad4a899670a9cdca58', class: "dga-flex-column" }, h("span", { key: '27d34be8e4b1ea4c477d921243bfb769919200ef', class: "sub-menu__link-label" }, this.label), this.helperText && h("span", { key: '9784607348ff91d064f14ec403f0c9b695545102', class: "sub-menu__link-helper" }, this.helperText))));
    }
    static get is() { return "dga-nav-header-sub-menu-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.css"]
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
                "reflect": false
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
            }
        };
    }
}
