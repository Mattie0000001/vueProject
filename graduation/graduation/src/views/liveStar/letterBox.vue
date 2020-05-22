<template>
  <div>
    <div class="letter_box_wrap">
      <div class="letter_box" @click="getLetterList">信箱</div>
    </div>
    <div class="letter_shade" v-show="$store.state.isShowModalLetter">
      <div class="letter_box_win">
        <div class="letter_title">
          信箱
        </div>
        <div class="letter_main">
          <letter-item v-for="(item,index) in letterList" :key="index" :letter="item"></letter-item>
        </div>
        <div class="btn_wrap">
          <button @click="$store.commit('setModalLetter',false)">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import letterItem from './letterItem.vue'
export default {
  components: {
    letterItem
  },
  methods: {
    getLetterList () {
      this.$store.commit('setModalLetter', true)
      this.$axios.get('/api/letter/get')
        .then(res => {
          this.letterList = res.data.letter
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('setModalHint', { text: '信箱获取失败' })
        })
    }
  },
  data () {
    return {
      isShow: false,
      letterList: [
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 6
        // },
        // {
        //   img: '魔镜',
        //   time: '昨天',
        //   content: '你收到了一份来自XXX的评价,现在查收',
        //   type: 2
        // },
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 3
        // },
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 1
        // },
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 4
        // },
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 5
        // },
        // {
        //   img: '月亮',
        //   time: '22:00',
        //   content: '叮咚~你的回忆录已按时送达，请注意查收',
        //   type: 1
        // }
      ]
    }
  }
}
</script>
<style scoped>
  .letter_box_wrap {
    padding-left: 60vw;
    padding-top: 7vh;
  }
  .letter_box {
    width: 30vw;
    height: 10vh;
    background-color: #e9e9e9;
    border: 1px solid #797979;
  }
  .letter_shade {
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    z-index: 99;
  }
  .letter_box_win {
    position: relative;
    background:#fff;
    width: 90%;
    height: 85%;
    border-radius: 5px;
    margin: 15% auto;
    border: 1px solid #797979;
    overflow: hidden;
    font-size: 4vw;
  }
  .letter_main {
    height: 60vh;
    overflow: scroll;
  }
  .letter_title {
  font-size: 6vw;
  font-weight: 550;
  text-align: center;
  padding: 2vh 0;
 }
  .btn_wrap {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    width: 20vw;
    height: 5vh;
    padding: 1vh 2vw;
    border: 1px solid #666;
    background-color: #fff;
    border-radius: 6px;
  }
</style>
