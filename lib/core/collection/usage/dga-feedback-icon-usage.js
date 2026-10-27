import { h } from "@stencil/core";
export class DgaFeedbackIconUsage {
    constructor() {
        this.value = 'test';
    }
    render() {
        return (h("div", { key: '615b51fc7247d64779bd95f1038a6600d8dfe9c4' }, h("h1", { key: '96f000136cf7baca61d3206f8716a9735dba606a' }, "Search Box Example"), h("div", { key: 'eae9fb5e86179e1001abae46543f38e560e23c4a', style: { padding: '50px' } }, h("div", { key: '190ae2034fd29bf0ba3164790d8252755366f86f', style: { display: "flex", flexDirection: "column", gap: "16px" } }))));
    }
    static get is() { return "dga-feedback-icon-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
