import { h } from "@stencil/core";
export class DgaSlideoutMenuHeader {
    constructor() {
        // @Prop() onClose?: () => void;
        this.handleClose = () => {
            // Find parent slideout menu
            const slideoutMenu = this.el.closest('dga-slideout-menu');
            if (slideoutMenu) {
                // Access parent's onClose
                const parentClose = slideoutMenu['onClose'];
                if (typeof parentClose === 'function') {
                    parentClose();
                }
            }
        };
    }
    render() {
        return (
        // <div class="dga-slideout-menu">
        h("div", { key: 'f0ca0a747f4327b5abc00e4fa68f3ce927e979e5', class: "dga-slideout-menu__header" }, h("dga-featured-icon", { key: 'ecf1ea37fa54f66cd2119e6a0675478dfb111aeb', icon: {
                name: 'add-circle',
                variant: 'stroke',
                type: 'standard',
            }, size: 'sm', color: 'brand', variant: 'light' }), h("dga-flex", { key: '76d71effb636bc62618b750ddcbc2f138955d53c', direction: "column", spacing: 4, class: "dga-slideout-menu__header-content" }, h("h3", { key: 'f187a93403c909fb8717d2658e657db3c3d97a07', class: "dga-slideout-menu__header-title" }, this.title), h("p", { key: '4998006659d3454b51d00056001e8fffcd78a7d6', class: "dga-slideout-menu__header-description" }, this.description)), h("dga-button-v2", { key: 'bbf15bfe52adff2430bf758e521e3bf859dac158', iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'multiplication-sign',
                variant: 'stroke',
                type: 'standard',
                color: "#161616"
            }, variant: "transparent", onClick: this.handleClose }))
        // </div>
        );
    }
    static get is() { return "dga-slideout-menu-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu-header.css"]
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
                "reflect": false
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
