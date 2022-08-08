import requestAnvui from '@/utils/request-anvui'

export function anvuiPlace(params) {
  return requestAnvui({
    url: '/geomap/place-gg/autocomplete',
    method: 'post',
    data: params
  })
}

export function morePlace(params) {
  return requestAnvui({
    url: '/geomap/place-gg/extra/autocomplete',
    method: 'post',
    data: params
  })
}

export function placeDetails(params) {
  return requestAnvui({
    url: '/geomap/place/details',
    method: 'post',
    data: params
  })
}
