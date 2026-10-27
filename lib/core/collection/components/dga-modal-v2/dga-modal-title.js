import { h } from "@stencil/core";
export class DgaModalTitle {
    render() {
        return (h("h4", { key: '4e5915bcfe776a7f2c73d19631af81d60793aa2b', class: "dga-modal__title" }, h("slot", { key: 'aed47a6ab35cbf47ffe62366ad2df43ae5037c28' })));
    }
    static get is() { return "dga-modal-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-modal-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-modal-title.css"]
        };
    }
}
