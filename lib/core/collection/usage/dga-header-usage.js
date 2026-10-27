import { Fragment, h } from "@stencil/core";
// import { IRoute } from '../dga-drawer/dga-drawer';
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
export class DgaHeaderUsage {
    constructor() {
        this.activeLink = 'link-1';
        this.collapsed = false;
        this.open = false;
    }
    render() {
        return (h(Fragment, { key: 'e60f4dbf3a755dc7dae2bf9b339b2e3bb004dadb' }, h("dga-second-nav-header", { key: '9c026d7c99bc41834b49919b1bbd8f8e7e5ba6e2', hideDivider: true }, h("dga-second-nav-header-actions", { key: '8aa2edab6f8c062e10c89d8f5bf3c7c470d0503f' }, h("dga-button-v2", { key: '8a281906c62c343d921f3e583a39283b4c0b3e1a', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'mic-01',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: '67c389539261a6790e028ea751c5a23fe39a8716', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'zoom-in-area',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: '4d975fb63b4b5b37caa599a12c19a2edc52949bb', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'zoom-out-area',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } }), h("dga-button-v2", { key: 'a9fa842db033a3a84299735ba30892b60edbd71e', label: "Button", variant: "transparent", size: "sm", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'view',
                type: 'rounded',
                variant: 'stroke',
                color: '#FFFFFF',
            } })), h("dga-second-nav-header-content", { key: '0b890255169c3d75704e92f3524316c8187dd714' }, h("dga-second-nav-header-item", { key: '7dcd975aaff12a983b495bcdceca0d6f78697a03', label: "Cloudy" }, h("dga-icon", { key: '2de607a72859da6727c8c67b811407c3a0978bf6', icon: "cloud", variant: "stroke", type: "rounded" })), h("dga-second-nav-header-item", { key: '765b21f32a6d6c2be029ea609e1ef60c3f901781', label: "21 Jan 2024" }, h("dga-icon", { key: 'd63d3d4b90d2a58f58496456d6f1d60257f28977', icon: "calendar-04", variant: "stroke", type: "rounded" })))), h("dga-nav-header", { key: '30167c4fa0582e34df66947818feacdba192fa22', fullWidth: true, divider: true, sticky: true }, h("dga-nav-header-main", { key: '23035a19b16c74853b036f24e19ff173644e3b8a', collapsed: this.collapsed, onToggleCollapsed: e => {
                this.collapsed = e.detail;
                console.log('collapsed', e.detail);
            } }, h("dga-button", { key: '664f4f4d40151d69734cb72c200d10af96d3b31b', iconOnly: true, leadIcon: true, leadIconType: this.collapsed ? 'cancel01' : 'menu01', leadIconProps: {
                name: this.collapsed ? 'menu01' : 'cancel01',
                size: 24,
                variant: 'stroke',
                type: 'rounded',
            }, variant: "transparent", onClick: () => (this.collapsed = !this.collapsed), class: "header-menu__btn", sx: {
                display: { xs: 'block', md: 'none' },
            } }), h("dga-nav-header-logos", { key: 'f071fca8e54a1582cb0a21b98986cdd7db4f3f2f', logoSrc: "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg", govSrc: "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg", logoLink: "#", govLink: "#" }), h("dga-nav-header-menu", { key: '52cfb67e66da9974e03eb1372da298b9089a38c4' }, h("dga-nav-header-link", { key: 'd15bae263755c6155616b24ee249ce87fc2a8107', label: "Item 1", icon: "arrow-down-01", active: this.activeLink === 'link-1', subMenuBackground: "white", onClick: () => {
                this.activeLink = 'link-1';
            } }, h("dga-nav-header-sub-menu", { key: '5a45ad85c7d14e02f72ff024ceba4bf5bec2117b', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: 'aeae71acce54c134dad28e7a87925cb634cdc574', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'c75bbe3016b6ae547a1343a1dd4d3bf59622b52b', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '9450a050707602634349d8bc3079620f206a3704', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'beb38d7818210c5f689ecbd9cf22fbc473ce5a4b', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'a13db4c00ef3f1e0b5901755240a847ea243a70f', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '1b8f50879b1095b1db422149a1e90cd4dee61305', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'fb50df26e5228cebe9894f9292c97f79badfb5ad', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '34df3ff9dc4a476af0dc1a7f60185d68fa14a845', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'd82d493b26f14981d80b0b6ab4cbd3af0225d2ec', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '99e2bfad9a3e0fe1bdd14b63683b25a94c97fa2f', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'ed96d27da4855a285a412f66d900e37fc375df4e', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'bb6943638de75eadf960eb260549232f13e74da2', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))), h("dga-nav-header-link", { key: 'a8ebe294bab469e9a82d80a2f24aa44ab89c0d4d', label: "Item  2", icon: "arrow-down-01", active: this.activeLink === 'link-2', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-2';
            } }, h("dga-nav-header-sub-menu", { key: '4cf2d4f21f3e72d6c330f9b79b70a7e0c2713a55', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: '2c7d92d6ce2907ce73a21400b9f76f355ec30516', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'd4ad54dfe7205c182238a1adda0679ff45c826f0', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'c6bb4fb0414ec8ac1a17c685585e44680c1d469d', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '72dff9e795d8db571b0ca28fdef9233e22c7f4fd', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '549b104ab9c641d7e4729401adec831c926bf610', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '45109448f5e1028a4ec492da1a6249bdf135c7c4', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))), h("dga-nav-header-link", { key: 'e5243ddf2e5812ad0731cc16347d4883e48ec572', label: "Item  3", icon: "arrow-down-01", active: this.activeLink === 'link-3', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-3';
            } }), h("dga-nav-header-link", { key: 'b9690fcfb22c169e51f4ef8f2a7cc38a9683930e', label: "Item  4", icon: "arrow-down-01", active: this.activeLink === 'link-4', subMenuBackground: "white", subMenuFullWidth: true, onClick: () => {
                this.activeLink = 'link-4';
            } }, h("dga-nav-header-sub-menu", { key: 'eb323ea270401443da87eb9ee6b47184ca198c5a', "sub-menu-full-width": true, background: 'white' }, h("dga-nav-header-sub-menu-column", { key: 'a1e0ac9f6fc09c241be461a4f07f48995d63663b', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'f3db2e5f531918f64ec1bb998281d39288575935', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '1a9cded3b6ee3c30fbb7fc74c40524b2f4b1978a', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'de485cba8e40683a510b893732d9414104a35f75', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'bcd9fad642db9c9128aeb2a85172b7c23e433119', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '15719fdc3ca19265a8fbde7ce18b4c89c4834950', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '4a0d3a6361017f9c10e3ac44941b9bb82b245dd2', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'dc4342ac23c0a3a45760733d7215914cef954057', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: 'a25a534a4976f65741319722e8ffb5dff6ab2199', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: '34399735f2800d11f0dd8cb38addf8b6348092ee', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'fad40bb0f93743b0496e1147bc5af809d78fcb2e', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '80e4e582504ce1e02dc4bd675e03e7d769da30da', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'b2983fa5eb2da8c755caf993ec865f30651beefb', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: '7adaa84023015a803236220903323ea317e8e5e7', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '14a1be0f5131fc5dfc3a7fcbf97b137b13cf76ef', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })), h("dga-nav-header-sub-menu-column", { key: 'e787ccbaf75b61e52a9bf12589e0b1a6df7200cd', label: "Group Label" }, h("dga-nav-header-sub-menu-link", { key: 'e56cf9e07752fd0254037d0f020ab91280c27515', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" }), h("dga-nav-header-sub-menu-link", { key: '93dcff87f8eb79a33c93935b22c07b00d885f04b', label: "Submenu Link", link: "#", icon: "document", helperText: "This is a description" })))))), h("dga-nav-header-actions", { key: '1dec4221c5b49af44e17f2c39988ea49cb1f4cb9' }, h("dga-header-action-btn", { key: 'abdeb73e33a5ab5336b885d6774a5d0dbeecf2a6', label: "Search", icon: "search-01", subMenuBackground: "white" }, h("dga-nav-header-sub-menu", { key: '312bfae19a6614322848c49fe6058da10c4e97df', "sub-menu-full-width": true, background: 'white' }, h("dga-flex", { key: '7d97e31034776c876c984ea6d25f08ea06e7c1eb', spacing: 16 }, h("dga-search-box", { key: 'be5a89dcaf6b22024699fa67a7dbede4526b6d39', placeholder: "Search" }), h("dga-button", { key: 'aa4f8d96ceb67dc5f2f9fc8ebe1b34722e5ea352', label: "Search" })))), h("dga-header-action-btn", { key: '4f1f88382ceedee5ad191f8ba381d8d8c7c0a2c4', label: "\u0639\u0631\u0628\u064A", icon: "translation" }), h("dga-header-action-btn", { key: 'f42bd3b04a952588776ff03d6ffd224d501122c1', label: "Login", icon: "user" })), h("dga-header-mobile-actions", { key: '73e284a136664d962510940db2796a4184a14601' }, h("dga-header-menu", { key: '5f5b61fd433e82a7b4f2c1c989c545e3c8fe5965', actions: [
                {
                    label: 'Search',
                    icon: 'search-01',
                    onClick: () => {
                        console.log('clicked');
                    },
                },
                {
                    label: 'عربي',
                    icon: 'translation',
                    onClick: () => {
                        console.log('clicked');
                    },
                },
                {
                    label: 'Login',
                    icon: 'user',
                    onClick: () => {
                        console.log('clicked');
                    },
                }
            ] }))), h("dga-drawer", { key: 'e7c32f79aa75ada9522bab6fcbc644c01eb7fb35', routes: SidePanelRoutes, open: this.collapsed, background: 'gray', headerLogo: "https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png", sx: {
                '& > .sidepanel': {
                    top: '112px',
                },
            } }), h("div", { key: '7dcc4c213cf913e9310cc894cdda98c4b6df9765' }, "Test")));
    }
    static get is() { return "dga-header-usage"; }
    static get states() {
        return {
            "activeLink": {},
            "collapsed": {},
            "open": {}
        };
    }
}
