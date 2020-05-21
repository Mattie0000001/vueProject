import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://graduation2020.100steps.top/api'
axios.defaults.withCredentials = true

// axios请求拦截器
axios.interceptors.request.use((config)=>{
  this.$store.commit('setModalHint', { text: '获取数据'})
  console.log(config)
})

// axios响应拦截器
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    if (err.response && err.response.status === 401) {
      var thisurl = window.location.href
      if (/\/#\/.*\?/.test(thisurl)) thisurl = thisurl + '&t=' + Math.random()
      else thisurl = thisurl + '?t=' + Math.random()
      // var to = encodeURIComponent(thisurl)
      // 模拟登录
      window.location = `https://graduation2020.100steps.top/auth/fake/1?redirect=${thisurl}`
      // window.location = 'https://graduation2020.100steps.top/auth/fake/1'
    }
    return Promise.reject(err)
  }
)
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
