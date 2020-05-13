<template>
  <div class="header_wrap">
    <div class="left_wrap">
      <slot name="left">
        <div class="arrow_wrap" @click="back">
          <img src='../assets/component/arrow.png' alt="">
        </div>
      </slot>
    </div>
    <div class="middle_wrap">
      <div class="title_wrap">
        <slot name="middle">
          {{title}}
        </slot>
      </div>
    </div>
    <div class="right_wrap">
      <div class="star_wrap">
        <slot name="right">
          <img src="../assets/component/star.png" @click="isTipShow=true">
          <div class="red_dot"></div>
        </slot>
      </div>
    </div>
    <div class="shade" id="shade" v-show="isTipShow">
      <div class="tip_win">
        <div class="tip_title">规则</div>
        <div class="tip_content">{{tip}}</div>
        <button class="tip_btn" @click="isTipShow=false">我知道了</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'tip'],
  data () {
    return {
      isTipShow: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.title_wrap {
  font-size: 5.5vw;
  font-weight: 550;
  padding-left: 15vw;
}
.header_wrap {
  width: 100vw;
  height: 9vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
.arrow_wrap {
  margin: 2vh auto;
  width: 6vw;
  height: 6vw;
}
.title_wrap {
  margin: 2vh auto;
  height: 100%;
}
img {
  width: 100%;
  height: auto;
}
.star_wrap {
  position: relative;
  width: 8vw;
  height: 8vw;
  margin: 2vh auto;
}
.red_dot {
  position: absolute;
  top: 0;
  right: 0;
  height: 2vw;
  width: 2vw;
  border-radius: 50%;
  background-color: #ff0000;
}

.shade {
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
  z-index: 99;
}
.tip_win {
  position: relative;
  background:#fff;
  width: 70%;
  height: 50%;
  border-radius: 5px;
  margin: 30% auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #797979;
}
.tip_title {
  font-size: 6vw;
  font-weight: 550;
  padding: 2vh 2vw;
}
.tip_content {
  padding: 2vh 4vw;
}
.tip_btn {
  border: 1px solid #808080;
  padding: 1.5vh 4vw;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 4vh;
}

</style>
