<template>
  <div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Add from '@/views/Rent/add/add.vue'
export default {
  data() {
    return {
      comName: 'Add'
    }
  },
  components: {
    Add
  }
}
</script>

<style></style>
