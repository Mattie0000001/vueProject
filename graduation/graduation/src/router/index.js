import Vue from 'vue'
import VueRouter from 'vue-router'
// import previousStory from '../views/previousstory/previousstory.vue'
// import mainpage from '../views/mainpage/mainpage.vue'

// const liveStar = () => import(/* webpackChunkName: "liveStar" */ '@/views/liveStar/liveStar.vue')
const previousStory = () => import(/* webpackChunkName: "previousStory" */ '@/views/previousstory/previousstory.vue')
const mainpage = () => import(/* webpackChunkName: "mainpage" */ '@/views/mainpage/mainPage.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/previousStory'
  },
  // {
  //   path: '/liveStar',
  //   component: liveStar
  // },
  {
    path: '/previousStory',
    name: 'previousStory',
    component: previousStory
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: mainpage
  }
]

const router = new VueRouter({
  routes
})

export default router
