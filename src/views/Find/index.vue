<template>
  <div>
    <div class="header">
          <!-- 搜索框 -->
          <van-icon name="arrow-left" @click="backFn"/>
        <Search></Search>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
    backFn () {
      this.$router.back()
    }
  },
  components: {
    Search
  }
}
</script>

<style scoped lang="less">
.header{
  background-color: #21b97a;
  height: 100px;
  display: flex;
  .van-icon-arrow-left{
    margin-top: 27px;
    font-size: 50px;
    margin-left: 20px;
    color: #fff;
  }
}
</style>
