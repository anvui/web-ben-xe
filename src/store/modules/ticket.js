import { book, listTickets, cancelTicket, updateTicket } from '@/api/ticket'
import { Promise } from 'core-js'

const getDefaultState = () => {
  return {
    listTicketsBooked: [],
    statusUpdateTicket: false,
    uniqueTicketsByTicketCode: [],
    ticketsByTicketCode: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_LIST_TICKET_BOOKED: (state, tickets) => {
    state.listTicketsBooked = tickets
    state.uniqueTicketsByTicketCode = tickets.filter((item, index, self) => (
      index === self.findIndex(map => map.ticketCode === item.ticketCode)
    ))
  },
  SET_TICKETS_BY_TICKET_CODE: (state, tickets) => {
    state.ticketsByTicketCode = tickets
  },
  SET_STATUS_UPDATE_TICKET: (state, status) => {
    state.statusUpdateTicket = status
  }
}

const actions = {
  bookTicket({ commit }, params) {
    // console.log(params)
    return new Promise((resolve, reject) => {
      book({
        tripId: params.tripId,
        personInfos: params.personInfos,
        pointUpId: params.pointUpId,
        pointDownId: params.pointDownId,
        referralUser: params.referralUser,
        promotionCode: params.promotionCode.trim(),
        pointUpManual: params.pointUpManual,
        pointDownManual: params.pointDownManual,
        invoiceTicketInfo: params.invoiceInfo
      }).then(response => {
        resolve(response.results.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  ticketsBooked({ commit }, params) {
    return new Promise((resolve, reject) => {
      listTickets({
        ticketStatuses: params.ticketStatuses
      }).then(response => {
        const resp = response.results.data
        commit('SET_LIST_TICKET_BOOKED', resp)
        resolve(resp)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTicketsByTicketCode({ commit }, params) {
    return new Promise((resolve, reject) => {
      listTickets({
        ticketCode: params.ticketCode
      }).then(response => {
        const resp = response.results.data
        commit('SET_TICKETS_BY_TICKET_CODE', resp)
        resolve(resp)
      }).catch(error => {
        reject(error)
      })
    })
  },
  cancelTicket({ commit }, params) {
    return new Promise((resolve, reject) => {
      cancelTicket({
        ticketIds: params.ticketIds
      }).then(response => {
        const resp = response.results.data
        resolve(resp)
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateTicket({ commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      updateTicket(params).then(response => {
        const resp = response.results.data
        dispatch('changeStatusUpdateTicket', true)
        resolve(resp)
      }).catch(error => {
        reject(error)
      })
    })
  },
  changeStatusUpdateTicket({ commit }, params) {
    commit('SET_STATUS_UPDATE_TICKET', params)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
