<template>
  <div>
    <head-title :title="title" :tip="tip">
      <template v-slot:middle>
        <div class="title_box">
          <div>居住星球</div>
          <div class="pen_wrap" @click="getName">
            <img src="../../assets/liveStar/pen.png" alt="">
          </div>
        </div>
      </template>
    </head-title>
    <div class="change_star_wrap">
      <div class="change_btn"></div>
      <div class="change_btn"></div>
      <div class="change_btn"></div>
      <div class="change_btn"></div>
      <div class="change_btn"></div>
    </div>
    <div class="people_walk_wrap">
      <div class="people_wrap" @click="isLuckNoteShow=true">
        <img src="../../assets/liveStar/people.png" alt="">
      </div>
      <div class="star_wrap"></div>
    </div>
    <transition name="slide">
      <div class="luck_note_wrap" v-show="getLuck">
        <div class="note_time">{{luckNote.time}}</div>
        <div class="note_title">今日运势</div>
        <div class="luck_type">{{myLuckType}}</div>
        <div class="color_add">色彩值+{{myGetColor}}</div>
        <div class="descrption">{{luckNote.content}}</div>
        <button @click="isLuckNoteShow=false">好的</button>
      </div>
    </transition>
    <div class="name_change_shade" v-show="isInputShow">
      <div class="input_win">
        <div class="input_title">更改名字</div>
       <div class="input_info">
          <div class="row">
            <div class="text">昵称：</div>
            <input type="text" @blur="inputBlur" @input="inputNickName" v-model="nickName">
          </div>
          <div class="tip_text" v-show="isShowNameTip">
            *昵称长度不能超过12个字符，且不能为空
          </div>
       </div>
        <div class="input_info">
          <div class="row">
            <div class="text">星球：</div>
            <input type="text" @blur="inputBlur" v-model="starName" @input="inputStarName">
          </div>
          <div class="tip_text" v-show="isShowStarTip">
            *星球名长度不能超过12个字符，且不能为空
          </div>
        </div>
        <div class="btn_wrap">
          <button @click="isInputShow=false">取消</button>
          <button @click="modify">确认</button>
        </div>
      </div>
    </div>
    <letter-box></letter-box>
    <color-box></color-box>
  </div>
