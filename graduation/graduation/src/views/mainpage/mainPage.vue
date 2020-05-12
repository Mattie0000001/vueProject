<template>
    <div id='mainPage'>
        <!--遮罩层-->
        <div id='lightbox'  @click='jump'>
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
      knownUrl: require('../../assets/mainpage/planet2.png'),
      unknownUrl: require('../../assets/mainpage/planet3.png')
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

<style scoped>
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
    top: 33vh;
    margin-bottom: 1.11vw;
    font-size: 4.2vw;
  }

  /*主页面*/
  #mainPage {
    position: fixed;
    font-size: 4.2vw;
  }

  /*各个星球的定位*/
  .name {
    z-index: 1;
    position: relative;
  }

  #SunMoon {
    position: absolute;
    left: 58vw;
    top: 11.4vh;
    animation: revolutionSun 10s linear infinite;
  }
  #SunMoon .name {
    top: 8.7vh;
  }
  #sunMoon {
    width: 27.8vw;
    height: 27.8vw;
  }

  #Mirror {
    position: absolute;
    left: 14.4vw;
    top: 8.8vh;
    animation: revolutionMirr 10s linear infinite;
  }
  #Mirror .name {
    top: 11.4vh;
  }
  #mirror {
    width: 37.8vw;
    height: 37.8vw;
  }

  #Habitat {
    position: absolute;
    left: 15vw;
    top: 36vh;
  }
  #Habitat .name {
    top: 12vh;
  }
  #habitat {
    width: 33.3vw;
    height: 33.3vw;
  }

  #UnknownA {
    position: absolute;
    left: 58.6vw;
    top: 47.6vh;
  }
  #UnknownA .name {
    top: 11.3vh;
    font-size: 13.9vw;
    color: rgb(231, 230, 230);
  }
  #unknownA {
    width: 27.8vw;
    height: 27.8vw;
  }

  #UnknownB {
    position: absolute;
    left: 28.9vw;
    top: 64vh;
  }
  #UnknownB .name {
    top: 9.3vh;
    font-size: 11.1vw;
    color: rgb(231, 230, 230);
  }
  #unknownB {
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
