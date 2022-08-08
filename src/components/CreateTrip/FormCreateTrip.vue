<template>
  <div v-if="token" v-loading="loadingCalculatePrice" element-loading-spinner="el-icon-kbus-loading" class="create-trip-wrapper" :style="{ 'width': $route.name === 'CreateTrip' ? '80%' : '100%' }">
    <h4 class="title">Đặt xe</h4>
    <div class="row no-gutters" style="margin-top: 40px; gap: 32px">
      <div class="col">
        <div class="select-info">
          <div class="info-item switch">
            <span class="text-desc">Thuê nguyên chuyến</span>
            <el-switch
              v-model="infoTrip.isOwned"
              active-color="#ED196B"
              inactive-color="#ECEDF1"
            />
            <span v-if="infoTrip.isOwned" class="note-owned">Chuyến đi chắc chắn được khởi hành đúng với yêu cầu</span>
            <span v-else class="note-owned">Chuyến xe chỉ lăn bánh khi đủ lượng khách tối thiểu.<br>Hãy chia sẻ để có thêm người đi cùng</span>
          </div>
          <div class="info-item">
            <!-- <span class="text-desc">Chọn lộ trình có sẵn</span>
            <el-switch
              v-model="isSelectAvailableRoute"
              active-color="#ED196B"
              inactive-color="#ECEDF1"
            /> -->
            <el-radio-group v-model="isSelectManualRoute" class="select-manual-route">
              <el-radio :label="1">Đi theo lộ trình riêng</el-radio>
              <el-radio :label="2">Đi theo lộ trình có sẵn</el-radio>
            </el-radio-group>
          </div>
          <div v-if="isSelectManualRoute === 2" class="row no-gutters" style="gap: 16px; margin-bottom: 16px">
            <div class="col-md">
              <div class="info-item">
                <label class="text-title">CHỌN NGÀY KHỞI HÀNH</label>
                <el-date-picker
                  v-model="infoTrip.date"
                  :picker-options="datePickerOptions"
                  class="w-100"
                  type="date"
                  format="dd-MM-yyyy"
                  value-format="yyyy-MM-dd"
                  placeholder="Chọn ngày"
                  :clearable="false"
                />
              </div>
            </div>
            <div class="col-md">
              <div class="info-item">
                <label class="text-title">CHỌN GIỜ KHỜI HÀNH</label>
                <el-time-picker
                  v-model="infoTrip.time"
                  class="w-100"
                  format="HH:mm"
                  value-format="HH:mm"
                  placeholder="Chọn giờ"
                  :clearable="false"
                />
              </div>
            </div>
          </div>
          <div v-if="isSelectManualRoute === 2" class="info-item">
            <label class="text-title">CHỌN TUYẾN</label>
            <!-- <el-radio-group v-model="selectRouteType" @change="changeRouteType">
              <el-radio :label="1">Chọn cung đường có sẵn</el-radio>
              <el-radio :label="2">Chọn lối đi riêng của bạn</el-radio>
            </el-radio-group> -->
            <div v-show="selectRouteType === 1" id="available-route">
              <select-route ref="SelectRoute" v-model="infoTrip.route" placeholder="Chọn tuyến" />
            </div>
            <div v-show="selectRouteType === 2" id="manual-route">
              <div class="row no-gutters">
                <div class="col-xs-12 col-md">
                  <select-point ref="ProvinceUp" v-model="selectPoint.pointUp" class="pr-3" placeholder="Chiều đi" prefix-icon="icon-bus" :icon-size="16" />
                </div>
                <div class="col-xs-12 col-md-auto" style="width: 32px">
                  <div class="seperate">
                    <div class="icon-swap">
                      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_4298_8874)">
                          <circle cx="28" cy="26" r="16" fill="white" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6667 22.3335C28.6667 21.3684 29.3682 20.6668 30.3333 20.6668C31.2985 20.6668 32 21.3683 32 22.3335V28.0968C31.0362 28.3836 30.3333 29.2765 30.3333 30.3335C30.3333 31.6222 31.378 32.6668 32.6667 32.6668C33.9553 32.6668 35 31.6222 35 30.3335C35 29.2765 34.2972 28.3836 33.3333 28.0968V22.3335C33.3333 20.632 32.0349 19.3335 30.3333 19.3335C28.6318 19.3335 27.3333 20.632 27.3333 22.3335V29.6668C27.3333 30.632 26.6318 31.3335 25.6667 31.3335C24.7015 31.3335 24 30.632 24 29.6668V21.6096L24.5286 22.1382C24.7889 22.3986 25.2111 22.3986 25.4714 22.1382C25.7318 21.8779 25.7318 21.4558 25.4714 21.1954L23.8048 19.5288C23.6842 19.4082 23.5174 19.3335 23.3333 19.3335C23.2429 19.3335 23.1567 19.3515 23.0781 19.3841C22.9995 19.4166 22.9258 19.4648 22.8619 19.5288L21.1953 21.1954C20.9349 21.4558 20.9349 21.8779 21.1953 22.1382C21.4556 22.3986 21.8777 22.3986 22.1381 22.1382L22.6667 21.6096V29.6668C22.6667 31.3684 23.9651 32.6668 25.6667 32.6668C27.3682 32.6668 28.6667 31.3684 28.6667 29.6668V22.3335ZM32.6667 29.3335C32.1144 29.3335 31.6667 29.7812 31.6667 30.3335C31.6667 30.8858 32.1144 31.3335 32.6667 31.3335C33.219 31.3335 33.6667 30.8858 33.6667 30.3335C33.6667 29.7812 33.219 29.3335 32.6667 29.3335Z" fill="#383F47" />
                        <path d="M32.6665 29.3335C32.1142 29.3335 31.6665 29.7812 31.6665 30.3335C31.6665 30.8858 32.1142 31.3335 32.6665 31.3335C33.2188 31.3335 33.6665 30.8858 33.6665 30.3335C33.6665 29.7812 33.2188 29.3335 32.6665 29.3335Z" fill="#FBD1E1" />
                        <defs>
                          <filter id="filter0_d_4298_8874" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="6" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4298_8874" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4298_8874" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md">
                  <select-point ref="ProvinceDown" v-model="selectPoint.pointDown" class="pl-3" placeholder="Chiều về" prefix-icon="icon-local" :icon-size="16" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="isSelectManualRoute === 2 && infoTrip.route && selectRouteType === 1" class="info-item">
            <label class="text-title">CHỌN ĐIỂM LÊN, ĐIỂM XUỐNG</label>
            <div class="list-point">
              <div class="row no-gutters">
                <div class="col-md-6">
                  <div id="point-up">
                    <div class="w-100 text-center">
                      <label class="pb-1" :class="{ 'label-active': pointActive === 'point-up' }" style="margin: 0 auto;" @click="getActivePoint('point-up')">Điểm lên</label>
                    </div>
                    <div class="select-place-address-wrapper" :class="{ 'disabled': pointActive !== 'point-up' }">
                      <div class="select-address">
                        <el-radio-group v-if="getRouteByRouteName" v-model="infoTrip.pickUpAddress">
                          <div class="w-100 list-address">
                            <template v-for="(point, p) in getStartPoints">
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
                        <div v-else class="no-data">
                          <span>Không tìm thấy dữ liệu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div id="point-down">
                    <div class="w-100 text-center">
                      <label class="pb-1" :class="{ 'label-active': pointActive === 'point-down' }" style="margin: 0 auto;" @click="getActivePoint('point-down')">Điểm xuống</label>
                    </div>
                    <div class="select-place-address-wrapper" :class="{ 'disabled': pointActive !== 'point-down' }">
                      <div class="select-address">
                        <el-radio-group v-if="getRouteByRouteName && getRouteByRouteName.points" v-model="infoTrip.pickDownAddress">
                          <div class="w-100 list-address">
                            <template v-for="(point, p) in getEndPoints">
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
                        <div v-else class="no-data">
                          <span>Không tìm thấy dữ liệu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isSelectManualRoute === 1" class="info-item">
            <label class="text-title">THÔNG TIN LỘ TRÌNH</label>
            <div class="list-places">
              <template v-for="(place, p) in listPlaces">
                <div :key="p" class="place-item">
                  <div class="col-auto icon-remove-place-wrapper">
                    <el-button class="btn-remove-place" icon="el-icon-close" circle @click="handleRemovePlace(p)" />
                  </div>
                  <div class="col-md">
                    <div class="row no-gutters">
                      <div class="col-md">
                        <el-date-picker
                          v-model="place.runDate"
                          type="date"
                          placeholder="Chọn ngày khởi hành"
                          format="dd-MM-yyyy"
                          value-format="yyyy-MM-dd"
                          :picker-options="datePickerOptions"
                          :clearable="false"
                          @change="handleDateTimeChange(p)"
                        />
                      </div>
                      <div class="col-md" style="padding-left: 16px">
                        <el-time-picker
                          v-model="place.runTime"
                          placeholder="Chọn giờ khởi hành"
                          format="HH:mm"
                          value-format="HH:mm"
                          :clearable="false"
                          @change="handleDateTimeChange(p)"
                        />
                      </div>
                      <div class="col-12" style="margin-top: 8px">
                        <select-place ref="SelectPlace" v-model="place.place" />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="add-place">
              <el-button class="btn-add-place">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6663 8.5H5.33301C5.05967 8.5 4.83301 8.27333 4.83301 8C4.83301 7.72667 5.05967 7.5 5.33301 7.5H10.6663C10.9397 7.5 11.1663 7.72667 11.1663 8C11.1663 8.27333 10.9397 8.5 10.6663 8.5Z" fill="#0091FE" />
                  <path d="M8 11.1668C7.72667 11.1668 7.5 10.9402 7.5 10.6668V5.3335C7.5 5.06016 7.72667 4.8335 8 4.8335C8.27333 4.8335 8.5 5.06016 8.5 5.3335V10.6668C8.5 10.9402 8.27333 11.1668 8 11.1668Z" fill="#0091FE" />
                  <path d="M9.99967 15.1668H5.99967C2.37967 15.1668 0.833008 13.6202 0.833008 10.0002V6.00016C0.833008 2.38016 2.37967 0.833496 5.99967 0.833496H9.99967C13.6197 0.833496 15.1663 2.38016 15.1663 6.00016V10.0002C15.1663 13.6202 13.6197 15.1668 9.99967 15.1668ZM5.99967 1.8335C2.92634 1.8335 1.83301 2.92683 1.83301 6.00016V10.0002C1.83301 13.0735 2.92634 14.1668 5.99967 14.1668H9.99967C13.073 14.1668 14.1663 13.0735 14.1663 10.0002V6.00016C14.1663 2.92683 13.073 1.8335 9.99967 1.8335H5.99967Z" fill="#0091FE" />
                </svg>
                <a href="" class="text-add-place" @click.prevent="handleAddPlace">Thêm lộ trình</a>
              </el-button>
            </div>
          </div>
          <div class="info-item">
            <label class="text-title">CHỌN PHƯƠNG TIỆN</label>
            <select-vehicle v-model="infoTrip.vehicle" />
          </div>
          <div v-if="infoTrip.vehicle" class="info-item">
            <label class="text-title">CHỌN SỐ LƯỢNG HÀNH KHÁCH</label>
            <div class="row no-gutters justify-content-between">
              <div class="col-md-6">
                <el-input-number :value="totalPassengers" :step="1" :min="1" :max="infoTrip.vehicle.totalSeat" :disabled="!infoTrip.vehicle" @change="handlePassengersChange" />
              </div>
              <div class="col-md-6">
                <div v-if="infoTrip.isOwned && totalPassengers < infoTrip.vehicle.totalSeat">
                  <el-checkbox v-model="infoTrip.isPublic" class="checkbox-share-trip">Chia sẻ cho người khách đi cùng để chắc chắn chuyến đi sẽ được khởi hành</el-checkbox>
                </div>
              </div>
              <div v-if="!infoTrip.isOwned" class="col-12 mt-2">
                <label class="text-title">SỐ GHẾ TỐI THIỂU</label>
                <label class="min-seat-note">Số ghế tối thiểu để chuyến đi chắc chắn được khởi hành đúng yêu cầu</label>
                <el-input-number v-model="infoTrip.minSeat" :step="1" :min="1" :max="infoTrip.vehicle.totalSeat" />
              </div>
            </div>
            <div class="customer-info-wrapper" :style="{ 'padding-top': totalPassengers > 0 ? '0.5rem' : '' }">
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
                    v-model="infoTrip.customerInfos"
                    :label-form-customer-active="labelFormCustomerActive"
                  />
                </template>
              </div>
            </div>
          </div>
          <div class="info-item">
            <label class="text-title">GHI CHÚ</label>
            <el-input
              v-model="note"
              type="textarea"
              autosize
              placeholder="Nhập ghi chú của bạn"
            />
          </div>
        </div>
        <div class="mt-3">
          <span class="remind-to-customer">
            Lưu ý: Hành khách cần có mặt trước tại các điểm đón ít nhất 10 phút
          </span>
        </div>
        <div class="create-trip-btn">
          <el-button class="btn-create-trip" @click="handleConfirmPay">Xác nhận thanh toán</el-button>
        </div>
      </div>
      <el-dialog
        width="30%"
        :visible.sync="dialogConfirmPay"
        custom-class="dialog-confirm-pay"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        @open="handleOpen"
      >
        <!-- <trip-created /> -->
        <div class="info-item">
          <div class="time-countdown">
            <span>Thời gian thanh toán:</span>
            <time-countdown v-if="dialogConfirmPay" ref="TimeCountdown" :expire="timeExpire" @pay-expire="payExpire" />
          </div>
          <div class="row no-gutters align-items-center">
            <div class="col">
              <span>Chi phí tạm tính</span>
            </div>
            <div class="col text-right">
              <span v-if="isSelectManualRoute === 1 && priceManualCreate" class="price-need-to-pay">{{ numeral(priceManualCreate.totalMoneyPay).format(0,0) }}đ</span>
              <span v-else-if="isSelectManualRoute === 2 && priceAvailableCreate !== 0" class="price-need-to-pay">{{ numeral(priceAvailableCreate).format(0,0) }}đ</span>
              <span v-else class="price-need-to-pay">{{ 0 }}đ</span>
            </div>
          </div>
          <div class="row no-gutters align-items-center">
            <div class="col">
              <span v-if="isSelectManualRoute === 1 && priceManualCreate">Khoảng cách ({{ $moment.utc(priceManualCreate.travelTime).format('H') }}h {{ $moment.utc(priceManualCreate.travelTime).format('mm') }}p)</span>
              <span v-if="isSelectManualRoute === 2 && priceAvailableCreate !== 0">Khoảng cách ({{ $moment.utc(getRouteByRouteName.finishTime).format('H') }}h {{ $moment.utc(getRouteByRouteName.finishTime).format('mm') }}p)</span>
            </div>
            <div class="col text-right">
              <span v-if="isSelectManualRoute === 1 && priceManualCreate" class="price-need-to-pay">~ {{ numeral(priceManualCreate.distance).format(0,0) }} km</span>
              <span v-else-if="isSelectManualRoute === 2 && priceAvailableCreate !== 0" class="price-need-to-pay">~ {{ numeral(getRouteByRouteName.distance).format(0,0) }} km</span>
            </div>
          </div>
          <div v-if="discountTicket !== 0" class="row no-gutters align-items-center">
            <div class="col">
              <span>Khuyến mãi VIP</span>
            </div>
            <div class="col text-right">
              <span class="price-need-to-pay">{{ '- ' + numeral(discountTicket).format(0,0) }}đ</span>
            </div>
          </div>
          <div class="row no-gutters align-items-center">
            <div class="col">
              <span>Còn lại</span>
            </div>
            <div class="col text-right">
              <span class="price-need-to-pay">{{ numeral(remainPrice).format(0,0) }}đ</span>
            </div>
          </div>
        </div>
        <div class="w-100 descriptions">
          <span>* Giá đã bao gồm VAT</span>
        </div>
        <div class="form-invoice">
          <el-checkbox
            v-if="$route.name === 'OrderPage' || $route.name === 'CreateTrip'"
            v-model="exportInvoice"
          >
            Lấy hoá đơn
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
              <label class="custom-placeholder">Tên công ty</label>
            </el-form-item>
            <el-form-item prop="address">
              <el-input
                ref="address"
                v-model="invoiceInfo.address"
                class="form-input"
                name="address"
                type="text"
              />
              <label class="custom-placeholder">Địa chỉ</label>
            </el-form-item>
            <el-form-item prop="tax">
              <el-input
                ref="tax"
                v-model.trim="invoiceInfo.tax"
                class="form-input"
                name="tax"
                type="text"
              />
              <label class="custom-placeholder">Mã số thuế</label>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                ref="email"
                v-model.trim="invoiceInfo.email"
                class="form-input"
                name="email"
                type="email"
              />
              <label class="custom-placeholder">Email</label>
            </el-form-item>
          </el-form>
        </div>
        <div class="create-trip-btn">
          <el-button class="btn-create-trip" :loading="loadingCreateTrip" :class="isPayExpire ? 'disable' : ''" @click="handleCreateTrip">Thanh toán online</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import SelectRoute from '@/components/CreateTrip/SelectRoute.vue'
