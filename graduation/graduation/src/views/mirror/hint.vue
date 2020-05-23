<template>
    <div class='whole'>
        <div class='hintBox'>
            <img src='../../assets/mirror/back.png' class='exit' @click="$emit('hide')">
            <p class='big'>您已成功完成探险</p>
            <button class='hintBtn' @click='again'>
                再次开启旅程
            </button>
            <button class='hintBtn' @click="$router.push({ path: '/result' })">
                查看上次测评
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hint-pop',
  props: ['hide'],
  methods: {
    again: function () {
      localStorage.removeItem('personality')
      this.$router.push({ path: '/adventure' })
    }
  }
}
</script>

<style scoped>
.hintBox {
  position: fixed;
  top: 39.06vh;
  left: 13vw;
  width: 75vw;
  height: 25vh;
  font-size: 4.2vw;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-left: 2vw;
}
.big {
  font-size: 5vw;
  position: relative;
  top: -2vw;
}
.hintBtn {
  width: 30vw;
  height: 4.53vh;
  font-size: 4.2vw;
  border-radius: 5px;
  outline: none;
  background: white;
  box-shadow: none;
  border: 1px solid rgb(121, 121, 121);
}
.exit {
  position: relative;
  top: -1vw;
  left: 33vw;
  width: 5vw;
  height: 5vw;
}
</style>
