'use strict';

var index = require('./index-DuIfHULw.js');

const DgaTextInputUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = 'Text Input Example';
    }
    render() {
        return (index.h("div", { key: '36d6cfcf6fb629ee6b74c1e72bae38a7d4f6adb4' }, index.h("h1", { key: '92d28a8adc3ccc24b8d5dda793ffeda154375261' }, "Text Input Example"), index.h("div", { key: '6d590a9c7168335df8e9c5daebf35e83e1c0170b', style: { padding: '50px' } }, index.h("div", { key: '1a850519e0bda4f3551858b5e26c9bd3200dec1a', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, index.h("input", { key: '77ee8f84053c4599c61cce4eaa46382afc760b1e', type: "text", value: this.value, onChange: (e) => (this.value = e.target.value) }), index.h("p", { key: 'efcc03926e4b6bc783cf5cc6134a703dc3795526' }, this.value), index.h("dga-text-input", { key: '3b8005e59eb56730b0d26965d1e237e0f4ff9857', readonly: false, variant: "darker", label: "Label", value: this.value, required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true, onInput: (e) => (this.value = e.target.value) }), index.h("dga-text-input", { key: '596864b454783dac5e27cbdd389c619ca86a841b', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }), index.h("dga-text-input", { key: 'ad6a3205781f90c804c28b41f1116d21976408a5', readonly: false, variant: "darker", label: "Label", value: "Entered text", required: true, feedbackIcon: true, icon: { name: 'search-01', variant: 'stroke', type: 'standard' }, helperTextIcon: { name: 'alert-circle', variant: 'stroke', type: 'standard' }, helperText: "test", error: true }, index.h("dga-prefix", { key: 'a878360940fb5384ce9b5d810f84f28fc9a16297', type: "button", variant: "solid",
            // label="Button Label"
            icon: { name: 'search-01' } })), index.h("dga-label", { key: '341a6978553e586661eea52e29c925fe7455f9a0', label: "Mandatory Text Input" }), index.h("dga-label", { key: '317bb208755ffb2bd8eae60dc7bf353085bf04fd', label: "Mandatory Text Input", required: true })))));
    }
};

exports.dga_text_input_usage = DgaTextInputUsage;
