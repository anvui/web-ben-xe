import Vue from 'vue'

window._ = require('lodash')
// window.handleCredentialResponse = require()

// import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(require('vue-moment'))

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})

const numeral = require('numeral')

// import '@/styles/index.scss' // global css
import '@/styles/anvui/kbus.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import i18n from './lang/i18n'
import firebase from 'firebase/app'

import '@/icons' // icon
import '@/permission' // permission control

// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIhPFRYE1svq7VHGtrecm6QDPLa4Y67SQ',
  authDomain: 'kbus-5b8f3.firebaseapp.com',
  projectId: 'kbus-5b8f3',
  storageBucket: 'kbus-5b8f3.appspot.com',
  messagingSenderId: '939383271889',
  appId: '1:939383271889:web:690a4f56c53e7d031cf0f0',
  measurementId: 'G-XN7JV08PVJ'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.mixin({
  methods: {
    numeral
  }
})

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
