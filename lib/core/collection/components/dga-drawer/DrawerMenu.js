import { h } from "@stencil/core";
import { guid } from "../../utils";
export class SidePanelMenu {
    constructor() {
        this.routes = [];
    }
    render() {
        return (h("ul", { key: 'a696170de6b4b01644a881dd298d16d3b4df90af', class: "sidepanel__menu-list" }, this.routes.map((route, index) => (h("li", { key: guid() }, h("tab-component", { route: route }), index < this.routes.length - 1 && (h("div", { class: "sidepanel__menu-tab-divider" })))))));
    }
    static get is() { return "side-panel-menu"; }
    static get properties() {
        return {
            "routes": {
                "type": "unknown",
                "attribute": "routes",
                "mutable": false,
                "complexType": {
                    "original": "IRoute[]",
                    "resolved": "IRoute[]",
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
}
