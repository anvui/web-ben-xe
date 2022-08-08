import { generateLink } from '@/api/component'

const getDefaultState = () => {
  return {
    link: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_LINK: (state, link) => {
    state.link = link
  }
}

const actions = {
  // get response
  generateLink({ commit }, params) {
    return new Promise((resolve, reject) => {
      generateLink({
        title: params.title,
        description: params.description,
        imageUrl: params.imageUrl,
        referralUser: params.referralUser,
        tripId: params.tripId
      }).then(response => {
        const data = response.results.data
        commit('SET_LINK', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  resetLink({ commit }) {
    commit('SET_LINK', '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
