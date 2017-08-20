// import Vue from 'vue'
import VueRouter from 'vue-router'
const router = new VueRouter()
// Vue.use(VueRouter)
// const router = new VueRouter()
router.beforeEach((to, from, next) => {
  console.log("router",to)
})

