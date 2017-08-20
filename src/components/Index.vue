<template>
  <div class="hello">
   <el-button type="primary" @click="$router.push('/Basic')">Basic</el-button>
    <el-button type="primary" @click="$router.push('/Form')">Form</el-button>
    <el-button type="primary" @click="$router.push('/Data')">Data</el-button>
    <el-button type="primary" @click="$router.push('/Notice')">Notice</el-button>
   <el-button type="primary" @click="$router.push('/Navigation')">Navigation</el-button>
   <el-button type="primary" @click="$router.push('/Others')">Others</el-button>
<!--    <div id="indexBox">
      
   </div> -->
    
<!--  <router-view class="view two" name="a"></router-view>
       <router-view class="view three" name="b"></router-view>
   <router-view class="view one"></router-view> -->
<!-- 1212121212123123123123 -->
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#indexBox{
  width: 200px;
  height: 400px;
  background: #f99;
  /*display: flex;*/
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
