// import { getToken } from '@/utils/auth'
import { list } from '@/api/point'

const getDefaultState = () => {
  return {
    // token: getToken(),
    points: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_POINTS: (state, points) => {
    state.points = points
  }
}

const actions = {
  // get routes
  getPoints({ commit }, params) {
    return new Promise((resolve, reject) => {
      list({ name: params ? params.name : undefined }).then(response => {
        const data = response.results.data
        commit('SET_POINTS', data)
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
