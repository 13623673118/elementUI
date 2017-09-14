<template>
  <div class="index">
    {{msg}}
    <div class="cube"></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'hello,world'
      }
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
