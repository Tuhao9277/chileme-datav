import { createChart, IChartApi, WhitespaceData, LineData } from 'lightweight-charts';
export class Charts {
  ref: any;
  chart: IChartApi;
  area: any;
  constructor(ref) {
    this.ref = ref;
    this.init();
  }
  init() {
    this.chart = createChart(this.ref);
  }
  addAreaSeries(data: (LineData | WhitespaceData)[]) {
    this.area = this.chart.addAreaSeries();
  }
  updateData(data) {
    this.area.setData(data);
  }
  applyOptions() {
    this.chart;
  }
}
