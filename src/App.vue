<template>
  <div id="app">
    <p>
      <router-link to="/shange">栅格布局</router-link>
      <router-link to="/icon">图标/单选多选</router-link>
      <router-link to="/select">下拉框</router-link>
      <router-link to="/jilian">级联下拉</router-link>
      <router-link to="/switch">滑动开关</router-link>
      <router-link to="/slide">滑块&进度条</router-link>
      <router-link to="/carousel">轮播图</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  body {
    margin: 0
  }
  a{
    text-decoration: none;
    color:#333;
    font-size: 16px;
    margin:0 5px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: maroon;
  }
  p{
    margin-bottom: 50px;
  }
</style>
