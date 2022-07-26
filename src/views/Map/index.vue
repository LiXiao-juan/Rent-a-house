<template>
  <div class="body">
    <!-- 头部组件 -->
    <Header title="地图找房"></Header>
    <baidu-map
      class="bm-view"
      :center="city"
      dragging
      scroll-wheel-zoom
      pinch-to-zoom
      :zoom="zoom"
      auto-resize
      map-click
      high-resolution
    >
      <bm-label
        v-for="(item, index) in coordinates"
        :key="index"
        :content="item.label"
        :position="{ lng: item.coord.longitude, lat: item.coord.latitude }"
        :labelStyle="{
          color: '#21b97a',
          fontSize: '16px',
          border: '#21b97a'
        }"
        offset="30px"
        @click="toCityBtn(item.value)"
      ></bm-label>
      <!-- 比例尺 -->
      <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
      <!-- 缩放组件 -->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import { getHouseData } from '@/api/map'
export default {
  data() {
    return {
      city: this.$store.state.city.label || '深圳',
      coordinates: [],
      zoom: 9 // 坐标
    }
  },
  components: {
    Header
  },
  created() {
    console.log(this.$store.state.city.label)
    this.getHouseData(this.$store.state.city.value)
  },
  methods: {
    // 请求房屋数据
    async getHouseData(id) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const { data } = await getHouseData(id)
        this.coordinates = data.body
        this.city =
          {
            lng: data.body[0].coord.longitude,
            lat: data.body[0].coord.latitude
          } || this.$store.state.city.label
        console.log(this.city)
      } catch (error) {
        this.$toast.fail('获取地图失败')
      }
    },
    toCityBtn(id) {
      this.getHouseData(id)
      this.zoom += 2
    }
  }
}
</script>

<style scoped lang="less">
.body {
  padding-top: 93px;
  .bm-view {
    width: 100%;
    height: 1530px;
    flex: 1;
  }
}
</style>
