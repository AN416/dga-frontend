import { h } from "@stencil/core";
export class DgaModal {
    render() {
        return (h("div", { key: '248ef3ce073662af4a4d674570fd7a204fd9af55', class: "dga-modal__body" }, h("slot", { key: 'd5e13d40c7f6a335d71cd792073a256c860cbfce' })));
    }
    static get is() { return "dga-modal-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-modal-body.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-modal-body.css"]
        };
    }
}
