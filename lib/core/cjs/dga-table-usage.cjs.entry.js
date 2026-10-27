'use strict';

var index = require('./index-DuIfHULw.js');

const DgaTableUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: '0e83a4e5b34b7d3bdf2d7a3e2a81345245692d5b' }, index.h("h1", { key: '84c7be864e7456267721d9872bc163dc580e77d6' }, "Table Example"), index.h("div", { key: 'aa961e5a91bfd6acb005c51e922b08abcf831067', style: { padding: '50px', display: 'flex', gap: '20px' } }, index.h("div", { key: 'c3197ff1234483d86a915596d368c4a9d0bd0be9', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("dga-data-table", { key: '52db546e9073d679b2f447ec52663cbfee0024e9', columns: [
                {
                    label: 'Header',
                },
            ], cells: [
                {
                    title: 'city',
                    sort: 'up',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'city',
                    colSpan: 1, // Set colSpan to 1 (default is 1)
                },
                {
                    title: 'price',
                    sort: 'down',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'price',
                    colSpan: 1,
                },
                {
                    title: 'state',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'state',
                    colSpan: 1,
                },
            ], data: [
                {
                    h_id: '3',
                    city: 'Dallas',
                    state: 'TX',
                    zip: '75201',
                    price: '162500',
                    selected: false, // Add selected property for checkbox functionality
                },
                {
                    h_id: '4',
                    city: 'Bevery Hills',
                    state: 'CA',
                    zip: '90210',
                    price: '319250',
                    selected: false,
                },
                {
                    h_id: '5',
                    city: 'New York',
                    state: 'NY',
                    zip: '00010',
                    price: '962500',
                    selected: false,
                },
            ] })), index.h("div", { key: 'da81e5feaa0982e4820892a6c0024bc478343a73', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

exports.dga_table_usage = DgaTableUsage;
