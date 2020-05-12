<template>
  <div class="bottom_wrap">
    <div class="color_tip_wrap">
      <transition name="fade">
        <div class="tip_box" v-show="isShow">当前色彩值：100</div>
      </transition>
      <div class="color_box" @click="showToast">100</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showToast () {
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 1000)
    }
  }
}
</script>
<style scoped>
.fade-leave-active {
  transition: all .8s ease;
}
.fade-leave-to {
  opacity: 0;
}
.tip_box {
  border: 1px solid #868686;
  border-radius: 10px;
  position: absolute;
  top: 0;
  height: 5vh;
  width: 40vw;
  display: flex;
  align-items: center;
}
.color_tip_wrap {
  position: relative;
  height: 100%;
  width: 100vw;
  padding-top: 4.5vh;
}
.bottom_wrap {
  font-size: 4vw;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 17vh;
  padding-left: 10vw;
}
.color_box {
  width: 10vw;
  height: 10vh;
  transform: rotate(10deg);
  border: 1px solid #868686;
  display: flex;
  align-items: center;
}
</style>
