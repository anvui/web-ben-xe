import Cookies from 'js-cookie'

const TokenKey = 'kbus_template_token'

const UserInfoKey = 'kbus_template_info'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  const userInfo = Cookies.get(UserInfoKey)
  let data = null
  if (typeof (userInfo) === 'string') {
    data = JSON.parse(userInfo)
  } else if (typeof (userInfo) === 'object') {
    data = userInfo
  }
  return data
}

export function setUserInfo(info) {
  return Cookies.set(UserInfoKey, info)
}

export function removeUserInfo() {
  return Cookies.remove(UserInfoKey)
}
