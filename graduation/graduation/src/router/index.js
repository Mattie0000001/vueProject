import Vue from 'vue'
import VueRouter from 'vue-router'

const liveStar = () => import(/* webpackChunkName: "liveStar" */ '@/views/liveStar/liveStar.vue')
const mirror = () => import(/* webpackChunkName: "mirror" */ '@/views/mirror/mirror.vue')
const getEvaluate = () => import(/* webpackChunkName: "getEvaluate" */ '@/views/getEvaluate/getEvaluate.vue')
const getMemoirs = () => import(/* webpackChunkName: "getMemoirs" */ '@/views/getMemoirs/getMemoirs.vue')
const mainpage = () => import(/* webpackChunkName: "mainpage" */ '@/views/mainpage/mainPage.vue')
const adventure = () => import(/* webpackChunkName: "adventure" */ '@/views/adventure/adventure.vue')
const lineA = () => import(/* webpackChunkName: "lineA" */ '@/views/adventure/lineA.vue')
const lineB = () => import(/* webpackChunkName: "lineB" */ '@/views/adventure/lineB.vue')
const result = () => import(/* webpackChunkName: "result" */ '@/views/adventure/result.vue')
const share = () => import(/* webpackChunkName: "share" */ '@/views/impression/share.vue')
const evaluate = () => import(/* webpackChunkName: "evaluate" */ '@/views/impression/evaluate.vue')
const lead = () => import(/* webpackChunkName: "lead" */ '@/views/impression/lead.vue')

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
  },
  {
    path: '/lineA',
    component: lineA
  },
  {
    path: '/lineB',
    component: lineB
  },
  {
    path: '/result',
    component: result
  },
  {
    path: '/share',
    component: share
  },
  {
    path: '/evaluate',
    component: evaluate
  },
  {
    path: '/lead',
    component: lead
  }
]

const router = new VueRouter({
  routes
})

export default router
