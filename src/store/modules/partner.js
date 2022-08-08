import { create } from '@/api/partner'

const getDefaultState = () => {
  return {
    companyInfo: {
      info: null,
      otherService: ''
    },
    vehiclesRegist: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_COMPANY_INFO: (state, companyInfo) => {
    state.companyInfo.info = companyInfo.info
    state.companyInfo.otherService = companyInfo.otherService
  },
  SET_VEHICLES_REGIST: (state, vehiclesRegist) => {
    state.vehiclesRegist = vehiclesRegist
  }
}

const actions = {
  // get response
  getCompanyInfo({ commit }, params) {
    commit('SET_COMPANY_INFO', params)
  },
  getVehicles({ commit }, params) {
    commit('SET_VEHICLES_REGIST', params)
  },
  registCompany({ commit }, params) {
    return new Promise((resolve, reject) => {
      create({
        type: params.type,
        address: params.address,
        area: params.area,
        companyName: params.companyName,
        phoneNumber: params.phoneNumber,
        contact: {
          fullName: params.contactFullname,
          phoneNumber: params.contactPhone,
          position: params.contactPosition
        },
        email: params.email,
        note: params.note,
        representative: {
          fullName: params.representativeFullname,
          phoneNumber: params.representativePhone,
          position: params.representativePosition
        },
        services: params.services,
        vehicles: params.vehicles,
        businessLicense: params.businessLicense,
        taxNumber: params.taxNumber,
        bankNumber: params.bankNumber,
        bankOwner: params.bankOwner,
        bankCode: params.bankCode,
        licenseImage: params.licenseImage
      }).then(response => {
        const data = response.results.data
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  resetData({ commit }) {
    commit('SET_COMPANY_INFO', {
      info: null,
      otherService: ''
    })
    commit('SET_VEHICLES_REGIST', null)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
