import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/point/get',
    method: 'get',
    params: params
  })
}
