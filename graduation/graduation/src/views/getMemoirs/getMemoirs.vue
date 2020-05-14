<template>
  <div>
    <head-title>
      <template v-slot:right>
        <div>
        </div>
      </template>
    </head-title>
    <transition name="cover-slide">
      <div class="memoirs_cover" :class="{'cover_slide':isShowCover}">
        <div class="cover_main" @click="isShowCover=true">
          <div class="cover_name">XXX</div>
          <div class="cover_title">回忆录</div>
        </div>
      </div>
    </transition>
    <div class="memoirs_main">
      <div class="memoirs_content">
        <div class="momoirs_from">From:XXX</div>
        <div class="question_wrap">
          <div class="ask_question">Q1：我们一起做过最疯狂的事？</div>
          <div class="answer_question">吃饭、睡觉</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">Q2：我们第一次相遇的地方？</div>
          <div class="answer_question">吃饭、睡觉</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">Q3：你对我印象最深的是什么</div>
          <div class="answer_question">吃饭、睡觉</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">你还有什么想对我说的吗？</div>
          <div class="answer_question">吃饭、睡觉</div>
        </div>
      </div>
    </div>
    <transition name="turn-page">
      <div class="page_cover" v-show="isTurnPage"></div>
    </transition>
    <div class="arrow_wrap" @click="turnPage" v-if="isShowCover">
      <div class="img_wrap"><img src="../../assets/liveStar/right_arrow.png" alt=""></div>
      <div class="arrow_text">下一页</div>
    </div>
    <div class="btn_wrap">
      <button>保存这页</button>
    </div>
  </div>
</template>
<script>
import headTitle from '../../components/headTitle.vue'
export default {
  components: {
    headTitle
  },
  data () {
    return {
      isShowCover: false,
      isTurnPage: false
    }
  },
  methods: {
    turnPage () {
      this.isTurnPage = true
      setTimeout(() => {
        this.isTurnPage = false
      }, 200)
    }
  }
}
</script>
<style scoped>
.turn-page-leave-active {
  transition: all 3s ease;
}
.turn-page-leave-to {
  transform: translateX(-90vw);
}
@keyframes cover_slide {
  from {left:6vw}
  to {left:-84vw}
}
.cover_slide {
  animation: cover_slide 3s;
  animation-fill-mode: forwards;
}
.memoirs_cover {
  width: 90vw;
  height: 84vh;
  background-color: #7d524e;
  position: absolute;
  color: #fff;
  display: flex;
  font-size: 8vw;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10vw;
  left: 6vw;
  z-index: 99;
}
.cover_main {
  display: flex;
  align-items: center;
}
.cover_name,.cover_title {
  writing-mode:vertical-lr;
  letter-spacing: 3vw;
}
.momoirs_from {
  font-weight: bold;
}
.memoirs_main {
  background-color: #ffffe6;
  margin-left: 6vw;
  height: 84vh;
  border: 1px solid #797979;
  width: 90vw;
  font-size: 4.2vw;
  padding: 2vh 0;
}
.memoirs_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.answer_question {
  background-color: #fff;
  border-radius: 6px;
  width: 80vw;
  height: 12vh;
  border: 1px solid #797979;
  margin-top: 1vh;
  padding: 1vh 2vw;
}
img {
  width: 100%;
  height: auto;
}
.arrow_wrap {
  position: absolute;
  top: 49vh;
  left: 88vw;
  display: flex;
  flex-direction: column;
  font-size: 3.8vw;
  align-items: center;
}
.img_wrap {
  width: 5vw;
  height: 5vw;
}
.page_cover {
  background-color: #ffffe6;
  left: 6vw;
  height: 84vh;
  border: 1px solid #797979;
  width: 90vw;
  position: absolute;
  top: 8vh;
}
button {
  background-color: #fff;
  border: 1px solid #797979;
  border-radius: 6px;
  padding: 1vh 3vw;
}
.btn_wrap {
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
