import { r as registerInstance, h } from './index-BLSc18AE.js';

const DgaStructuredListUsage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '3adbfaa41a90ff5d1d899f65bfe15f5f316209fb' }, h("h1", { key: '7c238861be64b11db6fbbc9383b1e94e4e0126a2' }, "Structured List Example"), h("div", { key: '624c36c8d07dae2b9d1c875ea1f1e268ed111896', style: { padding: "50px" } }, h("dga-structured-list", { key: 'e0c9ee2680f3ba23d46f65e20a3d0445045fab52', cells: [
                {
                    title: "ID",
                    propertyName: "id",
                    type: "propertyName",
                },
                {
                    title: "Name",
                    propertyName: "name",
                    type: "propertyName",
                },
            ], data: [
                { id: 1, name: "Alice", selected: false },
                { id: 2, name: "Bob", selected: false },
                { id: 3, name: "Charlie", selected: false },
            ], rowDivider: true, colDivider: false, selectable: true, getSelectedRows: selectedRows => console.log(selectedRows) }), h("dga-structured-list", { key: '0c800d7c60ec49b1011cc4d9b94735024d90074c', compact: true, cells: [
                {
                    title: "ID",
                    propertyName: "id",
                    type: "propertyName",
                },
                {
                    title: "Name",
                    propertyName: "name",
                    type: "propertyName",
                },
            ], data: [
                { id: 1, name: "Alice", selected: false },
                { id: 2, name: "Bob", selected: false },
                { id: 3, name: "Charlie", selected: false },
            ], rowDivider: true, selectable: true, getSelectedRows: selectedRows => console.log(selectedRows) }))));
    }
};

export { DgaStructuredListUsage as dga_structured_list_usage };
