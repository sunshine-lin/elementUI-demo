import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import NotFound from '@/components/NotFound'
import Basic from '@/components/Basic'
import Form from '@/components/Form'
import Data from '@/components/Data'
import Notice from '@/components/Notice'
import Navigation from '@/components/Navigation'
import Others from '@/components/Others'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: {name: 'Index'},
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
      // components: {
      //   a: Form,
      //   b: Data,
      //    default: Basic
      // }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
     {
      path: '/Basic',
      name: 'Basic',
      component: Basic,
      meta: {
        title: '表单组件'
      }
    },
     {
      path: '/Form',
      name: 'Form',
      component: Form,
      meta: {
        title: '表单组件'
      }
    },
     {
      path: '/Data',
      name: 'Data',
      component: Data,
      meta: {
        title: '表单组件'
      }
    },
     {
      path: '/Notice',
      name: 'Notice',
      component: Notice,
      meta: {
        title: '表单组件'
      }
    },
     {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation,
      meta: {
        title: '表单组件'
      }
    },

    {
      path: '/Others',
      name: 'Others',
      component: Others,
      meta: {
        title: '导航组件'
      }
    }
  ]
})
