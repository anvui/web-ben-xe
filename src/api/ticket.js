import request from '@/utils/request'

export function book(data) {
  return request({
    url: '/ticket/book',
    method: 'post',
    data: data
  })
}

export function listTickets(data) {
  return request({
    url: '/ticket/get-list-ticket',
    method: 'post',
    data: data
  })
}

export function cancelTicket(data) {
  return request({
    url: '/ticket/cancel',
    method: 'post',
    data: data
  })
}

export function updateTicket(data) {
  return request({
    url: '/ticket/update',
    method: 'post',
    data: data
  })
}
