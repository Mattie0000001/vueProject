<template>
    <div class='story' v-if='seen' @click='jump'>
        <div class='movePart'>
            <div class='linesBox'>
                <lines v-for='item in lines' :key='item.id' :infor='item'></lines>
            </div>
            <button class='btn'>点击继续</button>
        </div>

        <div class='planet'>
            <img :src='planet'>
        </div>
    </div>
</template>

<script>
import lines from './lines.vue'
export default {
  name: 'story',
  data () {
    return {
      isJump: false,
      seen: true
    }
  },
  components: {
    lines
  },
  props: {
    lines: Array,
    planet: String
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

<style scoped>
  /*文字样式*/
  .story {
    position: fixed;
    top: -1vh;
    z-index: 111;
    background: rgb(219, 216, 216);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
  .movePart {
    position: fixed;
    height: 140vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .linesBox {
    /* position: absolute;
    bottom: 60vw;
    left: 10vw; */
    padding: 5vw;
    margin: auto;
    background: rgb(134, 131, 131);
    color: #ffffff;
    opacity: 0.5;
    width: 80vw;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    position: relative;
    /* top: 130vw; */
    left: 35vw;
    width: 30vw;
    height: 10vw;
    font-size: 4.2vw;
    border-radius: 5px;
    outline: none;
    background: white;
    border: 1px solid rgb(121, 121, 121);
  }

  /**星球 */
  .planet {
    position: fixed;
    bottom: -5.3vh;
    right: 0;
    width: 100vw;
  }
</style>
