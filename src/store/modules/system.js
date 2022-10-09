import { getListPoints } from '@/api/system'
import { setPayload } from '@/utils/get-point-and-date'

const state = {
  companyConfig: null,
  points: []
}

const mutations = {
  SET_COMPANY_CONFIG: (state, config) => {
    state.companyConfig = config
  },
  SET_POINTS: (state, points) => {
    state.points = points
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
  getPointAndDate({ commit }, params) {
    const data = {
      from: params.from,
      to: params.to,
      startDate: params.startDate
      // endDate: params.endDate
    }
    commit('SET_POINT_AND_DATE', data)
    setPayload(JSON.stringify(data))
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
