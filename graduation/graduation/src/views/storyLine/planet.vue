<template>
    <div id='planet'>
        <img :src='imgUrl'>
    </div>
</template>

<style scoped>
  #planet {
    position: fixed;
    bottom: -5.3vh;
    right: 0;
  }
  #planet img {
    width: 100vw;
  }
</style>

<script>
export default {
  name: 'planet',
  data () {
    return {
      imgUrl: require('../../assets/storyline/planet.png')
    }
  }
}
</script>
