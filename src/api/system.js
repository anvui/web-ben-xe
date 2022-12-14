import request from '@/utils/request'

const appengine = '/appengine'
const apiV2 = '/v2/partner-customer'

export function searchTrip(data) {
  return request({
    url: '/v2/partner-customer/search/trips',
    method: 'post',
    data
  })
}

export function getTripDetail(data) {
  return request({
    url: '/v2/partner-customer/trip/view-by-id',
    method: 'post',
    data
  })
}

export function getListPoints(data) {
  return request({
    url: apiV2 + '/search/points',
    method: 'post',
    data
  })
}

export function getListProvinces(data) {
  return request({
    url: apiV2 + '/search/province',
    method: 'post',
    data
  })
}

export function bookTickets(data) {
  return request({
    url: appengine + '/ticket/partner/book',
    method: 'post',
    data
  })
}

export function checkSeatsPrice(data) {
  return request({
    url: apiV2 + '/ticket/calculate-price',
    method: 'post',
    data
  })
}

export function createPaymentOnePay(data) {
  return request({
    url: appengine + '/partner/onepay/create-payment',
    method: 'post',
    data
  })
}

export function createPaymentVnPay(data) {
  return request({
    url: appengine + '/partner/vnpayqr/create-payment',
    method: 'post',
    data
  })
}

