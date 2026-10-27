import { Host, h } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
import { checkmarkCircle02Solid, informationCircleSolid, alert02Solid, alertCircleSolid, multiplicationSignStroke } from "@platformscode/icons";
export class DgaNotification {
    constructor() {
        this.icon = true;
        this.link = false;
        this.dismissable = false;
        this.icons = {
            success: checkmarkCircle02Solid,
            info: informationCircleSolid,
            neutral: informationCircleSolid,
            warning: alert02Solid,
            critical: alertCircleSolid,
        };
        // Generate a unique ID if not provided
        this.componentId = `dga-notification-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string' ? JSON.parse(this.sx) : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '571f0b5edb54ceabf5173615c906d659d9f551bc', id: this.componentId, style: this.rootStyles }, h("div", { key: '3e3c4a39121a1249179005846b39faf8099710da', class: `notification notification--${this.variant}`, role: "alert" }, h("div", { key: '654facfbd9209473cffe72138e22458aaa50597e', class: "notification__content" }, this.icon && h("div", { key: '5290e99cf5ee332f47d47d4b1dc0da069237a78d', class: "notification__icon" }, h("dga-icon", { key: '85ecb4c05095d02af31ecf9c2461b6057aaef327', icon: this.icons[this.variant], size: 24 })), this.leadText && h("strong", { key: '12de19229ec917c8b324ac1e14d5c91112bc367b', class: "notification__lead-text" }, this.leadText, ": "), h("p", { key: 'c84d5aecf472abd28b07f336146b7b35ddd8b08b' }, this.content), this.link && (h("a", { key: '17e62656c436410de22af44de0a1de190dc97a16', onClick: () => {
                this.navigateTo && this.navigateTo(this.setNavigateTo);
            }, class: "notification__link link link--md link--neutral link--inline" }, h("span", { key: 'da50902ff2df3d81ef4ee8ef81644a3f53e4e7e8', class: "link__label" }, this.textLink)))), this.dismissable && (h("div", { key: '477adecf22d04ce7485fddbd1393e2cff3781a9f', class: "notification__dismiss" }, h("button", { key: 'ef842e83b9a29dc85a72e18d594dc2d09277f4a6', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: () => {
                this.dismmissed && this.dismmissed();
            } }, h("span", { key: '74dc98f3ad44bf5eee558d402047612f0e686ff0', class: "dga-btn-icon" }, h("dga-icon", { key: '9be1db5cd78af65fb959fe9962e46be9ebf2423b', icon: multiplicationSignStroke, size: 20 }))))))));
    }
    static get is() { return "dga-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-notification.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-notification.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "boolean",
                "attribute": "icon",
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
            "leadText": {
                "type": "string",
                "attribute": "lead-text",
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
            "content": {
                "type": "string",
                "attribute": "content",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'critical' | 'warning' | 'success' | 'info' | 'neutral'",
                    "resolved": "\"critical\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
            "link": {
                "type": "boolean",
                "attribute": "link",
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
            "textLink": {
                "type": "string",
                "attribute": "text-link",
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
            "dismissable": {
                "type": "boolean",
                "attribute": "dismissable",
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
            "setNavigateTo": {
                "type": "string",
                "attribute": "set-navigate-to",
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
            "navigateTo": {
                "type": "unknown",
                "attribute": "navigate-to",
                "mutable": false,
                "complexType": {
                    "original": "(link?: string) => void",
                    "resolved": "(link?: string) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "dismmissed": {
                "type": "unknown",
                "attribute": "dismmissed",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "string | { [x: string]: any; }",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-style-manager",
                            "id": "src/utils/sx-style-manager.ts::SxProps"
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
                "methodName": "handleSxChange"
            }];
    }
}
