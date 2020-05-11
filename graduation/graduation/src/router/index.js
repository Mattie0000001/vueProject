import Vue from 'vue'
import VueRouter from 'vue-router'
import story from '../views/storyline/story.vue'
import mainPage from '../views/mainPage.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'story',
    component: story
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: mainPage
  }
]

const router = new VueRouter({
  routes
})

export default router