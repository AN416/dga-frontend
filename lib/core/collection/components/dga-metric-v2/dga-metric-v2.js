import { h, Fragment } from "@stencil/core";
export class DgaMetric {
    constructor() {
        this.label = '';
        this.Style = 'small-chart';
        this.percentage = '0%';
        this.showFeaturedIcon = true;
        this.featuredIcon = (h("dga-icon", { name: "trade-up", variant: "stroke", size: 24 })); // Default icon
        this.showChart = true;
        this.showInfo = true;
        this.showActions = true;
        this.showSecondaryAction = true;
        this.showMoreButton = true;
        this.changeProps = {
            type: '01',
            trend: 'positive',
        };
        this.onPrimaryAction = () => { };
        this.onSecondaryAction = () => { };
        this.onExpandAction = () => { };
        this.changeIcons = {
            '01': {
                positive: 'arrow-up-02',
                negative: 'arrow-down-02',
            },
            '02': {
                positive: 'trade-up',
                negative: 'trade-down',
            },
        };
    }
    render() {
        return (h("div", { key: '16e250bf1cd197133420eb1fae8306b1be38907a', class: `dga-metric`, "data-chart-size": this.Style }, h("div", { key: '703bb764f7bcf030fa3b9b310c00c70e0c4f69f9', class: "dga-metric__head" }, h("div", { key: 'b6c61f8e054daa608bcadb613dd521c8fb26a27c', class: "dga-metric__head-content" }, this.showFeaturedIcon && h("div", { key: '886baf32c2f2fa4301903747d1cc9e4a6882a591', class: "featured-icon featured-icon--light-brand featured-icon--circle featured-icon--sm" }, this.featuredIcon), this.label && h("span", { key: '8e44d7a7bf0f0f43cc383fa9e8eb7047294c9a06', class: "dga-metric__head-content-text" }, this.label)), this.showMoreButton && (h("dga-button-v2", { key: 'ca3e3527a32b8e020a93b07ca25a89dc4f62a2c3', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-vertical',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onExpandAction }))), h("div", { key: '483aa40f5860a2fc59b5f333a07671e9dbd54885', class: "dga-metric__body" }, h("div", { key: '988001e273024ad160cfafae98b395acbc1d867a', class: "dga-metric__content" }, h("h3", { key: '8a5ce22d7aecbb4f5d071e8ab49822b521e497cd', class: "dga-metric__content-percentage" }, this.percentage), this.showInfo && (h("div", { key: '692ea741750e0299cac6e674f5fdbcaa6ea8e4b4', class: "dga-metric__content-change", "data-change-trend": this.changeProps.trend }, h("span", { key: '3b10ccdac0392d3e4ea99abc4d9be495ff70e152', class: "dga-metric__content-change-icon" }, h("dga-icon", { key: 'e78591cf895664307d669554632a78df630ce3d2', name: this.changeIcons[this.changeProps.type][this.changeProps.trend], type: "rounded", variant: "stroke", size: 24 })), h("span", { key: 'da35c2121126783a506c50253e366e0800b4a7af', class: "dga-metric__content-change-value" }, Math.abs(100), "%"), h("span", { key: '6b5320398ac330e54866fb03afc6f4cde14717b0', class: "dga-metric__content-change-period" }, "vs last month")))), this.showChart && (h("div", { key: '538539b98bbf0ab5d4f6cdc9c96dc820712fa09a', class: "dga-metric__chart" }, h("dga-metric-chart", Object.assign({ key: '01ce095105d67feffd30b312dda2cc256bab1994' }, this.chartProps, { size: this.Style === 'small-chart' ? 'sm' : 'lg' }))))), this.showActions && (h(Fragment, { key: '6f87739c6944da7f5b0c3acf0323183017695467' }, h("div", { key: 'cda471b7d2d3cd42a2683ca253aa039342f85c62', class: "dga-metric__divider" }), h("div", { key: '38d34fb11e0ca16336e60187000862c1b216124c', class: "dga-metric__actions" }, this.showSecondaryAction && (h("dga-button-v2", { key: 'eca5013c0d29fbd20349f4fe928ea07f87544540', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'settings-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onSecondaryAction })), h("dga-button-v2", { key: '67a5b1011657934baf3f0aeb44771ec12f303dd9', variant: "secondary-outline", class: "dga-metric__actions--primary", label: "View Report", onClick: this.onPrimaryAction }))))));
    }
    static get is() { return "dga-metric-v2"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-metric.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-metric.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
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
            "Style": {
                "type": "string",
                "attribute": "style",
                "mutable": false,
                "complexType": {
                    "original": "'small-chart' | 'large-chart'",
                    "resolved": "\"large-chart\" | \"small-chart\"",
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
                "defaultValue": "'small-chart'"
            },
            "percentage": {
                "type": "string",
                "attribute": "percentage",
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
                "defaultValue": "'0%'"
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
            "featuredIcon": {
                "type": "any",
                "attribute": "featured-icon",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement | any",
                    "resolved": "any",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
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
                "reflect": false,
                "defaultValue": "(<dga-icon name=\"trade-up\" variant=\"stroke\" size={24} />)"
            },
            "showChart": {
                "type": "boolean",
                "attribute": "show-chart",
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
            "showInfo": {
                "type": "boolean",
                "attribute": "show-info",
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
            "showActions": {
                "type": "boolean",
                "attribute": "show-actions",
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
            "showMoreButton": {
                "type": "boolean",
                "attribute": "show-more-button",
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
            "changeProps": {
                "type": "unknown",
                "attribute": "change-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n    type: '01' | '02';\n    trend: 'positive' | 'negative';\n  }",
                    "resolved": "{ type: \"01\" | \"02\"; trend: \"negative\" | \"positive\"; }",
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
                "defaultValue": "{\n    type: '01',\n    trend: 'positive',\n  }"
            },
            "chartProps": {
                "type": "unknown",
                "attribute": "chart-props",
                "mutable": false,
                "complexType": {
                    "original": "IChartProps",
                    "resolved": "IChartProps",
                    "references": {
                        "IChartProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric-v2/dga-metric-v2.tsx",
                            "id": "src/components/dga-metric-v2/dga-metric-v2.tsx::IChartProps"
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
                "setter": false
            },
            "trend": {
                "type": "unknown",
                "attribute": "trend",
                "mutable": false,
                "complexType": {
                    "original": "ITrend",
                    "resolved": "ITrend",
                    "references": {
                        "ITrend": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric-v2/dga-metric-v2.tsx",
                            "id": "src/components/dga-metric-v2/dga-metric-v2.tsx::ITrend"
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
}
