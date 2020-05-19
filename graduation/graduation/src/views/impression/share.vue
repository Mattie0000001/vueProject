<template>
    <div id='sharePage'>
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
import html2canvas from 'html2canvas'
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
      // 二维码
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

      // 把网页转化为图片
      var cntElem = document.querySelector('#sharePage')
      var shareContent = cntElem
      var width = shareContent.offsetWidth
      var height = shareContent.offsetHeight
      var canvas = document.createElement('canvas')
      canvas.width = String(+width)
      canvas.height = String(+height)
      document.body.append(canvas)

      console.log(canvas.width, canvas.height)

      var opts = {
        // logging: true, // 日志开关，便于查看html2canvas的内部执行流程
        scale: 1,
        canvas: canvas,
        width: width,
        height: height,
        dpi: 4,
        useCORS: true
      }
      console.log(opts)

      html2canvas(shareContent, opts).then(function (canvas) {
        var context = canvas.getContext('2d')
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        var imgUrl = canvas.toDataURL('image/jpeg')

        var img = document.createElement('img')
        img.src = imgUrl
        img.style.cssText = `
          width:100vw;
          height:100vh;
          position:absolute;
          top:0;
          left:0;
          z-index:999;
          opacity:0;
          `
        document.body.append(img)
      })
    })
  }
}
</script>

<style scoped>
  #sharePage {
    height: 100vh;
    width: 100vw;
  }
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
