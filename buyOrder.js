var stateBar= new Vue ({
    el: "#state_bar",
    data: {
        states: [
            {
                text: "全部",
                id: "buy_all",
                isFocus: true
            },
            {
                text: "交易中",
                id: "buy_marketing",
                isFocus: false
            },
            {
                text: "可购买",
                id: "buy_available",
                isFocus: false
            },
            {
                text: "已下架",
                id: "buy_none",
                isFocus: false
            },
            {
                text: "已完成",
                id: "buy_done",
                isFocus: false
            }
        ]
    },
    methods: {
        changeState: function(e) {
            var this_id = e.target.id;
            var states = this.states;
            states.forEach(function(item) {
                    item.isFocus = false
            });
            states.forEach(function(item) {
                if (item.id == this_id) {
                    item.isFocus = true;
                }
            })
        }
    }
 })

Vue.component('book', {
    props:['info'],
    template: `
    <li :class="info.status">
        <div class='first_column'>
            <img alt='图片丢了' :src="info.img">
        </div>
        <div class='details'>
            <span class='bookname'>{{info.name}}</span>
            <span class='price'>￥{{info.price}}</span>
            <span class='bookstate'>{{info.status}}</span>
            <input class='btn' type='button' :value="info.btnV">
        </div>
    </li>`
})

var content = new Vue({
    el: "#content",
    data: {
        orders: [
            {
                name: "蛇柱与恋柱",
                img: "img/lover.jpg",
                price: "1000",
                status: "available",
                btnV: "购买"
            },
            {
                name: "炭治郎",
                img: "img/tanjirou.jpg",
                price: "1000",
                status: "marketing",
                btnV: "取消" 
            },
            {
                name: "善逸",
                img: "img/zenitsu.jpg",
                price: "1000",
                status: "done",
                btnV: "评分"
            }
        ]
    }
})