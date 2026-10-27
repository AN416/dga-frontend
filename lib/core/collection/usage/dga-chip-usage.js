import { h } from "@stencil/core";
export class DgaChipUsage {
    constructor() {
        this.isSelected = false;
    }
    render() {
        return (h("div", { key: 'a0d645a31173ec8e5e7b5536f421618324f58a67' }, h("h1", { key: '448ac280d46084ca4aba1ef4622a575389d15244' }, "Chip Example"), h("div", { key: '6851fa35ac3cc9e65b3266b92bbac94cd2a75825', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '02667007d4f4d0eff1f5a3b2323c12a235a90135', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-chip", { key: '1e5e2133373bacf43afb384572276d99835ccb56', label: "Label", variant: "neutral",
            //   outlined={false}
            rounded: false, size: "lg" }), h("dga-chip", { key: 'ba3d35931c4b4c93e4a356508a0bcdc546340e76', label: "Label", variant: "success", rounded: false, size: "lg", onChange: (isSelected) => {
                console.log(isSelected, "hi");
                this.isSelected = isSelected;
            }, isSelected: this.isSelected }), h("dga-chip", { key: '208f1857fb42ec91d5bcad953938229d4434885d', label: "Label", variant: "success", rounded: false, size: "lg", onChange: (isSelected) => {
                console.log(isSelected, "hi");
            }, isSelected: false }), h("dga-chip", { key: '9d4e1dddf7c9146cd4d39c505861f6306bf9330d', label: "Label", variant: "success", rounded: false, size: "lg", disabled: true }), h("div", { key: '41cde5f505d1607786a5b956200578f7c18f2266', style: { display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#074D31' } }, h("dga-chip", { key: 'eefa6fe126ab41bc219bb871367786c1a3a47893', label: "Label", variant: "on-color", rounded: true, size: "lg", disabled: true }))))));
    }
    static get is() { return "dga-chip-usage"; }
    static get states() {
        return {
            "isSelected": {}
        };
    }
}
