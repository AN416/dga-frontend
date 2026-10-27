import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaTable$1 = /*@__PURE__*/ proxyCustomElement(class DgaTable extends H {
    constructor() {
        super();
        this.__registerHost();
        this.data = [
            {
                selected: true,
            },
            {
                selected: true,
            },
        ];
        this.rowDivider = true;
        this.showSelectCheckBox = true;
        this.alternate = true;
        this.cells = [
            {
                propertyName: 'test',
                isFilter: false,
                isSort: false,
                title: 'Test',
                type: 'propertyName',
                colSpan: 1,
            },
            {
                propertyName: 'test',
                isFilter: false,
                isSort: false,
                title: 'Test',
                type: 'propertyName',
                colSpan: 1,
            },
        ];
        this.contained = true;
        this.sortedData = [];
        this.direction = false;
    }
    // private sortData = (sortType: 'up' | 'down' = 'up', sortingProperty: string, index: number) => {
    //   if (sortType === 'up') {
    //     const clonedData = [...this.data.sort((a, b) => (b[sortingProperty] > a[sortingProperty] ? 1 : a[sortingProperty] > b[sortingProperty] ? -1 : 0))];
    //     this.sortedData = clonedData;
    //   } else if (sortType === 'down') {
    //     const clonedData = [...this.data.sort((a, b) => (a[sortingProperty] > b[sortingProperty] ? 1 : b[sortingProperty] > a[sortingProperty] ? -1 : 0))];
    //     this.sortedData = clonedData;
    //   }
    //   this.cells[index].sort = sortType == 'down' ? 'up' : 'down';
    // };
    // private handleSelectedRowChanges = (checked: boolean, index: number) => {
    //   const cloneData = [...this.data];
    //   cloneData[index].selected = checked;
    //   this.sortedData = cloneData;
    //   if (this.getSelectedRows) {
    //     this.getSelectedRows({
    //       selectedRows: cloneData.filter(item => item.selected),
    //       currentSelectedRow: cloneData[index],
    //       currentSelectedRowIndex: index,
    //     });
    //   }
    // };
    // private selectAll = (checked: boolean) => {
    //   const cloneData = [...this.data];
    //   cloneData.forEach(item => (item.selected = checked));
    //   this.sortedData = cloneData;
    //   if (this.getSelectedRows) {
    //     this.getSelectedRows({
    //       selectedRows: cloneData,
    //     });
    //   }
    // };
    componentDidLoad() {
        if (document.dir) {
            if (document.dir === 'rtl')
                this.direction = true;
            else
                this.direction = false;
        }
        else if (document.documentElement.lang) {
            if (document.documentElement.lang === 'ar')
                this.direction = true;
            else
                this.direction = false;
        }
        else
            this.direction = false;
    }
    componentDidUpdate() {
        const cloneData = [
            ...this.data.map(item => {
                item.selected = false;
                return item;
            }),
        ];
        this.sortedData = cloneData;
    }
    render() {
        return (h("div", { key: '9ca8290b89d1ed34e3e0e6b46d72706eb4f3a449', class: `table-wrapper ${this.contained ? 'table-contained' : ''}` }, h("table", { key: '2ea9b4d7e3924c8557d6cfdff2f178b7c53af7b9', class: ` azm-table ${this.contained ? 'table-contained' : ''}`, style: { direction: this.direction ? 'rtl' : 'ltr' } }, h("slot", { key: 'b68d4d24e96676ef9d9231013beeb3a73dd61d7e' }))));
    }
}, [4, "dga-table", {
        "data": [16],
        "rowDivider": [4, "row-divider"],
        "showSelectCheckBox": [4, "show-select-check-box"],
        "alternate": [4],
        "cells": [16],
        "contained": [4],
        "getSelectedRows": [8, "get-selected-rows"],
        "pressOnFilter": [8, "press-on-filter"],
        "sortedData": [32],
        "direction": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-table"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaTable$1);
            }
            break;
    } });
}

const DgaTable = DgaTable$1;
const defineCustomElement = defineCustomElement$1;

export { DgaTable, defineCustomElement };
