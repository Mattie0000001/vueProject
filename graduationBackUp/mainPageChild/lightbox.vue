<template>
    <div id='lightbox'  @click='jump' @touchmove.prevent>
        <div class='tips'>待定</div>
        <div class='tips'>#昵称和星球名可以在你的星球中修改哦~</div>
        <div class='tips'>点击继续...</div>
    </div>
</template>

<style>
  html {
    font-size: 27.77vw;
  }

  #lightbox {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: rgb(231, 230, 230);
    opacity: 0.8;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }
  .tips {
    position: relative;
    top: 33%;
    margin-bottom: 0.4rem;
    font-size: 0.15rem;
  }
</style>

<script>
export default {
  name: 'light-box',
  methods: {
    jump: function () {
      document.getElementById('lightbox').style.display = 'none'
    }
  }
}
</script>
