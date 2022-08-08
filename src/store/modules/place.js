import { anvuiPlace, morePlace, placeDetails } from '@/api/place'

const getDefaultState = () => {
  return {
    listPlaces: [],
    placeDetails: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_PLACES: (state, response) => {
    state.listPlaces = response
  },
  SET_PLACE_DETAILS: (state, response) => {
    state.placeDetails = response
  }
}

const actions = {
  getPlaces({ commit }, params) {
    return new Promise((resolve, reject) => {
      anvuiPlace({ input: params.input }).then(response => {
        const data = response.results.data
        commit('SET_LIST_PLACES', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMorePlaces({ commit }, params) {
    return new Promise((resolve, reject) => {
      morePlace({ input: params.input }).then(response => {
        const data = response.results.data
        commit('SET_LIST_PLACES', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPlaceDetails({ commit }, params) {
    return new Promise((resolve, reject) => {
      placeDetails({ input: params.input }).then(response => {
        const data = response.results.data
        commit('SET_PLACE_DETAILS', data)
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
