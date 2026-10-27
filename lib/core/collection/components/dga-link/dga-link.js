// @ts-nocheck
import { h } from "@stencil/core";
export class DgaLink {
    constructor() {
        this.variant = 'primary';
        this.size = "md";
        this.target = '_self';
        this.preventScrollReset = false;
        this.state = {};
        this.focus = false;
        // --- Internal Methods ---
        this.handleClick = (ev) => {
            if (this.disabled) {
                ev.preventDefault();
                ev.stopPropagation();
                return;
            }
            this.ndsClick.emit(ev);
            this.onClick.emit(ev);
        };
        this.handleFocus = () => {
            this.ndsFocus.emit();
        };
        this.handleBlur = () => {
            this.ndsBlur.emit();
        };
    }
    render() {
        const { url, target, disabled } = this;
        // if (this.external)
        //   return (
        //     <a
        //       href={this.url}
        //       target={this.target}
        //       onClick={event => this.handleClick(event)}
        //       onMouseDown={() => this.focus = true}
        //       onMouseUp={() => this.focus = false}
        //       class={`link link--${this.size} ${this.focus? "focus" : ""} link--${this.variant} ${this.inline ? 'link--inline' : ''} ${this.disabled ? 'link--disabled' : ''} ${this.extraClass}`}
        //     >
        //       <span class="link__label">{this.label}</span>
        //       {this.icon && this.iconType && <span className="link__icon">{this.iconType}</span>}
        //       <slot />
        //     </a>
        //   );
        return (h("a", { key: '7c9d0474247ed6b12938565e5bd4a964cd2f8cb8', href: url,
            // onMouseDown={() => this.focus = true}
            // onMouseUp={() => this.focus = false}
            href: disabled ? undefined : this.url, target: disabled ? undefined : this.target, onClick: this.handleClick, onFocus: this.handleFocus, onBlur: this.handleBlur, class: `link link--${this.size} link--${this.variant} ${this.inline ? 'link--inline' : ''} ${this.disabled ? 'link--disabled' : ''} ${this.extraClass}` }, h("span", { key: '6ed7c3d64be3f456ed498ae020528e987685aa65', class: "link__label" }, this.label), this.icon && this.iconType && h("span", { key: '18e20109e985f7e68e3c8f303ac834369d0f204c', class: "link__icon" }, this.iconType), h("slot", { key: 'd0f701f37d1b855abe344701ad481312fadac87e' })));
    }
    static get is() { return "dga-link"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-link.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"primary\"",
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
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
                "defaultValue": "\"md\""
            },
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
                "reflect": false
            },
            "url": {
                "type": "string",
                "attribute": "url",
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
                "reflect": false
            },
            "inline": {
                "type": "boolean",
                "attribute": "inline",
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
            "icon": {
                "type": "boolean",
                "attribute": "icon",
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
            "iconType": {
                "type": "any",
                "attribute": "icon-type",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                "reflect": false
            },
            "external": {
                "type": "boolean",
                "attribute": "external",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "use target prop instead"
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
                "mutable": false,
                "complexType": {
                    "original": "'_blank' | '_self' | '_parent' | '_top'",
                    "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
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
                "defaultValue": "'_self'"
            },
            "preventScrollReset": {
                "type": "boolean",
                "attribute": "prevent-scroll-reset",
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
            "state": {
                "type": "unknown",
                "attribute": "state",
                "mutable": false,
                "complexType": {
                    "original": "{}",
                    "resolved": "{}",
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
                "defaultValue": "{}"
            },
            "extraClass": {
                "type": "string",
                "attribute": "extra-class",
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
            }
        };
    }
    static get states() {
        return {
            "focus": {}
        };
    }
    static get events() {
        return [{
                "method": "ndsClick",
                "name": "ndsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link is clicked. The event is composed and bubbles,\nallowing it to be caught by parent components outside the shadow DOM."
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }, {
                "method": "ndsFocus",
                "name": "ndsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link gains focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "ndsBlur",
                "name": "ndsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "onClick",
                "name": "onClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "use ndsClick event instead"
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
