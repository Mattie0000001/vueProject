<template>
    <div class='story' v-if='seen' @click='jump'>
        <div>
            <lines v-for='item in lines' :key='item.id' :infor='item'></lines>
        </div>
        <div class='planet'>
            <img :src='planet'>
        </div>
    </div>
</template>

<style scoped>
  /*文字样式*/
  .story {
    position: fixed;
    top: -1vh;
    left: -1vw;
    z-index: 111;
    background: rgb(255, 255, 255);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  /**星球 */
  .planet {
    position: fixed;
    bottom: -5.3vh;
    right: 0;
  }
  .planet img {
    width: 100vw;
  }
</style>

<script>
import lines from './lines.vue'
export default {
  name: 'story',
  data () {
    return {
      isJump: false,
      seen: true,
      planet: require('../assets/storyline/planet.png')
    }
  },
  components: {
    lines
  },
  props: {
    lines: Array
  },
  methods: {
    change: function () {
      this.isJump = true
      clearTimeout(this.t)
    },
    jump: function () {
      if (this.isJump) {
        this.seen = false
      }
    }
  },
  mounted: function () {
    var time = Number(this.lines.length) * 2000
    var t = setTimeout(this.change(), time)
    console.log(t)
  }
}
</script>
