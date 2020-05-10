<template>
    <div id='mainPage'>
        <!--遮罩层-->
        <div id='lightbox'  @click='jump' @touchmove.prevent>
            <div class='tips' id="firstline">待定</div>
            <div class='tips'>#昵称和星球名可以在你的星球中修改哦~</div>
            <div class='tips'>点击继续...</div>
        </div>

        <div>
            <div id='SunMoon' @click='jumpToSun'>
                <span class='name'>日月星球</span>
                <img :src='knownUrl' id='sunMoon'>
            </div>

            <div id='Mirror' @click='jumpToMirr'>
                <span class='name'>魔镜星球</span>
                <img :src='knownUrl' id='mirror'>
            </div>

            <div id='Habitat' @click='jumpToHab'>
                <span class='name'>xxx居住星球<br>(居住星球)</span>
                <img :src='knownUrl' id='habitat'>
            </div>

            <div id='UnknownA' @click='toast'>
                <span class='name'>?</span>
                <img :src='unknownUrl' id='unknownA'>
            </div>

            <div id='UnknownB' @click='toast'>
                <span class='name'>?</span>
                <img :src='unknownUrl' id='unknownB'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {
      knownUrl: require('../../src/assets/mainpage/planet2.png'),
      unknownUrl: require('../../src/assets/mainpage/planet3.png')
    }
  },
  methods: {
    jump: function () {
      document.getElementById('lightbox').style.display = 'none'
    },
    jumpToSun: function () {
      // this.$router.push({ path: '/' })
      console.log('sun')
    },
    jumpToMirr: function () {
      // this.$router.push({ path: '/' })
      console.log('mirr')
    },
    jumpToHab: function () {
      // this.$router.push( { path: '/' })
      console.log('hab')
    },
    toast: function () {
      //
      console.log('unknown')
    }
  }
}
</script>

<style>
  html {
    font-size: 27.77vw;
  }

  /*遮罩层*/
  #lightbox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: rgb(231, 230, 230);
    opacity: 0.8;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }
  .tips {
    position: relative;
    top: 33%;
    margin-bottom: 0.4rem;
    font-size: 0.15rem;
  }

  /*主页面*/
  #mainPage {
    position: absolute;
    font-size: 0.15rem;
  }

  /*各个星球的定位*/
  .name {
    z-index: 1;
    position: relative;
  }

  #SunMoon {
    position: absolute;
    left: 1.93rem;
    top: 0.75rem;
    animation: revolutionSun 5s linear infinite;
  }
  #SunMoon .name {
    top: 0.5rem;
  }
  #sunMoon {
    width: 1rem;
    height: 1rem;
  }

  #Mirror {
    position: absolute;
    left: 0.52rem;
    top: 0.57rem;
    animation: revolutionMirr 5s linear infinite;
  }
  #Mirror .name {
    top: 0.67rem;
  }
  #mirror {
    width: 1.36rem;
    height: 1.36rem;
  }

  #Habitat {
    position: absolute;
    left: 0.58rem;
    top: 2.30rem;
  }
  #Habitat .name {
    top: 0.75rem;
  }
  #habitat {
    width: 1.2rem;
    height: 1.2rem;
  }

  #UnknownA {
    position: absolute;
    left: 2.11rem;
    top: 3.55rem;
  }
  #UnknownA .name {
    top: 0.85rem;
    font-size: 0.5rem;
    color: rgb(231, 230, 230);
  }
  #unknownA {
    width: 1rem;
    height: 1rem;
  }

  #UnknownB {
    position: absolute;
    left: 1.04rem;
    top: 4.78rem;
  }
  #UnknownB .name {
    top: 0.7rem;
    font-size: 0.4rem;
    color: rgb(231, 230, 230);
  }
  #unknownB {
    width: 0.9rem;
    height: 0.9rem;
  }

  /*星球旋转动画*/
  @keyframes revolutionMirr {
      0% {
        transform-origin: 1.38rem 0.89rem;
        transform: rotate(0deg)
      }
      25% {
        transform-origin: 1.38rem 0.89rem;
        transform: rotate(90deg)
      }
      75% {
        transform-origin: 1.38rem 0.89rem;
        transform: rotate(270deg)
      }
      100% {
        transform-origin: 1.38rem 0.89rem;
        transform: rotate(360deg)
      }
  }
  @keyframes revolutionSun {
      0% {
        transform-origin: -0.03rem 0.71rem;
        transform: rotate(0deg)
      }
      25% {
        transform-origin: -0.03rem 0.71rem;
        transform: rotate(90deg)
      }
      75% {
        transform-origin: -0.03rem 0.71rem;
        transform: rotate(270deg)
      }
      100% {
        transform-origin: -0.03rem 0.71rem;
        transform: rotate(360deg)
      }
  }
</style>
