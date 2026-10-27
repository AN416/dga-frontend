import { r as registerInstance, h } from './index-BLSc18AE.js';

const DgaNotificationUsage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '5f18662ae155dba954a77dbe48a5b010733f9362' }, h("h1", { key: '47faebfa8a4831a879f2e7155a335311aa07c505' }, "Notification Example"), h("div", { key: '7fe77845673410e7b8e5492930108a2e7b6ce605', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '3ca1b33bf085c654a9e5f08d7bc03c87e9f6f33f', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-notification", { key: 'db7dd7308a9cde1991ab94071f088ae7aebf1017', leadText: "This is a very important banner message that requires attention", variant: this.variant, dismissable: true }), h("dga-notification", { key: 'd887f3719c5b5f69470add518990b1fc1bbff483', leadText: "This is a very important banner message that requires attention", variant: "critical", dismissable: true }), h("dga-notification", { key: '9f9150d34be7dd10d86def6617e8f920d532944f', leadText: "This is a very important banner message that requires attention", variant: "info", dismissable: true }), h("dga-notification", { key: '31e844c8d2f97ea081a59b1cb7cb9ec0866ed8a0', leadText: "This is a very important banner message that requires attention", variant: "success", dismissable: true }), h("dga-notification", { key: 'ce232f3d8e0aa6879eea0445e50e50692958fbef', leadText: "This is a very important banner message that requires attention", variant: "warning", dismissable: true })), h("div", { key: '957bf4dbfb498d2e6fa8d90e587d4b504a405777', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

export { DgaNotificationUsage as dga_notification_usage };
