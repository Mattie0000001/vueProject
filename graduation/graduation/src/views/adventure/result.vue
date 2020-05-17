<template>
    <div>
        <img src='../../assets/mirror/share.png' class='share'
         @click="$router.push({path:'/share'})">

        <div class='firstPart'>
            <img src='../../assets/mirror/planet.png' class='planet'>
            <p class='title'>{{title}}</p>
            <p class='first'>{{first}}</p>
        </div>

        <div class='secondPart'>
            <p class='words'>{{second}}</p>
            <p class='words'>{{third}}</p>
            <p class='words'>{{fourth}}</p>
            <p class='words'>{{fifth}}</p>
        </div>

        <div class='back' @click="$router.push({ path: '/mirror' })">返回星球</div>
    </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      title: '睡柱我妻善逸',
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: ''
    }
  },
  mounted: function () {
    // 第一个性格结果
    var firstItem = (this.$route.query.line === 'A') ? sessionStorage.getItem('seven')
      : sessionStorage.getItem('nine')
    if (firstItem === 'forest') {
      this.first = '你的性格较为安静沉稳从，热爱大自然。你喜欢独处，享受属于自己的空间'
    } else if (firstItem === 'sweet') {
      this.first = '你还是个不折不扣的小吃货'
    } else if (firstItem === 'book') {
      this.first = '你热爱学习，具有科研精神，心思细腻'
    }
    // 第二个性格结果
    var secondItem = sessionStorage.getItem('one')
    if (secondItem === 'camera') {
      this.second = '你平时喜欢记录生活，细心观察'
    } else if (secondItem === 'MP3') {
      this.second = '你享受音乐为你带来的快乐，懂得如何调节自己的情绪'
    } else if (secondItem === 'diary') {
      this.second = '你平时喜欢记录生活，对生活充满热爱，同时也有一点小敏感'
    }
    // 第三个
    var thirdItem = sessionStorage.getItem('two')
    if (thirdItem === 'rich') {
      this.third = '你为人较为理性，可以现实地对待很多事物'
    } else if (thirdItem === 'love') {
      this.third = '你心性浪漫，总是希望能得到他人的关注'
    } else if (thirdItem === 'study') {
      this.third = '你热爱学习，脚踏实地，注重结果'
    }
    // 第四个
    var fourthItem = sessionStorage.getItem('three')
    if (fourthItem === 'hello') {
      this.fourth = '你活泼开朗，不惧怕与他人交流，是名副其实的“乐天派”'
    } else if (fourthItem === 'go') {
      this.fourth = '你为人较为谨慎，可能会有点小内向，略为抗拒尝试新事物'
    }
  }
}
</script>

<style scoped>
  .share {
    position: absolute;
    right: 1.56vw;
    top: 1.56vh;
    width: 7.78vw;
    height: 7.78vw;
  }

  /**第一部分 */
  .planet {
    position: absolute;
    left: 9.17vw;
    top: 11.09vh;
    width: 33.33vw;
    height: 33.33vw;
  }
  .title {
    position: absolute;
    left: 45.28vw;
    top: 12.5vh;
    width: 35.56vw;
    height: 5.31vh;
    border: 1px solid rgb(121, 121, 121);
    border-radius: 10px;
    text-align: center;
    line-height: 5.31vh;
  }
  .first {
    position: absolute;
    left: 46.28vw;
    top: 22.5vh;
    height: 7.5vh;
  }

  /**第二部分 */
  .secondPart {
    position: absolute;
    top: 33vh;
    left: 12.2vw;
    width: 81.8vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  /* .words {
    margin-top: 2vh;
  } */

  .back {
    position: absolute;
    left: 28.89vw;
    top: 79.38vh;
    width: 42.22vw;
    height: 7.34vh;
    border: 1px solid rgb(121, 121, 121);
    border-radius: 20px;
    text-align: center;
    line-height: 7.34vh;
  }
</style>
