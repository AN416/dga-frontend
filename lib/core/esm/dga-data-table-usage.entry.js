import { r as registerInstance, h } from './index-BLSc18AE.js';

const DgaDateFieldUsage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = '';
    }
    render() {
        return (h("div", { key: 'c7cb60800f522860957ae4cc8674705d57be9f73' }, h("h1", { key: '5059ae1fc980d4a90da5b810e8a4852a4540e183' }, "Date Field Example"), h("div", { key: '226f9f4cae021a7a4e45863fda58fdf4f30020e7', style: { padding: '50px' } }, h("div", { key: '9e30b1f97ba4d8b110b825a10429edad4bd888d3', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("dga-data-table", { key: '437ee01120e0e1f4faaa04447f59a98e8a6dec2d', cells: [
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'city',
                    sort: 'up',
                    title: 'city',
                    type: 'propertyName',
                },
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'price',
                    sort: 'down',
                    title: 'price',
                    type: 'propertyName',
                },
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'state',
                    title: 'state',
                    type: 'element', // <-- change this
                    El: row => h("dga-button", { label: row.state }, console.log(row, 'roooooow')), // <-- use a functional component
                },
            ], contained: true, data: [
                {
                    city: 'Dallas',
                    h_id: '3',
                    price: '162500',
                    selected: false,
                    state: 'TX',
                    zip: '75201',
                },
                {
                    city: 'Bevery Hills',
                    h_id: '4',
                    price: '319250',
                    selected: false,
                    state: 'CA',
                    zip: '90210',
                },
                {
                    city: 'New York',
                    h_id: '5',
                    price: '962500',
                    selected: false,
                    state: 'NY',
                    zip: '00010',
                },
            ], getSelectedRows: function vu() { }, pressOnFilter: function vu() { }, rowDivider: true, showSelectCheckBox: true })))));
    }
};

export { DgaDateFieldUsage as dga_data_table_usage };
