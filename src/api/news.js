import request from '@/utils/request'

export function list(params) {
  return request({
    url: `/news/get-all`,
    method: 'get',
    params: params
  })
}

export function viewById(params) {
  return request({
    url: `/news/view/${params.id}`,
    method: 'get'
  })
}

export function viewBySlug(params) {
  return request({
    url: `/news/get/${params.slug}`,
    method: 'get'
  })
}
