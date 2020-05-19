<template>
    <div>
        <p class='title'>选择最适合TA的形容词</p>

        <!--选词的框-->
        <div v-for='(item,index) in words' :key='item.class'
         :class='item.class' class='word' :id='item.class'
         @click='choose'
        >
            {{adj[index]}}
        </div>

        <!--牵引线-->
        <img v-for='item in img' :key='item.class' :class='item.class'
         class='line' src='../../assets/mirror/line.png'>

        <!--未来放小人图片的地方-->
        <!-- TODO:点击切换性别 -->
        <div class='img'></div>

        <!--填名字-->
        <div class='nameBox'>
            <label for='name'>你的名字</label>
            <input type='text' maxlength=12 class='name' v-model='name'>
        </div>

        <button class='submit' @click='submit'>确认</button>
        <p class='tip' v-if='isComplete'>您未填写完整信息哦~</p>

        <div v-if='show'>
            <tag @send='getEvaluate' @unshow='unshow'>
            </tag>
        </div>
    </div>
</template>

<script>
import tag from './tag.vue'
export default {
  name: 'evaluate',
  components: {
    tag
  },
  data () {
    return {
      show: false,
      isComplete: false,
      name: '',
      adj: [],
      number: 1, // 第几个评价
      img: [
        { class: 'one' },
        { class: 'two' },
        { class: 'three' },
        { class: 'four' },
        { class: 'five' }
      ],
      words: [
        { class: 'a' },
        { class: 'b' },
        { class: 'c' },
        { class: 'd' },
        { class: 'e' }
      ]
    }
  },
  methods: {
    choose: function (el) {
      this.show = true
      switch (el.target.id) {
        case 'a' :
          this.number = 0
          break
        case 'b' :
          this.number = 1
          break
        case 'c' :
          this.number = 2
          break
        case 'd' :
          this.number = 3
          break
        case 'e' :
          this.number = 4
          break
      }
    },
    unshow: function () {
      this.show = false
    },
    getEvaluate: function (data) { // 接受子组件的传值
      this.adj[data.num] = data.text
    },
    submit: function () {
      // 判断信息是否完整
      if (this.name === '' || this.adj.length < 5) {
        this.isComplete = true
      } else {
        var this_ = this
        this.$axios
          .post('/evaluate/send', {
            e1: this.adj[0],
            e2: this.adj[1],
            e3: this.adj[2],
            e4: this.adj[3],
            e5: this.adj[4],
            e6: this.adj[5],
            fakename: this.name
          })
          .then(function (res) {
            this_.$store.commit('setModalHint',
              { text: '评价已成功√' })
            var t = setTimeout(function () {
              this_.$router.push({ path: '/lead' })
              clearTimeout(t)
            }, 2000)
          })
          .catch(function (error) { // 请求失败处理
            console.log(error)
            this_.$store.commit('setModalHint',
              { text: '出错啦！' })
          })
      }
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    left: 24.72vw;
    top: 5.16vh;
    font-size: 4.44vw;
  }
  .img {
    position: absolute;
    left: 27.5vw;
    top: 22.97vh;
    width: 45vw;
    height: 31.88vh;
    border: 1px solid #000000;
  }
  .word {
    width: 20vw;
    height: 5.94vh;
    border: 1px solid #000000;
    position: absolute;
    text-align: center;
    line-height: 5.94vh;
  }
  .nameBox {
    position: absolute;
    left: 12.5vw;
    top: 76.72vh;
    color:rgb(102, 102, 102)
  }
  .name {
    margin-left: 5vw;
    width: 55vw;
    height: 3.9vh;
    outline: none;
    border: 1px solid rgb(121,121,121);
    background: #ffffff;
  }
  .submit {
    position: absolute;
    left: 35.56vw;
    top: 86.09vh;
    width: 23.61vw;
    height: 6.72vh;
    background: #ffffff;
    border: 1px solid rgb(121,121,121);
    border-radius: 10px;
  }
  .tip {
    font-size: 3.1vw;
    position: absolute;
    top: 94.375vh;
    left: 33vw;
    width: 30.56vw;
    height: 2.19vh;
    color: rgb(102, 102, 102);
  }

  .a {
    left: 46.39vw;
    top: 10.9vh;
  }
  .b {
    left: 2.22vw;
    top: 24.53vh;
  }
  .c {
    left: 75.28vw;
    top: 37.34vh;
  }
  .d {
    left: 60vw;
    top: 56.41vh;
  }
  .e {
    left: 11.11vw;
    top: 62.03vh;
  }

  .line {
    position: absolute;
    width: 1px;
  }
  .one {
    left: 53.61vw;
    top: 15.63vh;
    height: 14.06vh;
    transform: rotate(35deg);
  }
  .two {
    left: 25vw;
    top: 29.69vh;
    height: 19.72vh;
    transform: rotate(-30deg);
  }
  .three {
    left: 70vw;
    top: 40vh;
    height: 10vh;
    transform: rotate(36deg);
  }
  .four {
    left: 69.44vw;
    top: 51.56vh;
    height: 13.88vw;
    transform: rotate(-30deg);
  }
  .five {
    left: 30vw;
    top: 49.22vh;
    height: 14.06vh;
    transform: rotate(30deg);
  }
</style>
