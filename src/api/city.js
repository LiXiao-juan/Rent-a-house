import request from '@/utils/request'

// 城市列表
export const getCityList = () => {
  return request({
    url: '/area/city',
    method: 'GET',
    params: {
      level: 1
    }
  })
}

// 获取热门城市列表
export const HotCity = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
