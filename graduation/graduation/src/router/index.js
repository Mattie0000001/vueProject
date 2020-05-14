import Vue from 'vue'
import VueRouter from 'vue-router'

const liveStar = () => import(/* webpackChunkName: "liveStar" */ '@/views/liveStar/liveStar.vue')
const mirror = () => import(/* webpackChunkName: "mirror" */ '@/views/mirror/mirror.vue')
const getEvaluate = () => import(/* webpackChunkName: "getEvaluate" */ '@/views/getEvaluate/getEvaluate.vue')
const getMemoirs = () => import(/* webpackChunkName: "getMemoirs" */ '@/views/getMemoirs/getMemoirs.vue')
const mainpage = () => import(/* webpackChunkName: "mainpage" */ '@/views/mainpage/mainPage.vue')
const adventure = () => import(/* webpackChunkName: "adventure" */ '@/views/adventure/adventure.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainPage'
  },
  {
    path: '/liveStar',
    component: liveStar
  },
  {
    path: '/mirror',
    component: mirror
  },
  {
    path: '/getEvaluate',
    component: getEvaluate
  },
  {
    path: '/getMemoirs',
    component: getMemoirs
  },
  {
    path: '/mainPage',
    component: mainpage
  },
  {
    path: '/adventure',
    component: adventure
  }
]

const router = new VueRouter({
  routes
})

export default router
