<template>
  <div class="container">
    <div class="high_text">{{ _rate.highRate | toPercent(2, 'ceil') }}</div>
    <div class="versus-main" :style="{ width: totalWidth + 'px' }">
      <div :style="{ width: _rate.highWidth + 'px' }">
        <div class="versus high_part" :style="{ width: _rate.highWidth + 'px' }"></div>
      </div>
      <div class="versus low_part" :style="{ width: _rate.lowWidth + 'px' }"></div>
      <div class="text_part" :style="{ left: _rate.highWidth + 'px' }">VS</div>
    </div>
    <div class="low_text">{{ _rate.lowRate | toPercent(2, 'floor') }}</div>
    <video muted loop autoplay>
      <source :src="`${process.env.BASE_URL}Frost.mov`" type="video/mov" />
    </video>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { add, divide, multiply } from 'lodash';
@Component({})
export default class VsShow extends Vue {
  @Prop({ required: true })
  private datas;

  private totalWidth = 364;

  get _rate() {
    const [high, low] = this.datas;
    const total = add(high, low);
    const highRate = divide(high, total);
    const lowRate = divide(low, total);
    const highWidth = multiply(highRate, this.totalWidth);
    const lowWidth = multiply(lowRate, this.totalWidth);
    return { highRate, lowRate, highWidth, lowWidth };
  }
}
</script>

<style scoped lang="less">
@high: lightpink;
@low: skyblue;
.low_text {
  color: @low;
}
.high_text {
  color: @high;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.versus {
  height: 46px;
}
.versus-main {
  display: flex;
  position: relative;
}
.high_part {
  background: @high;
}
.low_part {
  background: skyblue;
}
.text_part {
  position: absolute;
  width: 46px;
  height: 46px;
  font-size: 30px;
  border-radius: 50%;
  background-color: antiquewhite;
  text-align: center;
  margin-left: -23px;
}
</style>
