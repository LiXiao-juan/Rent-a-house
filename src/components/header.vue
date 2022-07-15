<template>
  <div>
    <van-nav-bar
    :title="title"
    left-arrow
    @click-left="onClickLeft"
    class="navbar1"
/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '未知'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.navbar1{
    background-color: #21b97a;
   :deep(.van-nav-bar__title){
    color: #fff;
    }
    :deep(.van-icon){
        color: #fff;
    }
    :deep(.van-nav-bar__title){
      font-size: 30px;
    }
}
</style>
