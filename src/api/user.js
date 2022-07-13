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
