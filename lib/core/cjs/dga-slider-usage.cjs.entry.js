'use strict';

var index = require('./index-DuIfHULw.js');

const DgaSliderUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.activeStep = 1;
        this.minValue = 10;
        this.maxValue = 100;
    }
    render() {
        return (index.h(index.Fragment, { key: 'c68f2326a490de38f5c207b41c7a834cb8e357da' }, index.h("br", { key: 'e4b091ef3fb9c02df1b156643bd485067faae55a' }), index.h("dga-slider", { key: 'aa37a2dcf1a522dcbd5cb7e5c9c7882a9cd13fac', min: this.minValue, max: this.maxValue, step: 1, range: true, size: "medium", helperText: "Helper Text Example", label: "Test", sx: {
                backgroundColor: "yellow",
                marginTop: "200px",
                ".range-slider-inner-rail": {
                    backgroundColor: "red"
                }
            } }), ";", index.h("br", { key: 'f49dd5a94922b20fd49336ed5482886aeed31742' }), this.minValue, " - ", this.maxValue, index.h("dga-slider", { key: 'cd6b5e663ed4cd00ac55509ff85ab3280654df37' })));
    }
};

exports.dga_slider_usage = DgaSliderUsage;
