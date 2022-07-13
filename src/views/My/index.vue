<template>
  <div>
    <img class="My_bg__2j-VX" src="http://liufusong.top:8080/img/avatar.png" alt="背景图">
    <!-- 白色大盒子 -->
    <div class="My_info__eOYeg" >
      <!-- 头像框 -->
      <div class="My_myIcon__3cKIV">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" class="My_avatar__2Fbh7">
      </div>
      <!-- 网名 -->
      <div class="My_name__3U2NB">好客_123123</div>
      <van-button round type="primary" size="mini" >退出</van-button>
      <div class="My_edit__3wqlv">编辑个人资料
        <van-icon name="play" />
      </div>
    </div>

    <!-- 菜单栏 -->
    <van-row gutter="50" type="flex" justify="center" >
      <van-col span="8">
        <van-icon name="like-o" />
        </van-col>
      <van-col span="8">
        <van-icon name="wap-home-o" />
      </van-col>
      <van-col span="8">
        <van-icon name="clock-o" />
      </van-col>
      <van-col span="8">
        <van-icon name="credit-pay" />
      </van-col>
      <van-col span="8">
        <van-icon name="contact" />
      </van-col>
      <van-col span="8">
        <van-icon name="service-o" />
      </van-col>
    </van-row>

    <!-- 底部图片 -->
    <div class="My_ad__1wZZj">
      <!-- <img src="http://liufusong.top:8080/img/profile/join.png" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.My_bg__2j-VX{
  width: 100%;
}
.My_info__eOYeg{
    position: absolute;
    background: #fff;
    width: 74%;
    height: 35%;
    bottom: 261px;
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
    width: 70px;
    height: 70px;
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
    height: 24px;
    padding: 10px 10px;
    font-size: 10px;
}
.My_edit__3wqlv {
    color: #999;
    font-size: 12px;
    margin-top: 20px;
}
}
.van-row{
  margin-top: 45px;
  margin-left: 45px;
  .van-col--8{
    margin-bottom: 55px;
  }
}
.My_ad__1wZZj {
    text-align: center;
    margin-top: 10px;
    .My_ad__1wZZj img {
    width: 92%;
}
}
</style>
