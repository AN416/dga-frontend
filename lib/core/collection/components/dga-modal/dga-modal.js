import { h } from "@stencil/core";
import { guid } from "../../utils";
import { HideModal } from "./util";
export class DgaModal {
    constructor() {
        this.closeButton = true;
        this.secondBtnPosition = 'left';
        this.position = 'center';
        this.open = false;
        this.staticModal = false;
        this.buttonsList = [];
    }
    handleClickOutside(event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.staticModal)
            return;
        HideModal(this.name);
    }
    render() {
        return (h("dialog", Object.assign({ key: 'fbb1f013922bb933fc6e73031595efc480d630de', onClick: e => this.handleClickOutside(e), ref: el => (this.dialogRef = el),
            //   id={name ? name : guid()}
            // style={{ display: this.show ? 'flex' : 'none' }}
            class: `dga-flex-align-${this.position}` }, (this.open && { open: this.open }), { hidden: !this.open }), h("div", { key: '5424acdb6e37b184be949ba472601de3153224b3', class: "modal", ref: el => (this.containergRef = el), onClick: e => e.stopPropagation() }, h("div", { key: '2626fbd950573c430b6b5275b83efd7fa1acedd0', class: "modal__header" }, h("div", { key: '4a6053fd9d9ecf083ef659049d6318bc3c9f26cf', class: "modal__icon", style: this.alignmentCenter ? { justifyContent: 'center', width: '100%', display: 'flex' } : {} }, h("dga-featured-icon", Object.assign({ key: 'dfce9bbbbfbe2e5efada2cf05172d54a4a4dfaed' }, this.featuredIconProps))), this.closeButton && (h("div", { key: '0d60145893fb8e0b2be463d8715dceabb9c3362a', class: "modal__close" }, h("dga-button-v2", { key: '1d883233fa7e3da224302a0414dd9630d74f909a', size: 'md', iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'multiplication-sign',
                variant: 'stroke',
                color: "#161616",
                type: 'rounded'
            }, onClick: this.onClose, variant: 'subtle' })))), h("div", { key: '20004f5abdd88d965a7eff4b3c5ca1126b6ffba0', class: "modal__body" }, this.modalTitle && (h("h4", { key: '864d13665ed2246b8c8134bd9aa2387da73f0eb9', class: "modal__heading", style: this.alignmentCenter ? { textAlign: 'center', width: '100%' } : {} }, this.modalTitle)), h("slot", { key: '120011a5b1adc4ddd6de3d61722a811ae64871ae' })), h("div", { key: '574bf844c099b4de42485acef7007bf6ce8169d5', class: "modal__actions", style: Object.assign(Object.assign({ display: 'flex', width: '100%', justifyContent: this.alignmentCenter ? 'center' : this.buttonsList.length > 2 ? 'flex-start' : 'space-between' }, (!this.alignmentCenter &&
                this.buttonsList.length == 2 && {
                justifyContent: this.secondBtnPosition == 'left' ? 'flex-start' : 'space-between',
            })), { flexDirection: this.actionStack ? 'column' : 'row' }) }, this.buttonsList.length > 0 &&
            this.buttonsList.slice(0, this.buttonsList.length > 3 ? 3 : this.buttonsList.length).map((button, index) => {
                return (h("button", Object.assign({ style: Object.assign(Object.assign({}, (this.actionFillContainer && { width: '100%' })), (index == 2 &&
                        !this.alignmentCenter && {
                        marginLeft: 'auto',
                    })), key: button.id ? button.id : guid(), id: button.id ? button.id : guid(), onClick: e => button.onClick(e), class: `modal__actions-btn dga-btn  dga-btn--md ${index == 0 ? 'dga-btn--primary-neutral' : this.actionStack && index == 2 ? 'dga-btn--subtle' : 'dga-btn--secondary-outline'} ${button.extraClass} ` }, (button.title && { title: button.title })), button.label));
            })))));
    }
    static get is() { return "dga-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-modal.css"]
        };
    }
    static get properties() {
        return {
            "modalTitle": {
                "type": "string",
                "attribute": "title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
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
            },
            "closeButton": {
                "type": "boolean",
                "attribute": "close-button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "onClose": {
                "type": "unknown",
                "attribute": "on-close",
                "mutable": false,
                "complexType": {
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "featuredIconProps": {
                "type": "unknown",
                "attribute": "featured-icon-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n    size: 'sm' | 'md' | 'lg' | 'xl';\n    color: 'brand' | 'gray' | 'error' | 'warning' | 'success' | 'info';\n    variant: 'light' | 'dark' | 'outlined';\n    circle?: boolean;\n    icon: Icon;\n  }",
                    "resolved": "{ size: \"lg\" | \"md\" | \"sm\" | \"xl\"; color: \"info\" | \"error\" | \"success\" | \"gray\" | \"brand\" | \"warning\"; variant: \"light\" | \"dark\" | \"outlined\"; circle?: boolean; icon: Icon; }",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false
            },
            "alignmentCenter": {
                "type": "boolean",
                "attribute": "alignment-center",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
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
            },
            "actionFillContainer": {
                "type": "boolean",
                "attribute": "action-fill-container",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
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
            },
            "actionStack": {
                "type": "boolean",
                "attribute": "action-stack",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
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
            },
            "secondBtnPosition": {
                "type": "string",
                "attribute": "second-btn-position",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'end' | 'center'",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "staticModal": {
                "type": "boolean",
                "attribute": "static-modal",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "buttonsList": {
                "type": "unknown",
                "attribute": "buttons-list",
                "mutable": false,
                "complexType": {
                    "original": "Array<{\n    id?: string;\n    label: string;\n    onClick: (event?: any) => void;\n    extraClass?: string;\n    title?: string;\n  }>",
                    "resolved": "{ id?: string; label: string; onClick: (event?: any) => void; extraClass?: string; title?: string; }[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
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
                "defaultValue": "[]"
            }
        };
    }
}
