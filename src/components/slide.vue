<template>
  <div class="slide">
    <!--
        滑块和进度条
        min:最小值
        max:最大值
        disabled:是否禁用
        step:步长
        show-input:右侧显示输入框  仅在非范围选择时有效
        show-input-controls:在显示输入框的情况下  是否显示输入框的控制按钮
        show-stops:是否显示间断点
        show-tooltip:是否显示tooltip
        format-tooltip:格式化tooltip message
        range	是否为范围选择
        vertical	是否竖向模式
        height	Slider 高度 竖向模式时必填
        change(event):值改变后的事件(改变以后的值)
    -->
      <el-row class="block">
        <el-col :span="4" class="title"><span>默认</span></el-col>
        <el-col :span="20">
          <el-slider
            v-model="value1"
          :show-input="true"
          @change="changeValue"></el-slider>
        </el-col>
      </el-row>
      <el-row class="block">
        <el-col :span="4" class="title"><span>自定义初始值</span></el-col>
        <el-col :span="20">
          <el-slider
            v-model="value2"
            :step="10"
            :show-stops="true"
          ></el-slider>
        </el-col>
      </el-row>
      <el-row class="block">
        <el-col :span="4" class="title"><span>隐藏 Tooltip</span></el-col>
        <el-col :span="20">
          <el-slider
            v-model="value3"
            :show-tooltip="false">
          </el-slider>
        </el-col>
      </el-row>
      <el-row class="block">
        <el-col :span="4" class="title"><span>格式化 Tooltip</span></el-col>
        <el-col :span="20">
          <el-slider
            v-model="value4"
            :format-tooltip="formatTooltip">
          </el-slider>
        </el-col>
      </el-row>
      <el-row class="block">
        <el-col :span="4" class="title"><span>禁用</span></el-col>
        <el-col :span="20">
          <el-slider
            v-model="value5"
            disabled>
          </el-slider>
        </el-col>
      </el-row>
    <el-row class="block">
      <el-col :span="4" class="title"><span>选择范围</span></el-col>
      <el-col :span="20">
        <el-slider
          v-model="value6"
          range
          :max="10"
          :show-stops="true"
        >
        </el-slider>
      </el-col>
    </el-row>
    <el-row class="block">
        <el-slider
          v-model="value7"
          :vertical="true"
          height="200px"
        >
        </el-slider>
    </el-row>
    </div>
</template>

<script>
  export default {
    name: 'slide',
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6:[3,5],
        value7:0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
      changeValue(value){
        console.log(value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .block {
    width: 90%;
    margin: 20px auto;
  }
  .title {
    line-height: 36px;
  }
</style>
