import { h } from "@stencil/core";
// import { IRoute } from './dga-drawer';
const SidePanelRoutes = [
    {
        name: 'Link',
        path: '/',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Link',
                path: '1',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 39,
            },
            {
                name: 'Link',
                path: '2',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 21,
            },
            {
                name: 'Link',
                path: '3',
                // icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
                // badge: 2,
            },
            // {
            //   name: "Home 4",
            //   path: "4",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 20,
            // },
            // {
            //   name: "Home 5",
            //   path: "5",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 150,
            //   children: [
            //     {
            //       name: "Home 1",
            //       path: "1",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 39,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 4",
            //       path: "4",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 20,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 5",
            //       path: "5",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 150,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 6",
            //       path: "6",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 200,
            //       level: 2,
            //     },
            //     {
            //       name: "Home 7",
            //       path: "7",
            //       icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //       badge: 24,
            //       level: 2,
            //     },
            //   ],
            // },
            // {
            //   name: "Home 6",
            //   path: "6",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 200,
            // },
            // {
            //   name: "Home 7",
            //   path: "7",
            //   icon: <i class='hgi-stroke hgi-arrow-down-01' style={{fontSize:"16px"}} />,
            //   badge: 24,
            // },
        ],
    },
    {
        name: 'Components',
        path: '/components',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Buttons',
                path: '/buttons',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Badges',
                path: '/badges',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Paths',
                path: '/Paths',
                children: [
                    {
                        name: 'Buttons',
                        path: '/buttons',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                    {
                        name: 'Badges',
                        path: '/badges',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                    {
                        name: 'Paths',
                        path: '/Paths',
                        icon: {
                            name: 'home-01',
                            variant: 'stroke',
                            size: 16,
                        },
                        badge: 100,
                    },
                ],
            },
            {
                name: 'Inputs',
                path: '/inputs',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Accordions',
                path: '/accordions',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Tabs',
                path: '/tabs',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
        ],
    },
    {
        name: 'Components 2',
        path: '/components',
        icon: {
            name: 'home-01',
            variant: 'stroke',
            size: 16,
        },
        disabled: false,
        children: [
            {
                name: 'Buttons',
                path: '/buttons',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Badges',
                path: '/badges',
                icon: {
                    name: 'home-01',
                    variant: 'stroke',
                    size: 16,
                },
                badge: 100,
            },
            {
                name: 'Paths',
                path: '/Paths',
                children: [
                    {
                        name: 'Buttons',
                        path: '/buttons',
                        badge: 100,
                    },
                    {
                        name: 'Badges',
                        path: '/badges',
                        badge: 100,
                    },
                    {
                        name: 'Paths',
                        path: '/Paths',
                        badge: 100,
                    },
                ],
            },
            {
                name: 'Inputs',
                path: '/inputs',
                badge: 100,
            },
            {
                name: 'Accordions',
                path: '/accordions',
                badge: 100,
            },
            {
                name: 'Tabs',
                path: '/tabs',
                badge: 100,
            },
        ],
    },
];
export class DgaDrawerUsage {
    constructor() {
        this.variant = 'neutral';
        this.open = false;
    }
    render() {
        return (h("div", { key: '6d9a75684ba3a62978d0a5ff39a492d011cbe785' }, h("h1", { key: '49d3d73e8db3ac69ce97786e8235288a46c2a592' }, "Drawer Example"), h("div", { key: '26c471c159d8532aa0b23ed48fc43f72e73da6a8', style: { padding: '0px', display: 'flex', gap: '20px' } }, h("div", { key: '6b68f920b63f75285625aac035a07dabb5cba3b2', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: 'f44c65955e3faa77a009130f0dffdcd90131d9eb', style: { display: "flex", justifyContent: "center", width: "100vw" } }, h("button", { key: 'cac2d1baae57e263a7c1bb7fa74aca8b356b12b5', onClick: () => this.open = true }, "open"), h("button", { key: '2e87d5236d5ad00b3b4feb18af0cde06f7997d14', onClick: () => this.open = false }, "close")), h("dga-drawer", { key: '6ed23ca808e47d96fcf4dde421644acce956d3dc', routes: SidePanelRoutes, open: this.open, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                "& > .sidepanel": {
                    top: "112px",
                    backgroundColor: "red !important",
                }
            } })), h("div", { key: '18757bfa3f8b656cbb5898d83ffcf4a97be34b1b', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-drawer-usage"; }
    static get states() {
        return {
            "variant": {},
            "open": {}
        };
    }
}
