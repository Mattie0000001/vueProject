<template>
    <div>
        <div class='headBar'>
            <img src='../../assets/mirror/backS.png' class='back'
             @click="$router.push({path: '/'})">
            <img src='../../assets/mirror/share.png' class='share'>
        </div>

        <div class='words'>
            <p class='big'>你眼中的TA，是什么样子的呢</p>
            <p class='small'>扫描二维码</p>
            <p class='big'>写下你对 {{usrname}}的专属印象</p>
        </div>

        <img src='../../assets/mirror/person.png' class='person'>

        <div class='qrcodeBox'>
            <p>长按保存图片</p>
            <div class='qrcode'></div>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'share',
  data () {
    return {
      usrname: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      /* eslint-disable no-new */
      new QRCode(document.querySelector('.qrcode'),
        {
          text: window.location.href.split('?')[0].replace('share', 'evaluate'),
          height: 80,
          width: 80,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        })
    })
  }
}
</script>

<style scoped>
  .back {
    position: fixed;
    top: 1vh;
    left: 1vh;
    width: 6.11vw;
    height: 6.11vw;
  }
  .share {
    position: absolute;
    right: 1.56vw;
    top: 1.56vh;
    width: 7.78vw;
    height: 7.78vw;
  }
  .words {
    position: absolute;
    top: 15vh;
    left: 8.05vw;
    width: 73.6vw;
  }
  .big {
    font-size: 5.56vw;
  }
  .small {
    font-size: 3.89vw;
  }
  .person {
    position: absolute;
    left: 48.61vw;
    top: 35vh;
  }
  .qrcodeBox {
    position: absolute;
    left: 52.78vw;
    top: 81.88vh;
    width: 23.61vw;
    height: 2.5vh;
    font-size: 3.89vw;
  }
  .qrcode {
    width: 12.5vh;
    height: 12.5vh;
  }
</style>
