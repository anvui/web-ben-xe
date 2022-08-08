import request from '@/utils/request'

export function list() {
  return request({
    url: '/vehicle/get',
    method: 'get'
  })
}
