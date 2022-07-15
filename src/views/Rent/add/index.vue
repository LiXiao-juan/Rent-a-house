<template>
  <div>
     <!-- 复用组件 -->
    <Header title="发布房源"></Header>
    <van-cell-group>
      <van-cell title="房源信息" style="color:#21b97a"/>
      <van-cell title="小区名称" is-link value="请输入小区名称" />
    </van-cell-group>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
