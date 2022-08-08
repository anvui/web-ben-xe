import { payme } from '@/api/payme'

const getDefaultState = () => {
  return {
    paymeResponse: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_RESPONSE: (state, response) => {
    state.paymeResponse = response
  }
}

const actions = {
  // get response
  getPaymeResponse({ commit }, params) {
    return new Promise((resolve, reject) => {
      payme({ ticketIds: params.ticketIds }).then(response => {
        const data = response.results.data
        commit('SET_RESPONSE', data)
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
