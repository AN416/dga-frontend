import { Host, h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaDrawer {
    constructor() {
        this.background = 'brand';
        this.anchor = 'left';
        this.open = false;
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
        return (h(Host, { key: '8552581bed4593cbe9adf41ad4bb366d6d6db32e', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: '3e079d001aabb0872ad3d043123d45c15f168e70', class: `sidepanel sidepanel--${this.anchor} ${this.background ? `sidepanel--bg-${this.background}` : ''}
            ${this.overlay ? 'sidepanel--overlay' : ''}
            ${this.border ? 'sidepanel--border' : ''}
            ${this.open ? 'active' : ''}
            ` }, this.headerLogo && h("div", { key: 'adea17e059c2940e0c5d38685a165b737addb00d', class: "sidepanel__header" }, h("img", { key: '428be81dc3b3b556b827ea0209fdfbca2a318d4f', src: this.headerLogo, alt: 'logo' })), h("side-panel-menu", { key: '5e0b0e713d0a44ce0144111a82bfd80981ab032d', routes: this.routes }), h("slot", { key: '61a962846a0f192099f477956abc6823c2a24a2c' }))));
    }
    static get is() { return "dga-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-drawer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-drawer.css"]
        };
    }
    static get properties() {
        return {
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "'gray' | 'brand'",
                    "resolved": "\"brand\" | \"gray\"",
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
                "defaultValue": "'brand'"
            },
            "overlay": {
                "type": "boolean",
                "attribute": "overlay",
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
                "reflect": false
            },
            "border": {
                "type": "boolean",
                "attribute": "border",
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
                "reflect": false
            },
            "anchor": {
                "type": "string",
                "attribute": "anchor",
                "mutable": false,
                "complexType": {
                    "original": "'left'|'right'",
                    "resolved": "\"left\" | \"right\"",
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
                "defaultValue": "'left'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "routes": {
                "type": "unknown",
                "attribute": "routes",
                "mutable": false,
                "complexType": {
                    "original": "IRoute[]",
                    "resolved": "IRoute[]",
                    "references": {
                        "IRoute": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-drawer/dga-drawer.tsx",
                            "id": "src/components/dga-drawer/dga-drawer.tsx::IRoute"
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
            },
            "headerLogo": {
                "type": "string",
                "attribute": "header-logo",
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
