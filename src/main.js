// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css/animate.min.css' 
import './assets/css/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import './assets/js/jquery.js'
Vue.config.productionTip = false

import './assets/vue/globalComponents.js'
// import '@/assets/vue/router.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
