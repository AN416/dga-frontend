import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const DgaProgressIndicatorStep = /*@__PURE__*/ proxyCustomElement(class DgaProgressIndicatorStep extends H {
    constructor() {
        super();
        this.__registerHost();
        this.currentStep = 1;
        this.title = '';
        this.description = '';
        this.activeStep = 0;
        this.nextStep = true;
        this.showStepName = true;
        this.showStepDescription = true;
        this.internalActiveStep = 1;
        this.isActive = false;
        this.labelState = 'upcoming';
        this.labelStyle = 'circle';
        this.handleFocus = () => {
            this.stepContentRef.classList.add('focus');
        };
        this.handleFocusOut = () => {
            this.stepContentRef.classList.remove('focus');
        };
        this.handleEscape = (event) => {
            if (event.key === 'Escape') {
                this.handleFocusOut();
                const inputElement = this.el.querySelector('input');
                if (inputElement) {
                    inputElement.blur();
                }
            }
        };
    }
    componentWillLoad() {
        this.updateState();
        window.addEventListener('keydown', this.handleEscape);
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
    }
    stepChangeHandler(event) {
        this.internalActiveStep = event.detail;
        console.log('stepChangeHandler', event.detail);
        this.isActive = event.detail > this.currentStep;
        if (event.detail > this.currentStep) {
            this.labelState = 'completed';
        }
        else if (event.detail < this.currentStep) {
            this.labelState = 'upcoming';
        }
        else {
            this.labelState = 'current';
        }
    }
    // @Watch('internalActiveStep')
    updateState() {
        this.isActive = this.internalActiveStep > this.currentStep;
        if (this.internalActiveStep > this.currentStep) {
            this.labelState = 'completed';
        }
        else if (this.internalActiveStep < this.currentStep) {
            this.labelState = 'upcoming';
        }
        else {
            this.labelState = 'current';
        }
    }
    labelChildren(currentStep) {
        if (this.labelState === 'completed') {
            return h("dga-icon", { name: "tick-02", variant: "stroke", size: 16 });
        }
        return currentStep.toString();
    }
    render() {
        return (h("div", { key: '86b00fd3ea645e5f4f145ba093755117251fb5cc', class: "progress-indicator__step", onMouseDown: this.handleFocus, onMouseUp: this.handleFocusOut }, h("div", { key: '1cdc6dbcbddca2613921fdd0c3e343d50c3e131f', class: "progress-indicator__step-content dga-flex-column", ref: el => (this.stepContentRef = el) }, h("div", { key: 'f09d6cb4624ae4ea9a2513e0c508d70acf3630e2', class: "step-label", "data-state": this.labelState }, h("span", { key: '9e0f6d3a45386762798b838d45611666f6a132af', class: `step-label--${this.labelStyle}` }, this.labelStyle === 'circle' && this.labelChildren(this.currentStep))), h("div", { key: 'aa2143809403697f9912f8ac5d63f7ed4fa0fdc3', class: "step-text dga-flex-column" }, this.showStepName && h("span", { key: '2414a538e6c480a8659e5b4afd50072563a8b1e2', class: this.isActive ? 'text-md-medium' : 'text-md-regular' }, this.title), this.showStepDescription && h("p", { key: 'b49c1b187085d1d2b87307143c467d35bf8d927c', class: "text-sm-regular" }, this.description))), this.nextStep && h("span", { key: '4436f8f0129b9453680e8c582c002e7a861e4d49', class: `progress-indicator__step-connector ${this.isActive ? 'progress-indicator__step-connector--active' : ''}` })));
    }
    get el() { return this; }
}, [0, "dga-progress-indicator-step-v3", {
        "currentStep": [1538, "current-step"],
        "title": [1],
        "description": [1],
        "activeStep": [2, "active-step"],
        "nextStep": [4, "next-step"],
        "showStepName": [4, "show-step-name"],
        "showStepDescription": [4, "show-step-description"],
        "labelStyle": [1, "label-style"],
        "internalActiveStep": [32],
        "isActive": [32],
        "labelState": [32]
    }, [[4, "stepChange", "stepChangeHandler"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-progress-indicator-step-v3", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-progress-indicator-step-v3":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaProgressIndicatorStep);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaProgressIndicatorStepV3 = DgaProgressIndicatorStep;
const defineCustomElement = defineCustomElement$1;

export { DgaProgressIndicatorStepV3, defineCustomElement };
