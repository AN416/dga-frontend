'use strict';

var index = require('./index-DuIfHULw.js');

const DgaSearchBoxUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = 'test';
    }
    render() {
        return (index.h("div", { key: 'd8f976b4ceed23cad8f97d897fd18b54fe32ee4e' }, index.h("h1", { key: '9968d91b50ed57bd4e08d22bd6686a3becd9fd3c' }, "Search Box Example"), index.h("div", { key: '8218a4366748469c63860977d0bb367870caa31d', style: { padding: '50px' } }, index.h("div", { key: '63d4b748bb4fe70cc41b41fba9ad2e5600c32c21', style: { display: "flex", flexDirection: "column", gap: "16px" } }, index.h("dga-search-box", { key: '95d80d8bf9bc687d21fb292b568f414127a0ca46', variant: 'default', value: this.value, placeholder: 'test placeholder', onChange: (e) => {
                const target = e.target;
                console.log("search changed");
                this.value = target.value;
            }, onInput: (e) => {
                console.log("search changed", e.target.value);
                this.value = e.target.value;
            } })))));
    }
};

exports.dga_search_box_usage = DgaSearchBoxUsage;
