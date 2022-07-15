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
