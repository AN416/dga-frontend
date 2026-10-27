import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaButton {
    constructor() {
        this.variant = 'primary-neutral';
        this.size = 'md';
        this.type = 'button';
        this.onColor = false;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
    renderIcon(iconName, iconProps) {
        return h("dga-icon", Object.assign({ name: iconName }, iconProps));
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
        const sxValue = typeof this.sx === 'string'
            ? JSON.parse(this.sx)
            : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        const buttonId = this.btnId || `btn-${Math.random().toString(36).substr(2, 9)}`;
        const classList = [
            'dga-btn',
            `dga-btn--${this.size}`,
            `dga-btn--${this.variant}`,
            this.onColor ? `dga-btn--${this.variant}--on-color` : '',
            this.iconOnly ? 'dga-btn--icon' : '',
        ]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: '7c106eb31911e25618eaafab886639643bd23772', id: this.componentId, style: this.rootStyles }, h("button", { key: 'a043d8bea6f0f44a7fd0e4efd1884512bfc4918d', id: buttonId, type: this.type, class: classList, disabled: this.disabled, "aria-label": this.iconOnly && !this.label ? 'Button with icon' : this.label, role: "button", onClick: (event) => this.handleClick(event) }, this.iconOnly && this.iconType && (h("span", { key: '8741c440f725ed27a1dd8ef0ed52b20ad0bdbc0e', class: "dga-btn-icon", "aria-hidden": "true" }, this.renderIcon(this.iconType, this.iconProps))), this.leadIcon && this.leadIconType && (h("span", { key: 'bd49dee0788fde851581e3d6899e5168611dec62', class: "dga-btn-icon", "aria-hidden": "true" }, this.renderIcon(this.leadIconType, this.leadIconProps))), !this.iconOnly && this.label && h("span", { key: 'efb0dc5e156ed14ff24ae7b8461a14358e38b3d6', class: "dga-btn-label" }, this.label), this.trailIcon && this.trailIconType && (h("span", { key: '7d09b5adeb5f63bf1718ffcbb06537a75107f806', class: "dga-btn-icon", "aria-hidden": "true" }, this.renderIcon(this.trailIconType, this.trailIconProps))))));
    }
    static get is() { return "dga-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-button.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "ButtonStyle",
                    "resolved": "\"des-primary\" | \"des-secondary\" | \"des-secondary-outline\" | \"des-subtle\" | \"des-transparent\" | \"primary-brand\" | \"primary-neutral\" | \"secondary\" | \"secondary-outline\" | \"subtle\" | \"transparent\"",
                    "references": {
                        "ButtonStyle": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-button/dga-button.tsx",
                            "id": "src/components/dga-button/dga-button.tsx::ButtonStyle"
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
                "reflect": false,
                "defaultValue": "'primary-neutral'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-button/dga-button.tsx",
                            "id": "src/components/dga-button/dga-button.tsx::ButtonSize"
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
                "reflect": false,
                "defaultValue": "'md'"
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
            "iconOnly": {
                "type": "boolean",
                "attribute": "icon-only",
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
            "iconType": {
                "type": "string",
                "attribute": "icon-type",
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
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
            "leadIcon": {
                "type": "boolean",
                "attribute": "lead-icon",
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
            "leadIconType": {
                "type": "string",
                "attribute": "lead-icon-type",
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
            "leadIconProps": {
                "type": "unknown",
                "attribute": "lead-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
            "trailIcon": {
                "type": "boolean",
                "attribute": "trail-icon",
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
            "trailIconType": {
                "type": "string",
                "attribute": "trail-icon-type",
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
            "trailIconProps": {
                "type": "unknown",
                "attribute": "trail-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            "btnId": {
                "type": "string",
                "attribute": "btn-id",
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
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
                "defaultValue": "'button'"
            },
            "onColor": {
                "type": "boolean",
                "attribute": "on-color",
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
    static get events() {
        return [{
                "method": "onClick",
                "name": "onClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
