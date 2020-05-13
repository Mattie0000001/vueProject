<template>
    <div id='story' @click='jump'>
        <lines v-for='item in lines' :key='item.id' :infor='item'></lines>
        <planet></planet>
    </div>
</template>

<style scoped>
  /*文字样式*/
  #story {
    position: relative;
    top: 8vh;
  }
</style>

<script>
import lines from './lines.vue'
import planet from './planet.vue'
export default {
  name: 'story',
  data () {
    return {
      jsJump: false,
      lines: [
        '我曾见过这世界<br>五彩缤纷',
        '我也曾见过这世界<br>阴沉灰暗',
        '一场疫情<br>让这个世界失去了原有的色彩',
        '一张船票 带领梯仔<br>飞向神秘的宇宙<br>穿越无尽的星空',
        '这一次<br>梯仔能否找回消逝的色彩<br>让这个世界回到最初',
        '点击继续...'
      ]
    }
  },
  components: {
    planet, lines
  },
  methods: {
    jump: function () {
      if (this.isJump) {
        clearInterval(this.t)
        this.$router.push({ path: './mainPage' })
      }
    },
    change: function () {
      this.isJump = true
    }
  },
  mounted: function () {
    var t = setInterval(this.change, 12000)
    console.log(t)
  }
}
</script>
