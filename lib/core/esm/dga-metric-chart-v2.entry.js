import { r as registerInstance, h } from './index-BLSc18AE.js';

const DgaMetricChartV2 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = 130;
        this.height = 66;
        this.strokeColor = '#067647';
        this.fillColor = '#079455';
        this.strokeWidth = 2;
        this.data = [];
        this.showMarker = true;
        this.pathD = '';
        this.areaD = '';
        this.currentMarkerPos = { x: 76, y: 5 }; // default position
    }
    dataChangeHandler() {
        this.generatePaths();
        this.updateMarkerPosition();
    }
    componentWillLoad() {
        this.generatePaths();
        this.updateMarkerPosition();
    }
    normalizeData() {
        if (this.data.length === 0)
            return [];
        const xValues = this.data.map(d => d.x);
        const yValues = this.data.map(d => d.y);
        const minX = Math.min(...xValues);
        const maxX = Math.max(...xValues);
        const minY = Math.min(...yValues);
        const maxY = Math.max(...yValues);
        const margin = 10;
        return this.data.map(point => ({
            x: ((point.x - minX) / (maxX - minX)) * (128 - 2 * margin) + margin,
            y: 64 - (((point.y - minY) / (maxY - minY)) * (64 - 2 * margin) + margin)
        }));
    }
    updateMarkerPosition() {
        if (this.markerPosition) {
            this.currentMarkerPos = this.markerPosition;
        }
        else if (this.data.length > 0) {
            const normalizedData = this.normalizeData();
            const lastPoint = normalizedData[normalizedData.length - 1];
            // Calculate marker position based on the last data point
            // Adjust these offsets to position the marker correctly relative to the point
            this.currentMarkerPos = {
                x: lastPoint.x - 10, // Adjust these offsets as needed
                y: lastPoint.y - 15 // Adjust these offsets as needed
            };
        }
    }
    generatePaths() {
        const normalizedData = this.normalizeData();
        if (normalizedData.length === 0)
            return;
        this.pathD = normalizedData.reduce((path, point, i) => {
            return path + `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y} `;
        }, '');
        this.areaD = `${this.pathD} L ${normalizedData[normalizedData.length - 1].x} 65 L 1 65 Z`;
    }
    render() {
        const { x: markerX, y: markerY } = this.currentMarkerPos;
        return (h("svg", { key: '1d07a8ad7e9b56ed1a820f9b7588305c6ad9ca70', width: this.width, height: this.height, viewBox: "0 0 130 66", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("defs", { key: 'de28dfcef962a8a87ba7d03a2f3e68a4a2bd7c82' }, h("linearGradient", { key: '24d0c17fe690bb4d29b9f17c6019f8f46ddabc46', id: "gradientMask", x1: "64", y1: "0", x2: "64", y2: "64", gradientUnits: "userSpaceOnUse" }, h("stop", { key: 'dc8c11d5d9b0b605acbc5f06ed70b5196ea4bd61' }), h("stop", { key: 'b62c992a15186af746a343ed461a0a04b8af7212', offset: "1", "stop-opacity": "0" })), h("mask", { key: '1f631fc306e414214871ccbbcf458569144d9152', id: "chartMask", style: { maskType: 'alpha' }, maskUnits: "userSpaceOnUse", x: "1", y: "1", width: "128", height: "64" }, h("rect", { key: 'd4ffbaa8cb7ceed506ed6f61375e5fad2580e4d9', width: "128", height: "64", transform: "translate(1 1)", fill: "url(#gradientMask)" }))), h("g", { key: '1fcc46d84e5d1b459e9337a56dfadd92e8dbb0e6', mask: "url(#chartMask)" }, h("path", { key: '5f047af39a3a99a7317d1e4890c72067f97e090f', opacity: "0.2", d: this.areaD, fill: this.fillColor })), h("path", { key: '2bf21a0d49a0497dcdc656dcb605e412126a5393', d: this.pathD, stroke: this.strokeColor, "stroke-width": this.strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none" }), this.showMarker && (h("g", { key: '88be87a800759fa3cb9549594a4579e1a7dceda8', transform: `translate(${markerX}, ${markerY})` }, h("g", { key: 'bad2a2a26e150bbaa17ff68ef19f05d074db8812', opacity: "0.2" }, h("rect", { key: 'c13aaa9120f7bc086f45986d9eb28c32e4b3c68b', width: "20", height: "20", rx: "10", stroke: this.strokeColor, "stroke-width": this.strokeWidth })), h("rect", { key: 'eceb5a3bc34b33b5a58804667588d3048bb90099', x: "5", y: "5", width: "10", height: "10", rx: "5", fill: "white" }), h("rect", { key: 'fcab9727ee2bf1190d6b70dcbeb8c5cf309d183a', x: "5", y: "5", width: "10", height: "10", rx: "5", stroke: this.strokeColor, "stroke-width": this.strokeWidth })))));
    }
    static get watchers() { return {
        "data": ["dataChangeHandler"]
    }; }
};

export { DgaMetricChartV2 as dga_metric_chart_v2 };
