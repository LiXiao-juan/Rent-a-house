<template>
  <div>
    <div class="header">
      <h4>{{title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '未知'
    }
  }
}
</script>

<style>
.header {
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 30px 0;
  border-bottom: 2px solid #cecece;
}
</style>
