'use strict';

var index = require('./index-DuIfHULw.js');

const DgaLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = '';
        this.variant = 'default';
        this.size = 'md';
        this.disabled = false;
        this.required = false;
    }
    render() {
        return (index.h("label", { key: '692ee36b718139de64025241bc4fa8a146566c97', class: `dga-label dga-label--${this.size} ${this.disabled ? "disabled" : ""}` }, this.required && index.h("span", { key: 'e9b496087978459abe4ca6371d34d021e7a499d6', class: "star" }, "*"), this.label));
    }
};

exports.dga_label = DgaLabel;
