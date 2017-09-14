<template>
	<div class="carousel">
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel>
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">卡片化</span>
      <el-carousel trigger="click" type="card">
        <el-carousel-item v-for="item in imgs2" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
	</div>
</template>

<script>
	export default {
	  name:'carousel',
    data(){
	    return{
	      imgs:[
	        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=983157457,1342871463&fm=200&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505898147&di=bfa1882333b15e3568e33739336740da&imgtype=jpg&er=1&src=http%3A%2F%2Fbddsb.bandao.cn%2Fdata%2F20131129%2F583434353C3335%2Fimages%2F15.jpg',
        ],
        imgs2:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505303842072&di=201b3b8fa3ed3ca1a0d937745c6ddd17&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fpsd%2F170512%2F17051234101362.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=983157457,1342871463&fm=200&gp=0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505898147&di=bfa1882333b15e3568e33739336740da&imgtype=jpg&er=1&src=http%3A%2F%2Fbddsb.bandao.cn%2Fdata%2F20131129%2F583434353C3335%2Fimages%2F15.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505303842072&di=201b3b8fa3ed3ca1a0d937745c6ddd17&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fpsd%2F170512%2F17051234101362.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=983157457,1342871463&fm=200&gp=0.jpg',
        ]
      }
    }

	}
</script>
<style lang="scss" scoped>

</style>
