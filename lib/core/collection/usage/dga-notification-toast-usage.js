import { h } from "@stencil/core";
export class DgaNotificationToastUsage {
    constructor() {
        this.type = 'success';
        this.open = false;
    }
    render() {
        return (h("div", { key: '734942f52194459c19e3d678dccbbfc368a55fdc' }, h("h1", { key: 'c32681ea751c82734f4bb316b2c57123c6bfabbf' }, "Notification Toast Example"), h("div", { key: 'c4102f4ff1dd275c3115216306e3d6050d0ae821', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'ef24ece76d5a674d64d9c62748e9f73436764152', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '912e0ac725deaade05b1e0fb97a2897ad0294599', style: { display: "flex", justifyContent: "center" } }, h("button", { key: '98d6d9872452515c9c426a9a927a6b856cddaee3', onClick: () => this.open = true }, "open"), h("button", { key: '01cffbac66bdeb6e12cca6682c66afd7de2bec92', onClick: () => this.open = false }, "close")), h("dga-notification-toast", { key: '92f78e17d144133aa5e8975a7be55786c7cd4cb4', type: this.type, open: this.open, leadText: "Notification/Alert message title", hasHelperText: true, helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", action: true, buttonsList: [
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button 2',
                },
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button',
                },
            ], closeButton: true, vPostion: 'top', hPostion: 'left', onClose: () => this.open = false }), h("dga-notification-toast", { key: '854bb24517a831fb2ab418f8f0c521699c47f13e', type: this.type, open: this.open, leadText: "Notification/Alert message title", hasHelperText: true, helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", action: true, buttonsList: [
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button 2',
                },
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button',
                },
            ], closeButton: true, vPostion: 'bottom', hPostion: 'left', onClose: () => this.open = false })), h("div", { key: 'c7539cdec01fa5f10af1a1caafe98374e841da66', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-notification-toast-usage"; }
    static get states() {
        return {
            "type": {},
            "open": {}
        };
    }
}
