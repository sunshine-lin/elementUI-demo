<template>
<div>
<!-- 导航 -->
<el-menu class="NavMenuStyle" 
        :default-active="defaultIndex" 
        unique-opened
        
        @select="menuSelect"
        @open="menuOpen">
     <el-submenu index="1">
       <template slot="title"><i class="el-icon-message"></i>导航一</template>
         <el-menu-item index="1-1">选项1</el-menu-item>
         <el-menu-item index="1-2">选项2</el-menu-item>
         <el-menu-item index="1-3">选项3</el-menu-item>
     </el-submenu>
     <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
         <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
    </el-submenu>
     <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
   </el-menu>
   <!-- tab切换 -->
   <el-tabs v-model="tabActive" @tab-click="tabClick">
      <el-tab-pane label="用户管理" name="first">1</el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
    <!-- 面包削导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 下拉菜单 -->
    
    <el-dropdown @command="commandClick" @visible-change="visibleChange">
      <span class="el-dropdown-link">
        {{commandValue}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
        <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
        <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="4">双皮奶</el-dropdown-item>
        <el-dropdown-item command="5">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 步骤条 -->
    <el-steps :space="100" direction="vertical" :active="1">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
</div>
</template>
<script>
  export default {
    data() {
      return {
        defaultIndex: '1-1',
        tabActive: 'first',
        commandValue: '1'
      }
    },
    watch: {
        defaultIndex (newVal,oldVal) {
            console.log(newVal)
            // this.$router.push(newVal)
        }
    },
   methods: {
        menuSelect(index) {
            // this.$router.push(index)
        },
        menuOpen (index,path) {
            console.log(index,path)
            this.defaultIndex = index + '-' + 1
            console.log(this.defaultIndex)
        },
        //  tab 被选中时触发 tabActive 为对应的 name值
        tabClick (tab) {
            console.log(this.tabActive)
            // 根据tabActive 进行组件的切换
        },
      selectChange () {
        console.log(this.selectValue)
      },
      // 点击菜单项触发的事件回调 dropdown-item 的指令 command 为定义的 command
      commandClick (command) {
        console.log(command)
        this.commandValue = command
      },
      //  下拉框出现/隐藏时触发 出现则为 true，隐藏则为 false
      visibleChange (status) {
        console.log(status)
        if (status) {
          // ajax
        }
      }
  }
}
</script>
<style rel="stylesheet" lang="scss">
.NavMenuStyle{
    width: 210px;
    height: 100%;
}
.el-tabs__header{
    border: 0;
}
  //   .el-menu-vertical-demo:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;
  // }
</style>