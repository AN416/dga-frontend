import { h } from "@stencil/core";
export class DgaAvatarUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'b6db46eb54d6bc026b792ae4e34bf43c34e12ddc' }, h("h1", { key: '650a81dab7c9a3091855b06472d61496db974c18' }, "Avatar Example"), h("div", { key: '83cb2c22db77b4b5026b19389fb30566ebedc628', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'd015a99bcb0af112e3ccd1038d81d166a7a344e9', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '550c23ce186402f7e406d8d3854a4cfc43e33ec8', style: { padding: "10px", display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: "black" } }, h("dga-avatar-group", { key: '67238484b36d6f88c204a1c37c9e461c2b5352b4', stacked: false, max: 3, size: 120, dir: 'rtl', border: true }, h("dga-avatar", { key: '7c61c7877f06d71d776347b7304972588e7ab594', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: 'bd74bcde6d8de547a97dc4961eb2889af11a81d4', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: '5d9ff65ba9a968cffdf3ab75d0b65c321ca35cf4', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: '9889e8d8c5288e55459b750ac42c0f1bc2bc72d2', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: '1d24f7b7ef79c55c0cc691654e9ea70520bf7812', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: 'bba0ea0b2df3aa287ea47f962eb1294df69fa237', size: 120, border: false, type: "initials", text: "Ar" }), h("dga-avatar", { key: '5e43558da9e9a4d3812978a5371399287f59ac34', size: 120, border: false, type: "initials", text: "Ar" })), h("dga-avatar", { key: 'f0d5e358fa0169d608d8668d1b7a7a6c8500d470', size: 120, border: false, square: true, sx: {
                "& .dga-avatar": {
                    borderRadius: "100px"
                }
            } }), h("dga-avatar", { key: '57eb45338affede6bab839017b5f49d9282806bb', size: 120, border: true, square: true })), h("dga-avatar", { key: '3e1c2b918869127ab892e154280169d161cf94b2', type: "icon", size: 120, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '3b0ca5592cdeffd23612192dc3b44498cf522c46', type: "icon", size: 80, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '424827e3b2ef389362000d0cac02b12d1550d8db', type: "icon", size: 68, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'ba9799f6cd71292b121ad255099c9349a63d982f', type: "icon", size: 48, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '9471f2b0922e5b6bb2c186ccf30cf92207b57a20', type: "icon", size: 40, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '4b79004a8f042d65e990b3f31bcb8b7ee29a87a1', type: "icon", size: 32, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'f8c1eeaf6f56c6487dee8d011985513c389aed2e', type: "icon", size: 24, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } })), h("dga-avatar-group", { key: '2a550832318b9f9469204b6d47a5c0eefecfc792', stacked: true }, h("dga-avatar", { key: '26fbd7f51c95b957e4c1d779d0dbdc016209d54d', type: "initials", text: 'AB', size: 40 }), h("dga-avatar", { key: '0a5a4b36f4946fc76a93da3df488df4a41696a3b', type: "initials", text: 'CD', size: 40 }), h("dga-avatar", { key: '8b3f609b35a757dbf11f980452971f7f7c92e6b7', type: "initials", text: 'SB', size: 40 }), h("dga-avatar", { key: '30359e817cdbf2e200f5cfc7d8827f96e297a908', type: "initials", text: 'WK', size: 40 }), h("dga-avatar", { key: 'ebd5555420926537608f5f4c41c5bfd4e19024d9', type: 'initials', text: `+4`, size: 40 })), h("div", { key: 'e993287f98944f810b23fb09148420210e9187e4', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-avatar-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
