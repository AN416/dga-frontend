import { h } from "@stencil/core";
// Define your data points
// const data = [
//   { x: 1, y: 65 }, // Starting point
//   { x: 5.6, y: 57.3 }, // First peak
//   { x: 9, y: 60.6 },
//   { x: 12.6, y: 57.3 },
//   { x: 16.3, y: 54 },
//   { x: 20.9, y: 57.3 },
//   { x: 24.3, y: 54 },
//   { x: 27.4, y: 47.3 },
//   { x: 31.7, y: 40.7 },
//   { x: 35.9, y: 35.2 },
//   { x: 40.2, y: 35.2 },
//   { x: 44.6, y: 31.9 },
//   { x: 47.8, y: 35.2 },
//   { x: 49.6, y: 35.2 },
//   { x: 52.6, y: 40.7 },
//   { x: 56.2, y: 48.7 },
//   { x: 59.8, y: 48 },
//   { x: 61.1, y: 48 },
//   { x: 64.2, y: 40.7 },
//   { x: 67.3, y: 35.2 },
//   { x: 70.1, y: 31.9 },
//   { x: 75.5, y: 28.6 },
//   { x: 77.4, y: 20.9 },
//   { x: 81.4, y: 17.6 },
//   { x: 85.9, y: 14.2 },
//   { x: 87.9, y: 14.2 },
//   { x: 90.5, y: 17.6 },
//   { x: 94.3, y: 20.9 },
//   { x: 97.5, y: 28.6 },
//   { x: 101.2, y: 28.6 },
//   { x: 104.9, y: 20.9 },
//   { x: 107.4, y: 24.2 },
//   { x: 112.3, y: 28.6 },
//   { x: 115.3, y: 24.2 },
//   { x: 120.5, y: 20.9 },
//   { x: 122.6, y: 17.6 },
//   { x: 124.8, y: 12 },
//   { x: 127.2, y: 12 },
//   { x: 129, y: 1 }, // End point
// ];
export class DgaMetricUsage {
    //   @State() variant: 'critical' | 'warning' | 'success' | 'info' | 'neutral' = 'neutral';
    render() {
        return (h("div", { key: 'b34de324d91bbdc8cf54bb395a402c1daabc1bde' }, h("h1", { key: 'b88828a5838d31e25b86a81331817c8bd7964ce7' }, "Metric Example"), h("div", { key: 'f1b5caacb22d712070c3c9517ec5d9af885af223', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '65bc0d7b2e1f2896de59c24d1c711b2eec03c573', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-apex-chart", { key: 'f7ac3c89ab13783a3006ccfaa8a19658a41679fe',
            // type="donut" 
            //   series={ [{
            //     name: "Desktops",
            //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            // }]} 
            // labels={['Apple', 'Mango', 'Orange', 'Watermelon']}
            options: {
                series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }],
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false // Hides the toolbar
                    },
                    zoom: {
                        enabled: false // Disables zooming
                    },
                },
                dataLabels: {
                    enabled: false
                },
                // markers:{
                //   shape:"circle",
                //   size:6,
                //   strokeColors:"#067647",
                //   strokeWidth:2,
                //   fillOpacity: 1, // Simulates inner fill opacity
                //   colors:"#fff",
                // },
                stroke: {
                    curve: 'stepline'
                },
                fill: {
                    type: 'gradient', // Options: 'solid', 'gradient'
                    gradient: {
                        shade: 'light',
                        type: "vertical", // Options: 'horizontal', 'vertical'
                        gradientToColors: ['#fff'], // End color of the gradient
                        stops: [0, 100] // Color distribution
                    },
                    colors: ['#079455'] // Start color
                },
                // xaxis: {
                //   type: 'datetime',
                //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },
                // tooltip: {
                //   x: {
                //     format: 'dd/MM/yy HH:mm'
                //   },
                // },
                xaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                yaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                // xaxis: {
                //   show: false // Hides the X-axis completely
                // },
                // yaxis: {
                //   show: false // Hides the Y-axis completely
                // },
                grid: {
                    show: false
                },
                // tooltip:{
                //   enabled: false
                // }
                legend: {
                    show: false
                }
            } }), h("dga-apex-chart", { key: '3b21093901cbda5133a4d08286f7ac63c5169195',
            // type="donut" 
            //   series={ [{
            //     name: "Desktops",
            //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            // }]} 
            // labels={['Apple', 'Mango', 'Orange', 'Watermelon']}
            options: {
                series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }],
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false // Hides the toolbar
                    },
                    zoom: {
                        enabled: false // Disables zooming
                    },
                },
                dataLabels: {
                    enabled: false
                },
                // markers:{
                //   shape:"circle",
                //   size:6,
                //   strokeColors:"#067647",
                //   strokeWidth:2,
                //   fillOpacity: 1, // Simulates inner fill opacity
                //   colors:"#fff",
                // },
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    type: 'gradient', // Options: 'solid', 'gradient'
                    gradient: {
                        shade: 'light',
                        type: "vertical", // Options: 'horizontal', 'vertical'
                        gradientToColors: ['#fff'], // End color of the gradient
                        stops: [0, 100] // Color distribution
                    },
                    colors: ['#079455'] // Start color
                },
                // xaxis: {
                //   type: 'datetime',
                //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },
                // tooltip: {
                //   x: {
                //     format: 'dd/MM/yy HH:mm'
                //   },
                // },
                xaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                yaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                // xaxis: {
                //   show: false // Hides the X-axis completely
                // },
                // yaxis: {
                //   show: false // Hides the Y-axis completely
                // },
                grid: {
                    show: false
                },
                // tooltip:{
                //   enabled: false
                // }
                legend: {
                    show: false
                }
            } }), h("dga-apex-chart", { key: '3522adfbe33e02ca97e5206116383a2c257a6493',
            // type="donut" 
            //   series={ [{
            //     name: "Desktops",
            //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            // }]} 
            // labels={['Apple', 'Mango', 'Orange', 'Watermelon']}
            options: {
                series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }],
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false // Hides the toolbar
                    },
                    zoom: {
                        enabled: false // Disables zooming
                    },
                },
                dataLabels: {
                    enabled: false
                },
                // markers:{
                //   shape:"circle",
                //   size:6,
                //   strokeColors:"#067647",
                //   strokeWidth:2,
                //   fillOpacity: 1, // Simulates inner fill opacity
                //   colors:"#fff",
                // },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient', // Options: 'solid', 'gradient'
                    gradient: {
                        shade: 'light',
                        type: "vertical", // Options: 'horizontal', 'vertical'
                        gradientToColors: ['#fff'], // End color of the gradient
                        stops: [0, 100] // Color distribution
                    },
                    colors: ['#079455'] // Start color
                },
                // xaxis: {
                //   type: 'datetime',
                //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },
                // tooltip: {
                //   x: {
                //     format: 'dd/MM/yy HH:mm'
                //   },
                // },
                xaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                yaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                // xaxis: {
                //   show: false // Hides the X-axis completely
                // },
                // yaxis: {
                //   show: false // Hides the Y-axis completely
                // },
                grid: {
                    show: false
                },
                // tooltip:{
                //   enabled: false
                // }
                legend: {
                    show: false
                }
            } }), h("dga-apex-chart", { key: 'd2cac6954a2434c4fd1f317e78ce5d5c35833df8',
            // type="donut" 
            //   series={ [{
            //     name: "Desktops",
            //     data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            // }]} 
            // labels={['Apple', 'Mango', 'Orange', 'Watermelon']}
            options: {
                series: [{
                        name: 'series1',
                        data: [31, 40, 28, 51, 42, 109, 100]
                    }, {
                        name: 'series2',
                        data: [11, 32, 45, 32, 34, 52, 41]
                    }],
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false // Hides the toolbar
                    },
                    zoom: {
                        enabled: false // Disables zooming
                    },
                },
                dataLabels: {
                    enabled: false
                },
                // markers:{
                //   shape:"circle",
                //   size:6,
                //   strokeColors:"#067647",
                //   strokeWidth:2,
                //   fillOpacity: 1, // Simulates inner fill opacity
                //   colors:"#fff",
                // },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient', // Options: 'solid', 'gradient'
                    gradient: {
                        shade: 'light',
                        type: "vertical", // Options: 'horizontal', 'vertical'
                        gradientToColors: ['#fff'], // End color of the gradient
                        stops: [0, 100] // Color distribution
                    },
                    colors: ['#079455'] // Start color
                },
                // xaxis: {
                //   type: 'datetime',
                //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                // },
                // tooltip: {
                //   x: {
                //     format: 'dd/MM/yy HH:mm'
                //   },
                // },
                xaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                yaxis: {
                    labels: {
                        show: false // Hides X-axis labels
                    },
                    axisBorder: {
                        show: false // Hides the X-axis border line
                    },
                    axisTicks: {
                        show: false // Hides the X-axis ticks
                    }
                },
                // xaxis: {
                //   show: false // Hides the X-axis completely
                // },
                // yaxis: {
                //   show: false // Hides the Y-axis completely
                // },
                grid: {
                    show: false
                },
                // tooltip:{
                //   enabled: false
                // }
                legend: {
                    show: false
                }
            } })), h("div", { key: '6719356101bdb3a62304b6da270ef0080315e893', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-metric-usage"; }
}
