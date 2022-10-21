<template>
  <div v-if="trip" class="trip-item">
    <div class="trip-item-info">
      <div class="col-md-6 info-route">
        <label class="title">{{ $t('book.trip.timeLabel') }}</label>
        <div class="run-time">
          <div style="max-width: 120px">
            <div class="time">{{ formatStartTime }}</div>
            <div class="date">{{ formatStartDate }}</div>
            <div v-if="trip.route && trip.route.points" class="address-point">{{ trip.route.points[0].name }}</div>
            <div v-else-if="!trip.route && getPointManual" class="address-point">{{ getPointManual[0].name }}</div>
          </div>
          <div class="distance">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15691 0.70942C3.31741 0.934126 3.26536 1.2464 3.04066 1.40691L1.29066 2.65691C1.06595 2.81741 0.753677 2.76536 0.593172 2.54066C0.432668 2.31595 0.484713 2.00368 0.70942 1.84317L2.45942 0.593172C2.68413 0.432668 2.9964 0.484713 3.15691 0.70942ZM8.84317 0.70942C9.00368 0.484713 9.31595 0.432668 9.54066 0.593172L11.2907 1.84317C11.5154 2.00368 11.5674 2.31595 11.4069 2.54066C11.2464 2.76536 10.9341 2.81741 10.7094 2.65691L8.95942 1.40691C8.73471 1.2464 8.68267 0.934126 8.84317 0.70942ZM0.916696 6.50005C0.916696 3.69258 3.19257 1.41671 6.00004 1.41671C8.80748 1.41671 11.0834 3.69258 11.0834 6.50005C11.0834 9.30749 8.80748 11.5834 6.00004 11.5834C3.19257 11.5834 0.916696 9.30749 0.916696 6.50005ZM6.00004 2.41671C3.74486 2.41671 1.9167 4.24487 1.9167 6.50005C1.9167 8.75521 3.74486 10.5834 6.00004 10.5834C8.2552 10.5834 10.0834 8.75521 10.0834 6.50005C10.0834 4.24487 8.2552 2.41671 6.00004 2.41671ZM5.93994 3.33843C6.21609 3.33846 6.43992 3.56234 6.43989 3.83848L6.43961 6.38354L8.23622 8.18015C8.43148 8.37541 8.43148 8.69199 8.23622 8.88725C8.04096 9.08252 7.72437 9.08252 7.52911 8.88725L5.58604 6.94418C5.49225 6.8504 5.43957 6.7232 5.43959 6.59057L5.43989 3.83837C5.43992 3.56223 5.6638 3.3384 5.93994 3.33843Z" fill="white" />
            </svg>
            {{ $t('book.trip.distanceTime', { hours: formatDistanceTime.hours, minutes: formatDistanceTime.minutes }) }}
          </div>
          <div style="max-width: 120px">
            <div class="time">{{ formatEndTime }}</div>
            <div class="date">{{ formatEndDate }}</div>
            <div v-if="trip.route && trip.route.points" class="address-point">{{ trip.route.points[trip.route.points.length - 1].name }}</div>
            <div v-else-if="!trip.route && getPointManual" class="address-point">{{ getPointManual[getPointManual.length - 1].name }}</div>
          </div>
        </div>
        <div class="mt-1">
          <span class="route-name">{{ trip.routeName }}</span>
        </div>
        <!-- <div class="mt-1">
          <span v-if="trip.note" class="trip-note">* {{ trip.note }}</span>
        </div> -->
        <!-- <div class="btn-more-info mt-2">
          <a href="" @click.prevent.stop="openMoreInfoSection">{{ $t('book.trip.btnTripInfo') }}</a>
        </div> -->
      </div>
      <div class="col info-company">
        <!-- <div class="border-wrap">
          <label class="title">Đối tác vận chuyển</label>
          <label class="company-name">{{ trip.company ? trip.company.companyName : '' }}</label>
          <div v-if="trip.company" class="rate-star">
            <span>5</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99838 0.750002C6.18876 0.749513 6.3629 0.857184 6.44754 1.02772L7.87924 3.91244L11.0722 4.37801C11.2602 4.40543 11.4165 4.53712 11.4754 4.71783C11.5343 4.89854 11.4857 5.09701 11.3499 5.23L9.02745 7.50444L9.57892 10.664C9.61178 10.8523 9.53446 11.0428 9.3797 11.1549C9.22495 11.267 9.01983 11.2811 8.85119 11.1912L5.99969 9.6714L3.14883 11.1912C2.98009 11.2812 2.77483 11.267 2.62004 11.1547C2.46525 11.0425 2.38805 10.8517 2.42117 10.6634L2.97662 7.50444L0.65048 5.2303C0.514466 5.09733 0.465683 4.8987 0.524623 4.71785C0.583563 4.53699 0.740016 4.40525 0.928262 4.37795L4.1385 3.91245L5.55065 1.03002C5.63441 0.859055 5.808 0.750491 5.99838 0.750002ZM6.00257 2.38055L4.92042 4.58938C4.84777 4.73767 4.70659 4.84053 4.54317 4.86423L2.0729 5.22243L3.86427 6.97375C3.98229 7.08913 4.03577 7.25531 4.00718 7.41786L3.58373 9.82614L5.76445 8.66358C5.91145 8.58521 6.08783 8.58521 6.23484 8.66356L8.41771 9.82702L7.99711 7.41725C7.9688 7.25503 8.02217 7.08927 8.13982 6.97405L9.92894 5.22189L7.4757 4.86417C7.31333 4.84049 7.17291 4.73866 7.09997 4.59168L6.00257 2.38055Z" fill="#383F47" />
              <path d="M4.92027 4.58932L6.00242 2.38049L7.09982 4.59163C7.17276 4.7386 7.31318 4.84044 7.47555 4.86411L9.92879 5.22183L8.13967 6.974C8.02202 7.08921 7.96865 7.25497 7.99696 7.41719L8.41756 9.82697L6.23469 8.66351C6.08768 8.58515 5.9113 8.58516 5.7643 8.66353L3.58358 9.82609L4.00704 7.41781C4.03562 7.25525 3.98214 7.08907 3.86412 6.97369L2.07275 5.22237L4.54302 4.86417C4.70644 4.84047 4.84762 4.73761 4.92027 4.58932Z" fill="#ED196B" />
            </svg>
          </div>
        </div> -->
        <div v-if="trip.customerResponses && trip.customerResponses.length > 0" class="user-created mt-3">
          <span class="title">{{ $t('book.trip.userCreated') }}</span>
          <el-avatar
            class="avatar"
            :size="24"
            fit="contain"
            icon="el-icon-user-solid"
            :src="trip.customerResponses[0].avatar"
          />
          <span>{{ trip.customerResponses[0].fullName }}</span>
        </div>
      </div>
      <div class="col-auto info-price ml-auto">
        <div class="border-wrap">
          <div class="text-right">
            <span class="title">{{ $t('book.trip.priceLabel') }}</span>
            <span class="price-ticket">{{ numeral(trip.displayPrice).format('0,0') }}đ</span>
          </div>
          <div class="text-right mt-1">
            <span class="title">{{ $t('book.trip.vehicleType') }}</span>
            <span class="price-ticket">{{ trip.vehicleType | vehicleType }}</span>
          </div>
          <div class="text-right mt-1">
            <span class="title">Nhà xe</span>
            <span class="price-ticket">{{ trip.companyName }}</span>
          </div>
          <span class="empty-seat">{{ `${trip.totalSeat} ghế` }}</span>
          <el-button
            v-if="allowBookTicket && trip.totalSeat> 0"
            class="btn-select-trip d-block"
            @click.stop="openSelectedTripSection"
          >
            {{ selectedTripStatus === trip.tripId ? $t('book.trip.btnClose') : $t('book.trip.btnBook') }}
          </el-button>
          <el-button
            v-if="!allowBookTicket"
            class="btn-select-trip d-block ml-auto"
            :class="{ 'disabled': !allowBookTicket }"
          >
            {{ $t('book.trip.btnTimeout') }}
          </el-button>
          <el-button
            v-if="allowBookTicket && trip.totalSeat <= 0"
            class="btn-select-trip d-block ml-auto"
            :class="{ 'disabled': trip.totalSeat <= 0 }"
          >
            {{ $t('book.trip.btnFullSeat') }}
          </el-button>
          <div class="text-right mt-1" style="margin-right: 20px">
            <!-- <el-popover
              placement="bottom"
              width="200"
              trigger="click"
            >
              <div class="share">
                <span class="description">Rủ bạn bè đi cùng:</span>
                <div class="list-icon">
                  <a href="" title="Copy to clipboard" @click.prevent="shareTrip('url', trip.tripId)">
                    <img src="@/assets/images/icon-copy.png" alt="copy to clipboard">
                  </a>
                  <a href="" title="Share to facebook" @click.prevent="shareTrip('fb', trip.tripId)">
                    <img src="@/assets/images/icon-facebook.png" alt="share to fb">
                  </a>
                </div>
              </div>
              <a slot="reference" href="javascript:void(0)" class="share-trip">Chia sẻ ngay</a>
            </el-popover> -->
            <!-- <a href="javascript:void(0)" class="share-trip" @click.prevent="shareTrip()">{{ $t('book.trip.btnShareTrip') }}</a>
            <form-share-link v-model="dialogShareTrip" :trip="trip" /> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="more-info-section" :class="[ moreInfoStatus === trip.tripId ? '' : 'collapsed' ]">
      <more-info-trip :trip="trip" />
    </div> -->
    <div class="selected-trip-section" :class="[ selectedTripStatus === trip.tripId ? '' : 'collapsed' ]">
      <selected-trip :trip="trip" :lock-seat="trip.lockSeat" />
    </div>
  </div>
