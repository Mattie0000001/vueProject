<template>
    <div class='whole'>
        <!--前情回顾-->
        <story :lines='lines'></story>
        <!--遮罩层-->
        <div class='lightbox' v-if='show' @click='show = false'>
            <div class='tips'>待定</div>
            <div class='tips'>#昵称和星球名可以在你的星球中修改哦~</div>
            <div class='tips'>点击继续...</div>
        </div>

        <div>
            <div class='SunMoon' @click="$router.push({ path: '/sun' })">
                <span class='name'>日月星球</span>
                <img :src='knownUrl'>
            </div>

            <div class='Mirror' @click="$router.push({ path: '/previousMirr' })">
                <span class='name'>魔镜星球</span>
                <img :src='knownUrl'>
            </div>

            <div class='Habitat' @click="$router.push({ path: '/hab' })">
                <span class='name'>{{usrname}}居住星球<br>(居住星球)</span>
                <img :src='knownUrl'>
            </div>

            <div class='UnknownA' @click='toast'>
                <span class='name'>?</span>
                <img :src='unknownUrl'>
            </div>

            <div class='UnknownB' @click='toast'>
                <span class='name'>?</span>
                <img :src='unknownUrl'>
            </div>
        </div>
    </div>
</template>

<script>
import story from '../storyLine/storyline.vue'
export default {
  name: 'mainPage',
  components: { story },
  data () {
    return {
      usrname: '',
      show: true,
      knownUrl: require('../../assets/mainpage/planet2.png'),
      unknownUrl: require('../../assets/mainpage/planet3.png'),
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
  methods: {
    toast: function () {
      //
    }
  }
}
</script>

<style scoped>
  /*总体*/
  .whole {
    position: fixed;
  }
  /*遮罩层*/
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: rgb(231, 230, 230);
    opacity: 0.8;
    text-align: center;
    vertical-align: middle;
  }
  .tips {
    position: relative;
    top: 33vh;
    margin-bottom: 1.11vw;
    font-size: 4.2vw;
  }

  /*各个星球的定位*/
  .name {
    z-index: 1;
    position: relative;
  }

  .SunMoon {
    position: absolute;
    left: 58vw;
    top: 11.4vh;
    animation: revolutionSun 10s linear infinite;
  }
  .SunMoon .name {
    top: 8.7vh;
  }
  #SunMoon img {
    width: 27.8vw;
    height: 27.8vw;
  }

  .Mirror {
    position: absolute;
    left: 14.4vw;
    top: 8.8vh;
    animation: revolutionMirr 10s linear infinite;
  }
  .Mirror .name {
    top: 11.4vh;
  }
  .Mirror img {
    width: 37.8vw;
    height: 37.8vw;
  }

  .Habitat {
    position: absolute;
    left: 15vw;
    top: 36vh;
  }
  .Habitat .name {
    top: 12vh;
  }
  .Habitat img {
    width: 33.3vw;
    height: 33.3vw;
  }

  .UnknownA {
    position: absolute;
    left: 58.6vw;
    top: 47.6vh;
  }
  .UnknownA .name {
    top: 11.3vh;
    font-size: 13.9vw;
    color: rgb(231, 230, 230);
  }
  .unknownA {
    width: 27.8vw;
    height: 27.8vw;
  }

  .UnknownB {
    position: absolute;
    left: 28.9vw;
    top: 64vh;
  }
  .UnknownB .name {
    top: 9.3vh;
    font-size: 11.1vw;
    color: rgb(231, 230, 230);
  }
  .UnknownB img {
    width: 25vw;
    height: 25vw;
  }

  /*星球旋转动画*/
  @keyframes revolutionMirr {
      0% {
        transform-origin: 39.8vw 24vw;
        transform: rotate(0deg)
      }
      25% {
        transform-origin: 39.8vw 24vw;
        transform: rotate(90deg)
      }
      75% {
        transform-origin: 39.8vw 24vw;
        transform: rotate(270deg)
      }
      100% {
        transform-origin: 39.8vw 24vw;
        transform: rotate(360deg)
      }
  }
  @keyframes revolutionSun {
      0% {
        transform-origin: -3.8vw 20vw;
        transform: rotate(0deg)
      }
      25% {
        transform-origin: -3.8vw 20vw;
        transform: rotate(90deg)
      }
      75% {
        transform-origin: -3.8vw 20vw;
        transform: rotate(270deg)
      }
      100% {
        transform-origin: -3.8vw 20vw;
        transform: rotate(360deg)
      }
  }
</style>
