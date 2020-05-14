import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = ''
Vue.prototype.$axios = axios
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
