<template>
  <div>
    <vs-show :datas="datas" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VsShow from '../components/PlantForm/VsShow.vue';
import TimeChart from '../components/PlantForm/TimeChart.vue';
import CommonCard from '../components/CommonCard.vue';

@Component({
  components: {
    VsShow,
    TimeChart,
    CommonCard,
  },
})
export default class PlantForm extends Vue {
  private datas = [500, 131];
}
</script>

<style scoped></style>
