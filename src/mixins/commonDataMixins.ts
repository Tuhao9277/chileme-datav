import { ComponentOptions } from 'vue';
import _ from 'lodash';

type OType = { [key: string]: string };
function format(v: string) {
  const reg = /\d{1,3}(?=(]\d{3})+$)/g;
  return `${v}`.replace(reg, '$&,');
}
function wrapperObject(o: any, k: string) {
  if (!_.isEmpty(o) && k.indexOf('.') >= 0) {
    const keys = k.split('.');
    keys.forEach(key => {
      o = o[key];
    });
    return o;
  } else {
    return o && o[k] ? o[k] : {};
  }
}
const wrapperArray = (o: OType, k: string) => (o && o[k] ? o[k] : []);

const wrapperMoney = (o: OType, k: string) => (o && o[k] ? `${format(o[k])}` : '¥ 0.00');

const wrapperOriginalNumber = (o: OType, k: string) => (o && o[k] ? o[k] : []);

const wrapperNumber = (o: OType, k: string) => (o && o[k] ? format(o[k]) : 0);

const wrapperPercentage = (o: OType, k: string) => (o && o[k] ? `${o[k]}` : '0%');

const CommonDataMixins: ComponentOptions<Vue> = {
  computed: {
    reportData(): OType {
      return this.getReportData();
    },
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday');
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay');
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth');
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay');
    },
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday');
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay');
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend');
    },
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser');
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate');
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend');
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis');
    },
    userToday() {
      return wrapperNumber(this.reportData, 'userToday');
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday');
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth');
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, 'userGrowthLastDay');
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth');
    },
    orderFullYear() {
      return wrapperArray(this.reportData, 'orderFullYear');
    },
    orderFullYearAxis() {
      return wrapperArray(this.reportData, 'orderFullYearAxis');
    },
    orderRank() {
      return wrapperArray(this.reportData, 'orderRank');
    },
    userFullYear() {
      return wrapperArray(this.reportData, 'userFullYear');
    },
    userFullYearAxis() {
      return wrapperArray(this.reportData, 'userFullYearAxis');
    },
    userRank() {
      return wrapperArray(this.reportData, 'userRank');
    },
    wordCloud() {
      return this.getWordCloud();
    },
    category1() {
      return wrapperObject(this.reportData, 'category.data1');
    },
    category2() {
      return wrapperObject(this.reportData, 'category.data2');
    },
    mapData() {
      return this.getMapData();
    },
  },
  filters: {
    format(v: string) {
      return format(v);
    },
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
};
export default CommonDataMixins;
