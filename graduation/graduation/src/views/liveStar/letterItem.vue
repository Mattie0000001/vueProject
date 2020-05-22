<template>
  <div>
    <div class="letter_time">{{letter.time}}</div>
    <div class="content_wrap">
      <div class="letter_img">{{letter.img}}</div>
      <div class="letter_content">
        <div class="main_content" @click="jump">
          {{letter.content}}
        </div>
        <div class="img_content" v-if="letter.type===3||letter.type===4">
          <img :src="mySrc" @click="likeGreet">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    mySrc () {
      if (this.letter.type === 3) {
        return require('../../assets/liveStar/love.png')
      } else {
        return require('../../assets/liveStar/_love.png')
      }
    }
  },
  props: ['letter'],
  methods: {
    jump () {
      if (this.letter.type === 5) {
        this.$router.push({
          path: `/getEvaluate/${this.letter.id}`
        })
      } else if (this.letter.type === 6) {
        this.$router.push({
          path: '/getMemoirs'
        })
      }
    },
    likeGreet () {
      if (this.letter.type === 4) {
        return null
      }
      this.$axios.put('/api/letter/praise', {
        id: this.letter.id
      })
        .then(res => {
          this.letter.type = 4
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('setModalHint', { text: '点赞失败' })
        })
    }
  }
}
</script>
<style scoped>
.letter_time {
  margin: 0 auto;
  background-color: #f2f2f2;
  color: #333333;
  font-size: 3.5vw;
  width: 25vw;
  height: 3.5vh;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content_wrap {
  padding: 2vh 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.letter_img {
  border: 1px solid #333333;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
}
.letter_content {
  width: 65vw;
  border: 1px solid #666;
  border-radius: 14px;
  margin-left: 2vw;
  padding: 1vh 1.2vw;
  display: flex;
  align-items: center;
  font-size: 3.6vw;
  justify-content: space-around;
}
.img_content {
  width: 6vw;
  height: 6vw;
  margin-left: 0.5vw;
}
img {
  width: 100%;
  height: auto;
}
</style>
