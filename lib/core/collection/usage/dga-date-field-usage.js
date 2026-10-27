import { h } from "@stencil/core";
export class DgaDateFieldUsage {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("div", { key: '880139077b49e41c5d038d9bdbc04d43b7180c8d' }, h("h1", { key: '7d19d3f5bd3475abe0ca4e6c52af9a2bc0aeecca' }, "Date Field Example"), h("div", { key: 'bbd9a425c230db4290480c7ffd920c73825df780', style: { padding: '50px' } }, h("div", { key: '7504da2dfc0971e6610d9d22068ed9a9a53e2c9c', style: { display: "flex", flexDirection: "column", gap: "16px" } }, h("input", { key: '161827836294a5b910ba5df7069865e54c9acc24', type: "date", value: this.value, onChange: (e) => this.value = e.target.value }), h("dga-date-field", { key: '58b25234de5b01b644c99ca84d19f27b839d7fa0', value: this.value, onChange: (e) => this.value = e.target.value })))));
    }
    static get is() { return "dga-date-field-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
