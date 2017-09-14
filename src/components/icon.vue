<template>
	<div class="icon">
    <!--
     todo Icon图标
     使用类名el-icon-iconName添加icon，或者在自定义按钮中直接写iconName
 -->
    <el-row type="flex" justify="center">
      <el-col>
        <div><i class="el-icon-edit"></i></div>
      </el-col>
      <el-col>
        <div><i class="el-icon-share"></i></div>
      </el-col>
      <el-col>
        <el-button type="primary" icon="share">搜索</el-button>
      </el-col>
    </el-row>
    <!--
         todo input计数器
         min:计数器允许的最小值
         max:计数器允许的最大值
         step:计数器的步长
         size:计数器大小  large|small
         disabled:是否禁用计数器
         change（event）:变更时的值
   -->
    <el-row>
      <el-input-number size="large" v-model="num1" @change="handleChange" :min="1" :step="3"
                       :max="10"></el-input-number>
      <el-input-number :disabled="true" v-model="num2" @change="handleChange" :min="1" :step="3"
                       :max="10"></el-input-number>
      <el-input-number size="small" v-model="num3" @change="handleChange" :min="1" :step="2"
                       :max="10"></el-input-number>
    </el-row>
    <!--
          todo 单选按钮
                label:单选的value
                disabled:是否禁用
                name:和原生的name相同
                change(event):值变化时的事件
                disabled:true|false
                radio-group:
                    size:radio大小
                    fill:按钮激活时的填充色和边框颜色
                    text-color:按钮激活时的文字颜色
                    鼠标移入时的文字颜色
    -->
    <el-row>
      <el-radio-group v-model="radio2" @change="radioChange">
        <el-radio label="吃的"></el-radio>
        <el-radio :disabled="true" label="穿的"></el-radio>
        <el-radio label="住的"></el-radio>
        <el-radio label="用的"></el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group fill="maroon" text-color="springgreen" size="large" v-model="radio3">
        <el-radio-button label="太原"></el-radio-button>
        <el-radio-button label="西安"></el-radio-button>
        <el-radio-button label="天津"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="radio4" @change="getCity">
        <el-radio-button label="太原"></el-radio-button>
        <el-radio-button label="西安"></el-radio-button>
        <el-radio-button label="天津"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
      </el-radio-group>
      <el-radio-group size="small" v-model="radio5">
        <el-radio-button label="太原"></el-radio-button>
        <el-radio-button :disabled="true" label="西安"></el-radio-button>
        <el-radio-button label="天津"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
      </el-radio-group>
    </el-row>
    <!--todo 多选框-->
    <!--todo 简单多选框-->
    <el-row>
      <el-checkbox-group v-model="checkbox1" :min="1" :max="5">
        <el-checkbox label="复选框A"></el-checkbox>
        <el-checkbox label="复选框B"></el-checkbox>
        <el-checkbox label="复选框C"></el-checkbox>
        <el-checkbox label="复选框D"></el-checkbox>
        <el-checkbox label="复选框E"></el-checkbox>
        <el-checkbox label="禁用"></el-checkbox>
        <el-checkbox :disabled="true" label="选中且禁用"></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <!--todo 有全选效果的多选框-->
    <el-row>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">quanxuan
      </el-checkbox>
      <div style="margin:10px 0"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <!--todo 禁用 尺寸以及事件-->
    <el-row>
      <el-checkbox-group size="large" v-model="check">
        <el-checkbox-button v-for="item in city" :label="item" :key="item"></el-checkbox-button>
      </el-checkbox-group>
      <el-checkbox-group fill="maroon" text-color="springgreen" v-model="check">
        <el-checkbox-button v-for="item in city" :label="item" :key="item"></el-checkbox-button>
      </el-checkbox-group>
      <el-checkbox-group size="small" v-model="check">
        <el-checkbox-button v-for="item in city" :label="item" :key="item" :disabled="item==='北京'"></el-checkbox-button>
      </el-checkbox-group>
    </el-row>
	</div>
</template>

<script>
  const citiesOptions = ['太原', '西安', '北京', '天津'];
  const citylist = ['太原', '西安', '北京', '天津'];
	export default {
    name: 'icon',
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        radio: '1',
        radio2: '住的',
        radio3: '天津',
        radio4: '太原',
        radio5: '西安',
        checkbox1: ['复选框B', '选中且禁用'],
        checkAll: true,
        checkedCities: ['天津', '太原'],
        check: ['天津', '太原'],
        cities: citiesOptions,
        city: citylist,
        isIndeterminate: true,
        selecta: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        select1: ''
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      radioChange(value) {
        console.log(value)
      },
      getCity(value) {
        console.log(value)
      },
      handleCheckAllChange(value) {
        console.log(value)
        this.checkedCities = value.target.checked ? citiesOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  $num:20px;
  .el-row{
    margin-bottom: $num;
  }
</style>
