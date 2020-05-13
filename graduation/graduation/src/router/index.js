import Vue from 'vue'
import VueRouter from 'vue-router'
// import previousStory from '../views/previousstory/previousstory.vue'
// import mainpage from '../views/mainpage/mainpage.vue'

// const liveStar = () => import(/* webpackChunkName: "liveStar" */ '@/views/liveStar/liveStar.vue')
// const previous = () => import(/* webpackChunkName: "previous" */ '@/views/storyLine/previous.vue')
const mainpage = () => import(/* webpackChunkName: "mainpage" */ '@/views/mainpage/mainPage.vue')
// const previousMirr = () => import(/* webpackChunkName: "previousMirr" */ '@/views/storyLine/previousMirr.vue')
const mirror = () => import(/* webpackChunkName: "mirror" */ '@/views/mirror/mirror.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainPage'
  },
  // {
  //   path: '/liveStar',
  //   component: liveStar
  // },
  // {
  //   path: '/previous',
  //   name: 'previous',
  //   component: previous
  // },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: mainpage
  },
  // {
  //   path: '/previousMirr',
  //   name: 'previousMirr',
  //   component: previousMirr
  // },
  {
    path: '/mirror',
    name: 'mirror',
    component: mirror
  }
]

const router = new VueRouter({
  routes
})

export default router
