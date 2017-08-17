<template>
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
</template>
<script>
  export default {
    data() {
      return {
        defaultIndex: '1-1'
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
        }
  }
}
</script>
<style rel="stylesheet" lang="scss">
.NavMenuStyle{
    width: 210px;
    height: 100%;
}
  //   .el-menu-vertical-demo:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;
  // }
</style>