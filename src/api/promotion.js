import request from '@/utils/request'

export function checkPromotion(params) {
  return request({
    url: '/promotion/check',
    method: 'post',
    data: params
  })
}
