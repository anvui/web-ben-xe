const state = {
  companyConfig: null
}

const mutations = {
  SET_COMPANY_CONFIG: (state, config) => {
    state.companyConfig = config
  }
}

const actions = {
  saveCompanyConfig({ commit }, config) {
    commit('SET_COMPANY_CONFIG', config)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
