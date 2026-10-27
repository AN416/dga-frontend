import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$b } from './p-DcvmZQlW.js';
import { d as defineCustomElement$a } from './p-Rco3xweU.js';
import { d as defineCustomElement$9 } from './p-BZ-GDi4v.js';
import { d as defineCustomElement$8 } from './p-CzcTp0g2.js';
import { d as defineCustomElement$7 } from './p-DwSYDs6g.js';
import { d as defineCustomElement$6 } from './p-CwFPFjba.js';
import { d as defineCustomElement$5 } from './p-CgT9rr1E.js';
import { d as defineCustomElement$4 } from './p-DxK5qouX.js';
import { d as defineCustomElement$3 } from './p-CDMKY2c-.js';
import { d as defineCustomElement$2 } from './p-DCUoWuem.js';

const DgaCardV2Usage$1 = /*@__PURE__*/ proxyCustomElement(class DgaCardV2Usage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.variant = 'neutral';
        this.selected = false;
    }
    render() {
        return (h("div", { key: '2a079bc7bd8b1a8405b741383135ceb23a200757' }, h("h1", { key: '67a148a2d1ddcbd05a5d8d21536d2906d1b58322' }, "Card Example"), h("div", { key: '253912a446ec3751c7852adf345ea43aec644e99', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '80707f8e2814d1455d18744ce65ee5491f40acb5', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-card-v2", { key: 'e02d4770ab1e8f1e08021f06845c2e33e5a5b584', type: "default", sx: {
                "& > .card": {
                    backgroundColor: 'red',
                    height: '400px',
                }
            } }, h("dga-card-content", { key: '0c93507505e36e07df787fe3d742709a1595dffa' }, h("dga-featured-icon", { key: '9379fb3aee235fe2b3e6752bdb54fd9aebe6c65c', color: 'brand', variant: 'light', size: 'lg', icon: {
                name: 'checkmark-circle-02',
                variant: 'stroke',
                type: 'sharp',
                size: 24
            } }), h("dga-flex", { key: '40acb7b93c7165a66772628d8f6b81d26b5f13e4', direction: 'column', spacing: 8 }, h("h4", { key: 'b2aae11b0b45a56980860974b059df564c1e153e', class: "text-lg-bold" }, "Card Title test"), h("p", { key: '506b32d4e5846da4ea8237960a161f5c0cdfd2bf', class: "text-md-regular" }, "Card content placeholder text goes here")), h("dga-flex", { key: 'c8a86fad44c04238e6d77a3c630e367a618278b4', direction: 'column', spacing: 4 }, h("dga-rating", { key: '8b0aea240c5c26907fe05370fa66586847824efe', value: 4, size: 'sm' }), h("span", { key: 'ee4aea9c46643510aef3b09b87aab068f2d7eac7', class: "text-xs-regular" }, "12 reviews"))), h("dga-card-actions", { key: '83c1314ec71bbcef1b26e7e99ff2cf04ebe7e5f4' }, h("dga-button-v2", { key: 'fd2e641170650436504ce668296f155d7de41a34', label: "Primary", size: "lg", variant: "primary", onClick: () => console.log('Primary Action') }), h("dga-button-v2", { key: 'cd82cdc5be48843a09edfe7b881cbd20150613e4', label: "Secondary", size: "lg", variant: "secondary-outline", onClick: () => console.log('Secondary Action') })), h("dga-card-expandable-content", { key: '8b0df83f24442a3ff63849ec7df29e7ddc0476af' }, h("div", { key: 'c1b6247fe9333a43143fcd2b87ea27c97ea29a3a' }, "Expanded Content"), h("p", { key: 'db28ba34719b3785dcdbcc811352a653aceb5c11' }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptatum, facere mollitia quas natus nihil, doloribus repudiandae, quasi vitae nobis deserunt similique magni explicabo. Molestiae unde dolorem expedita aut recusandae.")))), h("div", { key: '1e3c8ce2d28f68e8397118fbbe4896fa4a35c958', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
}, [0, "dga-card-v2-usage", {
        "variant": [32],
        "selected": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dga-card-v2-usage", "dga-button-v2", "dga-card-actions", "dga-card-content", "dga-card-expandable-content", "dga-card-v2", "dga-checkbox", "dga-featured-icon", "dga-flex", "dga-icon", "dga-rating"];
    components.forEach(tagName => { switch (tagName) {
        case "dga-card-v2-usage":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DgaCardV2Usage$1);
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "dga-card-actions":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "dga-card-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "dga-card-expandable-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "dga-card-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "dga-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "dga-featured-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dga-flex":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dga-rating":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const DgaCardV2Usage = DgaCardV2Usage$1;
const defineCustomElement = defineCustomElement$1;

export { DgaCardV2Usage, defineCustomElement };
