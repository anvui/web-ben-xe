const key = 'kbus_payload'

export function getPayload() {
  return localStorage.getItem(key)
}

export function setPayload(data) {
  return localStorage.setItem(key, data)
}

export function removePayload() {
  return localStorage.removeItem(key)
}
