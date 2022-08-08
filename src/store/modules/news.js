import { list, viewById, viewBySlug } from '@/api/news'

const getDefaultState = () => {
  return {
    listNews: [],
    newsById: null,
    newsBySlug: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_NEWS: (state, listNews) => {
    state.listNews = listNews
  },
  SET_NEWS_BY_ID: (state, news) => {
    state.newsById = news
  },
  SET_NEWS_BY_SLUG: (state, news) => {
    state.newsBySlug = news
  }
}

const actions = {
  // get response
  getListNews({ commit }, params) {
    return new Promise((resolve, reject) => {
      list().then(response => {
        const data = response.results.data
        commit('SET_LIST_NEWS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  viewNewsById({ commit }, params) {
    return new Promise((resolve, reject) => {
      viewById({ id: params }).then(response => {
        const data = response.results.data
        commit('SET_NEWS_BY_ID', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  viewNewsBySlug({ commit }, params) {
    return new Promise((resolve, reject) => {
      viewBySlug({ slug: params }).then(response => {
        const data = response.results.data
        commit('SET_NEWS_BY_SLUG', data)
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
