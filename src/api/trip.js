import request from '@/utils/request'

export function search(params) {
  return request({
    url: '/trip/search',
    method: 'post',
    headers: {},
    data: params
  })
}

export function create(params) {
  return request({
    url: '/customer-trip/create',
    method: 'post',
    headers: {},
    data: params
  })
}

export function getTripsCreated(params) {
  return request({
    url: `/customer-trip/get`,
    method: 'get'
  })
}

export function getHotTrips() {
  return request({
    url: `/trip/hot-trips`,
    method: 'get'
  })
}

export function getByTripId(params) {
  return request({
    url: `/trip/get/${params.tripId}`,
    method: 'get'
  })
}

export function manualCreate(params) {
  return request({
    url: `/customer-trip/manual-create`,
    method: 'post',
    data: params
  })
}

export function priceManualCreate(params) {
  return request({
    url: `/customer-trip/price-manual-create`,
    method: 'post',
    data: params
  })
}
