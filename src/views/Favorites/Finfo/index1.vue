<template>
  <div class="body">
    <!-- 头部 -->
    <Header :title="houseObj.title"></Header>
    <!-- 图片预览区域 -->
    <van-image
    height="252px"
    width="100%"
    src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <!-- main-info -->
    <div class="main-info color">
        <!-- 价格区域 -->
    <h3 class="price">3000</h3>
    <span class="address">跌</span>
    <van-divider />
    <!-- 详情信息 -->
    <div class="info-house color">
        <div>
            <p>2000/月</p>
            <span>租金</span>
        </div>
        <div>
            <p>四室+</p>
            <span>房型</span>
        </div>
        <div>
            <p>100平米</p>
            <span>面积</span>
        </div>
    </div>
    <van-divider />

    <!-- 详细 -->
    <div class="minute color">
    <!-- 左盒子 -->
    <div>
        <div class="into">
            <span class="into1">装修：</span> <span>精装</span>
        </div>
        <div class="into">
            <span class="into1">楼层：</span> <span>高楼层</span>
        </div>
    </div>
    <!-- 右盒子 -->
    <div>
        <div class="into">
            <span class="into1">朝向：</span> <span>北</span>
        </div>
        <div class="into">
            <span class="into1">类型：</span> <span>普通住宅</span>
        </div>
    </div>
    </div>

    <!-- 地图--房屋 -->
    <div class="map-house color">

    </div>

    <!-- 房屋概述 -->
    <div>
        <Title title="房源概括"></Title>
        <div class="main-info"></div>
    </div>

      <div class="HouseDetail_recommend__1L7WT">
        <div class="HouseDetail_houseTitle__3dg6k">猜你喜欢</div>
        <div class="HouseDetail_items__1nCaB">
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa"><img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/1.png"
                alt=""
              ></div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">安贞西里 3室1厅</h3>
              <div class="HouseItem_desc__5-mp4">72.32㎡/南 北/低楼层</div>
              <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">随时看房</span></div>
              <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">4500</span> 元/月</div>
            </div>
          </div>
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa"><img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/2.png"
                alt=""
              ></div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">天居园 2室1厅</h3>
              <div class="HouseItem_desc__5-mp4">83㎡/南/高楼层</div>
              <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">近地铁</span></div>
              <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">7200</span> 元/月</div>
            </div>
          </div>
          <div class="HouseItem_house__29lYP">
            <div class="HouseItem_imgWrap__3ZPoa"><img
                class="HouseItem_img__1BaJK"
                src="http://liufusong.top:8080/img/message/3.png"
                alt=""
              ></div>
            <div class="HouseItem_content__1gVhj">
              <h3 class="HouseItem_title__2dXar">角门甲4号院 1室1厅</h3>
              <div class="HouseItem_desc__5-mp4">52㎡/西南/低楼层</div>
              <div><span class="HouseItem_tag__3MxYv HouseItem_tag1__3VDnD">集中供暖</span></div>
              <div class="HouseItem_price__1_r8v"><span class="HouseItem_priceNum__RGpsE">4300</span> 元/月</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
        <div @click="enjoy">
            <van-icon name="star" ref="icon"/>
            收藏
        </div>
        <div>在线咨询</div>
        <div class="phone">电话预约</div>
    </footer>
  </div>
</template>

<script>
import Title from './component/title.vue'
import Header from '@/components/header.vue'
import { detail } from '@/api/my'
export default {
  data () {
    return {
      houseObj: {
        title: ''
      },
      icon: ['']
    }
  },
  name: 'Finfo',
  async created () {
    const houseId = this.$store.state.houseId
    const { data } = await detail(houseId)
    this.houseObj.title = data.body.community
  },
  components: {
    Header,
    Title
  },
  methods: {
    enjoy () {
      this.$refs.icon.classList.toggle('icon-color')
    }
  }
}
</script>

<style scoped lang="less">
.body{
    padding-top:100px;
    background-color: #ccc;
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
    .main-info{
        padding: 30px;
        .price{
        font-weight: 400;
        font-size: 32px;
        color: #333;
        }
        .minute{
            display: flex;
            height: 104px;
            width: 100%;
            // background-color: red;
            div{
                height: 80%;
                width: 100%;
                flex: 1;
                // background-color:tomato ;
                font-size: 26px;
                into{
                    display: flex;
                    height: 52px;
                }
                .into1{
                    color: #999999;
                }
            }
        }
        .info-house{
            display: flex;
            width: 100%;
            height: 124px;
            // background-color: tomato;
            div{
                height: 100%;
                flex: 1;
                text-align: center;
                p{
                    color: red;
                    font-size: 36px;
                    font-weight: 700;
                }
                span{
                    color: #999;
                    font-size: 28px;
                }
            }
        }

    .address{
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 10px;
        margin-right: 5px;
        line-height: 12px;
        color: #39becd;
        background: #e1f5f8;
    }

    }

    .map-house{
        margin-top: 20px;
        height: 778px;
        width: 100%;
        background-color: pink;
    }
}
footer{
    position: fixed;
    display: flex;
    bottom: 0px;
    height: 100px;
    width: 100%;
    z-index: 999;
    .phone{
        background-color: #21b97a;
        color: #fff;
    }
    div{
        flex: 1;
        height: 100%;
        border: 1px solid #cecece;
        font-size: 34px;
        line-height: 100px;
        text-align: center;
        color: #999;
        background-color: #fff;
    }
}
.color{
    background-color: #fff;
}
.icon-color{
    color: tomato;
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

</style>
