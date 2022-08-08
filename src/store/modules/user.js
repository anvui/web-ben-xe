import { login, signup, update, sendOtp, resetPassword, view, loginSocial } from '@/api/user'
import { getToken, setToken, removeToken, removeUserInfo } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    userInfo: null,
    respOtp: null
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_INFO: (state, info) => {
    state.userInfo = info
  },
  SET_RESPONSE_OTP: (state, resp) => {
    state.respOtp = resp
  }
}

const actions = {
  // user login
  login({ commit, dispatch }, userInfo) {
    return new Promise((resolve, reject) => {
      login({ userName: userInfo.username.trim(),
        password: userInfo.password,
        captcha: userInfo.responseRecaptcha
      }).then(response => {
        const data = response.results.data
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        // setUserInfo(JSON.stringify(data))
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {
    removeToken() // must remove  token  first
    removeUserInfo()
    resetRouter()
    commit('RESET_STATE')
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      removeUserInfo()
      commit('RESET_STATE')
      resolve()
    })
  },

  // sign up
  signup({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      signup({ userName: userInfo.username,
        fullName: userInfo.fullname,
        avatar: userInfo.avatar,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        password: userInfo.password
      }).then(response => {
        // const data = response.results.data
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  update({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      update({
        fullName: userInfo.fullName,
        email: userInfo.email,
        avatar: userInfo.avatar,
        password: userInfo.password
      }).then(response => {
        const data = response.results.data
        commit('SET_USER_INFO', data)
        // setUserInfo(JSON.stringify(data))
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  sendOtp({ commit }, params) {
    return new Promise((resolve, reject) => {
      sendOtp({
        userName: params.username
      }).then(response => {
        const data = response.results.data
        commit('SET_RESPONSE_OTP', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetPassword({ commit }, params) {
    return new Promise((resolve, reject) => {
      resetPassword({
        userName: params.username,
        password: params.password,
        otp: params.otp
      }).then(response => {
        const data = response.results.data
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  viewCustomer({ commit }) {
    return new Promise((resolve, reject) => {
      view().then(response => {
        const data = response.results.data
        commit('SET_USER_INFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  loginSocial({ commit, dispatch }, userInfo) {
    return new Promise((resolve, reject) => {
      loginSocial(userInfo).then(response => {
        const data = response.results.data
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        commit('SET_USER_INFO', data.customer)
        // setUserInfo(JSON.stringify(data))
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