</template>
<script>
import { getUTCTime } from '@/utils/index'
import MoreInfoTrip from '@/components/Order/MoreInfoTrip.vue'
import SelectedTrip from '@/components/Order/SelectedTrip.vue'
// import FormShareLink from '@/components/Popup/FormShareLink.vue'
import { mapGetters } from 'vuex'

export default {
  components: { MoreInfoTrip, SelectedTrip },
  props: {
    trip: {
      default: null,
      type: Object
    },
    statusMoreInfoSection: {
      default: null,
      type: Number
    },
    statusSelectedTripSection: {
      default: null,
      type: [Number, String, Array]
    }
  },
  data() {
    return {
      userCreated: {
        size: 24,
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        name: 'abcxyz'
      },
      dialogShareTrip: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'token'
    ]),
    formatStartTime() {
      const format = this.$moment.utc(this.trip.startTime).format('HH:mm')
      return format
    },
    formatStartDate() {
      // const startTime = new Date(this.trip.startTime).getTime()
      const year = this.trip.startDateReality.slice(0, 4)
      const month = this.trip.startDateReality.slice(4, 6)
      const day = this.trip.startDateReality.slice(6, 9)
      return `${day}-${month}-${year}`
    },
    formatDistanceTime() {
      const distance = getUTCTime((this.trip.finishTime || 2 * 1000 * 60 * 60))
      return distance
    },
    formatEndTime() {
      let data = ''
      const startTime = this.$moment.utc(this.trip.startTime).format('YYYY/MM/DD HH:mm:ss')
      const startTimeMillisec = new Date(startTime).getTime()
      const endTimeMillisec = startTimeMillisec + (this.trip.finishTime || 2 * 1000 * 60 * 60)
      const endTime = this.$moment(endTimeMillisec).format('HH:mm')
      data = endTime
      return data
    },
    formatEndDate() {
      const year = this.trip.startDateReality.slice(0, 4)
      const month = this.trip.startDateReality.slice(4, 6)
      const day = this.trip.startDateReality.slice(6, 9)
      return `${day}-${month}-${year}`
    },
    moreInfoStatus: {
      get() {
        return this.statusMoreInfoSection
      },
      set(value) {
        this.$emit('set-status-more-info-section', value)
      }
    },
    selectedTripStatus: {
      get() {
        return this.statusSelectedTripSection
      },
      set(value) {
        this.$emit('set-status-selected-trip-section', value)
      }
    },
    allowBookTicket() {
      // check allow by date
      // const startTime = new Date(this.trip.startTime)
      // const startTimeMilli = startTime.getTime() - 25200000
      // const now = new Date()
      // const nowMilli = now.getTime()
      // if (startTimeMilli - nowMilli > 0) {
      //   return true
      // } else {
      //   return false
      // }
      return true
    },
    getPointManual() {
      let points = null
      if (this.trip.pointManual) {
        points = JSON.parse(this.trip.pointManual)
      }
      return points
    }
  },
  methods: {
    openMoreInfoSection() {
      if (this.selectedTripStatus) {
        this.selectedTripStatus = null
      }
      if (this.moreInfoStatus && this.moreInfoStatus === this.trip.tripId) {
        this.moreInfoStatus = null
        return false
      } else if (!this.moreInfoStatus || this.selectedTripStatus !== this.trip.tripId) {
        this.moreInfoStatus = this.trip.tripId
      }
    },
    async openSelectedTripSection() {
      // if (this.token) {
      if (this.moreInfoStatus) {
        this.moreInfoStatus = null
      }
      if (this.selectedTripStatus && this.selectedTripStatus === this.trip.tripId) {
        this.selectedTripStatus = null
        return false
      } else if (!this.selectedTripStatus || this.moreInfoStatus !== this.trip.tripId) {
        this.selectedTripStatus = this.trip.tripId
      }
      // get trip detail
      console.log(this.trip)
      await this.$store.dispatch('system/getTripDetail', this.trip.tripId)
      // } else {
      //   if (confirm(this.$t('message.book.checkLoginBookTicket'))) {
      //     this.$router.push({ path: `login?redirect=book` })
      //   }
      // }
    },
    shareTrip() {
      // if (!this.userInfo) {
      //   if (confirm('Vui lòng đăng nhập')) {
      //     this.$router.push({ path: '/login' })
      //   }
      // } else {
      this.dialogShareTrip = true
      // }
    }
  }
}
</script>
<style lang="scss">
$deep-sea: #2D225E;
$gray-40: #ECEDF1;

