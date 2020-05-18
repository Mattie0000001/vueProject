<template>
    <div class='page'>
        <div class='whole'>
            <div class='title'>
                <span class='word'>请选择标签</span>
                <div class='change' @click='change'>换一批</div>
            </div>

            <div class='labelBox'>
                <button v-for='item in labels' :key='item.num'
                 @click="$emit('send', item.text)"
                 class='label'
                >
                    {{item.text}}
                </button>
            </div>

            <div class='selfDefine'>
                <span >自定义</span>
                <input type='text' maxlength="12" class='input'
                 v-model='self'>
                <input type='radio' class='radio'
                 @click="selfDefine"
                 disabled='isDisable'>
            </div>

            <div class='btn' @click="$emit('unshow')">取消</div>
            <div class='btn' @click='sure'>确认</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tag',
  props: ['unshow', 'send', 'remove'],
  data () {
    return {
      isDisable: true,
      index: 0,
      labels: [
        { text: '可爱', num: 'one' },
        { text: '帅气', num: 'two' },
        { text: '勇敢', num: 'three' },
        { text: '聪明', num: 'four' },
        { text: '摸鱼', num: 'five' },
        { text: '佛系', num: 'six' }
      ],
      self: ''
    }
  },
  methods: {
    change: function () {
      // 再说吧
    },
    selfDefine: function () {
      this.isDisable = false
      $emit('delete')
    },
    sure: function () {
      if (self !== '') {
        this.$emit('delete')
        this.$emit('send', this.self)
      }
      this.$emit('unshow')
    }
  }
}
</script>

<style scoped>
  .page {
    position: fixed;
    top: -1vh;
    left: -1vw;
    z-index: 111;
    background: rgba(212, 211, 211, 0.8);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
  .whole {
    position: fixed;
    left: 6.94vw;
    top: 25.94vh;
    width: 83.33vw;
    height: 45vh;
    border: 1px solid rgb(121,121,121);
    background: #ffffff;
    border-radius: 25px;
    font-size: 3.89vw;
    opacity: 1;
  }

  /*第一行*/
  .word {
    float: left;
    position: relative;
    top: 5vh;
    left: 5vw;
  }
  .change {
    float: right;
    position: relative;
    width: 15vw;
    top: 5vh;
    left: -5vw;
    border: 1px solid rgb(121,121,121);
    border-radius: 10px;
  }

  /*可选标签*/
  .labelBox {
    position: relative;
    width: 79vw;
    height: 20vh;
    top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    margin-left: 2vw;
  }
  .label {
    width: 19.72vw;
    height: 5.94vh;
    border: 1px solid rgb(121,121,121);
    background: #ffffff;
    border-radius: 10px;
    text-align: center;
    line-height: 5.94vh;
    font-size: 3.89vw;
    margin-left: 3vw;
  }
  .label:focus {
    background: rgb(121,121,121);
    color: #ffffff;
  }
  /*自定义*/
  .selfDefine {
    position: relative;
    top: 5vh;
    left: 10vw;
  }
  .radio {
    width: 3vw;
    height: 3vw;
    margin-left: 1vw;
  }
  .input {
    width: 40vw;
    height: 3.9vh;
    outline: none;
    border: 1px solid rgb(121,121,121);
    background: #ffffff;
    margin-left: 5vw;
    font-size: 3.89vw;
  }

  /*确认*/
  .btn {
    position: relative;
    top: 8vh;
    left: 12vw;
    margin-left: 5vw;
    display: inline-block;
    text-align: center;
    line-height: 5.47vh;
    width: 20.83vw;
    height: 5.47vh;
    border: 1px solid rgb(121,121,121);
    border-radius: 10px;
  }
</style>
