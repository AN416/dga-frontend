import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaList$1 = /*@__PURE__*/ proxyCustomElement(class DgaList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.type = 'unordered';
        this.color = 'primary';
        //   @Prop() id: string = guid();
        this.title = "";
        this.items = [];
        this.renderIcon = (type) => {
            if (type === "with-icon") {
                return h("span", { class: "list-icon" }, "\u2713"); // Using checkmark icon for "with-icon" type
            }
            return null;
        };
    }
    render() {
        const Tag = this.type === 'ordered' ? 'ol' : 'ul';
        return (h("div", { key: '8c77ba0b7ad984f146c366cc9651721e13361264', class: `list list--${this.type} list--${this.color}` }, this.title && h("h3", { key: '95b6402dd3f8136cae694cf8693c899f54ceebe1', class: "list-title" }, this.title), h(Tag, { key: '4bd11d52a4fb8919da7728e531c8d7c0dd67c0d5' }, this.items.map((item, index) => (h("li", { key: index, class: "list-item" }, this.type === "with-icon" && this.renderIcon(this.type), item))))));
    }
}, [0, "dga-list", {
        "type": [1],
        "color": [1],
        "title": [1],
        "items": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-list"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaList$1);
            }
            break;
    } });
}

const DgaList = DgaList$1;
const defineCustomElement = defineCustomElement$1;

export { DgaList, defineCustomElement };
