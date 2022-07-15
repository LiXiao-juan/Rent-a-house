<template>
<div>
<div class="group">
    <!-- header部分 -->
    <h3 class="title">租房小组
        <span class="more">更多</span>
    </h3>

    <!-- 内容部分 -->

    <van-grid :column-num="2">
        <van-grid-item v-for="item in groupArr" :key="item.id"  text="文字" >
        <div class="item">
            <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
        <div class="text">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        </div>
        </div>
        </van-grid-item>
    </van-grid>
</div>
</div>
</template>

<script>
import { groups } from '@/api/home'
export default {
  data () {
    return {
      groupArr: []
    }
  },
  async created () {
    try {
      const res = await groups()
      this.groupArr = res.data.body
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped lang="less">
.group{
    height: 376px;
    background-color: #f6f5f6;
    overflow: hidden;
    padding: 0 10px;
    padding-bottom: 40px;
    .title{
    position: relative;
    margin: 15px 0 15px 10px;
    font-size: 30px;
    .more{
    color: #787d82;
    position: absolute;
    right: 0;
    font-size: 28px;
    font-weight: 400;
    }
    }
}
.van-grid-item__content{
    .item{
        display: flex;
        img{
        width: 100px;
    }
    .text{
        padding-top: 30px;
        p{
        font-size: 25px;
        font-weight: 700;
    }
    }
    }
}
</style>
