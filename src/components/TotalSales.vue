<template>
  <common-card title="累计销售额" :value="salesToday">
    <template  >
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">{{ salesGrowthLastDay }}</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">{{ salesGrowthLastMonth }}</span>
          <div class="increase" />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">{{ salesLastDay }}</span>
    </template>
  </common-card>
</template>

<script lang="ts">
import Vue from 'vue';
import CommonCard from './CommonCard.vue';
import { Component } from 'vue-property-decorator';
import commonDataMixins from './../mixins/commonDataMixins';

@Component<TotalScales>({
  components: {
    CommonCard,
  },
  mixins: [commonDataMixins],
})
export default class TotalScales extends Vue {}
</script>

<style lang="less" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
