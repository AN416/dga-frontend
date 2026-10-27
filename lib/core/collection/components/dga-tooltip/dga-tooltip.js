import { Host, h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaTooltip {
    constructor() {
        this.beakPlacement = 'none';
        this.beakAlignment = 'center';
        this.direction = 'top';
        this.icon = false;
        this.theme = 'light';
        this.isHovered = false;
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
                icon: 'sharp hgi-alert-02',
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
        this.handleMouseEnter = () => {
            this.isHovered = true;
        };
        this.handleMouseLeave = () => {
            this.isHovered = false;
        };
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-tooltip');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h(Host, { key: '3fe0221c7472bcb7b6bc0dae5d8eb06b93ff0bfc', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: 'e57845bdc7367bc2db82d3c2fc704572c3376b2a', class: "dga-tooltip", "data-theme": this.theme, "data-beak-direction": `${this.beakPlacement}-${this.beakAlignment}` }, this.isHovered && (h("div", { key: 'a7308206ccd9813b06537caf424a72162caf5e12', class: "dga-tooltip-main", "data-direction": this.direction }, h("div", { key: '4b8504882ffc81682436406ff4abb203bb6c6585', class: "dga-tooltip-main__wrapper" }, this.beakPlacement !== 'none' && h("span", { key: 'ade1a3a6c9fe38fc28c59d735e157dffd5621f60', class: "dga-tooltip-main__beak", "data-beak-direction": `${this.beakPlacement}-${this.beakAlignment}` }), this.icon && (h("span", { key: '4339a99e0e8007d8dd22f0e679999833c600f14e', class: "dga-tooltip-main__icon" }, h("dga-icon", { key: '41ead42fef18031b6b8a498246dd2a7a8030ea51', name: this.icons[this.feedbackIcon.type].icon, variant: this.feedbackIcon.style === 'icon-only' ? "stroke" : "solid", size: this.feedbackIcon.size, color: this.icons[this.feedbackIcon.type].color }))), h("div", { key: 'd018ecb249ba668b423d6a316000fcb8178da186', class: "dga-tooltip-main__content" }, this.tooltipTitle && h("span", { key: '4521057e775d29e35c75c2e1ae9026fb73c5b8ea', class: "dga-tooltip-main__content__title" }, this.tooltipTitle), this.helperText && h("span", { key: '817af2a070714e6e1819f00d12fe012be29fa130', class: "dga-tooltip-main__content__helper-text" }, this.helperText))))), h("div", { key: '9c6fc0d985b4a5f3630fa36ca874e2630b852d3c', class: "dga-tooltip-item", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("slot", { key: '28f49e94d3e7a3001480264a8764f5b81bf63e7d' })))));
    }
    static get is() { return "dga-tooltip"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string | undefined",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
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
            "beakPlacement": {
                "type": "string",
                "attribute": "beak-placement",
                "mutable": false,
                "complexType": {
                    "original": "BeakPlacement",
                    "resolved": "\"bottom\" | \"left\" | \"none\" | \"right\" | \"top\"",
                    "references": {
                        "BeakPlacement": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::BeakPlacement"
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
                "defaultValue": "'none'"
            },
            "beakAlignment": {
                "type": "string",
                "attribute": "beak-alignment",
                "mutable": false,
                "complexType": {
                    "original": "BeakAlignment",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {
                        "BeakAlignment": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::BeakAlignment"
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
                "defaultValue": "'center'"
            },
            "direction": {
                "type": "string",
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "Direction",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "Direction": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::Direction"
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
                "defaultValue": "'top'"
            },
            "tooltipTitle": {
                "type": "string",
                "attribute": "title",
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
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
            "icon": {
                "type": "boolean",
                "attribute": "icon",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "defaultValue": "false"
            },
            "feedbackIcon": {
                "type": "unknown",
                "attribute": "feedback-icon",
                "mutable": false,
                "complexType": {
                    "original": "FeedbackIcon",
                    "resolved": "FeedbackIcon",
                    "references": {
                        "FeedbackIcon": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::FeedbackIcon"
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
            },
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "Theme",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {
                        "Theme": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::Theme"
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
                "defaultValue": "'light'"
            }
        };
    }
    static get states() {
        return {
            "isHovered": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
