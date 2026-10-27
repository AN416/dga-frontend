import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-CwFPFjba.js';
import { d as defineCustomElement$3 } from './p-CD1zYlQX.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const DgaTableUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaTableUsage extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { key: '0e83a4e5b34b7d3bdf2d7a3e2a81345245692d5b' }, h("h1", { key: '84c7be864e7456267721d9872bc163dc580e77d6' }, "Table Example"), h("div", { key: 'aa961e5a91bfd6acb005c51e922b08abcf831067', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'c3197ff1234483d86a915596d368c4a9d0bd0be9', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-data-table", { key: '52db546e9073d679b2f447ec52663cbfee0024e9', columns: [
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
            ] })), h("div", { key: 'da81e5feaa0982e4820892a6c0024bc478343a73', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-table-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-table-usage", "dga-checkbox", "dga-data-table", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-table-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaTableUsage$1);
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-data-table":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaTableUsage = DgaTableUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaTableUsage, defineCustomElement };
