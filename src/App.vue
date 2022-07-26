<template>
  <div>
    <!-- 一级路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
