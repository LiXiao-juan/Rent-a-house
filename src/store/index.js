import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem, delItem } from '@/utils/storage.js'
Vue.use(Vuex)
const TOKEN_KEY = 'HAOKE_USER'
export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    token: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, user) {
      state.token = user
      setItem(TOKEN_KEY, state.token)
    },
    delUser () {
      delItem(TOKEN_KEY)
    }

  },
  actions: {
    getUser (context, value) {
    }
  },
  modules: {
  }
})
