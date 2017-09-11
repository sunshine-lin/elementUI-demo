<template>
	<div id="PaginationComponent">
       <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="ruleForm.pageNumber"
       :page-sizes="[10, 20, 30, 40, 50, 100]"
       :page-size="ruleForm.pageSize"
       layout="total, sizes, prev, pager, next, jumper"
       :total="ruleForm.totalRow">
   </el-pagination>
</div>
</template>
<script type="text/ecmascript-6">
    export default {
    	props: {
            ruleForm: Object,
        },
    	data () {
    		return {
                currentPage4: '',
                emitObj: {...this.ruleForm}
    		}
    	},
    	watch: {
            emitObj: {
                handler (newVal,oldVal) {
                    this.$emit('emitPaginationChange',newVal)
                },
                deep: true
            }
        },
    	created () {},
    	mounted () {},
    	methods: {
           handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.emitObj.pageSize = val
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.emitObj.pageNumber = val
        }
    }
}
</script>

<style rel="stylesheet" lang="scss">

</style>