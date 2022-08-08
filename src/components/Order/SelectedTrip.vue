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
          <h4 class="text-title">{{ $t('book.selectedTrip.numberPassengers') }}</h4>
        </div>
        <div class="number-passengers-wrapper">
          <div id="male">
            <label>{{ $t('book.selectedTrip.selectNumberPassengers') }}</label>
            <el-input-number :value="totalPassengers" :step="1" :min="0" :max="trip.vehicle.totalSeat - trip.numberTicketPaid" @change="handlePassengersChange" />
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
                :trip-id="trip.id"
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
    <div class="total-seat-and-price">
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
    </div>
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
      'firstCustomerInfo'
    ]),
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
      const numberSeats = this.trip.vehicle.totalSeat
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
            tripId: this.trip.id,
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
    }
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
</style>
