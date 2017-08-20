<template>
	<div id="Layout">
        <!-- 栅格 -->
		<el-row :gutter="10" class="container">
          <el-col :span="4" class="item">1212121</el-col>
          <el-col :span="4" class="item">1212121</el-col>
          <el-col :span="4" class="item">1212121</el-col>
          <el-col :span="4" class="item">1212121</el-col>
          <el-col :span="4" class="item">1212121</el-col>
          <el-col :span="4" class="item">1212121</el-col>
        </el-row>
        <!-- 图标 -->
        <i class="el-icon-edit"></i>
        <i class="el-icon-delete"></i>
        <i class="el-icon-arrow-down"></i>
        <i class="el-icon-arrow-up"></i>
        <i class="el-icon-caret-top"></i>
        <i class="el-icon-caret-bottom"></i>
        <i class="el-icon-close"></i>
        <i class="el-icon-menu"></i>
        <i class="el-icon-search"></i>
        <i class="el-icon-setting"></i>
        <i class="el-icon-delete2"></i>
        <i class="el-icon-upload2"></i>
        <!-- 按钮 可以在按钮里面加图标-->
        <div class="block">
          <span class="demonstration">默认显示颜色</span>
          <span class="wrapper">
            <el-button type="success" icon="arrow-right">成功按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button type="info">信息按钮</el-button>
          </span>   
        </div>
        <button @click="h1Click">button</button>
        <h1 v-show="h1Show" style="background: #fff" class="animated" :class="h1Sytle">Example</h1>
	</div>
</template>
<script type="text/ecmascript-6">
    export default {
    	porps: {},
    	components: {},
    	data () {
    		return {
          h1Show:true
    		}
    	},
    	computed: {},
    	created () {},
    	mounted () {},
    	methods: { 
        h1Click () {
           this.h1Show = !this.h1Show
          if (this.h1Show) {
            this.h1Sytle = 'slideInDown'
          } else {
            this.h1Sytle = 'slideOutUp'
          }
         
        }
      }
    }
</script>
<style rel="stylesheet" lang="scss">
#Layout {
    min-width:610px;
     .item{
    
    }
}
   
</style>