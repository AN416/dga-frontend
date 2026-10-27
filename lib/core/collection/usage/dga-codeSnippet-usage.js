import { h } from "@stencil/core";
export class DgaChipUsage {
    constructor() {
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
    static get is() { return "dga-codesnippet-usage"; }
}
