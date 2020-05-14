<template>
  <div>
    <div class="letter_box_wrap">
      <div class="letter_box" @click="isShow=true">信箱</div>
    </div>
    <div class="shade" v-show="isShow">
      <div class="letter_box_win">
        <div class="letter_title">
          信箱
        </div>
        <div class="letter_main">
          <div class="letter_info_wrap" v-for="(item,index) in letterList" :key="index">
            <div class="letter_time">{{item.time}}</div>
            <div class="content_wrap">
              <div class="letter_img">{{item.img}}</div>
              <div class="letter_content">{{item.content}}</div>
            </div>
          </div>
        </div>
        <div class="btn_wrap">
          <button @click="isShow=false">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['letterList'],
  data () {
    return {
      isShow: false
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
  .shade {
    position: absolute;
    left: 0px;
    top: 0px;
    background: rgba(0,0,0,0.1);
    width: 100%;
    height: 100%;
    z-index: 99;
    font-size: 4vw;
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
    overflow: hidden;
  }
  .letter_title {
    font-size: 6vw;
    font-weight: 550;
    text-align: center;
    padding: 2vh 0;
  }
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
    padding: 1vh 1vw;
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
