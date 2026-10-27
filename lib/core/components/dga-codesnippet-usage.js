import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$6 } from './p-B0xQl3VA.js';
import { d as defineCustomElement$5 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$4 } from './p-Dh90qUSm.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-8N6g0j6Z.js';

const DgaChipUsage = /*@__PURE__*/ proxyCustomElement(class DgaChipUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.snippets = {
            JavaScript: `// Imports
import mongoose, { Schema } from 'untitled'

// Collection name
export const collection = 'Design'|

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default untitled.model(collection, schema, collection)
        `,
            HTML: `<div>
 <h1>Hello, HTML!</h1>
</div>`,
            CSS: `body {
    background-color: lightblue;
  }
    
h1 {
  color: navy;
  margin-left: 20px;
}`,
        };
        this.snippetLine = {
            JavaScript: 'npm install nds-design-system@^0.0.1',
        };
    }
    render() {
        return (h("div", { key: '71508db8dfb490067312f25348bd3d3fc23917bb', style: { width: '743px', display: 'flex', flexDirection: 'column', gap: '123px', margin: "10px" } }, h("dga-codesnippet", { key: '7ca3e0cc53084ebb835c419cfc7380cb2280eb98', showButton: true, type: "multi-line", showSidebar: true, showTabList: true, snippets: this.snippets }), h("dga-codesnippet", { key: 'a33e39434310c7adb922116be5c4883723401546', showButton: false, type: "single", showSidebar: false, showTabList: false, snippets: this.snippetLine })));
    }
}, [0, "dga-codesnippet-usage"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-codesnippet-usage", "dga-button", "dga-button-v2", "dga-codesnippet", "dga-icon", "dga-tabs"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-codesnippet-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaChipUsage);
            }
            break;
        case "dga-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-codesnippet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-tabs":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaCodesnippetUsage = DgaChipUsage;
const defineCustomElement = defineCustomElement$1;

export { DgaCodesnippetUsage, defineCustomElement };
