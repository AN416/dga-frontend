import { h } from "@stencil/core";
import { guid } from "../../utils";
export class DgaFooter {
    constructor() {
        this.mainTitle = '';
        this.mainDescription = '';
        this.mainLinkTilte = '';
        this.mainImage = '';
        this.copyright = '';
        this.groupLinks = [];
        this.socialMediaTitle = 'Social Media';
        this.socialMediaLinks = [];
        this.accessibilityTitle = 'Accessibility Tools';
        this.accessibilityLinks = [];
        this.basicLinks = [];
        this.extraLinks = [];
        this.bottomImages = [];
    }
    render() {
        return (h("footer", { key: '2814ae7529b012f44c6f52a9de9859e077bec915', class: `footer ${this.background === 'DarkGreen' ? 'footer--bg-brand' : ''}` }, h("section", { key: '656062bc7f1b7711b52a4bebab5d6d71070146eb', class: "footer-content" }, (this.mainLinkTilte || this.mainImage) && (h("div", { key: '74b1a98c3d52d888b778d65c18c9f71c68cbe29e', class: "footer-icon-section" }, h("a", { key: '5ddeddc692a2f2a760e1a8ef35cf7d0a5d37aa34', class: this.background === 'DarkGreen' ? 'link--on-color' : '', href: this.mainLink || '#', target: "_blank", rel: "noopener noreferrer" }, this.mainLinkTilte))), (this.mainTitle || this.mainDescription) && (h("div", { key: '703ff7ec5dbf14bfb400002f1d5bfbac7933438d', class: "footer-title-description" }, h("h3", { key: '6f7b63f6b677483d589d4b29b8eee87d768ab3b3', class: this.background === 'DarkGreen' ? 'link--on-color' : '' }, this.mainTitle), h("p", { key: 'f0e79608beeff070a161e75c857228df0a53a57c', class: this.background === 'DarkGreen' ? 'link--on-color' : '' }, this.mainDescription))), this.NavLinks && (h("section", { key: '637f1980eeedd5e2aa30ab543bbe4c59ea606bac', class: "footer__nav-links" }, this.groupLinks.map(group => (h("div", { class: "footer__nav-links-column" }, h("div", { class: "footer__nav-links-column-title" }, group.title), h("ul", { class: "footer__nav-links-column-body" }, group.links.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name))))))))), h("div", { key: '72df9188b5c238e054bbd33522bdd2eff4954e1b', class: "footer__nav-links-column" }, this.socialMediaLinks.length > 0 && (h("div", { key: 'e8b12056916617acfcba5cf838eeedb1cea40826' }, this.socialMediaTitle && h("div", { key: '308160ac867e6b9e81eefc3c68e6564a64485d18', class: "footer__nav-links-column-title" }, this.socialMediaTitle), h("div", { key: 'b11dfd16be906b404921c83bf33e8f3624188963', class: "dga-flex icons-container" }, this.socialMediaLinks.map(social => (h("a", { href: social.target, title: social.title, class: `dga-btn dga-btn--md dga-btn--secondary-outline dga-btn--icon ${this.background} ${this.background === 'DarkGreen' ? 'dga-btn--secondary-outline--on-color' : ''}` }, h("span", { class: "btn-icon" }, h("dga-icon", Object.assign({}, social.icon, { size: 20 }))))))))), this.accessibilityLinks.length > 0 && (h("div", { key: '466bfa699431b498bd6598eba2f1005ffe9b81a1' }, h("div", { key: '17454ed7c7c895da07c3cb222d67086327506b5f', class: "footer__nav-links-column-title" }, this.accessibilityTitle), h("div", { key: 'f2f5e07255b34a927ff304fefb64e6cd0574cbd6', class: "dga-flex icons-container" }, this.accessibilityLinks.map(access => (h("a", { href: access.target, title: access.title, class: `dga-btn dga-btn--md dga-btn--secondary-outline dga-btn--icon ${this.background} ${this.background === 'DarkGreen' ? 'dga-btn--secondary-outline--on-color' : ''}` }, h("span", { class: "btn-icon" }, h("dga-icon", Object.assign({}, access.icon, { size: 20 })))))))))))), h("section", { key: 'd85529b7cd8b39dc372af460997faaa916ddb303', class: "footer__basic" }, h("div", { key: 'abd90817943a4452096952775422c5fcbe467528', class: "footer__actions-copyright" }, h("ul", { key: '7e6f0f8cea727df44a9dc2c3a13717aef4524611', class: "footer__actions" }, this.basicLinks.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral link--inline ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name)))))), this.copyright && h("p", { key: 'ea8c4c8c4f4c62cfd4c094b987c6b48debff9de9', class: "footer__copyright text-sm-semibold" }, this.copyright), h("ul", { key: 'f894dc366075094d781f033f5a26a663d1a40ca8', class: "footer__extra-actions" }, this.extraLinks.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name))))))), h("div", { key: 'a8fd80f57cd13dcf2fb00f156467f5ee060a85a2', class: "footer__logos" }, this.bottomImages.map(image => (h("img", { src: image, key: guid() }))))))));
    }
    static get is() { return "dga-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["footer.css"]
        };
    }
    static get properties() {
        return {
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "'DarkGreen' | 'Light'",
                    "resolved": "\"DarkGreen\" | \"Light\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "NavLinks": {
                "type": "boolean",
                "attribute": "nav-links",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "mainTitle": {
                "type": "string",
                "attribute": "main-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "mainDescription": {
                "type": "string",
                "attribute": "main-description",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "mainLink": {
                "type": "string",
                "attribute": "main-link",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "mainLinkTilte": {
                "type": "string",
                "attribute": "main-link-tilte",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "mainImage": {
                "type": "string",
                "attribute": "main-image",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "copyright": {
                "type": "string",
                "attribute": "copyright",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "groupLinks": {
                "type": "unknown",
                "attribute": "group-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title: string; links: { name: string; target: string }[] }[]",
                    "resolved": "{ title: string; links: { name: string; target: string; }[]; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "socialMediaTitle": {
                "type": "string",
                "attribute": "social-media-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Social Media'"
            },
            "socialMediaLinks": {
                "type": "unknown",
                "attribute": "social-media-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title?: string; target: string; icon: Icon }[]",
                    "resolved": "{ title?: string; target: string; icon: Icon; }[]",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "accessibilityTitle": {
                "type": "string",
                "attribute": "accessibility-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Accessibility Tools'"
            },
            "accessibilityLinks": {
                "type": "unknown",
                "attribute": "accessibility-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title?: string; target: string; icon: Icon }[]",
                    "resolved": "{ title?: string; target: string; icon: Icon; }[]",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "basicLinks": {
                "type": "unknown",
                "attribute": "basic-links",
                "mutable": false,
                "complexType": {
                    "original": "{ name: string; target: string }[]",
                    "resolved": "{ name: string; target: string; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "extraLinks": {
                "type": "unknown",
                "attribute": "extra-links",
                "mutable": false,
                "complexType": {
                    "original": "{ name: string; target: string }[]",
                    "resolved": "{ name: string; target: string; }[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "bottomImages": {
                "type": "unknown",
                "attribute": "bottom-images",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
}
