// import { Component, h } from '@stencil/core';
// @Component({
//   tag: 'dga--chart-usage',
// })
// export class DgaChartUsage {
//   render() {
//     return (
//       <div>
//         <h1> Chart Example</h1>
//         <div style={{ padding: '50px', display: 'flex', gap: '20px' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             {/* Example 1: Neutral Tag */}
//             <dga--chart
//             options={
//               {
//                 chart: {
//                   type: 'donut'
//                 },
//                 series: [44, 55, 13, 33],
//                 labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
//                 colors:["#1B8354" , "#079455" ,"#B8EACB", "#54C08A"],
//                 plotOptions: {
//                   : {
//                     startAngle: -180, // Start from the leftmost point
//                     endAngle: 180,    // Complete the full circle
//                     donut: {
//                       size: '40%'
//                     }
//                   }
//                 },
//                 stroke: {
//                   show: false, // Hides the dividers
//                 },
//                 legend: {
//                   show: true,
//                   showForSingleSeries: false,
//                   showForNullSeries: true,
//                   showForZeroSeries: true,
//                   position: 'bottom',
//                   horizontalAlign: 'center',
//                   floating: false,
//                   fontSize: '14px',
//                   fontFamily: 'IBM Plex Sans Arabic',
//                   fontWeight: 400,
//                   formatter: undefined,
//                   inverseOrder: false,
//                   width: undefined,
//                   height: undefined,
//                   tooltipHoverFormatter: undefined,
//                   customLegendItems: [],
//                   offsetX: 0,
//                   offsetY: 0,
//                   labels: {
//                       colors: undefined,
//                       useSeriesColors: false
//                   },
//                   markers: {
//                       size: 3,
//                       shape: undefined,
//                       strokeWidth: 1,
//                       fillColors: undefined,
//                       customHTML: undefined,
//                       onClick: undefined,
//                       offsetX: 0,
//                       offsetY: 0
//                   },
//                   itemMargin: {
//                       horizontal: 5,
//                       vertical: 0
//                   },
//                   onItemClick: {
//                       toggleDataSeries: true
//                   },
//                   onItemHover: {
//                       highlightDataSeries: true
//                   },
//               }
//               }
//             }></dga--chart>
// {/*
// <dga--chart options={
//               {
//                 chart: {
//                   type: ''
//                 },
//                 series: [44, 55, 13, 33],
//                 labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
//                 colors:["#1B8354" , "#079455" ,"#B8EACB", "#54C08A"],
//                 plotOptions: {
//                   : {
//                     startAngle: -180, // Start from the leftmost point
//                     endAngle: 180,    // Complete the full circle
//                   }
//                 },
//                 stroke: {
//                   show: false, // Hides the dividers
//                 },
//                 legend: {
//                   show: true,
//                   showForSingleSeries: false,
//                   showForNullSeries: true,
//                   showForZeroSeries: true,
//                   position: 'bottom',
//                   horizontalAlign: 'center',
//                   floating: false,
//                   fontSize: '14px',
//                   fontFamily: 'IBM Plex Sans Arabic',
//                   fontWeight: 400,
//                   formatter: undefined,
//                   inverseOrder: false,
//                   width: undefined,
//                   height: undefined,
//                   tooltipHoverFormatter: undefined,
//                   customLegendItems: [],
//                   offsetX: 0,
//                   offsetY: 0,
//                   labels: {
//                       colors: undefined,
//                       useSeriesColors: false
//                   },
//                   markers: {
//                       size: 3,
//                       shape: undefined,
//                       strokeWidth: 1,
//                       fillColors: undefined,
//                       customHTML: undefined,
//                       onClick: undefined,
//                       offsetX: 0,
//                       offsetY: 0
//                   },
//                   itemMargin: {
//                       horizontal: 5,
//                       vertical: 0
//                   },
//                   onItemClick: {
//                       toggleDataSeries: true
//                   },
//                   onItemHover: {
//                       highlightDataSeries: true
//                   },
//               }
//               }
//             }></dga--chart>
//  */}
//             {/* <dga--chart
//             options = {{
//               chart: {
//                 height: 350,
//                 type: "line",
//                 stacked: false,
//                 zoom: {
//                   enabled: false, // Disable zooming with mouse
//                 },
//                 toolbar: {
//                   show: false, // Hide the toolbar (including "Download as" dropdown)
//                 },
//               },
//               dataLabels: {
//                 enabled: false
//               },
//               colors: ["#1B8354" , "#079455" ,"#B8EACB", "#54C08A"],
//               series: [
//                 {
//                   name: "Series A",
//                   data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
//                 },
//                 {
//                   name: "Series B",
//                   data: [20, 29, 37, 36, 44, 45, 50, 58]
//                 }
//               ],
//               stroke: {
//                 width: [4, 4],
//                 curve: 'smooth',
//               },
//               plotOptions: {
//                 bar: {
//                   columnWidth: "20%"
//                 }
//               },
//               xaxis: {
//                 title:{
//                   text:"Month",
//                 },
//                 categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" , "Sep"]
//               },
//               yaxis:{
//                 title:{
//                   text:"Active users"
//                 }
//               },
//               // yaxis: [
//               //   {
//               //     axisTicks: {
//               //       show: true
//               //     },
//               //     axisBorder: {
//               //       show: true,
//               //       color: "#FF1654"
//               //     },
//               //     labels: {
//               //       style: {
//               //         colors: "#FF1654"
//               //       }
//               //     },
//               //     title: {
//               //       text: "Series A",
//               //       style: {
//               //         color: "#FF1654"
//               //       }
//               //     }
//               //   },
//               //   {
//               //     opposite: true,
//               //     axisTicks: {
//               //       show: true
//               //     },
//               //     axisBorder: {
//               //       show: true,
//               //       color: "#247BA0"
//               //     },
//               //     labels: {
//               //       style: {
//               //         colors: "#247BA0"
//               //       }
//               //     },
//               //     title: {
//               //       text: "Series B",
//               //       style: {
//               //         color: "#247BA0"
//               //       }
//               //     }
//               //   }
//               // ],
//               tooltip: {
//                 shared: false,
//                 intersect: true,
//                 x: {
//                   show: false
//                 }
//               },
//               legend: {
//                 show: true,
//                 showForSingleSeries: false,
//                 showForNullSeries: true,
//                 showForZeroSeries: true,
//                 position: "top", // Position legend at the top
//                 horizontalAlign: "right", // Align legend to the right
//                 floating: false,
//                 fontSize: '14px',
//                 fontFamily: 'IBM Plex Sans Arabic',
//                 fontWeight: 400,
//                 formatter: undefined,
//                 inverseOrder: false,
//                 width: undefined,
//                 height: undefined,
//                 tooltipHoverFormatter: undefined,
//                 customLegendItems: [],
//                 offsetX: 0,
//                 offsetY: 0,
//                 labels: {
//                     colors: undefined,
//                     useSeriesColors: false
//                 },
//                 markers: {
//                     size: 3,
//                     shape: undefined,
//                     strokeWidth: 1,
//                     fillColors: undefined,
//                     customHTML: undefined,
//                     onClick: undefined,
//                     offsetX: 0,
//                     offsetY: 0
//                 },
//                 itemMargin: {
//                     horizontal: 5,
//                     vertical: 0
//                 },
//                 onItemClick: {
//                     toggleDataSeries: true
//                 },
//                 onItemHover: {
//                     highlightDataSeries: true
//                 },
//             }
//               // legend: {
//               //   horizontalAlign: "left",
//               //   offsetX: 40
//               // }
//             }}
//             ></dga--chart>
//  */}
// {/* <dga--chart
// series={
//   [{
//     name: 'Series A',
//     data: [44, 55, 41 , 44, 55, 41]
//   }, {
//     name: 'Series B',
//     data: [13, 23, 20 , 44, 55, 41]
//   }, {
//     name: 'Series C',
//     data: [11, 17, 15 , 44, 55, 41]
//   },
// ]
// }
//             options = {{
//               chart: {
//               type: 'bar',
//               height: 350,
//               stacked: true,
//               toolbar: {
//                 show: false
//               },
//               zoom: {
//                 enabled: false
//               }
//             },
//             dataLabels: {
//               enabled: false
//             },
//             colors: ["#1B8354" , "#54C08A" ,"#E5E7EB"],
//             // responsive: [{
//             //   breakpoint: 480,
//             //   options: {
//             //     legend: {
//             //       position: 'bottom',
//             //       offsetX: -10,
//             //       offsetY: 0
//             //     }
//             //   }
//             // }],
//             plotOptions: {
//               bar: {
//                 horizontal: false,
//                 borderRadius: 10,
//                 borderRadiusApplication: 'end', // 'around', 'end'
//                 borderRadiusWhenStacked: 'last', // 'all', 'last'
//                 dataLabels: {
//                   total: {
//                     enabled: true,
//                     style: {
//                       fontSize: '13px',
//                       fontWeight: 900
//                     }
//                   }
//                 }
//               },
//             },
//             xaxis: {
//               title:{
//                 text:"Month",
//               },
//               type: 'category',
//               categories: ['Jan', 'Fab', 'Mar', 'Apr',
//                 'May', 'Jun'
//               ],
//             },
//             yaxis:{
//               title:{
//                 text:"Active users"
//             }},
//             markers: {
//               size: 3,
//               shape: undefined,
//               strokeWidth: 1,
//               // fillColors: undefined,
//               // customHTML: undefined,
//               onClick: undefined,
//               offsetX: 0,
//               offsetY: 0
//           },
//           legend: {
//             show: true,
//             showForSingleSeries: false,
//             showForNullSeries: true,
//             showForZeroSeries: true,
//             position: "top", // Position legend at the top
//             horizontalAlign: "right", // Align legend to the right
//             floating: false,
//             fontSize: '14px',
//             fontFamily: 'IBM Plex Sans Arabic',
//             fontWeight: 400,
//             formatter: undefined,
//             inverseOrder: false,
//             width: undefined,
//             height: undefined,
//             tooltipHoverFormatter: undefined,
//             customLegendItems: [],
//             offsetX: 0,
//             offsetY: 0,
//             labels: {
//                 colors: undefined,
//                 useSeriesColors: false
//             },
//             markers: {
//                 size: 3,
//                 shape: undefined,
//                 strokeWidth: 1,
//                 fillColors: undefined,
//                 customHTML: undefined,
//                 onClick: undefined,
//                 offsetX: 0,
//                 offsetY: 0
//             },
//             itemMargin: {
//                 horizontal: 5,
//                 vertical: 0
//             },
//             onItemClick: {
//                 toggleDataSeries: true
//             },
//             onItemHover: {
//                 highlightDataSeries: true
//             },
//         }
//           ,
//             fill: {
//               opacity: 1
//             }
//             }
//           }
//             ></dga--chart> */}
//             {/* Example 1: Success Tag */}
//             {/* Example 1: Error Tag */}
//           </div>
//         </div>
//         {/* Example 2: Using React Nodes for Content */}
//         {/* Example 3: Customizing `items` prop */}
//       </div>
//     );
//   }
// }
import { h } from "@stencil/core";
export class DgaChartUsage {
    render() {
        return (h("div", { key: 'cf119219f0ce4e090ea605c0b0bc5f2d1ecd163a' }, h("h1", { key: '67d7e593db175a7e65440034f49691405deee45d' }, " Chart Example"), h("div", { key: 'b7307fb34a522f311e24bc42e6f00ec0ae71ed73', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '529a2b59d69017371fc8113307c44956b499a166', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-chart", { key: '160e3fa69d68bc1b8c70ee1135e666650b42c836', type: "donut", series: [44, 55, 13, 33], labels: ['Apple', 'Mango', 'Orange', 'Watermelon'] }), h("dga-chart", { key: '7b77ccdade65144c0804e301620a52f00c9afd25', type: "pie", series: [44, 55, 13, 33], labels: ['Apple', 'Mango', 'Orange', 'Watermelon'] }), h("dga-chart", { key: '3b6ccd8d33b56807298d14022fcc6e7edbc4832e', type: 'line', series: [
                {
                    name: 'Series A',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                },
                {
                    name: 'Series B',
                    data: [20, 29, 37, 36, 44, 45, 50, 58],
                },
            ], xaxis: {
                title: {
                    text: 'Month',
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }, yaxis: {
                title: {
                    text: 'Active users',
                },
            } }), h("dga-chart", { key: '3172acf76c812c8fd4d2f2d45564fb79febed28e', series: [
                {
                    name: 'Series A',
                    data: [44, 55, 41, 44, 55, 41],
                },
                {
                    name: 'Series B',
                    data: [13, 23, 20, 44, 55, 41],
                },
                {
                    name: 'Series C',
                    data: [11, 17, 15, 44, 55, 41],
                },
            ],
            // colors= {['#000', '#54C08A', '#E5E7EB']}
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                // responsive: [{
                //   breakpoint: 480,
                //   options: {
                //     legend: {
                //       position: 'bottom',
                //       offsetX: -10,
                //       offsetY: 0
                //     }
                //   }
                // }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10,
                        borderRadiusApplication: 'end', // 'around', 'end'
                        borderRadiusWhenStacked: 'last', // 'all', 'last'
                        dataLabels: {
                            total: {
                                enabled: true,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900,
                                },
                            },
                        },
                    },
                },
                xaxis: {
                    title: {
                        text: 'Month',
                    },
                    type: 'category',
                    categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun'],
                },
                yaxis: {
                    title: {
                        text: 'Active users',
                    },
                },
                markers: {
                    size: 3,
                    shape: undefined,
                    strokeWidth: 1,
                    // fillColors: undefined,
                    // customHTML: undefined,
                    onClick: undefined,
                    offsetX: 0,
                    offsetY: 0,
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'top', // Position legend at the top
                    horizontalAlign: 'right', // Align legend to the right
                    floating: false,
                    fontSize: '14px',
                    fontFamily: 'IBM Plex Sans Arabic',
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    customLegendItems: [],
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        colors: undefined,
                        useSeriesColors: false,
                    },
                    markers: {
                        size: 3,
                        shape: undefined,
                        strokeWidth: 1,
                        fillColors: undefined,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 0,
                    },
                    onItemClick: {
                        toggleDataSeries: true,
                    },
                    onItemHover: {
                        highlightDataSeries: true,
                    },
                },
                fill: {
                    opacity: 1,
                },
            } })))));
    }
    static get is() { return "dga-chart-usage"; }
}
