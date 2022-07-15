<template>
  <div>
    <!-- 搜索框 -->
  <div class="search">
    <Search></Search>
  </div>
<!-- 轮播图 -->
<van-swipe :autoplay="3000" indicator-color="#ccc">
  <van-swipe-item v-for="item in imgArr" :key="item.id">
    <img v-lazy="`http://liufusong.top:8080${item.imgSrc}`" />
  </van-swipe-item>
</van-swipe>

<!-- 首页导航 -->
<div class="main-nav">
  <div class="nav-item" >
    <!-- 上半区 -->
    <div class="round">
      <van-icon name="wap-home-o" />
    </div>
    <!-- 文本区 -->
    <p class="text">整租</p>
  </div>
  <div class="nav-item" >
    <!-- 上半区 -->
    <div class="round">
      <van-icon name="friends-o" />
    </div>
    <!-- 文本区 -->
    <p class="text">合租</p>
  </div>
  <div class="nav-item" >
    <!-- 上半区 -->
    <div class="round">
      <van-icon name="location-o" />
    </div>
    <!-- 文本区 -->
    <p class="text">地图找房</p>
  </div>
  <div class="nav-item" @click="goFn">
    <!-- 上半区 -->
    <div class="round">
      <van-icon name="home-o" />
    </div>
    <!-- 文本区 -->
    <p class="text" >去出租</p>
  </div>
</div>

<!-- main内容区域 -->
<Main></Main>

  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Main from '@/components/homeMain.vue'
import { home } from '@/api/home'
export default {
  data () {
    return {
      imgArr: [],
      value: ''
    }
  },
  async created () {
    try {
      const res = await home()
      this.imgArr = res.data.body
      // console.log(this.imgArr)
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    address () {},
    goFn () {
      this.$router.push({
        path: '/rent/add'
      })
    }

  },
  components: {
    Main,
    Search
  }
}
</script>

<style scoped lang="less">
.van-swipe-item {
    width: 100%;
    height: 424px;
    vertical-align: top;
    img{
    width: 100%;
    height: 424px;
    vertical-align: top;
    }
    // .van-swipe__indicator{
    //   width: 20px;
    //   height: 20px;
    // }
  }
.search{
    position: absolute;
    top: 15px;
    left: 35px;
    width:95%;
    z-index: 999;
    .address{
      margin-right: 10px;
    }
  }
.van-search{
    background-color:transparent;
    .round{
      width: 50px;
      height: 50px;
      border: 1px solid #fff;
      border-radius: 50%;
      text-align: center;
      .van-icon-location-o,
      .van-icon{
      color: #fff;
      font-size: 40px;
    }
    }
  }
.main-nav{
  display: flex;
  height: 244px;
  width: 100%;
  // background-color: tomato;
  .nav-item{
    flex: 1;
    .round{
      background-color: #f2fbf7;
      width: 120px;
      height: 120px;
      line-height: 144px;
      text-align: center;
      margin: 20px auto;
      border-radius: 50%;
      .van-icon{
        color: #29c05c;
        font-size: 70px;
      }
    }
    .text{
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>
