'use strict';

var index = require('./index-DuIfHULw.js');

const DgaLinearProgressBarUsage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.percentage = 0;
    }
    handleInputChange(event) {
        const target = event.target;
        this.percentage = Number(target.value); // Convert the string value to a number
    }
    render() {
        return (index.h("div", { key: 'a5b9fb1c8c1603272851ee3eaa359de57c001e82' }, index.h("h1", { key: 'a28b4daf5e00be38d46b3032bbaa08585af2c9cb' }, "Linear Progress Bar Example"), index.h("div", { key: 'ca361e74e2a9b6dfdaef2fd45b28634cf4d6698c', style: { padding: '50px', gap: '20px' } }, index.h("div", { key: '02a16dcc9d30c3e6aae42fce630632b9303a2ef5', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, index.h("dga-linear-progress-bar", { key: 'e3369953463120afee52177f42ef938b2e609036', percentage: this.percentage, size: 'large', success: true }), index.h("dga-linear-progress-bar", { key: '90a09ac18fcd998706a7e5404673e02fe5cd4ce9', size: 'large', error: true, percentage: this.percentage }), index.h("dga-linear-progress-bar", { key: '865bdd71ff86912259e934c3c7c4a96133ea3696', size: 'large', progressStyle: "primary", percentage: this.percentage }), index.h("hr", { key: '9269114ad08f861110f8046d8c5baa2b89346a53' }), index.h("dga-linear-progress-bar", { key: '17956ef2d843c379dd52efaecbbfca4cfadf0e1d', percentage: this.percentage, size: 'small', success: true }), index.h("dga-linear-progress-bar", { key: 'f83587cf60600bb15fa430a6fea51e04c701b62e', size: 'small', error: true, percentage: this.percentage }), index.h("dga-linear-progress-bar", { key: '900ca2d03b3c8345a36c7e79b5ee0d975396ef80', size: 'small', progressStyle: "primary", percentage: this.percentage }), index.h("hr", { key: 'ae37fd045ee864796b5338654c4fdd616fd93a28' }), index.h("dga-linear-progress-bar", { key: 'b89c48fb63e4e49d0b6d2d785e018189cfecaf08', percentage: this.percentage, size: 'medium', success: true }), index.h("dga-linear-progress-bar", { key: 'a796d1e6207b29cba159b4747e310522ac0c1381', size: 'medium', error: true, percentage: this.percentage }), index.h("dga-linear-progress-bar", { key: '6308a87e8a7213cf7603a2d2d55796a574b558fb', size: 'medium', progressStyle: "primary", percentage: this.percentage }), index.h("input", { key: '4ef569afba113977755cc335973051c8c13b2538', type: 'range', min: '0', max: '100', value: this.percentage, onInput: (e) => this.handleInputChange(e) })), index.h("div", { key: '2287480c741914a79f8a651ee9f6ec501a632ce6', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
};

exports.dga_linear_progress_bar_usage = DgaLinearProgressBarUsage;
