import { h } from "@stencil/core";
export class DgaSwitchUsage {
    render() {
        return (h("div", { key: '6074d83fe0199f37e131ca59b35af00a706e2571', style: { padding: '50px', display: 'flex', gap: '50px' } }, h("div", { key: '36be7a3fdffcda6075e635d619ad978062795e1e' }, h("h1", { key: '8cd3df84dff34e21680e704f97de9fdb42130e47' }, "Switch Example"), h("dga-switch", { key: 'f41bf31a44253516e07cadfa6cea40051fe6e706',
            // label="Switch Label"
            checked: true }))));
    }
    static get is() { return "dga-switch-usage"; }
}
