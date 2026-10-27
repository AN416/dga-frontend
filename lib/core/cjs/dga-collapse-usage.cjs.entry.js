'use strict';

var index = require('./index-DuIfHULw.js');

const DgaCollapseUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'neutral';
        this.open = false;
    }
    render() {
        return (index.h("div", { key: '2ee3612aaca78d39f0509089455b256ed86616da' }, index.h("h1", { key: 'e632757f4ede5bd38c71491618943735941a95be' }, "Collapse Example"), index.h("div", { key: '5ac52a77124fa68aa5e7f59b400f40d842650600', style: { padding: '50px', display: 'flex', gap: '20px' } }, index.h("div", { key: 'b1d8a410b9726247c0dbd6670dc3fb315398e5f5', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("div", { key: 'a934695dff9b9f689b539dc9cdda8e7c2e40dc67', style: { display: "flex", justifyContent: "center" } }, index.h("button", { key: '1d854b80ec52f66bdeefd3eabd5cc18732914ffa', onClick: () => this.open = true }, "open"), index.h("button", { key: 'ca6b919dd74e1e5733b06d2a0c31387dec6a5b1e', onClick: () => this.open = false }, "close"))), index.h("dga-collapse", { key: '9b055bf2339e697e5fb8fad6386989502bfcadee', open: this.open, "transition-duration": "0.1s" }, index.h("div", { key: 'f24c79aff41ba4c44e52124b297a2451db464b48' }, "Your content here")), index.h("div", { key: '0807156df64bb7a775e16adc549d719d249adb67', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

exports.dga_collapse_usage = DgaCollapseUsage;
