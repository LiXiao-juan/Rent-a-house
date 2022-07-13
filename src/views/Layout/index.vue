<template>
  <div>
    <!-- 二级路由 -->
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <van-tabbar  route class="tabbar" fixed>
        <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/layout/find" icon="search">找房</van-tabbar-item>
        <van-tabbar-item replace to="/layout/news" icon="newspaper-o">资讯</van-tabbar-item>
        <van-tabbar-item replace to="/layout/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.tabbar{
    .van-tabbar-item--active{
        color: #00bc4e;
    }
}
</style>
