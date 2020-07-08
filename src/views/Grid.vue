<template>
  <div class="container">
    <div>
      <button @click="changeToThree">切换为3列布局</button>
      <button @click="changeToFour">切换为4列布局</button>
    </div>
    <div :class="['grid', `g-${cName}`]">
      <div v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
  private cName = 3;

  private items = new Array(9).fill(0);

  changeToThree() {
    this.cName = 3;
  }
  changeToFour() {
    this.cName = 4;
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.grid {
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 0.2s all linear;
}
.g-3 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.g-4 {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
</style>
