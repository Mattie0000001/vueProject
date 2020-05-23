<template>
    <div class='whole'>
        <!--前情回顾-->
        <div v-if='isFirst'>
            <story :lines='lines'></story>
        </div>
        <head-title :title='title' :tip='tip'>
            <template v-slot:left>
              <div class="arrow_wrap" @click="$router.push({ path: '/mainPage'})">
                  <img src="../../assets/component/arrow.png" alt="">
              </div>
            </template>
        </head-title>
        <transition name='overturn' mode='out-in'>
            <div v-if='seen' key='front' class='main'>
                <div>
                    <p class='onmirror'>
                        开启属于你的<br>未知旅程</p>
                    <img :src='mirrorF' class='mirror'  @click='gotoAdventure'>
                </div>
                <div @click='seen = !seen'>
                    <p class='onbtn'>转</p>
                    <img :src='btn' class='btn'>
                </div>
            </div>
            <div v-else key='back' class='main'>
                <div class='you'>
                    <div class='titleBack'>朋友眼中的你</div>
                    <div>
                        <img :src='person' @click='changeGender' class='person'>
                    </div>
                    <button class='personBtn' @click="$router.push({ path: '/share'})">
                        点击进入
                    </button>
                </div>
                <div @click='seen = !seen'>
                    <p class='onbtn'>转</p>
                    <img :src='btn' class='btn'>
                </div>
            </div>
        </transition>
        <div class='footer'>
            <color-box></color-box>
        </div>

        <!--性格测评已完成提示-->
        <div v-if='isAgain'>
            <hint-pop @hide='hide'></hint-pop>
        </div>
    </div>
</template>

<script>
import hintPop from './hint.vue'
import headTitle from '../../components/headTitle.vue'
import colorBox from '../../components/colorBox.vue'
import story from '../../components/storyline.vue'
export default {
  name: 'mirror',
  components: {
    headTitle, colorBox, story, hintPop
  },
  data () {
    return {
      isAgain: false,
      isFirst: false,
      seen: true,
      title: '魔镜星球',
      tip: `完成性格测试可获得10色彩值
            \n分享他评二维码，也可获得10色彩值
            \n他人对你的评价可在居住星球的信箱中查看哦`,
      mirrorF: require('../../assets/mirror/mirror.png'),
      btn: require('../../assets/mirror/btn.png'),
      person: require('../../assets/mirror/person.png'),
      lines: [
        '梯仔在这片灰蒙蒙的星球探索时<br>突然眼前出现一道晃眼的白光让梯仔睁不开眼睛',
        '定睛一看<br>原来有一面巨大的镜子<br>伫立在梯仔面前',
        '点击继续...'
      ]
    }
  },
  created: function () {
    if (localStorage.getItem('isFirstMir') === null) {
      this.isFirst = true
      localStorage.setItem('isFirstMir', false)
    }
  },
  methods: {
    gotoAdventure: function () {
      if (localStorage.getItem('personality')) {
        // 已经测过
        this.isAgain = true
      } else {
        this.$router.push({ path: '/adventure' })
      }
    },
    hide: function () {
      this.isAgain = false
    },
    changeGender: function () {
      // 换图片url
    }
  }
}
</script>

<style scoped>
  .whole {
    position: fixed;
    width: 100vw;
    height: 100vh;
    white-space: pre-wrap;
    margin: 0;
    background: rgb(31, 28, 46);
  }
  .main {
    width: 83.33vw;
    height: 80vh;
    font-size: 4.17vw;
    margin: 3vh auto 0;
    perspective: 800px;
    -webkit-perspective: 800px;
    overflow: hidden;
    text-align: center;
  }
  /*正面*/
  .mirror {
    position: relative;
    top: 3vh;
    width: 63.33vw;
    height: 44.67vh;
  }
  .btn {
    position: absolute;
    top: 112vw;
    left: 35vw;
    width: 14.44vw;
    height: 14.44vw;
    z-index: 28
  }
  .onmirror {
    position: relative;
    top: 55vw;
    z-index: 2;
    line-height: 7vw;
    color: rgb(238, 236, 102);
  }
  .onbtn {
    position: absolute;
    top: 117vw;
    left: 40vw;
    z-index: 30;
  }
  .footer {
    z-index: 1;
  }
  /*反面*/
  .you {
    border-radius: 15px;
    width: 76vw;
    height: 105vw;
    margin-left: 5vw;
    background: #763e7e;
  }
  .personBtn {
    width: 25vw;
    height: 4.53vh;
    font-size: 4.2vw;
    border-radius: 5px;
    border: 1px solid rgb(238, 236, 102);
    color: rgb(238, 236, 102);
    outline: none;
    background: none;
  }
  .person {
    position: relative;
    top: 1vh;
  }
  .change {
   position: absolute;
    right: 0vw;
    top: 1vh;
    width: 20vw;
  }
  .titleBack {
    line-height: 15vw;
    font-size: 5vw;
    color: white;
  }

  /*翻转动画*/
  .overturn-enter-active{
    animation: overturnin 1s linear;
  }
  .overturn-leave-active {
    animation: overturn 1s linear;
  }
  .overturn-enter {
    transform: rotate3d(0, 1, 0, -90deg);
  }
  .overturn-enter-to {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  .overturn-leave {
    transform: rotate3d(0, 1, 0, 0deg);
  }
  .overturn-leave-to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  @keyframes overturn {
    0% { transform: rotate3d(0, 1, 0, 0deg) }
    50% { transform: rotate3d(0, 1, 0, 45deg) }
    100% { transform: rotate3d(0, 1, 0, 90deg) }
  }
  @keyframes overturnin {
    0% { transform: rotate3d(0, 1, 0, -90deg) }
    50% { transform: rotate3d(0, 1, 0, -45deg) }
    100% { transform: rotate3d(0, 1, 0, 0deg) }
  }
</style>
