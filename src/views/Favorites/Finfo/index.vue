<template>
  <div class="body">
    <Header :title="housesj?.community"></Header>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in housesj.houseImg" :key="index">
        <img
          :src="'http://liufusong.top:8080' + item"
          alt=""
          width="100%"
          height="210px"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="der">
      <h3>{{ housesj.title }}</h3>
      <div class="dit">
        <span v-for="(item, index) in housesj.tags" :key="index">{{
          item
        }}</span>
      </div>
      <!-- -------------------------------------- -->
      <div class="HouseDetail">
        <div class="am-flexbox">
          <span class="chid">{{ housesj.price }}</span
          ><span class="yu">/月</span>
          <div>租金</div>
        </div>
        <div class="am-flexbox">
          <span class="chid">{{ housesj.roomType }}</span>
          <div>房型</div>
        </div>
        <div class="am-flexbox">
          <span class="chid">{{ housesj.size }}</span>
          <div>面积</div>
        </div>
      </div>
      <div class="am">
        <div class="am-item">
          <div class="am-xx"><span class="am-ms">装修:</span>精装</div>
          <div><span class="am-ms">楼层:</span>{{ housesj.floor }}</div>
        </div>
        <div class="am-item">
          <div
            class="am-xx"
            v-for="(item, index) in housesj.oriented"
            :key="index"
          >
            <span class="am-ms">朝向:</span>{{ item }}
          </div>
          <div><span class="am-ms">类型:</span>普通住宅</div>
        </div>
      </div>
      <div class="dtu">
        <div class="dtu-title">小区：<span>天山星城</span></div>
        <div class="dtu-tu">
          <baidu-map class="bm-view" center="北京"> </baidu-map>
        </div>
      </div>

      <div class="hous">
        <h3 class="hous-title">房屋配套</h3>

        <van-grid :column-num="5">
          <van-grid-item
            v-for="item in housesj.supporting"
            :key="item"
            :text="item"
          >
            <template #icon>
              <span
                :class="`iconfont icon-${
                  {
                    电视: 'dianshiji',
                    洗衣机: 'xiyiji',
                    宽带: 'kuandai',
                    热水器: 'reshuiqi',
                    沙发: 'shafa',
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
      <div class="hous-set">
        <h3 class="hous-title">房源概况</h3>
        <div>
          <div class="hous-fz">
            <div class="hous-fzxx">
              <img src="http://liufusong.top:8080/img/avatar.png" alt="头像" />
              <div class="xx">
                <p>王女士</p>
                <p class="red">已认证房主</p>
              </div>
            </div>
            <van-button plain hairline size="small" type="primary"
              >发信息</van-button
            >
          </div>
          <div class="hous-content">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
      </div>
      <div class="HouseDetail_recommend__1L7WT">
        <div class="HouseDetail_houseTitle__3dg6k">猜你喜欢</div>
        <div class="HouseDetail_items__1nCaB">
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa">
              <img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/1.png"
                alt=""
              />
            </div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">安贞西里 3室1厅</h3>
              <div class="HouseItem_desc__5-mp4">72.32㎡/南 北/低楼层</div>
              <div>
                <span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD"
                  >随时看房</span
                >
              </div>
              <div class="HouseItem_price__1_r8v">
                <span class="HouseItem_priceNum__RGpsE">4500</span> 元/月
              </div>
            </div>
          </div>
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa">
              <img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/2.png"
                alt=""
              />
            </div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">天居园 2室1厅</h3>
              <div class="HouseItem_desc__5-mp4">83㎡/南/高楼层</div>
              <div>
                <span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD"
                  >近地铁</span
                >
              </div>
              <div class="HouseItem_price__1_r8v">
                <span class="HouseItem_priceNum__RGpsE">7200</span> 元/月
              </div>
            </div>
          </div>
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa">
              <img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/3.png"
                alt=""
              />
            </div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">角门甲4号院 1室1厅</h3>
              <div class="HouseItem_desc__5-mp4">52㎡/西南/低楼层</div>
              <div>
                <span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD"
                  >集中供暖</span
                >
              </div>
              <div class="HouseItem_price__1_r8v">
                <span class="HouseItem_priceNum__RGpsE">4300</span> 元/月
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yyy"></div>
      <div class="HouseDetail_fixedBottom__3qos1">
        <div class="am-flexbox-item" @click="shoc">
          <van-icon :name="isFavorite ? 'star' : 'star-o'" />
          <span class="HouseDetail_favorite__3hYRk">收藏</span>
        </div>
        <div class="am-flexbox-item">在线咨询</div>
        <div class="am-flexbox-item">
          <a href="tel:400-618-4000" class="HouseDetail_telephone__yGu1I"
            >电话预约</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import { detail } from '@/api/my'
import { addSc, deleteSc, shoc } from '@/api/user'
export default {
  created() {
    this.getFw()
    this.shocw()
  },
  data() {
    return {
      housesj: [],
      isFavorite: true
    }
  },
  methods: {
    async getFw() {
      try {
        const res = await detail(this.$store.state.houseId) // 问题
        this.housesj = res.data.body
        console.log(this.housesj)
      } catch (err) {
        console.log(err)
      }
    },
    async shoc() {
      try {
        if (this.isFavorite === false) {
          const res = await addSc(this.$store.state.houseId)
          this.shocw()
          console.log(res)
        } else {
          const res = await deleteSc(this.$store.state.houseId)
          this.shocw()
          console.log(res)
        }
      } catch (err) {
        this.$toast.fail(err.message)
      }
    },
    async shocw() {
      const res = await shoc(this.$route.params.id)
      this.isFavorite = res.data.body.isFavorite
      console.log(res)
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
.body {
  font-size: 28px;
  .der {
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
    .h3 {
      font-weight: 400;
      font-size: 32px;
      color: #333;
    }
    .dit {
      span {
        color: #39becd;
        background: #e1f5f8;
      }
    }
    .HouseDetail {
      display: flex;
      box-sizing: border-box;
      flex: 1 1;
      border-top: 2px solid #cecece;
      border-bottom: 2px solid #cecece;
      margin: 30px 0;
      padding: 30px 0;
      .am-flexbox {
        text-align: center;
        color: #999;
        width: 2200px;
        height: 104px;
        margin-left: 20px;
        .yu {
          color: #fa5741;
        }
        .chid {
          color: #fa5741;
          font-size: 36px;
          font-weight: bolder;
        }
      }
    }
    .am {
      display: flex;
      text-align: left;
      width: 690px;
      height: 104px;
      .am-item {
        width: 336px;
        .am-xx {
          margin-bottom: 10px;
        }
      }
      .am-ms {
        color: #999;
        padding-right: 10px;
      }
    }
    .dtu {
      .dtu-tu {
        width: 720px;
        height: 290px;
        background-color: red;
      }
    }
    .hous-title {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 20px;
      padding: 30px 0;
      border-bottom: 2px solid #cecece;
    }
    .hous {
      margin-bottom: 20px;
      padding: 0 20px;
      background: #fff;
      .hous-list {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        .hous-li {
          margin: 20px 0;
          width: 140px;
          line-height: 46px;
          .van-icon {
            font-size: 46px;
          }
        }
      }
    }
    .hous-set {
      .hous-fz {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .hous-fzxx {
          display: flex;
          align-items: center;
          height: 124px;
          img {
            width: 104px;
            height: 104px;
            margin: 20px 20px 0 0;
          }
          .xx {
            padding: 20px 0 0 10px;
            box-sizing: border-box;
            .red {
              color: red;
            }
          }
        }
        /deep/.van-button--hairline {
          margin-top: 40px;
        }
      }
      .hous-content {
        line-height: 1.6;
        padding: 20px 0;
        color: #333;
      }
    }
    .HouseDetail_recommend__1L7WT {
      margin: 20px 0 0;
      padding: 0 30px;
      background: #fff;
      .HouseDetail_houseTitle__3dg6k {
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 20px;
        padding: 30px 0;
        border-bottom: 2px solid #cecece;
      }
      .HouseItem_house__29lYP {
        height: 240px;
        position: relative;
        box-sizing: border-box;
        justify-content: space-around;
        padding-top: 36px;
        border-bottom: 2px solid #e5e5e5;
        .HouseItem_imgWrap__3ZPoa {
          float: left;
          width: 212px;
          height: 160px;
          .HouseItem_img__1BaJK {
            width: 212px;
            height: 160px;
          }
        }
        .HouseItem_content__1gVhj {
          overflow: hidden;
          line-height: 44px;
          padding-left: 24px;
          .HouseItem_title__2dXar {
            margin: 0;
            font-size: 30px;
            color: #394043;
          }
          .HouseItem_desc__5-mp4 {
            font-size: 24px;
            color: #afb2b3;
          }
          .HouseItem_tag1__3VDnD {
            color: #39becd;
            background: #e1f5f8;
          }
          .HouseItem_tag__3MxYv {
            display: inline-block;
            font-size: 24px;
            border-radius: 6px;
            padding: 8px 10px;
            margin-right: 10px;
            line-height: 24px;
          }
          .HouseItem_price__1_r8v {
            font-size: 24px;
            color: #fa5741;
            .HouseItem_priceNum__RGpsE {
              font-size: 32px;
              font-weight: bolder;
            }
          }
        }
      }
    }
    .yyy {
      height: 70px;
    }
    .HouseDetail_fixedBottom__3qos1 {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      flex: 1, 1;
      width: 100%;
      height: 100px;
      border-top: 2px solid #cecece;
      text-align: center;
      font-size: 34px;
      color: #999;
      line-height: 100px;
      background-color: #fff;
      .am-flexbox-item {
        border-right: 2px solid #e8e8e9;
        width: 248px;
        .van-icon {
          width: 32px;
          height: 32px;
        }
      }
      .am-flexbox-item:last-child {
        background-color: #21b97a;
      }
      .HouseDetail_telephone__yGu1I {
        color: #fff;
      }
    }
  }
  .bm-view {
    width: 100%;
    height: 300px;
  }
}
</style>
