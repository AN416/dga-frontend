import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$1 } from './p-CDMKY2c-.js';

const DgaProgressIndicatorStep = /*@__PURE__*/ proxyCustomElement(class DgaProgressIndicatorStep extends H {
    constructor() {
        super();
        this.__registerHost();
        this.currentStep = 1;
        this.title = '';
        this.description = '';
        this.nextStep = true;
        this.showStepName = true;
        this.showStepDescription = true;
        this.labelStyle = 'circle';
        this.internalActiveStep = 1;
        this.isActive = false;
        this.labelState = 'upcoming';
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
        // Get the progress key from the parent
        this.progressKey = this.el.getAttribute('data-progress-key');
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleEscape);
    }
    stepChangeHandler(event) {
        // Only update if the event is from our parent progress indicator
        if (event.detail.progressKey === this.progressKey) {
            this.internalActiveStep = event.detail.step;
            this.updateState();
        }
    }
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
        return (h("div", { key: 'c6108b52b5232f2cd1339d515ff3696013d1237d', class: "progress-indicator__step", onMouseDown: this.handleFocus, onMouseUp: this.handleFocusOut }, h("div", { key: '16fb38fc2deb77d9a0abe2f89d1dcaea23d17f69', class: "progress-indicator__step-content dga-flex-column", ref: el => (this.stepContentRef = el) }, h("div", { key: '4591dd75182590cc86c0056057a32d2db8bba49d', class: "step-label", "data-state": this.labelState }, h("span", { key: '8d882040bd151ffde1204b70739d8c92a61b1f35', class: `step-label--${this.labelStyle}` }, this.labelStyle === 'circle' && this.labelChildren(this.currentStep))), h("div", { key: 'e43125da84444f3dbab5279a36e87cfae409d7e2', class: "step-text dga-flex-column" }, this.showStepName && h("span", { key: 'f48bbe193a0284c1781d3bd44331379cb6857435', class: this.isActive ? 'text-md-medium' : 'text-md-regular' }, this.title), this.showStepDescription && h("p", { key: '8dbd21a5aa3090c9c64bc8882ee226551e9a9f0c', class: "text-sm-regular" }, this.description))), this.nextStep && h("span", { key: '180826a6bd331c831dc8fcbe4bb75bade0fb70ae', class: `progress-indicator__step-connector ${this.isActive ? 'progress-indicator__step-connector--active' : ''}` })));
    }
    get el() { return this; }
}, [0, "dga-progress-indicator-step", {
        "currentStep": [1538, "current-step"],
        "title": [1],
        "description": [1],
        "nextStep": [4, "next-step"],
        "showStepName": [4, "show-step-name"],
        "showStepDescription": [4, "show-step-description"],
        "labelStyle": [1, "label-style"],
        "internalActiveStep": [32],
        "isActive": [32],
        "labelState": [32]
    }, [[4, "stepChange", "stepChangeHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-progress-indicator-step", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-progress-indicator-step":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaProgressIndicatorStep);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { DgaProgressIndicatorStep as D, defineCustomElement as d };
