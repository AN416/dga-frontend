// dga-header.tsx
import { h } from "@stencil/core";
import { DgaNavHeader } from "./dga-nav-header";
import { DgaNavHeaderMain } from "./dga-nav-header-main";
import { DgaNavHeaderLogos } from "./dga-nav-header-logos";
import { DgaNavHeaderMenu } from "./dga-nav-header-menu";
import { DgaNavHeaderLink } from "./dga-nav-header-link";
import { DgaNavHeaderSubMenuColumn } from "./dga-nav-header-sub-menu-column";
import { DgaNavHeaderSubMenuLink } from "./dga-nav-header-sub-menu-link";
import { DgaNavHeaderActions } from "./dga-nav-header-actions";
import { DgaHeaderActionBtn } from "./dga-header-action-btn";
export class DgaHeader {
    render() {
        return (h(DgaNavHeader, { key: 'c10bf624e7811bd7aa14bba9627f93b87a131412', fullWidth: this.config.fullWidth, divider: this.config.divider }, h(DgaNavHeaderMain, { key: '3fd2daf666fa6d57a9f884e776529002534b2a5e', collapsed: true }, h(DgaNavHeaderLogos, { key: '982519ea2b05ca22790103c1d967a95bbf0eaa4b', logoSrc: this.config.logoSrc, govSrc: this.config.govSrc, logoLink: this.config.logoLink, govLink: this.config.govLink }), h(DgaNavHeaderMenu, { key: 'b9ea5c8557b1925794eec223823a8de2a7625550' }, this.config.headerLinks.map((link, index) => (h(DgaNavHeaderLink, { key: index, active: false, onClick: () => console.log('clicked'), label: link.label, icon: link.icon, subMenuBackground: this.config.subMenuBackground, subMenuFullWidth: this.config.subMenuFullWidth }, link.subMenu.map((subMenu, subMenuIndex) => (h(DgaNavHeaderSubMenuColumn, { key: subMenuIndex }, subMenu.columns.map((column, columnIndex) => (h(DgaNavHeaderSubMenuColumn, { key: columnIndex }, column.links.map((subMenuLink, linkIndex) => (h(DgaNavHeaderSubMenuLink, { key: linkIndex, background: this.config.subMenuBackground, label: subMenuLink.label, helperText: subMenuLink.helperText, icon: subMenuLink.icon, linkStyle: subMenuLink.linkStyle })))))))))))))), h(DgaNavHeaderActions, { key: '849c316bf37fe4364fab4a1800c5735c826c3551' }, this.config.actions.map((action, index) => (h(DgaHeaderActionBtn, { key: index, onClick: () => console.log('clicked'), label: action.label, icon: action.icon }))))));
    }
    static get is() { return "dga-header"; }
    static get properties() {
        return {
            "config": {
                "type": "unknown",
                "attribute": "config",
                "mutable": false,
                "complexType": {
                    "original": "IHeaderConfig",
                    "resolved": "IHeaderConfig",
                    "references": {
                        "IHeaderConfig": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-header/dga-header.tsx",
                            "id": "src/components/dga-header/dga-header.tsx::IHeaderConfig"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
