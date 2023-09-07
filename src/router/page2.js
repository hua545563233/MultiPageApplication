/**
 * @desc 路由配置信息
 */
import Vue from 'vue'
import Router from 'vue-router'

const Page2 = () => import('../app/app2/App.vue')

Vue.use(Router)

// 路由配置信息

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'page2',
      component: Page2
    }
  ]
})

export default router
