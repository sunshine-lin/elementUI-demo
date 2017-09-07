<template>
	<div id="Data">
<!-- 表格 -->
    <el-table class="tableStyle"
        :data="tableData"
        stripe
        border
        tooltip-effect="light"
        @row-click="rowClick"> 
      <el-table-column
        label="序号"
        width="100"
        type="index"
          align="center"
          >
        </el-table-column>

        <el-table-column
        type="expnd"
          prop="date"
          label="日期"
          sortable
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          >
        </el-table-column>
        <el-table-column
        show-overflow-tooltip
          prop="address"
          label="地址"
          >
        </el-table-column>
        <el-table-column label="操作">
             <template scope="scope">
               <el-button
                 size="small"
                 @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
               <el-button
                 size="small"
                 type="danger"
                 @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             </template>
           </el-table-column>
      </el-table>
      <!-- 标签  close为点击关闭时触发 -->
      <el-tag>标签一</el-tag>
      <el-tag type="gray" closable color="#f99" hit @close="tagClose">标签二</el-tag>
      <el-tag type="primary">标签三</el-tag>
      <el-tag type="success">标签四</el-tag>
      <el-tag type="warning">标签五</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <!-- ¶ Pagination 分页 -->
      <div class="block">
         <!-- <span class="demonstration">完整功能</span> -->
        <!--  <el-pagination style="float:left"
            :page-size="8"
            :total="100"
            :current-page="curPage"
           layout="jumper,total"
          >
         </el-pagination> -->
         <el-pagination
            :page-size="8"
            :total="100"
            :current-page="curPage"
           @current-change="handleCurrentChange"
           layout="jumper,total,prev, pager, next"
          >
         </el-pagination>
       </div>
       <!-- 徽章 -->
       <el-badge is-dot class="item">数据查询</el-badge>
       <el-badge class="item" :value="4" max="99">数字</el-badge>
       <el-badge class="item" :value="104" :max="99">数字</el-badge>
	</div>
</template>
<script type="text/ecmascript-6">
    export default {
    	porps: {},
    	components: {},
    	data () {
    		return {
          curPage: 1,
          noDataArr: [],
          tableData: [{
                     date: '2016-05-02',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1518 弄普陀区金沙江路 1518 弄普陀区金沙江路 1518 弄普陀区金沙江路 1518 弄普陀区金沙江路 1518 弄普陀区金沙江路 1518 弄'
                   }, {
                     date: '2016-05-04',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1517 弄'
                   }, {
                     date: '2016-05-01',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }, {
                     date: '2016-05-03',
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1516 弄'
                   }]
    		}
    	},
    	computed: {},
    	created () {},
    	mounted () {},
    	methods: {
        rowClick (row, event, column) {
          console.log(' row, event, column',row,column)

        },
        handleEdit (index,row) {
          console.log('scope',index,row)
          this.tableData.splice(index,1)
        },
        tagClose (event) {

        },
        handleCurrentChange (curPage) {
          console.log(curPage)
          this.curPage = curPage
        }
      }
    }
</script>
<style rel="stylesheet" lang="scss">
#Data {
  .el-pagination{
   display: flex;
   justify-content: space-between;

  }
  
   .tableStyle{
    // width: 500px;
   }
}
   
</style>