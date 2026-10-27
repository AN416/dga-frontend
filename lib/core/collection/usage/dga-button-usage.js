import { h } from "@stencil/core";
export class DgaButtonUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '36feb38cf978ae8ecc8c8713618ef745641c6ab9' }, h("h1", { key: 'd6b3fd4a63f9b1813c5d9bc0a6e53cde751207e7' }, "Button Example"), h("div", { key: 'dfe331f83aba64614af31db6b2937845a449c61b', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '6091b32f210ab162a3c64f8471cd74a4a519b928', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-button", { key: '5de97372b36c33a077e0c526f8d8e9af4646fc46', label: "Click me", variant: "primary-brand", sx: {
                '&': {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
                '.dga-btn': {
                    backgroundColor: { xs: 'red', sm: 'blue', md: 'green' },
                    // backgroundColor: 'yellow',
                    color: { xs: 'black', sm: 'yellow', md: 'white' },
                },
                '.dga-btn:hover': {
                    backgroundColor: 'blue',
                },
            } }), h("dga-button", { key: '1a9b95cf741013dfcaae003664d8cbc55ac7eabd', label: "Brown Button", variant: "primary-neutral" }), h("dga-button", { key: '5d38fef4a44bf62236c2af8d2c5a70cf4e06d315', label: "Button", variant: "des-transparent" }), h("dga-button", { key: 'c21d5047170fc2624ca73809f0d75cc3eeddb12e', label: "Source code", variant: "secondary-outline", leadIcon: true, leadIconType: "source-code", leadIconProps: { variant: 'stroke', type: 'standard' } }), h("dga-button", { key: 'a963ad5d291a89e84af1cf1b4d8f47a1ba98551f',
            // className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            label: "See live preview", size: "lg", variant: "secondary-outline", trailIcon: true, trailIconType: "link-square-01", trailIconProps: {
                variant: 'stroke',
                type: 'standard',
            } })), h("div", { key: '120c41b3d7d72d732a8db890e257330c0676235f', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-button-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
