<template>
    <div class='leading'>
        <p class='words'>
            开始了，开始了，<br>梯仔的旅行开始了<br>返回键是不可能有的，<br>你已经莫得退路了~
            <br>来啊~快活啊~
        </p>

        <button @click="$router.push({ path: '/mainPage' })" class='btn'>
            开启我的专属星球
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .leading {
    text-align: center;
    position: fixed;
  }
  .words {
    font-size: 4.5vw;
    position: relative;
    top: 30vw;
    width: 90vw;
    margin-left: 5vw;
    line-height: 8vw;
  }
  .btn {
    font-size: 4vw;
    position: relative;
    top: 80vw;
    text-align: center;
    line-height: 6vh;
    width: 40vw;
    height: 6vh;
    background: inherit;
    border: 1px solid rgb(121,121,121);
    border-radius: 10px;
  }
</style>
