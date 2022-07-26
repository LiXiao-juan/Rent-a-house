import request from '@/utils/request'

/**
 *
 * @param {String} username
 * @param {String} password
 * @returns //promise
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
// 房屋是否收藏
export const shoc = (id) => {
  return request({
    method: 'GET',
    url: '/user/favorites/' + id + ''
  })
}
// 添加收藏
export const addSc = (id) => {
  return request({
    method: 'POST',
    url: '/user/favorites/' + id + ''
  })
}
// 删除收藏
export const deleteSc = (id) => {
  return request({
    method: 'DELETE',
    url: '/user/favorites/' + id + ''
  })
}
