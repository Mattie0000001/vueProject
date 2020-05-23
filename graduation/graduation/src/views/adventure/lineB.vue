<template>
  <div class='adventure'>
    <head-title :title='title' :tip='tip'>
      <template v-slot:left>
        <div class='arrow_wrap' @click='isLeave = true'>
          <img src='../../assets/component/arrow.png' alt=''>
        </div>
      </template>
      <template v-slot:middle></template>
    </head-title>

    <div class='testBox'>
      <div v-if='now === 8' class='test'>
        <div class='title'>{{eighthTitle}}</div>
        <button class='options' @click='choose'
          v-for='item in eighth' :key='item.name' :id='item.name'>
          {{item.text}}
        </button>
      </div>

      <div v-if='now === 9' class='test'>
        <div class='title'>{{ninthTitle}}</div>
        <button class='options' @click='choose'
          v-for='item in ninth' :key='item.name' :id='item.name'>
          {{item.text}}
        </button>
      </div>

      <!--下一步-->
      <div v-show='isOK' @click='gotoNext' class='next'>下一步</div>
    </div>

    <!--离开提示框-->
    <div v-if='isLeave'>
      <leave-pop @hide='hide'></leave-pop>
    </div>

    <!--退出提示框-->
    <div v-if='isExit'>
      <exit-pop :hint='hint' @again='again'></exit-pop>
    </div>

    <!--终点提示框-->
    <div v-if='final'>
      <final-pop @gotoFinal='gotoFinal'></final-pop>
    </div>

    <color-box></color-box>
  </div>
</template>

<script>
import leavePop from './leaveHint.vue'
import exitPop from './exitHint.vue'
import finalPop from './finalPop.vue'
import headTitle from '../../components/headTitle.vue'
import colorBox from '../../components/colorBox.vue'
export default {
  name: 'adventure',
  components: {
    leavePop, exitPop, finalPop, headTitle, colorBox
  },
  data () {
    return {
      final: false,
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
        { name: 'forest', text: '布满森林、郁郁葱葱的星球' },
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
      if (this.now === 9) {
        this.final = true
      } else if (this.now === 8 && this.choice === 'explore') {
        this.hint = '冲进黑洞其实也没什么，下辈子注意少看点科幻小说就行了'
        this.isExit = true
      } else if (this.now === 8 && this.choice === 'quit') {
        this.hint = '你没有完成探险，终点的宝藏还在等待着你的到来，下次再来哦~'
        this.isExit = true
      } else {
        this.now++
      }
    },
    hide: function () {
      this.isLeave = false
    },
    again: function () {
      this.isExit = false
      this.$router.push({ path: '/adventure' })
    },
    gotoFinal: function () {
      this.$router.push({ path: '/result', query: { line: 'B' } })
      this.final = false
    }
  }
}
</script>

<style scoped>
.adventure {
  width: 100vw;
  height: 100vh;
  background: rgb(31, 28, 46);
}

.testBox {
  position: relative;
  top: 10vw;
  width: 83.3vw;
  height: 120vw;
  background: rgba(201, 196, 196, 0.5);
  border-radius: 15px;
  margin: auto;
}

.test {
  margin-left: 6.5vw;
  position: relative;
  top: 8vw;
  height: 80vw;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 5vw;
  color: #ffffff;
}
.options {
  text-align: center;
  font-size: 4.2vw;
  width: 70vw;
  height: 7.5vh;
  line-height: 6.4vh;
  outline: none;
  background: white;
  box-shadow: none;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 35px;
}
.options:focus {
  background: #3e4050;
  color: #ffffff;
}
.next {
  position: relative;
  top: 21vw;
  left: 32vw;
  height: 8.33vw;
  width: 23vw;
  font-size: 4.5vw;
  line-height: 8.33vw;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  background: rgb(27, 39, 61);
  color: #ffffff;
}
</style>
