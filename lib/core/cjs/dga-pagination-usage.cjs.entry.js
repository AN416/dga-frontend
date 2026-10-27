'use strict';

var index = require('./index-DuIfHULw.js');

const DgaPaginationUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'neutral';
    }
    render() {
        return (index.h("div", { key: 'ce63e8f2453cd03d2c55e8ac32662519815c2ec6' }, index.h("h1", { key: 'fc2edc4e74118fc491f3714b9e0e6f90f28a1602' }, "Pagination Example"), index.h("div", { key: '08d4c40c0037f32e7c2278db12e31f3e0b5c596e', style: { padding: '50px', display: 'flex', gap: '20px' } }, index.h("div", { key: '2208a4afe1be0cb8b29948b56c5b28d10c86271d', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("dga-pagination", { key: '6776ab229e8697eecc4e5a2d943b98f97b4fc45a', totalPageCount: 10, size: 'large', onChange: (page) => console.log(page, "page changed") }), index.h("dga-pagination", { key: '3aca7e396e34be8afca6ad90f198c53003e20d09', totalPageCount: 10, size: 'medium' }), index.h("dga-pagination", { key: '9b3edfdbdc7f29dfec7cfc82a2426a3cf30f355b', dir: "rtl", totalPageCount: 10, size: 'small' })), index.h("div", { key: 'aa2e22973268aca11597f81d5070b15f6d654cca', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

exports.dga_pagination_usage = DgaPaginationUsage;
