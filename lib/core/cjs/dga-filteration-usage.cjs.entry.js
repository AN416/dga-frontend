'use strict';

var index = require('./index-DuIfHULw.js');

const DgaFilterationUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: 'e5b27cb9b86250d0beda439fe994b3ca603b6ea6', class: "filteration-usage" }, index.h("h2", { key: 'd17446a56b5d3df702aa9ec166ce1a5e343dbae5' }, "Filteration Component Examples"), index.h("div", { key: '2974e65fbc7bda34c53dffd2cb89fa424b80b6de', class: "filteration-container", style: { margin: '20px 0' } }, index.h("h3", { key: 'ac36357191c71e8611c89a6447d7c8c4f3aecd54' }, "Default Filteration"), index.h("dga-filteration", { key: 'b730b151c96bd37588492d18c20ff552166ba17c', buttonLabel: "Filter Items", filterBlocks: this.filterBlocks, onOnFilterChange: this.handleFilterChange, initvalue: this.initialValue }))));
    }
};

exports.dga_filteration_usage = DgaFilterationUsage;
