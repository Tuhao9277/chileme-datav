<template>
  <div class="home">
    <top-view />
    <!-- <sales-view />
    <bottom-view />
    <map-view /> -->
  </div>
</template>

<script lang="ts">
import TopView from '../components/TopView.vue';
import SalesView from '../components/SalesView.vue';
import BottomView from '../components/BottomView.vue';
import MapView from '../components/MapView.vue';
import { wordcloud, screenData, mapScatter } from '../api';
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component<Home>({
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  mounted() {
    screenData().then(data => {
      this.reportData = data;
    });
    wordcloud().then(data => {
      this.wordCloud = data;
    });
    mapScatter().then(data => {
      this.mapData = data;
    });
  },
})
export default class Home extends Vue {
  private reportData = {};
  private wordCloud = [];
  private mapData = [];

  @Provide()
  getReportData() {
    return this.reportData;
  }

  @Provide()
  getWordCloud() {
    return this.wordCloud;
  }
  @Provide()
  getMapData() {
    return this.mapData;
  }
}
</script>

<style>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
