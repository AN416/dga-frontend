import { h } from "@stencil/core";
export class DgaHeaderMenu {
    constructor() {
        this.actions = [];
        this.icon = 'more-horizontal-circle-01';
        this.isMenuOpen = false; // State to control menu visibility
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.addEventListener('click', this.handleOutsideClick);
            }
            else {
                document.removeEventListener('click', this.handleOutsideClick);
            }
        };
        this.closeMenu = () => {
            this.isMenuOpen = false;
            document.removeEventListener('click', this.handleOutsideClick);
        };
        this.handleOutsideClick = (event) => {
            const target = event.target;
            if (!this.el.contains(target)) {
                this.closeMenu();
            }
        };
    }
    render() {
        return (h("div", { key: '7ec76f15b175be8e209e8c59e54363c497d90088', style: { position: 'relative' } }, h("dga-button-v2", { key: '30ba5f754949e1b7615434353786883ab0d5ee27', "aria-haspopup": "true", "aria-expanded": this.isMenuOpen ? 'true' : 'false', iconOnly: true, leadIcon: true, leadIconProps: {
                name: this.icon,
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: this.toggleMenu, class: "header-menu__btn" }), this.isMenuOpen && (h("ul", { key: 'a8cb61c1320f1348166aaff615f776b01464dc7d', class: "dga-breadcrumb-dropdown" }, this.actions.map(action => (h("li", { key: action === null || action === void 0 ? void 0 : action.label, class: "dga-breadcrumb-dropdown-item" }, h("a", { onClick: action.onClick }, h("span", { class: "link__label" }, action.label)))))))));
    }
    static get is() { return "dga-header-menu"; }
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
            "actions": {
                "type": "unknown",
                "attribute": "actions",
                "mutable": false,
                "complexType": {
                    "original": "Action[]",
                    "resolved": "Action[]",
                    "references": {
                        "Action": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-header/dga-header-menu.tsx",
                            "id": "src/components/dga-header/dga-header-menu.tsx::Action"
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
                "defaultValue": "[]"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                "reflect": false,
                "defaultValue": "'more-horizontal-circle-01'"
            }
        };
    }
    static get states() {
        return {
            "isMenuOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
