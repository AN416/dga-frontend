import { h } from "@stencil/core";
export class LineSkeleton {
    render() {
        return (h("div", { key: 'f42ef5a4c610f1069e40214d9384ae239636c29b' }, h("dga-line-skeleton", { key: '081e4f476ea7d3524f4a9ab38ed22774dc1ecee5' }), h("dga-circle-skeleton", { key: 'dea01d885a0a1c2a1e375a70e1cf18eeda063ca0' }), h("dga-rectangle-skeleton", { key: '5342522a60e97b8178796a515d3486235dea9750' }), h("dga-square-skeleton", { key: '7766914eaf08c4a7e367031dfb9c5bc07114b539' }), h("dga-skeleton-component", { key: '41d8a06e4d46896f6b14c2e3618483f68772bdfc' })));
    }
    static get is() { return "dga-skeleton-usage"; }
}
