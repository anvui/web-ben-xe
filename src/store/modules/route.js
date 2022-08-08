// import { getToken } from '@/utils/auth'
import { list, listProvinces } from '@/api/route'

const getDefaultState = () => {
  return {
    // token: getToken(),
    routes: [],
    provinces: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  SET_PROVINCES: (state, provinces) => {
    state.provinces = provinces
  }
}

const actions = {
  // get routes
  getRoutes({ commit }) {
    return new Promise((resolve, reject) => {
      list().then(response => {
        const data = response.results.data
        commit('SET_ROUTES', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getProvinces({ commit }) {
    return new Promise((resolve, reject) => {
      listProvinces().then(response => {
        const data = response.results.data
        commit('SET_PROVINCES', data)
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
