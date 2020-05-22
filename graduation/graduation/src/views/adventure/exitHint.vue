<template>
    <div class='hintPage'>
        <div class='hintBox'>
            <p>{{hint}}</p>
            <button class='hintBtn' @click="$router.push({path:'/mirror'})">
                返回星球
            </button>
            <button class='hintBtn' @click="$emit('again')">
                重新开始
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hint-pop',
  props: ['hint', 'again']
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
  height: 19.06vh;
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
.hintBtn {
  width: 20.83vw;
  height: 4.53vh;
  font-size: 4.2vw;
  border-radius: 5px;
  outline: none;
  background: white;
  box-shadow: none;
  border: 1px solid rgb(121, 121, 121);
}
</style>
