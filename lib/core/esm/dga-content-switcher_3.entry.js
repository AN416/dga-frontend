import { r as registerInstance, h } from './index-BLSc18AE.js';

const DgaContentSwitcher = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = 0;
        this.onColor = false;
        this.size = 'md';
        this.items = [
            {
                label: 'Item 1',
                content: 'Content 1',
            },
            {
                label: 'Item 2',
                content: 'Content 2',
            },
            {
                label: 'Item 3',
                content: 'Content 3',
            },
        ];
        this.onChange = () => { };
        this.selected = this.value;
        this.handleSelect = (index) => {
            this.selected = index;
            this.onChange(index);
        };
    }
    render() {
        return (h("div", { key: 'e39602a5ce36dfdc3aec7d38e5d1a0ceb02e26a3', class: "content-switcher" }, h("div", { key: 'ab4118494678a34e03ebc236a7026ad49a7971d6', class: "content-switcher__items" }, this.items.map((item, index) => {
            const selected = index === this.selected;
            const itemType = index === 0 ? 'first' : index === this.items.length - 1 ? 'last' : 'mid';
            const className = `content-switcher__item content-switcher__item--${itemType} ${this.onColor ? 'content-switcher__item--on-color' : ''} content-switcher__item--${this.size} ${selected ? 'content-switcher__item--selected' : ''}`;
            return (h("button", { key: index, type: "button", class: className, onClick: () => this.handleSelect(index) }, item.label));
        }))));
    }
};

const DgaContentSwitcherItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", { key: '83516f09f1675ae6bc38dd7ea81717b8df682d5b' });
    }
};

const DgaContentSwitcherPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'a5b0f5fc828acf1f689061956b9a27a11a30b95f', class: "content-switcher-panel", hidden: this.value !== this.index }, h("slot", { key: '49b4ec1bf9d71364b92e607d03cd868cc92373e4' })));
    }
};

export { DgaContentSwitcher as dga_content_switcher, DgaContentSwitcherItem as dga_content_switcher_item, DgaContentSwitcherPanel as dga_content_switcher_panel };
