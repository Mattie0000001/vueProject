<template>
    <div id='planet'>
        <img :src='imgUrl'>
    </div>
</template>

<style>
  #planet {
    position: fixed;
    bottom: -0.4rem;
    right: 0;
  }
  #planet img {
    width: 3.6rem;
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
