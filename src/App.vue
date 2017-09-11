<template>
  <div id="app">
  <transition enter-active-class="animated fadeIn">
  <!-- <transition enter-active-class="animated bounceIn"> -->
  	<keep-alive> <router-view></router-view></keep-alive>
   
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
}
</style>
