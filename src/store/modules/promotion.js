import { checkPromotion } from '@/api/promotion'

const getDefaultState = () => {
  return {
    respPromotion: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_RESPONSE: (state, response) => {
    state.respPromotion = response
  }
}

const actions = {
  // get response
  getRespPromotion({ commit }, params) {
    return new Promise((resolve, reject) => {
      checkPromotion({
        code: params.promotionCode.trim(),
        tripId: params.tripId
      }).then(response => {
        const data = response.results.data
        commit('SET_RESPONSE', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  resetPromotionResp({ commit }) {
    const respPromotion = null
    commit('SET_RESPONSE', respPromotion)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
