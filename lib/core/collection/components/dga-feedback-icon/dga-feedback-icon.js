import { h } from "@stencil/core";
export class DgaFeedbackIcon {
    constructor() {
        this.type = 'neutral-info';
        this.variant = 'container';
        this.size = 24;
        this.icons = {
            'success-check': {
                icon: 'checkmark-circle-02',
                color: '#067647',
            },
            'blue-info': {
                icon: 'information-circle',
                color: '#175CD3',
            },
            'neutral-info': {
                icon: 'information-circle',
                color: '#384250',
            },
            'neutral-?': {
                icon: 'help-circle',
                color: '#384250',
            },
            'warning-!-circle': {
                icon: 'alert-circle',
                color: '#B54708',
            },
            'warning-!-triangle': {
                icon: 'alert-02',
                color: '#B54708',
            },
            'error-!': {
                icon: 'alert-circle',
                color: '#B42318',
            },
            'error-x': {
                icon: 'cancel-circle',
                color: '#B42318',
            },
        };
    }
    render() {
        return (h("span", { key: 'cacc28f02b7d22edec7b15706f4b715707065b50', class: "tooltip-main__icon" }, h("dga-icon", { key: 'fca0d3e2f7bae0337fe7a1ae3572d8da217bd152', name: this.icons[this.type].icon, variant: this.variant === 'icon-only' ? 'stroke' : 'solid', size: this.size, color: this.icons[this.type].color })));
    }
    static get is() { return "dga-feedback-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-feedback-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-feedback-icon.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "IconType",
                    "resolved": "\"blue-info\" | \"error-!\" | \"error-x\" | \"neutral-?\" | \"neutral-info\" | \"success-check\" | \"warning-!-circle\" | \"warning-!-triangle\"",
                    "references": {
                        "IconType": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-feedback-icon/dga-feedback-icon.tsx",
                            "id": "src/components/dga-feedback-icon/dga-feedback-icon.tsx::IconType"
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
                "reflect": false,
                "defaultValue": "'neutral-info'"
            },
            "variant": {
                "type": "string",
                "attribute": "style",
                "mutable": false,
                "complexType": {
                    "original": "'container' | 'icon-only'",
                    "resolved": "\"container\" | \"icon-only\"",
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
                "defaultValue": "'container'"
            },
            "size": {
                "type": "number",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "24 | 16",
                    "resolved": "16 | 24",
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
                "defaultValue": "24"
            }
        };
    }
}
