import { h, Fragment } from "@stencil/core";
export class TabComponent {
    constructor() {
        this.isExpanded = false;
    }
    handleExpanded(expanded) {
        this.isExpanded = expanded;
        if (expanded) {
            this.submenuElement.style.maxHeight = 'fit-content';
        }
        else {
            this.submenuElement.style.maxHeight = '';
        }
    }
    render() {
        return (h(Fragment, { key: 'b9eb28eb0e5582ad145c0126b01b76feb8c6b9e5' }, h("tab-link", { key: '105520edf7df8c57721784333a64aa06f2d4fe84', text: this.route.name, type: this.route.children && this.route.children.length > 0 ? 'parent' : 'child', icon: this.route.icon, link: this.route.path, onExpand: this.handleExpanded.bind(this), disabled: this.route.disabled }), this.route.children && this.route.children.length > 0 && (h("ul", { key: '3a742a8119e7ad5d0b50ab532025d10665508aa8', class: "sidepanel__submenu-list", ref: el => (this.submenuElement = el) }, this.route.children.map((childRoute, index) => (h("submenu-component", { key: index, route: this.route, childRoute: childRoute, onChildExpanded: expanded => {
                if (expanded) {
                    this.submenuElement.style.maxHeight = 'fit-content';
                }
            } })))))));
    }
    static get is() { return "tab-component"; }
    static get properties() {
        return {
            "route": {
                "type": "unknown",
                "attribute": "route",
                "mutable": false,
                "complexType": {
                    "original": "IRoute",
                    "resolved": "IRoute",
                    "references": {
                        "IRoute": {
                            "location": "import",
                            "path": "./dga-drawer",
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
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
}
