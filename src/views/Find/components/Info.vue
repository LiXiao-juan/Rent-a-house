<template>
  <div>
    <!-- 户型区域 -->
    <van-cell title="户型" :border="false" class="title" />
    <div class="paddbox">
      <van-row>
        <van-col
          span="12"
          v-for="(item, index) in roomType"
          :key="index"
          class="margin-box"
          :class="{ choose: roomTypeArr.includes(item.value) }"
          @click="typeBtn(item.value, item)"
          >{{ item.label }}</van-col
        >
      </van-row>
    </div>

    <!-- 朝向区域 -->
    <van-cell title="朝向" :border="false" class="title" />
    <div class="paddbox">
      <van-row>
        <van-col
          span="12"
          v-for="(item, index) in oriented"
          :key="index"
          class="margin-box"
          :class="{ choose: orientedArr.includes(item.value) }"
          @click="orientedBtn(item.value, item)"
          >{{ item.label }}</van-col
        >
      </van-row>
    </div>

    <!-- 楼层区域 -->
    <van-cell title="楼层" :border="false" class="title" />
    <div class="paddbox">
      <van-row>
        <van-col
          span="12"
          v-for="(item, index) in floor"
          :key="index"
          class="margin-box"
          :class="{ choose: floorArr.includes(item.value) }"
          @click="floorBtn(item.value, item)"
          >{{ item.label }}</van-col
        >
      </van-row>
    </div>

    <!-- 房屋亮点区域 -->
    <van-cell title="房屋亮点" :border="false" class="title" />
    <div class="paddbox">
      <van-row>
        <van-col
          span="12"
          v-for="(item, index) in characteristic"
          :key="index"
          class="margin-box"
          :class="{ choose: lightspotArr.includes(item.value) }"
          @click="lightspotBtn(item.value, item)"
          >{{ item.label }}</van-col
        >
      </van-row>
    </div>

    <!-- 底部按钮 -->
    <footer class="footer">
      <!-- 清除按钮 -->
      <div class="clear" @click="clear">清除</div>

      <!-- 确认 -->
      <div class="confirm" @click="confirm">确认</div>
    </footer>
  </div>
</template>

<script>
import { queryHouse } from '@/api/house'
export default {
  data() {
    return {
      roomType: [],
      oriented: [],
      floor: [],
      characteristic: [],
      roomTypeArr: [], // 用于储存多选
      orientedArr: [], // 用于储存多选
      floorArr: [], // 用于储存多选
      lightspotArr: [] // 用于储存多选
    }
  },
  props: {
    obj: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    // 户型
    typeBtn(val) {
      this.addChooseFn(this.roomTypeArr, val)
    },
    // 朝向
    orientedBtn(val, n) {
      this.addChooseFn(this.orientedArr, val)
    },
    // 楼层
    floorBtn(val, n) {
      this.addChooseFn(this.floorArr, val)
    },
    // 亮点
    lightspotBtn(val, n) {
      this.addChooseFn(this.lightspotArr, val)
    },

    // 封装多选添加方法-----便于调用
    addChooseFn(name, val) {
      // 判断新数组中是否存在---有则删  无则加
      const index = name.findIndex((item) => item === val)
      if (index !== -1) {
        name.splice(index, 1)
      } else {
        name.push(val)
      }
      console.log(name)
    },

    // 清除
    clear() {
      this.roomTypeArr = [] // 用于储存多选
      this.orientedArr = [] // 用于储存多选
      this.floorArr = [] // 用于储存多选
      this.lightspotArr = [] // 用于储存多选
    },
    // 确认
    async confirm() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 4000
      })
      // 转换成字符串
      const str = [
        ...this.roomTypeArr,
        ...this.orientedArr,
        ...this.floorArr,
        ...this.lightspotArr
      ].join(',')
      console.log(str)
      try {
        const { data } = await queryHouse({
          cityId: this.$store.state.city.value,
          more: str
        })
        this.$toast.clear()
        this.$emit('close', data.body.list)
      } catch (error) {}
    }
  },
  created() {
    this.roomType = this.obj.roomType
    this.oriented = this.obj.oriented
    this.floor = this.obj.floor
    this.characteristic = this.obj.characteristic
    console.log(this.obj)
  }
}
</script>

<style scoped lang="less">
.title {
  font-size: 30px;
}
.paddbox {
  padding: 0px 100px;
  .van-row {
    .van-col--12 {
      height: 64px;
      width: 140px;
      border: 1px solid #ddd;
      line-height: 64px;
      text-align: center;
      font-size: 12px;
      margin-bottom: 20px;
      color: #aaa;
      margin-left: 20px;
    }
    .choose {
      color: #21b97a !important;
      border: 1px solid #21b97a;
    }
  }
}
.footer {
  position: fixed;
  display: flex;
  bottom: 0px;
  height: 100px;
  width: 100%;
  border: 1px solid #ccc;
  font-size: 36px;
  .clear {
    flex: 1;
    text-align: center;
    background-color: #fff;
    color: #21b97a;
  }

  .confirm {
    flex: 2;
    text-align: center;
    background-color: #21b97a;
    color: #fff;
  }
}
</style>
