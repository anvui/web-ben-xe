<template>
  <div
    class="tickets-booked-wrapper"
    :class="[ ticket && ticket.ticketCode === selectTicket ? 'active' : '', ticketStatusClass() ]"
    @click="handleSelectTicket(ticket.ticketCode)"
  >
    <div class="row no-gutters align-items-center" style="border-bottom: 1px solid #ECEDF1">
      <div class="col">
        <div class="d-flex align-items-end" style="gap: 8px;">
          <label class="time">{{ formatStartTime }}</label>
          <label class="date">{{ formatStartDate }}</label>
        </div>
        <div>
          <label v-if="ticket.pointUp" class="point-name">{{ ticket.pointUp.name }}</label>
          <label v-if="ticket.pointUp" class="point-address">{{ ticket.pointUp.address }}</label>
          <label v-if="!ticket.pointUp && getPointManual" class="point-name">{{ getPointManual[0].name ? getPointManual[0].name : '' }}</label>
          <label v-if="!ticket.pointUp && getPointManual" class="point-address">{{ getPointManual[0].address }}</label>
        </div>
      </div>
      <div class="col-auto">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.22861 2.31952C7.65464 1.89349 8.34536 1.89349 8.77139 2.31952L13.6805 7.22861C14.1065 7.65464 14.1065 8.34536 13.6805 8.77139L8.77139 13.6805C8.34536 14.1065 7.65464 14.1065 7.22861 13.6805C6.80258 13.2545 6.80258 12.5637 7.22861 12.1377L10.2754 9.09091H3.09091C2.48842 9.09091 2 8.60249 2 8C2 7.39751 2.48842 6.90909 3.09091 6.90909H10.2754L7.22861 3.8623C6.80258 3.43627 6.80258 2.74555 7.22861 2.31952Z" fill="#2D225E" />
        </svg>
      </div>
      <div class="col text-right">
        <label class="route-name" :style="{ 'min-height': ticket.trip && !ticket.trip.route ? '20px' : '' }">{{ ticket.trip && ticket.trip.route ? ticket.trip.route.routeName : '' }}</label>
        <label v-if="ticket.pointDown" class="point-name">{{ ticket.pointDown.name }}</label>
        <label v-if="ticket.pointDown" class="point-address">{{ ticket.pointDown.address }}</label>
        <label v-if="!ticket.pointDown && getPointManual" class="point-name" :style="{ 'min-height': !getPointManual[getPointManual.length - 1].name ? '16px' : '' }">{{ getPointManual[getPointManual.length - 1].name ? getPointManual[getPointManual.length - 1].name : '' }}</label>
        <label v-if="!ticket.pointDown && getPointManual" class="point-address">{{ getPointManual[getPointManual.length - 1].address }}</label>
      </div>
    </div>
    <div class="w-100 mt-2 d-flex">
      <div class="col ticket-code">{{ $t('history.ticketCode') }}: {{ ticket.ticketCode }} ({{ $t('history.quantityTicket', { quantity: countQuantityTicket }) }})</div>
      <div class="col text-right price-ticket">{{ numeral(getTotalPriceTicket).format('0,0') }}đ</div>
    </div>
  </div>
</template>
<script>
import { getUTCTime } from '@/utils/index'
import { TICKET_STATUS } from '@/utils/enum'
import { mapGetters } from 'vuex'

