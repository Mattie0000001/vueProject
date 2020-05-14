import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    modalHint: {
      isShow: false,
      text: ''
    }
  },
  mutations: {
    setModalHint (state, modalHint) {
      state.modalHint.text = modalHint.text
      state.modalHint.isShow = true
      setTimeout(() => {
        state.modalHint.isShow = false
      }, 1000)
    }
  }
})

export default store
