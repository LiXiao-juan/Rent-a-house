import request from '@/utils/request'

// 轮播图请求
export const home = () => {
  return request({
    url: '/home/swiper',
    method: 'GET'
  })
}

// 租房小组请求
export const groups = (id) => {
  return request({
    url: '/home/groups',
    method: 'GET',
    params: {
      id
    }
  })
}
