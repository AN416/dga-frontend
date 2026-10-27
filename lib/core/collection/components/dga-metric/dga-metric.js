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
        return (h("div", { key: '40bf57c5eaf447ef65a014c778034d4f2b1ef185', class: `dga-metric`, "data-chart-size": this.Style }, h("div", { key: '93c98ded80f6fa521265ea8e08b1b0fdfafb1aab', class: "dga-metric__head" }, h("div", { key: 'fde35c5bb1dc7c2a332fb8af5df03bfefb2a06e2', class: "dga-metric__head-content" }, this.showFeaturedIcon && h("div", { key: '3a4e4cb3bab6b1fe10e1e720990e1ef2b40e70f2', class: "featured-icon featured-icon--light-brand featured-icon--circle featured-icon--sm" }, this.featuredIcon), this.label && h("span", { key: '11644fd322d2548724474a537d053c5128b65798', class: "dga-metric__head-content-text" }, this.label)), this.showMoreButton && (h("dga-button-v2", { key: 'a6a801bf2bb1ad03895f2badfd1eb4fa05ba354c', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-vertical',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onExpandAction }))), h("div", { key: 'a82ab4cfe7233c9eb756441578059396d7ee67f1', class: "dga-metric__body" }, h("div", { key: '0880bf34030bd4a2978b800643a522af0e295d51', class: "dga-metric__content" }, h("h3", { key: '88b31d0a974c5d256cb61138e9c512e7c779aee6', class: "dga-metric__content-percentage" }, this.percentage), this.showInfo && (h("div", { key: '5378030887aa72575bfaad9edd5ae6a4dc8c1f6c', class: "dga-metric__content-change", "data-change-trend": this.changeProps.trend }, h("span", { key: '66a569d7d6f3a4fd090d28ae3a616f498d5d5f3d', class: "dga-metric__content-change-icon" }, h("dga-icon", { key: 'ff1a9edf4998c62651e5afffb4b7663e281b3f8a', icon: this.changeIcons[this.changeProps.type][this.changeProps.trend], type: "rounded", variant: "stroke", size: 24 })), h("span", { key: 'b4c26f79a46148ef6b2dc2bdb8cef06e935eb69c', class: "dga-metric__content-change-value" }, Math.abs(100), "%"), h("span", { key: '18a8bad949d131c848da43c01000438025d1837a', class: "dga-metric__content-change-period" }, "vs last month")))), this.showChart && (h("div", { key: '8ca0ac3ed419c9f5ab46053d30531a1b2ee522df', class: "dga-metric__chart" }, h("dga-metric-chart", Object.assign({ key: 'fe052ae38893cdad0cac7782367754803cf13dce' }, this.chartProps, { size: this.Style === 'small-chart' ? 'sm' : 'lg' }))))), this.showActions && (h(Fragment, { key: '742a94a81372d4c5bba51e650c779a3560ba9de9' }, h("div", { key: '98402ddee1d267498b442c86a91f0ecd150fb569', class: "dga-metric__divider" }), h("div", { key: 'f6564264c8b28360f93aec8ccfb5af1e0fd24f9d', class: "dga-metric__actions" }, this.showSecondaryAction && (h("dga-button-v2", { key: '8ad9482934eb03dbe56f68527d8e5282b72a568d', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'settings-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onSecondaryAction })), h("dga-button-v2", { key: '30d6f5adfe6a34e52b488de419818c85354bad42', variant: "secondary-outline", class: "dga-metric__actions--primary", label: "View Report", onClick: this.onPrimaryAction }))))));
    }
    static get is() { return "dga-metric"; }
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric/dga-metric.tsx",
                            "id": "src/components/dga-metric/dga-metric.tsx::IChartProps"
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric/dga-metric.tsx",
                            "id": "src/components/dga-metric/dga-metric.tsx::ITrend"
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
