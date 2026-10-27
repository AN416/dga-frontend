import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$4 } from './p-CqUocyYD.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-DNAR5ou0.js';

const DgaBreadcrumbsUsage$1 = /*@__PURE__*/ proxyCustomElement(class DgaBreadcrumbsUsage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'd6e7a8bc04ed017ddde57a3f6618eb75c7f8d529' }, h("h1", { key: 'ce2229dead2e4454de243a1027024c7c3187df1d' }, "Breadcrumbs Example"), h("div", { key: 'a5f17436f6253d0637c16b21d595f9893d8dc615', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '7105b831a37a52582d631685f94babafb4230469', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-link", { key: 'c5f534d77c261d2796b2b764d419d9d9388cf95d', label: "Link", variant: "neutral" }), h("dga-breadcrumbs", { key: 'f6360edce54da8d84f0ca7506c2fc1948f6156e5', items: [
                {
                    label: 'Home',
                    path: '/',
                },
                {
                    label: 'Products',
                    path: '/products',
                },
                {
                    label: 'Computers',
                    path: '/products/computers',
                    disabled: true,
                },
                {
                    label: 'Keyboards',
                    path: '/products/keyboards',
                },
            ], max: 3 })), h("div", { key: '4d3eed982301eb49e7ecbfe76142a760f2274f22', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-breadcrumbs-usage", {
        "variant": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-breadcrumbs-usage", "dga-breadcrumbs", "dga-icon", "dga-link"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-breadcrumbs-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaBreadcrumbsUsage$1);
            }
            break;
        case "dga-breadcrumbs":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaBreadcrumbsUsage = DgaBreadcrumbsUsage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaBreadcrumbsUsage, defineCustomElement };
