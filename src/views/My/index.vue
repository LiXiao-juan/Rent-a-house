<template>
  <div>
    <template>
      <component :is="comName"></component>
    </template>
    <!-- 底部图片 -->
      <div class="pic">
        <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
      </div>
  </div>
</template>

<script>
import Login from '@/views/My/Login.vue'
import noLogin from '@/views/My/noLogin.vue'
export default {
  data () {
    return {
      comName: ''
    }
  },
  created () {
    // location.reload()
    if (this.$store.state.token) {
      this.comName = 'Login'
    } else {
      this.comName = 'noLogin'
    }
  },
  components: {
    Login,
    noLogin
  }
}
</script>

<style scoped lang="less">
.pic{
    text-align: center;
    margin-top: 10px;
    img{
      width: 92%
    }
}

</style>
