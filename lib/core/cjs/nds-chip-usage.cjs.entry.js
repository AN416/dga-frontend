'use strict';

var index = require('./index-DuIfHULw.js');

const NdsChipUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isSelected = false;
    }
    render() {
        return (index.h("div", { key: '63ab3093f5157facd9994877dacc8dee0f8e707e' }, index.h("h1", { key: '29f88ea9b2bc7409e7a32da8deba77f2a1e3bbe7' }, "Chip Example"), index.h("div", { key: 'd091f1b78ae10b24b4df39b10794e4065a1838f3', style: { padding: '50px', display: 'flex', gap: '20px' } }, index.h("div", { key: '02e52c2d731d6f5176a8b3b955c0e478011d7df6', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("nds-chip", { key: 'fbe8adaf879645c9e0774ecc727e0ce88069f9f8', label: "Label", variant: "neutral",
            //   outlined={false}
            rounded: false, size: "lg" }), index.h("nds-chip", { key: 'b99d6ee3db2ddf4b2f1e1f6dd08d097cf3c99631', label: "Label", variant: "success", rounded: false, size: "lg", onChange: isSelected => {
                console.log(isSelected, 'hi');
                this.isSelected = isSelected;
            }, selected: this.isSelected }), index.h("nds-chip", { key: '16f9bc279e1cdf948dd2dd0d1455f8973d1a5581', label: "Label", variant: "success", rounded: false, size: "lg", onChange: isSelected => {
                console.log(isSelected, 'hi');
            }, selected: false }), index.h("nds-chip", { key: 'acf3781c2b9fc3c019722e068a049badc3266daa', label: "Label", variant: "success", rounded: false, size: "lg", disabled: true }), index.h("div", { key: '2286ce1fa350ae63f23086a742c6cbff8deb1949', style: { display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#074D31' } }, index.h("nds-chip", { key: '8ee378b2d0f7bb1a9ff5cefbcc7a047e57dc8819', label: "Label", variant: "on-color", rounded: true, size: "lg", disabled: true }))))));
    }
};

exports.nds_chip_usage = NdsChipUsage;
