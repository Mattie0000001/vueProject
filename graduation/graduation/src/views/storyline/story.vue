<template>
    <div id='story' @click='jump'>
        <lines v-for='item in lines' :key='item.id' :infor='item'></lines>
        <planet></planet>
    </div>
</template>>

<style>
  html {
    font-size: 27.77vw;
    margin: 0;
    padding: 0;
  }

  /*文字样式*/
  #story {
    font-size: 0.15rem;
    text-align: center;
    position: relative;
    top: 0.6rem;
  }

  /*文字轮播动画*/
  #one {
    transition-delay: 1s;
  }
  #two {
    transition-delay: 2s;
  }
  #three {
    transition-delay: 4s;
  }
  #four {
    transition-delay: 6s;
  }
  #five {
    transition-delay: 8s;
  }
  #six {
    transition-delay: 10s;
    margin-top: 0.4rem;
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
        {
          text: '我曾见过这世界<br>五彩缤纷',
          id: 'one'
        },
        {
          text: '我也曾见过这世界<br>阴沉灰暗',
          id: 'two'
        },
        {
          text: '一场疫情<br>让这个世界失去了原有的色彩',
          id: 'three'
        },
        {
          text: '一张船票 带领梯仔<br>飞向神秘的宇宙<br>穿越无尽的星空',
          id: 'four'
        },
        {
          text: '这一次<br>梯仔能否找回消逝的色彩<br>让这个世界回到最初',
          id: 'five'
        },
        {
          text: '点击继续...',
          id: 'six'
        }
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
