import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-CDMKY2c-.js';

const dgaFeedbackIconCss = "";

const DgaFeedbackIcon$1 = /*@__PURE__*/ proxyCustomElement(class DgaFeedbackIcon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = 'neutral-info';
        this.variant = 'container';
        this.size = 24;
        this.icons = {
            'success-check': {
                icon: 'checkmark-circle-02',
                color: '#067647',
            },
            'blue-info': {
                icon: 'information-circle',
                color: '#175CD3',
            },
            'neutral-info': {
                icon: 'information-circle',
                color: '#384250',
            },
            'neutral-?': {
                icon: 'help-circle',
                color: '#384250',
            },
            'warning-!-circle': {
                icon: 'alert-circle',
                color: '#B54708',
            },
            'warning-!-triangle': {
                icon: 'alert-02',
                color: '#B54708',
            },
            'error-!': {
                icon: 'alert-circle',
                color: '#B42318',
            },
            'error-x': {
                icon: 'cancel-circle',
                color: '#B42318',
            },
        };
    }
    render() {
        return (h("span", { key: 'cacc28f02b7d22edec7b15706f4b715707065b50', class: "tooltip-main__icon" }, h("dga-icon", { key: 'fca0d3e2f7bae0337fe7a1ae3572d8da217bd152', name: this.icons[this.type].icon, variant: this.variant === 'icon-only' ? 'stroke' : 'solid', size: this.size, color: this.icons[this.type].color })));
    }
    static get style() { return dgaFeedbackIconCss; }
}, [1, "dga-feedback-icon", {
        "type": [1],
        "variant": [1, "style"],
        "size": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-feedback-icon", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-feedback-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaFeedbackIcon$1);
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaFeedbackIcon = DgaFeedbackIcon$1;
const defineCustomElement = defineCustomElement$1;

export { DgaFeedbackIcon, defineCustomElement };
