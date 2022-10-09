const key = 'web-ben-xe'
export default function setPayload(data) {
  return localStorage.setItem(key, data)
}
