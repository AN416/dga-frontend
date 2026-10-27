'use strict';

var index = require('./index-DuIfHULw.js');

const DgaBreadcrumbsUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'neutral';
    }
    render() {
        return (index.h("div", { key: 'd6e7a8bc04ed017ddde57a3f6618eb75c7f8d529' }, index.h("h1", { key: 'ce2229dead2e4454de243a1027024c7c3187df1d' }, "Breadcrumbs Example"), index.h("div", { key: 'a5f17436f6253d0637c16b21d595f9893d8dc615', style: { padding: '50px', display: 'flex', gap: '20px' } }, index.h("div", { key: '7105b831a37a52582d631685f94babafb4230469', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("dga-link", { key: 'c5f534d77c261d2796b2b764d419d9d9388cf95d', label: "Link", variant: "neutral" }), index.h("dga-breadcrumbs", { key: 'f6360edce54da8d84f0ca7506c2fc1948f6156e5', items: [
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
            ], max: 3 })), index.h("div", { key: '4d3eed982301eb49e7ecbfe76142a760f2274f22', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

exports.dga_breadcrumbs_usage = DgaBreadcrumbsUsage;
