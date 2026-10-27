import { h, Host } from "@stencil/core";
export class DgaMenuList {
    render() {
        return (h(Host, { key: 'a09dc2e4a14731f3c0eec04d13c300df8a66436e' }, h("slot", { key: 'f70687e88b2e82ff4fb434deacb49675479f221a' })));
    }
    static get is() { return "dga-menu-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-menu-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-menu-list.css"]
        };
    }
}
