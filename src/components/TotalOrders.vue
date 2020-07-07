<template>
  <common-card title="累计订单量" :value="orderToday">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <div>
        <span>昨日订单量</span>
        <span class="emphasis">{{ orderLastDay }}</span>
      </div>
    </template>
  </common-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CommonCard from './CommonCard.vue';
import CommonDataMixins from '../mixins/commonDataMixins';

@Component({
  components: {
    CommonCard,
  },
  mixins: [CommonDataMixins],
})
export default class TotalOrders extends Vue {
  private getOptions() {
    return this.orderTrend.length > 0
      ? {
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false,
          },
          yAxis: {
            show: false,
          },
          series: [
            {
              type: 'line',
              data: this.orderTrend,
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgb(148,0,211)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(148,0,211,0.51)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
              lineStyle: {
                width: 0,
              },
              itemStyle: {
                opacity: 0,
              },
              smooth: true,
            },
          ],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }
      : null;
  }
}
</script>

<style lang="less" scoped></style>
