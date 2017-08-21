<template>
<div>
    <!-- 单选框 -->
    <div>
      <el-radio-group v-model="radioValue" @change="radioChange">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
<!-- 多选框 -->
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
 <!-- input输入框 -->
 <div>
   <el-input placeholder="请输入内容" v-model="usename">
     <template slot="prepend">账号</template>
   </el-input>
 </div>
<div>
   <el-input placeholder="请输入内容" type="password" v-model="password" style="margin-top: 20px;">
    <template slot="prepend">密码</template>
  </el-input>
</div>
<div>
  <el-checkbox v-model="checked">记住密码</el-checkbox>
</div>
<div>
  <el-button type="primary" size="large">登录</el-button>
</div>
  <!-- 时间选择器 -->
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="dateValue"
      type="date"
      clearable
      :default-value="curDate"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </div>
  <el-transfer v-model="transferValue" :data="transferData"></el-transfer>
  
  <!-- form -->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
  </el-form>
  </div>
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
        isLoading: true,
        radioValue: '北京',
        usename: ``,
        password: ``,
        dateValue: ``,
        curDate: new Date(),
        transferData: [
            {key: '1', label: 'zhangsan',disabled: false},
            {key: '2', label: 'lisi',disabled: false}
        ],
        transferValue: '',
         rules: {
           name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        },
        ruleForm: ``
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
      // 单选框回调函数
      radioChange (value) {
        console.log(value)  
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
