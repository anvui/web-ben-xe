import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/comment/get-by-type',
    method: 'get',
    params: params
  })
}

export function create(params) {
  return request({
    url: '/comment/create',
    method: 'post',
    data: params
  })
}
