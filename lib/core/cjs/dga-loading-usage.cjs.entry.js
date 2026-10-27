'use strict';

var index = require('./index-DuIfHULw.js');

const DgaLoadingUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.activeStep = 1;
    }
    render() {
        return (index.h("div", { key: 'bb687eec027a7b1825b5c7a7c0de7d446fc6d192' }, index.h("h1", { key: 'cbd68a2575faa167d900a4514b6651713ef2919e' }, "Loading Example"), index.h("div", { key: '6134d21b479c58680362b1ef1bf94cdbae3214e0', style: { padding: "50px", display: "flex", gap: "20px" } }, index.h("div", { key: 'db47bd243ea17843d5beaa6bb0b81d1b0930aa15', style: { display: "flex", flexDirection: "column", gap: "20px" } }, index.h("dga-loading", { key: '7ce17408ee36f5b30f98eb181bc2e7c1365de532' })), index.h("div", { key: 'e9e03e1f95c1f9b29ca182fd9d3b003f03b9c69c', style: { display: "flex", flexDirection: "column", gap: "20px" } }))));
    }
};

exports.dga_loading_usage = DgaLoadingUsage;
