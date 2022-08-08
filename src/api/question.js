import request from '@/utils/request'

export function list() {
  return request({
    url: '/question/get-all',
    method: 'get'
  })
}
