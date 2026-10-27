import { h, Fragment } from "@stencil/core";
export class DgaHeaderMobileActions {
    constructor() {
        this.actions = [];
        this.isMenuOpen = false; // State to control menu visibility
        this.anchorEl = null;
        // private buttonRef: HTMLElement | null = null; // Reference to the button
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
        return (h(Fragment, { key: 'cd9b89bb1020e651e9b8c958770ac1bae70c6810' }, h("div", { key: '38a974d24877d9ea837ec4d219e6f76e583b67f8', style: { position: 'relative' } }), h("ul", { key: 'e5b9f1751396e8eacba2050a3661f6004ed245e2', class: "header-nav__mobile-actions" }, h("slot", { key: '5f3ada468ffc2b3e369d142a0a5d231d05205500' }))));
    }
    static get is() { return "dga-header-mobile-actions"; }
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-header/dga-header-mobile-actions.tsx",
                            "id": "src/components/dga-header/dga-header-mobile-actions.tsx::Action"
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
            }
        };
    }
    static get states() {
        return {
            "isMenuOpen": {},
            "anchorEl": {}
        };
    }
    static get elementRef() { return "el"; }
}
