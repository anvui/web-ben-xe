<template>
  <div class="w-100 hot-trip-item">
    <div class="col-md-6" style="border-right: 1px solid #ECEDF1">
      <div class="row no-gutters align-items-center">
        <div class="col-md">
          <div class="invite-friend">
            <div v-if="trip.customerResponses.length > 0" class="col-auto avatars-wrapper">
              <img :src="trip.customerResponses[0].avatar ? trip.customerResponses[0].avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" alt="avatar customer response">
              <div v-if="getListAvatar.length > 0" class="list-avatar">
                <template v-for="(avatar, a) in getListAvatar">
                  <img
                    :key="a"
                    :src="avatar ? avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                    :style="{ 'background': avatar ? '#FFFFFF' : '#C0C4CC' }"
                    class="avatar-item"
                    alt="list avatar"
                  >
                </template>
                <div v-if="countAvatarRemain > 0" class="avatar-more">
                  <span>+{{ countAvatarRemain }}</span>
                </div>
              </div>
            </div>
            <div v-if="trip.customerResponses.length > 0" class="invitation no-padding">
              <span class="full-name">{{ trip.customerResponses[0].fullName }}</span>
              <span> {{ $t('hotTrip.inviting') }}</span>
            <!-- <span> đang mời thêm bạn bè cùng tham gia chuyến đi</span> -->
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="route-info">
            <span v-if="trip.route" class="route">{{ trip.route.routeName }}</span>
            <span v-if="!trip.route && getPointManual" class="route">{{ getPointManual }}</span>
            <span class="start-time">{{ $moment.utc(trip.runTime).format('HH') }}h{{ $moment.utc(trip.runTime).format('mm') }}p {{ $moment.utc(trip.runTime).format('DD/MM/YYYY') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row no-gutters align-items-center">
        <div class="col-md text-right price">
          <div id="current-price">
            <label class="text-title">{{ $t('hotTrip.price') }}</label>
            <label class="text-content">{{ numeral(trip.baseTicketPrice).format('0,0') }}đ</label>
          </div>
          <div id="low-price">
            <label class="text-title">{{ $t('hotTrip.discount') }}</label>
            <label class="text-content">{{ numeral(trip.baseTicketPrice - trip.currentTicketPrice).format('0,0') }}đ</label>
          </div>
        </div>
        <div class="col-md text-right customers-remain">
          <div class="number-remain">{{ trip.numberTicketPaid }} / {{ trip.vehicle.totalSeat }}</div>
          <div class="need-more-customers">
            <span v-if="countPassengersRemain > 0">{{ $t('hotTrip.remain', { countPassengersRemain: countPassengersRemain }) }}</span>
            <span v-else class="description">{{ $t('hotTrip.fullSeat') }}</span>
          </div>
        </div>
        <div class="col-md text-right">
          <div class="book-and-share">
            <el-button class="btn-book-ticket" @click="bookTicket(trip.id)">{{ $t('hotTrip.btnBook') }}</el-button>
            <a href="#" class="share-trip" @click.prevent="shareTrip()">{{ $t('hotTrip.btnShare') }}</a>
            <form-share-link v-model="dialogShareLink" :trip="trip" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormShareLink from '@/components/Popup/FormShareLink.vue'

export default {
  components: { FormShareLink },
  props: {
    trip: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loadingShareTrip: false,
      dialogShareLink: false,
      limitListAvatar: 3
    }
  },
  computed: {
    countPassengersRemain() {
      let res = 0
      if (!this.trip.tripCode) {
        const quantity = this.trip.vehicle.totalSeat * 60 / 100
        // const remain = this.trip.vehicle.totalSeat - quantity
        res = quantity - this.trip.numberTicketPaid
      } else {
        const priceByDistance = ((this.trip.distance * this.trip.vehicle.pricePerKm) + (this.trip.planTrip.additionMoney ? this.trip.planTrip.additionMoney : 0)) * (1 + (this.trip.route ? this.trip.route.profit : 0.3))
        const totalQuantity = priceByDistance / (this.trip.baseTicketPrice !== 0 ? this.trip.baseTicketPrice : 1)
        res = totalQuantity - this.trip.numberTicketPaid
      }
      return Math.round(res)
    },
    getListAvatar() {
      const list = this.trip.customerResponses.filter((customer, c) => c > 0 && c <= this.limitListAvatar).map((customer, c) => {
        return customer.avatar
      })
      return list
    },
    countAvatarRemain() {
      if (this.getListAvatar.length > 0) {
        const distance = this.trip.customerResponses.length - 1 - this.getListAvatar.length
        return distance
      } else {
        return 0
      }
    },
    getPointManual() {
      if (this.trip.pointManual) {
        const pointManual = JSON.parse(this.trip.pointManual)
        if (pointManual[0].name && !pointManual[pointManual.length - 1].name) {
          return pointManual[0].name
        } else if (pointManual[pointManual.length - 1].name && !pointManual[0].name) {
          return pointManual[pointManual.length - 1].name
        } else if (pointManual[0].name && pointManual[pointManual.length - 1].name) {
          return pointManual[0].name + ' - ' + pointManual[pointManual.length - 1].name
        } else {
          return ''
        }
      } else {
        return null
      }
    }
  },
  methods: {
    bookTicket(tripId) {
      this.$router.push({ path: `/${this.$i18n.locale}/book`, query: { tripId: tripId }})
    },
    shareTrip() {
      this.dialogShareLink = true
    }
  }
}
</script>
<style lang="scss" scoped>
$white: #ffffff;
$gray-40: #ECEDF1;
$gray-100: #383F47;
$main: #ED196B;
$green: #50c694;
$pink: #FBD1E1;
$gray-80: #646D84;
$yellow: #f3cf68;
$light-yellow: #FFE8A9;
$lighter-yellow: #fff2db;

.hot-trip-item{
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: $white;
  border: 1px solid $gray-40;
  // box-shadow: 0px 2px 12px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 8px;
  -webkit-transition: background-color 0.5s ease-out;
  -moz-transition: background-color 0.5s ease-out;
  -o-transition: background-color 0.5s ease-out;
  transition: background-color 0.5s ease-out;
  &:last-child{
    margin-bottom: 0;
  }

  &.bg-trip{
    background-color: $lighter-yellow;
  }

  .text-title{
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }

  #current-price{
    .text-content{
      margin-left: 0.25em;
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      -webkit-transition: background-color 0.5s ease-out;
      -moz-transition: background-color 0.5s ease-out;
      -o-transition: background-color 0.5s ease-out;
      transition: background-color 0.5s ease-out;

      &.bg-price{
        background-color: $light-yellow;
        // padding: 2px;
      }
    }
  }

  #low-price{
    label{
      display: block;
    }

    .text-content{
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      color: $gray-80;
    }

    .text-content{
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
      color: $green;
    }
  }

  .customers-remain{
    display: grid;
    gap: 4px;

    .number-remain{
      font-size: 16px;
      line-height: 22px;
      font-weight: 400;
      color: $main;
    }

    .need-more-customers{
      width: 130px;
      word-break: break-word;
      margin-left: auto;

      span{
        font-size: 12px;
        line-height: 16px;
        color: $gray-80;
        font-weight: 400;
        &.amount-remaining{
          font-weight: 600;
          color: $gray-100;
        }
      }
    }
  }

  .book-and-share{
    display: grid;
    gap: 8px;
    width: fit-content;
    margin-left: auto;
    text-align: center;
    font-size: 14px;

    .btn-book-ticket{
      width: 115px;
      height: 32px;
      margin-left: auto;
      padding: 4px 24px;
      background: $pink;
      border-color: transparent;
      border-radius: 8px;
      font-size: 1em;
      line-height: 24px;
      color: $main;

      &:hover{
        opacity: 0.8;
      }
    }

    .list-icon{
      img{
        width: 100%;
        max-width: 24px;
        height: auto;
      }
    }

    .share-trip{
      font-size: 1em;
      line-height: 22px;
    }
  }

  .invite-friend{
    display: flex;
    align-items: center;
    .avatars-wrapper{
      width: 66px;
      display: grid;
      grid-gap: 6px;
      > img{
        margin: 0 auto;
        border-radius: 50px;
        width: 32px;
        height: 32px;
        object-fit: contain;
      }
    }

    .invitation{
      margin-left: 20px;
      width: 207px;
      word-break: break-word;

      span{
        font-size: 16px;
        line-height: 22px;
        color: $gray-100;
        font-weight: 500;

        &.full-name{
          color: $main;
        }
      }
    }

    .list-avatar {
      position: relative;
      /* flexbox position */
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar-item {
        // background: $color-grey-1;
        width: 20px;
        height: 20px;
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid lighten(#C0C4CC, 20%);
        transition: .7s all ease-in-out;
        transform: scale(1);

        &:hover {
          // background: lighten($color-grey-2, 50%);
          cursor: pointer;
          /* transform: scale(1.5); */
          z-index: 2;
        }

        &:not(:first-child) {
          margin-left: -4px;
        }
      }

      .avatar-more {
        font-size: 10px;
        /* padding: 0 10px; */
        background: $main;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid $white;
        margin-left: -6px;
        transition: .7s all ease-in-out;
        transform: scale(1);
        position: relative;

        &:hover {
          color: lighten($main, 18%);
          cursor: pointer;
        }

        span{
          font-size: 10px;
          line-height: 14px;
          font-weight: 500;
          color: $white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }

      .avatar-container__expanded {
        .avatar-container-item {
          margin-left: 10px;
          transition: .7s all ease-in-out;
        }
      }
    }
  }

  .route-info{
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span{
      text-align: center;
    }

    .route{
      font-size: 14px;
      line-height: 22px;
      font-weight: normal;
      color: $gray-100;
      width: fit-content;
      margin-inline: auto;
      -webkit-transition: background-color 0.5s ease-out;
      -moz-transition: background-color 0.5s ease-out;
      -o-transition: background-color 0.5s ease-out;
      transition: background-color 0.5s ease-out;

      &.bg-route{
        background-color: $light-yellow;
        // padding: 2px;
      }
    }

    .start-time{
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      color: $gray-100;
      -webkit-transition: background-color 0.5s ease-out;
      -moz-transition: background-color 0.5s ease-out;
      -o-transition: background-color 0.5s ease-out;
      transition: background-color 0.5s ease-out;

      &.bg-run-time{
        background: $light-yellow;
        // padding: 2px;
      }
    }
  }
}
</style>
