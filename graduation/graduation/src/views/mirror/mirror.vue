<template>
    <div class='whole'>
        <!--前情回顾-->
        <story :lines='lines'></story>
        <head-title :title='title' :tip='tip'></head-title>
        <transition name='overturn' mode='out-in'>
            <div v-if='seen' key='front' class='main'>
                <div>
                    <p class='onmirror'>开启属于你的未知旅程...</p>
                    <img :src='mirrorF' class='mirror'>
                </div>
                <div @click='seen = !seen'>
                    <p class='onbtn'>转</p>
                    <img :src='btn' class='btn'>
                </div>
            </div>
            <div v-else key='back' class='main'>
                <div>
                    <span class='titleBack'>朋友眼中的你</span>
                    <span class='change'>换一个</span>
                </div>
                <img :src='person'>
                <p class='onperson'>点击进入</p>
                <div @click='seen = !seen'>
                    <p class='onbtn'>转</p>
                    <img :src='btn' class='btn'>
                </div>
            </div>
        </transition>
        <color-box></color-box>
    </div>
</template>

<style scoped>
  .whole {
    position: fixed;
    width: 100vw;
    height: 100vh;
    white-space: pre-wrap;
    margin: 0;
  }
  .main {
    width: 83.33vw;
    height: 70vh;
    font-size: 4.17vw;
    border: 1px solid black;
    margin: 3vh auto;
    perspective: 800px;
    -webkit-perspective: 800px;
    overflow: hidden;
  }
  /*正面*/
  .mirror {
    position: relative;
    top: -3vh;
    width: 63.33vw;
    height: 44.67vh;
  }
  .btn {
    position: relative;
    top: -4vh;
    width: 14.44vw;
    height: 14.44vw;
  }
  .onmirror {
    position: relative;
    top: 35vh;
    z-index: 2;
  }
  .onbtn {
    position: relative;
    top: 4vh;
    z-index: 2;
  }
  /*反面*/
  .onperson {
    position: relative;
    top: -5vh;
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

<script>
import headTitle from '../../components/headTitle.vue'
import colorBox from '../../components/colorBox.vue'
import story from '../storyLine/storyline.vue'
export default {
  name: 'mirror',
  components: {
    headTitle, colorBox, story
  },
  data () {
    return {
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
  }
}
</script>
