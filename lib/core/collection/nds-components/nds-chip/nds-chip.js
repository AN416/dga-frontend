import { Host } from "@stencil/core";
import { h } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class NdsChip {
    constructor() {
        this.variant = 'success';
        this.size = 'md';
        this.selected = false;
        this.onChange = () => { };
        // State to manage internal pressed state and selection
        this.pressed = false;
        this.isSelectedState = this.selected;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
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
        return (h(Host, { key: 'c82349722f1127f534000a3077818fcb279f97ee', id: this.componentId, style: this.rootStyles }, h("span", { key: '3250ee0c049bbe2c8f01aef7c81c68f628be58e7', tabindex: "0", class: `chip chip--${this.variant} chip--${this.size} ${this.rounded ? 'chip--rounded' : ''} ${this.disabled ? 'disabled' : ''} ${this.pressed ? 'pressed' : ''} ${this.selected ? 'selected' : ''}`, onMouseDown: () => (this.pressed = true), onMouseUp: () => (this.pressed = false), "aria-disabled": this.disabled, onClick: () => {
                if (this.selected) {
                    this.isSelectedState = false;
                }
                else {
                    this.isSelectedState = true;
                }
                this.onChange(this.isSelectedState);
            } }, h("slot", { key: 'c5176106847c11cd1eb95ce97d6502dd53ee3e06', name: "trailing-icon" }, this.leadingIcon && (h("span", { key: '80e758ac728c6ba9e577799ca15568ab7c2f4ead', class: "chip-icon" }, h("dga-icon-v2", Object.assign({ key: 'be61b6e09aea377f1dbd6f40665dd5d2c2251920', name: this.leadingIcon }, this.leadingIconProps))))), this.label, h("slot", { key: 'e430c92649eec53c83f90e7ea7379fb84c7e0eea', name: "trailing-icon" }, this.trailingIcon && (h("span", { key: 'f45c7f1d4d37259dba45f75543ce33d870415b1c', class: "chip-icon" }, h("dga-icon-v2", Object.assign({ key: '97b9ba001a0fc42bf743f0fbb51368eaa4004c1c', name: this.trailingIcon }, this.trailingIconProps))))))));
    }
    static get is() { return "nds-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-chip.css"]
        };
    }
    static get properties() {
        return {
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"success\"",
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
                "defaultValue": "'success'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
            "leadingIcon": {
                "type": "string",
                "attribute": "leading-icon",
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
            "leadingIconProps": {
                "type": "unknown",
                "attribute": "leading-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "Omit<Icon, 'name'>",
                    "resolved": "{ color?: string; type?: \"rounded\" | \"sharp\" | \"standard\"; size?: number; variant?: \"stroke\" | \"solid\" | \"duotone\" | \"twotone\" | \"bulk\"; }",
                    "references": {
                        "Omit": {
                            "location": "global",
                            "id": "global::Omit"
                        },
                        "Icon": {
                            "location": "import",
                            "path": "../../components",
                            "id": "src/components.d.ts::Icon"
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
            "trailingIcon": {
                "type": "string",
                "attribute": "trailing-icon",
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
            "trailingIconProps": {
                "type": "unknown",
                "attribute": "trailing-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "Omit<Icon, 'name'>",
                    "resolved": "{ color?: string; type?: \"rounded\" | \"sharp\" | \"standard\"; size?: number; variant?: \"stroke\" | \"solid\" | \"duotone\" | \"twotone\" | \"bulk\"; }",
                    "references": {
                        "Omit": {
                            "location": "global",
                            "id": "global::Omit"
                        },
                        "Icon": {
                            "location": "import",
                            "path": "../../components",
                            "id": "src/components.d.ts::Icon"
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
            "rounded": {
                "type": "boolean",
                "attribute": "rounded",
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
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(selected: boolean) => void",
                    "resolved": "(selected: boolean) => void",
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
                "defaultValue": "() => {}"
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "CSSProperties & NestedSelector | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-system",
                            "id": "src/utils/sx-system.ts::SxProps"
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
    static get states() {
        return {
            "pressed": {},
            "isSelectedState": {}
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
