<template>
  <div id="app">
    <router-view></router-view>
    <modal-hint :isShowModalHint="$store.state.modalHint.isShow"
    :text="$store.state.modalHint.text"></modal-hint>
  </div>
</template>
<script>
import modalHint from './components/modalHint.vue'
export default {
  components: {
    modalHint
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
