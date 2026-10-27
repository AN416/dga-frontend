'use strict';

var index = require('./index-DuIfHULw.js');

const DgaRadialStepperUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.percentage = 0;
        this.activeStep = 0;
    }
    handleInputChange(event) {
        const target = event.target;
        this.percentage = Number(target.value); // Convert the string value to a number
    }
    handleStepChange(event) {
        const target = event.target;
        this.activeStep = Number(target.value); // Convert the string value to a number
    }
    render() {
        return (index.h("div", { key: '633abb705cdc572361cf00c08ff59db0b658ce02' }, index.h("h1", { key: '6122181de257995ff9a85d01e5cd4a0685f1049e' }, "Radial Stepper Example"), index.h("div", { key: 'd798f57403a8cd1e91bf60d2a6d83d43daa71b42', style: { padding: '50px', gap: '20px' } }, index.h("div", { key: '67db737bdeac992832c4283b60916c25cd090bc7', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("dga-radial-stepper", { key: '1ad7985c392dc62a6e1bb0a2edcfcc7a8211b990', size: "120px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), index.h("dga-radial-stepper", { key: '492bfa56a261ef0d7a2c7c70fd018b74d7b01984', size: "80px", color: "success", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), index.h("dga-radial-stepper", { key: '0c47848003e18045ac7da9669e08dd95896bbc40', variant: 'neutral', size: "64px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), index.h("dga-radial-stepper", { key: '734772c63f2778861cf941e5c35e52aa8b382816', size: "48px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), index.h("dga-radial-stepper", { key: '1f7b03d83e7fb8609a56cbea31145e6f16baf9eb', size: "40px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ] }), index.h("div", { key: 'a4a225f2a783640328906a8e0482e0f4b8bf627a', style: {
                backgroundColor: "#1B8354",
                padding: "40px"
            } }, index.h("dga-radial-stepper", { key: 'd414cf02f180951c2c587c54d8f2c634a544f1f9', variant: "on-color", size: "120px", activeStep: this.activeStep, steps: [
                {
                    stepName: "Step One",
                    stepDescription: "this is step one description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Two",
                    stepDescription: "this is step two description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Three",
                    stepDescription: "this is step three description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Four",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Five",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                },
                {
                    stepName: "Step Six",
                    stepDescription: "this is step four description",
                    showPreStep: true,
                    showNextStep: true
                }
            ], RTL: true })), index.h("button", { key: '9770dfdd2b8754798ff1890823cdb283962edb4f', onClick: () => (this.activeStep += 1) }, "Next"), index.h("button", { key: 'f59cc53c07acdf0cb429d98c29e0cc2172b5493d', onClick: () => (this.activeStep -= 1) }, "Prev"), index.h("input", { key: '8c3ae877549239f3d4c45b02c3405f0f044eef75', type: "range", min: "0", max: "100", value: this.percentage, onInput: e => this.handleInputChange(e) })))));
    }
};

exports.dga_radial_stepper_usage = DgaRadialStepperUsage;
