import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$b } from './p-DcvmZQlW.js';
import { d as defineCustomElement$a } from './p-CwFPFjba.js';
import { d as defineCustomElement$9 } from './p-Be8NBFfg.js';
import { d as defineCustomElement$8 } from './p-C3TwkwNP.js';
import { d as defineCustomElement$7 } from './p-B_CKQpN8.js';
import { d as defineCustomElement$6 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$5 } from './p-Baww4Hli.js';
import { d as defineCustomElement$4 } from './p-BdC9G5yq.js';
import { d as defineCustomElement$3 } from './p-Bml5Fqkq.js';
import { d as defineCustomElement$2 } from './p-BgOL_zV2.js';

const DgaFilterationUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaFilterationUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.filterBlocks = [
            {
                id: 'status',
                label: 'Status',
                type: 'checkbox',
                options: [
                    { id: 'active', label: 'Active', value: 'active', count: 22 },
                    { id: 'inactive', label: 'Inactive', value: 'inactive', count: 22 },
                    { id: 'pending', label: 'Pending', value: 'pending', count: 22 },
                    { id: 'archived', label: 'Archived', value: 'archived', count: 22 },
                    { id: 'draft', label: 'Draft', value: 'draft', count: 22 },
                    { id: 'published', label: 'Published', value: 'published', count: 22 },
                    { id: 'unpublished', label: 'Unpublished', value: 'unpublished', count: 22 },
                    { id: 'deleted', label: 'Deleted', value: 'deleted', count: 22 },
                    { id: 'restored', label: 'Restored', value: 'restored', count: 22 },
                ],
            },
            {
                id: 'select',
                label: 'Variant',
                type: 'select',
                options: [
                    { id: 'option1', label: 'Option 1', value: 'option1' },
                    { id: 'option2', label: 'Option 2', value: 'option2' },
                    { id: 'option3', label: 'Option 3', value: 'option3' },
                    { id: 'option4', label: 'Option 4', value: 'option4' },
                ],
            },
            {
                id: 'userType',
                label: 'User Type',
                type: 'radio',
                options: [
                    { id: 'admin', label: 'Administrator', value: 'admin' },
                    { id: 'editor', label: 'Editor', value: 'editor' },
                    { id: 'viewer', label: 'Viewer', value: 'viewer' },
                    { id: 'contributor', label: 'Contributor', value: 'contributor' },
                ],
            },
            {
                id: 'categories',
                label: 'Categories',
                type: 'chips',
                options: [
                    { id: 'tech', label: 'Technology', value: 'tech' },
                    { id: 'design', label: 'Design', value: 'design' },
                    { id: 'marketing', label: 'Marketing', value: 'marketing' },
                    { id: 'sales', label: 'Sales', value: 'sales' },
                    { id: 'support', label: 'Support', value: 'support' },
                    { id: 'hr', label: 'HR', value: 'hr' },
                    { id: 'finance', label: 'Finance', value: 'finance' },
                ],
            },
            {
                id: 'rating',
                label: 'Rating',
                type: 'slider',
                min: 20,
                max: 70,
            },
            {
                id: 'price',
                label: 'Price Range',
                type: 'range',
            },
            {
                id: 'dateCreated',
                label: 'Created Date',
                type: 'date',
            },
        ];
        this.handleFilterChange = (event) => {
            const selectedFilters = event.detail;
            console.log('Applied Filters:', selectedFilters);
            selectedFilters.forEach(filter => {
                console.log('Filter:', filter);
            });
        };
        this.initialValue = {
            checkbox: {
                blockId: "status",
                options: [{
                        id: 'active', label: 'Active', value: 'active'
                    }]
            },
            chips: {
                blockId: "categories",
                options: [{ id: 'tech', label: 'Technology', value: 'tech' }, { id: 'design', label: 'Design', value: 'design' },]
            },
            // date:{
            //   blockId:"dateCreated",
            //   options:[{
            //     id: 'active', label: 'Active', value: 'active'
            //   }]
            // },
            radio: {
                blockId: "userType",
                options: [{ id: 'admin', label: 'Administrator', value: 'admin' }]
            },
            range: {
                blockId: "price",
                options: { min: 10, max: 20 }
            },
            select: {
                blockId: "select",
                options: [{ id: 'option1', label: 'Option 1', value: 'option1' }]
            },
            slider: {
                blockId: "rating",
                options: { min: 30, max: 50 }
            },
        };
    }
    render() {
        return (h("div", { key: 'e5b27cb9b86250d0beda439fe994b3ca603b6ea6', class: "filteration-usage" }, h("h2", { key: 'd17446a56b5d3df702aa9ec166ce1a5e343dbae5' }, "Filteration Component Examples"), h("div", { key: '2974e65fbc7bda34c53dffd2cb89fa424b80b6de', class: "filteration-container", style: { margin: '20px 0' } }, h("h3", { key: 'ac36357191c71e8611c89a6447d7c8c4f3aecd54' }, "Default Filteration"), h("dga-filteration", { key: 'b730b151c96bd37588492d18c20ff552166ba17c', buttonLabel: "Filter Items", filterBlocks: this.filterBlocks, onOnFilterChange: this.handleFilterChange, initvalue: this.initialValue }))));
    }
}, [0, "dga-filteration-usage", {
        "filterBlocks": [32],
        "initialValue": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-filteration-usage", "dga-button-v2", "dga-checkbox", "dga-chip", "dga-filteration", "dga-helper-text", "dga-icon", "dga-label", "dga-radio-button", "dga-slider", "dga-text-input"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-filteration-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaFilterationUsage$1);
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "dga-chip":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "dga-filteration":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "dga-helper-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-radio-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-slider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-text-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaFilterationUsage = DgaFilterationUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaFilterationUsage, defineCustomElement };
