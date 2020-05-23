<template>
    <div class='adventure'>
        <img src='../../assets/mirror/back.png' class='back' @click='isLeave = true'>

        <div v-if='now===4' class='test'>
            <div class='title'>{{fourthTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in fourth' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===5' class='test'>
            <div class='title'>{{fifthTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in fifth' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===6' class='test'>
            <div class='title'>{{sixthTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in sixth' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>
        <div v-if='now===7' class='test'>
            <div class='title'>{{seventhTitle}}</div>
            <button class='options' @click='choose'
             v-for='item in seventh' :key='item.name' :id='item.name'>
                {{item.text}}
            </button>
        </div>

        <!--下一步-->
        <div v-show='isOK' @click='gotoNext' class='next'>
            <span class="nextWord">下一步</span>
            <img class='nextImg' src="../../assets/mirror/next.png">
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
    </div>
</template>

<script>
import leavePop from './leaveHint.vue'
import exitPop from './exitHint.vue'
import finalPop from './finalPop.vue'
export default {
  name: 'adventure',
  components: {
    leavePop, exitPop, finalPop
  },
  data () {
    return {
      final: false,
      isOK: false,
      isLeave: false,
      isExit: false,
      hint: '',
      now: 4,
      choice: '',
      fourthTitle: '外星人很高兴，决定送给你一件礼物，你会选:',
      fifthTitle: '你拒绝接受外星人的礼物，让它恼羞成怒，决定对你发起攻击，你会',
      sixthTitle: '你继续上路，然而天有不测风云，突然一个黑洞出现在你正前方:',
      seventhTitle: '经过重重险阻，你终于抵达了目的地，这是一个',
      fourth: [
        { name: 'time', text: '时光机' },
        { name: 'space', text: '任意门' },
        { name: 'refuse', text: '妈妈说不能要陌生人的礼物' }
      ],
      fifth: [
        { name: 'apology', text: '马上道歉' },
        { name: 'go', text: '三十六计走为上计' },
        { name: 'fight', text: '我忍够了，开干吧' }
      ],
      sixth: [
        { name: 'directGo', text: '直接冲进去探索黑洞，犹豫就会败北' },
        { name: 'abandon', text: '被搞怕了，直接放弃旅程' },
        { name: 'continue', text: '绕开黑洞继续前行' }
      ],
      seventh: [
        { name: 'forest', text: '布满森林、郁郁葱葱的星球，令人神清气爽' },
        { name: 'sweet', text: '到处都是糖果屋和奶茶店的星球' },
        { name: 'book', text: '一片书海的星球' }
      ]
    }
  },
  methods: {
    choose: function (el) {
      this.isOK = true
      this.choice = el.target.id
      var number = 'four'
      switch (this.now) {
        case 4 :
          number = 'four'
          break
        case 5 :
          number = 'five'
          break
        case 6 :
          number = 'six'
          break
        case 7 :
          number = 'seven'
          break
      }
      sessionStorage.setItem(number, this.choice)
    },
    gotoNext: function () {
      switch (this.now) {
        case 4 :
          if (this.choice === 'refuse') {
            this.now += 1
          } else {
            this.now += 2
          }
          break
        case 5 :
          if (this.choice === 'fight') {
            this.hint = '你不敌对方，壮烈牺牲，重头来过吧'
            this.isExit = true
          } else {
            this.now += 1
          }
          break
        case 6 :
          if (this.choice === 'directGo') {
            this.hint = '冲进黑洞其实也没什么，下辈子注意少看点科幻小说就行了'
            this.isExit = true
          } else if (this.choice === 'abandon') {
            this.hint = '你没有完成探险，终点的宝藏还在等待着你的到来，下次再来哦~ '
            this.isExit = true
          } else {
            this.now += 1
          }
          break
        case 7 :
          this.final = true
          break
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
      this.$router.push({ path: '/result', query: { line: 'A' } })
      this.final = false
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
