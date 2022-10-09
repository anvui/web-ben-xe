import { getListPoints, searchTrip, getTripDetail } from '@/api/system'
import { setPayload } from '@/utils/get-point-and-date'

const state = {
  companyConfig: null,
  points: [],
  trips: [],
  searchTripQuery: null,
  selectedTrip: null
}

const mutations = {
  SET_COMPANY_CONFIG: (state, config) => {
    state.companyConfig = config
  },
  SET_POINTS: (state, points) => {
    state.points = points
  },
  SET_TRIPS: (state, datya) => {
    state.trips = datya
  },
  SET_SELECTED_TRIP: (state, datya) => {
    state.selectedTrip = datya
  },
  SET_POINT_AND_DATE: (state, daya) => {
    state.searchTripQuery = daya
  }
}

const actions = {
  saveCompanyConfig({ commit }, config) {
    commit('SET_COMPANY_CONFIG', config)
  },
  async getCompanyConfig({ commit }, siteNane) {
    const config = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const conf = {
          sitename: siteNane,
          packageName: ' bến xe An Vui',
          partnerId: 'PN0TU1yYd3LmVJWJ'
        }
        return resolve(conf)
      }, 2000)
    })
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
  getListTrip({ commit }, params) {
    return new Promise((resolve, reject) => {
      searchTrip(params).then(response => {
        resolve(response.results.trips)
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
