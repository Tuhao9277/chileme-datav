<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="./../assets/logo.png" alt="" />
        <h1>THDax</h1>
      </div>
    </el-header>
    <el-main>
      <el-card shadow="hover">
        <el-button type="primary">按钮</el-button>
      </el-card>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class LandingPage extends Vue {}
</script>

<style lang="less" scoped>
.el-container {
  display: flex;
  height: 100%;
}
.el-header {
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  z-index: 9;
  top: 0;
  .logo {
    height: 60px;
    overflow: hidden;
    line-height: 60px;
    img {
      height: 32px;
      display: inline-block;
      vertical-align: middle;
    }
    h1 {
      margin-left: 10px;
      color: #fff;
      font-size: 16px;
    }
  }
}
.el-header,
.el-footer {
  height: 60px;
  color: #333;
  line-height: 60px;
}

.el-main {
  flex: 1;
  color: #333;
  text-align: center;
}
</style>
