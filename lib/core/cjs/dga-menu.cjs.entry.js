'use strict';

var index = require('./index-DuIfHULw.js');

const DgaMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.anchorEl = null;
        this.open = false;
        this.onClose = () => { };
        // Method to detect outside click
        this.handleClickOutside = (event) => {
            if (this.anchorEl && !this.anchorEl.contains(event.target)) {
                this.onClose();
            }
        };
    }
    componentDidLoad() {
        // Add event listener to handle clicks outside the menu
        document.addEventListener('click', this.handleClickOutside);
    }
    disconnectedCallback() {
        // Cleanup event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    }
    getMenuStyle() {
        var _a;
        const rect = (_a = this.anchorEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            position: 'absolute',
            top: `${(rect === null || rect === void 0 ? void 0 : rect.bottom) + window.scrollY}px`,
            left: `${(rect === null || rect === void 0 ? void 0 : rect.left) + window.scrollX}px`,
            zIndex: '1000',
        };
    }
    render() {
        return (index.h(index.Fragment, { key: '7be8e401d4a5ff14f7afbf0147781b69de2dce42' }, this.open && this.anchorEl && (index.h("ul", { key: '90d0d2f33b6a5ac6dc3c5470d697cdda5d6c4aff', class: "menu", style: this.getMenuStyle() }, index.h("slot", { key: '6b0090edbff7518991b2f2af3e87d8715301713a' })))));
    }
};

exports.dga_menu = DgaMenu;
