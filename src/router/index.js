import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pointmanage/home',
      component: () => import ('../components/pointmanage/Home.vue')
    }
  ],
  mode:'history'
})
