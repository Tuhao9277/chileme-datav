<template>
  <el-card title="PK平台">
    <vs-show :datas="datas" />
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VsShow from '../components/PlantForm/VsShow.vue';

@Component({
  components: {
    VsShow,
  },
})
export default class PlantForm extends Vue {
  private datas = [500, 131];
}
</script>

<style scoped></style>
