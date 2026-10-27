'use strict';

var index = require('./index-DuIfHULw.js');
var index$1 = require('./index-BvSPeG4E.js');

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const DgaDataTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.sortData = (sortType = 'up', sortingProperty, index) => {
            if (sortType === 'up') {
                const clonedData = [...this.data.sort((a, b) => (b[sortingProperty] > a[sortingProperty] ? 1 : a[sortingProperty] > b[sortingProperty] ? -1 : 0))];
                this.sortedData = clonedData;
            }
            else if (sortType === 'down') {
                const clonedData = [...this.data.sort((a, b) => (a[sortingProperty] > b[sortingProperty] ? 1 : b[sortingProperty] > a[sortingProperty] ? -1 : 0))];
                this.sortedData = clonedData;
            }
            this.cells[index].sort = sortType == 'down' ? 'up' : 'down';
        };
        this.handleSelectedRowChanges = (checked, index) => {
            const cloneData = [...this.data];
            cloneData[index].selected = checked;
            this.sortedData = cloneData;
            if (this.getSelectedRows) {
                this.getSelectedRows({
                    selectedRows: cloneData.filter(item => item.selected),
                    currentSelectedRow: cloneData[index],
                    currentSelectedRowIndex: index,
                });
            }
        };
        this.selectAll = (checked) => {
            const cloneData = [...this.data];
            cloneData.forEach(item => (item.selected = checked));
            this.sortedData = cloneData;
            if (this.getSelectedRows) {
                this.getSelectedRows({
                    selectedRows: cloneData,
                });
            }
        };
    }
    // Add a watcher for the data prop
    //  @Watch('data')
    //  dataWatcher(newValue: any[]) {
    //    this.initializeData(newValue);
    //  }
    // Initialize data method
    initializeData(data) {
        if (data && data.length > 0) {
            const clonedData = [...data];
            this.sortedData = clonedData;
        }
    }
    buildComponentProps(cell, rowData, rowIndex) {
        const props = {};
        // Add static props
        if (cell.staticProps) {
            Object.assign(props, cell.staticProps);
        }
        // Add row index
        props.rowIndex = rowIndex;
        // Method 1: Using elProperties (simple property list)
        if (cell.elProperties && cell.elProperties.length > 0) {
            cell.elProperties.forEach(prop => {
                if (rowData.hasOwnProperty(prop)) {
                    props[prop] = rowData[prop];
                }
            });
        }
        // Method 2: Using propMapping (custom property mapping)
        if (cell.propMapping) {
            Object.entries(cell.propMapping).forEach(([componentProp, dataProp]) => {
                if (rowData.hasOwnProperty(dataProp)) {
                    props[componentProp] = rowData[dataProp];
                }
            });
        }
        // Method 3: If no specific mapping, pass all row data (fallback)
        if (!cell.elProperties && !cell.propMapping) {
            Object.assign(props, rowData);
        }
        return props;
    }
    // componentDidLoad() {
    //   if (document.dir) {
    //     if (document.dir === 'rtl') this.direction = true;
    //     else this.direction = false;
    //   } else if (document.documentElement.lang) {
    //     if (document.documentElement.lang === 'ar') this.direction = true;
    //     else this.direction = false;
    //   } else this.direction = false;
    // }
    componentWillLoad() {
        // Initialize direction
        if (document.dir) {
            this.direction = document.dir === 'rtl';
        }
        else if (document.documentElement.lang) {
            this.direction = document.documentElement.lang === 'ar';
        }
        else {
            this.direction = false;
        }
        // Initialize data
        this.initializeData(this.data);
    }
    // componentDidUpdate() {
    //   const cloneData = [
    //     ...this.data.map(item => {
    //       item.selected = false;
    //       return item;
    //     }),
    //   ];
    //   this.sortedData = cloneData;
    // }
    //     @Prop() onColor: boolean;
    //     @Prop() size: "sm" | "md" | "lg";
    //     @Prop() items: {
    //         label: React.ReactNode;
    //         content: React.ReactNode;
    //     }[] = [
    //         {
    //             label:"test label",
    //             content:"test content"
    //         },
    //         {
    //             label:"test label",
    //             content:"test content"
    //         },
    //         {
    //             label:"test label",
    //             content:"test content"
    //         }
    //     ];
    //     @State() selected: number = 0;
    //     private handleSelect = (index: number) => {
    //         this.selected = index;
    //     };
    render() {
        console.log(this.sortedData, "this.sortedData");
        return (index.h("div", { key: 'e80673265e68dd90e2f7a217ec62aa1589bbe05e', class: `table-wrapper ${this.contained ? 'table-contained' : ''}` }, index.h("table", { key: '09da6770750d98cad1ee25f000dc3528b9b7b100', class: ` azm-table ${this.contained ? 'table-contained' : ''}`, style: { direction: this.direction ? 'rtl' : 'ltr' } }, index.h("thead", { key: '389496ce11cb58251d499cfb08a8154f40afe762' }, index.h("tr", { key: '495e2fef562e1d62c083f5690305f10db8248d0a', class: `${this.rowDivider ? 'row-divider' : ''}` }, this.showSelectCheckBox && (index.h("th", { key: 'a8fc6849118f357883ac9d868e73482191e853ef', style: { width: '20px' } }, index.h("dga-checkbox", { key: 'fdf35e8fdf097d24bed799ee2dd3c07c78df9b2e', showBorderOnFocusAndFocusOute: false, value: 'true', onChange: (event) => this.selectAll(event.target.checked) }))), this.cells.map((_a, index$2) => {
            var { sort, isSort, propertyName, type } = _a, header = __rest(_a, ["sort", "isSort", "propertyName", "type"]);
            return (index.h("th", { key: index$2 }, index.h("span", null, index.h("span", { class: "text" }, header.title), index.h("span", { class: "icon-wrapper" }, isSort && sort == 'up' && type == 'propertyName' && (index.h("button", { class: "dga-btn dga-btn--sort dga-btn--icon dga-btn--md", onClick: () => this.sortData('up', propertyName, index$2) }, index.h("dga-icon", { icon: index$1.sortByUp02Stroke, size: 16 }))), isSort && (!sort || sort == 'down') && type == 'propertyName' && (index.h("button", { class: "dga-btn dga-btn--sort dga-btn--icon dga-btn--md", onClick: () => this.sortData('down', propertyName, index$2) }, index.h("dga-icon", { icon: index$1.sortByDown02Stroke, size: 16 }))), header.isFilter && (index.h("button", { class: "dga-btn dga-btn--sort dga-btn--icon dga-btn--md ", onClick: () => this.pressOnFilter && this.pressOnFilter(propertyName) }, index.h("dga-icon", { icon: index$1.filterStroke, size: 16 })))))));
        }))), index.h("tbody", { key: 'f048d057dff8d39098db7369dfe6bff21202b354' }, this.sortedData.map((row, rowIndex) => (index.h("tr", { class: `${this.rowDivider ? 'row-divider' : ''} ${this.alternate ? 'alternate' : ''} ${row.selected ? 'row-selected' : ''} `, key: rowIndex }, this.showSelectCheckBox && (index.h("td", null, index.h("dga-checkbox", { name: rowIndex + 'checkboxSelection', value: row.selected, id: rowIndex + 'checkboxSelection', showBorderOnFocusAndFocusOute: false, onChange: event => this.handleSelectedRowChanges(event.target.checked, rowIndex), checked: row.selected }))), this.cells.map((_a, cellIndex) => {
            var { El } = _a, cell = __rest(_a, ["El"]);
            return (index.h("td", { key: cellIndex, colSpan: cell.colSpan ? cell.colSpan : 1 }, cell.type === "element" && El ? (typeof El === 'string' ? (
            // Create element dynamically with props
            index.h(El, this.buildComponentProps(cell, row, rowIndex))) : (index.h(El, Object.assign({}, row)))) : (row[cell.propertyName])));
        }))))))));
    }
};

exports.dga_data_table = DgaDataTable;
