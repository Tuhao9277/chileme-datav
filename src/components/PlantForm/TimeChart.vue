<template>
  <div ref="chart" style="height:400px"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { createChart } from 'lightweight-charts';

@Component({
  mounted() {
    this.renderChart();
  },
})
export default class TimeChart extends Vue {
  _data = [
    { time: '2019-03-22', value: 32.51 },
    { time: '2019-03-23', value: 31.11 },
    { time: '2019-03-24', value: 27.02 },
    { time: '2019-03-25', value: 27.32 },
    { time: '2019-03-26', value: 25.17 },
    { time: '2019-03-27', value: 28.89 },
    { time: '2019-03-28', value: 25.46 },
    { time: '2019-03-29', value: 23.92 },
    { time: '2019-03-30', value: 22.68 },
    { time: '2019-03-31', value: 22.67 },
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
  ];
  renderChart() {
    const chart = createChart(this.$refs.chart, { width: 400, height: 300 });
    chart.applyOptions({
      timeScale: {
        rightOffset: 12,
        barSpacing: 10,
      },
    });
    const areaSeries = chart.addAreaSeries();
  }
}
</script>

<style scoped></style>
