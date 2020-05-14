<template>
    <div class='adventure'>
        <img :src='backImg' class='back' @click='isLeave = true'>

        <div v-if='now===1' class='test'>
            <div class='title'>{{firstTitle}}</div>
            <button class='options' @click='chooseInFirst'
             v-for='item in first' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===2' class='test'>
            <div class='title'>{{secondTitle}}</div>
            <button class='options' @click='chooseInSecond'
             v-for='item in second' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===3' class='test'>
            <div class='title'>{{thirdTitle}}</div>
            <button class='options' @click='chooseInThird'
             v-for='item in third' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>

        <!--下一步-->
        <div v-show='isOK' @click='gotoNext' class='next'>
            <span class="nextWord">下一步</span>
            <img class='nextImg' src="../../assets/mirror/next.png">
        </div>

        <!--离开提示框-->
        <leave-pop :isLeave='isLeave'></leave-pop>
        <!--退出提示框-->
        <exit-pop :isExit='isExit' :hint='hint'></exit-pop>
    </div>
</template>

<script>
import leavePop from './leaveHint.vue'
import exitPop from './exitHint.vue'
export default {
  name: 'adventure',
  components: {
    leavePop, exitPop
  },
  data () {
    return {
      backImg: require('../../assets/mirror/back.png'),
      isLeave: false,
      isExit: false,
      hint: 'none',
      now: 1,
      choiceOne: 'none',
      choiceTwo: 'none',
      choiceThird: 'none',
      firstTitle: '现在你要出发去往星际探索，你会带什么东西?',
      secondTitle: '在旅途过程中遇到流星雨，你会许下哪种愿望?',
      thirdTitle: '你突然在半路上遇到了外星人，你会',
      first: [
        { name: 'camera', text: '相机' },
        { name: 'MP3', text: 'MP3' },
        { name: 'diary', text: '日记' }
      ],
      second: [
        { name: 'rich', text: '暴富' },
        { name: 'love', text: '桃花运' },
        { name: 'study', text: '变成学神' }
      ],
      third: [
        { name: 'hello', text: '四海之内皆兄弟，上前友好地打招呼 ' },
        { name: 'go', text: '三十六计走为上' },
        { name: 'beat', text: '不能怂，正面刚 ' }
      ]
    }
  },
  methods: {
    chooseInFirst: function (el) {
      this.choiceOne = el.id
      sessionStorage.setItem('one', this.choiceOne)
    },
    chooseInSecond: function (el) {
      this.choiceTwo = el.id
      sessionStorage.setItem('two', this.choiceTwo)
    },
    chooseInThird: function (el) {
      this.choiceThird = el.id
      sessionStorage.setItem('third', this.choiceThree)
    },
    goToNext: function () {
      if (this.now < 3) {
        this.now++
      } else if (this.now === 3 && this.choiceThree === 'hello') {
        this.$router.push({ path: './lineA.vue' })
      } else if (this.now === 3 && this.choiceThree === 'go') {
        this.$router.push({ path: './lineB.vue' })
      } else if (this.now === 3 && this.choiceThree === 'beat') {
        this.hint = '你不敌对方，壮烈牺牲，重头来过吧'
        this.isExit = true
      }
    }
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
.test {
  position: absolute;
  left: 8.33vw;
  width: 83.3vw;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  font-size: 5vw;
}
.options {
  text-align: center;
  font-size: 4.2vw;
  width: 83.3vw;
  height: 7.5vh;
  border-radius: 35px;
  line-height: 6.4vh;
  outline: none;
  background: white;
  box-shadow: none;
  border: 1px solid rgb(121, 121, 121);
}
.options:focus {
  background: #c3ffaf;
}
.next {
  position: fixed;
  bottom: 17vh;
  left: 35vw;
  height: 8.33vw;
}
.nextWord {
  font-size: 5.55vw;
  line-height: 8.33vw;
  position: relative;
  top: -1vh;
}
.nextImg {
  width: 8.33vw;
  height: 8.33vw;
}
</style>
