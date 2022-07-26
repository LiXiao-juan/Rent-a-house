<template>
  <div>
    <van-search
    v-model="value"
    placeholder="请输入小区或地址"
    class="search"
    show-action
  >
  <template #label>
    <div @click="address" class="address">{{$store.state.city.label}}
    <van-icon name="arrow-down" /></div>
  </template>

   <template #action>
    <div class="round" @click="toMap">
      <van-icon name="location-o" />
    </div>
  </template>
</van-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    address () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 1500
      })
      this.$router.push({
        path: '/city'
      })
    },
    toMap () {
      this.$router.push('/map')
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
