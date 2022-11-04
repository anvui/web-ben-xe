import {
  getListPoints, getListProvinces, searchTrip, getTripDetail,
  bookTickets, createPaymentOnePay, createPaymentVnPay, checkSeatsPrice } from '@/api/system'
import { setPayload } from '@/utils/get-point-and-date'

const state = {
  companyConfig: null,
  points: [],
  provinces: [],
  trips: [],
  searchTripQuery: null,
  selectedTrip: null,
  lastOrder: null,
  totalPrice: null
}

const mutations = {
  SET_COMPANY_CONFIG: (state, config) => {
    state.companyConfig = config
  },
  SET_POINTS: (state, points) => {
    state.points = points
  },
  SET_TOTAL_PRICE: (state, totalPrice) => {
    state.totalPrice = totalPrice
  },
  SET_PROVINCES: (state, provinces) => {
    state.provinces = provinces
  },
  SET_TRIPS: (state, datya) => {
    state.trips = datya
  },
  SET_SELECTED_TRIP: (state, datya) => {
    state.selectedTrip = datya
  },
  SET_LAST_ORDER: (state, datya) => {
    state.lastOrder = datya
  },
  SET_POINT_AND_DATE: (state, daya) => {
    state.searchTripQuery = daya
  }
}

const actions = {
  saveCompanyConfig({ commit }, config) {
    commit('SET_COMPANY_CONFIG', config)
  },
  async getCompanyConfig({ commit }, siteName) {
    const config = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const conf = {
          sitename: siteName,
          packageName: ' bến xe An Vui',
          partnerId: 'PN0Tz1yksta4UMNL',
          // partnerId: 'PN0TU1yYd3LmVJWJ',
          premiumColor: '#1931ed',
          themeColor: {
            premiumColor: '#1931ed',
            secondColor: '',
            btnColor: '',
            backgroundColor: ''
          },
          logo: 'https://anvui.vn/v2/logo.svg',
          slide: 'https://anvui.vn/upload/web/2022/09/14/1663138339_dai-ly-ban-ve-xe-an-vui-cong-bo-nen-tang-ams-partner-nen-tang-giup-cac-to-chuc-ca-nhan-ban-ve-xe-huong-hoa-hong.jpg',
          companyImage: [
            'https://anvui.vn/upload/web/2022/10/08/1665204227_kiost-ban-ve-tu-dong-av02.jpg',
            'https://anvui.vn/upload/web/2022/08/29/1661754564_nhung-loi-ich-khi-ung-dung-ben-xe-dien-tu.jpeg',
            'https://anvui.vn/upload/web/2022/09/14/1663138339_dai-ly-ban-ve-xe-an-vui-cong-bo-nen-tang-ams-partner-nen-tang-giup-cac-to-chuc-ca-nhan-ban-ve-xe-huong-hoa-hong.jpg',
            'https://anvui.vn/upload/web/2022/09/06/1662436629_phan-mem-quan-ly-ben-xe.png'
          ]
        }
        return resolve(conf)
      }, 2000)
    })
    console.log('getCompany config success'. config)
    commit('SET_COMPANY_CONFIG', config)
  },
  getPoints({ commit }) {
    return new Promise((resolve, reject) => {
      const params = {
        count: 1000,
        searchKey: ''
      }
      getListPoints(params).then(response => {
        const data = response.results.points
        commit('SET_POINTS', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getProvinces({ commit }) {
    return new Promise((resolve, reject) => {
      const params = {
        count: 1000,
        searchKey: ''
      }
      getListProvinces(params).then(response => {
        const data = response.results.provinces
        commit('SET_PROVINCES', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  bookTickets({ commit }, params) {
    return new Promise((resolve, reject) => {
      bookTickets(params).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTripDetail({ commit }, data) {
    // return new Promise((resolve, reject) => {
    const params = {
      tripId: data
    }
    getTripDetail(params).then(response => {
      const data = response.results
      commit('SET_SELECTED_TRIP', data)
      // resolve()
    }).catch(error => {
      console.log(error)
      // reject(error)
    })
    // })
  },
  setTrips({ commit }, params) {
    commit('SET_TRIPS', params)
  },
  setTrip({ commit }, params) {
    commit('SET_SELECTED_TRIP', params)
  },
  setLastOrder({ commit }, params) {
    commit('SET_LAST_ORDER', params)
  },
  getListTrip({ commit }, params) {
    return new Promise((resolve, reject) => {
      searchTrip(params).then(response => {
        resolve(response.results.trips)
      }).catch(error => {
        reject(error)
      })
    })
  },
  payOrderOnepay({ commit }, params) {
    return new Promise((resolve, reject) => {
      createPaymentOnePay(params).then(response => {
        resolve(response.results.url)
      }).catch(error => {
        reject(error)
      })
    })
  },
  payOrderVnpay({ commit }, params) {
    return new Promise((resolve, reject) => {
      createPaymentVnPay(params).then(response => {
        resolve(response.results.url)
      }).catch(error => {
        reject(error)
      })
    })
  },
  checkPrice({ commit }, params) {
    return new Promise((resolve, reject) => {
      checkSeatsPrice(params).then(response => {
        const data = response.results.seatPrice
        commit('SET_TOTAL_PRICE', data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  getPointAndDate({ commit }, params) {
    // const data = {
    //   from: params.from,
    //   to: params.to,
    //   startDate: params.startDate
    //   // endDate: params.endDate
    // }
    commit('SET_POINT_AND_DATE', params)
    setPayload(JSON.stringify(params))
  },
  testAction({ commit }, config) {
    console.log('this.config', config)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
