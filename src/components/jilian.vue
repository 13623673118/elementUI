<template>
  <div class="jilian">
    <!--
        级联下拉框
            options:数据资源
            value:选中的绑定值
            placeholder:占位符
            disabled:是否禁用
            expand-trigger:菜单的展开方式   ^click|hover
            clearable:是否支持清空选项    true|false
            show-all-levels:是否在选项中显示完整的路径     true|false
            filterable:是否可以搜索   true|false
            change-on-select:是否允许选择任意一级的选项
            size:控制尺寸   large|small|mini
            change(event):绑定值变化时触发事件
            active-item-change:各个父级选项组成的数组(只在change-on-select===false时有用)
            todo 数据结构的键值名称是规定好的??????????
    -->
    <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader
        :options="options"
        v-model="selectedOptions"
        :show-all-levels="true"
        :clearable="true"
        placeholder="占位符"
        :change-on-select="false"
        :filterable="true"
        @change="handleChange"
      @active-item-change="activeChange">
      </el-cascader>
    </div>
    <div class="block">
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        expand-trigger="hover"
        :options="options"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jilian',
    data() {
      return {
        options: [
          {
            value: 'zhinan',
            label: '指南',
            //todo 禁用该选项 ？？？？？？？
            disabled: true,
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          },
          {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          },
          {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }],
        selectedOptions: ['zujian','data','tag'],
        selectedOptions2: ['zhinan','shejiyuanze','yizhi']
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      activeChange(value){
        console.log(value)
      }
    }
  };
</script>
<style lang="scss" scoped>
  $height: 20px;
  .block {
    margin-bottom: $height;
  }
</style>
