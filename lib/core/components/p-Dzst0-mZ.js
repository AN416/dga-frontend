import { p as proxyCustomElement, H, h } from './p-CqmCtiRl.js';
import { d as defineCustomElement$2 } from './p-DcvmZQlW.js';
import { d as defineCustomElement$1 } from './p-CDMKY2c-.js';

const MonthNavigator = /*@__PURE__*/ proxyCustomElement(class MonthNavigator extends H {
    constructor() {
        super();
        this.__registerHost();
        this.RTL = false;
        this.showArrows = true;
        this.isYearsDropdownOpen = false;
        // private toggleYearsDropdown = () => {
        //   this.isYearsDropdownOpen = !this.isYearsDropdownOpen;
        // }
        // private handleYearSelect = (year: number) => {
        //   // Create a new date with the selected year but keep current month
        //   const newDate = new Date(
        //     year,
        //     this.currentMonth.getMonth(),
        //     1
        //   );
        //   this.onChange(newDate);
        //   this.toggleYearsDropdown()
        //   // this.isYearsDropdownOpen = false;
        // }
        this.handleYearSelect = (year, event) => {
            // Stop event propagation to prevent bubbling to the year-selector element
            event.stopPropagation();
            // Create a new date with the selected year but keep current month
            const newDate = new Date(year, this.currentMonth.getMonth(), 1);
            // Update the date first
            this.onChange(newDate);
            // Force the dropdown to close with a small delay to ensure state changes are processed
            setTimeout(() => {
                this.isYearsDropdownOpen = false;
            }, 5);
        };
        // Toggle the dropdown
        this.toggleYearsDropdown = () => {
            this.isYearsDropdownOpen = !this.isYearsDropdownOpen;
            // If opening the dropdown, focus on the selected year
            if (this.isYearsDropdownOpen) {
                // Use setTimeout to ensure the dropdown is rendered before scrolling
                setTimeout(() => this.scrollToSelectedYear(), 5);
            }
        };
        //   @Event() monthChange: EventEmitter<Date>;
        this.handlePrevClick = () => {
            const prevMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
            // this.monthChange.emit(prevMonth);
            this.onChange(prevMonth);
        };
        this.handleNextClick = () => {
            const nextMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
            // this.monthChange.emit(nextMonth);
            this.onChange(nextMonth);
        };
    }
    // Generate list of years (e.g., current year ± 10 years)
    get yearsList() {
        // const currentYear = this.currentMonth.getFullYear();
        const currentYear = new Date().getFullYear();
        const years = [];
        // Generate years (current year - 100 to current year + 100)
        for (let year = currentYear - 50; year <= currentYear + 50; year++) {
            years.push(year);
        }
        return years;
    }
    // Scroll to the currently selected year
    scrollToSelectedYear() {
        if (!this.yearDropdownRef)
            return;
        // Find the selected year element
        const selectedYearElement = this.yearDropdownRef.querySelector('.selected-year');
        if (selectedYearElement) {
            // Calculate position to center the selected year in the dropdown
            const dropdownHeight = this.yearDropdownRef.offsetHeight;
            const selectedYearTop = selectedYearElement.getBoundingClientRect().top;
            const dropdownTop = this.yearDropdownRef.getBoundingClientRect().top;
            const selectedYearRelativeTop = selectedYearTop - dropdownTop;
            // Scroll to center the selected year
            this.yearDropdownRef.scrollTop = selectedYearRelativeTop - (dropdownHeight / 2) + 20;
        }
    }
    render() {
        return (h("div", { key: 'd6b076674b8b8b39e56f478f066e9d6bd9dc5c83', class: "date-picker__navigator" }, h("div", { key: '2a41bdf13926e6ca8968a828d7e19628fba2e40a', class: "date-picker__navigator-label" }, this.currentMonth.toLocaleDateString(this.RTL ? 'ar' : 'default', {
            month: 'long',
            // year: 'numeric',
        }), " ", h("span", { key: '365a10ce53d41df062b6de483fbddea8893bfc13', class: "year-selector", onClick: this.toggleYearsDropdown, style: {
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center'
            } }, this.currentMonth.getFullYear(), this.isYearsDropdownOpen && (
        // {true && (
        h("ul", { key: '2d9951e3cbffbfda673c2184edc56f40f3b38986', class: "dga-breadcrumb-dropdown", ref: (el) => this.yearDropdownRef = el }, this.yearsList.map(year => (h("li", { key: year, class: `dga-breadcrumb-dropdown-item ${year === this.currentMonth.getFullYear() ? 'selected-year' : ''}` }, h("a", { onClick: (e) => this.handleYearSelect(year, e) }, h("span", { class: "link__label" }, year))))))))), this.showArrows && (h("div", { key: '1d3619c88bb5670abeedf857b5fcfc45a1d328da', class: "date-picker__navigator-buttons" }, h("dga-button-v2", { key: 'b80917f61e80f24dd37bbb21c7f58a4aaf74c85a', variant: "subtle", size: "lg", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'arrow-left-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.handlePrevClick }), h("dga-button-v2", { key: 'bcf1de404bc30e58c42a62b36bf15b313c994bcf', variant: "subtle", size: "lg", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'arrow-right-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.handleNextClick })))));
    }
    get el() { return this; }
}, [0, "month-navigator", {
        "RTL": [4, "r-t-l"],
        "currentMonth": [16, "current-month"],
        "showArrows": [4, "show-arrows"],
        "onChange": [16, "on-change"],
        "isYearsDropdownOpen": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["month-navigator", "dga-button-v2", "dga-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "month-navigator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MonthNavigator);
            }
            break;
        case "dga-button-v2":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "dga-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { MonthNavigator as M, defineCustomElement as d };
