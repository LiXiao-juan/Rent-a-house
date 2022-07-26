import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: 'my',
        component: () => import('@/views/My')
      },
      {
        path: 'news',
        component: () => import('@/views/News')
      }
    ]
  },
  {
    path: '/favorites',
    component: () => import('@/views/Favorites')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent'),
    children: [
      {
        path: '',
        component: () => import('@/views/Rent/Rent.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/Rent/add')
      },
      {
        path: 'search',
        component: () => import('@/views/Rent/search')
      }
    ]
  },
  {
    path: '/city',
    component: () => import('@/views/Address')
  },
  {
    // 收藏详情
    path: '/detail',
    component: () => import('@/views/Favorites/Finfo')
  },
  {
    path: '/map',
    component: () => import('@/views/Map')
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/favorites' && store.state.token) {
    next()
  } else if (to.path === '/favorites' && !store.state.token) {
    next(false)
  } else if (to.path === '/rent' && store.state.token) {
    next()
  } else if (to.path === '/rent' && !store.state.token) {
    next(false)
  } else if (to.path === '/rent/add' && store.state.token) {
    next()
  } else if (to.path === '/rent/add' && !store.state.token) {
    next(false)
  }
  next()
})
export default router
