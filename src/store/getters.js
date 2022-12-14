const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  routes: state => state.route.routes,
  points: state => state.point.points,
  provinces: state => state.route.provinces,
  trips: state => state.trip.trips,
  userInfo: state => state.user.userInfo,
  dateAndPoint: state => state.trip.dateAndPoint,
  listTicketsBooked: state => state.ticket.listTicketsBooked,
  uniqueTicketsByTicketCode: state => state.ticket.uniqueTicketsByTicketCode,
  ticketsByTicketCode: state => state.ticket.ticketsByTicketCode,
  paymeResponse: state => state.payme.paymeResponse,
  vehicles: state => state.vehicle.listVehicle,
  respCreateTrip: state => state.trip.respCreateTrip,
  respManualCreateTrip: state => state.trip.respManualCreateTrip,
  priceManualCreate: state => state.trip.priceManualCreate,
  tripsCreated: state => state.trip.tripsCreated,
  tripCode: state => state.trip.tripCode,
  tripsHot: state => state.trip.tripsHot,
  listNews: state => state.news.listNews,
  newsById: state => state.news.newsById,
  newsBySlug: state => state.news.newsBySlug,
  promotionResponse: state => state.promotion.respPromotion,
  listComments: state => state.comment.listComments,
  linkShare: state => state.component.link,
  companyInfo: state => state.partner.companyInfo,
  vehiclesRegist: state => state.partner.vehiclesRegist,
  respOtp: state => state.user.respOtp,
  listQuestions: state => state.question.listQuestions,
  webpUrl: state => state.app.webpUrl,
  validate: state => state.trip.validate,
  fillAllCustomer: state => state.trip.fillAllCustomer,
  firstCustomerInfo: state => state.trip.firstCustomerInfo,
  statusUpdateTicket: state => state.ticket.statusUpdateTicket,
  listPlaces: state => state.place.listPlaces,

  systemConfig: state => state.config.systemConfig,
  companyConfig: state => state.system.companyConfig,
  listPoint: state => state.system.points,
  listProvince: state => state.system.provinces,
  searchTripQuery: state => state.system.searchTripQuery,
  selectedTrip: state => state.system.selectedTrip,
  tripSeatMap: state => {
    if (state.system.selectedTrip) {
      const seatMap = state.system.selectedTrip.trip.seatMap ? JSON.parse(state.system.selectedTrip.trip.seatMap) : []
      const seatMapObject = {
        numberOfColumns: Math.max(...seatMap.map(x => x.column)),
        numberOfFloors: Math.max(...seatMap.map(x => x.floor)),
        numberOfRows: Math.max(...seatMap.map(x => x.row)),
        seatList: seatMap
      }
      return seatMapObject
    } else return null
  },
  lastOrder: state => state.system.lastOrder,
  totalPrice: state => state.system.totalPrice
}
export default getters
