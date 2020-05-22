<template>
  <div>
    <head-title :title="title" :tip="tip"></head-title>
    <story :lines="beginLines" v-if="isShowBeginStory"></story>
    <story :lines="finishLines" v-if="isShowFinishStory"></story>
    <div class="container">
      <div class="sun_wrap">
        <div class="img_wrap" @click="morningGreet">
          <img src="../../assets/sunMoonStar/sun.png" alt="">
        </div>
      </div>
      <div class="moon_wrap">
        <div class="img_wrap" @click="nightGreet">
          <img src="../../assets/sunMoonStar/moon.png" alt="">
        </div>
      </div>
    </div>
    <transition name="seed">
      <div class="tree_seed_wrap" v-if="isShowSeed">
        树苗
      </div>
    </transition>
    <transition name="tree" >
      <div class="tree_wrap" v-show="isShowTree">
        <img src="../../assets/sunMoonStar/tree.png" alt="">
      </div>
    </transition>
    <div class="fruit_wrap" v-if="myFruit" @click="harvestFruit">
      <img src="../../assets/sunMoonStar/fruit.png" alt="">
    </div>
    <div class="bottom_star_wrap">
      <img src="../../assets/sunMoonStar/bottomStar.png">
    </div>
    <div class="greet_wrap" v-show="isShowGreet">
      <div class="greet_win">
        <div class="greet_title">写下你的{{myGreet}}问候</div>
        <textarea  cols="30" rows="10" v-model="greet_content"></textarea>
        <div class="btn_wrap">
          <button @click="isShowGreet=false">返回</button>
          <button @click="sendGreet">提交</button>
        </div>
      </div>
    </div>
    <color-box></color-box>
  </div>