.el-popover{
  .share{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    font-family: 'SFProText';

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
}
</style>

<style lang="scss" scoped>
$light_gray: #ECEDF1;
$white: #ffffff;
$dark_gray: #383F47;
$gray: #9399A9;
$main: #ED196B;
$light_pink: #FBD1E1;

@font-face {
  font-family: 'SFProText';
  src: url('/public/fonts/sf-pro-text-regular.ttf');
}

.trip-item{
  background: $white;
  border: 1px solid $light_gray;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // padding: 24px;
  padding: 24px 0;
  margin-bottom: 8px;

  &:last-child{
    margin-bottom: 0;
  }

  label{
    display: block;
    width: fit-content;
    margin-bottom: 8px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  .title{
    font-size: 12px !important;
    line-height: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: $gray;
  }

  .border-wrap{
    border-left: 1px solid $light_gray;
    padding-left: 24px;
  }
  .trip-item-info{
    display: flex;
    flex-wrap: wrap;
    padding-left: 24px;
    padding-right: 24px;

    .info-route{
      max-width: 341px;

      .run-time{
        display: grid;
        grid-auto-flow: column;

        .time{
          font-size: 24px;
          line-height: 29px;
          font-weight: 600;
          color: $dark_gray;
          margin-bottom: 6px;
        }

        .date{
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
          color: $gray;
          margin-bottom: 6px;
        }

        .distance{
          font-size: 10px;
          line-height: 12px;
          font-weight: normal;
          color: $white;
          padding: 2px 4px;
          background: $main;
          border-radius: 8px;
          width: fit-content;
          height: fit-content;
          display: grid;
          grid-auto-flow: column;
          grid-gap: 4px;
          align-items: center;
          margin-top: 6px;
        }

        .address-point{
          font-size: 12px;
          line-height: 16px;
          color: $gray;
        }
      }

      .trip-note{
        font-size: 11px;
        line-height: normal;
        color: $dark_gray;
        font-style: italic;
      }
      .route-name {
        font-size: 18px;
        line-height: normal;
        color: #ED196B;
        font-style: italic;
      }

      .btn-more-info{
        font-size: 12px;
        line-height: 18px;
        font-weight: 600;
      }
    }

    .info-company{
      max-width: 297px;
      .rate-star{
        display: grid;
        grid-auto-flow: column;
        gap: 4px;
        width: fit-content;
        align-items: center;
        padding: 0 4px;
        background: $light_pink;
        border-radius: 8px;
      }
      .user-created{
        padding-left: 24px;
        display: flex;
        align-items: center;
        .avatar{
          margin: 0 8px 0 16px;
        }
      }
    }

    .info-price{
      label{
        width: auto;
        text-align: right;
      }

      .price-ticket{
        font-size: 16px;
        line-height: 29px;
        color: $main;
        font-weight: 600;
        margin-left: 0.5rem;
      }

      .btn-select-trip{
        margin-left: auto;
        width: 120px;
        height: 35px;
        background: transparent;
        color: $main;
        border: 2px solid $light_pink;
        border-radius: 8px;
        padding: 8px 16px;
        margin-top: 0.5rem;
        transition: all .2s ease;
        &:hover, &:focus{
          background: $main;
          color: $white;
          border: transparent;
        }

        &.disabled{
          opacity: 0.6;
          pointer-events: none;
        }
      }

      .empty-seat {
        display: block;
        width: fit-content;
        margin-top: 0.5rem;
        margin-left: auto;
        font-size: 15px;
        line-height: 18px;
        font-weight: 500;
      }

      .share-trip{
        font-size: 13px;
        line-height: 18px;
        font-weight: 600;
      }
    }
  }

  // .more-info-section, .selected-trip-section{
  //   border-top: 1px solid $light_gray;
  //   margin-top: 1rem;
  // }

  .more-info-section{
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    max-height: 2000px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .selected-trip-section{
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    max-height: 2000px;
    padding-left: 24px;
    padding-right: 24px;
  }

  // animation slide
  // .collapsible {
  //   transition: transform 0.2s ease-out;
  //   transform-origin: top left;
  // }
  .collapsed {
    max-height: 0;
  }
}
</style>
