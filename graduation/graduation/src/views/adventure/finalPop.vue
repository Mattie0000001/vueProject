<template>
    <div class='background'>
        <div class='finalBox'>
            <p>你完成了所有的探险，即将抵达终点<br>准备好迎接终点的宝藏了吗</p>
            <button class='hintBtn' @click="$emit('gotoFinal')">
                前进
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'final-pop',
  props: ['gotoFinal']
}
</script>

<style scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 12;
  background: rgba(241, 241, 241,0.8);
}
.finalBox {
  position: fixed;
  top: 39.06vh;
  left: 8.33vw;
  width: 83.3vw;
  height: 25vh;
  font-size: 4.2vw;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 2vw;
  text-align: center;
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
