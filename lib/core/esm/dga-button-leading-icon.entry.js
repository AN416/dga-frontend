import { r as registerInstance, h, a as getElement } from './index-BLSc18AE.js';

const DgaButtonLeadingIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'bulk';
        this.type = 'rounded';
    }
    render() {
        // Check if there are any child elements
        return (h("span", { key: 'dd4808dcfff3a4a8d0d1741697bbc53b78cfe115', class: "dga-btn-icon dga-btn-icon--leading", "aria-hidden": "true", slot: "leading-icon" }, h("dga-icon", { key: '357872db74147b48df88f4ea90f1ceca8ff52332', name: this.name, size: this.size, color: this.color, variant: this.variant, type: this.type })));
    }
    get el() { return getElement(this); }
};

export { DgaButtonLeadingIcon as dga_button_leading_icon };
