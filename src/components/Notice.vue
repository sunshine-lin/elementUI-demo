<template>
	<div id="Notice">

        <el-button @click.native="elLoading">loading</el-button>
        <el-button @click.native="elConfirm">confirm</el-button>
        <el-button @click.native="elAlert">alert</el-button>
        <el-button @click.native="elNotification">Notification</el-button>
         
	</div>
</template>
<script type="text/ecmascript-6">
    export default {
    	porps: {},
    	components: {},
    	data () {
    		return {

    		}
    	},
    	computed: {},
    	created () {},
    	mounted () {},
    	methods: {
        // $loading
         elLoading () {
          let loading = this.$loading({
            text: '加载中'
          })
          setTimeout(()=>{
           // 关闭方法  
            loading.close()
          },2000)
          console.log(loading)
         },
        // $confirm
        elConfirm () {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示').then(() => {
            // toast
          this.$message({
            type: 'success',
            message: '删除成功!',
            duration: 2000
          })
        })
      },
      // $alert
      elAlert () {
        this.$alert('alert内容','alert标题')
      },
      // $notify 右侧系统提示弹框
      elNotification () {
        this.$notify({
            title: '提示',
            message: '这是一条不会自动关闭的消息',
            duration: 2000,
            type: 'success'
        })
      }
    }
  }
</script>
<style rel="stylesheet" lang="scss">
#Notice {
 
}
   
</style>