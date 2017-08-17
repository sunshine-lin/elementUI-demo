<template>
   <el-select  v-model="selectValue" 
               :multiple="false"
               size="large"
               clearable
               filterable
               placeholder="请选择"
               :loading="isLoading"
               @visible-change="selcetAjax"
               @change="selectChange"
               >
    <el-option
      v-for="item in selectArr"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        selectArr: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectValue: '',
        isLoading: true
      }
    },
    methods: {
      selcetAjax (status) {
        if (status) {
          if (this.selectArr.length) {
            return
          } else {
            setTimeout(()=>{
                this.selectArr = this.options
                this.isLoading = false
             },1000)
          }
        }
      },
      selectChange () {
        console.log(this.selectValue)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
