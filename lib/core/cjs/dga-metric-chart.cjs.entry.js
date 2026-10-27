'use strict';

var index = require('./index-DuIfHULw.js');

const DgaMetricChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = 'realistic';
        this.trend = 'positive';
        this.size = 'lg';
        this.showMarker = false;
        this.data = [];
        this.lineColor = this.trend === 'positive' ? '#067647' : '#B42318';
        this.fillColor = this.trend === 'positive' ? '#079455' : '#D92D20';
        this.width = this.size === 'lg' ? 328 : 128;
        this.height = 64;
    }
    handleSizeChange() {
        this.width = this.size === 'lg' ? 328 : 128;
    }
    getLinePath() {
        const points = this.getPoints();
        switch (this.type) {
            case 'realistic':
                return this.getSmoothPath(points);
            case 'wavy':
                return this.getWavyPath(points);
            case 'straight':
                return this.getStraightPath(points);
            case 'layers':
                return this.getSmoothPath(points);
            default:
                return '';
        }
    }
    getPoints() {
        return this.data.map((d, i) => ({
            x: (i / (this.data.length - 1)) * this.width,
            y: this.height - (d / Math.max(...this.data)) * this.height
        }));
    }
    getSmoothPath(points) {
        return points.reduce((acc, point, i, arr) => {
            if (i === 0)
                return `M ${point.x},${point.y}`;
            const prev = arr[i - 1];
            const cX = (prev.x + point.x) / 2;
            return `${acc} C ${cX},${prev.y} ${cX},${point.y} ${point.x},${point.y}`;
        }, '');
    }
    getWavyPath(points) {
        return points.reduce((acc, point, i) => i === 0 ? `M ${point.x},${point.y}` : `${acc} Q ${point.x - 10},${point.y + 10} ${point.x},${point.y}`, '');
    }
    getStraightPath(points) {
        return points.reduce((acc, point, i) => i === 0 ? `M ${point.x},${point.y}` : `${acc} L ${point.x},${point.y}`, '');
    }
    getAreaPath() {
        const linePath = this.getLinePath();
        return `${linePath} L ${this.width},${this.height} L 0,${this.height} Z`;
    }
    render() {
        const linePath = this.getLinePath();
        const areaPath = this.getAreaPath();
        return (index.h("svg", { key: 'e0ea138935dcaa2cc6dbcff9876f3866421e377b', width: this.width, height: this.height, viewBox: `0 0 ${this.width} ${this.height}` }, index.h("defs", { key: '675f07eeb6b8102254d195897a82c83b43c7c71d' }, index.h("linearGradient", { key: '058cda66ce26c908019f123a16f90fe4a951ea23', id: "areaGradient", x1: "0", x2: "0", y1: "0", y2: "1" }, index.h("stop", { key: '7f96243adb7a1f3b9ea408408dd674c398875f08', offset: "0%", "stop-color": this.fillColor, "stop-opacity": "0.25" }), index.h("stop", { key: 'ac795551148ebdb08ff0b43e1b4ef9cbf275c298', offset: "100%", "stop-color": this.fillColor, "stop-opacity": "0" }))), index.h("path", { key: '2cc9ec32d952d1306caad034ef70afb5e7ff55a6', d: areaPath, fill: "url(#areaGradient)" }), index.h("path", { key: '105c6fcb174b9adfa3a7a2d71f3b243f19b89056', d: linePath, fill: "none", stroke: this.lineColor, "stroke-width": "2" }), this.showMarker && this.getPoints().map((point) => (index.h("circle", { cx: point.x, cy: point.y, r: "4", fill: "white", stroke: this.lineColor, "stroke-width": "2" })))));
    }
    static get watchers() { return {
        "size": ["handleSizeChange"]
    }; }
};

exports.dga_metric_chart = DgaMetricChart;
