import { Host, h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
import { isRTL } from "../../utils/rtl/index";
export class DgaAvatarGroup {
    constructor() {
        /******************
         * States
         ******************/
        /**
         * Internal state to track overflow count.
         */
        this.overflowCount = 0;
        /**
         * Whether the avatars are stacked.
         */
        this.stacked = false;
        /**
         * The size of the avatars.
         * Supported sizes: 24, 32, 40, 48, 68, 80, 120.
         * Default is 32.
         */
        this.size = 32;
        /**
         * Whether the avatars are square.
         * Default is false.
         */
        this.square = false;
        /**
         * Whether the avatars have a border.
         * Default is false.
         */
        this.border = false;
    }
    /******************
     * Methods
     ******************/
    /**
     * Get the overlap value, using size-based defaults if not provided.
     */
    getOverlap() {
        if (!this.stacked) {
            return 0;
        }
        const sizeOverlapMap = {
            24: 8,
            32: 10,
            40: 12,
            48: 16,
            68: 20,
            80: 24,
            120: 32,
        };
        return sizeOverlapMap[this.size];
    }
    onPropsChange() {
        this.calculateOverflow();
        this.updateChildAvatars();
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
        this.calculateOverflow();
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
        this.setupSlotListener();
        this.updateChildAvatars();
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    /**
     * Calculate overflow count from light DOM children.
     * Called before render to avoid state changes during componentDidLoad.
     */
    calculateOverflow() {
        // Get avatars from light DOM (children of the host element)
        const avatars = Array.from(this.el.children).filter(el => el.tagName.toLowerCase() === 'dga-avatar');
        // Calculate overflow
        if (this.max !== undefined && this.max > 0 && avatars.length > this.max) {
            this.overflowCount = avatars.length - this.max;
        }
        else {
            this.overflowCount = 0;
        }
    }
    /**
     * Setup listener for slot changes.
     */
    setupSlotListener() {
        var _a;
        const slot = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        if (slot) {
            slot.addEventListener('slotchange', () => {
                this.calculateOverflow();
                this.updateChildAvatars();
            });
        }
    }
    /**
     * Update child avatar elements with set properties.
     */
    updateChildAvatars() {
        var _a;
        const slot = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        if (!slot)
            return;
        const assignedElements = slot.assignedElements({ flatten: true });
        const avatars = assignedElements.filter(el => el.tagName.toLowerCase() === 'dga-avatar');
        const rtl = isRTL(this.el);
        avatars.forEach((avatar, index) => {
            // Apply size to all avatars
            avatar.setAttribute('size', this.size.toString());
            // Apply stroke for visual separation
            if (this.border) {
                avatar.setAttribute('border', 'true');
            }
            else {
                avatar.removeAttribute('border');
            }
            if (this.square) {
                avatar.setAttribute('square', 'true');
            }
            else {
                avatar.removeAttribute('square');
            }
            // Hide avatars beyond max
            if (this.max !== undefined && this.max > 0 && index >= this.max) {
                avatar.style.display = 'none';
            }
            else {
                avatar.style.display = '';
                // Apply wrapper styling for overlap and z-index
                const isLast = index === Math.min(avatars.length, this.max || avatars.length) - 1 && this.overflowCount === 0;
                // First avatar = lower z-index (1), last avatar = higher z-index
                const zIndex = rtl ? Math.min(avatars.length, this.max || avatars.length) - 1 : index + 1;
                avatar.style.zIndex = String(zIndex);
                avatar.style.position = 'relative';
                avatar.style.marginInlineEnd = isLast ? '0' : `-${this.getOverlap()}px`;
            }
        });
    }
    render() {
        return (h(Host, { key: 'c8bc6274ed07dbb4b9ed7c1218325b91e26c720b', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: 'ce2c51e46db6dd3dc6960ef6eca1c3276e617be9', class: {
                'dga-avatar-group': true,
                'dga-avatar-group--stacked': this.stacked,
            } }, h("slot", { key: 'a5254a405a09462777dfeb48ca188d2fdf4e28bd' }), this.overflowCount > 0 && (h("dga-avatar", { key: '2043496bdc309b3c49f4d19a39f238a1959ef3e0', type: "initials", text: `+${this.total ? this.total - this.max : this.overflowCount}`, size: this.size, square: this.square, border: this.border, style: {
                zIndex: String((this.max || 0) + 1), // Overflow badge gets highest z-index
                position: 'relative',
                marginInlineEnd: '0',
            } })))));
    }
    static get is() { return "dga-avatar-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-avatar-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-avatar-group.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The styles to apply to the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "stacked": {
                "type": "boolean",
                "attribute": "stacked",
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
                    "text": "Whether the avatars are stacked."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "total": {
                "type": "number",
                "attribute": "total",
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
                    "text": "The total number of avatars in the set."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                    "text": "Maximum number of avatars to display.\nAdditional avatars will be represented by a \"+N\" indicator.\nSet to 0 or undefined to show all avatars."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "number",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "120 | 24 | 32 | 40 | 48 | 68 | 80",
                    "references": {
                        "AvatarSize": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-avatar-group/dga-avatar-group.tsx",
                            "id": "src/components/dga-avatar-group/dga-avatar-group.tsx::AvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The size of the avatars.\nSupported sizes: 24, 32, 40, 48, 68, 80, 120.\nDefault is 32."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "32"
            },
            "square": {
                "type": "boolean",
                "attribute": "square",
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
                    "text": "Whether the avatars are square.\nDefault is false."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "border": {
                "type": "boolean",
                "attribute": "border",
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
                    "text": "Whether the avatars have a border.\nDefault is false."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "overflowCount": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "max",
                "methodName": "onPropsChange"
            }, {
                "propName": "size",
                "methodName": "onPropsChange"
            }, {
                "propName": "border",
                "methodName": "onPropsChange"
            }, {
                "propName": "square",
                "methodName": "onPropsChange"
            }, {
                "propName": "stacked",
                "methodName": "onPropsChange"
            }, {
                "propName": "total",
                "methodName": "onPropsChange"
            }, {
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
