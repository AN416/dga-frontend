import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
import { arrowDown01Stroke } from "@platformscode/icons";
export class DgaAccordion {
    constructor() {
        this.title = '';
        this.content = '';
        this.size = 'lg';
        this.iconAlignment = 'leading';
        this.flush = false;
        this.disabled = false;
        this.defaultExpanded = false;
        this.isOpen = false;
        this.bodyElement = null;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleAccordionClick(e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.isOpen ? this.collapseAccordion() : this.openAccordion();
    }
    openAccordion() {
        this.isOpen = true;
        if (this.bodyElement) {
            this.bodyElement.style.maxHeight = this.bodyElement.scrollHeight + 'px';
        }
    }
    collapseAccordion() {
        this.isOpen = false;
        if (this.bodyElement) {
            this.bodyElement.style.maxHeight = null;
        }
    }
    componentDidRender() {
        if (this.isOpen && this.bodyElement) {
            this.bodyElement.style.maxHeight = this.bodyElement.scrollHeight + 24 + 'px';
        }
        else if (this.bodyElement) {
            this.bodyElement.style.maxHeight = null;
        }
        if (this.defaultExpanded) {
            this.isOpen = this.defaultExpanded;
        }
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string' ? JSON.parse(this.sx) : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '4154beba37e8d510e2f98183dd8aa5266dd10dda', id: this.componentId, style: this.rootStyles }, h("div", { key: 'fbe2094322ca856e0a9b99c510ef1e74bbfffe01', class: `dga-accordion-item dga-accordion-item--${this.size} 
          ${this.iconAlignment === 'leading' ? 'dga-accordion-item--icon-leading' : ''}
          ${this.flush ? 'dga-accordion-item--flush' : ''} 
          ${this.disabled ? 'disabled' : ''} ${this.isOpen ? 'active' : ''}` }, h("a", { key: '1e5542f17ac646e75431f2eb5a23bb28206866e0', href: "#", onClick: e => this.handleAccordionClick(e), onKeyDown: e => (e.code === 'Space' ? this.handleAccordionClick(e) : null), class: "dga-accordion-item__header" }, this.iconAlignment === 'leading' && (h("div", { key: 'cc46690963369c8d930cb62e4078dda658bd329e', class: "dga-accordion-item__arrow" }, h("dga-icon", { key: '60f2c3eb5a5934f765424e01fad8994357db4cce', icon: arrowDown01Stroke, size: 16 }))), h("div", { key: '9973c5762fb652d80a7b9d4b9ce4af6702753441', class: "dga-accordion-item__title" }, this.title), this.iconAlignment === 'trailing' && (h("div", { key: 'b7fd8dd52a488fd39933161d1dc6c863037b27da', class: "dga-accordion-item__arrow" }, h("dga-icon", { key: '03be082b340b578f48af73c909c058b66f464e44', icon: arrowDown01Stroke, size: 16 })))), h("div", { key: '7bb45f0d8c8ea0b216e1523a62db33dc143a321c', ref: el => (this.bodyElement = el), class: "dga-accordion-item__body" }, this.content))));
    }
    static get is() { return "dga-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-accordion.css"]
        };
    }
    static get properties() {
        return {
            "title": {
                "type": "string",
                "attribute": "title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "content": {
                "type": "string",
                "attribute": "content",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'lg'"
            },
            "iconAlignment": {
                "type": "string",
                "attribute": "icon-alignment",
                "mutable": false,
                "complexType": {
                    "original": "'leading' | 'trailing'",
                    "resolved": "\"leading\" | \"trailing\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'leading'"
            },
            "flush": {
                "type": "boolean",
                "attribute": "flush",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "defaultExpanded": {
                "type": "boolean",
                "attribute": "default-expanded",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "CSSProperties & NestedSelector | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-system",
                            "id": "src/utils/sx-system.ts::SxProps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
