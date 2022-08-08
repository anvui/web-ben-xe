import request from '@/utils/request'

export function generateLink(params) {
  return request({
    url: '/component/generate-share-link',
    method: 'post',
    data: params
  })
}
