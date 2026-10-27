'use strict';

var index = require('./index-DuIfHULw.js');

const DgaButtonLeadingIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    render() {
        // Check if there are any child elements
        return (index.h("span", { key: 'dd4808dcfff3a4a8d0d1741697bbc53b78cfe115', class: "dga-btn-icon dga-btn-icon--leading", "aria-hidden": "true", slot: "leading-icon" }, index.h("dga-icon", { key: '357872db74147b48df88f4ea90f1ceca8ff52332', name: this.name, size: this.size, color: this.color, variant: this.variant, type: this.type })));
    }
    get el() { return index.getElement(this); }
};

exports.dga_button_leading_icon = DgaButtonLeadingIcon;
