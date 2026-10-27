// import { Component, h } from '@stencil/core';
// @Component({
//   tag: 'dga-grid-usage',
//   styleUrl: 'dga-grid-usage.scss',
// })
// export class DgaGridUsage {
//   render() {
//     return (
//       <div class="filteration-usage" style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px',
//       }}>
//         <h2>Filteration Component Examples</h2>
//         {/* <!-- Basic Grid Layout Example --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 1</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4}>
//             <div class="demo-content">Item 3</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Responsive Grid with Different Column Widths --> */}
//         <dga-grid-container spacing={3}>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Full width on mobile, half width on tablet, 1/3 on laptop, 1/4 on desktop</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Responsive Item 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={4} lg={3}>
//             <div class="demo-content">Responsive Item 3</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6} md={12} lg={3}>
//             <div class="demo-content">Responsive Item 4</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Different Spacing at Different Breakpoints --> */}
//         <dga-grid-container spacingXs={1} spacingSm={2} spacingMd={3} spacingLg={4}>
//           <dga-grid-item xs={6}>
//             <div class="demo-content">Different spacing at different screen sizes</div>
//           </dga-grid-item>
//           <dga-grid-item xs={6}>
//             <div class="demo-content">Different spacing at different screen sizes</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Auto-layout Grid --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 1</div>
//           </dga-grid-item>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 2</div>
//           </dga-grid-item>
//           <dga-grid-item xs>
//             <div class="demo-content">Auto width 3</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Nested Grids --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={12} sm={6}>
//             <div class="demo-content">
//               <h3>Nested Grid</h3>
//               <dga-grid-container spacing={1}>
//                 <dga-grid-item xs={6}>
//                   <div class="demo-content nested">Nested item 1</div>
//                 </dga-grid-item>
//                 <dga-grid-item xs={6}>
//                   <div class="demo-content nested">Nested item 2</div>
//                 </dga-grid-item>
//               </dga-grid-container>
//             </div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} sm={6}>
//             <div class="demo-content">Regular item</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Item Alignment Example --> */}
//         <dga-grid-container spacing={2} style={{height: "200px"}}>
//           <dga-grid-item xs={4} alignSelf="flex-start">
//             <div class="demo-content">Align start</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} alignSelf="center">
//             <div class="demo-content">Align center</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} alignSelf="flex-end">
//             <div class="demo-content">Align end</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Growing and Shrinking Items --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={3}>
//             <div class="demo-content">Fixed width</div>
//           </dga-grid-item>
//           <dga-grid-item xs grow>
//             <div class="demo-content">Grow to fill space</div>
//           </dga-grid-item>
//           <dga-grid-item xs={3}>
//             <div class="demo-content">Fixed width</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Item Ordering Example --> */}
//         <dga-grid-container spacing={2}>
//           <dga-grid-item xs={4} orderXs={3} orderMd={1}>
//             <div class="demo-content">First on desktop, last on mobile</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} orderXs={1} orderMd={2}>
//             <div class="demo-content">Second on desktop, first on mobile</div>
//           </dga-grid-item>
//           <dga-grid-item xs={4} orderXs={2} orderMd={3}>
//             <div class="demo-content">Third on desktop, second on mobile</div>
//           </dga-grid-item>
//         </dga-grid-container>
//         {/* <!-- Fluid Container with No Gutters --> */}
//         <dga-grid-container fluid disableGutters spacing={0}>
//           <dga-grid-item xs={12} md={6}>
//             <div class="demo-content">Full-width fluid container with no gutters</div>
//           </dga-grid-item>
//           <dga-grid-item xs={12} md={6}>
//             <div class="demo-content">Full-width fluid container with no gutters</div>
//           </dga-grid-item>
//         </dga-grid-container>
//       </div>
//     );
//   }
// }
import { h } from "@stencil/core";
export class DgaGridUsage {
    render() {
        return (h("div", { key: 'b5c0520bd91da270b648d804dbc38bc1ec28b330', class: "flexible-gap-usage", style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            } }, h("h2", { key: 'aef66b19185f316dc545a12cd90597a56d8d60e4' }, "Grid Component with Flexible Gap Examples"), h("section", { key: 'fb8f13c7bfd31addae6594c6889f35675c7fad80' }, h("h3", { key: 'dae19319b9989ca98e14a7f372c733a26e417c3b' }, "Simple String Gap"), h("dga-grid-container", { key: '81a92d0dc40d4ffaba9c7f01a631fd9fdcfc5ca2', gap: "16px" }, h("dga-grid-item", { key: '2804955a61cbf1ebbccbf73d8fa11cbfe36a605e', xs: 12, sm: 6, md: 4 }, h("div", { key: '063638ab943cd990a739eaa3d0a0348bca29e742', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '85c3271ecd13c060e04182c436d3d6b4bbfa89a0', xs: 12, sm: 6, md: 4 }, h("div", { key: '57bd90f62905700a2eea9aa58197eaf51fe29ece', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: 'dc807576b8f6ada18bf89d970967c99ec618cc36', xs: 12, sm: 6, md: 4 }, h("div", { key: '0df4a4017f540eff918e2dda9c196120b235e106', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: 'af46f5852cd4eda141d16ee8438da7e3058b2d24', xs: 12, sm: 6 }, h("div", { key: '42b94af04a973b338d529fe49bbd1ea8c34ee7da', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '10c6cd145f762ed69b928e414360adb049af18b7', xs: 12, sm: 6 }, h("div", { key: '02eb93ff680d0a5f322476135a66f9da44d43e32', class: "demo-content" }, "16px gap between all items")), h("dga-grid-item", { key: '5d06ad53016020fdd93a9ec42e3baac610cab7d8', xs: 12 }, h("div", { key: '8880957fb2d3d1672a4b8520da014d68b25a21b7', class: "demo-content" }, "16px gap between all items"))))));
    }
    static get is() { return "dga-grid-usage"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-grid-usage.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-grid-usage.css"]
        };
    }
}
