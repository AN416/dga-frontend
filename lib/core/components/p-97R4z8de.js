import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';

const DgaCollapse = /*@__PURE__*/ proxyCustomElement(class DgaCollapse extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.transitionDuration = '0.3s';
        this.transitionType = 'ease-in';
        this.height = 0;
    }
    componentDidLoad() {
        if (this.open && this.containerRef) {
            this.setHeight(this.containerRef.clientHeight);
            setTimeout(() => {
                this.setHeight('auto');
            }, parseFloat(this.transitionDuration) * 1000);
        }
    }
    watchOpen(newValue, oldValue) {
        if (newValue !== oldValue && this.containerRef) {
            if (newValue) {
                this.setHeight(this.containerRef.scrollHeight);
                setTimeout(() => {
                    this.setHeight('auto');
                }, 200);
            }
            else {
                // Handle closing animation
                this.setHeight(this.containerRef.clientHeight);
                setTimeout(() => {
                    this.setHeight(0);
                }, 20);
            }
        }
    }
    setHeight(value) {
        this.height = value;
    }
    render() {
        const styles = Object.assign(Object.assign({ overflow: 'hidden', transition: `height ${this.transitionDuration} ${this.transitionType}`, height: `${this.height}px` }, (this.height === 'auto' ? { height: 'auto' } : {})), this.customStyle);
        return (h("div", { key: '3216259253795625abadf278ce1b954d9f269932', ref: (el) => this.containerRef = el, "aria-hidden": !this.open, style: styles }, h("slot", { key: '1fd2d53b96c7ebf3e3c1ab47444e16d718b47441' })));
    }
    static get watchers() { return {
        "open": ["watchOpen"]
    }; }
}, [1, "dga-collapse", {
        "open": [4],
        "customStyle": [16, "custom-style"],
        "transitionDuration": [1, "transition-duration"],
        "transitionType": [1, "transition-type"],
        "height": [32]
    }, undefined, {
        "open": ["watchOpen"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-collapse"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-collapse":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaCollapse);
            }
            break;
    } });
}

export { DgaCollapse as D, defineCustomElement as d };
