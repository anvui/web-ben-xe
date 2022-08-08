import { search, create, getTripsCreated, getHotTrips, getByTripId, manualCreate, priceManualCreate } from '@/api/trip'
import { Promise } from 'core-js'
// import moment from 'moment'
import { setPayload, getPayload, removePayload } from '@/utils/get-point-and-date'

const getDefaultState = () => {
  return {
    trips: null,
    dateAndPoint: getPayload(),
    respCreateTrip: null,
    respManualCreateTrip: null,
    priceManualCreate: null,
    tripsCreated: [],
    tripCode: '',
    tripsHot: [],
    validate: [],
    fillAllCustomer: true,
    firstCustomerInfo: null
    // tripByTripId: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_TRIPS: (state, trips) => {
    state.trips = trips
  },
  SET_POINT_AND_DATE: (state, dateAndPoint) => {
    state.dateAndPoint = dateAndPoint
  },
  SET_RESP_CREATE_TRIP: (state, resp) => {
    state.respCreateTrip = resp
  },
  SET_RESP_MANUAL_CREATE_TRIP: (state, resp) => {
    state.respManualCreateTrip = resp
  },
  SET_PRICE_MANUAL_CREATE_TRIP: (state, resp) => {
    state.priceManualCreate = resp
  },
  SET_TRIPS_CREATED: (state, trip) => {
    state.tripsCreated = trip
  },
  SET_TRIP_CODE: (state, tripCode) => {
    state.tripCode = tripCode
  },
  SET_HOT_TRIPS: (state, trips) => {
    state.tripsHot = trips
  },
  SET_VALIDATE: (state, validate) => {
    state.validate = validate
  },
  SET_STATUS_FILL_ALL: (state, status) => {
    state.fillAllCustomer = status
  },
  SET_FIRST_CUSTOMER_INFO: (state, info) => {
    state.firstCustomerInfo = info
  }
  // SET_TRIP_BY_TRIP_ID: (state, trip) => {
  //   state.tripByTripId = trip
  // }
}

const actions = {
  getListTrip({ commit }, params) {
    return new Promise((resolve, reject) => {
      search({
        provinceUp: parseInt(params.from),
        provinceDown: parseInt(params.to),
        date: params.startDate,
        routeId: params.routeId
      }).then(response => {
        const data = response.results.data
        commit('SET_TRIPS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPointAndDate({ commit }, params) {
    const data = {
      from: params.from,
      to: params.to,
      startDate: params.startDate
      // endDate: params.endDate
    }
    commit('SET_POINT_AND_DATE', data)
    setPayload(JSON.stringify(data))
  },
  createCustomerTrip({ commit }, params) {
    return new Promise((resolve, reject) => {
      create({
        routeId: params.routeId,
        pointUpId: params.pointUpId,
        pointDownId: params.pointDownId,
        personInfos: params.customerInfos,
        vehicleId: params.vehicleId,
        runTime: params.startTime,
        isOwned: params.isOwned,
        isPublic: params.isPublic,
        note: params.note,
        minSeat: params.minSeat,
        invoiceTicketInfo: params.invoiceInfo
      }).then(response => {
        const data = response.results.data
        commit('SET_RESP_CREATE_TRIP', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  manualCreateCustomerTrip({ commit }, params) {
    return new Promise((resolve, reject) => {
      manualCreate({
        personInfos: params.customerInfos,
        vehicleId: params.vehicleId,
        isOwned: params.isOwned,
        isPublic: params.isPublic,
        listPlace: params.listPlace,
        numberTicket: params.numberTicket,
        note: params.note,
        runTime: params.runTime,
        finishTime: params.finishTime,
        endTime: params.endTime,
        minSeat: params.minSeat,
        invoiceTicketInfo: params.invoiceInfo
      }).then(response => {
        const data = response.results.data
        commit('SET_RESP_MANUAL_CREATE_TRIP', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTripsCreated({ commit }, params) {
    return new Promise((resolve, reject) => {
      getTripsCreated().then(response => {
        const data = response.results.data
        commit('SET_TRIPS_CREATED', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTripCode({ commit }, params) {
    commit('SET_TRIP_CODE', params.tripCode)
  },
  getHotTrips({ commit }) {
    return new Promise((resolve, reject) => {
      getHotTrips().then(response => {
        const data = response.results.data
        commit('SET_HOT_TRIPS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTripByTripId({ commit }, params) {
    return new Promise((resolve, reject) => {
      getByTripId({ tripId: params.tripId }).then(response => {
        const data = []
        data.push(response.results.data)
        commit('SET_TRIPS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  validateInfo({ commit }, params) {
    commit('SET_VALIDATE', params)
  },
  fillAllCustomer({ commit }, params) {
    commit('SET_STATUS_FILL_ALL', params)
  },
  firstCustomerInfo({ commit }, params) {
    commit('SET_FIRST_CUSTOMER_INFO', params)
  },
  priceManualCreate({ commit }, params) {
    return new Promise((resolve, reject) => {
      priceManualCreate({
        vehicleId: params.vehicleId,
        isOwned: params.isOwned,
        isPublic: params.isPublic,
        listPlace: params.listPlace,
        numberTicket: params.numberTicket,
        runTime: params.runTime,
        endTime: params.endTime,
        minSeat: params.minSeat
      }).then(response => {
        const data = response.results.data
        commit('SET_PRICE_MANUAL_CREATE_TRIP', data)
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
