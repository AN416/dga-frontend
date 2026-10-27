import { h } from "@stencil/core";
export class DgaModalUsage {
    constructor() {
        this.show = false;
    }
    render() {
        return (h("div", { key: '2416cbd78e6774e730a1b5428bca098a95b43f25', style: { position: "relative" } }, h("h1", { key: '6635ba74dcd08aee09728f30b970b73c70feeda3' }, "Modal Example"), h("button", { key: 'e4eddb3889b1670af2b0f89fb2d615062d4659c0', onClick: () => this.show = true }, "Open Modal"), h("dga-modal", { key: '60d80213999c5988efb06c7685d126ea6ca88789', buttonsList: [
                {
                    extraClass: '',
                    label: 'Close',
                    onClick: () => { },
                    title: 'Close Modal'
                }
            ], closeButton: true, modalTitle: "Basic Modal", name: "basicModal", onClose: () => { }, open: this.show }, "This is a simple modal with default configuration."), this.show ? "shown" : "hidden"));
    }
    static get is() { return "dga-modal-usage"; }
    static get states() {
        return {
            "show": {}
        };
    }
}
