<template>
  <div v-loading="loadingGetTickets" element-loading-spinner="el-icon-kbus-loading" class="tickets-wrapper">
    <div v-if="tickets.length > 0" class="trip-info">
      <div class="row no-gutters">
        <div class="col text-center">
          <label class="time">{{ formatStartTime }}</label>
          <label class="date">{{ formatStartDate }}</label>
          <label v-if="tickets[0].pointUp" class="point-name">{{ tickets[0].pointUp.name }}</label>
          <label v-if="tickets[0].pointUp" class="point-address">{{ tickets[0].pointUp.address }}</label>
          <label v-if="!tickets[0].pointUp && getPointManual" class="point-name">{{ getPointManual[0].name ? getPointManual[0].name : '' }}</label>
          <label v-if="!tickets[0].pointUp && getPointManual" class="point-address">{{ getPointManual[0].address }}</label>
        </div>
        <div id="distance" class="col-auto text-center">
          <div v-if="formatDistanceTime" class="text">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15691 0.70942C3.31741 0.934126 3.26536 1.2464 3.04066 1.40691L1.29066 2.65691C1.06595 2.81741 0.753677 2.76536 0.593172 2.54066C0.432668 2.31595 0.484713 2.00368 0.70942 1.84317L2.45942 0.593172C2.68413 0.432668 2.9964 0.484713 3.15691 0.70942ZM8.84317 0.70942C9.00368 0.484713 9.31595 0.432668 9.54066 0.593172L11.2907 1.84317C11.5154 2.00368 11.5674 2.31595 11.4069 2.54066C11.2464 2.76536 10.9341 2.81741 10.7094 2.65691L8.95942 1.40691C8.73471 1.2464 8.68267 0.934126 8.84317 0.70942ZM0.916696 6.50005C0.916696 3.69258 3.19257 1.41671 6.00004 1.41671C8.80748 1.41671 11.0834 3.69258 11.0834 6.50005C11.0834 9.30749 8.80748 11.5834 6.00004 11.5834C3.19257 11.5834 0.916696 9.30749 0.916696 6.50005ZM6.00004 2.41671C3.74486 2.41671 1.9167 4.24487 1.9167 6.50005C1.9167 8.75521 3.74486 10.5834 6.00004 10.5834C8.2552 10.5834 10.0834 8.75521 10.0834 6.50005C10.0834 4.24487 8.2552 2.41671 6.00004 2.41671ZM5.93994 3.33843C6.21609 3.33846 6.43992 3.56234 6.43989 3.83848L6.43961 6.38354L8.23622 8.18015C8.43148 8.37541 8.43148 8.69199 8.23622 8.88725C8.04096 9.08252 7.72437 9.08252 7.52911 8.88725L5.58604 6.94418C5.49225 6.8504 5.43957 6.7232 5.43959 6.59057L5.43989 3.83837C5.43992 3.56223 5.6638 3.3384 5.93994 3.33843Z" fill="white" />
            </svg>
            <span class="text">{{ formatDistanceTime.hours }} giờ {{ formatDistanceTime.minutes }}p</span>
          </div>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5002 3.33334C22.0581 3.33334 21.6342 3.50894 21.3217 3.8215C21.0091 4.13406 20.8335 4.55798 20.8335 5.00001V14.1667C20.8335 14.6269 21.2066 15 21.6668 15H22.6424C22.9856 15.971 23.9116 16.6667 25.0002 16.6667C26.0887 16.6667 27.0147 15.971 27.3579 15H32.6424C32.9856 15.971 33.9116 16.6667 35.0002 16.6667C36.0887 16.6667 37.0147 15.971 37.3579 15H38.3335C38.7937 15 39.1668 14.6269 39.1668 14.1667V10C39.1668 8.30635 38.6883 6.64673 37.7912 5.39086C36.8916 4.13145 35.6007 3.33334 34.1668 3.33334H22.5002ZM29.1668 5.00001H26.6668V7.50001H29.1668V5.00001ZM30.8335 7.50001V5.00001H32.6597L33.1955 7.50001H30.8335ZM22.5002 9.16668V13.3333H22.6424C22.9856 12.3623 23.9116 11.6667 25.0002 11.6667C26.0887 11.6667 27.0147 12.3623 27.3579 13.3333H32.6424C32.9856 12.3623 33.9116 11.6667 35.0002 11.6667C36.0887 11.6667 37.0147 12.3623 37.3579 13.3333H37.5002V10.8335H34.5835C34.1905 10.8335 33.851 10.559 33.7686 10.1748L33.5526 9.16668H22.5002ZM22.5002 5.00001H25.0002V7.50001H22.5002V5.00001ZM35.2571 9.16685H37.4526C37.3284 8.08758 36.9666 7.10379 36.435 6.35959C35.8283 5.51019 35.0831 5.07708 34.3663 5.00944L35.2571 9.16685Z" fill="#2D225E" />
            <rect x="12" y="9" width="4" height="1" fill="#2D225E" />
            <rect x="6" y="9" width="4" height="1" fill="#2D225E" />
            <rect y="9" width="4" height="1" fill="#2D225E" />
            <rect x="56" y="9" width="4" height="1" fill="#2D225E" />
            <rect x="50" y="9" width="4" height="1" fill="#2D225E" />
            <rect x="44" y="9" width="4" height="1" fill="#2D225E" />
          </svg>
        </div>
        <div class="col text-center">
          <label class="time">{{ formatEndTime }}</label>
          <label class="date">{{ formatEndDate }}</label>
          <label v-if="tickets[0].pointDown" class="point-name">{{ tickets[0].pointDown.name }}</label>
          <label v-if="tickets[0].pointDown" class="point-address">{{ tickets[0].pointDown.address }}</label>
          <label v-if="!tickets[0].pointDown && getPointManual" class="point-name">{{ getPointManual[getPointManual.length - 1].name ? getPointManual[getPointManual.length - 1].name: '' }}</label>
          <label v-if="!tickets[0].pointDown && getPointManual" class="point-address">{{ getPointManual[getPointManual.length - 1].address }}</label>
        </div>
      </div>
      <div class="w-100 ticket-note">
        <span v-if="tickets.length > 0 && tickets[0].trip.note">{{ $t('history.noteTrip') }}: {{ tickets[0].trip.note }}</span>
      </div>
    </div>
    <div v-if="tickets.length > 0" class="customer-info">
      <template v-for="(passenger, p) in passengersInfo">
        <div :key="p" class="wrapper">
          <div class="row no-gutters">
            <div class="col">
              <label class="text-title">HK{{ p + 1 }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.fullName') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.phoneNumber') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.email') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.sex.label') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.price') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.promotion') }}</label>
              <label class="text-title">{{ $t('history.passengerInfo.discount') }}</label>
              <label class="text-title" :style="{ 'color': getColorTicketStatus(passenger.ticketStatus) }">{{ getLabelTicketStatus(passenger.ticketStatus) }}</label>
            </div>
            <div class="col text-right">
              <label class="content" style="height: 24px" />
              <label class="content">{{ passenger.fullName }}</label>
              <label class="content">{{ passenger.phoneNumber }}</label>
              <label class="content">{{ passenger.email }}</label>
              <label v-if="passenger.sex === 'MALE'" class="content">{{ $t('history.passengerInfo.sex.male') }}</label>
              <label v-if="passenger.sex === 'FEMALE'" class="content">{{ $t('history.passengerInfo.sex.female') }}</label>
              <label class="content">{{ numeral(passenger.totalPrice).format('0,0') }}đ</label>
              <label class="content">{{ numeral(passenger.discountPrice).format('0,0') }}đ</label>
              <label class="content">{{ numeral(passenger.promotionMoney).format('0,0') }}đ</label>
              <!-- <label v-if="passenger.ticketStatus === 3" class="content">
                <el-button class="btn-cancel-ticket" :loading="loadingCancelPerTicket === passenger.ticketId ? true : false" @click="cancelPerTicket(passenger.ticketId)">Hủy vé</el-button>
              </label> -->
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="row no-gutters align-items-end mt-3">
      <div class="col-md-6">
        <div v-if="tickets.length > 0 && (hasTicketsBooked || hasTicketsPaid)" class="share">
          <span class="description">{{ $t('history.share') }}:</span>
          <div class="list-icon">
            <a href="" :title="$t('history.share')" @click.prevent="shareTrip()">
              <img src="@/assets/images/icon-share-2.svg" alt="share trip">
            </a>
          </div>
          <form-share-link v-model="dialogShareTrip" :trip="tickets[0].trip" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="pay-btn">
          <label v-if="hasTicketsBooked" class="countdown pt-3 text-right">
            <span class="label-time-remain">{{ $t('history.payExpire') }}: </span>
            <time-countdown ref="TimeCountdown" :expire="timeExpire" @pay-expire="payExpire" />
          </label>
          <el-button
            v-if="(hasTicketsBooked && !isPayExpire) || hasTicketsPaid"
            type="primary"
            class="btn-edit-info"
            :loading="loadingEditInfo"
            @click="handleOpenFormEditInfo"
          >
            {{ $t('history.btnEdit') }}
          </el-button>
          <form-edit-customer-info v-model="openFormEditInfo" :infos="passengersInfo" />
          <div class="row no-gutters justify-content-end" style="gap: 8px">
            <div class="col-auto">
              <el-button
                v-if="hasTicketsBooked && !isPayExpire"
                class="btn-pay"
                :loading="loadingPay"
                :disabled="tickets && tickets.length <= 0 || isPayExpire"
                @click="handlePayTicket"
              >
                {{ $t('history.btnPay') }}
              </el-button>
            </div>
            <div class="col-auto">
              <el-button
                v-if="(hasTicketsBooked && !isPayExpire) || hasTicketsPaid"
                class="btn-cancel-ticket"
                :loading="loadingCancelAllTicket"
                @click="cancelAllTicket"
              >
                {{ $t('history.btnCancel') }}
              </el-button>
            </div>
          </div>
          <el-button v-if="hasTicketsCompleted" class="btn-rate-trip" @click="dialogRateTrip = true">{{ $t('history.rateTrip') }}</el-button>
          <form-rate-trip v-model="dialogRateTrip" :tickets="tickets" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUTCTime, convertMstoHoursAndMinutes } from '@/utils/index'
