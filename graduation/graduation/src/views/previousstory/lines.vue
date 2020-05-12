<template>
    <transition name='fade' :appear=true duration='2s'>
        <div class='sentence' :id='infor.id' v-html='infor.text'></div>
    </transition>
</template>

<style scoped>
  .sentence {
    margin-bottom: 1.3vh;
    font-size: 4.2vw;
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
</style>

<script>
export default {
  name: 'lines',
  props: ['infor']
}
</script>
