import { getListPoints } from '@/api/system'

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
