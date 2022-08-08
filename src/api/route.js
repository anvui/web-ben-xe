import request from '@/utils/request'

export function list() {
  return request({
    url: '/route/get',
    method: 'get'
  })
}

export function listProvinces() {
  return request({
    url: '/component/provinces',
    method: 'get'
  })
}
