import { h } from "@stencil/core";
export class DgaQuoteUsage {
    constructor() {
        this.activeStep = 1;
    }
    render() {
        return (h("div", { key: '1275a01a6aa6f0d179a1fdd872c95e3c92327f9c' }, h("h1", { key: '3d6b23723f5a69ee276461e0e5d36121f4d806e9' }, "Quote Example"), h("div", { key: '7711a5760b5413a0b8b404c4b41b566e31a5f967', style: { padding: "50px", display: "flex", gap: "20px" } }, h("div", { key: 'b68b3bbddef43a0c57c5c44ab2ceafb13a975a2c', style: { display: "flex", flexDirection: "column", gap: "20px" } }, h("dga-quote", { key: '7dd2272e35c05601f54828c6bacc101cc37e4a2e', quoteTitle: 'Title of quote', quoteDescription: 'The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.', authorName: "Author's name", authorDescription: 'brief or description.' }), h("dga-quote", { key: '9c2b6ceccf0a5c9bd6aebe7c218f5d21112eaf5f', quoteTitle: 'Title of quote', quoteDescription: 'The quote is placed here to highlight a specific saying or to present a brief quote that expresses an important idea or concept.', authorName: "Author's name", authorDescription: 'brief or description.', whiteBackground: true })), h("div", { key: 'd9bccba901e6ba9cfee4669a6a36e8b51a04ff4a', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
    static get is() { return "dga-quote-usage"; }
    static get states() {
        return {
            "activeStep": {}
        };
    }
}
