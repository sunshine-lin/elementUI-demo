/**
 * vue公共组件js
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 11:03:08
 * @version $Id$
 */
import Vue from 'vue'
// import BackBottomBtn from '@/components/common/BackBottomBtn.vue'
import Pagination from '@/components/common/Pagination.vue'
import SearchBox from '@/components/common/SearchBox.vue'
// Vue.component('g-backBottomBtn', BackBottomBtn)
Vue.component('g-pagination', Pagination)
Vue.component('g-searchBox', SearchBox)