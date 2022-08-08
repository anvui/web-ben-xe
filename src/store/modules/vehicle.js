import { list } from '@/api/vehicle'

const getDefaultState = () => {
  return {
    listVehicle: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_VEHICLE: (state, listVehicle) => {
    state.listVehicle = listVehicle
  }
}

const actions = {
  // get response
  listVehicles({ commit }) {
    return new Promise((resolve, reject) => {
      list().then(response => {
        const data = response.results.data
        commit('SET_LIST_VEHICLE', data)
        resolve(data)
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
