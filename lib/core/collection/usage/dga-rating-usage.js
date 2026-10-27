import { h } from "@stencil/core";
export class DgaRatingUsage {
    constructor() {
        this.variant = 'neutral';
        this.rating = 2.5;
    }
    render() {
        return (h("div", { key: 'e1612231c6fdb0b3657ed4fe1453ab1be1696436', dir: "rtl" }, h("h1", { key: '7eab44359184bf5ef1720191bcdb7b2d19e4510e' }, "Rating Example"), h("div", { key: '0607cdd8bdb24b9103ea819a83a7952cd00be82d', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'b2cc22c0b4cbda19bc6d503225e3af42bd1d1061', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("button", { key: '38bf6198212364f82f8bf47ea35f86badb615dfb', onClick: () => (this.rating += 1) }, "Increase ", this.rating), h("dga-rating", { key: 'dc192c8a18ccdf6281e2f60018c020bba354c821', onChange: val => {
                this.rating = val;
            }, value: this.rating, size: "lg" }), h("dga-rating", { key: '7cefcbc8b15cc85e4b79d76a686addbb8368c1ca', onChange: val => (this.rating = val), value: 2.5, size: "md" }), h("dga-rating", { key: '1978e3d58f50f2ac278360dc2f7c30877811b22f', onChange: val => (this.rating = val), value: this.rating, size: "sm" })), h("div", { key: '3535dab435c6550dd7ca561497fb3fb682456b3b', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-rating-usage"; }
    static get states() {
        return {
            "variant": {},
            "rating": {}
        };
    }
}
