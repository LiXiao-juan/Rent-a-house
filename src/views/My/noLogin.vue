<template>
  <div>
    <img class="My_bg__2j-VX" src="http://liufusong.top:8080/img/profile/bg.png" alt="背景图">
        <!-- 未登录的白色大盒子 -->
    <div class="My_info__eOYeg">
      <!-- 头像框 -->
      <div class="My_myIcon__3cKIV">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" class="My_avatar__2Fbh7">
      </div>
      <!-- 网名 -->
      <div class="My_name__3U2NB">游客</div>
      <van-button  type="primary" size="small" @click="login">去登录</van-button>
    </div>

    <div class="menu">
      <!-- 菜单栏 -->
    <van-row gutter="50" type="flex" justify="center" >
      <van-col span="8">
        <div @click="collect">
          <van-icon name="like-o" />
          <p>我的收藏</p>
        </div>
        </van-col>
      <van-col span="8">
        <div>
        <van-icon name="wap-home-o" />
          <p>我的出租</p>
        </div>
      </van-col>
      <van-col span="8">
        <div>
        <van-icon name="clock-o" />
         <p>看房记录</p>
        </div>
      </van-col>
      <van-col span="8">
        <div>
        <van-icon name="credit-pay" />
         <p>成为房主</p>
        </div>
      </van-col>
      <van-col span="8">
        <div>
        <van-icon name="contact" />
         <p>个人资料</p>
        </div>
      </van-col>
      <van-col span="8">
        <div>
        <van-icon name="service-o" />
         <p>联系我们</p>
        </div>
      </van-col>
    </van-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 去登录
    login () {
      this.$router.push({
        path: '/login'
      })
    },
    collect () {
      const token = this.$store.state.token
      if (token) {
        this.$router.push({
          path: '/favorites'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    },
    // 出租
    rentFn () {
      const token = this.$store.state.token
      if (token) {
        this.$router.push({
          path: '/rent'
        })
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.My_bg__2j-VX{
  width: 100%;
}
.My_info__eOYeg{
    position: absolute;
    background: #fff;
    width: 85%;
    height: 30%;
    bottom: 780px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_myIcon__3cKIV{
    position: relative;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 140px;
    height: 140px;
    border: 5px solid #f5f5f5;
    display: inline-block;
    box-shadow: 0 2px 2px #bdbdbd;
    .My_avatar__2Fbh7 {
    width: 100%;
    border-radius: 50%;
}
    }
    // 网名样式
    .My_name__3U2NB {
    margin-top: -30px;
    margin-bottom: 10px;
}
:deep(.van-button--mini) {
    height: 48px;
    padding: 20px 20px;
    font-size: 10px;
}
}
.van-row{
  margin-top: 90px;
  margin-left: 45px;
  margin-right: 45px;
  .van-col--8{
    margin-bottom: 100px;
    div{
      text-align: center;
      .van-icon{
        text-align: center;
      }
      p{
        font-size: 14px;
        text-align: center;
      }
    }
  }
}
.My_ad__1wZZj {
    text-align: center;
    margin-top: 10px;
    .My_ad__1wZZj img {
    width: 92%;
}
}
.menu{
    position:absolute;
    top:10.2rem;
}

</style>
