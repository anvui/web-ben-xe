<template>
  <div v-loading="loading" element-loading-spinner="el-icon-kbus-loading" class="booked-tickets-wrapper">
    <div v-if="previousOrder.length > 0" class="row no-gutters info-trip">
      <div id="route-info" class="col-md-6 text-center">
        <div id="start-point" class="col-md point">
          <span class="time">{{ formatStartTime }}</span>
          <span class="date">{{ formatStartDate }}</span>
          <span v-if="previousOrder.length > 0" class="point-name">{{ detechPointName(lastOrder.param.informationsBySeats[0].pointUp.id) }}</span>
          <!-- <span v-if="previousOrder.length > 0" class="point-address">{{ previousOrder[0].pointUp.address }}</span> -->
        </div>
        <div id="distance" class="col-auto">
          <div class="text">
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
        <div id="end-point" class="col-md point">
          <span class="time">{{ formatEndTime }}</span>
          <span class="date">{{ formatEndDate }}</span>
          <span v-if="previousOrder.length > 0" class="point-name">{{ detechPointName(lastOrder.param.informationsBySeats[0].pointDown.id) }}</span>
        </div>
      </div>
      <div id="number-customer" class="col-md">
        <label class="total-customer d-block">{{ $t('payment.numberCustomer.quantity') }} {{ previousOrder.length }}</label>
        <span id="number-male">{{ countMale }} {{ $t('payment.numberCustomer.male') }} </span>
        <span id="number-female">{{ countFemale }} {{ $t('payment.numberCustomer.female') }}</span>
      </div>
      <div id="wait-to-pay" class="col-md">
        <div v-if="hasTicketsBooked" id="countdown">
          <span class="text-title mr-2">{{ $t('payment.countdown') }}: </span>
          <time-countdown ref="TimeCountdown" :expire="timeExpire" @pay-expire="payExpire" />
        </div>
      </div>
    </div>
    <div v-if="previousOrder.length > 0" class="w-100 list-passengers-info">
      <template v-for="(passenger, p) in previousOrder">
        <div :key="p" class="wrapper">
          <div class="passenger-info-item">
            <label class="text-title">HK{{ p + 1 }}</label>
          </div>
          <div class="passenger-info-item">
            <label class="text-title">{{ $t('payment.passengerInfo.fullName') }}</label>
            <label class="text-content">{{ passenger.fullName }}</label>
          </div>
          <div class="passenger-info-item">
            <label class="text-title">{{ $t('payment.passengerInfo.phoneNumber') }}</label>
            <label class="text-content">{{ passenger.phoneNumber }}</label>
          </div>
          <div class="passenger-info-item">
            <label class="text-title">{{ $t('payment.passengerInfo.email') }}</label>
            <label class="text-content">{{ passenger.email || '-Không xác định-' }}</label>
          </div>
          <div class="passenger-info-item">
            <label class="text-title">{{ $t('payment.passengerInfo.sex') }}</label>
            <label class="text-content">Nam</label>
          </div>
          <!-- <div class="passenger-info-item">
            <label class="text-title">{{ $t('payment.passengerInfo.price') }}</label>
            <label class="text-content">{{ numeral(passenger.totalPrice).format('0,0') }}đ</label>
          </div> -->
          <!-- <div class="passenger-info-item">
            <label class="text-title" :style="{ 'color': getColorTicketStatus(passenger.ticketStatus) }">{{ getLabelTicketStatus(passenger.ticketStatus) }}</label>
          </div> -->
        </div>
      </template>
    </div>
    <!-- <div class="price-and-discount">
      <div class="text-title">
        <label class="price">{{ $t('payment.priceSection.price') }}</label>
        <label class="discount">{{ $t('payment.priceSection.discount') }}</label>
        <label class="discount">{{ $t('payment.priceSection.remain') }}</label>
      </div>
      <div class="text-content">
        <label class="price">{{ numeral(totalPrice - discountMoney).format('0,0') }}đ</label>
        <label class="discount">{{ numeral(discountPriceNow).format('0,0') }}đ</label>
        <label class="discount">{{ numeral(totalPrice - discountPriceNow - discountMoney).format('0,0') }}đ</label>
      </div>
    </div> -->
    <!-- <div class="description">
      <template v-for="(item, i) in $t('payment.description')">
        <span :key="i">{{ item }}</span>
      </template>
    </div> -->
    <div class="pay">
      <el-button
        class="btn-pay"
        :class="[ previousOrder && previousOrder.length <= 0 || isPayExpire ? 'disabled' : '' ]"
        :loading="loadingPay"
        :disabled="previousOrder && previousOrder.length <= 0 || isPayExpire"
        @click="handlePayTicket"
      >
        Thanh toán
      </el-button>
      <div class="w-100 text-center mt-3">
        <el-button
          class="w-100"
          style="border-radius: 8px"
          :loading="loadingCancelTicket"
          @click.prevent="handleCancelTicket"
        >
          Hủy vé
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getUTCTime } from '@/utils/index'
import { mapGetters } from 'vuex'
import TimeCountdown from '@/components/Payment/TimeCountdown.vue'
import { TICKET_STATUS } from '@/utils/enum'