import SelectVehicle from '@/components/CreateTrip/SelectVehicle.vue'
import FormCustomerInfo from '@/components/Order/FormCustomerInfo.vue'
// import TripCreated from '@/components/CreateTrip/TripCreated.vue'
import SelectPoint from '@/components/Province/SelectProvince.vue'
import SelectPlace from '@/components/Place/SelectPlace.vue'
import TimeCountdown from '@/components/Payment/TimeCountdown.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    SelectRoute,
    SelectVehicle,
    FormCustomerInfo,
    // TripCreated,
    SelectPoint,
    SelectPlace,
    TimeCountdown
  },
  data() {
    return {
      infoTrip: {
        route: null,
        date: this.$moment().add(1, 'days').format('YYYY-MM-DD'),
        time: '',
        vehicle: null,
        pickUpAddress: null,
        pickDownAddress: null,
        customerInfos: [],
        isOwned: true,
        isPublic: false,
        minSeat: 0
      },
      pointActive: 'point-up',
      totalPassengers: 1,
      listIndexTotalPassengers: [1],
      labelFormCustomerActive: 1,
      loadingCreateTrip: false,
      dialogConfirmPay: false,
      selectRouteType: 1,
      selectPoint: {
        pointUp: '',
        pointDown: ''
      },
      listPlaces: [
        {
          place: null,
          runTime: '00:00',
          runDate: this.$moment().add(1, 'days').format('YYYY-MM-DD')
        }
      ],
      loadingCalculatePrice: false,
      note: '',
      priceManualCreate: null,
      // isSelectAvailableRoute: true,
      isSelectManualRoute: 1,

      currentDate: this.$moment().format('YYYYMMDD'),
      datePickerOptions: {
        disabledDate(currentDate) {
          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          return currentDate <= yesterday
        }
      },
      exportInvoice: false,
      invoiceInfo: {
        companyName: '',
        address: '',
        tax: '',
        email: ''
      },
      formInvoiceRules: {
      },
      timeExpire: 0,
      isPayExpire: false
    }
  },
  computed: {
    ...mapGetters([
      'routes',
      'vehicles',
      'dateAndPoint',
      'respCreateTrip',
      'validate',
      'fillAllCustomer',
      'firstCustomerInfo',
      'token',
      'provinces',
      'userInfo',
      'systemConfig'
    ]),
    getRouteByRouteName() {
      if (this.infoTrip.route) {
        const route = this.routes.find((route, r) => route.routeName === this.infoTrip.route)
        return route
      } else {
        return null
      }
    },
    findProvinceUp() {
      return this.provinces.find((province, p) => province.provinceName === this.selectPoint.pointUp)
    },
    findProvinceDown() {
      return this.provinces.find((province, p) => province.provinceName === this.selectPoint.pointDown)
    },
    getStartPoints() {
      if (this.getRouteByRouteName && this.getRouteByRouteName.points) {
        const points = this.getRouteByRouteName.points.filter((route, r) => r !== this.getRouteByRouteName.points.length - 1)
        return points
      } else {
        return null
      }
    },
    getEndPoints() {
      if (this.getRouteByRouteName && this.getRouteByRouteName.points) {
        const points = this.getRouteByRouteName.points.filter((route, r) => r !== 0 && route.id !== this.infoTrip.pickUpAddress)
        return points
      } else {
        return null
      }
    },
    // dataChanged() {
    //   return {
    //     isOwned: this.infoTrip.isOwned,
    //     vehicle: this.infoTrip.vehicle,
    //     totalPassengers: this.totalPassengers,
    //     places: this.listPlaces,
    //     minSeat: this.infoTrip.minSeat
    //   }
    // },
    priceAvailableCreate() {
      let data = 0
      let distance = 0
      if (!this.infoTrip.vehicle || !this.getRouteByRouteName) {
        data = 0
      } else {
        if (!this.infoTrip.vehicle.minDistance) {
          distance = this.getRouteByRouteName.distance
        } else {
          if (this.getRouteByRouteName.distance > this.infoTrip.vehicle.minDistance) {
            distance = this.getRouteByRouteName.distance
          } else {
            distance = this.infoTrip.vehicle.minDistance
          }
        }
      }
      if (this.isSelectManualRoute === 2 && this.getRouteByRouteName && this.infoTrip.vehicle) {
        const priceByDistance = distance * this.infoTrip.vehicle.pricePerKm
        const numberSeats = this.infoTrip.minSeat
        if (numberSeats === 0) {
          data = 0
        }

        if (this.infoTrip.isOwned) {
          data = parseInt(priceByDistance * (1 + this.getRouteByRouteName.profit))
        } else {
          data = parseInt((priceByDistance * (1 + this.getRouteByRouteName.profit) / numberSeats) * this.totalPassengers)
        }
      }
      return data
    },
    hasSelectedPlace() {
      const places = this.listPlaces.filter((place) => place.place)
      return places
    },
    discountTicket() {
      let data = 0
      if (!this.userInfo.discountTicket) {
        data = 0
      } else {
        if (this.isSelectManualRoute === 1 && this.priceManualCreate) {
          data = this.priceManualCreate.totalMoneyPay * this.userInfo.discountTicket
        } else if (this.isSelectManualRoute === 2 && this.priceAvailableCreate !== 0) {
          data = this.priceAvailableCreate * this.userInfo.discountTicket
        }
      }
      return data
    },
    remainPrice() {
      let data = 0
      if (this.isSelectManualRoute === 1 && this.priceManualCreate) {
        data = this.priceManualCreate.totalMoneyPay - this.discountTicket
      } else if (this.isSelectManualRoute === 2 && this.priceAvailableCreate !== 0) {
        data = this.priceAvailableCreate - this.discountTicket
      }
      return data
    },
    holderTime() {
      let holderTime = ''
      if (this.infoTrip.isOwned) {
        holderTime = this.systemConfigData.tripHolderTime
      } else {
        holderTime = this.systemConfigData.ticketHolderTime
      }
      return holderTime
    },
    systemConfigData() {
      let config = null
      if (this.systemConfig) {
        config = JSON.parse(this.systemConfig.data)
      }
      return config
    }
  },
  watch: {
    'listIndexTotalPassengers': function(val) {
      this.totalPassengers = this.listIndexTotalPassengers.length
    },
    'infoTrip.pickUpAddress': function(val) {
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
    },
    // 'dataChanged': {
    //   handler: function(val) {
    //     // console.log(val)
    //     const notExistPlace = this.listPlaces.filter((place) => !place.place)
    //     if (this.isSelectManualRoute === 1 && val.vehicle && val.totalPassengers > 0 && val.places.length > 1 && notExistPlace.length <= 0) {
    //       this.calculateManualPrice()
    //     }
    //   },
    //   deep: true
    // },
    'infoTrip.vehicle': function(val) {
      this.infoTrip.minSeat = parseInt(val.totalSeat * 60 / 100)
    }
  },
  mounted() {
    if (this.$route.params.vehicle) {
      this.infoTrip.vehicle = this.$route.params.vehicle
    }

    if (this.$route.params.bookFullTrip) {
      this.infoTrip.vehicle = this.$route.params.bookFullTrip.vehicle
      this.infoTrip.date = new Date(this.$route.params.bookFullTrip.startDate)
      const listPlaces = this.listPlaces.map((place) => {
        return {
          runDate: this.$moment(this.$route.params.bookFullTrip.startDate).format('YYYY-MM-DD'),
          runTime: '00:00',
          place: null
        }
      })
      // console.log(listPlaces)
      this.listPlaces = listPlaces
    }
  },
  methods: {
    getActivePoint(param) {
      if (param === 'point-up') {
        this.pointActive = param
      }
      if (param === 'point-down') {
        if (!this.infoTrip.pickUpAddress) {
          this.$message.error(this.$t('message.createTrip.selectPointUp'))
        } else {
          this.pointActive = param
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
    handelFormCustomerActive(index) {
      this.labelFormCustomerActive = index
    },
    removeFormCustomer(index) {
      const findIndex = this.listIndexTotalPassengers.indexOf(index)
      if (findIndex > -1) {
        this.listIndexTotalPassengers.splice(findIndex, 1)
      }

      const findErrorByIndex = this.validate.filter(element => element.index !== index)
      this.$store.dispatch('trip/validateInfo', findErrorByIndex)
    },
    changeRouteType(val) {
      // console.log(val)
      switch (val) {
        case 1:
          this.selectPoint.pointUp = ''
          this.selectPoint.pointDown = ''
          break
        case 2:
          this.infoTrip.route = null
          break
      }
    },
    handleRemovePlace(index) {
      this.listPlaces.splice(index, 1)
    },
    handleAddPlace() {
      const runTime = this.listPlaces.length > 0 ? this.listPlaces[this.listPlaces.length - 1].runTime : this.$moment().add(1, 'days').format('HH:mm')
      const runDate = this.listPlaces.length > 0 ? this.listPlaces[this.listPlaces.length - 1].runDate : this.$moment().add(1, 'days').format('YYYY-MM-DD')
      // console.log(runDate, runTime)
      this.listPlaces.push({
        place: null,
        runTime: runTime,
        runDate: runDate
      })
    },
    handleDateTimeChange(index) {
      const firstRunTime = this.listPlaces[0].runTime
      const firstRunDate = this.listPlaces[0].runDate
      // const runTimeSelected = this.listPlaces[index].runTime
      const runDateSelected = this.listPlaces[index].runDate

      if (index === 0) {
        for (let i = index + 1; i < this.listPlaces.length; i++) {
          this.listPlaces[i].runTime = firstRunTime
          this.listPlaces[i].runDate = firstRunDate
        }
      }

      for (let i = index + 1; i < this.listPlaces.length; i++) {
        this.listPlaces[i].runDate = runDateSelected
        // this.listPlaces[i].runTime = runTimeSelected
      }
    },
    validateInfoTrip() {
      if (this.isSelectManualRoute === 1) {
        if (!this.infoTrip.vehicle) {
          this.$message.error(this.$t('message.createTrip.selectVehicle'))
          return false
        } else if (this.totalPassengers === 0) {
          this.$message.error(this.$t('message.createTrip.selectNumberPassengers'))
          return false
        } else if (this.validate.length > 0) {
          this.$message.error(this.$t('message.createTrip.enterCorrectPassengerInfo'))
          return false
        } else if (this.listPlaces.length < 2) {
          this.$message.error(this.$t('message.createTrip.selectPlace'))
          return false
        } else if (this.hasSelectedPlace.length < this.listPlaces.length) {
          this.$message.error(this.$t('message.createTrip.enterFullPlace', { numberPlace: this.listPlaces.length }))
          return false
        } else {
          return true
        }
      } else {
        if (this.selectRouteType === 1 && (!this.infoTrip.route || !this.$refs.SelectRoute.searchRoute)) {
          this.$message.error(this.$t('message.createTrip.selectRoute'))
          return false
        } else if (this.selectRouteType === 2 && (!this.pickUpAddress || !this.pickDownAddress)) {
          this.$message.error(this.$t('message.createTrip.selectPickUpandPickDown'))
          return false
        } else if (!this.infoTrip.pickUpAddress) {
          this.$message.error(this.$t('message.createTrip.selectPointUp'))
          return false
        } else if (!this.infoTrip.pickDownAddress) {
          this.$message.error(this.$t('message.createTrip.selectPointDown'))
          return false
        } else if (!this.infoTrip.vehicle) {
          this.$message.error(this.$t('message.createTrip.selectVehicle'))
          return false
        } else if (this.totalPassengers === 0) {
          this.$message.error(this.$t('message.createTrip.selectNumberPassengers'))
          return false
        } else if (!this.infoTrip.date) {
          this.$message.error(this.$t('message.createTrip.selectStartDate'))
          return false
        } else if (!this.infoTrip.time) {
          this.$message.error(this.$t('message.createTrip.selectStartTime'))
          return false
        } else if (this.validate.length > 0) {
          this.$message.error(this.$t('message.createTrip.enterCorrectPassengerInfo'))
          return false
        } else {
          return true
        }
      }
    },
    validateInvoiceInfo() {
      const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      if (this.exportInvoice && !this.invoiceInfo.companyName) {
        this.$message.error(this.$t('message.createTrip.enterCompanyName'))
        return false
      } else if (this.exportInvoice && !this.invoiceInfo.address) {
        this.$message.error(this.$t('message.createTrip.enterAddress'))
        return false
      } else if (this.exportInvoice && !this.invoiceInfo.tax) {
        this.$message.error(this.$t('message.createTrip.enterTax'))
        return false
      } else if (this.exportInvoice && (!this.invoiceInfo.email || !regEmail.test(this.invoiceInfo.email))) {
        this.$message.error(this.$t('message.createTrip.enterEmail'))
        return false
      } else {
        return true
      }
    },
    createAvailableTrip() {
      // set customer infos
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
      this.infoTrip.customerInfos = data

      // call api book ticket
      if (this.infoTrip.customerInfos.length < this.totalPassengers) {
        this.$message.error(this.$t('message.createTrip.enterFullCustomerInfo', { totalPassengers: this.totalPassengers }))
      } else {
        // define params pass to api and call api create trip
        const datetime = this.$moment(this.infoTrip.date).format('MM/DD/YYYY') + ' ' + this.infoTrip.time
        // console.log(datetime)
        const info = {
          routeId: this.getRouteByRouteName.id,
          pointUpId: this.infoTrip.pickUpAddress,
          pointDownId: this.infoTrip.pickDownAddress,
          vehicleId: this.infoTrip.vehicle.id,
          customerInfos: this.infoTrip.customerInfos,
          startTime: this.convertToIsoRunTime(datetime),
          isOwned: this.infoTrip.isOwned,
          isPublic: this.infoTrip.isPublic,
          note: this.note,
          minSeat: this.infoTrip.minSeat,
          exportInvoice: this.exportInvoice,
          invoiceInfo: this.exportInvoice ? this.invoiceInfo : null
        }
        this.loadingCreateTrip = true
        setTimeout(() => {
          this.$store.dispatch('trip/createCustomerTrip', info).then(resp => {
            this.$store.dispatch('trip/getTripCode', { tripCode: this.respCreateTrip.customerTrip.tripCode })
            // this.dialogConfirmPay = true
            this.loadingCreateTrip = false
            window.open(resp.paymeUrlResponse.data.url, '_blank')
          }).catch(err => {
            this.loadingCreateTrip = false
            console.log(err)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        }, 200)
      }
    },
    createManualTrip() {
      // set customer infos
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
      this.infoTrip.customerInfos = data

      // call api book ticket
      if (this.infoTrip.customerInfos.length < this.totalPassengers) {
        this.$message.error(this.$t('message.createTrip.enterFullCustomerInfo', { totalPassengers: this.totalPassengers }))
      } else {
        // define params pass to api and call api create trip
        const listPlace = this.listPlaces.map((place) => ({ ...place.place, runTime: new Date(this.$moment(place.runDate).format('MM/DD/YYYY') + ' ' + place.runTime).getTime() }))
        // console.log(listPlace)
        const info = {
          vehicleId: this.infoTrip.vehicle.id,
          customerInfos: this.infoTrip.customerInfos,
          listPlace: listPlace,
          isOwned: this.infoTrip.isOwned,
          isPublic: this.infoTrip.isPublic,
          note: this.note,
          runTime: this.convertToIsoRunTime(listPlace[0].runTime),
          endTime: this.convertToIsoRunTime(listPlace[listPlace.length - 1].runTime),
          numberTicket: this.totalPassengers,
          minSeat: this.infoTrip.minSeat,
          exportInvoice: this.exportInvoice,
          invoiceInfo: this.exportInvoice ? this.invoiceInfo : null
        }
        // console.log(info)
        this.loadingCreateTrip = true
        setTimeout(() => {
          this.$store.dispatch('trip/manualCreateCustomerTrip', info).then(resp => {
            // this.$store.dispatch('trip/getTripCode', { tripCode: this.respCreateTrip.customerTrip.tripCode })
            // this.dialogConfirmPay = true
            this.loadingCreateTrip = false
            // console.log(resp.paymeUrlResponse.data.url)
            window.open(resp.paymeUrlResponse.data.url, '_blank')
          }).catch(err => {
            this.loadingCreateTrip = false
            console.log(err)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        }, 500)
      }
    },
    calculateManualPrice() {
      if (this.validateInfoTrip()) {
        const listPlace = this.listPlaces.map((place) => ({ ...place.place, runTime: new Date(this.$moment(place.runDate).format('MM/DD/YYYY') + ' ' + place.runTime).getTime() }))
        const params = {
          vehicleId: this.infoTrip.vehicle.id,
          numberTicket: this.totalPassengers,
          listPlace: listPlace,
          isOwned: this.infoTrip.isOwned,
          isPublic: this.infoTrip.isPublic,
          runTime: this.convertToIsoRunTime(listPlace[0].runTime),
          endTime: this.convertToIsoRunTime(listPlace[listPlace.length - 1].runTime),
          minSeat: this.infoTrip.minSeat
        }
        // console.log(params)
        this.loadingCalculatePrice = true
        this.$store.dispatch('trip/priceManualCreate', params).then(resp => {
          this.loadingCalculatePrice = false
          this.priceManualCreate = resp
          this.dialogConfirmPay = true
        }).catch(err => {
          console.log(err)
          this.loadingCalculatePrice = false
          this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
        })
      }
    },
    handleConfirmPay() {
      if (this.isSelectManualRoute === 1) {
        this.calculateManualPrice()
      } else {
        if (this.validateInfoTrip()) {
          this.dialogConfirmPay = true
        }
      }
    },
    handleCreateTrip() {
      if (this.isSelectManualRoute === 1) {
        if (this.validateInvoiceInfo()) {
          this.createManualTrip()
        }
      } else {
        if (this.validateInvoiceInfo()) {
          this.createAvailableTrip()
        }
      }
    },
    convertToIsoRunTime(time) {
      // console.log(time)
      const isoTime = new Date(time).toISOString()
      return isoTime
    },
    payExpire(data) {
      this.isPayExpire = true
    },
    handleOpen() {
      if (this.isPayExpire) {
        this.isPayExpire = false
      }
      this.timeExpire = new Date().getTime() + this.holderTime
    }
  }
}
</script>

<style lang="scss">
$main: #ED196B;
$gray: #9399A9;
$dark_gray: #383F47;
$light_gray: #B0B5C1;
$deep_sea: #084388;

.create-trip-wrapper{
  // btn increase or decrease number
  .el-input-number__decrease, .el-input-number__increase{
    background-color: transparent;
  }

  .list-address{
    .el-radio{
      margin-right: 8px;
    }
  }

  .list-places{
    .el-date-editor.el-input{
      width: 100%;
    }
  }

  .checkbox-share-trip{
    display: flex;
    align-items: center;
    .el-checkbox__input{
      display: block;
    }
  }
  .el-checkbox, .el-checkbox__input{
    white-space: unset;
  }
}

.dialog-confirm-pay{
  .row{
    margin-bottom: 0.25rem;
    &:last-child{
      margin-bottom: 0;
    }
  }

  .form-invoice{
    margin-top: 0.5rem;
    #form-invoice-info{
      margin-top: 1.5rem;
      .el-form-item{
        input{
          border-color: $light_gray;
          border-radius: 8px;

          &:focus{
            border-color: $deep_sea;
          }
        }
      }
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
        background: white;
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
        background: white;
        transition: 0.2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }

  .time-countdown{
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }
}
</style>

<style lang="scss" scoped>
$white: #ffffff;
$gray-70: #9399A9;
$main: #ED196B;
$light_gray: #ECEDF1;
$dark_gray: #383F47;
$red: #FF4868;
$light-red: #f3c3cb;
$blue-100: #0091FE;
$orange-100: #F39B13;

.create-trip-wrapper{
  margin-inline: auto;
  margin-top: 40px;
  letter-spacing: -0.41px;

  .text-title{
    display: block;
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

  .select-info{
    .text-title{
      font-size: 12px;
      line-height: 22px;
      color: $gray-70;
    }

    .switch{
      display: flex;
      align-items: center;
      gap: 12px;

      .text-desc{
        font-size: 16px;
        line-height: 24px;
        color: #606266;
        font-weight: 600;
      }
    }

    .info-item{
      padding: 1rem;
      background: $white;
      border-radius: 12px;
      margin-bottom: 16px;

      &:last-child{
        margin-bottom: 0;
      }

      #available-route, #manual-route{
        margin-top: 6px;
      }

      .seperate{
        background: $light_gray;
        width: 1px;
        height: 100%;
        margin-inline: auto;
        position: relative;
        .icon-swap{
          position: absolute;
          top: -6px;
          left: -28px;
          z-index: 1000;
        }
      }

      .list-places {
        padding-bottom: 18px;
        border-bottom: 1px solid $light_gray;
        .place-item{
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 8px;
          &:last-child{
            margin-bottom: 0;
          }
        }

        .icon-remove-place-wrapper{
          height: fit-content;
          margin-block: auto;
          padding-right: 6px;

          .btn-remove-place{
            padding: 3px;
            background: $white;
            color: $gray-70;
            border-color: $gray-70;

            &:hover, &:focus{
              background-color: $gray-70;
              color: $white;
            }
          }
        }
      }

      .btn-add-place{
        border: none;
        padding: 0;
        display: grid;
        place-items: center;
        margin: 0 auto;
        margin-top: 12px;
        svg{
          vertical-align: text-bottom;
        }
        .text-add-place{
          color: $blue-100;
          font-size: 14px;
          line-height: 22px;
          font-weight: 400;
          text-decoration: none;
          margin-left: 4px;
        }
      }

      .customer-info-wrapper{
        #list-label{
          // border-bottom: 1px solid $light_gray;
          margin: 0 -1rem;
          padding-left: 1rem;
          max-width: 546px;
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
            padding-left: 24px !important;
          }
        }

        #point-up, #point-down{
          > div > label{
            font-size: 14px;
            line-height: 22px;
            color: $gray-70;
            margin-bottom: 0.25rem;
            padding: 0 32px;
            cursor: pointer;
            margin-bottom: 0 !important;
            border-bottom: 4px solid transparent;
            max-width: 150px;
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

            .list-address {
              max-height: 200px;
              > .el-radio{
                display: flex;
                gap: 8px;
                align-items: center;
                padding-bottom: 1rem;
              }

              #text-time-and-point{
                display: block;
                font-weight: 600;
                font-size: 14px;
                line-height: 18px;
                color: $dark_gray;
              }

              #text-detail-address{
                display: block;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: $gray-70;
                margin-top: 4px;
              }
            }
          }
        }
      }

      .min-seat-note{
        font-size: 13px;
        line-height: 1;
        display: block;
        font-style: italic;
        color: red;
        margin-bottom: 13px;
      }

      .select-manual-route{
        > label {
          margin-bottom: 0;
        }
      }

      .note-owned{
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        font-style: italic;
        margin-left: 2rem;
      }
    }
  }

  .descriptions{
    margin-block: 4px;
    color: $dark_gray;
    font-style: italic;
    font-weight: normal;
  }

  .price-need-to-pay{
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    color: $main;
  }

  .remind-to-customer{
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: $orange-100;
  }

  .create-trip-btn{
    margin-top: 1rem;

    .btn-create-trip{
      width: 100%;
      padding: 16px 78px;
      border-radius: 12px;
      border-color: transparent;
      background: $main;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: $white;
      max-height: 60px;

      &:hover{
        background: rgb(237 25 107 / 80%);
      }

      &.disable{
        opacity: 0.6;
        pointer-events: none;
      }
    }
  }

  .trip-info{
    min-height: 392px;
    background: $white;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    position: relative;

    img{
      width: 100%;
      max-width: 306px;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>
