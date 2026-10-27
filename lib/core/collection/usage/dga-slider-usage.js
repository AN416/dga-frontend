import { Fragment, h } from "@stencil/core";
export class DgaSliderUsage {
    constructor() {
        this.activeStep = 1;
        this.minValue = 10;
        this.maxValue = 100;
    }
    render() {
        return (h(Fragment, { key: 'c68f2326a490de38f5c207b41c7a834cb8e357da' }, h("br", { key: 'e4b091ef3fb9c02df1b156643bd485067faae55a' }), h("dga-slider", { key: 'aa37a2dcf1a522dcbd5cb7e5c9c7882a9cd13fac', min: this.minValue, max: this.maxValue, step: 1, range: true, size: "medium", helperText: "Helper Text Example", label: "Test", sx: {
                backgroundColor: "yellow",
                marginTop: "200px",
                ".range-slider-inner-rail": {
                    backgroundColor: "red"
                }
            } }), ";", h("br", { key: 'f49dd5a94922b20fd49336ed5482886aeed31742' }), this.minValue, " - ", this.maxValue, h("dga-slider", { key: 'cd6b5e663ed4cd00ac55509ff85ab3280654df37' })));
    }
    static get is() { return "dga-slider-usage"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "activeStep": {},
            "minValue": {},
            "maxValue": {}
        };
    }
}
