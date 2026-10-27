import { h } from "@stencil/core";
export class DgaHugeIconUsage {
    render() {
        return (h("div", { key: 'a94030f11a758b9c64cb8516599dd4e9ac307327' }, h("h1", { key: '0cc6425c365d2a672b6192a2c4ba95480af391a4' }, "Huge Icon Example"), h("div", { key: '2e59dd1b30c65cb4649bd3540fe0e5b1a14f97bd', style: { padding: "50px", display: "flex", gap: "20px" } }, h("dga-icon-v2", { key: 'c509f245c19fa5e3d22bb5dfa28c1816ea20c6a4', name: "tiktok", color: 'red', variant: 'solid', type: 'sharp', size: 20 }), h("dga-icon", { key: '26db643ca89073e626e225e3ac92bf9d8fb483fd', icon: "tiktok", color: 'red', variant: 'solid', type: 'sharp', size: 20 }))));
    }
    static get is() { return "dga-huge-icon-usage"; }
}
