import request from '@/utils/request'

export const getSuggestList = (name, id) => {
  return request({
    url: '/area/community',
    method: 'GET',
    params: {
      name,
      id
    }
  })
}
