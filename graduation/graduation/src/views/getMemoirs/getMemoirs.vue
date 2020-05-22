<template>
  <div ref="imageToFile">
    <head-title>
      <template v-slot:right>
        <div>
        </div>
      </template>
    </head-title>
    <div class="memoirs_cover" :class="{'cover_slide':isShowCover}">
      <div class="cover_main" @click="isShowCover=true">
        <div class="cover_name">XXX</div>
        <div class="cover_title">回忆录</div>
      </div>
    </div>
    <div class="image_shade" v-show="isShowImg">
      <div class="image_wrap">
        <img :src="getImg" alt="">
      </div>
    </div>
    <div class="memoirs_main">
      <div class="memoirs_content" v-if="index < memoirs.length">
        <div class="momoirs_from">From:{{memoirs[index].fakename}}</div>
        <div class="question_wrap">
          <div class="ask_question">Q1：{{memoirs[index].q1}}</div>
          <div class="answer_question">{{memoirs[index].a1}}</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">Q2：{{memoirs[index].q2}}</div>
          <div class="answer_question">{{memoirs[index].a2}}</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">Q3：{{memoirs[index].q3}}</div>
          <div class="answer_question">{{memoirs[index].a3}}</div>
        </div>
        <div class="question_wrap">
          <div class="ask_question">你还有什么想对我说的吗？</div>
          <div class="answer_question">{{memoirs[index].words}}</div>
        </div>
      </div>
      <div class="memoirs_summary" v-else>
        我一路沿着墨色浓重的小经前行<br>甚至都看到了月球的背面<br>只为追寻你，前往你身旁
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
      <button @click="toImage">保存这页</button>
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'
import headTitle from '../../components/headTitle.vue'
export default {
  components: {
    headTitle
  },
  data () {
    return {
      getImg: '',
      isShowImg: false,
      memoirs: [
        {
          q1: '1',
          q2: '2',
          q3: '3',
          a1: 'ha',
          a2: '1ddd',
          a3: '1iwod',
          words: 'ss',
          fakename: '你好'
        },
        {
          q1: '1',
          q2: '2',
          q3: '3',
          a1: 'ha',
          a2: '1ddd',
          a3: '1iwod',
          words: 'ss',
          fakename: '你好帅'
        }
      ],
      isShowCover: false,
      isTurnPage: false,
      index: 0 // 页数标记
    }
  },
  created () {
    this.getMemoirs()
  },
  methods: {
    toImage () {
      html2canvas(this.$refs.imageToFile)
        .then((canvas) => {
          const url = canvas.toDataURL('image/png')
          this.getImg = url
          this.isShowImg = true
        })
    },
    turnPage () {
      if (this.index >= this.memoirs.length) {
        this.$store.commit('setModalHint', { text: '这是最后一页了哦' })
        return null
      }
      this.isTurnPage = true
      setTimeout(() => {
        this.isTurnPage = false
      }, 200)
      this.index += 1
    },
    getMemoirs () {
      this.$axios.get('/api/memoirs/get')
        .then(res => {
          this.memoirs = res.data.memoirs
        })
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
/* @keyframes cover_slide {
  from {left:6vw}
  to {left:-84vw}
} */
.cover_slide {
  /* animation: cover_slide 3s;
  animation-fill-mode: forwards; */
  transform: translateX(-90vw);
  transition: all ease 2s;
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
.image_shade {
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
  z-index: 99;
}
.image_wrap {
  width: 65vw;
  margin: 30vw auto;
}
</style>