export default {
  components: { TimeCountdown },
  data() {
    return {
      ticketsBooked: [],
      loading: false,
      loadingPay: false,
      isPayExpire: false,
      loadingCancelTicket: false,
      loadingCancelPerTicket: null,
      previousOrder: []
    }
  },
  computed: {
    ...mapGetters([
      'paymeResponse',
      'userInfo',
      'systemConfig',
      'lastOrder',
      'listPoint'
    ]),
    formatStartTime() {
      if (this.ticketsBooked.length > 0) {
        return this.$moment.utc(this.ticketsBooked[0].trip.runTime).format('HH:mm')
      } else {
        return 0
      }
    },
    formatStartDate() {
      let data = ''
      if (this.ticketsBooked.length > 0) {
        data = this.$moment.utc(this.ticketsBooked[0].trip.runTime).format('DD/MM/YYYY')
      }
      return data
    },
    formatDistanceTime() {
      let data = ''
      if (this.ticketsBooked.length > 0) {
        const distance = getUTCTime(this.ticketsBooked[0].trip.finishTime)
        data = distance
      }
      return data
    },
    formatEndTime() {
      let data = ''
      if (this.ticketsBooked.length > 0) {
        const startTime = new Date(this.ticketsBooked[0].trip.runTime)
        const startTimeMillisec = startTime.getTime()
        const endTimeMillisec = new Date(startTimeMillisec + this.ticketsBooked[0].trip.finishTime)
        const endTime = getUTCTime(endTimeMillisec)
        data = endTime.hours + ':' + endTime.minutes
      }
      return data
    },
    formatEndDate() {
      let data = ''
      if (this.ticketsBooked.length > 0) {
        const startTime = new Date(this.ticketsBooked[0].trip.runTime)
        const startTimeMillisec = startTime.getTime()
        const endTimeMillisec = new Date(startTimeMillisec + this.ticketsBooked[0].trip.finishTime)
        data = this.$moment.utc(endTimeMillisec).format('DD/MM/YYYY')
      }
      return data
    },
    countMale() {
      // let count = 0
      // this.ticketsBooked.forEach((ticket, t) => {
      //   if (ticket.sex === 'MALE') {
      //     count++
      //   }
      // })
      return this.previousOrder.length
    },
    countFemale() {
      const count = 0
      return count
    },
    totalPrice() {
      let total = 0
      if (this.ticketsAvailable.length > 0) {
        this.ticketsAvailable.forEach((ticket, t) => {
          total += ticket.basePrice
        })
      }
      return total
    },
    discountMoney() {
      let total = 0
      if (this.ticketsAvailable.length > 0) {
        this.ticketsAvailable.forEach((ticket, t) => {
          total += ticket.discountMoney
        })
      }
      return total
    },
    ticketsAvailable() {
      let tickets = []
      if (this.ticketsBooked.length > 0) {
        tickets = this.ticketsBooked.filter((ticket) => ticket.status !== 0)
      }
      return tickets
    },
    discountPriceNow() {
      let discount = 0
      if (this.ticketsAvailable.length > 0) {
        const totalPrice = this.ticketsAvailable[0].basePrice
        const priceEstimate = this.ticketsAvailable[0].priceEstimate
        discount = (totalPrice - priceEstimate) * this.ticketsAvailable.length
      }
      return 'null'
    },
    timeExpire() {
      let time = ''
      if (this.ticketsBooked.length > 0) {
        time = new Date(this.ticketsBooked[0].createdAt).getTime() + this.systemConfigData.ticketHolderTime
      }
      return 'null'
    },
    passengersInfo() {
      const data = []
      if (this.ticketsBooked.length > 0) {
        this.ticketsBooked.forEach((ticket, t) => {
          data.push({
            ticketStatus: ticket.status,
            ticketId: ticket.id,
            fullName: ticket.fullName,
            phoneNumber: ticket.phoneNumber,
            email: ticket.email,
            sex: ticket.sex,
            totalPrice: ticket.basePrice,
            discountPrice: ticket.basePrice - ticket.priceEstimate,
            discountMoney: ticket.discountMoney
          })
        })
      }
      return data
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
    getPointManual() {
      let points = null
      if (this.ticketsBooked.length > 0) {
        points = JSON.parse(this.ticketsBooked[0].trip.pointManual)
      }
      return 'null'
    },
    systemConfigData() {
      let data = null
      if (this.systemConfig) {
        data = JSON.parse(this.systemConfig.data)
      }
      return 'null'
    }
  },
  watch: {
  },
  mounted() {
    this.getListTicketsBooked()
  },
  methods: {
    detechPointName(pointId) {
      const detechPoint = this.listPoint.find(x => x.pointId === pointId)
      return detechPoint ? detechPoint.pointName : '-Không xác định-'
    },
    getLabelTicketStatus(ticketStatus) {
      let label = ''
      switch (true) {
        case ticketStatus === TICKET_STATUS.CANCELED:
          label = 'Đã hủy'
          break
        case ticketStatus === TICKET_STATUS.NEW && !this.isPayExpire:
          label = 'Chờ thanh toán'
          break
        case ticketStatus === TICKET_STATUS.BOOKED && !this.isPayExpire:
          label = 'Chờ thanh toán'
          break
        case (ticketStatus === TICKET_STATUS.NEW || ticketStatus === TICKET_STATUS.BOOKED) && this.isPayExpire:
          label = 'Hết hạn thanh toán'
          break
        case ticketStatus === TICKET_STATUS.BOUGHT:
          label = 'Đã thanh toán'
          break
        case ticketStatus === TICKET_STATUS.ON_THE_TRIP:
          label = 'Đã lên xe'
          break
        case ticketStatus === TICKET_STATUS.COMPLETED:
          label = 'Đã hoàn thành'
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
    getListTicketsBooked() {
      this.loading = true
      setTimeout(() => {
        this.ticketsBooked = this.lastOrder // xoa sau
        this.previousOrder = this.lastOrder.listTicket
        console.log('this.lastOrder', this.lastOrder)
        console.log('this.previousOrder', this.previousOrder)
        this.loading = false
      }, 1000)
      // this.$store.dispatch('ticket/getTicketsByTicketCode', { ticketCode: this.$route.query.ticket }).then((response) => {
      //   this.ticketsBooked = response
      //   this.loading = false
      // }).catch(error => {
      //   console.log(error)
      //   this.loading = false
      //   this.$message.error(error.message ? error.message : 'Đã có lỗi xảy ra')
      // })
    },
    handlePayTicket() {
      const listTicketIds = this.previousOrder.map(x => x.id).join('-')
      // get response payme
      this.loadingPay = true
      this.$store.dispatch('system/payOrder', { ticketIds: listTicketIds }).then(resp => {
        window.location.href = resp
        this.loadingPay = false
      }).catch(err => {
        this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
        console.log(err)
        this.loadingPay = false
      })
    },
    payExpire(value) {
      this.$message.error('Đã hết thời gian thanh toán')
      this.isPayExpire = true
    },
    handleCancelTicket() {
      const ticketsBookedAndPaid = this.ticketsBooked.filter((ticket, t) => ticket.status !== 0)
      const listTicketIds = ticketsBookedAndPaid.map((ticket, t) => ticket.id)

      let label = ''
      const startTime = new Date(this.ticketsBooked[0].trip.runTime)
      const currentTime = new Date()

      // convert datetime to milliseconds
      // console.log(startTime, currentTime)
      const startTimeMillisec = startTime.getTime() - 25200000 // múi giờ GMT+7
      const currentTimeMillisec = currentTime.getTime()
      const distance = startTimeMillisec - 43200000
      // console.log(distance)
      if (currentTimeMillisec > distance) {
        label = 'Bạn chắc chắn muốn hủy vé?\n\nHủy vé sau 12 tiếng so với giờ xuất bến: Không được hoàn tiền vé'
      } else if (currentTimeMillisec < distance) {
        label = 'Bạn chắc chắn muốn hủy vé?\n\nHủy vé trước 12 tiếng so với giờ xuất bến: Được hoàn 100% tiền vé'
      }

      if (confirm(label)) {
        // call api cancel ticket
        this.loadingCancelTicket = true
        this.$store.dispatch('ticket/cancelTicket', { ticketIds: listTicketIds }).then(resp => {
          this.loadingCancelTicket = false
          this.getListTicketsBooked()
        }).catch(err => {
          console.log(err)
          this.loadingCancelTicket = false
          this.$message.error('Đã có lỗi xảy ra')
        })
      }
    },
    handleCancelPerTicket(ticketId) {
      let label = ''
      const startTime = new Date(this.ticketsBooked[0].trip.runTime)
      const currentTime = new Date()

      // convert datetime to milliseconds
      // console.log(startTime, currentTime)
      const startTimeMillisec = startTime.getTime() - 25200000 // múi giờ GMT+7
      const currentTimeMillisec = currentTime.getTime()
      const distance = startTimeMillisec - 43200000
      // console.log(distance)
      if (currentTimeMillisec > distance) {
        label = 'Bạn chắc chắn muốn hủy vé?\n\nHủy vé sau 12 tiếng so với giờ xuất bến: Không được hoàn tiền vé'
      } else if (currentTimeMillisec < distance) {
        label = 'Bạn chắc chắn muốn hủy vé?\n\nHủy vé trước 12 tiếng so với giờ xuất bến: Được hoàn 100% tiền vé'
      }

      if (confirm(label)) {
        const listTicketIds = []
        listTicketIds.push(ticketId)
        // call api cancel ticket
        this.loadingCancelPerTicket = ticketId
        this.$store.dispatch('ticket/cancelTicket', { ticketIds: listTicketIds }).then(resp => {
          this.loadingCancelTicket = false
          this.getListTicketsBooked()
        }).catch(err => {
          console.log(err)
          this.loadingCancelPerTicket = false
          this.$message.error('Đã có lỗi xảy ra')
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$white: #ffffff;
$dark-gray: #383F47;
$light-gray: #9399A9;
$gray-40: #ECEDF1;
$orange: #F39B13;
$light-orange: #FDEBD0;
$secondary: #2D225E;
$gray-80: #646D84;
$bg: #F4F7F8;
$main: #ed196b;
$pink: #FBD1E1;

.booked-tickets-wrapper {
  padding: 32px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  .info-trip {
    padding: 24px 48px;
    margin: -32px -32px 0 -32px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  }

  #route-info {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 48px;
    border-right: 1px solid $gray-40;

    .point {
      span{
        display: block;
        margin-bottom: 6px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .time {
        font-size: 24px;
        line-height: 28px;
        font-weight: 600;
        color: $secondary;
      }

      .date {
        font-size: 12px;
        line-height: 16px;
        color: $light-gray;
        font-weight: 600;
      }

      .point-name {
        font-size: 16px;
        line-height: 18px;
        color: $dark-gray;
        font-weight: 600;
        min-height: 18px;
      }

      .point-address {
        font-size: 12px;
        line-height: 16px;
        color: $light-gray;
        font-weight: 600;
      }
    }

    #distance{
      .text{
        font-size: 10px;
        line-height: 12px;
        font-weight: 500;
        color: #fff;
        padding: 1px 4px;
        background: #ed196b;
        border-radius: 8px;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 4px;
        align-items: center;
      }
    }
  }

  #number-customer {
    padding-left: 48px;

    .total-customer {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: $dark-gray;
    }

    #number-male, #number-female {
      font-size: 14px;
      line-height: 22px;
      font-weight: 600;
      color: $gray-80;
    }
  }

  #wait-to-pay {
    text-align: right;
    .btn-status-pay {
      padding: 8px 24px;
      background-color: $light-orange;
      color: $orange;
      font-size: 14px;
      line-height: 22px;
      font-weight: 600;
      outline: none;
      border-color: transparent;
      cursor: default;
    }

    .text-title{
      font-size: 14px;
      line-height: 22px;
      font-weight: 600;
      color: $gray-80;
    }

    .btn-status-cancel{
      background: $pink;
      color: $main;
      padding: 8px 24px;
      font-size: 14px;
      line-height: 22px;
      font-weight: 600;
      outline: none;
      border-color: transparent;
      cursor: default;
    }
  }

  .list-passengers-info {
    margin-top: 1.5rem;
    max-height: 350px;
    overflow: auto;
    padding-right: 0.5rem;

    .wrapper {
      border-bottom: 1px solid $gray-40;
      margin-bottom: 1rem;
      padding-bottom: 1rem;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      .text-title {
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: $gray-80;
      }

      .text-content {
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        color: $dark-gray;
      }
    }

    .passenger-info-item{
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      margin-bottom: 4px;
      &:last-of-type{
        margin-bottom: 0;
      }
    }
  }

  .price-and-discount {
    background-color: $bg;
    margin: 0 -32px;
    padding: 8px 32px;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    label {
      display: block;
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .text-title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: $gray-80;
    }

    .text-content {
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: $dark-gray;
      text-align: right;
    }

    .price {
      color: $dark-gray;
    }

    .discount {
      color: $main;
    }
  }

  .description{
    background: #F4F7F8;
    margin: 0 -32px;
    padding: 0 32px;
    span{
      display: block;
      color: $dark_gray;
      font-style: italic;
      font-weight: normal;
      padding-bottom: 4px;
    }
  }

  .pay {
    margin-top: 1rem;

    .btn-pay {
      background-color: $main;
      padding: 12px 16px;
      width: 100%;
      height: 48px;
      border-radius: 8px;
      outline: none;
      border: transparent;
      font-size: 16px;
      line-height: 18px;
      color: $white !important;

      &:focus, &:hover {
        background-color: rgb(237 25 107 / 80%);
      }

      &.disabled{
        background-color: rgba(237, 25, 107, 0.8) !important;
      }
    }
  }
}
</style>
