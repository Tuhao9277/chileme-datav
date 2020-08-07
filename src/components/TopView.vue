<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TotalSales from './TotalSales.vue';
import TotalOrders from './TotalOrders.vue';
import TodayUsers from './TodayUsers.vue';
import TotalUsers from './TotalUsers.vue';
@Component<TopView>({
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers,
  },
})
export default class TopView extends Vue {}
</script>

<style scoped></style>
