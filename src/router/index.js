import Vue from 'vue'
import VueRouter from 'vue-router'

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
      }
    ]
  },
  {
    path: '/city',
    component: () => import('@/views/Address')
  }
]

const router = new VueRouter({
  routes
})

export default router
