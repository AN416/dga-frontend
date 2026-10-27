import { h, Host } from "@stencil/core";
export class DgaLogoPlaceholder {
    constructor() {
        this.src = "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg";
        /** Layout direction (LTR or RTL) */
        this.layout = 'side';
        /** Logo size (sm, md, lg) */
        this.size = 'md';
    }
    // private getSize(): string {
    //   const sizes = {
    //     sm: '60px',
    //     md: '80px',
    //     lg: '100px',
    //   };
    //   return sizes[this.size] || '80px';
    // }
    render() {
        // const logoSize = this.getSize();
        return (h(Host, { key: '1ae9523f635c749b22a7a4a671f3d12854f04e62' }, h("div", { key: 'bedc1a7ed9e1c27e7948fd7e51c575d8bf3d7d79', class: `logo-wrapper logo-placeholder--${this.size} logo-placeholder--${this.layout}` }, h("img", { key: 'b8db547032e24c3debc25959f2969602e6601d46', src: this.src, alt: "Platform Logo",
            // style={{ width: logoSize, height: logoSize }}
            class: "logo-image" }), h("span", { key: '919f751114ff5a2bca8c4dbc22cb5ea56ebf24ff', class: "logo-text" }, this.text))));
    }
    static get is() { return "dga-logo-placeholder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-logo-placeholder.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-logo-placeholder.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "attribute": "src",
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
                "defaultValue": "\"https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg\""
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                    "text": "Text to display next to the logo"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'side'",
                    "resolved": "\"side\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout direction (LTR or RTL)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'side'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Logo size (sm, md, lg)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'md'"
            }
        };
    }
}
