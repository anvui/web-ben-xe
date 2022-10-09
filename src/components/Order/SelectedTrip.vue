<template>
  <div class="select-trip-wrapper">
    <div class="select-point-up-point-down mt-3">
      <h4 class="text-title">{{ $t('book.selectedTrip.title') }}</h4>
      <div class="list-point mt-3">
        <div class="row no-gutters">
          <div class="col-md-6">
            <div id="point-up">
              <div class="w-100 text-center">
                <label class="pb-1" :class="{ 'label-active': pointActive === 'point-up' }" @click="getActivePoint('point-up')">{{ $t('book.selectedTrip.pointUp') }}</label>
              </div>
              <div class="select-place-address-wrapper" :class="{ 'disabled': pointActive !== 'point-up' }">
                <div class="select-address">
                  <el-radio-group v-if="trip.route && trip.route.points" v-model="pickUpAddress">
                    <div class="address">
                      <template v-for="(point, p) in getListPointUp">
                        <el-radio :key="p" :label="point.id">
                          <div class="w-100">
                            <span id="text-time-and-point">
                              {{ point.name }}
                            </span>
                            <span id="text-detail-address">
                              {{ point.address }}
                            </span>
                          </div>
                        </el-radio>
                      </template>
                    </div>
                  </el-radio-group>
                  <el-radio-group v-else-if="getPointUpManual" v-model="pickUpAddressManual">
                    <div class="address">
                      <template v-for="(point, p) in getPointUpManual">
                        <el-radio :key="p" :label="point.placeId">
                          <div class="w-100">
                            <span id="text-time-and-point">
                              {{ point.name }}
                            </span>
                            <span id="text-detail-address">
                              {{ point.address }}
                            </span>
                          </div>
                        </el-radio>
                      </template>
                    </div>
                  </el-radio-group>
                  <div v-else class="no-data">
                    <span>{{ $t('book.selectedTrip.noData') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div id="point-down">
              <div class="w-100 text-center">
                <label class="pb-1" :class="{ 'label-active': pointActive === 'point-down' }" @click="getActivePoint('point-down')">{{ $t('book.selectedTrip.pointDown') }}</label>
              </div>
              <div class="select-place-address-wrapper" :class="{ 'disabled': pointActive !== 'point-down' }">
                <div class="select-address">
                  <el-radio-group v-if="trip.route && trip.route.points" v-model="pickDownAddress">
                    <div class="w-100 address">
                      <template v-for="(point, p) in getListPointDown">
                        <el-radio :key="p" :label="point.id">
                          <div class="w-100">
                            <span id="text-time-and-point">
                              {{ point.name }}
                            </span>
                            <span id="text-detail-address">
                              {{ point.address }}
                            </span>
                          </div>
                        </el-radio>
                      </template>
                    </div>
                  </el-radio-group>
                  <el-radio-group v-else-if="getPointDownManual" v-model="pickDownAddressManual">
                    <div class="w-100 address">
                      <template v-for="(point, p) in getPointDownManual">
                        <el-radio :key="p" :label="point.placeId">
                          <div class="w-100">
                            <span id="text-time-and-point">
                              {{ point.name }}
                            </span>
                            <span id="text-detail-address">
                              {{ point.address }}
                            </span>
                          </div>
                        </el-radio>
                      </template>
                    </div>
                  </el-radio-group>
                  <div v-else class="no-data">
                    <span>{{ $t('book.selectedTrip.noData') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="select-number-passengers">
      <div class="col-md-5">
        <div class="w-100 mt-3">
          <h4 class="text-title">Sơ đồ ghế</h4>
        </div>
        <div
          class="number-passengers-wrapper"
          v-loading="!selectedTrip && trip.tripId !== selectedTrip.trip.tripId && !seatMapFake"
          element-loading-text="Đợi xíu..."
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgb(255 255 255)"
        >
          <!-- <div id="male">
            <label>{{ $t('book.selectedTrip.selectNumberPassengers') }}</label>
            <el-input-number :value="totalPassengers" :step="1" :min="0" :max="trip.totalSeat" @change="handlePassengersChange" />
          </div> -->
          <div class="seat-map-placeholder">
            <div
              v-for="(floor, index) in seatMapFake"
              :key="index"
              class="seat-floor"
            >
              <label class="section-label justify-self-center">{{
                `Tầng ${index + 1}`
              }}</label>
              <div class="seat-section">
                <div
                  v-for="(row, r) in floor"
                  :key="`${index}.${r}`"
                  class="seat-row"
                >
                  <div
                    v-for="(col, c) in row"
                    :key="`${index}.${r}.${c}`"
                    class="seat-col"
                  >
                    <div
                      :id="'seat-' + col.seatId"
                      :class="[
                        col.seatId &&
                        (col.seatType === 3 || col.seatType === 4)
                          ? 'seat-available'
                          : 'seat-not-available',
                      ]"
                      class="seat-item"
                      @click="selectSeat(col)"
                    >
                      <div class="seat-name">
                        {{ col.seatId ? col.seatId : "" }}
                      </div>
                      <!-- <b-row align-h="center">
                        <b-col v-if="list_lock_seat.includes(col.seatId)" cols="auto">
                          <i class="el-icon-lock" title="Ghế khóa" />
                        </b-col>
                        <b-col v-if="timeExpire(col)" cols="auto">
                          <time-countdown :time="timeExpire(col)" />
                        </b-col>
                      </b-row> -->
                      <!-- <div class="seat-status" /> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="customer-info-wrapper" :style="{ 'padding': totalPassengers > 0 ? '0.5rem 1rem 0 1rem' : '' }">
          <div id="list-label" :style="{ 'border-bottom': totalPassengers > 0 ? '1px solid #ECEDF1' : '' }">
            <div class="nav">
              <template v-for="index in listIndexTotalPassengers">
                <div :key="index" class="nav-item">
                  <label class="pb-1" :class="{ 'label-active': labelFormCustomerActive === index }" @click="handelFormCustomerActive(index)">HK{{ index }}</label>
                  <i v-if="index !== 1" class="el-icon-circle-close pl-1 pt-1" @click="removeFormCustomer(index)" />
                </div>
              </template>
            </div>
          </div>
          <div id="form-customer-info">
            <template v-for="index in listIndexTotalPassengers">
              <form-customer-info
                :key="index"
                ref="FormCustomerInfo"
                v-model="customerInfos"
                :label-form-customer-active="labelFormCustomerActive"
                :trip-id="trip.tripId"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="agree-terms-check">
      <el-checkbox v-model="agreeTermsStatus">
        {{ $t('book.selectedTrip.agreeTerms.label') }} <a href="#">{{ $t('book.selectedTrip.agreeTerms.policy') }}</a>
      </el-checkbox>
    </div>
    <!-- <div class="total-seat-and-price">
      <div class="total-wrapper">
        <label>{{ $t('book.selectedTrip.seatAndPrice.totalPassengers') }}</label>
        <label>{{ totalPassengers }}</label>
      </div>
      <div class="total-wrapper">
        <label>{{ $t('book.selectedTrip.seatAndPrice.price') }}</label>
        <label>{{ numeral(parseInt(promotionDiscount > 0 ? totalPrice - promotionDiscount : totalPrice)).format('0,0') }}đ</label>
      </div>
      <div class="total-wrapper" style="color: #ED196B">
        <label>{{ $t('book.selectedTrip.seatAndPrice.discount') }}</label>
        <label>{{ numeral(parseInt(discountPriceNow)).format('0,0') }}đ</label>
      </div>
      <div class="total-wrapper" style="color: #ED196B">
        <label>{{ $t('book.selectedTrip.seatAndPrice.promotion') }}</label>
        <label>{{ promotionDiscount > 0 ? '- ' + numeral(parseInt(promotionDiscount)).format(0,0) : 0 }}đ</label>
      </div>
      <div class="total-wrapper" style="color: #ED196B">
        <label>{{ $t('book.selectedTrip.seatAndPrice.remain') }}</label>
        <label>{{ numeral(parseInt(promotionDiscount > 0 ? remainPrice - promotionDiscount : remainPrice)).format('0,0') }}đ</label>
      </div>
      <div class="description">
        <template v-for="(item, i) in $t('book.selectedTrip.seatAndPrice.description')">
          <span :key="i">{{ item }}</span>
        </template>
      </div>
    </div> -->
    <div class="form-invoice">
      <el-checkbox
        v-if="$route.name === 'OrderPage' || $route.name === 'CreateTrip'"
        v-model="exportInvoice"
      >
        {{ $t('book.selectedTrip.invoiceInfo.checkbox') }}
      </el-checkbox>
      <el-form
        v-if="exportInvoice"
        id="form-invoice-info"
        ref="invoice-info"
        :model="invoiceInfo"
        :rules="formInvoiceRules"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="companyName">
          <el-input
            ref="companyName"
            v-model="invoiceInfo.companyName"
            class="form-input"
            name="companyName"
            type="text"
          />
          <label class="custom-placeholder">{{ $t('book.selectedTrip.invoiceInfo.companyName') }}</label>
        </el-form-item>
        <el-form-item prop="address">
          <el-input
            ref="address"
            v-model="invoiceInfo.address"
            class="form-input"
            name="address"
            type="text"
          />
          <label class="custom-placeholder">{{ $t('book.selectedTrip.invoiceInfo.address') }}</label>
        </el-form-item>
        <el-form-item prop="tax">
          <el-input
            ref="tax"
            v-model.trim="invoiceInfo.tax"
            class="form-input"
            name="tax"
            type="text"
          />
          <label class="custom-placeholder">{{ $t('book.selectedTrip.invoiceInfo.taxNumber') }}</label>
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            ref="email"
            v-model.trim="invoiceInfo.email"
            class="form-input"
            name="email"
            type="email"
          />
          <label class="custom-placeholder">{{ $t('book.selectedTrip.invoiceInfo.email') }}</label>
        </el-form-item>
      </el-form>
    </div>
    <div class="book-ticket-section">
      <el-button class="btn-book-ticket" :loading="loadingBookTicket" :disabled="agreeTermsStatus ? false : true" @click="handleBookTicket">{{ $t('book.selectedTrip.btnBookTicket') }}</el-button>
    </div>
  </div>
</template>
<script>
import FormCustomerInfo from '@/components/Order/FormCustomerInfo.vue'
import { mapGetters } from 'vuex'

export default {
  components: { FormCustomerInfo },
  props: {
    trip: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pointActive: 'point-up',
      // pickUpStatus: 1,
      // pickDownStatus: 1,
      pickUpAddress: -1,
      pickDownAddress: -1,
      pickUpAddressManual: '',
      pickDownAddressManual: '',
      agreeTermsStatus: true,
      totalPassengers: 1,
      labelFormCustomerActive: 1,
      loadingBookTicket: false,
      customerInfos: [],
      listIndexTotalPassengers: [1],
      referralUser: '',
      exportInvoice: false,
      invoiceInfo: {
        companyName: '',
        address: '',
        email: '',
        tax: ''
      },
      formInvoiceRules: {
      }
    }
  },
  computed: {
    ...mapGetters([
      'promotionResponse',
      'userInfo',
      'validate',
      'fillAllCustomer',
      'firstCustomerInfo',
      'selectedTrip',
      'tripSeatMap'
    ]),
    seatMapFake() {
      const seatMap = this.tripSeatMap ? this.makeMapData(this.tripSeatMap) : null
      console.log(seatMap)
      return seatMap
    },
    getListPointUp() {
      let points = null
      if (this.trip.route) {
        points = this.trip.route.points.filter((item, index) => index !== this.trip.route.points.length - 1)
      }
      return points
    },
    getListPointDown() {
      let points = null
      if (this.trip.route) {
        points = this.trip.route.points.filter((item, index) => index !== 0 && item.id !== this.pickUpAddress)
      }
      return points
    },
    routeProfit() {
      let data = 0.3
      if (this.trip.route) {
        data = this.trip.route.profit
      }
      return data
    },
    totalPrice() {
      const total = this.trip.baseTicketPrice * this.totalPassengers
      return total
    },
    discountPriceNow() {
      if (!this.trip.route || !this.trip.vehicle) {
        return 0
      }
      const distance = this.trip.route ? this.trip.route.distance : this.trip.distance
      const minDistance = this.trip.vehicle.minDistance ? this.trip.vehicle.minDistance : 0
      const priceByDistance = parseInt(((minDistance > distance ? minDistance : distance) * this.trip.vehicle.pricePerKm + this.trip.planTrip.additionMoney) * (1 + this.routeProfit))
      const numberSeats = this.trip.numberTicketPaid + this.totalPassengers
      const discountPrice = parseInt(priceByDistance / numberSeats)

      if (this.trip.baseTicketPrice > discountPrice) {
        return (this.trip.baseTicketPrice - discountPrice) * this.totalPassengers
      } else {
        return 0
      }
    },
    discountPriceMax() {
      if (!this.trip.route || !this.trip.vehicle) {
        return 0
      }
      const priceByDistance = parseInt(((this.trip.route.distance * this.trip.vehicle.pricePerKm) + this.trip.planTrip.additionMoney) * (1 + this.routeProfit))
      const numberSeats = this.trip.totalSeat
      const discountPrice = parseInt(priceByDistance / numberSeats)
      let baseTicketPrice = this.trip.baseTicketPrice

      if (baseTicketPrice === 0) {
        baseTicketPrice = parseInt(priceByDistance / numberSeats * 60 / 100)
      }
      return (baseTicketPrice - discountPrice) * this.totalPassengers
    },
    promotionDiscount() {
      let data = 0
      if (this.promotionResponse) {
        const discount = parseInt(this.totalPrice / this.totalPassengers) * this.promotionResponse.discount
        if (discount < this.promotionResponse.maxDiscountValue) {
          data = discount * this.totalPassengers
        } else {
          data = this.promotionResponse.maxDiscountValue * this.totalPassengers
        }
      } else {
        data = 0
      }

      // check user vip -> apply discount
      data += this.discountTicket
      return data
    },
    remainPrice() {
      const discount = (this.trip.baseTicketPrice * this.totalPassengers) - this.discountPriceNow
      return discount
    },
    discountTicket() {
      const data = this.userInfo && this.userInfo.discountTicket ? this.totalPrice * this.userInfo.discountTicket : 0
      return data
    },
    getPointUpManual() {
      let points = null
      if (this.trip.pointManual) {
        const pointManual = JSON.parse(this.trip.pointManual)
        points = pointManual.filter((item, index) => index !== pointManual.length - 1)
      }
      return points
    },
    getPointDownManual() {
      let points = null
      if (this.trip.pointManual) {
        const pointManual = JSON.parse(this.trip.pointManual)
        points = pointManual.filter((item, index) => index !== 0 && item.placeId !== this.pickUpAddress)
      }
      return points
    }
  },
  watch: {
    'listIndexTotalPassengers': function(val) {
      this.totalPassengers = this.listIndexTotalPassengers.length
    },
    'pickUpAddress': function(val) {
      if (val) {
        this.pointActive = 'point-down'
      }
    },
    'pickUpAddressManual': function(val) {
      if (val) {
        this.pointActive = 'point-down'
      }
    },
    'firstCustomerInfo.fullname': function(val) {
      if (this.fillAllCustomer) {
        for (var i = 0; i < this.$refs.FormCustomerInfo.length; i++) {
          this.$refs.FormCustomerInfo[i].customerInfo.fullname = val
        }
      }
    },
    'firstCustomerInfo.phoneNumber': function(val) {
      if (this.fillAllCustomer) {
        for (var i = 0; i < this.$refs.FormCustomerInfo.length; i++) {
          this.$refs.FormCustomerInfo[i].customerInfo.phoneNumber = val
        }
      }
    },
    'firstCustomerInfo.email': function(val) {
      if (this.fillAllCustomer) {
        for (var i = 0; i < this.$refs.FormCustomerInfo.length; i++) {
          this.$refs.FormCustomerInfo[i].customerInfo.email = val
        }
      }
    },
    'firstCustomerInfo.sex': function(val) {
      if (this.fillAllCustomer) {
        for (var i = 0; i < this.$refs.FormCustomerInfo.length; i++) {
          this.$refs.FormCustomerInfo[i].customerInfo.sex = val
        }
      }
    }
  },
  created() {
    if (this.customerInfos.length > 0) {
      this.customerInfos = []
    }

    // reset data promotion
    this.$store.dispatch('promotion/resetPromotionResp')
  },
  mounted() {
    if (this.trip.route) {
      this.pickUpAddress = this.trip.route.points[0].id
      this.pickDownAddress = this.trip.route.points[this.trip.route.points.length - 1].id
    } else if (this.getPointUpManual || this.getPointDownManual) {
      this.pickUpAddressManual = this.getPointUpManual[0].placeId
      this.pickDownAddressManual = this.getPointDownManual[this.getPointDownManual.length - 1].placeId
    }
  },
  methods: {
    selectSeat() {},
    handelFormCustomerActive(index) {
      this.labelFormCustomerActive = index
    },
    getActivePoint(param) {
      if (param === 'point-up') {
        this.pointActive = param
      }
      if (param === 'point-down') {
        if (!this.pickUpAddress) {
          this.$message.error(this.$t('message.book.selectPointUp'))
        } else {
          this.pointActive = param
        }
      }
    },
    validateCustomerInfo() {
      const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      // check nếu không chọn điểm đi, điểm xuống và thông tin hành khách
      if (!this.pickUpAddress) {
        this.$message.error(this.$t('message.book.selectPointUp'))
        return false
      } else if (!this.pickDownAddress) {
        this.$message.error(this.$t('message.book.selectPointDown'))
        return false
      } else if (this.validate.length > 0) {
        this.$message.error(this.$t('message.book.enterCorrectPassengerInfo'))
        return false
      } else if (this.exportInvoice && !this.invoiceInfo.companyName) {
        this.$message.error(this.$t('message.book.enterCompanyName'))
        return false
      } else if (this.exportInvoice && !this.invoiceInfo.address) {
        this.$message.error(this.$t('message.book.enterAddress'))
        return false
      } else if (this.exportInvoice && !this.invoiceInfo.tax) {
        this.$message.error(this.$t('message.book.enterTax'))
        return false
      } else if (this.exportInvoice && (!this.invoiceInfo.email || !regEmail.test(this.invoiceInfo.email))) {
        this.$message.error(this.$t('message.book.enterEmail'))
        return false
      } else {
        return true
      }
    },
    handleBookTicket() {
      console.log(this.$refs.FormCustomerInfo)
      console.log(this.customerInfos)
        return
      if (this.validateCustomerInfo()) {
        // set data customers info
        const data = []
        
        this.$refs.FormCustomerInfo.forEach((item, i) => {
          if (item.validate.length === 0 && item.customerInfo.fullname && item.customerInfo.phoneNumber && item.customerInfo.email && item.customerInfo.sex) {
            const params = {
              fullName: item.customerInfo.fullname,
              phoneNumber: item.customerInfo.phoneNumber,
              email: item.customerInfo.email,
              sex: item.sexLabel[item.customerInfo.sex]
            }
            data.push(params)
          }
        })
        this.customerInfos = data

        // set referral user
        this.referralUser = this.$refs.FormCustomerInfo[0].customerInfo.referralUser

        // call api book ticket
        if (this.customerInfos.length < this.totalPassengers) {
          this.$message.error(this.$t('message.book.enterFullCustomerInfo', { totalPassengers: this.totalPassengers }))
          // Vui lòng nhập đủ thông tin ${this.totalPassengers} hành khách
        } else {
          // define params pass to api and call api
          const info = {
            tripId: this.trip.tripId,
            personInfos: this.customerInfos,
            pointUpId: this.pickUpAddress,
            pointDownId: this.pickDownAddress,
            referralUser: this.referralUser,
            promotionCode: this.promotionResponse ? this.promotionResponse.code : '',
            pointUpManual: this.pickUpAddressManual,
            pointDownManual: this.pickDownAddressManual,
            exportInvoice: this.exportInvoice,
            invoiceInfo: this.exportInvoice ? this.invoiceInfo : null
          }
          // console.log(info)
          this.loadingBookTicket = true
          setTimeout(() => {
            this.$store.dispatch('ticket/bookTicket', info).then((resp) => {
              this.$message.success(this.$t('message.book.bookTicketSuccess'))
              this.$router.push({ name: 'pay', query: { ticket: resp[0].ticketCode }})
              this.loadingBookTicket = false
            }).catch((err) => {
              console.log(err)
              this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
              this.loadingBookTicket = false
            })
          }, 500)
        }
      }
    },
    handlePassengersChange(currentVal, oldVal) {
      const res = []
      let i
      for (i = 1; i <= currentVal; i++) {
        res.push(i)
      }
      this.listIndexTotalPassengers = res
      this.totalPassengers = this.listIndexTotalPassengers.length
    },
    removeFormCustomer(index) {
      const findIndex = this.listIndexTotalPassengers.indexOf(index)
      if (findIndex > -1) {
        this.listIndexTotalPassengers.splice(findIndex, 1)
      }

      const findErrorByIndex = this.validate.filter(element => element.index !== index)
      this.$store.dispatch('trip/validateInfo', findErrorByIndex)
    },
    makeMapData(seatMap) {
      const self = this
      const data = []
      for (let f = 0; f < seatMap.numberOfFloors; f++) {
        const listRow = []
        for (let r = 0; r < seatMap.numberOfRows; r++) {
          const listCol = []
          for (let c = 0; c < seatMap.numberOfColumns; c++) {
            listCol.push(self.makeSeatDefault(f + 1, r + 1, c + 1))
          }
          listRow.push(listCol)
        }
        data.push(listRow)
      }
      if (seatMap.seatList) {
        seatMap.seatList.forEach((element) => {
          try {
            if (
              data[element.floor - 1][element.row - 1][element.column - 1] !==
              undefined
            ) {
              data[element.floor - 1][element.row - 1][element.column - 1] =
                element
              data[element.floor - 1][element.row - 1][
                element.column - 1
              ].id = `${element.floor}${element.row}${element.column}`
            }
          } catch (e) {
            console.log('ticket error' + JSON.stringify(element) + ` (${e})`)
          }
        })
      }
      return data
    },
    makeSeatDefault(floor, row, column) {
      const data = {
        floor: floor,
        column: column,
        row: row,
        seatId: null,
        seatType: 7,
        seatStatus: 1,
        extraPrice: 0,
        id: `${floor}${row}${column}`
      }
      return data
    },
  }
}
</script>

<style lang="scss">
$main: #ED196B;
$dark_gray: #383F47;
$light_gray: #B0B5C1;
$deep_sea: #084388;

.select-trip-wrapper{
  .el-input-number__decrease, .el-input-number__increase{
    background-color: transparent;
  }

  #form-customer-info{
    .el-input{
      input{
        font-family: 'SFProText';
        border-radius: 8px;
        height: 40px;
        padding: 0 24px;
      }
    }

    .el-checkbox{
      .el-checkbox__label{
        font-family: 'SFProText', sans-serif;
      }
    }
  }

  .select-number-passengers{
    .el-input-number{
      .el-input > input{
        font-family: 'SFProText';
      }
    }
  }

  .agree-terms-check{
    span.el-checkbox__label{
      font-size: 14px;
      line-height: 16px;
      color: $dark_gray;

      a{
        color: $main;
      }
    }
  }

  #form-invoice-info{
    .el-form-item{
      input{
        border-color: $light_gray;
        border-radius: 8px;

        &:focus{
          border-color: $deep_sea;
        }
      }
    }
  }

  .book-ticket-section{
    .btn-book-ticket{
      &.is-disabled{
        background-color: rgb(237 25 107 / 70%) !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$white: #ffffff;
$main: #ED196B;
$dark_gray: #383F47;
$gray: #9399A9;
$light_gray: #ECEDF1;
$bg_light_gray: #F4F7F8;

.select-trip-wrapper{
  margin-top: 1rem;
  border-top: 1px solid $light_gray;

  label{
    margin-bottom: 0 !important;
  }

  .text-title{
    font-family: 'SFProText';
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: $dark_gray;
    margin-left: -24px;
    padding-left: 20px;
    border-left: 4px solid $main;
  }

  .list-point{

    #point-up{
      > .select-place-address-wrapper{
        border-right: 1px solid $light_gray;
      }
    }

    #point-down{
      > .select-place-address-wrapper{
        border-left: 1px solid $light_gray;
      }

      .select-place, .select-address{
        margin-left: 24px;
      }
    }

    #point-up, #point-down{
      > div > label{
        font-size: 14px;
        line-height: 22px;
        color: $gray;
        margin-bottom: 0.25rem;
        padding: 0 32px;
        cursor: pointer;
        margin-bottom: 0 !important;
        border-bottom: 4px solid transparent;
      }

      .select-place{
        padding: 0.5rem 0;
        border-top: 1px solid $light_gray;
        border-bottom: 1px solid $light_gray;
      }

      .select-address{
        padding: 1rem 0;
        // border-bottom: 1px solid $light_gray;
        overflow-y: auto;

        .address {
          max-height: 200px;
          > .el-radio{
            display: flex;
            gap: 8px;
            align-items: center;
            padding-bottom: 1rem;
            margin-right: 0;
          }

          #text-time-and-point{
            display: block;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: $dark_gray;
            min-height: 18px;
          }

          #text-detail-address{
            display: block;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            color: $gray;
            margin-top: 4px;
          }
        }
      }
    }
  }

  .select-number-passengers{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid $light_gray;
    border-top: 1px solid $light_gray;
    padding-bottom: 1rem;

    .number-passengers-wrapper{
      margin-top: 1rem;
      display: grid;
      gap: 1rem;
      // padding-right: 1rem;

      #male, #female{
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
        label{
            font-size: 14px;
            line-height: 22px;
            color: $dark_gray;
        }
      }
    }

    .customer-info-wrapper{
      margin-left: 1rem;
      margin-bottom: -1rem;
      border-left: 1px solid $light_gray;

      #list-label{
        // border-bottom: 1px solid $light_gray;
        margin: 0 -1rem;
        padding-left: 1rem;
        max-width: 436px;
        overflow-x: auto;
        .nav{
          flex-wrap: nowrap;

          > .nav-item{
            padding-right: 1rem;
            display: flex;
            &:last-child{
              padding-right: 0;
            }

            label{
              cursor: pointer;
              user-select: none;
              &:hover{
                color: $main;
              }
            }

            .el-icon-circle-close{
              cursor: pointer;

              &:hover{
                color: $main;
              }
            }
          }
        }
      }

      #form-customer-info{
        // border-top: 1px solid $light_gray;
      }
    }
  }

  .agree-terms-check{
    padding: 1rem 0;
  }

  .total-seat-and-price{
    background-color: $bg_light_gray;
    margin: 0 -24px;
    padding: 8px 24px;

    .total-wrapper{
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-weight: 600;

      &:last-child{
        margin-bottom: 0;
      }
    }

    .description{
      span{
        display: block;
        color: $dark_gray;
        font-style: italic;
        font-weight: normal;
      }
    }
  }

  .form-invoice{
    margin-top: 1rem;
    #form-invoice-info{
      margin-top: 1rem;
      label{
        margin-bottom: 0;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: $dark_gray;
        display: inline-block;
        user-select: none;
      }

      .form-input {
        background: $white;
        width: 100%;
        height: 48px;
        outline: none;
        transition: 0.2s cubic-bezier(.645,.045,.355,1);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $gray;
      }

      .custom-placeholder {
        position: absolute;
        top: -10px;
        left: 14px;
        pointer-events: none;
        padding: 0 10px;
        background: $white;
        transition: 0.2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }

  .book-ticket-section{
    padding-top: 1rem;

    .btn-book-ticket{
      background-color: $main;
      padding: 12px 16px;
      border-radius: 8px;
      color: $white;
      width: 100%;
      outline: none;
      border-color: transparent;
      height: 48px;

      &:hover, &:focus{
        background-color: rgb(237 25 107 / 90%);
      }
    }
  }

  .label-active{
    color: $main !important;
    border-bottom: 4px solid $main !important;
    border-radius: 2px;
  }

  .disabled{
    opacity: 0.3;
    .el-radio{
      pointer-events: none;
    }
  }

  .no-data{
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: $gray;
    user-select: none;
  }
}
// seat map css
.seat-map-placeholder {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3px;
  .seat-floor {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
    .seat-section {
      background: #a4b0be;
      border-radius: 4px;
      .seat-row {
        display: flex;
        flex-wrap: nowrap;
        .seat-col {
          flex-basis: 0;
          flex-grow: 1;
          .seat-available {
            background: white !important;
            justify-content: center;
          }
          .seat-item {
            position: relative;
            padding: 3px;
            margin: 3px;
            min-height: 15px;
            cursor: pointer;
            border-radius: 4px;
            // border: 1px solid #80808038;
            // box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.05);
            .seat-name {
              font-size: 4px;
              text-align: center;
              color: #232731;
              font-weight: bold;
              // padding-bottom: 10px;
            }
            .customer-info {
              font-size: 2px;
            }
          }
          .seat-selected {
            background: #fdd0fc !important;
            border: 1px solid #d413f3;
          }
          .seat-available {
            .seat-status {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 7px;
              background: #50C694;
              border-radius: 2px;
              height: 4px;
              width: 86%;
              &::after {
                content: '';
                position: inherit;
                left: 0;
                bottom: 0;
                background: #50C694;
                border-radius: 2px;
                width: 100%;
                height: 4px;
              }
            }
            &.seat-sold .seat-status::after {
              width: 100%;
              background: #2dc1cd;
            }
            &.seat-for-sale .seat-status::after {
              width: 100%;
              background: #50C694;
            }
            &.seat-booked .seat-status::after {
              width: 100%;
              background: #f1c40f;
            }
            &.seat-paid .seat-status::after {
              width: 100%;
              background: #084388;
            }
            &.one-way-ticket .seat-status::after {
              width: calc(100% / 2);
            }
            &.owner-seat {
              opacity: 0.8;
            }
          }
          .seat-not-available {
            &.seat-lock {
              opacity: 0.8;
              background: #c8d6e5;
              i {
                content: '';
                position: absolute;
                top: 48%;
                left: 50%;
                transform: translateX(-50%);
              }
            }
          }
          .seat-just-updated{
            background: yellow !important;
          }
        }
      }
    }
  }
}
.justify-self-center {
  justify-self: center;
}
.input-section {
  display: flex;
  align-items: center;
}
.left-input-section {
  flex-wrap: wrap;
}
.list-seat-selected-contain {
  .list-seat-selected {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2px;
    .btn-close-seats {
      height: 28px;
      display: flex;
      align-items: center;
    }
  }
}
.ticket-just-updated {
  animation: ripple 0.5s linear infinite;
}
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(#3498db, 0.3),
      0 0 0 1px rgba(#3498db, 0.3),
      0 0 0 3px rgba(#3498db, 0.3),
      0 0 0 5px rgba(#3498db, 0.3);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(#3498db, 0.3),
      0 0 0 4px rgba(#3498db, 0.3),
      0 0 0 20px rgba(#3498db, 0),
      0 0 0 30px rgba(#3498db, 0);
  }
}
</style>
