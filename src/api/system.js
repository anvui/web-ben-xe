import request from '@/utils/request'

// /v2/partner-customer + url
// /appengine + url

export function searchTrip(data) {
  return request({
    url: '/v2/partner-customer/search/trips',
    method: 'post',
    data
  })
}

export function getListPoints(data) {
  return request({
    url: '/v2/partner-customer/search/points',
    method: 'post',
    data
  })
}
