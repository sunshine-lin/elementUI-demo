<template>
<!-- 弹出框 -->
	<div id="Dialog">
   <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

   <el-dialog
     :visible.sync="dialogVisible"
      title="提示"
     size="large"
     @open="dialogOpen"
     >
     <v-table ></v-table>
     <span slot="footer" class="dialog-footer">
       <el-button @click="dialogVisible = false">取 消</el-button>
       <el-button type="primary" @click.native="enterClick">确 定</el-button>
     </span>
   </el-dialog>
	</div>
</template>
<script type="text/ecmascript-6">
import VTable from './Data.vue'
    export default {
    	porps: {},
    	components: {
        VTable
      },
    	data () {
    		return {
          dialogVisible: false
    		}
    	},
    	computed: {},
    	created () {},
    	mounted () {},
    	methods: {
        handleClose(done) {
               this.$confirm('确认关闭？')
                 .then(_ => {
                   done();
                 })
                 .catch(_ => {});
             },
      enterClick () {
        alert('enterClick')
      },
      dialogOpen () {
        // 弹框打开时 可以发送ajax
      }
    }
  }
</script>
<style rel="stylesheet" lang="scss">
#Dialog {

}
   
</style>