import { list } from '@/api/question'

const getDefaultState = () => {
  return {
    listQuestions: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_QUESTIONS: (state, response) => {
    state.listQuestions = response
  }
}

const actions = {
  // get list questions
  getListQuestions({ commit }) {
    return new Promise((resolve, reject) => {
      list().then(response => {
        const data = response.results.data
        commit('SET_LIST_QUESTIONS', data)
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
