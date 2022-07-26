import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem, delItem } from '@/utils/storage.js'
Vue.use(Vuex)
const TOKEN_KEY = 'HAOKE_USER'
const CITY = 'CITY'
const HOUSEID = 'HOUSECODE'
export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    token: getItem(TOKEN_KEY),
    city: getItem(CITY) || '深圳',
    houseId: getItem(HOUSEID),
    community: getItem('community')

  },
  mutations: {
    setUser (state, user) {
      state.token = user
      setItem(TOKEN_KEY, state.token)
    },
    delUser () {
      delItem(TOKEN_KEY)
    },
    setCity (state, val) {
      state.city = val
      setItem(CITY, state.city)
    },
    // 存房屋id
    setHouseId (state, id) {
      state.houseId = id
      setItem(HOUSEID, state.houseId)
    },

    // 存搜索的房屋信息
    setCityInfo (state, city) {
      state.community = city
      setItem('community', state.community)
    }

  },
  actions: {

  },
  modules: {
  }
})
