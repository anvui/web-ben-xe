import { list, create } from '@/api/comment'

const getDefaultState = () => {
  return {
    listComments: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_COMMENTS: (state, listComments) => {
    state.listComments = listComments
  }
}

const actions = {
  // get response
  getListComments({ commit }, params) {
    return new Promise((resolve, reject) => {
      list({ type: params.type, typeId: params.typeId }).then(response => {
        const data = response.results.data
        commit('SET_LIST_COMMENTS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  createComments({ commit }, params) {
    return new Promise((resolve, reject) => {
      create({
        content: params.content,
        rating: params.rating,
        type: params.type,
        typeId: params.typeId
      }).then(response => {
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
