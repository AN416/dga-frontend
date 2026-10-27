import { h } from "@stencil/core";
import { HideModal } from "./util";
export class DgaModal {
    constructor() {
        this.showCloseButton = true;
        this.featuredIconStyle = 'light';
        this.featuredIconType = 'InformationCircle';
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
    componentWillLoad() {
        this.el.childNodes.forEach(item => {
            const el = item;
            if (el.tagName === 'DGA-MODAL-HEADER' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'modal-header');
            }
            if (el.tagName === 'DGA-MODAL-BODY' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'modal-body');
            }
            if (el.tagName === 'DGA-MODAL-ACTIONS' && el.attributes.getNamedItem('slot') === null) {
                el.setAttribute('slot', 'modal-actions');
            }
        });
    }
    render() {
        return (h("dialog", Object.assign({ key: 'cf3c563eb232f2d3e55ceca0fced2bcc6ade00c4', onClick: e => this.handleClickOutside(e), ref: el => (this.dialogRef = el), class: `dga-flex-align-${this.position}` }, (this.open && { open: this.open }), { hidden: !this.open }), h("div", { key: '520d0b9f6d7aba63e37c8ad61464a5bf09c0f0c9', class: "modal", ref: el => (this.containergRef = el), onClick: e => e.stopPropagation() }, this.showCloseButton && (h("div", { key: '1ea0c1290b19f6d219ed67ba6dad89004602489e', class: "modal__close-btn" }, h("dga-button-v2", { key: '545fbcc88e93dec696790db0b5a3d7d970b9ccb2', size: "md", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'Cancel01Icon',
                variant: 'stroke',
                color: '#161616',
                type: 'rounded',
            }, onClick: this.onClose, variant: "subtle" }))), h("slot", { key: '409b5cfb98bcc7273800aeaef4c966e6dc40ddb0', name: "modal-header" }), h("slot", { key: '6f9660f38bb8d5a927ff57453989b95c9cd6df1f', name: "modal-body" }), h("slot", { key: '295e4828c1cc587aa34af53dc9365a7dc105dc80', name: "modal-actions" }))));
    }
    static get is() { return "dga-modal-v2"; }
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
            "showCloseButton": {
                "type": "boolean",
                "attribute": "show-close-button",
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
            "featuredIconColor": {
                "type": "string",
                "attribute": "featured-icon-color",
                "mutable": false,
                "complexType": {
                    "original": "'brand' | 'gray' | 'error' | 'warning' | 'success' | 'info'",
                    "resolved": "\"brand\" | \"error\" | \"gray\" | \"info\" | \"success\" | \"warning\"",
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
            "featuredIconStyle": {
                "type": "string",
                "attribute": "featured-icon-style",
                "mutable": false,
                "complexType": {
                    "original": "'light' | 'outlined' | 'dark'",
                    "resolved": "\"dark\" | \"light\" | \"outlined\"",
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
                "defaultValue": "'light'"
            },
            "featuredIconType": {
                "type": "string",
                "attribute": "featured-icon-type",
                "mutable": false,
                "complexType": {
                    "original": "'InformationCircle' | 'AlertCircle'",
                    "resolved": "\"AlertCircle\" | \"InformationCircle\"",
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
                "defaultValue": "'InformationCircle'"
            },
            "featuredIconCircle": {
                "type": "boolean",
                "attribute": "featured-icon-circle",
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
            "featuredIconSize": {
                "type": "string",
                "attribute": "featured-icon-size",
                "mutable": false,
                "complexType": {
                    "original": "'xl' | 'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\"",
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
    static get elementRef() { return "el"; }
}
