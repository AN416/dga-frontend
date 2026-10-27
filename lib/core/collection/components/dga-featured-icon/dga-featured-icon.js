import { h } from "@stencil/core";
export class DgaFeaturedIcon {
    constructor() {
        this.size = 'md';
        this.color = 'brand';
        this.variant = 'light';
        // @Prop() variant: 'circle' | 'square' = 'circle';
        this.circle = true;
        this.iconFonts = {
            "xl": 28,
            "lg": 24,
            "md": 20,
            "sm": 16,
        };
    }
    render() {
        return (h("div", { key: '98f769f4dc50b89f85a4a73a30e0f5b996fa9272', class: `dga-featured-icon ${this.circle ? "dga-featured-icon--circle" : ""} dga-featured-icon--${this.size} dga-featured-icon--${this.variant}-${this.color}` }, h("dga-icon", { key: '7c920d48e246b8054bb7ca682ebc3ae776489471', name: this.icon.name, variant: this.icon.variant, type: this.icon.type, size: this.iconFonts[this.size] })));
    }
    static get is() { return "dga-featured-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-featured-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-featured-icon.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg' | 'xl'",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
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
                "defaultValue": "'md'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'gray' | 'error' | 'warning' | 'success' | 'info'",
                    "resolved": "\"brand\" | \"error\" | \"gray\" | \"info\" | \"success\" | \"warning\"",
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
                "defaultValue": "'brand'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'light' | 'dark' | 'outlined'",
                    "resolved": "\"dark\" | \"light\" | \"outlined\"",
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
                "defaultValue": "'light'"
            },
            "circle": {
                "type": "boolean",
                "attribute": "circle",
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
            "icon": {
                "type": "unknown",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-featured-icon/dga-featured-icon.tsx",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false
            }
        };
    }
}
