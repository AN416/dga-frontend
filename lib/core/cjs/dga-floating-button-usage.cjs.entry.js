'use strict';

var index = require('./index-DuIfHULw.js');

const DgaButtonUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'ece24a1e44f579e141d33235b85d7e59e77cd667', style: {
                margin: "10px"
            } }, index.h("floating-button", { key: '33004737190fb80be82b5a31c12c5dfc66c7dd92', variant: "secondary-solid" }), index.h("div", { key: '6af7e8b066aa63de7c8279bd95e20a9c5d9bdf1c', style: {
                marginTop: "10px",
            } }, index.h("floating-button", { key: '22df7a63273349cfd76385a9e96f90306ac1442f', variant: "primary-neutral", iconOnly: true }))));
    }
};

exports.dga_floating_button_usage = DgaButtonUsage;
