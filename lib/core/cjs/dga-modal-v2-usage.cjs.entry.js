'use strict';

var index = require('./index-DuIfHULw.js');

const DgaModalUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.show = false;
    }
    render() {
        return (index.h("div", { key: '9fccbe9716764a5f7da95fc7c83bac25cf02360f', style: { position: 'relative' } }, index.h("h1", { key: '70fb2da424cc392a00e26841c23082eb70703d6b' }, "Modal Example"), index.h("button", { key: '0449aa96c980221f582309dd09c476e3dfb08cc2', onClick: () => (this.show = true) }, "Open Modal"), index.h("dga-modal-v2", { key: '674dbf38eb1b8cf3ea9735fba1af3c66284e9fe0', open: this.show, showCloseButton: true, onClose: () => (this.show = false) }, index.h("dga-modal-header", { key: '99a9ce793638a5c3bc8c2f2d8d6724d4c5fa56f8' }, index.h("dga-featured-icon", { key: '0d722930bf6877f3371a8396b70a51df2aa757d3', color: "brand", variant: "light", size: "md", icon: {
                name: 'InformationCircle',
                variant: 'stroke',
                type: 'sharp',
                size: 20,
            } }), index.h("dga-modal-title", { key: '6751350015af27652e602834d600305cb068c848' }, "Title goes here")), index.h("dga-modal-body", { key: 'fe71be545a30fce58af05e22b007f4be0b30f2d9' }, index.h("dga-flex", { key: 'b298fb3483ffac76afdb31f6e26cc09987b46f75', direction: "column", spacing: 8 }, index.h("p", { key: '8da267f8cc658ee1a9e71331c6451b24cf2f94b4', class: "text-sm-regular" }, "When a Modal needs a further detailed explanation, it goes here."), index.h("dga-rating", { key: 'f3a8bf8d06c4fdb0ac3cac1f0f1e0cb83e955997' }))), index.h("dga-modal-actions", { key: '44cc45bb505742a477eff079387b8c3249e6805e' }, index.h("dga-button-v2", { key: '42104a382e232b8c7c18628e40a405323d6732e3', label: "Primary", size: "lg", variant: "primary", onClick: () => console.log('Primary Action') }), index.h("dga-button-v2", { key: 'bfe1a52af7ecb65886d1f6b7336de5e3f00f399f', label: "Secondary", size: "lg", variant: "secondary-outline", onClick: () => console.log('Secondary Action') })))));
    }
};

exports.dga_modal_v2_usage = DgaModalUsage;
