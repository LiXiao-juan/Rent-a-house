import request from '@/utils/request'

export const deployHouse = () => {
  return request({
    url: '/houses/params'
  })
}

/**
 *  上传房屋图片
 * @returns (file)
 */
export const upHouseImage = (file) => {
  return request({
    url: '/houses/image',
    method: 'POST',
    data: file
  })
}

export const pubHouse = (data) => {
  return request({
    url: '/user/houses',
    method: 'POST',
    data
  })
}

export const queryHouse = (params) => {
  return request({
    url: '/houses',
    params
  })
}
