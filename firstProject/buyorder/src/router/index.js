import Vue from 'vue'
import VueRouter from 'vue-router'

// 页面
import buy from '../views/buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/buy',
    name: 'buy',
    component: buy
  }
]

const router = new VueRouter({
  routes
})

export default router
