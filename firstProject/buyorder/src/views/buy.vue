<template>
    <div id="buy">
        <stateBar></stateBar>
        <ul id="content">
            <book v-for='(item,index) in orders' :key='index' v-bind:info='item'></book>
        </ul>
    </div>

</template>

<script>
import stateBar from '../components/views/stateBar.vue'
import book from './book.vue'
export default {
  name: 'buy',
  data () {
    return {
      orders: [
        {
          img: '../static/tanjirou.jpg',
          name: '头柱',
          price: '10000',
          status: 'available',
          btnV: 'purchase'
        },
        {
          img: '../static/lover.jpg',
          name: '蛇柱和恋柱',
          price: '10000',
          status: 'marketing',
          btnV: 'cancle'
        },
        {
          img: '../static/zenitsu.jpg',
          name: '睡柱',
          price: '10000',
          status: 'done',
          btnV: 'mark'
        }
      ]
    }
  },
  components: {
    stateBar, book
  }
}
</script>

<style>
    #content {
        position: relative;
        top: 1rem;
        margin: 0;
        display: grid;
        grid-template-rows: repeat(3, 1.7rem);
        z-index: 0;
        float: left
    }
</style>
