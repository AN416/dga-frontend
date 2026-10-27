import { h } from "@stencil/core";
export class DgaNavHeaderLogos {
    constructor() {
        this.logoLink = '#';
        this.govLink = '#';
    }
    render() {
        return (h("div", { key: '0cc1823d6ad045ec224ebd63dd4c3c6b8f4d08cc', class: "header-nav__branding" }, this.govSrc && (h("div", { key: '177a81a96486c181db1f3a0fb60d61e27c2d2a43', class: "dga-flex xs-hide" }, h("a", { key: 'abebe69799be3cf18624756790c83141c9f0537d', href: this.govLink }, h("img", { key: '0739864148de9634f31e8e4e763c23db2a4024d3', src: this.govSrc, alt: this.govAlt })), h("div", { key: '4a0af55b6fbc3feae5ad6ca0783906dab9deb24d', class: "dga-ver-divider" }))), h("a", { key: 'cfcb609c244a5ff7565ec815bbe1db28133b4d2e', href: this.logoLink, class: "header__logo" }, h("img", { key: 'f7eb727edd67e83dbbed84360276c5126163bcfd', src: this.logoSrc, alt: this.logoAlt }))));
    }
    static get is() { return "dga-nav-header-logos"; }
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
            "logoSrc": {
                "type": "string",
                "attribute": "logo-src",
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
            "logoAlt": {
                "type": "string",
                "attribute": "logo-alt",
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
            "logoLink": {
                "type": "string",
                "attribute": "logo-link",
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
                "defaultValue": "'#'"
            },
            "govSrc": {
                "type": "string",
                "attribute": "gov-src",
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
            "govAlt": {
                "type": "string",
                "attribute": "gov-alt",
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
            "govLink": {
                "type": "string",
                "attribute": "gov-link",
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
                "defaultValue": "'#'"
            }
        };
    }
}
