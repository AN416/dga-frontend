import { Fragment, h } from "@stencil/core";
export class DgaMenu {
    constructor() {
        this.anchorEl = null;
        this.open = false;
        this.onClose = () => { };
        // Method to detect outside click
        this.handleClickOutside = (event) => {
            if (this.anchorEl && !this.anchorEl.contains(event.target)) {
                this.onClose();
            }
        };
    }
    componentDidLoad() {
        // Add event listener to handle clicks outside the menu
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        // Cleanup event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    }
    getMenuStyle() {
        var _a;
        const rect = (_a = this.anchorEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            position: 'absolute',
            top: `${(rect === null || rect === void 0 ? void 0 : rect.bottom) + window.scrollY}px`,
            left: `${(rect === null || rect === void 0 ? void 0 : rect.left) + window.scrollX}px`,
            zIndex: '1000',
        };
    }
    render() {
        return (h(Fragment, { key: '7be8e401d4a5ff14f7afbf0147781b69de2dce42' }, this.open && this.anchorEl && (h("ul", { key: '90d0d2f33b6a5ac6dc3c5470d697cdda5d6c4aff', class: "menu", style: this.getMenuStyle() }, h("slot", { key: '6b0090edbff7518991b2f2af3e87d8715301713a' })))));
    }
    static get is() { return "dga-menu"; }
    static get properties() {
        return {
            "anchorEl": {
                "type": "unknown",
                "attribute": "anchor-el",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement | null",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
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
                "defaultValue": "null"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
            "onClose": {
                "type": "unknown",
                "attribute": "on-close",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
                "defaultValue": "() => {}"
            }
        };
    }
}
