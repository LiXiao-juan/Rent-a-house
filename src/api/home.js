import request from '@/utils/request'

export const home = () => {
  return request({
    url: '/home/swiper',
    method: 'GET'
  })
}
