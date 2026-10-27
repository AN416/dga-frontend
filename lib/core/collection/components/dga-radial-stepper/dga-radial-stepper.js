import { Host, h } from "@stencil/core";
export class DgaRadialStepper {
    constructor() {
        this.RTL = false;
        this.size = '64px';
        this.showText = true;
        this.steps = [];
        this.activeStep = 1;
        this.variant = 'primary';
        this.showStepName = true;
        this.showStepDescription = true;
        this.sizes = {
            '120px': 120,
            '80px': 80,
            '64px': 64,
            '48px': 48,
            '40px': 40,
        };
    }
    updateInternalPercentage() {
        if ((this.activeStep >= this.steps.length + 1) || (this.activeStep < 1)) {
            return;
        }
        this.internalPercentage = (this.activeStep / this.steps.length) * 100;
        this.internalActiveStep = this.activeStep;
    }
    componentDidLoad() {
        this.updateInternalPercentage();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const strokeWidth = this.sizes[this.size] / 10;
        const radius = (this.sizes[this.size] - strokeWidth) / 2;
        const dashArray = 2 * Math.PI * radius;
        const dashOffset = (this.RTL ? 1 : -1) * dashArray * (1 - this.internalPercentage / 100);
        return (h(Host, { key: 'b6243110a5d5460ace2748d6fc688fbd3cc96d7f' }, h("dga-flex", { key: '13126de09077975f7562ab791cc0865c04237b53', spacing: 8, align: 'center', dir: this.RTL ? "rtl" : "ltr", class: `dga-radial-stepper--${this.size} dga-radial-stepper--${this.variant}`, "aria-size": this.size }, h("div", { key: '2b6af1103cf2905f2987b7aa343e7e3ab8c019cc', class: "dga-circular-stepper", "aria-size": this.size }, h("div", { key: 'e005c443c8fd65dca313fc4f19979ff54a15b5c2', class: "dga-circular-stepper__label" }, this.showText && this.steps.length > 0 && h("h4", { key: '0a8f898bf0b23bbbcef7523d5fafbb3d07bf6c6d', class: `dga-circular-stepper__label--text ${this.variant}` }, this.RTL ? `${this.internalActiveStep} من ${this.steps.length}` : `${this.internalActiveStep} of ${this.steps.length}`)), h("svg", { key: 'cd082b714d8fbb436606f9d68c896a6e1eb3c71e', width: this.sizes[this.size], height: this.sizes[this.size], viewBox: `0 0 ${this.sizes[this.size]} ${this.sizes[this.size]}` }, h("circle", { key: '0c0c3d1b698fd05a0e973e44c17b35bcdfa65f51', class: `track track--${this.variant}`, fill: "none", stroke: "#e6e6e6",
            // stroke="currentColor"
            r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth }), h("circle", { key: '539314283ef9d14ebd128afbd8f5b6259ad8dc50', class: `tail tail--${this.variant}`, fill: "none", stroke: "currentColor", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth, "stroke-linecap": 'round', "stroke-dasharray": dashArray, "stroke-dashoffset": dashOffset, transform: `rotate(-90 ${this.sizes[this.size] / 2} ${this.sizes[this.size] / 2})`, style: {
                transition: 'stroke-dashoffset 0.5s ease',
            } }))), h("dga-flex", { key: '7570f29d5699f6f93ea8b6ee18ff3354320702dd', direction: 'column', spacing: 4 }, ((_a = this.steps[this.internalActiveStep - 1]) === null || _a === void 0 ? void 0 : _a.showPreStep) && h("span", { key: '9b89290bf1746e9b640f116675b0bebd73f87de7', class: "dga-radial-stepper__pre-name" }, "Previous: ", (_b = this.steps[this.internalActiveStep - 1]) === null || _b === void 0 ? void 0 :
            _b.stepName), this.showStepName && ((_c = this.steps[this.internalActiveStep - 1]) === null || _c === void 0 ? void 0 : _c.stepName) && h("h3", { key: '28c1c76ceed48e374ac10432d3d1af2f25f65a71', class: "dga-radial-stepper__name" }, (_d = this.steps[this.internalActiveStep - 1]) === null || _d === void 0 ? void 0 : _d.stepName), this.showStepDescription && ((_e = this.steps[this.internalActiveStep - 1]) === null || _e === void 0 ? void 0 : _e.stepDescription) && h("h5", { key: '2d281e3942eae6127dc4ba16ecf5e3aea6d568bf', class: "dga-radial-stepper__desc" }, (_f = this.steps[this.internalActiveStep - 1]) === null || _f === void 0 ? void 0 : _f.stepDescription), ((_g = this.steps[this.internalActiveStep - 1]) === null || _g === void 0 ? void 0 : _g.showNextStep) && h("span", { key: 'e7edc77cfe9d56840793d68bb089222b04784427', class: "dga-radial-stepper__next-name" }, "Next: ", (_h = this.steps[this.internalActiveStep]) === null || _h === void 0 ? void 0 :
            _h.stepName)))));
    }
    static get is() { return "dga-radial-stepper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-radial-stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-radial-stepper.css"]
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
                    "original": "'120px' | '80px' | '64px' | '48px' | '40px'",
                    "resolved": "\"120px\" | \"40px\" | \"48px\" | \"64px\" | \"80px\"",
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
            "showText": {
                "type": "boolean",
                "attribute": "show-text",
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
            "steps": {
                "type": "unknown",
                "attribute": "steps",
                "mutable": false,
                "complexType": {
                    "original": "Step[]",
                    "resolved": "Step[]",
                    "references": {
                        "Step": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-radial-stepper/dga-radial-stepper.tsx",
                            "id": "src/components/dga-radial-stepper/dga-radial-stepper.tsx::Step"
                        }
                    }
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
            },
            "activeStep": {
                "type": "number",
                "attribute": "active-step",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"primary\"",
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
            "showStepName": {
                "type": "boolean",
                "attribute": "show-step-name",
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
            "showStepDescription": {
                "type": "boolean",
                "attribute": "show-step-description",
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
            }
        };
    }
    static get states() {
        return {
            "internalPercentage": {},
            "internalActiveStep": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "steps",
                "methodName": "updateInternalPercentage"
            }, {
                "propName": "activeStep",
                "methodName": "updateInternalPercentage"
            }];
    }
}
