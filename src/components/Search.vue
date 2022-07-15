<template>
  <div>
    <van-search
    v-model="value"
    placeholder="请输入小区或地址"
    class="search"
    show-action
  >
  <template #label>
    <div @click="address" class="address">杭州
    <van-icon name="arrow-down" /></div>
  </template>

   <template #action>
    <div class="round">
      <van-icon name="location-o" />
    </div>
  </template>
</van-search>
  </div>
</template>

<script>
import { getCityList } from '@/api/city'
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    async address () {
      try {
        const res = await getCityList()
        console.log(res)
        this.$router.push({
          path: '/city'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
