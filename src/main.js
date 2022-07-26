import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import BaiduMap, { BmlMarkerClusterer } from 'vue-baidu-map'
// import '@/assets/fonts/iconfont.css'
// 引入rem适配
import 'amfe-flexible/index.min.js'
import '@/assets/fonts/iconfont.css'

Vue.use(BaiduMap, {
  ak: 'YOUR_APP_KEY'
})

Vue.component('bml-marker-cluster', BmlMarkerClusterer)

Vue.use(Lazyload)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
