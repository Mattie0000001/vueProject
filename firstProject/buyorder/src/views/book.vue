<template>
    <li class="book">
        <div class="firstColumn">
            <img alt="图片丢了" :src="info.img">
        </div>
        <div class="details">
            <span class="bookname">{{info.name}}</span>
            <span class="price">￥{{info.price}}</span>
            <span class="bookstate">{{info.status}}</span>
            <input class="btn" type="button" :value="info.btnV">
        </div>
    </li>
</template>

<script>
export default {
  name: 'book',
  props: ['info']
}
</script>

<style>
html {
  font-size: 100px;
}

li{
  width: 3rem;
  height: 1.7rem;
  margin: auto;
  margin-top: 0.1rem;
  list-style: none;
}

.firstColumn {
  width: 1.3rem;
  float: left;
}
img {
  height: 1.11rem;
  width: 1.11rem;
  font-size: 0.2rem;
}

.details {
  width: 1.7rem;
  float: right;
}
.details span, .details input{
  display: block;
  padding: 0;
  margin-left: 0;
  position: relative;
  top: -0.08rem;
}
.btn {
  float: left;
  height: 0.24rem;
  width: 0.6rem;
  border: 1px solid #28AEFA;
  border-radius: 5px;
  background: #28AEFA;
  color: #ffffff;
  font-size: 0.15rem;
  margin-right: 0.05rem;
  margin-top: 0.1rem;
  outline: none;
}

.bookname {
  font-size: 0.24rem;
  font-family: "黑体 bold";
  font-weight: 700;
  line-height: 0.4rem;
}
.price {
  font-size: 0.16rem;
  color: #FF0000;
  line-height: 0.3rem;
}
.bookstate {
  font-size: 0.14rem;
}

</style>
