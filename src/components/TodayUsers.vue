<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span> 退货率</span>
      <span class="emphasis"> {{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script lang="ts">
import Vue from 'vue';
import CommonCard from './CommonCard.vue';
import { Component } from 'vue-property-decorator';
import CommonDataMixins from '../mixins/commonDataMixins';

@Component<TodayUsers>({
  components: {
    CommonCard,
  },
  mixins: [CommonDataMixins],
})
export default class TodayUsers extends Vue {
  getOptions() {
    return {
      color: ['#3398DB'],
      tooltip: {},
      series: [
        {
          name: '用户实时交易量',
          type: 'bar',
          data: this.orderUserTrend,
          barWidth: '60%',
        },
      ],
      xAxis: {
        type: 'category',
        data: this.orderUserTrendAxis,
        show: false,
      },
      yAxis: {
        show: false,
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    };
  }
}
</script>

<style scoped></style>
