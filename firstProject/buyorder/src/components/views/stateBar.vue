<template>
    <div id='stateBar'>
        <span v-for='item in states' :key='item.id' v-bind:id='item.id'
        v-bind:class='[{focus: item.isFocus}, {state: true}]' @click='changeState'>
            {{item.text}}
        </span>
        <div class='lineUnderState'></div>
    </div>
</template>

<script>
export default {
  name: 'stateBar',
  data () {
    return {
      states: [
        {
          text: '全部',
          id: 'buyAll',
          isFocus: true
        },
        {
          text: '交易中',
          id: 'buyMarketing',
          isFocus: false
        },
        {
          text: '可购买',
          id: 'buyAvailable',
          isFocus: false
        },
        {
          text: '已下架',
          id: 'buyNone',
          isFocus: false
        },
        {
          text: '已完成',
          id: 'buyDone',
          isFocus: false
        }
      ]
    }
  },
  methods: {
    changeState: function (e) {
      var thisId = e.target.id
      var arr = this.states
      arr.forEach(function (item) {
        item.isFocus = false
      })
      arr.forEach(function (item) {
        if (item.id === thisId) {
          item.isFocus = true
        }
      })
    }
  }
}
</script>

<style>
#stateBar {
  position: fixed;
  top: 0.6rem;
  left: 0;
  height: 0.4rem;
  font-family: "Arial Normal";
  margin: 0;
  padding: 0;
  width: 3.6rem;
  display: flex;
  justify-content: center;
  background: #ffffff;
}
.state {
  margin: 0.1rem auto 0;
  font-size: 0.16rem;
}
.focus {
  color: #28AEFA;
  border-bottom: 2px solid #28AEFA;
}
#ineUnderState {
  position: fixed;
  top: 1.0rem;
  left: 0.15rem;
  width: 3.3rem;
  border: 0.5px solid #28AEFA;
  margin: 0 auto;
  padding: 0;
}
</style>
