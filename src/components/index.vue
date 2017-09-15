<template>
  <div class="index">
    {{msg}}
    <Date></Date>
    <div class="cube"></div>
  </div>
</template>

<script>
  import Date from './template/date'
  export default {
    name: 'index',
    data() {
      return {
        msg: 'hello,world'
      }
    },
    components:{
      Date
    }
  }
</script>
<style lang="scss" scoped>
@mixin cube($width:100px,$height:50px){
  width: $width;
  height: $height;
}
  .cube{
    @include cube(300px,300px);
    background: #000;
  }
</style>
