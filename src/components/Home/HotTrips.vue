<template>
  <div
    v-loading="loadingGet"
    element-loading-spinner="el-icon-kbus-loading"
    class="container"
    style="margin-top: 80px"
    :style="{'min-height': !limitTripsHot ? '40vh' : 'auto'}"
  >
    <div v-if="tripsHot.length > 0" class="row no-gutters align-items-center">
      <div class="col-md">
        <h2 class="w-100 title" style="color: #FF4868;">{{ $t('hotTrip.totalTrip', { length: tripsHot.length }) }}</h2>
      </div>
      <div class="col-md text-right">
        <el-button class="btn-refresh-trip" size="small" @click="getListHotTrips()">{{ $t('hotTrip.btnRefresh') }}</el-button>
      </div>
    </div>
    <div v-if="tripsHot.length > 0" class="hot-trip-wrapper">
      <template v-for="(trip, t) in limitTripsHot">
        <hot-trip-item :id="`trip-item-${t + 1}`" :key="t" :trip="trip" />
      </template>
    </div>
  </div>
</template>
<script>
import { shuffleRandom } from '@/utils/index'
import HotTripItem from '@/components/Home/HotTripItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: { HotTripItem },
  data() {
    return {
      loadingGet: false,
      // tripsHot: [],
      limitTripsHot: null,
      arrToRandom: [
        'tripId',
        // 'routeName',
        'ticketPrice',
        'runTime'
      ]
    }
  },
  computed: {
    ...mapGetters(['tripsHot']),
    limit() {
      return this.tripsHot.length > 10 ? 9 : this.tripsHot.length - 2
    }
  },
  async mounted() {
    await this.getListHotTrips()
    setInterval(() => {
      const trips = shuffleRandom(this.tripsHot).filter((item, i) => i <= 9)
      const randomProperty = this.getRandomElement(this.arrToRandom)
      // console.log(randomProperty)
      switch (randomProperty) {
        case 'tripId':
          this.compareTripId(trips)
          break
        // case 'routeName':
        //   this.compareRouteName(trips)
        //   break
        case 'ticketPrice':
          this.compareTicketPrice(trips)
          break
        case 'runTime':
          this.compareRunTime(trips)
          break
      }
      this.limitTripsHot = trips
      // this.limitTripsHot.sort(function(a, b) {
      //   return trips.indexOf(a) - trips.indexOf(b)
      // })
    }, 20000)
  },
  methods: {
    getListHotTrips() {
      this.loadingGet = true
      this.$store.dispatch('trip/getHotTrips').then(resp => {
        this.loadingGet = false
        this.limitTripsHot = this.tripsHot.length > 0 ? this.tripsHot.filter((item, i) => i <= 9) : []
      }).catch(err => {
        this.loadingGet = false
        console.log(err)
        this.$message.error(err.message)
      })
    },
    getRandomElement(array) {
      const res = array[Math.floor(Math.random() * array.length)]
      return res
    },
    getDifferenceTripId(array1, array2) {
      return array1.filter(object1 => {
        return !array2.some(object2 => {
          return object1.id === object2.id
        })
      })
    },
    // getDifferencePrice(array1, array2) {
    //   return array1.filter(object1 => {
    //     return !array2.some(object2 => {
    //       return object1.baseTicketPrice === object2.baseTicketPrice
    //     })
    //   })
    // },
    compareTripId(tripsAfterShuffle) {
      // get list tripId to random
      const resByTripId = tripsAfterShuffle.map(trip => trip.id)
      const tripId = this.getRandomElement(resByTripId)
      // console.log(tripId)
      const indexByTripId = tripsAfterShuffle.findIndex(trip => trip.id === tripId)
      // console.log(indexByTripId)
      if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTripId + 1}`)) {
        // add class
        if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTripId + 1}`)) {
          document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTripId + 1}`).classList.add('bg-trip')
        }

        // remove class
        setTimeout(() => {
          if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTripId + 1}`)) {
            document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTripId + 1}`).classList.remove('bg-trip')
          }
        }, 6000)
      }
    },
    compareRouteName(tripsAfterShuffle) {
      // get list routeName to random
      const resByRouteName = tripsAfterShuffle.map(trip => trip.route.routeName)
      const routeName = this.getRandomElement(resByRouteName)
      // console.log(routeName)
      tripsAfterShuffle.forEach(trip => {
        if (trip.route.routeName === routeName) {
          const indexByRouteName = tripsAfterShuffle.indexOf(trip)
          // console.log(indexByRouteName)
          if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRouteName + 1}`)) {
            // add class
            if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRouteName + 1}`)) {
              document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRouteName + 1} .route`).classList.add('bg-route')
            }

            // remove class
            setTimeout(() => {
              if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRouteName + 1}`)) {
                document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRouteName + 1} .route`).classList.remove('bg-route')
              }
            }, 6000)
          }
        }
      })
    },
    compareTicketPrice(tripsAfterShuffle) {
      const resByTicketPrice = tripsAfterShuffle.map(trip => trip.baseTicketPrice)
      const ticketPrice = this.getRandomElement(resByTicketPrice)
      // console.log(ticketPrice)
      tripsAfterShuffle.forEach(trip => {
        if (trip.baseTicketPrice === ticketPrice) {
          const indexByTicketPrice = tripsAfterShuffle.indexOf(trip)
          // console.log(indexByTicketPrice)
          if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTicketPrice + 1}`)) {
            // add class
            if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTicketPrice + 1}`)) {
              document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTicketPrice + 1} #current-price .text-content`).classList.add('bg-price')
            }

            // remove class
            setTimeout(() => {
              if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTicketPrice + 1}`)) {
                document.querySelector(`.hot-trip-wrapper #trip-item-${indexByTicketPrice + 1} #current-price .text-content`).classList.remove('bg-price')
              }
            }, 6000)
          }
        }
      })
    },
    compareRunTime(tripsAfterShuffle) {
      const resByRunTime = tripsAfterShuffle.map(trip => trip.runTime)
      // console.log(resByRunTime)
      const runTime = this.getRandomElement(resByRunTime)
      // console.log(runTime)
      tripsAfterShuffle.forEach(trip => {
        if (trip.runTime === runTime) {
          const indexByRunTime = tripsAfterShuffle.indexOf(trip)
          // add class
          if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRunTime + 1}`)) {
            document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRunTime + 1} .route-info .start-time`).classList.add('bg-run-time')
          }

          // remove class
          setTimeout(() => {
            if (document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRunTime + 1}`)) {
              document.querySelector(`.hot-trip-wrapper #trip-item-${indexByRunTime + 1} .route-info .start-time`).classList.remove('bg-run-time')
            }
          }, 6000)
        }
      })
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

.btn-refresh-trip{
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

.hot-trip-wrapper{
  margin-top: 40px;

  .price{
    display: grid;
    gap: 4px;

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
        font-weight: bold;
      }
    }

    #low-price{
      label{
        display: block;
      }

      .text-content{
        font-size: 18px;
        line-height: 22px;
        font-weight: 700;
        color: $green;
      }
    }
  }

  .customers-remain{
    display: grid;
    gap: 4px;

    .number-remain{
      font-size: 16px;
      line-height: 22px;
      font-weight: 600;
      color: $main;
    }

    .need-more-customers{
      width: 130px;
      word-break: break-word;
      margin-left: auto;
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

    .share-trip{
      font-size: 1em;
      line-height: 22px;
    }
  }
}
</style>
