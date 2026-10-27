import { h, Host } from "@stencil/core";
import { arrowLeft01Stroke, arrowRight01Stroke } from "@platformscode/icons";
export class DgaCarousel {
    constructor() {
        this.DIRECTION = {
            LEFT: Symbol('LEFT'),
            RIGHT: Symbol('RIGHT'),
        };
        this.variant = 'arrows';
        this.showDots = true;
        this.steps = 1;
        this.transitionDuration = 600;
        this.Dir = 'ltr';
        this.size = 'lg';
        this.arrowsVariant = 'primary';
        this.arrows = {
            variant: 'primary',
            size: 'lg',
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
            const translateX = this.isRTL() ? this.currentSlideIndex * this.childWidth : -(this.currentSlideIndex * this.childWidth);
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
        return (h(Host, { key: '4b2fd50424d1187980c1a5a3ca785acc64450259', class: `KCarousel KCarousel--${this.variant} KCarousel--${this.size}`, dir: this.Dir }, this.variant !== 'dots-only' && (h("div", { key: '70d9bbcfc3c037de5f75f60076010d2e9940e7f6', class: "KCarousel-body" }, this.variant === 'arrows' && (h("a", { key: 'b6ece7176cb2cbe5dbbc03ba77a90856d54b8748', class: {
                'KCarousel-arrow': true,
                'KCarousel-arrow--active': this.showLeftArrow(),
                [this.isRTL() ? 'right' : 'left']: true,
                [`KCarousel-arrow--${this.arrowsVariant}`]: true,
            }, onClick: () => this.changeSlide(this.DIRECTION.LEFT) }, h("dga-icon", { key: '306ec974567bb18fd062289f2ff9b88bb6884712', icon: this.isRTL() ? arrowRight01Stroke : arrowLeft01Stroke, size: 24 }))), h("div", { key: '3165dc2a5f5e08edd9211115120f420f968b92c7', class: "KCarousel-container", style: { overflow: 'hidden', maxWidth: `${this.childWidth}px` } }, h("div", { key: '1a5869d7d3f74c74eaf92b3bd47d1c265ccc2738', style: {
                display: 'flex',
                transition: `transform ${this.transitionDuration}ms ease-in-out`,
            }, class: "KCarousel-slides", ref: (el) => (this.slidesContainer = el) }, h("slot", { key: '5c8f375d0c035ca80b8f1938ec4d5f14e77325d8' }))), this.variant === 'arrows' && (h("a", { key: '9c218197eaabee5cf9d83577a3eb1a9af2bce40c', class: {
                'KCarousel-arrow': true,
                'KCarousel-arrow--active': this.showRightArrow(),
                [this.isRTL() ? 'left' : 'right']: true,
                [`KCarousel-arrow--${this.arrowsVariant}`]: true,
            }, onClick: () => this.changeSlide(this.DIRECTION.RIGHT) }, h("dga-icon", { key: '494f33870b0eb838f1dad52ba8cc58d778bd45e0', icon: this.isRTL() ? arrowLeft01Stroke : arrowRight01Stroke, size: 24 }))))), ['dots', 'dots-only'].includes(this.variant) && (h("div", { key: '68a576f94084cb1c139a1f057ab598d753450a4a', class: "KCarousel-dots" }, Array.from({ length: this.childrenLength }).map((_, index) => (h("span", { class: {
                'KCarousel-dot': true,
                'is-active': this.isHighlighted(index),
            }, onClick: () => {
                this.currentSlideIndex = index;
                this.updateSlidePosition();
            } })))))));
    }
    static get is() { return "dga-carousel"; }
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
                "defaultValue": "'ltr'"
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
                    "original": "{\n    variant: 'primary' | 'subtle';\n    size: 'sm' | 'md' | 'lg';\n  }",
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
                "defaultValue": "{\n    variant: 'primary',\n    size: 'lg',\n  }"
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
