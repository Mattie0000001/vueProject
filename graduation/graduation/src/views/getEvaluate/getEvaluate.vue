<template>
  <div>
    <head-title :title="title">
      <template v-slot:right>
        <div>
        </div>
      </template>
    </head-title>
    <div class="from_wrap">
      From:{{evaluate.fakename}}
    </div>
    <div class="people_img">小人图片</div>
    <div class="evaluate_wrap" id="e1">{{evaluate.e1}}</div>
    <div class="evaluate_wrap" id="e2">{{evaluate.e2}}</div>
    <div class="evaluate_wrap" id="e3">{{evaluate.e3}}</div>
    <div class="evaluate_wrap" id="e4">{{evaluate.e4}}</div>
    <div class="evaluate_wrap" id="e5">{{evaluate.e5}}</div>
  </div>
</template>
<script>
import headTitle from '../../components/headTitle.vue'
export default {
  data () {
    return {
      title: '魔镜：评价',
      evaluate: {
        e1: '帅',
        e2: '帅',
        e3: '帅',
        e4: '帅',
        e5: '帅',
        fakename: '爱你'
      }
    }
  },
  components: {
    headTitle
  },
  created () {
    this.getEvaluate()
  },
  methods: {
    getEvaluate () {
      this.$axios.get(`/api/evaluate/rec/${this.$route.params.id}`)
        .then(res => {
          this.evaluate = res.data
        })
    }
  }
}
</script>
<style scoped>
.from_wrap {
  padding: 2vh 8vw;
  font-size: 6vw;
  font-weight: bold;
}
.people_img {
  border: 1px solid #666;
  width: 40vw;
  height: 30vh;
  margin: 20vh auto;
}
.evaluate_wrap {
  width: 20vw;
  height: 6vh;
  border: 1px solid #666;
  position: absolute;
}
#e1 {
  top: 25vh;
  left: 45vw;
  position: absolute;
}
#e1::before {
  content: "";
  position: absolute;
  height: 14vh;
  top: 100%;
  left: 70%;
  background-color: #666;
  width: 1px;
  transform-origin: top center;
  transform: rotate(30deg)
}
#e2 {
  top: 40vh;
  left: 5vw;
  position: absolute;
}
#e2::before {
  content: "";
  position: absolute;
  height: 14vh;
  top: 100%;
  left: 40%;
  background-color: #666;
  width: 1px;
  transform-origin: top center;
  transform: rotate(-60deg)
}
#e3 {
  top: 57vh;
  left: 75vw;
  position: absolute;
}
#e3::before {
  content: "";
  position: absolute;
  height: 14vh;
  top: 60%;
  background-color: #666;
  width: 1px;
  transform-origin: top center;
  transform: rotate(120deg)
}
#e4 {
  top: 80vh;
  left: 10vw;
  position: absolute;
}
#e4::before {
  content: "";
  position: absolute;
  height: 18vh;
  background-color: #666;
  width: 1px;
  left: 60%;
  transform-origin: top center;
  transform: rotate(-150deg)
}
#e5 {
  top: 73vh;
  left: 60vw;
  position: absolute;
}
#e5::before {
  content: "";
  position: absolute;
  height: 14vh;
  background-color: #666;
  width: 1px;
  left: 50%;
  transform-origin: top center;
  transform: rotate(140deg)
}
</style>
