<template>
  <div class="body">
    <!-- 复用组件 -->
    <Header title="城市列表"></Header>

    <!-- 城市列表 -->
    <van-index-bar :index-list="arr">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="$store.state.city.label" />
      <!-- ------------------------ -->
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell :title="item.label" v-for="item,index in hotList"
      :key="index" :clickable="true"/>
      <!-- 城市列表 -->
      <div v-for="item in ctList" :key="item.value">
        <van-index-anchor :index="item" />
        <van-cell
          :title="ele.label"
          v-for="ele in obj[item]"
          :key="ele.pinyin"
          @click="getCityName(ele)"
        :clickable="true"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, HotCity } from '@/api/city'
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      list: [],
      allList: [],
      obj: {},
      arr: [],
      hotList: []
    }
  },
  async created() {
    try {
      const res = await getCityList()
      const hot = await HotCity()
      this.hotList = hot.data.body
      // this.$store.commit('getCity', res.data.body)
      this.list = res.data.body
      this.list.forEach((item) => {
        if (this.obj[item.short[0].toUpperCase()]) {
          this.obj[item.short[0].toUpperCase()].push(item)
        } else {
          this.obj[item.short[0].toUpperCase()] = []
        }
      })
      // 获取所有的key
      this.list = Object.keys(this.obj)
      // 对key排序
      this.list = this.list.sort()

      this.arr = ['#', '热', ...this.list.sort()]
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getCity(arr) {
      this.list = arr
    },
    getCityName(obj) {
      console.log(obj)
      this.$store.commit('setCity', obj)
      this.$router.push('/layout/home')
    }
  },
  computed: {
    ctList() {
      return this.list
    }
  }
}
</script>

<style scoped lang="less">
.body {
  padding-top: 100px;
}
</style>
