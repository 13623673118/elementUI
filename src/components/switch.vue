<template>
	<div class="switch">
    <!--
        滑动开关
            disabled:是否禁用
            width:设置开关宽度    ^58(有文字)|46(无文字)
            on-icon-class:设置switch开关打开时显示的图标名,会忽略on-text
            off-icon-class:设置switch开关打开时显示的图标名,会忽略off-text
            on-text:开关打开时显示的文字
            off-text:开关关闭时显示的文字
            on-value:开关打开时的值   number|boolean|string    ^true
            off-value:开关关闭时的值   number|boolean|string    ^false
            on-color:开关打开时的背景色
            off-color:开关关闭时的背景色
            change(event):开关状态改变的事件   值为对应的on-value|off-value
    -->
    <el-switch
      v-model="value1"
      on-text=""
      :disabled="true"
      :width="100"
      on-icon-class="el-icon-circle-check"
      off-icon-class="el-icon-close">
    </el-switch>
    <el-switch
      v-model="value1"
      :disabled="false"
      on-text="开"
      off-text="关"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>
    <el-switch
      v-model="value2"
      on-color="#13ce66"
      off-color="#ff4949"
      on-value="开"
      off-value="关"
      @change="changeValue">
    </el-switch>
	</div>
</template>

<script>
	export default {
	name:'switch',
    data() {
      return {
        value1: true,
        value2: true
      }
    },
    methods:{
      changeValue(value){
        console.log(value)
      }
    }
	}
</script>
<style lang="scss" scoped>

</style>