</template>
<script>
import headTitle from '../../components/headTitle.vue'
import colorBox from '../../components/colorBox.vue'
import story from '../../components/storyline.vue'
export default {
  data () {
    return {
      greet_content: '',
      isShowBeginStory: false,
      isShowFinishStory: false,
      isShowSeed: true,
      isShowTree: false,
      greetType: 1, // 1为早安,2为晚安
      title: '日月星球',
      isShowGreet: false,
      tip: '每天早上八点和晚上十点，你都会收到一条来自他人的早晚安祝福<br>每天写下两条祝福，你也可以收获色彩值作为奖励哦~',
      beginLines: [
        '梯仔来到这<br>发现这是一个奇特的星球',
        '左半边是阳光白云的白天<br>右半边却是有着弯月星空的黑夜',
        '点击继续'
      ],
      finishLines: [
        '梯仔找到了属于自己的色彩<br>身边的景物仿佛也恢复了活力',
        '但梯仔深知<br>它的旅程还远未结束'
      ]
    }
  },
  components: {
    headTitle,
    colorBox,
    story
  },
  created () {
    if (!localStorage.getItem('sunMoonStarBeginStory')) {
      this.isShowBeginStory = true
      localStorage.setItem('sunMoonStarBeginStory', 1)
    }
    const time = new Date()
    const oldtime = localStorage.getItem('fruit')
    if (!oldtime || time.getDate() > oldtime) {
      this.isShowSeed = true
      this.isShowTree = false
    } else {
      this.isShowTree = true
      this.isShowSeed = false
    }
  },
  methods: {
    harvestFruit () {
      this.$axios.put('/api/color/incr', {
        amout: 10
      })
        .then(res => {
          localStorage.setItem('hasFruit', new Date().getDate())
          this.$store.commit('setModalHint', { text: '果实收取完毕，色彩值+10~' })
          if (!localStorage.getItem('sunMoonStarFinishStory')) {
            this.isShowBeginStory = true
            localStorage.setItem('sunMoonStarFinishStory', 1)
          }
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('setModalHint', { text: '收获果实失败' })
        })
    },
    morningGreet () {
      const now = new Date().getDate()
      const oldDate = localStorage.getItem('morning')
      if (!oldDate || now > oldDate) {
        this.greetType = 1
        this.isShowGreet = true
      } else if (now === parseInt(oldDate)) {
        this.$store.commit('setModalHint', { text: '今天已经提交过早安话语了哦，明天再来吧！' })
      }
    },
    nightGreet () {
      const now = new Date().getDate()
      const oldDate = localStorage.getItem('night')
      if (!oldDate || now > oldDate) {
        this.greetType = 2
        this.isShowGreet = true
      } else if (now === parseInt(oldDate)) {
        this.$store.commit('setModalHint', { text: '今天已经提交过晚安话语了哦，明天再来吧！' })
      }
    },
    sendGreet () {
      if (this.greetType === 1) {
        // const now = new Date().getDate()
        // localStorage.setItem('morning', now)
        // this.$store.commit('setModalHint', { text: '提交成功你的祝福将随机发送给他人 也不要忘了查收你的专属祝福哦' })
        // if (now === parseInt(localStorage.getItem('night'))) {
        //   localStorage.setItem('fruit', now)
        //   this.isShowSeed = false
        //   this.isShowTree = true
        // }
        this.$axios.post('/api/daynight/day', {
          M_content: this.greet_content
        })
          .then(res => {
            const now = new Date().getDate()
            localStorage.setItem('morning', now)
            this.$store.commit('setModalHint', { text: '提交成功你的祝福将随机发送给他人 也不要忘了查收你的专属祝福哦' })
            if (now === parseInt(localStorage.getItem('night'))) {
              localStorage.setItem('fruit', now)
              this.isShowSeed = false
              this.isShowTree = true
            }
          })
          .catch(err => {
            console.log(err)
            this.$store.commit('setModalHint', { text: '提交失败，再试试看吧' })
          })
      } else {
        // const now = new Date().getDate()
        // localStorage.setItem('night', now)
        // this.$store.commit('setModalHint', { text: '提交成功你的祝福将随机发送给他人 也不要忘了查收你的专属祝福哦' })
        // if (now === parseInt(localStorage.getItem('morning'))) {
        //   localStorage.setItem('fruit', now)
        //   this.isShowSeed = false
        //   this.isShowTree = true
        // }
        this.$axios.post('/api/daynight/night', {
          N_content: this.greet_content
        })
          .then(res => {
            const now = new Date().getDate()
            localStorage.setItem('night', now)
            this.$store.commit('setModalHint', { text: '提交成功你的祝福将随机发送给他人 也不要忘了查收你的专属祝福哦' })
            if (now === parseInt(localStorage.getItem('morning'))) {
              localStorage.setItem('fruit', now)
              this.isShowSeed = false
              this.isShowTree = true
            }
          })
          .catch(err => {
            console.log(err)
            this.$store.commit('setModalHint', { text: '提交失败，再试试看吧' })
          })
      }
      this.isShowGreet = false
    }
  },
  computed: {
    myGreet () {
      if (this.greetType === 1) {
        return '早安'
      } else {
        return '晚安'
      }
    },
    myFruit () {
      const time = new Date()
      if (this.isShowTree && parseInt(localStorage.getItem('hasFruit')) < time.getDate() && time.getHours() >= 18) {
        return true
      } else if (!localStorage.getItem('hasFruit')) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
.seed-leave {
  opacity: 1;
}
.seed-leave-to {
  opacity: 0;
}
.seed-leave-active {
  transition: all 1s ease;
}
.tree-enter {
  transform: translateY(20vh);
  opacity: 0;
}
.tree-enter-active {
  transition: all 3s ease;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
img {
  width: 100%;
  height: auto;
}
.sun_wrap {
  border-right: 1px solid #797979;
  height: 60vh;
}
.img_wrap {
  margin: 8vh auto;
  width: 28vw;
}
.bottom_star_wrap {
  position: absolute;
  bottom: -20vh;
  left: 0;
}
.greet_wrap {
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
  z-index: 99;
  font-size: 4.5vw;
}
.greet_win {
  background-color: #fff;
  position: relative;
  width: 90vw;
  height: 45vh;
  margin: 20vh auto;
  border: 1px solid #797979;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.greet_win textarea {
  border: 1px solid #797979;
  width: 78vw;
  border-radius: 8px;
  padding: 1vh 2vw;
  font-size: 5vw;
  height: 27vh;
}
.btn_wrap {
  width: 80vw;
  display: flex;
  justify-content: space-around;
}
.btn_wrap button {
  background-color: #fff;
  border: 1px solid #797979;
  border-radius: 6px;
  padding: 0.8vh 5vw;
}
.tree_seed_wrap {
  position: absolute;
  border: 1px solid #797979;
  left: 40vw;
  width: 20vw;
  height: 25vh;
  z-index: 60;
  background-color: #fff;
}
.tree_wrap {
  width: 60vw;
  height: 20vh;
  position: absolute;
  left: 20vw;
  bottom: 20vh;
  z-index: 77;
}
.fruit_wrap {
  width: 10vw;
  height: 10vw;
  position: absolute;
  left: 30vw;
  bottom: 15vh;
}
</style>
