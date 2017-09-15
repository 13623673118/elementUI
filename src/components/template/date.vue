<template>
	<div class="date">
    <el-button type="danger" @click="getMsg">默认按钮</el-button>
	</div>
</template>

<script>
  import axios from 'axios'
	export default {
	  name:'',
    data(){
	    return{

      }
    },
    methods:{
      getMsg(){
        axios.get('/').then(function (res) {
          console.log(res)
        }).catch(function (err) {
          console.log(err)
        })
      }
    }

	}
</script>
<style lang="scss" scoped>

</style>