export default {
  props: {
    ticket: {
      type: Object,
      default: null
    },
    selectTicket: {
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'listTicketsBooked',
      'uniqueTicketsByTicketCode'
    ]),
    formatStartTime() {
      if (this.ticket.trip && this.ticket.trip.runTime) {
        const format = getUTCTime(this.ticket.trip.runTime)
        return format.hours + ':' + format.minutes
      } else {
        return null
      }
    },
    formatStartDate() {
      let data = ''
      if (this.ticket.trip && this.ticket.trip.runTime) {
        const startDate = new Date(this.ticket.trip.runTime)
        data = this.$moment.utc(startDate).format('DD/MM/YYYY')
      } else {
        data = null
      }
      return data
    },
    getTicketSelect: {
      get() {
        return this.selectTicket
      },
      set(value) {
        this.$emit('getTicketSelect', value)
      }
    },
    ticketsByTicketCode() {
      const ticketsByTicketCode = this.listTicketsBooked.filter((ticket, t) => ticket.ticketCode === this.ticket.ticketCode)
      return ticketsByTicketCode
    },
    getTotalPriceTicket() {
      let totalPrice = 0
      if (this.ticketsByTicketCode.length > 0) {
        // price = this.ticket.paidMoney * this.ticketsByTicketCode.length
        let ticketPrice = 0
        if (this.ticket.paidMoney) {
          ticketPrice = this.ticket.paidMoney
        } else {
          ticketPrice = this.ticket.basePrice - this.ticket.discountMoney
        }
        totalPrice = ticketPrice * this.ticketsByTicketCode.length
      }
      return parseInt(totalPrice)
    },
    countQuantityTicket() {
      let count = 0
      if (this.listTicketsBooked.length > 0) {
        const mapTickets = this.listTicketsBooked.filter((ticket, t) => ticket.ticketCode === this.ticket.ticketCode && ticket.status !== 0)
        count = mapTickets.length
      }
      return count
    },
    getPointManual() {
      let points = null
      if (this.ticketsByTicketCode.length > 0 && this.ticketsByTicketCode[0].trip && this.ticketsByTicketCode[0].trip.pointManual) {
        points = JSON.parse(this.ticketsByTicketCode[0].trip.pointManual)
      } else {
        points = null
      }
      return points
    }
  },
  methods: {
    handleSelectTicket(ticketCode) {
      this.getTicketSelect = ticketCode
    },
    ticketStatusClass() {
      if (this.ticket.status === TICKET_STATUS.CANCELED) {
        return 'ticket-canceled'
      } else if (this.ticket.status === TICKET_STATUS.NEW || this.ticket.status === TICKET_STATUS.BOOKED) {
        return 'ticket-unpaid'
      } else if (this.ticket.status === TICKET_STATUS.BOUGHT) {
        return 'ticket-paid'
      } else if (this.ticket.status === TICKET_STATUS.COMPLETED) {
        return 'ticket-completed'
      } else if (this.ticket.status === TICKET_STATUS.ON_THE_TRIP) {
        return 'ticket-departed'
      }
    }
  }
}
</script>
<style lang="scss">
$dark-100: #383F47;

.tickets-booked-wrapper{
  .countdown{
    .content{
      font-size: 16px;
      line-height: 18px;
      color: $dark-100;
    }
  }
}
</style>

<style lang="scss" scoped>
$deep-sea: #2D225E;
$yellow: #F39B13;
$main: #ED196B;
$red: #FF4868;
$gray-80: #646D84;
$gray-40: #ECEDF1;
$dark-70: #9399A9;
$dark-100: #383F47;
$green-70: #50C694;
$blue-100: #0091FE;

.tickets-booked-wrapper{
  padding: 16px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid #ECEDF1;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:last-child{
    margin-bottom: 0;
  }

  label{
    display: block;
    cursor: pointer;
    margin-bottom: 8px;
  }

  .date, .ticket-code{
    font-size: 12px;
    line-height: 16px;
    color: $gray-80;
  }

  .time{
    font-size: 20px;
    line-height: 20px;
    color: $deep-sea;
  }

  .point-name, .ticket-status{
    font-size: 16px;
    line-height: 18px;
    color: $dark-100;
  }

  .route-name, .point-address{
    font-size: 14px;
    line-height: 16px;
    color: $gray-80;
  }

  .price-ticket{
    font-size: 16px;
    line-height: 18px;
    color: $main;
  }

  &.active{
    border-color: $main !important;
  }
}

// define class for ticket status
// .ticket-unpaid{
//   border-color: $yellow;
// }
// .ticket-paid{
//   border-color: $main;
// }
// .ticket-completed{
//   border-color: $green-70;
// }
// .ticket-canceled{
//   border-color: $red;
// }
// .ticket-departed{
//   border-color: $blue-100;
// }
</style>
