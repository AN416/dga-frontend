import { Fragment, h, Host } from "@stencil/core";
import { guid } from "../../utils";
import { isRTL } from "../../utils/rtl";
import { cancel01Stroke, mic01Stroke, search01Stroke } from "@platformscode/icons";
export class DgaSearchBox {
    constructor() {
        this.size = 'md';
        this.variant = 'default';
        this.error = false;
        this.showTrailingIcon = true;
        this.icon = true; // Adjusted to any since ReactNode isn't used in Stencil
        this.disabled = false;
        this.readonly = false;
        this.name = guid();
        this.value = '';
        this.onInput = () => { };
        this.speechLang = 'en'; // Default language is English
        this.fullwidth = true;
        this.isActive = false;
        this.isFocused = false;
        // @State() query: string = '';
        // @State() value: string = '';
        this.isListening = false;
        // Configure the timeout period (in milliseconds) for non-speaking.
        this.SILENCE_TIMEOUT_DURATION = 8000; // Stop after 8 seconds of silence
        this.handleResetInput = () => {
            this.value = ''; // Reset the input value
            this.onChange.emit({ target: { value: this.value } }); // Emit change event to inform parent component
        };
    }
    componentWillLoad() {
        // Check if browser supports SpeechRecognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            // this.recognition.continuous = false; // Only listen for a single input
            // this.recognition.interimResults = false;
            this.recognition.continuous = true; // Only listen for a single input
            this.recognition.interimResults = true;
            this.recognition.onresult = event => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        this.value = event.results[i][0].transcript; // Final result
                    }
                    else {
                        interimTranscript += event.results[i][0].transcript; // Interim result
                    }
                }
                // Update the input with the real-time speech-to-text result
                this.value = interimTranscript || this.value;
            };
            // Handle recognition end
            this.recognition.onend = () => {
                this.isListening = false;
            };
            // Handle errors
            this.recognition.onerror = event => {
                console.error('Speech recognition error', event);
                this.isListening = false;
            };
        }
        else {
            console.error('SpeechRecognition is not supported by this browser.');
        }
    }
    startListening() {
        if (this.recognition) {
            // Set recognition language based on the selected language
            if (this.speechLang === 'en') {
                this.recognition.lang = 'en-US'; // English (US)
            }
            else if (this.speechLang === 'ar') {
                this.recognition.lang = 'ar'; // Arabic
            }
            this.isListening = true;
            this.recognition.start();
            // Start the silence timer when recognition starts
            this.resetSilenceTimer();
        }
    }
    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
    // Reset the silence timer when speech is detected
    resetSilenceTimer() {
        this.clearSilenceTimer(); // Clear the previous timer
        this.silenceTimeout = setTimeout(() => {
            this.stopListening(); // Stop recognition after the timeout
        }, this.SILENCE_TIMEOUT_DURATION);
    }
    // Clear the silence timer to avoid stopping recognition prematurely
    clearSilenceTimer() {
        if (this.silenceTimeout) {
            clearTimeout(this.silenceTimeout);
        }
    }
    handleInputChange(event) {
        // this.onChange(event)
        this.value = event.target.value;
        this.onChange.emit({ target: { value: this.value } });
        // this.value = event.target.value;
    }
    render() {
        const { el } = this;
        const dir = isRTL(el) ? 'rtl' : 'ltr';
        return (h(Host, { key: '3b8bae22f86099c672184a036e4bd37049499dd9', dir: dir }, h("div", { key: 'fa455f5d08dd0d37431e95d9e8645a32e5dfb323', class: { 'dga-form-control': true, 'dga-form-control--fullwidth': this.fullwidth } }, this.label && h("label", { key: 'd61ad1c6e7de590181209a031910831c60422656', class: "dga-label" }, this.label), h("div", { key: 'f8da87a8c20b3680b21d5bb799d42c9c9f52868f', class: `dga-search-box dga-search-box--${this.size} ${this.error ? 'dga-search-box--error' : ''} ${this.variant !== 'default' ? `dga-search-box--${this.variant}` : ''} ${this.isActive ? 'active' : ''} ${this.isFocused ? 'focus' : ''} ${this.disabled ? 'dga-search-box--disabled' : ''} ${this.readonly ? 'readOnly' : ''}`, ref: el => (this.inputContainerRef = el) }, this.icon && (h("span", { key: '181abea957eaf4834dc62a33eab0afb827af1c3c', class: "dga-search-box__icon" }, h("dga-icon", { key: 'b645499a949d1989935a78edae55e100dfdb3a49', icon: search01Stroke, size: 20, color: '#161616' }))), h("input", { key: 'cfb60a1946586fd59302c912549526700c617bea', value: this.value, name: this.name, type: "text", onFocus: () => (this.isFocused = true), onBlur: e => {
                this.isFocused = false;
                this.onBlur.emit(e);
            }, class: "dga-search-box__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, onMouseDown: () => (this.isActive = true), onMouseUp: () => (this.isActive = false), onMouseOut: () => (this.isActive = false), onInput: event => {
                this.handleInputChange(event);
            } }), h("div", { key: '7efb149d9279f894d68739c2eea0022386e7166f', class: "dga-search-box__actions" }, this.value.length > 0 && (h(Fragment, { key: '37960160fbbb1a051f260c77c89837848443c593' }, h("button", { key: 'cb169ad50ced1b27f9c08015933d363ca2cffe9a', class: "dga-search-box__action-btn", onClick: this.handleResetInput }, h("dga-icon", { key: 'b6fe90f117f64afd06bf2c88a3ad3368c7774061', icon: cancel01Stroke, size: 20 })), h("svg", { key: 'be7c0a068917d924ee2e47e2ad01c2a150b2f2a5', xmlns: "http://www.w3.org/2000/svg", width: "1", height: "26", viewBox: "0 0 1 26", fill: "none" }, h("rect", { key: '41b7fdd14825685d501198f01663b1d1952d63f7', x: "1", y: "0.5", width: "25", height: "1", transform: "rotate(90 1 0.5)", fill: "#D2D6DB" })))), this.showTrailingIcon && (h("dga-tooltip", { key: 'aadda7bc97204c48a404b78bbff921306f8cb97b', tooltipTitle: isRTL(el) ? "البحث عن طريق الصوت" : "Search by voice", direction: "bottom", beakAlignment: "center", beakPlacement: "top" }, h("button", { key: '1b2db3234d5c50edc2a6e1eabf7d6daaf9fa1e80', class: "dga-search-box__search-btn", onClick: () => this.startListening(), disabled: this.isListening }, this.isListening ? (h("span", { class: "dga-search-box__icon" }, h("dga-icon", { icon: mic01Stroke, size: 20 }))) : (h("span", { class: "dga-search-box__icon" }, h("dga-icon", { icon: mic01Stroke, size: 20 })))))))))));
    }
    static get is() { return "dga-search-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-search-box.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-search-box.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\"",
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
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'lighter' | 'darker'",
                    "resolved": "\"darker\" | \"default\" | \"lighter\"",
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
                "defaultValue": "'default'"
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
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
                "defaultValue": "false"
            },
            "showTrailingIcon": {
                "type": "boolean",
                "attribute": "show-trailing-icon",
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
                "reflect": false,
                "defaultValue": "true"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
                "defaultValue": "false"
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                "defaultValue": "guid()"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
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
            "onInput": {
                "type": "unknown",
                "attribute": "on-input",
                "mutable": false,
                "complexType": {
                    "original": "(event?: Event) => void",
                    "resolved": "(event?: Event) => void",
                    "references": {
                        "Event": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "../../node_modules/.pnpm/@stencil+core@4.36.0/node_modules/@stencil/core/internal/stencil-core/index.d.ts::Event"
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
                "defaultValue": "() => {}"
            },
            "speechLang": {
                "type": "string",
                "attribute": "speech-lang",
                "mutable": false,
                "complexType": {
                    "original": "'en' | 'ar'",
                    "resolved": "\"ar\" | \"en\"",
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
                "defaultValue": "'en'"
            },
            "fullwidth": {
                "type": "boolean",
                "attribute": "fullwidth",
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
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "isFocused": {},
            "isListening": {}
        };
    }
    static get events() {
        return [{
                "method": "onChange",
                "name": "onChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "onBlur",
                "name": "onBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
