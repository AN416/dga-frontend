'use strict';

var index = require('./index-DuIfHULw.js');
var dgaHeaderActionBtn = require('./dga-header-action-btn-DutV96gs.js');
var dgaNavHeaderSubMenuLink = require('./dga-nav-header-sub-menu-link-DJBKL-Gb.js');

const DgaHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(dgaHeaderActionBtn.DgaNavHeader, { key: 'c10bf624e7811bd7aa14bba9627f93b87a131412', fullWidth: this.config.fullWidth, divider: this.config.divider }, index.h(dgaHeaderActionBtn.DgaNavHeaderMain, { key: '3fd2daf666fa6d57a9f884e776529002534b2a5e', collapsed: true }, index.h(dgaHeaderActionBtn.DgaNavHeaderLogos, { key: '982519ea2b05ca22790103c1d967a95bbf0eaa4b', logoSrc: this.config.logoSrc, govSrc: this.config.govSrc, logoLink: this.config.logoLink, govLink: this.config.govLink }), index.h(dgaHeaderActionBtn.DgaNavHeaderMenu, { key: 'b9ea5c8557b1925794eec223823a8de2a7625550' }, this.config.headerLinks.map((link, index$1) => (index.h(dgaHeaderActionBtn.DgaNavHeaderLink, { key: index$1, active: false, onClick: () => console.log('clicked'), label: link.label, icon: link.icon, subMenuBackground: this.config.subMenuBackground, subMenuFullWidth: this.config.subMenuFullWidth }, link.subMenu.map((subMenu, subMenuIndex) => (index.h(dgaNavHeaderSubMenuLink.DgaNavHeaderSubMenuColumn, { key: subMenuIndex }, subMenu.columns.map((column, columnIndex) => (index.h(dgaNavHeaderSubMenuLink.DgaNavHeaderSubMenuColumn, { key: columnIndex }, column.links.map((subMenuLink, linkIndex) => (index.h(dgaNavHeaderSubMenuLink.DgaNavHeaderSubMenuLink, { key: linkIndex, background: this.config.subMenuBackground, label: subMenuLink.label, helperText: subMenuLink.helperText, icon: subMenuLink.icon, linkStyle: subMenuLink.linkStyle })))))))))))))), index.h(dgaHeaderActionBtn.DgaNavHeaderActions, { key: '849c316bf37fe4364fab4a1800c5735c826c3551' }, this.config.actions.map((action, index$1) => (index.h(dgaHeaderActionBtn.DgaHeaderActionBtn, { key: index$1, onClick: () => console.log('clicked'), label: action.label, icon: action.icon }))))));
    }
};

exports.dga_header = DgaHeader;
