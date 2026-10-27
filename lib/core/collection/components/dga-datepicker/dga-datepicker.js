import { h, Host } from "@stencil/core";
import { getMonthDays, getDaysFromPreviousMonth, getDaysFromNextMonth, defaultStaticRanges, compareDatesWithoutTime, validateInputDate, daysMap, sameDate, } from "./dateUtils";
export class DgaDatepicker {
    constructor() {
        this.RTL = false;
        this.initialDate = new Date();
        this.range = false;
        this.dualMonthView = false;
        this.inputField = false;
        this.submitButton = false;
        this.qickOptions = false;
        // @Prop() onChange?: (event?: any) => void = () => { };
        // value;
        // onChange = () => {};
        // @Prop() onSubmit = () => {};
        // @Prop() onCancel = () => {};
        this.onSubmit = () => { };
        this.onCancel = () => { };
        this.currentMonth = this.initialDate;
        // @State() selectedDate: Date | null = null;
        this.selectedDate = this.value || new Date();
        this.rangeDates = {};
        this.inputDates = {
            startDate: '',
            endDate: '',
        };
        this.handlePrevClick = () => {
            const prevMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
            // this.monthChange.emit(prevMonth);
            this.handleChangeMonth(prevMonth);
        };
        this.handleNextClick = () => {
            const nextMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
            // this.monthChange.emit(nextMonth);
            this.handleChangeMonth(nextMonth);
        };
    }
    watchSelectedDate(newDate, oldDate) {
        if (newDate !== oldDate) {
            // this.onChange(newDate);
            this.change.emit(newDate);
        }
    }
    watchValue(newValue, oldValue) {
        if (newValue !== oldValue && newValue != this.selectedDate) {
            this.selectedDate = newValue;
            this.currentMonth = new Date(newValue.getFullYear(), newValue.getMonth(), 1);
        }
    }
    get nextMonth() {
        return new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    }
    get days() {
        return [
            ...getDaysFromPreviousMonth(this.currentMonth).slice(0, 2),
            ...getMonthDays(this.currentMonth),
            ...getDaysFromNextMonth(this.currentMonth).slice(0, 2),
        ];
    }
    get nextMonthDays() {
        return [
            ...getDaysFromPreviousMonth(this.nextMonth).slice(0, 2),
            ...getMonthDays(this.nextMonth),
            ...getDaysFromNextMonth(this.nextMonth).slice(0, 2),
        ];
    }
    formatDate(date) {
        if (!date)
            return '';
        const dateObj = new Date(date);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];
        return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    }
    handleSelectDate(date) {
        if (this.range) {
            if (!this.rangeDates.startDate) {
                this.rangeDates = { startDate: date };
            }
            else if (!this.rangeDates.endDate) {
                if (date >= this.rangeDates.startDate) {
                    this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { endDate: date });
                }
                else {
                    this.rangeDates = { startDate: date };
                }
            }
            else {
                this.rangeDates = { startDate: date, endDate: null };
            }
        }
        else {
            this.selectedDate = date;
        }
    }
    handleInputDate(event) {
        const inputElement = event.target;
        const { name, value } = inputElement;
        this.inputDates = Object.assign(Object.assign({}, this.inputDates), { [name]: value });
    }
    handleChangeMonth(newMonth) {
        this.currentMonth = newMonth;
    }
    isMidRange(date) {
        console.log(date > this.rangeDates.startDate, date < this.rangeDates.endDate);
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate) {
            return date > this.rangeDates.startDate && date < this.rangeDates.endDate && !sameDate(date, this.rangeDates.startDate) && !sameDate(date, this.rangeDates.endDate);
        }
        return false;
    }
    isFirstRangeChild(date) {
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate && !sameDate(this.rangeDates.startDate, this.rangeDates.endDate)) {
            return this.rangeDates.startDate.getTime() !== this.rangeDates.endDate.getTime()
                && sameDate(date, this.rangeDates.startDate);
        }
        return false;
    }
    isLastRangeChild(date) {
        console.log(this.rangeDates, "this.rangeDatesthis.rangeDates");
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate && !sameDate(this.rangeDates.startDate, this.rangeDates.endDate)) {
            return this.rangeDates.startDate.getTime() !== this.rangeDates.endDate.getTime()
                && sameDate(date, this.rangeDates.endDate);
        }
        return false;
    }
    componentDidLoad() {
        if (this.inputField) {
            if (this.rangeDates.startDate) {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { startDate: this.formatDate(this.rangeDates.startDate) });
            }
            if (this.rangeDates.endDate) {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { endDate: this.formatDate(this.rangeDates.endDate) });
            }
            else {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { endDate: '' });
            }
        }
    }
    render() {
        return (h(Host, { key: '32296ec57c310e566d84304a373cc777365ae4bd' }, h("div", { key: '18adf8cbaa6ba627ed311e8ae8ade28e7ede183d', class: "date-picker-root dga-flex-column", "data-dual-view": this.dualMonthView, dir: this.RTL ? 'rtl' : 'ltr' }, h("div", { key: 'd74f6f4cda21adc226e7cf80e868283a91ab2816', class: "dga-flex" }, this.qickOptions && this.range && (h("div", { key: '927a7fa8daef178ad1ff854ca60a19646f14d793', class: "date-picker-root__quick-options" }, h("span", { key: 'c46b14b5e3a0be912eb5c6bfad86dc5a4b7a8bc0', class: "text-md-regular" }, this.RTL ? 'اختصارات' : 'Qick options'), h("ul", { key: '30b9b41847ce8d9dc70029d64e8816c19a67219f', class: "options-list" }, defaultStaticRanges.map(({ label, range }) => (h("li", { key: label[this.RTL ? 'ar' : 'en'] }, h("button", { class: "text-md-medium", onClick: () => {
                this.rangeDates = range();
                console.log(range, "rrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaange");
            } }, label[this.RTL ? 'ar' : 'en']))))))), h("div", { key: '499a0251e1e834a392e286a4a2abab34a4d2770c', class: "date-picker-root__main" }, this.inputField && (h("div", { key: '25aab9df580d51702674e6d2cb14b96afdbaeada', class: "date-picker-root__main__inputs" }, h("dga-text-input", { key: '8d32b42797391b3fdff3e9e05dc3c58694189b36', placeholder: "Month DD, YYYY", name: "startDate", value: this.inputDates.startDate, onChange: (e) => this.handleInputDate(e), onBlur: (e) => {
                if (validateInputDate(e.target.value)) {
                    const date = new Date(e.target.value);
                    if (this.range) {
                        if (!this.rangeDates.startDate) {
                            this.rangeDates = { startDate: date };
                        }
                        else if (this.rangeDates.endDate) {
                            if (date >= this.rangeDates.endDate) {
                                this.rangeDates = { startDate: date, endDate: date };
                            }
                            else {
                                this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { startDate: date });
                            }
                        }
                        else {
                            this.rangeDates = { startDate: date, endDate: null };
                        }
                    }
                    else {
                        this.selectedDate = date;
                    }
                }
            } }), this.range && (h("dga-text-input", { key: 'a85561f46604773cf5f216ea530c09e99b6125aa', placeholder: "Month DD, YYYY", name: "endDate", value: this.inputDates.endDate, onChange: (e) => this.handleInputDate(e), onBlur: (e) => {
                if (validateInputDate(e.target.value)) {
                    const date = new Date(e.target.value);
                    if (this.range) {
                        if (!this.rangeDates.endDate) {
                            if (!this.rangeDates.startDate) {
                                this.rangeDates = { startDate: date, endDate: null };
                            }
                            else if (date <= this.rangeDates.startDate) {
                                this.rangeDates = {
                                    startDate: date,
                                    endDate: this.rangeDates.startDate,
                                };
                            }
                        }
                        else if (this.rangeDates.startDate) {
                            if (date <= this.rangeDates.startDate) {
                                this.rangeDates = {
                                    startDate: date,
                                    endDate: this.rangeDates.startDate,
                                };
                            }
                            else {
                                this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { endDate: date });
                            }
                        }
                        else {
                            this.rangeDates = { startDate: date, endDate: null };
                        }
                    }
                    else {
                        this.selectedDate = date;
                    }
                }
            } })))), h("div", { key: '5c01955adfe4c4956e11360a85247585343441f8', class: "date-picker-root__main__content-wrapper" }, h("div", { key: 'd2d01afbee7000ef84f733e87cdfd428472fab89', class: "date-picker" }, h("month-navigator", { key: 'a13194be8a5be5d09442c830df8a0a2d9d970d10', RTL: this.RTL, currentMonth: this.currentMonth, onChange: (date) => this.handleChangeMonth(date), showArrows: !this.dualMonthView }), h("div", { key: '53a1f6a994400288579a4bb762ee48ce61b0377b', class: "date-picker__weekdays" }, daysMap[this.RTL ? 'ar' : 'en'].map((day) => (h("div", { key: day, class: "date-picker__weekday" }, day)))), h("div", { key: '56502150805266cd4c26bee86515ba28c74d2804', class: "date-picker__date-grid" }, this.days.map((date) => (h("date-cell", { key: date.toString(), date: date, isCurrentMonth: date.getMonth() === this.currentMonth.getMonth(), isSelected: (this.range)
                ? (!!this.rangeDates.startDate &&
                    compareDatesWithoutTime(date, this.rangeDates.startDate)) ||
                    (!!this.rangeDates.endDate &&
                        compareDatesWithoutTime(date, this.rangeDates.endDate))
                : this.selectedDate
                    ? compareDatesWithoutTime(date, this.selectedDate)
                    : false, isToday: new Date().toDateString() === date.toDateString(), isFirstRangeChild: this.isFirstRangeChild(date), isLastRangeChild: this.isLastRangeChild(date), midRange: this.isMidRange(date), onSelect: (date) => this.handleSelectDate(date) }))))), this.dualMonthView && (h("div", { key: '2e1e84ff8d043bf31a3a25879e44dc6482fce83e', class: "date-picker" }, h("month-navigator", { key: 'c77df016858f929b72acd9efb77b947bc4966c58', currentMonth: this.nextMonth, onChange: (date) => {
                const newMonth = date.getMonth() === this.currentMonth.getMonth()
                    ? new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1)
                    : new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
                this.handleChangeMonth(newMonth);
            }, showArrows: true }), h("div", { key: 'c726968c53e48fd36d0a3615691ac47938ba8fe3', class: "date-picker__weekdays" }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (h("div", { key: day, class: "date-picker__weekday" }, day)))), h("div", { key: 'e31762fb2620d7047165d879fa2ce09a64a4c8df', class: "date-picker__date-grid" }, this.nextMonthDays.map((date) => (h("date-cell", { key: date.toString(), date: date, isCurrentMonth: date.getMonth() === this.nextMonth.getMonth(), isSelected: this.range
                ? (!!this.rangeDates.startDate &&
                    date.getTime() ===
                        this.rangeDates.startDate.getTime()) ||
                    (!!this.rangeDates.endDate &&
                        date.getTime() === this.rangeDates.endDate.getTime())
                : this.selectedDate
                    ? date.getTime() === this.selectedDate.getTime()
                    : false, isToday: new Date().toDateString() === date.toDateString(), midRange: this.isMidRange(date), isFirstRangeChild: this.isFirstRangeChild(date), isLastRangeChild: this.isLastRangeChild(date), onSelect: (date) => this.handleSelectDate(date) }))))))))), this.submitButton && (h("div", { key: 'aeef03d207c40a512497d446696a7f62195b967d', class: "date-picker-root__main__buttons" }, h("dga-button-v2", { key: '604a3f0d0045bc318d51ee568d1c064beee8b177', label: "Cancel", onClick: this.onCancel, size: "lg", variant: "secondary-outline" }), h("dga-button-v2", { key: '2414764957f47a6579dfb37368d159b5b7f3f48d', label: "Submit", onClick: this.onSubmit, size: "lg", variant: "neutral" }))))));
    }
    static get is() { return "dga-datepicker"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-datepicker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-datepicker.css"]
        };
    }
    static get properties() {
        return {
            "RTL": {
                "type": "boolean",
                "attribute": "r-t-l",
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
            "initialDate": {
                "type": "unknown",
                "attribute": "initial-date",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "new Date()"
            },
            "range": {
                "type": "boolean",
                "attribute": "range",
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
            "dualMonthView": {
                "type": "boolean",
                "attribute": "dual-month-view",
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
            "inputField": {
                "type": "boolean",
                "attribute": "input-field",
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
            "submitButton": {
                "type": "boolean",
                "attribute": "submit-button",
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
            "qickOptions": {
                "type": "boolean",
                "attribute": "qick-options",
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
            "value": {
                "type": "unknown",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
            "onSubmit": {
                "type": "unknown",
                "attribute": "on-submit",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
                "defaultValue": "() => { }"
            },
            "onCancel": {
                "type": "unknown",
                "attribute": "on-cancel",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
                "defaultValue": "() => { }"
            }
        };
    }
    static get states() {
        return {
            "currentMonth": {},
            "selectedDate": {},
            "rangeDates": {},
            "inputDates": {}
        };
    }
    static get events() {
        return [{
                "method": "change",
                "name": "change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "selectedDate",
                "methodName": "watchSelectedDate"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
}
