<template>
  <div class="container">
    <h4 class="title">Xác nhận thanh toán</h4>
    <div v-loading="loadingGetTrip" class="trip-detail-wrapper">
      <div v-if="getTripByTripCode" class="trip-info">
        <div class="col text-center">
          <label class="time">{{ formatStartTime }}</label>
          <label class="date">{{ formatStartDate }}</label>
          <label class="point-name">{{ getPointUpByRouteId ? getPointUpByRouteId.name : '' }}</label>
          <label class="point-address">{{ getPointUpByRouteId ? getPointUpByRouteId.address : '' }}</label>
        </div>
        <div v-if="formatDistanceTime" id="distance" class="col-auto text-center">
          <div class="text">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15691 0.70942C3.31741 0.934126 3.26536 1.2464 3.04066 1.40691L1.29066 2.65691C1.06595 2.81741 0.753677 2.76536 0.593172 2.54066C0.432668 2.31595 0.484713 2.00368 0.70942 1.84317L2.45942 0.593172C2.68413 0.432668 2.9964 0.484713 3.15691 0.70942ZM8.84317 0.70942C9.00368 0.484713 9.31595 0.432668 9.54066 0.593172L11.2907 1.84317C11.5154 2.00368 11.5674 2.31595 11.4069 2.54066C11.2464 2.76536 10.9341 2.81741 10.7094 2.65691L8.95942 1.40691C8.73471 1.2464 8.68267 0.934126 8.84317 0.70942ZM0.916696 6.50005C0.916696 3.69258 3.19257 1.41671 6.00004 1.41671C8.80748 1.41671 11.0834 3.69258 11.0834 6.50005C11.0834 9.30749 8.80748 11.5834 6.00004 11.5834C3.19257 11.5834 0.916696 9.30749 0.916696 6.50005ZM6.00004 2.41671C3.74486 2.41671 1.9167 4.24487 1.9167 6.50005C1.9167 8.75521 3.74486 10.5834 6.00004 10.5834C8.2552 10.5834 10.0834 8.75521 10.0834 6.50005C10.0834 4.24487 8.2552 2.41671 6.00004 2.41671ZM5.93994 3.33843C6.21609 3.33846 6.43992 3.56234 6.43989 3.83848L6.43961 6.38354L8.23622 8.18015C8.43148 8.37541 8.43148 8.69199 8.23622 8.88725C8.04096 9.08252 7.72437 9.08252 7.52911 8.88725L5.58604 6.94418C5.49225 6.8504 5.43957 6.7232 5.43959 6.59057L5.43989 3.83837C5.43992 3.56223 5.6638 3.3384 5.93994 3.33843Z" fill="white" />
            </svg>
            <span class="text">{{ $moment.utc(formatDistanceTime).format('HH') }} giờ {{ $moment.utc(formatDistanceTime).format('mm') }}p</span>
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
          <label class="point-name">{{ getPointDownByRouteId ? getPointDownByRouteId.name : '' }}</label>
          <label class="point-address">{{ getPointDownByRouteId ? getPointDownByRouteId.address : '' }}</label>
        </div>
      </div>
      <div v-if="getTripByTripCode" class="pay-trip">
        <div id="info">
          <span>Bạn đang tạo một chuyến đi vào ngày <span class="highlight">{{ formatStartDate }}</span> khởi hành lúc <span class="highlight">{{ formatStartTime }}</span> với dòng xe: <span class="highlight">{{ getTripByTripCode ? getTripByTripCode.vehicle.model : '' }} / {{ getTripByTripCode ? getTripByTripCode.vehicle.totalSeat : '' }} ghế</span>, giá tiền của chuyến đi là: <span class="highlight">{{ getTripByTripCode ? numeral(getTripByTripCode.totalMoney).format('0,0') : '' }}đ</span>, tiền hoàn sau chuyến đi là: <span class="highlight">{{ getTripByTripCode ? numeral(getTripByTripCode.currentRefund).format('0,0') : '' }}đ</span></span>
        </div>
        <div id="description" class="mt-4">
          <span>Tiến hành thanh toán để chắc chắn chuyến đi sẽ được khởi hành</span>
        </div>
        <div class="w-100 text-center mt-3">
          <el-button class="btn-pay-trip" @click="handlePayTrip">Thanh toán online</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loadingGetTrip: false
    }
  },
  computed: {
    ...mapGetters([
      'tripsCreated',
      'routes',
      'tripCode'
    ]),
    getTripByTripCode() {
      return this.tripsCreated.find(trip => trip.tripCode === this.tripCode)
    },
    getPointUpByRouteId() {
      let pointUp = null
      if (this.routes.length > 0 && this.getTripByTripCode) {
        const mapRoute = this.routes.find(route => route.id === this.getTripByTripCode.routeId)
        pointUp = mapRoute.points.find(point => point.id === this.getTripByTripCode.pointUpId)
      }
      return pointUp
    },
    getPointDownByRouteId() {
      let pointDown = null
      if (this.routes.length > 0 && this.getTripByTripCode) {
        const mapRoute = this.routes.find(route => route.id === this.getTripByTripCode.routeId)
        pointDown = mapRoute.points.find(point => point.id === this.getTripByTripCode.pointDownId)
      }
      return pointDown
    },
    formatStartTime() {
      let time = null
      if (this.getTripByTripCode) {
        time = this.$moment.utc(this.getTripByTripCode.runTime).format('HH:mm')
      }
      return time
    },
    formatStartDate() {
      let date = null
      if (this.getTripByTripCode) {
        date = this.$moment.utc(this.getTripByTripCode.runTime).format('DD/MM/YYYY')
      }
      return date
    },
    formatDistanceTime() {
      let time = null
      if (this.getTripByTripCode) {
        const distance = this.getTripByTripCode.route.finishTime
        time = distance
      }
      return time
    },
    formatEndTime() {
      let time = null
      if (this.getTripByTripCode) {
        const runTimeToMilli = new Date(this.getTripByTripCode.runTime).getTime()
        time = runTimeToMilli + this.formatDistanceTime
      }
      return this.$moment.utc(time).format('HH:mm')
    },
    formatEndDate() {
      let date = null
      if (this.getTripByTripCode) {
        const runTimeToMilli = new Date(this.getTripByTripCode.runTime).getTime()
        const timeMilli = runTimeToMilli + this.formatDistanceTime
        date = this.$moment.utc(timeMilli).format('DD/MM/YYYY')
      }
      return date
    },
    getPersonsInfo() {
      let data = []
      if (this.getTripByTripCode) {
        const personsInfo = JSON.parse(this.getTripByTripCode.personsInfo)
        data = personsInfo
      }
      return data
    }
  },
  watch: {
    'tripCode': function(val) {
      this.getTripsCreated()
    }
  },
  mounted() {
    this.getTripsCreated()
  },
  methods: {
    getTripsCreated() {
      this.loadingGetTrip = true
      this.$store.dispatch('trip/getTripsCreated').then(resp => {
        this.loadingGetTrip = false
      }).catch(err => {
        this.loadingGetTrip = false
        console.log(err)
        this.$message.error(err)
      })
    },
    handlePayTrip() {
      if (this.getTripByTripCode && this.getTripByTripCode.paymentLink) {
        window.location.href = this.getTripByTripCode.paymentLink
      } else {
        this.$message.error('Link thanh toán không khả dụng')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$deep-sea: #2D225E;
$dark-70: #9399A9;
$gray-100: #383F47;
$gray-40: #ECEDF1;
$white: #ffffff;
$main: #ED196B;

img{
  width: 100%;
  max-width: 306px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.trip-detail-wrapper{
  padding: 24px;
  font-family: 'SFProText', sans-serif;
  letter-spacing: -0.41px;
  min-height: 392px;
  background: $white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: relative;
  margin-top: 40px;

  .trip-info{
    display: flex;
    align-items: center;
    border-bottom: 1px dashed $gray-40;
    padding-bottom: 1rem;

    label{
      display: block;
      margin-bottom: 4px;

      &:last-child{
        margin-bottom: 0;
      }
    }

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
      color: $gray-100;
      font-weight: 600;
    }

    .point-address{
      font-size: 12px;
      line-height: 16px;
      color: $dark-70;
      font-weight: 600;
    }

    #distance{
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
  }

  .pay-trip{
    word-break: break-word;

    #info{
      font-size: 16px;
      line-height: 26px;
      color: $gray-100;

      .highlight{
        color: $main;
      }
    }

    #description{
      font-size: 16px;
      line-height: 22px;
      color: $gray-100;
    }

    .btn-pay-trip{
      background: $main;
      padding: 12px 24px;
      border-radius: 8px;
      border-color: transparent;
      height: 46px;
      font-size: 16px;
      line-height: 22px;
      color: $white;
    }
  }
}
</style>