</template>
<script>
import headTitle from '../../components/headTitle.vue'
import letterBox from '../liveStar/letterBox.vue'
import colorBox from '../../components/colorBox.vue'
export default {
  name: 'liveStar',
  data () {
    return {
      luckNote: {},
      nickName: '',
      starName: '',
      isShowNameTip: false,
      isShowStarTip: false,
      isLuckNoteShow: false,
      title: '居住星球',
      tip: '色彩值达到20解锁第一个皮肤，50，80，110，140，180分别解锁下一个(无需消耗色彩值)。还有记得每天来看看信箱的来信，点击地面上的小纸人有惊喜噢',
      isInputShow: false
    }
  },
  computed: {
    myLuckType () {
      if (parseInt(this.luckNote.luck) === 1) {
        return '小吉'
      } else if (parseInt(this.luckNote.luck) === 2) {
        return '中吉'
      } else {
        return '大吉'
      }
    },
    myGetColor () {
      if (parseInt(this.luckNote.luck) === 1) {
        return 5
      } else if (parseInt(this.luckNote.luck) === 2) {
        return 10
      } else {
        return 15
      }
    }
  },
  components: {
    headTitle,
    colorBox,
    letterBox
  },
  methods: {
    async getLuck () {
      try {
        if (localStorage.getItem('luck')) {
          const res1 = await this.$axios.put('/api/user/daily')
          this.luckNote = res1.data
          const dt = new Date()
          const m = (dt.getMonth() + 1 + '').padStart(2, '0')
          const d = (dt.getDate() + 1 + '').padStart(2, '0')
          this.luckNote.time = `${m}月${d}日`
          await this.$axios.put('/api/color/incr', {
            amout: this.myGetColor
          })
          localStorage.setItem('luck', JSON.stringify(this.luckNote))
        } else {
          this.luckNote = JSON.parse(localStorage.getItem('luck'))
        }
        this.isLuckNoteShow = true
      } catch (err) {
        console.log(err)
        this.$store.commit('setModalHint', { text: '获取今日运势失败' })
      }
    },
    getName () {
      this.$axios.put('/api/user/get')
        .then(res => {
          this.nickName = res.data.nickName
          this.starName = res.data.starName
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('setModalHint', { text: '获取名称失败' })
        })
      this.isInputShow = true
    },
    modify () {
      if (this.isShowNameTip || this.isShowStarTip) {
        return null
      }
      this.$axios.put('/api/user/change')
        .then(res => {
          this.$store.commit('setModalHint', { text: '名字修改成功' })
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('setModalHint', { text: '名字修改失败' })
        })
    },
    inputNickName () {
      if (/^(\w|[\u4e00-\u9fa5]){1,12}$/.test(this.nickName)) {
        this.isShowNameTip = false
        console.log('不显示')
      } else {
        this.isShowNameTip = true
      }
    },
    inputStarName () {
      if (/^(\w|[\u4e00-\u9fa5]){1,12}$/.test(this.starName)) {
        this.isShowStarTip = false
        console.log('不显示')
      } else {
        this.isShowStarTip = true
      }
    },
    inputBlur () {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 10)
    }
  }
}
</script>
<style scoped>
  .slide-enter-active,.slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter,.slide-leave-to {
    transform: translateY(-60vh);
  }
  .title_box {
    display: flex;
    align-items: center;
  }
  .pen_wrap {
    width: 6vw;
    height: 6vw;
    margin-left: 1.5vw;
  }
  .name_change_shade {
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    z-index: 99;
  }
  .input_win {
    position: relative;
    background:#fff;
    width: 88%;
    height: 43%;
    border-radius: 5px;
    margin: 35% auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #797979;
    justify-content: space-around;
    font-size: 4vw;
    padding: 4vh 0;
  }
  .row {
    display: flex;
    font-size: 4vw;
  }
  .row input {
    width: 50vw;
    height: 3.5vh;
    border: 1px solid #797979;
    padding: 0 2vw;
  }
  .input_title {
    font-weight: 550;
  }
  .tip_text {
    font-size: 3vw;
    margin-top: 1vh;
  }
  .input_info {
    height: 7vh;
  }
  .text {
    color:#666;
  }
  .btn_wrap {
    display: flex;
    justify-content: space-around;
    width: 70vw;
  }
  .btn_wrap button {
    padding: 1vh 6vw;
    background-color: #fff;
    border: 1px solid #797979;
    border-radius: 4px;
  }
  .change_star_wrap {
    padding: 4vh 6vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .change_btn {
    border-radius: 50%;
    background-color: #199ed8;
    width: 9vw;
    height: 9vw;
  }
  .people_walk_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .people_wrap {
    width: 10vw;
    height: 15vw;
    animation: revolution 30s linear infinite;
  }
  .star_wrap {
    border: 1px solid #666;
    border-radius: 50%;
    width: 60vw;
    height: 60vw;
  }
  img {
    width: auto;
    height: 100%;
  }
  @keyframes revolution {
    0% {
      transform-origin: center calc(45/15*100%);
      transform: rotate(0deg)
    }
    25% {
      transform-origin: center calc(45/15*100%);
      transform: rotate(90deg)
    }
    75% {
      transform-origin: center calc(45/15*100%);
      transform: rotate(270deg)
    }
    100% {
      transform-origin: center calc(45/15*100%);
      transform: rotate(360deg)
    }
  }
  .luck_note_wrap {
    width: 75vw;
    display: flex;
    flex-direction: column;
    height: 50vh;
    position: absolute;
    top: 20vh;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    padding: 4vh 5vw;
    left: 16vw;
    border: 1px solid #6e6d6d;
    font-size: 4vw;
  }
  .note_time {
    font-size: 5.5vw;
    font-weight: bold;
  }
  .luck_note_wrap button{
    background-color: #fff;
    padding: 1vh 3vw;
    border: 1px solid #333;
  }
</style>
