import { h } from "@stencil/core";
export class DgaButton {
    constructor() {
        this.variant = 'primary';
        this.size = 'md';
        this.type = 'button';
        this.onColor = false;
        this.destructive = false;
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
    }
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-BUTTON-LEADING-ICON' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'button-leading-icon');
            }
        });
    }
    render() {
        const classList = [
            'dga-btn',
            `dga-btn--${this.size}`,
            `dga-btn--${this.destructive ? 'des-' : ''}${this.variant}`,
            this.destructive ? `$dga-btn--${this.destructive}` : '',
            this.onColor ? `dga-btn--${this.variant}--on-color` : '',
            this.iconOnly ? 'dga-btn--icon' : '',
        ]
            .filter(Boolean)
            .join(' ');
        return (h("button", { key: '8ec15c3c417b8484d00e4ed8fe2aa6c0c64a1544', type: this.type, class: classList, disabled: this.disabled, "aria-label": this.iconOnly && !this.label ? 'Button with icon' : this.label, role: "button", onClick: (event) => this.handleClick(event) }, this.leadIcon && this.leadIconProps && this.leadIconProps.name && (h("span", { key: '00feb1f2228ad79ec6e8f2f4ee787007204841f0', class: "dga-btn-icon", "aria-hidden": "true" }, h("dga-icon", Object.assign({ key: '86152364e9f17f37fbcb9e31b99064b04c8a611e' }, this.leadIconProps)))), !this.iconOnly && this.label && h("span", { key: 'd9445255686c90c72d0ec420323fc1d04ff9b753' }, this.label), h("slot", { key: '2588b800e011e0bab34976d4fa518454be0c8900', name: "trailing-icon" }), this.trailIcon && this.trailIconProps && this.trailIconProps.name && !this.iconOnly && (h("span", { key: '80136c3bb95a0bdac6e026173fdcc7d463fcf628', class: "dga-btn-icon", "aria-hidden": "true" }, h("dga-icon", Object.assign({ key: '8f97b2793457d8624094155d9512657305c558cf' }, this.trailIconProps))))));
    }
    static get is() { return "dga-button-v2"; }
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
                    "resolved": "\"neutral\" | \"primary\" | \"secondary-outline\" | \"secondary-solid\" | \"subtle\" | \"transparent\"",
                    "references": {
                        "ButtonStyle": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-button-v2/dga-button-v2.tsx",
                            "id": "src/components/dga-button-v2/dga-button-v2.tsx::ButtonStyle"
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
                "defaultValue": "'primary'"
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-button-v2/dga-button-v2.tsx",
                            "id": "src/components/dga-button-v2/dga-button-v2.tsx::ButtonSize"
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
            "leadIconProps": {
                "type": "unknown",
                "attribute": "lead-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-avatar/dga-avatar",
                            "id": "src/components/dga-avatar/dga-avatar.tsx::Icon"
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
            "trailIconProps": {
                "type": "unknown",
                "attribute": "trail-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-avatar/dga-avatar",
                            "id": "src/components/dga-avatar/dga-avatar.tsx::Icon"
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
            "destructive": {
                "type": "boolean",
                "attribute": "destructive",
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
}
