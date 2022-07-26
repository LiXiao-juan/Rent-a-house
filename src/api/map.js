import request from '@/utils/request'
export const getHouseData = (id) => {
  return request({
    url: '/area/map',
    params: {
      id
    }
  })
}
