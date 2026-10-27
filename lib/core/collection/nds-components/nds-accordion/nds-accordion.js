import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class NdsAccordion {
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
        return (h(Host, { key: 'bc7a6d7c83c4ad062e65cd43d492de604ed5f5b7', id: this.componentId, style: this.rootStyles }, h("div", { key: 'cdcbc1f0d8de458f517009166aed86bc43b29d5c', class: `dga-accordion-item dga-accordion-item--${this.size} 
          ${this.iconAlignment === 'leading' ? 'dga-accordion-item--icon-leading' : ''}
          ${this.flush ? 'dga-accordion-item--flush' : ''} 
          ${this.disabled ? 'disabled' : ''} ${this.isOpen ? 'active' : ''}` }, h("a", { key: '7c308715863f6face41a45bf617a1e7d8dd1575d', href: "#", onClick: e => this.handleAccordionClick(e), onKeyDown: e => (e.code === 'Space' ? this.handleAccordionClick(e) : null), class: "dga-accordion-item__header" }, this.iconAlignment === 'leading' && (h("div", { key: '68027a208de2258fc731db3f142d4bb65098971b', class: "dga-accordion-item__arrow" }, h("dga-icon-v2", { key: '980d08264b997a5e4ae8c92b9a5e8ced3f4b8762', name: "arrow-down-01", variant: "stroke", size: 16 }))), h("div", { key: 'a6a887bd902f1164de4abe3568b7b523d067aa0d', class: "dga-accordion-item__title" }, h("slot", { key: '1aeb61a4f9c69703e74faf9a0620140382cadce0', name: 'title' }, this.title)), this.iconAlignment === 'trailing' && (h("div", { key: 'ab5176741d11bc7a60d8fca15eda80860d76a6ab', class: "dga-accordion-item__arrow" }, h("dga-icon-v2", { key: 'dfc1a6326f9056ace94a0cd17fe04b847872e73f', name: "arrow-down-01", variant: "stroke", size: 16 })))), h("div", { key: '46b5542e23f7666ed75c31228a8ae986e8aa31db', ref: el => (this.bodyElement = el), class: "dga-accordion-item__body" }, h("slot", { key: '8215fc04cb7956d8fde32134983cb4311da412b0', name: 'content' }, this.content)))));
    }
    static get is() { return "nds-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-accordion.css"]
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