import { mapGetters } from 'vuex'
import TimeCountdown from '@/components/Payment/TimeCountdown.vue'
import { TICKET_STATUS } from '@/utils/enum'
// import { copyToClipboard } from '@/utils/index'
import FormRateTrip from '@/components/Popup/FormRateTrip.vue'
import FormShareLink from '@/components/Popup/FormShareLink.vue'
import FormEditCustomerInfo from '@/components/History/FormEditCustomerInfo.vue'

export default {
  components: {
    TimeCountdown,
    FormRateTrip,
    FormShareLink,
    FormEditCustomerInfo
  },
  props: {
    selectedTicket: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tickets: [],
      loadingGetTickets: false,
      loadingPay: false,
      loadingCancelPerTicket: null,
      loadingCancelAllTicket: false,
      loadingEditInfo: false,
      isPayExpire: false,
      dialogRateTrip: false,
      dialogShareTrip: false,
      openFormEditInfo: false
    }
  },
  computed: {
    ...mapGetters([
      'paymeResponse',
      'userInfo',
      'statusUpdateTicket',
      'systemConfig'
    ]),
    formatStartTime() {
      let data = ''
      if (this.tickets.length > 0) {
        data = this.$moment.utc(this.tickets[0].trip.runTime).format('HH:mm')
      }
      return data
    },
    formatStartDate() {
      let data = ''
      if (this.tickets.length > 0) {
        const startDate = new Date(this.tickets[0].trip.runTime)
        data = this.$moment.utc(startDate).format('DD/MM/YYYY')
      }
      return data
    },
    formatDistanceTime() {
      let data = ''
      if (this.tickets.length > 0) {
        const distance = convertMstoHoursAndMinutes(this.tickets[0].trip.finishTime)
        data = distance
      }
      return data
    },
    formatEndTime() {
      let data = ''
      if (this.tickets.length > 0) {
        const startTime = new Date(this.tickets[0].trip.runTime)
        const startTimeMillisec = startTime.getTime()
        const endTimeMillisec = new Date(startTimeMillisec + this.tickets[0].trip.finishTime)
        const endTime = getUTCTime(endTimeMillisec)
        data = endTime.hours + ':' + endTime.minutes
      }
      return data
    },
    formatEndDate() {
      let data = ''
      if (this.tickets.length > 0) {
        const startTime = new Date(this.tickets[0].trip.runTime)
        const startTimeMillisec = startTime.getTime()
        const endTimeMillisec = new Date(startTimeMillisec + this.tickets[0].trip.finishTime)
        data = this.$moment.utc(endTimeMillisec).format('DD/MM/YYYY')
      }
      return data
    },
    passengersInfo() {
      const data = []
      if (this.tickets.length > 0) {
        this.tickets.forEach((ticket, t) => {
          // check discount price (chiết khấu)
          let discountPrice = 0
          if (ticket.isOwned) {
            discountPrice = 0
          } else {
            // if (ticket.paidMoney) {
            //   discountPrice = ticket.paidMoney - ticket.priceEstimate <= 0 ? 0 : ticket.paidMoney - ticket.priceEstimate
            // } else {
            //   discountPrice = ticket.basePrice - ticket.priceEstimate
            // }
            discountPrice = ticket.refundMoney ? ticket.refundMoney : 0
          }

          data.push({
            ticketStatus: ticket.status,
            ticketId: ticket.id,
            fullName: ticket.fullName,
            phoneNumber: ticket.phoneNumber,
            email: ticket.email,
            sex: ticket.sex,
            totalPrice: ticket.paidMoney && ticket.paidMoney > 0 ? ticket.paidMoney : ticket.basePrice,
            discountPrice: discountPrice,
            promotionMoney: ticket.discountMoney
          })
        })
      }
      return data
    },
    timeExpire() {
      let expire = ''
      if (this.tickets.length > 0) {
        expire = new Date(this.tickets[0].createdAt).getTime() + this.systemConfigData.ticketHolderTime
      }
      return expire
    },
    hasTicketsBooked() {
      const data = this.passengersInfo.filter((info, i) => info.ticketStatus === 1 || info.ticketStatus === 2)
      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    hasTicketsPaid() {
      const data = this.passengersInfo.filter((info, i) => info.ticketStatus === 3)
      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    hasTicketsCompleted() {
      const data = this.passengersInfo.filter((info, i) => info.ticketStatus === 5)
      if (data.length > 0) {
        return true
      } else {
        return false
      }
    },
    getPointManual() {
      let points = null
      if (this.tickets.length > 0) {
        points = JSON.parse(this.tickets[0].trip.pointManual)
      }
      return points
    },
    systemConfigData() {
      let data = null
      if (this.systemConfig) {
        data = JSON.parse(this.systemConfig.data)
      }
      return data
    }
  },
  watch: {
    'statusUpdateTicket': function(val) {
      if (val) {
        this.getTicketsByTicketCode()
      }
    }
  },
  mounted() {
    this.getTicketsByTicketCode()
  },
  methods: {
    getTicketsByTicketCode() {
      this.loadingGetTickets = true
      this.$store.dispatch('ticket/getTicketsByTicketCode', { ticketCode: this.selectedTicket }).then(resp => {
        this.tickets = resp
        this.loadingGetTickets = false
        this.$store.dispatch('ticket/changeStatusUpdateTicket', false)
      }).catch(err => {
        this.loadingGetTickets = false
        console.log(err)
        this.$message.error(this.$t('message.common.undefinedError'))
      })
    },
    handleOpenFormEditInfo() {
      this.openFormEditInfo = true
    },
    handlePayTicket() {
      // get list ticket ids
      const listTicketAvailable = this.tickets.filter(ticket => ticket.status !== 0)
      // get list ticket ids
      const listTicketIds = listTicketAvailable.map(ticket => ticket.id)

      // get response payme
      this.loadingPay = true
      this.$store.dispatch('payme/getPaymeResponse', { ticketIds: listTicketIds }).then(resp => {
        window.location.href = this.paymeResponse.data.url
        this.loadingPay = false
      }).catch(err => {
        this.$message.error(this.$t('message.common.undefinedError'))
        console.log(err)
        this.loadingPay = false
      })
    },
    payExpire(val) {
      this.isPayExpire = true
    },
    getLabelTicketStatus(ticketStatus) {
      let label = ''
      switch (true) {
        case ticketStatus === TICKET_STATUS.CANCELED:
          label = this.$t('history.ticketStatus.canceled')
          break
        case ticketStatus === TICKET_STATUS.NEW && !this.isPayExpire:
          label = this.$t('history.ticketStatus.booked')
          break
        case ticketStatus === TICKET_STATUS.BOOKED && !this.isPayExpire:
          label = this.$t('history.ticketStatus.booked')
          break
        case (ticketStatus === TICKET_STATUS.NEW || ticketStatus === TICKET_STATUS.BOOKED) && this.isPayExpire:
          label = this.$t('history.ticketStatus.timeout')
          break
        case ticketStatus === TICKET_STATUS.BOUGHT:
          label = this.$t('history.ticketStatus.bought')
          break
        case ticketStatus === TICKET_STATUS.ON_THE_TRIP:
          label = this.$t('history.ticketStatus.onTrip')
          break
        case ticketStatus === TICKET_STATUS.COMPLETED:
          label = this.$t('history.ticketStatus.completed')
          break
      }
      return label
    },
    getColorTicketStatus(ticketStatus) {
      let color = ''
      switch (true) {
        case ticketStatus === TICKET_STATUS.CANCELED:
          color = 'red'
          // #FF4868
          break
        case ticketStatus === TICKET_STATUS.NEW && !this.isPayExpire:
          color = '#F39B13'
          break
        case ticketStatus === TICKET_STATUS.BOOKED && !this.isPayExpire:
          color = '#F39B13'
          break
        case (ticketStatus === TICKET_STATUS.NEW || ticketStatus === TICKET_STATUS.BOOKED) && this.isPayExpire:
          color = 'red'
          break
        case ticketStatus === TICKET_STATUS.BOUGHT:
          color = '#ED196B'
          break
        case ticketStatus === TICKET_STATUS.ON_THE_TRIP:
          color = '#0091FE'
          break
        case ticketStatus === TICKET_STATUS.COMPLETED:
          color = '#50C694'
          break
      }
      return color
    },
    cancelPerTicket(ticketId) {
      // label confirm cancel ticket
      let label = ''
      const startTime = new Date(this.$moment(this.tickets[0].trip.runTime))
      const currentTime = new Date()

      // convert datetime to milliseconds
      // console.log(startTime, currentTime)
      const startTimeMillisec = startTime.getTime() - 25200000 // múi giờ GMT+7
      const currentTimeMillisec = currentTime.getTime()
      const distance = startTimeMillisec - 43200000
      // console.log(distance)
      if (currentTimeMillisec > distance) {
        label = `${this.$t('history.confirmCancel.confirm')}\n\n${this.$t('history.confirmCancel.after12')}`
      } else if (currentTimeMillisec < distance) {
        label = `${this.$t('history.confirmCancel.confirm')}\n\n${this.$t('history.confirmCancel.before12')}`
      }

      if (confirm(label)) {
        const listTicketIds = []
        listTicketIds.push(ticketId)

        // call api cancel ticket
        this.loadingCancelPerTicket = ticketId
        this.$store.dispatch('ticket/cancelTicket', { ticketIds: listTicketIds }).then(resp => {
          this.loadingCancelPerTicket = null
          this.getTicketsByTicketCode()
        }).catch(err => {
          console.log(err)
          this.loadingCancelPerTicket = null
          this.$message.error(this.$t('message.common.undefinedError'))
        })
      } else if (distance < 0) {
        alert(label)
      }
    },
    cancelAllTicket() {
      const ticketsBookedAndPaid = this.tickets.filter((ticket, t) => ticket.status !== 0)
      const listTicketIds = ticketsBookedAndPaid.map((ticket, t) => ticket.id)

      // label confirm cancel ticket
      let label = ''
      const startTime = new Date(this.tickets[0].trip.runTime)
      const currentTime = new Date()

      // convert datetime to milliseconds
      // console.log(startTime, currentTime)
      const startTimeMillisec = startTime.getTime() - 25200000 // múi giờ GMT+7
      const currentTimeMillisec = currentTime.getTime()
      const distance = startTimeMillisec - 43200000
      // console.log(distance)
      if (currentTimeMillisec > distance) {
        label = `${this.$t('history.confirmCancel.confirm')}\n\n${this.$t('history.confirmCancel.after12')}`
      } else if (currentTimeMillisec < distance) {
        label = `${this.$t('history.confirmCancel.confirm')}\n\n${this.$t('history.confirmCancel.before12')}`
      }

      if (confirm(label)) {
        // call api cancel ticket
        this.loadingCancelPerTicket = true
        this.$store.dispatch('ticket/cancelTicket', { ticketIds: listTicketIds }).then(resp => {
          this.loadingCancelPerTicket = false
          this.getTicketsByTicketCode()
        }).catch(err => {
          console.log(err)
          this.loadingCancelPerTicket = false
          this.$message.error(this.$t('message.common.undefinedError'))
        })
      }
    },
    shareTrip() {
      this.dialogShareTrip = true
    }
  }
}
</script>
<style lang="scss" scoped>
$gray-60: #B0B5C1;
$main: #ed196b;
$white: #ffffff;
$deep-sea: #2D225E;
$dark-70: #9399A9;
$dark-100: #383F47;
$gray-40: #ECEDF1;
$pink: #FBD1E1;
$orange-100: #F39B13;
$orange-50: #FDEBD0;

.tickets-wrapper{
  min-height: 560px;
  label{
    display: block;
    margin-bottom: 4px;
    &:last-child{
      margin-bottom: 0;
    }
  }

  .trip-info{
    border-bottom: 1px dashed $gray-60;

    .time{
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      color: $deep-sea;
    }

    .date{
      font-size: 12px;
      line-height: 16px;
      color: $dark-70;
      font-weight: 600;
    }

    .point-name{
      font-size: 16px;
      line-height: 18px;
      color: $dark-100;
      font-weight: 600;
    }

    .point-address{
      font-size: 12px;
      line-height: 16px;
      color: $dark-70;
      font-weight: 600;
    }

    .ticket-note{
      padding-bottom: 4px;
      > span{
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: red;
        font-style: italic;
      }
    }
  }

  #distance{
    height: fit-content;
    margin-block: auto;
    .text{
      font-size: 10px;
      line-height: 12px;
      font-weight: 500;
      color: $white;
      padding: 1px 4px;
      background: $main;
      border-radius: 8px;
      display: grid;
      grid-auto-flow: column;
      grid-gap: 4px;
      align-items: center;
    }
  }

  .customer-info{
    margin-top: 1rem;
    max-height: 400px;
    overflow-y: auto;

    label{
      &:last-child{
       margin-bottom: 0;
      }
    }

    .wrapper {
      border-bottom: 1px solid $gray-40;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      padding-right: 0.5rem;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      .text-title {
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: $dark-70;
      }

      .content {
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: $deep-sea;

        .btn-cancel-ticket{
          padding: 6px 16px;
          background: $pink;
          border-radius: 4px;
          color: $main;
          border-color: transparent;
        }
      }
    }
  }

  .share{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    .list-icon{
      display: flex;
      gap: 16px;

      a{
        border: 1px solid $gray-40;
        padding: 12px;
        border-radius: 8px;
        background: transparent;
        text-decoration: none;

        img{
          width: 100%;
          max-width: 24px;
          height: auto;
        }

        span{
          margin-left: 4px;
          font-size: 14px;
          line-height: 22px;
          font-weight: 500;
          color: $deep-sea;
        }
      }
    }
  }

  .pay-btn{
    font-size: 14px;
    line-height: 24px;

    .btn-pay{
      margin-left: auto;
      margin-top: 8px;
      padding: 12px 16px;
      background: $pink;
      border-radius: 8px;
      height: 32px;
      color: $main;
      border-color: transparent;
      font-weight: 600;
      letter-spacing: -0.41px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover, &:focus{
        opacity: 0.8;
      }
    }

    .label-time-remain{
      font-weight: 600;
    }

    .btn-rate-trip{
      margin-left: auto;
      background: $orange-50;
      color: $orange-100;
      border-color: transparent;
      margin-top: 8px;
      font-weight: normal;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 40px;

      &:hover{
        background-color: rgb(253 235 208 / 80%);
        color: rgb(243 155 19 / 80%);
      }
    }

    .btn-cancel-ticket{
      margin-left: auto;
      margin-top: 8px;
      padding: 12px 16px;
      border-radius: 8px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn-edit-info{
      margin-left: auto;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
  }
}
</style>
