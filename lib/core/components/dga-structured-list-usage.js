import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-BrT2PObL.js';

const DgaStructuredListUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaStructuredListUsage extends H {
    constructor() {
        super();
        this.__registerHost();
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
}, [0, "dga-structured-list-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-structured-list-usage", "dga-structured-list"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-structured-list-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaStructuredListUsage$1);
            }
            break;
        case "dga-structured-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaStructuredListUsage = DgaStructuredListUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaStructuredListUsage, defineCustomElement };
