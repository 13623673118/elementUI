<template>
	<div class="shange">
    <!--
    todo 栅格系统（通过row和col进行24栅格化布局）
    row设置
          gutter:栅格间隔
          type="flex":启用flex布局
          justify:flex模式下水平排列方式     start|end|center|space-between|space-around
          align:flex模式下的垂直排列方式     top|middle|bottom
          tag:自定义标签
    col设置
          span:栅格所占的列数
          offset:设置列偏移
          push:栅格向右移动的列数
          pull:栅格向左移动的列数
          xs|sm|md|lg:设置响应式结构

-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
	</div>
</template>

<script>
	export default {
	  name:'shange'
	}
</script>

<style lang="scss" scoped>
  $num:20px;
  .el-row {
    margin-bottom: $num;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
