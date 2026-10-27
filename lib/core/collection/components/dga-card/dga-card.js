import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaCard {
    constructor() {
        this.type = 'default';
        this.showTitle = true;
        this.showDescription = true;
        this.showFeaturedIcon = true;
        this.image = '';
        this.disabled = false;
        this.effect = 'with-shadow';
        this.cardTitle = 'Card Title';
        this.description = 'Card content placeholder text goes here';
        this.featuredIcon = {
            name: 'checkmark-circle-02',
            variant: 'stroke',
            type: 'sharp',
            size: 24,
        }; // Default icon
        this.showPrimaryAction = true;
        this.primaryActionLabel = 'Primary Action';
        this.showSecondaryAction = true;
        this.isSelected = false;
        this.secondaryActionLabel = 'Secondary Action';
        this.disablePrimaryAction = false;
        this.disableSecondaryAction = false;
        this.onCheckboxChange = () => { };
        this.onPrimaryAction = () => { };
        this.onSecondaryAction = () => { };
        this.onExpandAction = () => { };
        this.isFocused = false;
        this.expanded = false;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Stable id for aria-controls linking the toggle to the collapsible region
        this.collapseId = `dga-card-collapse-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    toggleExpand() {
        var _a;
        this.expanded = !this.expanded;
        (_a = this.onExpandAction) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string'
            ? JSON.parse(this.sx)
            : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '182f65453deb74f36dc9574b70914f0df7245b30', id: this.componentId, style: this.rootStyles }, h("div", Object.assign({ key: '6381f5cb57bac08d7c4674d8f376814f1438d420', class: `card dga-flex-column ${this.type === 'selectable' ? "card---selectable" : ""} ${this.disabled ? 'disabled' : ''} ${this.isFocused ? 'focused' : ''} card--${this.effect}` }, (this.type === 'selectable' ? { onClick: this.onCheckboxChange } : {}), { tabIndex: 0 }), this.image && (h("div", { key: 'c0cb7db8b61141eb464124722d11fc915d6d8ea3', class: "card__image-container" }, h("img", { key: '286a899ff8cbc29cdd1dfd717dff135d91a70c3e', src: this.image, alt: "Card" }))), this.showFeaturedIcon && (h("dga-featured-icon", { key: '45a6ba62dac8e3db41eae1b509f39ac4ee3def87', icon: this.featuredIcon, size: 'lg' })), this.type === 'selectable' && (h("div", { key: '4dd646a8ddb83795192fdef419e5e6b9a519c11e', class: "card__checkbox-container" }, h("dga-checkbox", { key: 'e541dbf01a61cde733b05792f6269f3ee5cd0975', checked: this.isSelected, color: "brand", onChange: this.onCheckboxChange }))), (this.showTitle || this.showDescription) && (h("div", { key: '44cd5fd6fe920a4535793f19e8c70021fc781dd4', class: "card__content-text dga-flex-column" }, this.showTitle && h("h4", { key: '634d1d871b95ecbdd02a349239ec00bceeed160d', class: "text-lg-bold" }, this.cardTitle, " "), this.showDescription && h("p", { key: '2274369a315ecc125e1d019210c43724c2dbd17e', class: "text-md-regular" }, this.description))), h("slot", { key: 'e3afcc329de57d68ef9bd61b09c3451a65e49c2c' }), this.type === 'default' && (this.showPrimaryAction || this.showSecondaryAction) && (h("div", { key: '834b3de6ade86da0524dac53ddfefc5f188771df', class: "card__action card__action--default" }, this.showSecondaryAction && h("dga-button", { key: 'e81f81aae2ed6b075d3717da215245c6c6601edc', label: this.secondaryActionLabel, onClick: this.onSecondaryAction, size: "lg", variant: "secondary-outline", disabled: this.disableSecondaryAction }), this.showPrimaryAction && h("dga-button-v2", { key: 'cee354b0ed81786f620fc338d8f490944b51f86c', label: this.primaryActionLabel, onClick: this.onPrimaryAction, size: "lg", variant: "primary", disabled: this.disablePrimaryAction }))), this.type === 'expanded' && (h("div", { key: '7b7334ab82ec662545b4c7a9006b3b86a99c6fb0', class: "card__expandable" }, h("div", { key: '2a4eb42c87b40d8cac891714355d224c6cf95d6b', class: `card__action card__action--expanded ${this.expanded ? 'is-expanded' : ''}` }, h("dga-button-v2", { key: 'cf9519f276da9e9390fd5f027c556347dd5858d0', iconOnly: true, onClick: () => this.toggleExpand(), size: "lg", variant: "subtle", leadIcon: true, "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.collapseId, leadIconProps: {
                name: 'arrow-down-01',
                variant: 'stroke',
                type: 'rounded',
                color: "var(--icon-default, #161616)"
            } })), h("div", { key: '902fdac3d2f296ebf33787102032edb1c00d49eb', id: this.collapseId, class: `collapse-content ${this.expanded ? 'expanded' : ''}`, "aria-hidden": this.expanded ? 'false' : 'true' }, h("div", { key: '8b80baada666f8080961c34a97ec8510e4ad5b6d', class: "collapse-content__inner" }, h("slot", { key: 'b9e157fa6762645b2543744c1e36836c0adf7838', name: "collapse-content" }))))))));
    }
    static get is() { return "dga-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-card.css"]
        };
    }
    static get properties() {
        return {
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "string | { [x: string]: any; }",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-style-manager",
                            "id": "src/utils/sx-style-manager.ts::SxProps"
                        }
                    }
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'expanded' | 'selectable'",
                    "resolved": "\"default\" | \"expanded\" | \"selectable\"",
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
                "reflect": false,
                "defaultValue": "'default'"
            },
            "showTitle": {
                "type": "boolean",
                "attribute": "show-title",
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
                "reflect": false,
                "defaultValue": "true"
            },
            "showDescription": {
                "type": "boolean",
                "attribute": "show-description",
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
                "reflect": false,
                "defaultValue": "true"
            },
            "showFeaturedIcon": {
                "type": "boolean",
                "attribute": "show-featured-icon",
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
                "reflect": false,
                "defaultValue": "true"
            },
            "image": {
                "type": "string",
                "attribute": "image",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "effect": {
                "type": "string",
                "attribute": "effect",
                "mutable": false,
                "complexType": {
                    "original": "'with-shadow' | 'no-shadow' | 'stroke'",
                    "resolved": "\"no-shadow\" | \"stroke\" | \"with-shadow\"",
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
                "reflect": false,
                "defaultValue": "'with-shadow'"
            },
            "cardTitle": {
                "type": "string",
                "attribute": "card-title",
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
                "reflect": false,
                "defaultValue": "'Card Title'"
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                "reflect": false,
                "defaultValue": "'Card content placeholder text goes here'"
            },
            "featuredIcon": {
                "type": "unknown",
                "attribute": "featured-icon",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    name: 'checkmark-circle-02',\n    variant: 'stroke',\n    type: 'sharp',\n    size: 24,\n  }"
            },
            "showPrimaryAction": {
                "type": "boolean",
                "attribute": "show-primary-action",
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
                "reflect": false,
                "defaultValue": "true"
            },
            "primaryActionLabel": {
                "type": "string",
                "attribute": "primary-action-label",
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
                "reflect": false,
                "defaultValue": "'Primary Action'"
            },
            "showSecondaryAction": {
                "type": "boolean",
                "attribute": "show-secondary-action",
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
                "reflect": false,
                "defaultValue": "true"
            },
            "isSelected": {
                "type": "boolean",
                "attribute": "is-selected",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "secondaryActionLabel": {
                "type": "string",
                "attribute": "secondary-action-label",
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
                "reflect": false,
                "defaultValue": "'Secondary Action'"
            },
            "disablePrimaryAction": {
                "type": "boolean",
                "attribute": "disable-primary-action",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "disableSecondaryAction": {
                "type": "boolean",
                "attribute": "disable-secondary-action",
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
                "reflect": false,
                "defaultValue": "false"
            },
            "onCheckboxChange": {
                "type": "unknown",
                "attribute": "on-checkbox-change",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
                "defaultValue": "() => {}"
            },
            "onPrimaryAction": {
                "type": "unknown",
                "attribute": "on-primary-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
                "defaultValue": "() => {}"
            },
            "onSecondaryAction": {
                "type": "unknown",
                "attribute": "on-secondary-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
                "defaultValue": "() => {}"
            },
            "onExpandAction": {
                "type": "unknown",
                "attribute": "on-expand-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
                "defaultValue": "() => {}"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {},
            "expanded": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "handleSxChange"
            }];
    }
}
