<template>
  <div>
    <Header title="房屋管理"></Header>
<van-cell-group>
  <van-cell v-for="(item,index) in fList" :key="index">
    <!-- 左边图片 -->
    <div class="enjoy">
      <van-image
      width="100"
      height="80"
      lazy-load
      :src="`http://liufusong.top:8080${item.houseImg}`"
/>
 <!-- 右边信息 -->
    <div class="box">
      <h3 class="title">{{ item.price }}</h3>
      <p class="info">{{ item.desc }}</p>
      <span class="address">{{ item.tags[0]}}</span>
      <div class="much" style="color:red">{{ item.price }}元/月</div>
    </div>
    </div>

  </van-cell>
</van-cell-group>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import { rent } from '@/api/my.js'
export default {
  data () {
    return {
      fList: []
    }
  },
  components: {
    Header
  },
  async created () {
    try {
      const res = await rent(this.$store.state.token)
      this.fList = res.data.body
      console.log(this.fList)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.navbar1{
    background-color: #21b97a;
   :deep(.van-nav-bar__title){
    color: #fff;
    }
    :deep(.van-icon){
        color: #fff;
    }
    :deep(.van-nav-bar__title){
      font-size: 30px;
    }
}
.enjoy{
  display: flex;
  .box{
    margin-left: 25px;
:deep(.title) {
    margin: 0;
    // font-size: 20px;
    color: #394043;
}
.info{
  font-size: 12px;
    color: #afb2b3;
}
.address{
  display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    padding: 10px;
    margin-right: 5px;
    line-height: 12px;
    color: #39becd;
    background: #e1f5f8;
}
.much{
    font-size:20px !important;
    font-weight: bolder
}
  }

}
</style>
