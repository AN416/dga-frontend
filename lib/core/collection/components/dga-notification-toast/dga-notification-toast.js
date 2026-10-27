import { h, Fragment } from "@stencil/core";
import { guid } from "../../utils";
export class DgaNotificationToast {
    constructor() {
        this.type = 'neutral'; // Default to "neutral" if not provided
        this.hasHelperText = false; // Default to false if not provided
        this.vPostion = 'top';
        this.hPostion = 'right';
        this.buttonsList = [];
        this.open = true;
        this.icons = {
            success: {
                name: 'checkmark-circle-02',
                variant: 'stroke',
                type: 'rounded',
            },
            info: {
                name: 'information-circle',
                variant: 'stroke',
                type: 'rounded',
            },
            neutral: {
                name: 'information-circle',
                variant: 'stroke',
                type: 'rounded',
            },
            warning: {
                name: 'alert-02',
                variant: 'stroke',
                type: 'rounded',
            },
            error: {
                name: 'alert-circle',
                variant: 'stroke',
                type: 'rounded',
            },
        };
    }
    render() {
        return (h("div", { key: '065bec7ad58c746dd57d466f50338fe0b17d0053', class: `notification-toast notification-toast--${this.type} dga-vpostion-${this.vPostion} dga-hpostion-${this.hPostion} ${this.open ? 'active' : ''}` }, h("div", { key: '5e804fba0bbe18b6ac2630293f951f3b79a20f47', class: `notification-toast__header ${this.hasHelperText ? '' : 'dga-flex-center-y'}` }, h("dga-featured-icon", { key: 'cb2fa0b6b61ba6c9d351ef1c0ed2ce4754277684', icon: Object.assign(Object.assign({}, this.icons[this.type]), { size: 20 }), color: this.type, size: "lg" }), h("div", { key: '08d3dba69bc7ef73e623fa662134fb7902358446', class: "notification-toast__body" }, h("h4", { key: '805c3af5fdf7daa6a778abab6425320c94682d12', class: "notification-toast__title text-md-semibold" }, this.leadText), this.hasHelperText && this.helperText && h("p", { key: '8df6df7249f676ff5a349e89d32982739d55ab19', class: "notification-toast__content text-sm-regular" }, this.helperText)), this.closeButton && (h("div", { key: 'de60eccf6e2b7bf2c60c57006a00a8f2333ca9f1', class: "notification-toast__close-btn" }, h("button", { key: '64ee45014cd49b6696d4ad53c070f3b7290cc9c7', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: e => { var _a; return (_a = this.onClose) === null || _a === void 0 ? void 0 : _a.call(this, e); } }, h("span", { key: 'e65cd4bbbf4d05c816d6ed5ab07232e83a0db819', class: "dga-btn-icon" }, h("dga-icon", { key: 'e19381e191d8d61ae4c3d4487963db88c5779628', name: "multiplication-sign", variant: "stroke", type: "sharp", size: 20 })))))), this.action && (h(Fragment, { key: 'd1770326f90c6523a6408775038549542f24c066' }, h("div", { key: 'f1190a59de913f6b9596aab2a1580a3d10ed3254', class: "notification-toast__action" }, this.buttonsList.length > 0 &&
            this.buttonsList.map(({ id, onClick, extraClasses, title, label }) => (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--subtle dga-btn--md ${extraClasses}` }, (title && { title: title })), label)))), h("div", { key: 'b10da11a964df2547877d129d8ebff6d9b24c4c3', class: "notification-toast__action-mobile" }, this.buttonsList.length > 0 &&
            this.buttonsList.map(({ id, onClick, extraClasses, title, label }) => (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--secondary dga-btn--lg ${extraClasses}` }, (title && { title: title })), label))))))));
    }
    static get is() { return "dga-notification-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-notification-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-notification-toast.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'warning' | 'success' | 'info' | 'neutral'",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasHelperText": {
                "type": "boolean",
                "attribute": "has-helper-text",
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
            "action": {
                "type": "boolean",
                "attribute": "action",
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
                "reflect": false
            },
            "vPostion": {
                "type": "string",
                "attribute": "v-postion",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom'",
                    "resolved": "\"bottom\" | \"top\"",
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
                "defaultValue": "'top'"
            },
            "hPostion": {
                "type": "string",
                "attribute": "h-postion",
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
                "defaultValue": "'right'"
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
            "buttonsList": {
                "type": "unknown",
                "attribute": "buttons-list",
                "mutable": false,
                "complexType": {
                    "original": "{\n    id?: string;\n    label: string;\n    onClick: (event?: any) => void;\n    extraClasses?: string;\n    title?: string;\n  }[]",
                    "resolved": "{ id?: string; label: string; onClick: (event?: any) => void; extraClasses?: string; title?: string; }[]",
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
                "defaultValue": "[]"
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
                "defaultValue": "true"
            }
        };
    }
}
