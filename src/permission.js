import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
// import i18n from './lang/i18n'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['Login', 'Home', 'DownloadApp', 'DownloadAppPartner', 'OrderPage', 'Signup', 'TermsOfUse', 'PrivacyPolicy', 'ComplaintsPolicy', 'BookingPolicy', 'PartnerRegistration', 'ResetPassword', 'ServicePrice', 'CancellationPolicy', 'ViewNews', 'TripViewAndGetUser', 'TripView', 'PitchDeck', '404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  const langSupported = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  const locale = langSupported.find((lang) => to.path.includes(lang))
  const lastPath = to.path.replace(`/${to.params.locale}/`, '')
  if (to.path === '/') {
    next('vi')
  }

  // if (locale && i18n.locale !== locale) {
  //   console.log(locale)
  //   i18n.locale = locale
  // }
  // console.log(from, to, lastPath, i18n.locale)
  // if (to.path.includes('tripId') && to.path.includes('referralUser')) {
  //   // next(locale || 'vi')
  // }

  if (hasToken) {
    // if is logged in, redirect to the home page

    if (to.name === 'Login' || to.name === 'Signup' || to.name === 'ResetPassword') {
      // if is logged in, redirect to the home page
      next(locale || 'vi')
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.userInfo
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/viewCustomer')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          // next(`/${locale || 'vi'}/login?redirect=${to.fullPath}`)
          NProgress.done()
        }
      }
    }
    NProgress.done()
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.name) !== -1 || to.path === '/') {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // Message.error('Vui lòng đăng nhập để thực hiện tính năng này')
      next(`/${locale || 'vi'}/login?redirect=${lastPath}`)
      // next()
      NProgress.done()
    }
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
