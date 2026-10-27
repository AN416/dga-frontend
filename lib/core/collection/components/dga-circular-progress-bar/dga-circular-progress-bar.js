import { h } from "@stencil/core";
import { checkmarkCircle02Solid, multiplicationSignCircleSolid } from "@platformscode/icons";
export class DgaCircularProgressBar {
    constructor() {
        this.RTL = false;
        this.size = '64px';
        this.variant = 'primary';
        this.percentage = 0;
        this.sizes = {
            '200px': 200,
            '160px': 160,
            '120px': 120,
            '80px': 80,
            '64px': 64,
        };
        this.iconSizes = {
            '200px': 64,
            '160px': 48,
            '120px': 40,
            '80px': 32,
            '64px': 24,
        };
    }
    render() {
        const strokeWidth = this.sizes[this.size] / 10;
        const radius = (this.sizes[this.size] - strokeWidth) / 2;
        const dashArray = 2 * Math.PI * radius;
        const dashOffset = dashArray * (1 - this.percentage / 100);
        return (h("div", { key: 'a2127cb974652381299b2515470ac70c7a894e69', class: "circular-progress-bar", "aria-size": this.size, dir: this.RTL ? 'rtl' : 'ltr' }, h("div", { key: 'dbbd6d378dcf3fe852d1c4cf0f345993da0d4217', class: "circular-progress-bar__label" }, this.variant === 'success' && h("dga-icon", { key: '4e4ee86c5e2be36c4ab7e87fde74e7d44e1f4883', icon: checkmarkCircle02Solid, size: this.iconSizes[this.size], color: "#067647" }), this.variant === 'error' && h("dga-icon", { key: 'a7897e5504a3b72db7d170687080e5ab6347886b', icon: multiplicationSignCircleSolid, size: this.iconSizes[this.size], color: "#B42318" }), this.variant !== 'success' && this.variant !== 'error' && h("h4", { key: 'ddbd676dc325c49ae922afc881157cfe0880592d', class: "circular-progress-bar__label--percentage" }, this.percentage, "%"), this.text && h("h5", { key: 'cce5b2a3f4c9b903c171a4abeccc0ca128b18f79', class: `circular-progress-bar__label--text ${this.variant}` }, this.text)), h("svg", { key: '34ba8c77d52087064226cc52fea95e553f49da46', width: this.sizes[this.size], height: this.sizes[this.size], viewBox: `0 0 ${this.sizes[this.size]} ${this.sizes[this.size]}` }, h("circle", { key: '6ebae2adfc6b9e9901a09347e53a590815b1e802', class: "track", fill: "none", stroke: "#e6e6e6", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth }), h("circle", { key: 'b671f53ac918ce5f71912feb33f2aad1bab5241f', class: `tail tail--${this.variant}`, fill: "none", stroke: "currentColor", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth, "stroke-linecap": 'round', "stroke-dasharray": dashArray, "stroke-dashoffset": dashOffset, transform: `rotate(-180 ${this.sizes[this.size] / 2} ${this.sizes[this.size] / 2})`, style: {
                transition: 'stroke-dashoffset 0.5s ease',
            } }))));
    }
    static get is() { return "dga-circular-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-circular-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-circular-progress-bar.css"]
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'200px' | '160px' | '120px' | '80px' | '64px'",
                    "resolved": "\"120px\" | \"160px\" | \"200px\" | \"64px\" | \"80px\"",
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
                "defaultValue": "'64px'"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'success' | 'error'",
                    "resolved": "\"error\" | \"neutral\" | \"primary\" | \"success\"",
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
                "defaultValue": "'primary'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
}
