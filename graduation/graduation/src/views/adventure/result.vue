<template>
    <div class='whole'>
        <img src='../../assets/mirror/share.png' class='share'
         @click="$router.push({path:'/share'})">
        <div class='main'>
            <div>
                <img src='../../assets/mirror/planet.png' class='planet'>
            </div>

            <div class='title'>{{title}}</div>

            <p class='words' v-html='first'></p>
            <p class='words' v-html='second'></p>
            <p class='words' v-html='third'></p>
            <p class='words' v-html='fourth'></p>
        </div>
        <div class='back' @click='back'>返回星球</div>
    </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      titleOne: ['林深故人', '浮生居士', '青袍道长', '蓬莱仙使'],
      titleTwo: ['老佛爷宝藏茶', '芝芝桃桃', '抹茶可可星冰乐', '大红袍寒冰牛乳茶'],
      titleThree: ['疯狂科学家', '秃头程序员', '时间管理大师', '霍格沃茨学士'],
      title: '',
      first: '',
      second: '',
      third: '',
      fourth: '',
      personality: 0
    }
  },
  methods: {
    back: function () {
      var this_ = this
      if (!localStorage.getItem('personality')) {
        this_.$axios
          .put('/user/per_add', { // 上传性格
            personality: this_.personality
          })
          .then(function () {
            this_.$axios // 上传增加色彩值
              .put('/color/incr', {
                amount: 10
              }) // 上传增加色彩值
            localStorage.setItem('personality', true)
          })
          .then(function () {
            this_.$store.commit('setModalHint', { text: '探险完成，色彩值+10' })
            this_.$router.push({ path: '/mirror' })
          })
          .catch(function (err) {
            console.log(err)
            this_.$store.commit('setModalHint', { text: '出错啦！' })
            this_.$router.push({ path: '/mirror' })
          })
      } else {
        this_.$router.push({ path: '/mirror' })
      }
    },
    setPersonality: function () {
      // 头衔+第一个性格结果
      var random = Math.floor(Math.random() * 4)
      this.personality += random * 10000 // 万位是personality，想不到吧
      var firstItem =
        (this.$route.query.line === 'A') ? sessionStorage.getItem('seven')
          : sessionStorage.getItem('nine')
      if (firstItem === 'forest') {
        this.title = this.titleOne[random]
        this.first = '你的性格较为安静沉稳从，热爱大自然<br>你喜欢独处，享受属于自己的空间'
        this.personality += 1 // personality个位为1
      } else if (firstItem === 'sweet') {
        this.title = this.titleTwo[random]
        this.first = '你还是个不折不扣的小吃货'
        this.personality += 2 // personality个位为2
      } else if (firstItem === 'book') {
        this.title = this.titleThree[random]
        this.first = '你热爱学习，具有科研精神，心思细腻'
        this.personality += 3 // personality个位为3
      }
      // 第二个性格结果
      var secondItem = sessionStorage.getItem('one')
      if (secondItem === 'camera') {
        this.second = '你平时喜欢记录生活，细心观察'
        this.personality += 10 // personality十位为1
      } else if (secondItem === 'MP3') {
        this.second = '你享受音乐为你带来的快乐,<br>懂得如何调节自己的情绪'
        this.personality += 20 // personality十位为2
      } else if (secondItem === 'diary') {
        this.second = '你平时喜欢记录生活，对生活充满热爱，<br>同时也有一点小敏感'
        this.personality += 30 // personality十位为3
      }
      // 第三个
      var thirdItem = sessionStorage.getItem('two')
      if (thirdItem === 'rich') {
        this.third = '你为人较为理性，可以现实地对待很多事物'
        this.personality += 100 // personality百位为1
      } else if (thirdItem === 'love') {
        this.third = '你心性浪漫，总是希望能得到他人的关注'
        this.personality += 200 // personality百位为2
      } else if (thirdItem === 'study') {
        this.third = '你热爱学习，脚踏实地，注重结果'
        this.personality += 300 // personality百位为3
      }
      // 第四个
      var fourthItem = sessionStorage.getItem('three')
      if (fourthItem === 'hello') {
        this.fourth = '你活泼开朗，不惧怕与他人交流，<br>是名副其实的“乐天派”'
        this.personality += 1000 // personality千位为1
      } else if (fourthItem === 'go') {
        this.fourth = '你为人较为谨慎，可能会有点小内向，<br>略为抗拒尝试新事物'
        this.personality += 2000 // personality千位为2
      }
    },
    getPersonality: function (num) { // 根据数字确定测试结果
      var a = num % 10 // 个位
      var b = Math.floor((num / 10) % 10) // 十位
      var c = Math.floor((num / 100) % 10) // 百位
      var d = Math.floor((num / 1000) % 10) // 千位
      var e = Math.floor(num / 10000)

      switch (a) {
        case 1 :
          this.first = '你的性格较为安静沉稳从，热爱大自然，<br>喜欢独处，享受属于自己的空间'
          this.title = this.titleOne[e]
          break
        case 2 :
          this.first = '你还是个不折不扣的小吃货'
          this.title = this.titleTwo[e]
          break
        case 3 :
          this.first = '你热爱学习，具有科研精神，心思细腻'
          this.title = this.titleThree[e]
          break
      }

      switch (b) {
        case 1 :
          this.second = '你平时喜欢记录生活，细心观察'
          break
        case 2 :
          this.second = '你享受音乐为你带来的快乐，<br>懂得如何调节自己的情绪'
          break
        case 3 :
          this.second = '你平时喜欢记录生活，对生活充满热爱，同时也有一点小敏感'
          break
      }

      switch (c) {
        case 1 :
          this.third = '你为人较为理性，可以现实地对待很多事物'
          break
        case 2 :
          this.third = '你心性浪漫，总是希望能得到他人的关注'
          break
        case 3 :
          this.third = '你热爱学习，脚踏实地，注重结果'
          break
      }

      this.fourth = (d === 1) ? '你活泼开朗，不惧怕与他人交流，<br>是名副其实的“乐天派”'
        : '你为人较为谨慎，可能会有点小内向，<br>略为抗拒尝试新事物'
    }
  },
  mounted: function () {
    var this_ = this
    if (localStorage.getItem('personality')) {
      // 已经测试过，请求获得性格
      this.$axios
        .get('/user/per_get')
        .then(
          (data) => this_.getPersonality(data.data.personality)
        )
        .catch((err) => {
          console.log(err)
          this_.$store.commit('setModalHint',
            { text: '出错啦！' })
        })
    } else { // 未测试过，根据session获得性格
      this_.setPersonality()
    }
  }
}
</script>

<style scoped>
  .whole {
    background: rgb(31, 28, 46);
    height: 100vh;
    width: 100vw;
  }
  .main {
    position: relative;
    top: 15vw;
    margin-left: 5vw;
    height: 140vw;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(202, 199, 199, 0.5);
    color: aliceblue;
    border-radius: 15px;
    font-size: 4vw;
  }

  .share {
    position: absolute;
    right: 1.56vw;
    top: 1.56vh;
    width: 7.78vw;
    height: 7.78vw;
  }

  .planet {
    position: relative;
    top: 3vw;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }

  .title {
    width: 45vw;
    height: 5.31vh;
    border: 1px solid rgb(121, 121, 121);
    border-radius: 10px;
    text-align: center;
    line-height: 5.31vh;
    font-size: 5
  }

  .back {
    position: absolute;
    left: 28.89vw;
    top: 160vw;
    width: 35vw;
    height: 10vw;
    border: 1px solid rgb(248, 246, 106);
    color: rgb(233, 230, 82);
    background: none;
    border-radius: 5px;
    text-align: center;
    line-height: 10vw;
  }
</style>
