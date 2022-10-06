import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'
import i18n from '@/lang/i18n'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'https://apikbus.anvui.vn',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // set language
    let lang = 'vi-VN'
    switch (i18n.locale) {
      case 'vi':
        lang = 'vi-VN'
        break
      case 'en':
        lang = 'en-US'
    }
    config.headers['accept-language'] = lang
    config.headers['partner'] = store.getters.companyConfig.partnerId || ''

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // config.headers['X-Token'] = getToken()

      // set authorization bearer token
      // config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if code is not 200 or 201, it is error
    if (res.code === 200 || res.code === 201) {
      return res
    } else {
      // Message({
      //   message: res.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // console.log(res)
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

export default service
