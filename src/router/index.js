import Vue from 'vue'
import Router from 'vue-router'
import i18n from '../lang/i18n'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import SearchTrip from '@/components/Iframe/SearchTrip.vue'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

/* router name is require to check white list */
export const constantRoutes = [
  {
    path: '/search-trip',
    component: SearchTrip,
    redirect: '/search-trip',
    name: 'SearchTrip',
    meta: { title: 'SearchTrip', icon: '' },
    permission: [],
    children: [
      {
        path: '',
        name: 'SearchTrip',
        component: SearchTrip,
        // component: () => import('@/components/Iframe/SearchTrip.vue'),
        meta: { title: 'SearchTrip', icon: '' }
      }
    ],
    hidden: true
  },
  {
    path: '/:locale',
    component: Layout,
    beforeEnter: (to, from, next) => { // <------------
      const locale = to.params.locale // 1
      const supported_locales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
      if (!supported_locales.includes(locale)) {
        return next('vi')
      }

      if (i18n.locale !== locale) { // 4
        i18n.locale = locale
      }

      return next() // 5
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Index'),
        meta: { title: 'Nền tảng kết nối chia sẻ xe du lịch đường dài', icon: '' }
      },
      {
        path: 'book',
        name: 'OrderPage',
        component: () => import('@/views/order/OrderPage'),
        meta: { title: 'Đặt vé', icon: '' }
      },
      {
        path: 'book/tripId/:tripId',
        name: 'TripViewAndGetUser',
        component: () => import('@/views/order/OrderPage'),
        meta: { title: 'Đặt vé', icon: '' }
      },
      {
        path: 'book/tripId/:tripId/referralUser/:referralUser',
        name: 'TripView',
        component: () => import('@/views/order/OrderPage'),
        meta: { title: 'Đặt vé', icon: '' }
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/payment/payment.vue'),
        meta: { title: 'Thanh toán', icon: '' }
      },
      {
        path: 'pay/success',
        name: 'PaySuccess',
        component: () => import('@/views/PaySuccess/PaySuccess.vue'),
        meta: { title: 'Thanh toán thành công', icon: '' }
      },
      {
        path: 'history',
        name: 'BookedHistory',
        component: () => import('@/views/history/BookedHistory'),
        meta: { title: 'Lịch sử đặt vé', icon: '' }
      },
      {
        path: 'news/article/:slug',
        name: 'ViewNews',
        component: () => import('@/views/ViewNews/index.vue'),
        meta: { title: 'Tin tức', icon: '' }
      },
      {
        path: 'user/edit',
        name: 'EditUser',
        component: () => import('@/views/user/Edit.vue'),
        meta: { title: 'Thông tin tài khoản', icon: '' }
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: () => import('@/views/ResetPassword/index.vue'),
        meta: { title: 'Quên mật khẩu', icon: '' }
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: () => import('@/views/ChangePassword/index.vue'),
        meta: { title: 'Thay đổi mật khẩu', icon: '' }
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/index'),
        meta: { title: 'Đăng nhập', icon: '' }
      },
      {
        path: 'newComponent',
        name: 'newComponent',
        component: () => import('@/components/Order/newComponent'),
        meta: { title: 'moiii', icon: '' }
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/views/signup/index'),
        meta: { title: 'Đăng ký', icon: '' }
      },
      {
        path: 'pitch-deck',
        name: 'PitchDeck',
        component: () => import('@/views/PitchDeck'),
        meta: { title: 'Pitch Deck', icon: '' }
      },
      {
        path: '*',
        name: '404',
        component: () => import('@/views/404'),
        meta: { title: '404', icon: '' }
      }
    ],
    hidden: true
  }
  // {
  //   path: '/searchTrip',
  //   name: 'SearchTrip',
  //   component: SearchTrip,
  //   meta: { title: 'tim chuyen', icon: '' }
  // },
  // {
  //   path: '*',
  //   redirect() {
  //     return '404'
  //   }
  // }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
