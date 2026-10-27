import { h } from "@stencil/core";
export class DgaNumberInputUsage {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("div", { key: '59bf0214f91b9e4b9e3164831e268f50626675b3' }, h("h1", { key: '5057135b21ac144ac466bae941404e69a09f7d99' }, "Number Input Example"), h("div", { key: '306d8d3063191d0c63184d387a416258f98ca78b', style: { padding: '50px' } }, h("div", { key: 'ad32fcdb720a8cd1cc3e030bb64229455fde5fab', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("dga-number-input", { key: '5c11440d13170f43571c11df938df46df59c6427', size: "lg", variant: "default", label: "Label", value: 0, required: true, helperText: "test" }), h("dga-number-input", { key: '96eff096adb1a83f2b91f48a331220dc1c9ccb6f', size: "lg", variant: "darker", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-number-input", { key: '799ffdffc28a0fe520cafccb50dc63762d808648', size: "lg", variant: "lighter", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-number-input", { key: 'b29fcee888a9d7d61382ffc6b851a591457cedfd', size: "lg", variant: "darker", label: "Label", value: 0, required: true,
            // feedbackIcon
            helperText: "test" }), h("dga-label", { key: '2cf13921d95dd13de4c41753f991461632816252', label: "Mandatory Text Input" }), h("dga-label", { key: '9cf793edaac957222dd1fa287e07010c3d9572a0', label: "Mandatory Text Input", required: true })))));
    }
    static get is() { return "dga-number-input-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
