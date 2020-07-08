<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import CommonDataMixins from '../mixins/commonDataMixins';

@Component({
  mixins: [CommonDataMixins],
})
export default class WordCloud extends Vue {
  private chartData = {};
  private chartSettings: {
    color: [
      'rgba(97,216,0,.7)',
      'rgba(204,178,26,.7)',
      'rgba(245,166,35,.7)',
      'rgba(156,13,113,.7)',
    ];
  };

  @Watch('wordCloud')
  wordCloudChange() {
    const data = [];
    this.wordCloud.forEach(item => {
      data.push({
        name: item.word,
        value: item.count,
      });
    });
    this.chartData = {
      columns: ['name', 'value'],
      rows: data,
    };
  }
}
</script>

<style scoped></style>
