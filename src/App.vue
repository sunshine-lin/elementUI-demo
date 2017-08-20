<template>
  <div id="app">
  <transition enter-active-class="animated fadeIn">
  <!-- <transition enter-active-class="animated bounceIn"> -->
    <router-view></router-view>
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
