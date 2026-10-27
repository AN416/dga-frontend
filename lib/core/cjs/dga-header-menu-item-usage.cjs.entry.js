'use strict';

var index = require('./index-DuIfHULw.js');

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
const DgaHeaderMenuItemUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isMenuOpen = false;
        this.collapsed = false;
        // private buttonRef: HTMLElement | null = null;
        this.anchorEl = null;
        // private buttonRef: HTMLElement | null = null; // Reference to the button
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
        };
        this.closeMenu = () => {
            this.isMenuOpen = false;
        };
    }
    get open() {
        return Boolean(this.anchorEl);
    }
    handleClick(event) {
        this.anchorEl = event.currentTarget;
    }
    handleClose() {
        this.anchorEl = null;
    }
    render() {
        return (index.h(index.Fragment, { key: 'e92ef883339342be4f14973f643ec3fa40cb906e' }, index.h("dga-header-vv2", { key: '17e3fdba4c8f316d74cdf31a497bfedb08e4d596' }, index.h("dga-flex", { key: 'b1cc4780070181bc60197c16ea3483ea91b83d9d', spacing: 16, direction: "row", align: "center", justify: "between" }, index.h("dga-button", { key: '131937c3c6ddbc59132601cc2df528fc110d0322', iconOnly: true, leadIcon: true, leadIconType: this.collapsed ? 'cancel01' : 'menu01', leadIconProps: {
                name: this.collapsed ? 'menu01' : 'cancel01',
                size: 24,
                variant: 'stroke',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.collapsed = !this.collapsed), class: "header-menu__btn", sx: {
                display: { xs: 'block', md: 'none' },
            } }), index.h("dga-logo-placeholder", { key: '72369eecf634876708559d0d5c6dbd71004b83cd', size: "md" }), index.h("dga-flex", { key: 'fc56df15d1f0478f742ff3e1bd8d805d7135ce88', direction: "row", align: "center", justify: "start", sx: {
                display: { xs: 'none', md: 'block' },
            } }, index.h("dga-header-menu-item", { key: '1c6f91a4d4278703fa11f823dd4595ff30ea32ee', label: "Home" }), index.h("dga-header-menu-item", { key: '0e522c5290f166245dd027b660f6b10fc221e3cc', label: "About" }), index.h("dga-header-menu-item", { key: 'ea473d017c4e385e41ef6e0d0217ee2b3bd8263e', label: "Contact", active: true }, index.h("dga-header-sub-menu", { key: 'cc2a583030d1b81c060411dd9f2fcd67cdf040e7', subMenuFullWidth: true }, index.h("dga-header-sub-menu-column", { key: 'ec18c1aa6d1bdee2357e7a633ef6cee1a52045f9', label: "Column Label" }, index.h("dga-header-sub-menu-item", { key: '8156e2f66e47e62b1365590217a69708ab9967dd', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: 'cdee9f2de171238beb0e2b26304ca82de267361a', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: 'c65f57d8987b4b242843a8c8509e489f49f333d0', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: 'ff12ab09933545c7c899279a62397b22d994f3fe', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '2596eb7342ecbb1d76ba119c862dcec7d9f063e4', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '6ef47801b1fab4a30d995cf28e6187b37d530a2c', label: "Tag", color: "blue", slot: "tag", rounded: true }))), index.h("dga-header-sub-menu-column", { key: '258595008dfc494f5eb1202982bcdc72ab9dfc35', label: "Column Label" }, index.h("dga-header-sub-menu-item", { key: 'd5825859897c9f37a098e194b887456cbc960da9', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '70efb0c944b1cc4e85264ec6667c1dd22b03cd86', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '86413d6ba127bedb62fe9aead6e0493f96edb226', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '5ce2cb51545ac8db94351d6410121772c6992593', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '0b43b4e011b0a12f99b4c724afc898288dbed654', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '07335ae8f9de7ad968cea5f9cdfcd86a193b1453', label: "Tag", color: "blue", slot: "tag", rounded: true }))), index.h("dga-header-sub-menu-column", { key: '388ca344a7c222e49b9bc8d2e09975b9b87582f7', label: "Column Label" }, index.h("dga-header-sub-menu-item", { key: '305826370e7d05149846cc8f832df9ac26304a5a', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '05912f983a8c1f06ac29be07973e83e1e9efe048', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '8fb928f811feff0b1dd8529b21e9d8d326047002', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '23cee2dd5af95093a6caa8232c6af4c77630da22', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '69d73f0b67329867efc30851f7ba49b5bcb618a1', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '646e8e8cf560ee5a5f854fc96111616f44a23bab', label: "Tag", color: "blue", slot: "tag", rounded: true }))), index.h("dga-header-sub-menu-column", { key: 'c3fe38c32771907efbdf6e02885c20c290599b93', label: "Column Label" }, index.h("dga-header-sub-menu-item", { key: 'eda160d30efbbcddecc4513f2837197639811c80', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '62c6f3a5d22672d6a8fdcbf474b7f200f686edfa', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '9d70c056d49edece184e7d74521651f7e75e8d23', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '9dcf3a35a08e5afc67646c0249d454745fac60c6', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: 'ff9e45fb2535e64f9e4290afa88082c353b950f3', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: 'ba7a7f14956248fbc8dc51b116ca6ad5819d5958', label: "Tag", color: "blue", slot: "tag", rounded: true }))), index.h("dga-header-sub-menu-column", { key: '51bbfb7b743da1e24244e1080b77c6018f887cc3', label: "Column Label" }, index.h("dga-header-sub-menu-item", { key: 'a00c3d01a3e6cdbe669a5f137931a90d413865f7', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: 'a7e898caaad447ced7c0a15dbf71575ceb6dec84', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '483856b5c57b8ada07bcd0f3771eb87b160044c8', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '82a1a793697820c4378387941aa3407d8a492f91', label: "Tag", color: "blue", slot: "tag", rounded: true })), index.h("dga-header-sub-menu-item", { key: '6f5fb3b16aa53b3455f640e1b86c4b8017451be8', label: "Menu Item Label", icon: "checkmark-square-02", helperText: "Menu item helper text" }, index.h("dga-tag", { key: '659b1bf152c5da845c049390f1bb37d9ace12c27', label: "Tag", color: "blue", slot: "tag", rounded: true }))))))), index.h("dga-flex", { key: 'b62e968550cc4736759ec34a7ee4286ad2945283', direction: "row", align: "center", justify: "end" }, index.h("dga-header-action", { key: '5e388e0f47745f77c0299114f1f42c5ef9f5a97b', label: "Action", icon: "login-square-01" }), index.h("dga-header-action", { key: '666de3a49694b4d568b2d017c0cae1e69f2e656a', icon: "login-square-01", iconPosition: "top" }, index.h("dga-header-sub-menu", { key: 'df837eeb4673fe5fa9dd9210a976f34e025b2986', subMenuFullWidth: true }, index.h("dga-search-box", { key: 'd76658b6428a3918ea5ef7ee164faac87f98484a' }))), index.h("dga-action-menu", { key: '4eddffa54f7f657f2c267cda8f854c50227f4077', open: this.isMenuOpen, onClose: () => (this.isMenuOpen = false), placement: 'bottom-end' }, index.h("dga-button-v2", { key: '64754f40fb0bee6b1d607e3584598a3a62055d03', slot: "trigger", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.isMenuOpen = true), class: "header-menu__btn" }), index.h("dga-menu-list", { key: '1eb1ec2d37517708694cfe4de9fa5a30fa4c4b1a' }, index.h("dga-menu-item", { key: '9cb5923bac344b9b6c25cd42f30df042884edb43', label: "Item Label" }), index.h("dga-menu-item", { key: '420853e00e37b9bec6f59ab9aa6e8574eb08809a', label: "Item Label" }), index.h("dga-menu-item", { key: 'b2c854834234b12257bd2f8c481a158ef57a3de4', label: "Item Label" }))))), index.h("dga-drawer", { key: '5851b793a484e7e5054ca2f39e828aadc59b9ecb', routes: SidePanelRoutes, open: this.collapsed, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                '& > .sidepanel': {
                    top: '72px',
                },
            }, overlay: true }, "efddsfdsfsdfdsfdsf dfdsfdsfdsfdsfdsfdf", index.h("a", { key: '5f332f58b7ecabaa5bc2ca089f9a50a25ce421ed' }, "fdgdfgfdg"), index.h("div", { key: 'ffe92c03d0d519bd5dc0ffd1689d63b7f3f53d64' }, "gfdgfdgfd")), index.h("dga-logo-placeholder", { key: 'a4621dc91c307674efa4e85c77bf545570425f6b', text: "Platform Logo", size: "md" }), index.h("dga-logo-placeholder", { key: '8bb2e13db6bacc7349f5597ae8e34cc126617988', text: "Platform Logo", size: "sm" }), index.h("dga-action-menu", { key: '860afb9b3c3267111216fb92952a8ae85b7393e5', open: this.isMenuOpen, onClose: () => (this.isMenuOpen = false), placement: 'bottom-end' }, index.h("dga-button-v2", { key: 'd94e8c3ce27ea4125b69ddcc2b072a7d3aa7606c', slot: "trigger", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.isMenuOpen = true), class: "header-menu__btn" }), index.h("dga-menu-list", { key: '437ff62b953bc666e7550f5de1028e26a3c56338' }, index.h("dga-menu-item", { key: '391760861d0c7db65b80f1f02d4a082c841a1a69', label: "Item Label" }), index.h("dga-menu-item", { key: '671583b7a7785eafbedd7008decb8f3557cbb0f7', label: "Item Label" }), index.h("dga-menu-item", { key: 'a2e59aa37e5430243b4a7198b527e4409352ca5a', label: "Item Label" })))));
    }
};

exports.dga_header_menu_item_usage = DgaHeaderMenuItemUsage;
