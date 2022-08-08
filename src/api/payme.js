import request from '@/utils/request'

export function payme(params) {
  return request({
    url: '/transaction/create-transaction',
    method: 'post',
    data: params
  })
}
