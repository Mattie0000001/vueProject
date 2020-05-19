<template>
    <div>
        <div class='hintBox'>
            <p>您已成功完成探险</p>
            <button class='hintBtn' @click="$router.push({ path: '/adventure' })">
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
  name: 'hint-pop'
}
</script>

<style scoped>
.hintBox {
  position: fixed;
  top: 39.06vh;
  left: 8.33vw;
  width: 83.3vw;
  height: 25vh;
  font-size: 4.2vw;
  border: 1px solid rgb(121, 121, 121);
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 2vw;
}
.hintBtn {
  width: 20.83vw;
  height: 4.53vh;
  font-size: 4.2vw;
  border-radius: 15px;
  outline: none;
  background: white;
  box-shadow: none;
  border: 1px solid rgb(121, 121, 121);
}
</style>
