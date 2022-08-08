import request from '@/utils/request'

export function create(params) {
  return request({
    url: `/company-register/create`,
    method: 'post',
    data: params
  })
}
