import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/customer/login',
    method: 'post',
    data: data
  })
}

export function signup(data) {
  return request({
    url: '/customer/create',
    method: 'post',
    data: data
  })
}

export function update(data) {
  return request({
    url: '/customer/update',
    method: 'post',
    data: data
  })
}

export function sendOtp(data) {
  return request({
    url: '/customer/send-otp',
    method: 'get',
    params: data
  })
}

export function resetPassword(data) {
  return request({
    url: '/customer/reset-password',
    method: 'get',
    params: data
  })
}

export function view(data) {
  return request({
    url: '/customer/view',
    method: 'get'
  })
}

export function loginSocial(data) {
  return request({
    url: '/customer/login-social',
    method: 'post',
    data: data
  })
}
