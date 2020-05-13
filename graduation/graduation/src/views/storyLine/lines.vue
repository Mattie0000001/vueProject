<template>
    <transition name='fade' :appear=true duration='2s'>
        <div class='sentence' v-html='infor'></div>
    </transition>
</template>

<style scoped>
  .sentence {
    position: relative;
    top: 8vh;
    text-align: center;
    margin-bottom: 1.3vh;
    font-size: 4.2vw;
  }
  .sentence:nth-last-child(1) {
    margin-top: 10vh;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 2s;
  }
  .fade-enter-to {
    opacity: 1;
  }

  /**动画 */
  .sentence:nth-child(1) {
    transition-delay: 1s;
  }
  .sentence:nth-child(2) {
    transition-delay: 2s;
  }
  .sentence:nth-child(3) {
    transition-delay: 4s;
  }
  .sentence:nth-child(4) {
    transition-delay: 6s;
  }
  .sentence:nth-child(5) {
    transition-delay: 8s;
  }
  .sentence:nth-child(6) {
    transition-delay: 10s;
  }
</style>

<script>
export default {
  name: 'lines',
  props: ['infor']
}
</script>
