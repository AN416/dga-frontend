import { h, Host } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
import { helpCircleStroke } from "@platformscode/icons";
export class DgaSlider {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.range = true;
        this.showLabel = true;
        this.showHelperText = true;
        // @Prop() rangeValues?: [number,number]=[this.min,this.max];
        this.size = 'small';
    }
    // private minPos: number;
    // private maxPos: number;
    // private railColorStyle: { left: string; width: string };
    calculatePositions() {
        const minPos = ((this.minValue - this.min) / (this.max - this.min)) * 100;
        const maxPos = ((this.maxValue - this.min) / (this.max - this.min)) * 100;
        this.minPos = minPos;
        this.maxPos = maxPos;
        this.railColorStyle = !this.range ? { left: '0%', width: `${minPos}%` } : { left: `${minPos}%`, width: `${maxPos - minPos}%` };
    }
    componentWillLoad() {
        this.minValue = this.initialMin !== undefined ? this.initialMin : this.min;
        this.maxValue = this.initialMax !== undefined ? this.initialMax : this.max;
        this.calculatePositions();
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    watchMinValue(newValue) {
        this.minValue = newValue;
        this.calculatePositions();
    }
    watchMaxValue(newValue) {
        this.maxValue = newValue;
        this.calculatePositions();
    }
    watchRangeValue() {
        this.calculatePositions();
    }
    watchInitialMin() {
        this.minValue = this.initialMin !== undefined ? this.initialMin : this.min;
        this.calculatePositions();
    }
    watchInitialMax() {
        this.maxValue = this.initialMax !== undefined ? this.initialMax : this.max;
        this.calculatePositions();
    }
    handleMinChange(e) {
        const target = e.target;
        const newMinVal = this.range ? Math.min(+target.value, this.maxValue - this.step) : Math.min(+target.value);
        this.minValue = newMinVal;
        if (this.onChange) {
            this.onChange({ max: this.maxValue, min: this.minValue });
        }
        this.calculatePositions();
    }
    handleMaxChange(e) {
        const target = e.target;
        const newMaxVal = Math.max(+target.value, this.minValue + this.step);
        this.maxValue = newMaxVal;
        if (this.onChange) {
            this.onChange({ max: this.maxValue, min: this.minValue });
        }
        this.calculatePositions();
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h(Host, { key: 'fdb2ba28c3748172a5bd822d05da3aea2fc05c72', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: '06cddd48de5900e70ade4c204761ded6aa2f9a48', class: `range-slider-wrapper ${this.size}` }, h("div", { key: '3b5e03e34e3f6b2795ec5ae770512522106a7f56', class: "range-slider-input-wrapper" }, h("input", { key: 'd2e22bd7d7be46c8deef086b8cae883d7f5e2f6c', class: "range-slider-input", type: "range", value: this.minValue, min: this.min, max: this.max, step: this.step, onInput: this.handleMinChange.bind(this) }), this.range && (h("input", { key: '508a4b019888cb6b7cfa2bbb67b551a81132603a', class: "range-slider-input", type: "range", value: this.maxValue, min: this.min, max: this.max, step: this.step, onInput: this.handleMaxChange.bind(this) }))), h("div", { key: '9b0331d411f3ef8636061d525e36ea725139cbc7', class: "range-slider-container" }, this.showLabel && h("h3", { key: '4a20cb24569d0f79da3450f345af02aa360755d1' }, this.label), h("div", { key: '91c4e8240826b418daaca0d0ef1593696a905dca', class: "range-slider-control-wrapper" }, h("div", { key: '19fe6390c90d9f8f2f345825e37db6b37c246ba5', class: "range-slider-control", style: { left: `${this.minPos}%` } }), h("div", { key: '7bba36f1ae6c10d8cb18e2573b4d27ae55da1c6b', class: "range-slider-rail" }, this.range && h("div", { key: '955f03deca055b18aeeaccdac6f8207d86124ad1', class: "range-slider-number_left" }, this.minValue), h("div", { key: '96e5a37b9f60e26e6927d7790c7635522e9bd0f8', class: "range-slider-inner-rail", style: this.railColorStyle }), this.range && h("div", { key: '346a4bcf59435c6b513f4119e0001ea4a96dafd5', class: "range-slider-number_right" }, this.maxValue), !this.range && h("div", { key: '7e6e1f2210056c88090eed7b7d0c4837196a9e8e', class: "range-slider-number_right" }, this.minValue)), this.range && h("div", { key: 'c8fc4e29493c73c1ce34c283ae9c5f2411f0c75a', class: "range-slider-control", style: { left: `${this.maxPos}%` } }), this.showHelperText && this.helperText && (h("div", { key: 'f054aef6301e2bde5b62e89bdee6b26fac860ce5', class: "range-slider-note" }, h("div", { key: '41045073ef37652bf686722f44cd9aa5d6f209ba', class: "range-slider-note-icon" }, h("dga-icon", { key: '67ab536ed1562b4530ad021e1080638e2fa4bc42', icon: helpCircleStroke, size: 16, color: '#384250' })), h("div", { key: 'af047c4578bf4f19d3a74c8fbe6cdda11d3f19f8', class: "range-slider-note-content" }, h("p", { key: 'a7a2701375a982ed47eaf62789c57c9062478553' }, this.helperText)))))))));
    }
    static get is() { return "dga-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slider.css"]
        };
    }
    static get properties() {
        return {
            "min": {
                "type": "number",
                "attribute": "min",
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
            "max": {
                "type": "number",
                "attribute": "max",
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
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "attribute": "step",
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
                "defaultValue": "1"
            },
            "range": {
                "type": "boolean",
                "attribute": "range",
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
                "reflect": false
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
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium'",
                    "resolved": "\"medium\" | \"small\"",
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
            "initialMin": {
                "type": "number",
                "attribute": "initial-min",
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
                "reflect": false
            },
            "initialMax": {
                "type": "number",
                "attribute": "initial-max",
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
                "reflect": false
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(props: { min: number; max: number }) => void",
                    "resolved": "(props: { min: number; max: number; }) => void",
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string | undefined",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
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
            "minValue": {},
            "maxValue": {},
            "minPos": {},
            "maxPos": {},
            "railColorStyle": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "min",
                "methodName": "watchMinValue"
            }, {
                "propName": "max",
                "methodName": "watchMaxValue"
            }, {
                "propName": "range",
                "methodName": "watchRangeValue"
            }, {
                "propName": "initialMin",
                "methodName": "watchInitialMin"
            }, {
                "propName": "initialMax",
                "methodName": "watchInitialMax"
            }, {
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
