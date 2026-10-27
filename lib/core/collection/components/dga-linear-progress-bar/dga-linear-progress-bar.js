import { helpCircleStroke } from "@platformscode/icons";
import { h } from "@stencil/core";
export class DgaLinearProgressBar {
    constructor() {
        this.RTL = false;
        this.percentage = 0;
        this.size = 'small';
        this.progressStyle = 'neutral';
        this.showLabel = true;
        this.showHelperText = true;
        this.error = false;
        this.success = false;
        this.label = 'label';
        this.helperText = 'Help Text';
    }
    render() {
        const sizeMapper = {
            small: 'sm',
            medium: 'md',
            large: 'lg',
        };
        let progressStyle = this.error ? 'error' : this.success ? "success" : this.progressStyle;
        let progressPercentage = this.percentage;
        const icon = {
            neutral: (h("dga-icon", { key: '78d6026f112bd80e6c2b99f2be5ef4f78caedac2', icon: helpCircleStroke, size: 16, color: '#384250' })),
            primary: (h("svg", { key: '9e70dba73911dad3690715901795447fc65232eb', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'eb4a1a819f14fde8d1b097708f85967fdb6d01cc', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334Z", fill: "white" }), h("path", { key: 'f787d69a6c3de2ea558d5c4223abad57d1672c98', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334ZM4.70017 7.41423C4.43982 7.67458 4.43982 8.09669 4.70017 8.35704L6.58578 10.2427C6.84613 10.503 7.26824 10.503 7.52859 10.2427L11.2998 6.47143C11.5602 6.21108 11.5602 5.78897 11.2998 5.52862C11.0395 5.26827 10.6174 5.26827 10.357 5.52862L7.05719 8.82845L5.64297 7.41423C5.38263 7.15388 4.96052 7.15388 4.70017 7.41423Z", fill: "#067647" }))),
            error: (h("svg", { key: 'c33bfd46ee7d6ccc0747115ff588227ce636b995', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'f3639bdd8d4a58093b64e7b2742f65dd40f3e574', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334Z", fill: "white" }), h("path", { key: 'beb6af2075961b8e924d32c163269632a08a1eca', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.3334 8.00002C15.3334 12.0502 12.0502 15.3334 8.00002 15.3334C3.94989 15.3334 0.666687 12.0502 0.666687 8.00002C0.666687 3.94989 3.94989 0.666687 8.00002 0.666687C12.0502 0.666687 15.3334 3.94989 15.3334 8.00002ZM5.80471 4.862C5.54445 4.60158 5.12225 4.60158 4.862 4.862C4.60158 5.12225 4.60158 5.54445 4.862 5.80471L7.05715 8.00002L4.862 10.1953C4.60158 10.4556 4.60158 10.8778 4.862 11.138C5.12225 11.3985 5.54445 11.3985 5.80471 11.138L8.00002 8.94289L10.1953 11.138C10.4556 11.3985 10.8778 11.3985 11.138 11.138C11.3985 10.8778 11.3985 10.4556 11.138 10.1953L8.94289 8.00002L11.138 5.80471C11.3985 5.54445 11.3985 5.12225 11.138 4.862C10.8778 4.60158 10.4556 4.60158 10.1953 4.862L8.00002 7.05715L5.80471 4.862Z", fill: "#B42318" }))),
        };
        return (h("div", { key: '161eb9a4a1b0bea04d5ae742ab69a211e2708aff', class: 'progress-wrapper', style: { direction: this.RTL ? "rtl" : "ltr" } }, this.showLabel && h("h3", { key: '5d80affb94aa0dc700a6da1f4d08d22d243d8568', class: `${sizeMapper[this.size]}` }, this.label), h("div", { key: '2c86413756141cd140f439d8777dd8b0f5195ab7', class: `progress-bar-container ${sizeMapper[this.size]}`, title: `${progressPercentage.toString()}%` }, h("div", { key: '5a4ba5250bd256c2cb5f78add3d02e4749da4112', class: `progress-bar ${progressStyle}`, style: { width: `${progressPercentage}%` } }, this.size === "large" && progressPercentage > 8 && h("span", { key: '9d301102d872632879dc36abbc4d27e6849c9921', class: "progress-bar-text" }, progressPercentage, "%"))), this.showHelperText && (h("div", { key: '596691efaf614a081d6261c58afd33d6e4707aaf', class: "progress-bar__note" }, h("div", { key: '1cf04ce13c23cb9e99129c3dcc59129607099491', class: "icon" }, this.error ? icon["error"] : this.success ? icon["primary"] : icon["neutral"]), h("div", { key: '1e99c404435028238cb5808f9a66073b4e6061c4', class: "content" }, h("p", { key: '6e904b1099c19db42ee30bad5b095569a2f34908', class: `progress-bar-content ${this.success && "success"} ${this.error && "error"} ${sizeMapper[this.size]}` }, this.helperText))))));
    }
    static get is() { return "dga-linear-progress-bar"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-linear-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-linear-progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "RTL": {
                "type": "boolean",
                "attribute": "r-t-l",
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
            "percentage": {
                "type": "number",
                "attribute": "percentage",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
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
                "defaultValue": "'small'"
            },
            "progressStyle": {
                "type": "string",
                "attribute": "progress-style",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'error'",
                    "resolved": "\"error\" | \"neutral\" | \"primary\"",
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
            "showLabel": {
                "type": "boolean",
                "attribute": "show-label",
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
            "showHelperText": {
                "type": "boolean",
                "attribute": "show-helper-text",
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
            "error": {
                "type": "boolean",
                "attribute": "error",
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
            "success": {
                "type": "boolean",
                "attribute": "success",
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
            "label": {
                "type": "string",
                "attribute": "label",
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
                "defaultValue": "'label'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Help Text'"
            }
        };
    }
}
