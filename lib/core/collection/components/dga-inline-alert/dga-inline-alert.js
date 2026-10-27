import { h, Fragment } from "@stencil/core";
import { guid } from "../../utils";
export class DgaInlineAlert {
    constructor() {
        this.type = 'neutral';
        this.isactionButtons = true;
        this.isCloseButton = true;
        this.colored = false;
        this.buttonsList = [];
        this.icons = {
            error: 'help-circle',
            warning: 'alert-02',
            success: 'tick-02',
            info: 'help-circle',
            neutral: 'help-circle',
        };
    }
    render() {
        return (h("div", { key: 'b7cb4e65f9b9c7e963d8abc5f847fd2896a11749', class: `alert alert--${this.type} ${this.colored ? `alert--${this.type}-bg` : ''}` }, h("div", { key: '319623040dcbf2209c524126aa6decbc1938e7eb', class: `alert__header ${this.helperText ? '' : 'dga-flex-center-y'}` }, h("div", { key: '837a902f0f891f4013536984d32b202001447b08', class: `featured-icon featured-icon--circle featured-icon--md featured-icon--light-${this.type === 'neutral' ? 'gray' : this.type}` }, h("dga-icon", { key: 'd182ff0147be8d8d7ce3c0111d9de77d1e9e6349', name: this.icons[this.type], variant: "stroke", size: 20 })), h("div", { key: '8f996157e5857a1490688c99628bb06633e013d8', class: "alert__body" }, h("h4", { key: '3968c03edf738831800c4f564f29248230b2acb4', class: "alert__title text-md-semibold" }, this.leadText), this.helperText && h("p", { key: '49494ab20893f6c2d0a7e7b7bba131376baec607', class: "alert__content text-sm-regular" }, this.helperText)), this.isCloseButton && (h("div", { key: '3bbfbd70712c26fd8de1ee2a94056f3a15528634', class: "alert__close-btn" }, h("button", { key: '2756798c4124c8a3d1c6011b62d6181585c788f3', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: e => this.onClose && this.onClose(e) }, h("span", { key: 'c383def520ebd1223d440b816b5417184eabd1d4', class: "dga-btn-icon" }, h("dga-icon", { key: 'db7797fb7f48249b8332e0adcbe162c20ba4d0fd', name: "multiplication-sign", variant: "stroke", size: 20 })))))), this.isactionButtons && this.buttonsList.length > 0 && (h(Fragment, { key: 'e3eb6dd7470f9a70bd400513d9480f1c8692e5ee' }, h("div", { key: 'd945befb593a02ffe476a1625db8a556ff0c90f3', class: "alert__action" }, this.buttonsList.map(({ id, onClick, exraClasses, title, label }) => {
            return (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--subtle dga-btn--md ${exraClasses}` }, (title && { title: title })), label));
        })), h("div", { key: 'b8a542d8f45b761cce5c43c1c2c8424dfee740b6', class: "alert__action-mobile" }, this.buttonsList.map(({ id, onClick, exraClasses, title, label }) => {
            return (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `btn btn--secondary btn--lg ${exraClasses}` }, (title && { title: title })), label));
        }))))));
    }
    static get is() { return "dga-inline-alert"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-inline-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-inline-alert.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'info' | 'error' | 'success' | 'warning'",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
                "defaultValue": "'neutral'"
            },
            "leadText": {
                "type": "string",
                "attribute": "lead-text",
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
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            "isactionButtons": {
                "type": "boolean",
                "attribute": "isaction-buttons",
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
                "defaultValue": "true"
            },
            "isCloseButton": {
                "type": "boolean",
                "attribute": "is-close-button",
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
            "colored": {
                "type": "boolean",
                "attribute": "colored",
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
            "buttonsList": {
                "type": "unknown",
                "attribute": "buttons-list",
                "mutable": false,
                "complexType": {
                    "original": "{\n    id?: string;\n    label: string;\n    onClick: (event?: any) => void;\n    exraClasses?: string;\n    title?: string;\n  }[]",
                    "resolved": "{ id?: string; label: string; onClick: (event?: any) => void; exraClasses?: string; title?: string; }[]",
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
                "defaultValue": "[]"
            }
        };
    }
}
