<template>
  <div class="body">
    <div class="header">
      <!-- 搜索框 -->
      <van-icon name="arrow-left" @click="backFn" />
      <Search class="abs"></Search>
      <div></div>
      <div>
        <!-- 下拉菜单栏 -->
        <van-dropdown-menu active-color="#21b97a">
          <!-- 区域部分 -->
          <van-dropdown-item title="区域" ref="box">
            <van-picker
              show-toolbar
              :columns="area"
              value-key="label"
              :loading="loading"
              @confirm="areaConfirm"
            />
          </van-dropdown-item>

          <!-- 方式区域 -->
          <van-dropdown-item title="方式" ref="box1">
            <van-picker
              show-toolbar
              :columns="way"
              value-key="label"
              @confirm="wayConfirm"
            />
          </van-dropdown-item>

          <!-- 租金区域 -->
          <van-dropdown-item title="租金" ref="box2">
            <van-picker
              show-toolbar
              value-key="label"
              :columns="price"
              @confirm="priceConfirm"
            />
          </van-dropdown-item>

          <!-- 筛选区域 -->
          <van-dropdown-item title="筛选" @open="show = true" :overlay="false">
          </van-dropdown-item>
        </van-dropdown-menu>
        <van-popup
          v-model="show"
          position="right"
          :style="{ height: '100%', width: '80%' }"
          z-index="9"
        >
          <!-- 筛选内部 -->
          <Info :obj="res" @close="closeFn"></Info>
          <!-- 筛选内部/ -->
        </van-popup>

        <!-- 列表区域 -->
        <van-cell-group>
          <van-cell
            v-for="(item, index) in houseList"
            :key="index"
            @click="toDetails(item.houseCode)"
          >
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
                <span class="address">{{ item.tags[0] }}</span>
                <div class="much" style="color: red">{{ item.price }}元/月</div>
              </div>
            </div>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import Info from './components/Info.vue'
import { getRegion } from '@/api/find'
import { queryHouse } from '@/api/house'
import Search from '@/components/Search.vue'
export default {
  name: 'Find',
  data() {
    return {
      area: [],
      way: [],
      price: [],
      show: false,
      loading: true,
      res: {},
      areaStr: '', // 区域
      wayStr: '', // 方式
      priceStr: '', // 租金
      houseList: []
    }
  },
  async created() {
    this.getData()
    this.request({
      cityId: this.$store.state.city.value
    })
  },
  methods: {
    async getData() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 10000
      })
      try {
        const { data } = await getRegion(this.$store.state.city.value)
        console.log(data)
        // 方式部分
        this.way = data.body.rentType
        // 价格部分
        this.price = data.body.price
        // 区域筛选
        data.body.subway.children[0].children = [
          {
            label: '',
            value: 'null'
          }
        ]
        data.body.area.children[0].children = [
          {
            label: '',
            value: 'null'
          }
        ]
        // 赋值给区域筛选的数组
        this.area = [data.body.area, data.body.subway]
        // console.log(this.area)
        this.res = data.body
        this.loading = false
        this.$toast.clear()
      } catch (error) {}
    },
    backFn() {
      this.$router.go(-1)
    },
    onConfirm() {
      this.$refs.item.toggle()
    },

    // 自定义事件----发送获取列表的请求
    async request(params) {
      try {
        const { data } = await queryHouse(params)
        this.houseList = data.body.list
        this.$toast.clear()
      } catch (error) {}
    },

    // 区域
    areaConfirm(val, index) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 4000
      })
      this.areaStr =
        this.res.area.children[index[0]].children[index[1]].children[index[2]]

      this.areaStr = this.areaStr.value
      this.request({
        cityId: this.$store.state.city.value,
        area: this.areaStr
      })

      // 调用关闭下拉方法
      this.$refs.box.toggle()
    },
    // 方式
    wayConfirm(val, index) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 4000
      })
      this.wayStr = this.way[index].value
      this.request({
        cityId: this.$store.state.city.value,
        rentType: this.wayStr
      })
      // 调用关闭下拉方法
      this.$refs.box1.toggle()
    },
    // 租金
    priceConfirm(val, index) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 4000
      })
      this.priceStr = this.price[index].value

      this.request({
        cityId: this.$store.state.city.value,
        price: this.priceStr
      })
      // 调用关闭下拉方法
      this.$refs.box2.toggle()
    },
    // 关闭弹框事件
    closeFn(arr) {
      this.houseList = arr
      this.show = false
    }
  },
  components: {
    Search,
    Info
  }
}
</script>

<style scoped lang="less">
.body {
  padding-top: 100px;
  padding-bottom: 95px;
  .header {
    position: fixed;
    top: 0;
    background-color: #21b97a;
    height: 100px;
    width: 100%;
    line-height: 100px;
    .abs {
      position: absolute;
      z-index: 9;
      top: 0px;
      left: 60px;
    }
    .van-icon-arrow-left {
      margin-top: 27px;
      font-size: 50px;
      margin-left: 20px;
      color: #fff;
    }
  }
}
.enjoy {
  display: flex;
  .box {
    margin-left: 25px;
    :deep(.title) {
      margin: 0;
      // font-size: 20px;
      color: #394043;
    }
    .info {
      font-size: 12px;
      color: #afb2b3;
    }
    .address {
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 10px;
      margin-right: 5px;
      line-height: 12px;
      color: #39becd;
      background: #e1f5f8;
    }
    .much {
      font-size: 20px !important;
      font-weight: bolder;
    }
  }
}
</style>
