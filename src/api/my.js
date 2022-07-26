import request from '@/utils/request'

export const collect = (token) => {
  return request({
    url: '/user/favorites',
    method: 'GET',
    params: {
      token
    }
  })
}

export const userInfo = (token) => {
  return request({
    url: '/user',
    method: 'GET',
    params: {
      token
    }
  })
}

export const rent = (token) => {
  return request({
    url: '/user/houses',
    method: 'GET',
    params: {
      token
    }
  })
}

export const detail = (id) => {
  return request({
    url: `/houses/${id}`
  })
}
