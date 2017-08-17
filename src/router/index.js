import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Select from '@/components/Select'
import NavMenu from '@/components/NavMenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/Select',
      name: 'Select',
      component: Select
    },
    {
      path: '/NavMenu',
      name: 'NavMenu',
      component: NavMenu
    }
  ]
})
