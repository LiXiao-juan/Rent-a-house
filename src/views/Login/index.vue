<template>
  <div>
      <!-- 头部导航 -->
        <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" class="navbar">
        <template #left>
        <van-icon name="arrow-left" @click="backBtn"/>
        </template>
        </van-nav-bar>
      <!-- 表单 -->
    <van-form @submit="login" class="form">
        <van-field
            v-model="username"
            name="username"
            placeholder="请输入账号"
            :rules="[{ required: true, message: '请输入账号' }]"
        >
        </van-field>
        <van-field
            v-model="password"
            name="password"
            type="password"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请输入密码' }]"
        >
        </van-field>
      <!-- 登录按钮 -->
        <div style="margin: 16px;">
            <van-button  block type="info" native-type="submit" class="loginbtn">登录</van-button>
        </div>
    </van-form>
    <!-- 注册 -->
    <p class="register">还没有账号,去注册~</p>

  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    backBtn () {
      this.$router.back()
      // location.reload()
    },
    async login () {
      try {
        const { data } = await login(this.username, this.password)
        this.$store.commit('setUser', data.body.token)
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        setTimeout(() => {
          // 登录成功路由跳转到我的
          this.$router.push({
            path: '/layout/my'
          })
          this.$toast.success('登录成功')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }

  }
}
</script>

<style scoped lang="less">
.navbar{
    background-color: #21b97a;
   :deep(.van-nav-bar__title){
    color: #fff;
    }
    .van-icon{
        color: #fff;
    }
    :deep(.van-nav-bar__title){
      font-size: 18px;
    }
}
// 表单域样式
.form{
    :deep(.van-field__label){
        flex: 1;
    }
    :deep(.van-cell__value){
        flex: 30;
    }
    .toutiao{
        font-size: 0.5rem;
    }
    .loginbtn{
      background-color: #1cb676;
      border: none;
      font-size: 18px;
      height: 50px;
      line-height: 50px;
    }
    :deep(.van-field__control){
      height: 60px;
      font-size: 17px;
      padding:0;
    }
}
.register{
  color: #666;
  font-size: 14px;
  text-align: center;
}
</style>
