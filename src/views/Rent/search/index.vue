<template>
  <div>
    <form action="/" class="form">
      <van-search
        v-model="keywords"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        :input-align="center"
        @focus="center = 'left'"
        @blur="blurFn"
      />
    </form>
    <div>
      <van-cell
        :title="item.communityName"
        v-for="(item, index) in SuggestList"
        :key="index"
        @click="getSuggest(item)"
      />
    </div>
  </div>
</template>

<script>
import { getSuggestList } from '@/api/search'
export default {
  name: 'SearchSuggest',
  data() {
    return {
      keywords: '',
      center: 'center',
      SuggestList: []
    }
  },
  methods: {
    onSearch(val) {
      //   Toast(val)
    },
    onCancel() {
      //   Toast('取消')
      this.$router.back()
    },
    blurFn() {
      if (this.keywords.trim() === '') {
        return (this.center = 'center')
      }
    },
    getSuggest(item) {
      // 存到vuex
      this.$store.commit('setCityInfo', item)
      // this.$route.push({
      //   path: '/rent/add',
      //   query: {
      //     item
      //   }
      // })
      this.$router.back()
    }
  },
  watch: {
    keywords: {
      async handler() {
        try {
          const { data } = await getSuggestList(
            this.keywords,
            this.$store.state.city.value
          )
          this.SuggestList = data.body
        } catch (error) {
          this.$toast.fail(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.form {
  :deep(.van-search) {
    background-color: #efeff4 !important;
  }
}
</style>
