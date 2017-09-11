<template>
<div>
  <g-searchBox></g-searchBox>
  <g-pagination :ruleForm="ruleForm" @emitPaginationChange="paginationChange"></g-pagination>
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          pageNumber:1,
          totalRow: 100,
          pageSize: 10
        }
       }
    },
    methods: {
      paginationChange (obj) {
        console.log(obj)
      },
      formatter (row, column, cellValue) {
        return  cellValue + '1111'
      }
    }
  }
</script>