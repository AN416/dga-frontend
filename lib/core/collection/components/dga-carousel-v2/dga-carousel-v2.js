import { arrowLeft01Stroke, arrowRight01Stroke } from "@platformscode/icons";
import { h } from "@stencil/core";
export class DgaCarousel {
    constructor() {
        this.DIRECTION = {
            LEFT: Symbol('LEFT'),
            RIGHT: Symbol('RIGHT')
        };
        this.variant = 'arrows';
        this.showDots = true;
        this.steps = 1;
        this.transitionDuration = 600;
        this.Dir = 'rtl';
        this.size = 'lg';
        this.arrowsVariant = 'primary';
        this.arrows = {
            variant: 'primary',
            size: 'lg'
        };
        this.childWidth = 0;
        this.childrenLength = 0;
        this.currentSlideIndex = 0;
    }
    isRTL() {
        return this.Dir === 'rtl';
    }
    changeSlide(direction) {
        const isMovingForward = direction === this.DIRECTION.RIGHT;
        const isMovingBackward = direction === this.DIRECTION.LEFT;
        if (this.isRTL()) {
            // In RTL: RIGHT means going towards index 0, LEFT means going towards the end
            if (isMovingForward && this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
            else if (isMovingBackward && this.currentSlideIndex < this.childrenLength - 1) {
                this.currentSlideIndex++;
            }
        }
        else {
            // In LTR: RIGHT means going towards the end, LEFT means going towards index 0
            if (isMovingForward && this.currentSlideIndex < this.childrenLength - 1) {
                this.currentSlideIndex++;
            }
            else if (isMovingBackward && this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
        }
        this.updateSlidePosition();
    }
    updateSlidePosition() {
        if (this.slidesContainer) {
            const translateX = this.isRTL()
                ? (this.currentSlideIndex * this.childWidth)
                : -(this.currentSlideIndex * this.childWidth);
            this.slidesContainer.style.transform = `translateX(${translateX}px)`;
        }
    }
    showLeftArrow() {
        if (this.isRTL()) {
            // In RTL: Left arrow shows when we can move towards the end (increase index)
            return this.currentSlideIndex < this.childrenLength - 1;
        }
        // In LTR: Left arrow shows when we can move towards the start (decrease index)
        return this.currentSlideIndex > 0;
    }
    showRightArrow() {
        if (this.isRTL()) {
            // In RTL: Right arrow shows when we can move towards the start (decrease index)
            return this.currentSlideIndex > 0;
        }
        // In LTR: Right arrow shows when we can move towards the end (increase index)
        return this.currentSlideIndex < this.childrenLength - 1;
    }
    isHighlighted(index) {
        return index === this.currentSlideIndex;
    }
    componentDidLoad() {
        var _a;
        const slot = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', this.calculateChildWidth.bind(this));
        this.calculateChildWidth();
        this.updateChildrenLength();
    }
    calculateChildWidth() {
        const child = this.slidesContainer.querySelector('.KCarousel-slides > *');
        if (child) {
            this.childWidth = child.clientWidth;
        }
    }
    updateChildrenLength() {
        if (this.slidesContainer) {
            this.childrenLength = this.slidesContainer.childElementCount;
        }
    }
    render() {
        return (h("section", { key: '61c5e3b9305652a043142e451e799f9f57c56c46', class: "embla" }, h("div", { key: '4bef104735871dc60c68335a89e555b396cecf23', class: "embla__viewport" }, h("div", { key: '6f5249dca7f155e431722ab673c9293c64b365ed', class: "embla__container" }, h("div", { key: '7523f2c229bb849babbcfce09361d5196083818c', class: "embla__slide" }, h("div", { key: 'e803610163877ea26eee307cd652e4fd0a299828', class: "embla__slide__number" }, "1")), h("div", { key: '4071a972deba78e191e9b9d0790b8d7e13de7a2b', class: "embla__slide" }, h("div", { key: 'd8abe4bdf2d853ac19f6917186f93807e578d217', class: "embla__slide__number" }, "2")), h("div", { key: '8b63aabfbec2cd9781a426272c73db38a887ffdd', class: "embla__slide" }, h("div", { key: 'fc5b37aa45a3a4c32e71790b6772ce8303966c42', class: "embla__slide__number" }, "3")), h("div", { key: '5e192dac489c40a3d278229a8e567e735d3cf136', class: "embla__slide" }, h("div", { key: 'b8913089aee2532fb013a7ea5640e3756fc24a1f', class: "embla__slide__number" }, "4")), h("div", { key: '743e687116a4126e16647779604b0f9ae5ec0ebf', class: "embla__slide" }, h("div", { key: 'b4cb00c0222346f6653f29013460ff4be7c5ec34', class: "embla__slide__number" }, "5")))), h("div", { key: '1afa5de757b7010573fbef83bf5b3afb83a89dd9', class: "embla__controls" }, h("div", { key: '9bfe3ab1d57b5b5dabd39c412df8aee42cb44cd1', class: "embla__buttons" }, h("button", { key: '8f56208226aa23960e00d2fbb122c4d1ebba8992', class: "embla__button embla__button--prev", type: "button" }, h("dga-icon", { key: 'ee7511529678b94ce4362aa274eac62a483eaaec', class: "embla__button__svg", icon: arrowLeft01Stroke, size: 24, color: '#161616' })), h("button", { key: '71e655e65bccccba408c22b163510e29e9abc3b1', class: "embla__button embla__button--next", type: "button" }, h("dga-icon", { key: 'a68f568c9c48c55ec75627f133b83ecf8b2669d6', class: "embla__button__svg", icon: arrowRight01Stroke, size: 24, color: '#161616' }))), h("div", { key: '1465b01a4a745cc089d7137e97ed2596dc698127', class: "embla__dots" }))));
    }
    static get is() { return "dga-carousel-v2"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-carousel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-carousel.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'arrows' | 'dots' | 'dots-only'",
                    "resolved": "\"arrows\" | \"dots\" | \"dots-only\"",
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
                "defaultValue": "'arrows'"
            },
            "showDots": {
                "type": "boolean",
                "attribute": "show-dots",
                "mutable": false,
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
                "reflect": false,
                "defaultValue": "true"
            },
            "steps": {
                "type": "number",
                "attribute": "steps",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "1"
            },
            "transitionDuration": {
                "type": "number",
                "attribute": "transition-duration",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "600"
            },
            "Dir": {
                "type": "string",
                "attribute": "dir",
                "mutable": false,
                "complexType": {
                    "original": "'rtl' | 'ltr'",
                    "resolved": "\"ltr\" | \"rtl\"",
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
                "defaultValue": "'rtl'"
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
                "defaultValue": "'lg'"
            },
            "arrowsVariant": {
                "type": "string",
                "attribute": "arrows-variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'subtle'",
                    "resolved": "\"primary\" | \"subtle\"",
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
            "arrows": {
                "type": "unknown",
                "attribute": "arrows",
                "mutable": false,
                "complexType": {
                    "original": "{\n    variant: 'primary' | 'subtle';\n    size: 'sm' | 'md' | 'lg'\n  }",
                    "resolved": "{ variant: \"subtle\" | \"primary\"; size: \"lg\" | \"md\" | \"sm\"; }",
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
                "defaultValue": "{\n    variant: 'primary',\n    size: 'lg'\n  }"
            }
        };
    }
    static get states() {
        return {
            "childWidth": {},
            "childrenLength": {},
            "currentSlideIndex": {}
        };
    }
    static get elementRef() { return "el"; }
}
