<template>
  <div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item v-for="item in imgArr" :key="item.id">
    <img :src="item.imgSrc" alt="">
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
import { home } from '@/api/home'
export default {
  data () {
    return {
      imgArr: []
    }
  },
  async created () {
    try {
      const res = await home()
      this.imgArr = res.data.body
      console.log(this.imgArr)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
