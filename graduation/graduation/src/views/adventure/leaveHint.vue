<template>
    <div class='hintPage'>
        <div class='hintBox'>
            <p>真的要提前终止旅程吗？</p>
            <p class='diffColor'>（放弃探险将失去专属测评和色彩值奖励）</p>
            <button class='hintBtn' @click="$emit('hide')">继续探险</button>
            <button class='hintBtn' @click="$router.push({ path: '/mirror' })">
                忍痛离开
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'leave-pop',
  props: ['hide']
}
</script>

<style scoped>
.hintPage {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 12;
  background: rgba(241, 241, 241,0.8);
}
.hintBox {
  position: fixed;
  top: 39.06vh;
  left: 8.33vw;
  width: 83.3vw;
  height: 25vh;
  font-size: 4.2vw;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 2vw;
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
.diffColor {
  color: #949494;
}
</style>
