import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element';
import './plugins/vcharts';
import ECharts from 'echarts';
import VueECharts from 'vue-echarts';
import './style/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import { floor, ceil } from 'lodash';
Vue.config.productionTip = false;
Vue.prototype.$echarts = ECharts;
Vue.component('v-chart', VueECharts);

Vue.filter('toPercent', function(val, acc, type) {
  //小数转百分比 ，acc为保留小数位
  let num;
  if (type === 'floor') {
    num = floor(val, 4);
  } else {
    num = ceil(val, 4);
  }
  if (isNaN(num)) {
    num = 0;
  }
  let accuracy = parseInt(acc);
  if (isNaN(accuracy) || accuracy < 0 || accuracy > 10) {
    accuracy = 2;
  }
  return (num * 100).toFixed(accuracy) + '%';
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
