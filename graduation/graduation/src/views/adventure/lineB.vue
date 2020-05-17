<template>
    <div class='adventure'>
        <img src='../../assets/mirror/back.png' class='back' @click='isLeave = true'>

        <div v-if='now===8' class='test'>
            <div class='title'>{{eighthTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in eighth' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===9' class='test'>
            <div class='title'>{{ninthTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in ninth' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>

        <!--下一步-->
        <div v-show='isOK' @click='gotoNext' class='next'>
            <span class="nextWord">下一步</span>
            <img class='nextImg' src='../../assets/mirror/next.png'>
        </div>

        <!--离开提示框-->
        <div v-if='isLeave'>
            <leave-pop v-on:hide='hide'></leave-pop>
        </div>

        <!--退出提示框-->
        <div v-if='isExit'>
            <exit-pop :hint='hint'></exit-pop>
        </div>

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
      isOK: false,
      isLeave: false,
      isExit: false,
      hint: 'none',
      now: 8,
      choice: '',
      eighthTitle: ' 撞见外星人还心有余悸，前方突然又出现了一个黑洞，这时你会',
      ninthTitle: '经过重重险阻，你终于抵达了目的地，这是一个',
      eighth: [
        { name: 'explore', text: '直接冲进去探索黑洞，犹豫就会败北' },
        { name: 'quit', text: '被搞怕了，直接放弃旅程' },
        { name: 'continue', text: '绕开黑洞继续前行' }
      ],
      ninth: [
        { name: 'forest', text: '布满森林、郁郁葱葱的星球，令人神清气爽' },
        { name: 'sweet', text: '到处都是糖果屋和奶茶店的星球' },
        { name: 'book', text: '一片书海的星球' }
      ]
    }
  },
  methods: {
    choose: function (el) {
      this.choice = el.target.id
      var number = (this.now === 8) ? 'eight' : 'nine'
      sessionStorage.setItem(number, this.choice)
      this.isOK = true
    },
    gotoNext: function () {
      if (this.now === 8 && this.choice === 'explore') {
        this.hint = '冲进黑洞其实也没什么，下辈子注意少看点科幻小说就行了'
        this.isExit = true
      } else if (this.now === 8 && this.choice === 'quit') {
        this.hint = '你没有完成探险，终点的宝藏还在等待着你的到来，下次再来哦~'
        this.isExit = true
      } else {
        this.now++
      }
      if (this.now === 9) {
        this.$router.push({ path: '/result', query: { line: 'B' } })
      }
    },
    hide: function () {
      this.isLeave = false
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
