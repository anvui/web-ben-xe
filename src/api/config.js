import request from '@/utils/request'

export function get(params) {
  return request({
    url: '/system-config/get',
    method: 'get',
    params
  })
}
