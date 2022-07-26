<template>
  <div>
    <!-- 复用组件 -->
    <div class="body">
      <Header title="发布房源"></Header>
      <van-cell title="房源信息" style="color: #21b97a" />
      <van-cell
        title="小区名称"
        is-link
        :value="$store.state.community.communityName"
        @click="toSearch"
      />
      <van-field
        v-model="houseObj.price"
        name="price"
        label="租金"
        placeholder="请输入租金/月"
      >
        <template #extra> ￥/月 </template>
      </van-field>
      <van-field
        v-model="houseObj.size"
        name="size"
        value="内容"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #extra> m² </template>
      </van-field>
      <!-- 户型 -->
      <van-cell
        title="户型"
        is-link
        :value="roomValue"
        @click="showPicker = true"
      />
      <!-- 所在楼层 -->
      <van-cell
        title="所在楼层"
        is-link
        :value="floorValue"
        @click="showFloor = true"
      />
      <!-- 朝向 -->
      <van-cell
        title="朝向"
        is-link
        :value="orientedValue"
        @click="showLook = true"
        class="bd-none"
        :border="false"
      />

      <!-- 房屋标题 -->
      <van-cell value="房屋标题" />
      <van-field
        v-model="houseObj.title"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        :border="false"
      />
      <van-cell title="房屋图像" />

      <!-- 房屋图像 -->
      <van-field name="uploader" :border="false">
        <template #input>
          <van-uploader v-model="imgArr" :after-read="afterRead" />
        </template>
      </van-field>
      <!-- 房屋配置 -->
      <div class="house">
        <van-cell title="房屋配置" />
        <van-grid square :column-num="5" clickable :border="false">
          <van-grid-item
            v-for="(item, index) in houseSupList"
            :key="index"
            :text="item"
            @click="getSupport(item, index)"
            :ref="index"
          >
            <template #icon>
              <span
                :class="`iconfont icon-${
                  {
                    电视: 'dianshiji',
                    洗衣机: 'xiyiji',
                    宽带: 'kuandai',
                    热水器: 'reshuiqi',
                    床: 'shafa',
                    衣柜: 'yigui',
                    冰箱: 'bingxiang',
                    暖气: 'nuanqi-',
                    天然气: 'tianranqi',
                    空调: 'kongtiao'
                  }[item]
                }`"
              ></span>
            </template>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 房屋描述 -->
      <van-cell value="房屋描述" />
      <van-field
        v-model="houseObj.description"
        rows="7"
        size="large"
        autosize
        type="textarea"
        placeholder="请输入房屋描述信息"
      />

      <!-- 底部取消/提交按钮 -->
      <div class="flexbox-footer">
        <!-- 取消按钮 -->
        <div class="close-button" @click="closeBtn">取消</div>
        <!-- 提交按钮 -->
        <div class="success-button" @click="successBtn">提交</div>
      </div>
    </div>
    <!-- 户型弹出 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="roomKeys"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <!-- 户型弹出 /-->

    <!-- 楼层弹出 -->
    <van-popup v-model="showFloor" position="bottom">
      <van-picker
        show-toolbar
        :columns="floorsKeys"
        @confirm="floorFn"
        @cancel="showFloor = false"
      />
    </van-popup>
    <!-- 楼层弹出/ -->

    <!-- 朝向 -->
    <van-popup v-model="showLook" position="bottom">
      <van-picker
        show-toolbar
        :columns="orientedKeys"
        @confirm="lookFn"
        @cancel="showLook = false"
      />
    </van-popup>
    <!-- 朝向/ -->
  </div>
</template>

<script>
import { deployHouse, upHouseImage, pubHouse } from '@/api/house'
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      houseObj: {
        title: '',
        description: '',
        houseImg: '',
        oriented: '', // 朝向
        supporting: [],
        price: '',
        roomType: '', // 户型
        size: '',
        floor: '', // 所在楼层,
        community: ''
      },
      // 小区名
      cityValue: '',
      // 所在楼层
      floors: {},
      floorsKeys: [],
      floorValue: '请选择',
      showFloor: false,
      // 户型
      roomType: {},
      roomKeys: [],
      roomValue: '请选择',
      showPicker: false,
      // 朝向
      orientedType: {},
      orientedKeys: [],
      orientedValue: '请选择',
      showLook: false,
      // 房屋描述
      houseSupList: [],
      falg: false,
      imgArr: []
    }
  },
  methods: {
    // 户型
    onConfirm(value) {
      this.roomValue = value
      this.houseObj.roomType = this.roomType[value]
      this.showPicker = false
    },
    // 楼层
    floorFn(value) {
      this.floorValue = value
      this.houseObj.floor = this.floors[value]
      this.showFloor = false
    },
    // 朝向
    lookFn(value) {
      this.orientedValue = value
      this.houseObj.oriented = this.orientedType[value]
      this.showLook = false
    },
    // 房屋图像
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      const form = new FormData()
      form.append('file', file.file)
      try {
        const { data } = await upHouseImage(form)
        console.log(data)
        this.imgArr.push(data.body[0])
      } catch (error) {
        this.$toast.fail(error.message)
      }
    },
    // 取消按钮
    closeBtn() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '放弃发布房源?',
          confirmButtonColor: 'red',
          cancelButtonText: '继续编辑',
          cancelButtonColor: '#2c9bec'
        })
        .then(() => {
          // on confirm
          this.$router.push('/layout/home')
        })
        .catch(() => {
          // on cancel
        })
    },
    //  to搜索页
    toSearch() {
      this.$router.push('/rent/search')
    },
    // 房屋配置
    getSupport(val, ind) {
      // this.$el[ind].classList.toggle('color')
      console.log()
      const index = this.houseObj.supporting.indexOf(val)
      // 判断原数组中有没有该数据  有则删除 无则添加
      if (index === -1) {
        // this.index = ind
        this.houseObj.supporting.push(val)
        // this.$refs.ind.classList.toggle('color')
        // console.log(this.$refs)
      } else {
        this.houseObj.supporting.splice(index, 1)
      }
      console.log(this.houseObj.supporting)
    },

    // 提交按钮
    async successBtn() {
      // 将数组转换成字符串----传值
      this.houseObj.supporting = this.houseObj.supporting.join('|')
      this.houseObj.houseImg = this.imgArr.join('|')
      console.log(this.houseObj.houseImg)
      this.houseObj.community = this.$store.state.community.community
      try {
        const res = await pubHouse(this.houseObj)
        console.log(res)
        this.$dialog
          .confirm({
            title: '提示',
            message: '发布房源成功',
            confirmButtonText: '继续发布',
            confirmButtonColor: '#68b8f1',
            cancelButtonText: '去查看'
          })
          .then(() => {
            // on confirm
            this.router.push('/rent/add')
          })
          .catch(() => {
            this.$router.push('/rent')
          })
      } catch (error) {
        this.$toast.fail('发布房源失败')
      }
    }
  },
  async created() {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 100000
    })
    try {
      const { data } = await deployHouse()
      this.$toast.clear()
      console.log(data)
      // 楼层
      data.body.floor.forEach((item) => {
        this.floors[item.label] = item.value
      })
      this.floorsKeys = Object.keys(this.floors)
      // 户型
      data.body.roomType.forEach((item) => {
        this.roomType[item.label] = item.value
      })
      this.roomKeys = Object.keys(this.roomType)
      // 朝向
      data.body.oriented.forEach((item) => {
        this.orientedType[item.label] = item.value
      })
      this.orientedKeys = Object.keys(this.orientedType)
      // 配置----渲染
      data.body.supporting.forEach((item) => this.houseSupList.push(item.label))
    } catch (error) {
      this.$toast(error)
    }
    // console.log(this.$route.query)
  },
  computed: {}
}
</script>

<style scoped lang="less">
.color {
  color: #21b97a;
}
.body {
  background-color: #f9f9f9;
  padding-top: 1.22667rem;
  padding-bottom: 140px;
}
.house {
  margin-bottom: 40px;
}
.van-cell-group {
  font-size: 28px;
  :deep(.bd-none .van-cell::after) {
    border: none;
  }
}
.flexbox-footer {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 90px;
  z-index: 1;
  color: #fff;
  font-size: 30px;
  background-color: #fff;
  .close-button {
    flex: 1;
    color: #21b97a;
    height: 100%;
    line-height: 90px;
  }
  .success-button {
    flex: 1;
    background-color: #21b97a;
    color: #fff;
    height: 100%;
    line-height: 90px;
  }
}
.font-color {
  color: #21b97a;
}
</style>
