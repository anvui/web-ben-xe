import { get } from '@/api/config'

const getDefaultState = () => {
  return {
    systemConfig: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_CONFIG: (state, config) => {
    state.systemConfig = config
  }
}

const actions = {
  getConfig({ commit }, params) {
    return new Promise((resolve, reject) => {
      get(params).then(response => {
        const data = response.results.data[0]
        commit('SET_CONFIG', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
