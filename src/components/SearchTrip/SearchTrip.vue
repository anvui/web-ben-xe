<template>
  <div class="w-100 box-search-trip">
    <el-tabs v-model="activeTab" type="border-card" @tab-click="handleChangeTab">
      <el-tab-pane>
        <span slot="label"><i class="icon-multi-user">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.34998 14.98999c1.5871 0 3.01208-.74658 3.948-1.90588C13.31311 13.8996 14.59961 14.39063 16 14.39063c1.39972 0 2.68567-.4906 3.70068-1.30536.93884 1.1579 2.36053 1.90472 3.94934 1.90472 2.79999 0 5.07996-2.28003 5.07996-5.08002s-2.27997-5.08002-5.07996-5.08002c-.90277 0-1.76837.24744-2.52271.68121C20.10187 3.7395 18.18994 2.54199 16 2.54199c-2.19116 0-4.10382 1.19879-5.12872 2.97211-.75317-.43384-1.61707-.68414-2.5213-.68414-2.79999 0-5.07996 2.28003-5.07996 5.08002S5.54999 14.98999 8.34998 14.98999zM23.65002 7.82996c1.14996 0 2.07996.93005 2.07996 2.08002 0 1.15002-.92999 2.08002-2.07996 2.08002-.99744 0-1.836-.7146-2.02631-1.67065.15784-.47742.25275-.98175.28339-1.50385C22.27466 8.21564 22.92969 7.82996 23.65002 7.82996zM16 5.54199c1.6123 0 2.9248 1.31201 2.9248 2.92432S17.6123 11.39063 16 11.39063s-2.92432-1.31201-2.92432-2.92432S14.3877 5.54199 16 5.54199zM8.34998 7.82996c.7207 0 1.37604.38593 1.74341.98633.0307.52148.12543 1.02533.28302 1.50226-.19.95648-1.02875 1.67145-2.02643 1.67145-1.14996 0-2.07996-.92999-2.07996-2.08002C6.27002 8.76001 7.20001 7.82996 8.34998 7.82996zM29.2002 17.28955c-1.48145-1.48291-3.45313-2.29932-5.5498-2.29932-1.33582 0-2.61566.34552-3.76404.97791C18.70105 15.42346 17.3877 15.11133 16 15.11133c-1.38757 0-2.70087.31213-3.88605.85681-1.14856-.63239-2.42841-.97791-3.76385-.97791-4.32861 0-7.8501 3.52148-7.8501 7.84961v2.83008c0 .82861.67139 1.5 1.5 1.5h4.65186v.78809c0 .82861.67139 1.5 1.5 1.5h15.69678c.82813 0 1.5-.67139 1.5-1.5v-.78809H30c.82813 0 1.5-.67139 1.5-1.5v-2.83008C31.5 20.74316 30.68359 18.77148 29.2002 17.28955zM3.5 22.83984c0-2.67432 2.17578-4.84961 4.8501-4.84961.28699 0 .5686.03064.84576.07916-1.51031 1.60724-2.45642 3.74353-2.5293 6.10052H3.5V22.83984zM22.34863 26.45801H9.65186v-1.99805c0-3.50049 2.84766-6.34863 6.34814-6.34863 3.50098 0 6.34863 2.84814 6.34863 6.34863V26.45801zM28.5 24.16992h-3.16608c-.07288-2.35706-1.01898-4.49335-2.52936-6.10059.27716-.04852.55872-.0791.84583-.0791 1.29492 0 2.5127.50439 3.42871 1.4209.91602.91553 1.4209 2.1333 1.4209 3.42871V24.16992z" :fill="activeTab === '0' ? '#ed196b' : '#909399'" />
          </svg></i>Tìm xe ghép</span>
        <div class="row no-gutters align-items-center search-trip-wrapper">
          <div id="point-up" class="col-md point">
            <select-point ref="PointUp" v-model="requestFilter.startPoint" placeholder="Điểm đi" prefix-icon="icon-bus" class="w-100 select-point" />
          </div>
          <div class="col-auto swap-section">
            <span class="button-swap" style="cursor: pointer;" @click="swap()">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <circle cx="32" cy="30" r="20" fill="white" />
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8333 25.4167C32.8333 24.2102 33.7102 23.3333 34.9167 23.3333C36.1231 23.3333 37 24.2102 37 25.4167V32.6208C35.7952 32.9793 34.9167 34.0954 34.9167 35.4167C34.9167 37.0275 36.2225 38.3333 37.8333 38.3333C39.4442 38.3333 40.75 37.0275 40.75 35.4167C40.75 34.0954 39.8715 32.9793 38.6667 32.6208V25.4167C38.6667 23.2897 37.0436 21.6667 34.9167 21.6667C32.7898 21.6667 31.1667 23.2898 31.1667 25.4167V34.5833C31.1667 35.7898 30.2898 36.6667 29.0833 36.6667C27.8769 36.6667 27 35.7898 27 34.5833V24.5118L27.6607 25.1726C27.9862 25.498 28.5138 25.498 28.8393 25.1726C29.1647 24.8471 29.1647 24.3195 28.8393 23.9941L26.756 21.9108C26.6052 21.76 26.3968 21.6667 26.1667 21.6667C26.0537 21.6667 25.9459 21.6891 25.8477 21.7299C25.7494 21.7706 25.6573 21.8308 25.5774 21.9107L23.4941 23.9941C23.1686 24.3195 23.1686 24.8471 23.4941 25.1726C23.8195 25.498 24.3472 25.498 24.6726 25.1726L25.3333 24.5118V34.5833C25.3333 36.7102 26.9564 38.3333 29.0833 38.3333C31.2102 38.3333 32.8333 36.7102 32.8333 34.5833V25.4167ZM37.8333 34.1667C37.143 34.1667 36.5833 34.7263 36.5833 35.4167C36.5833 36.107 37.143 36.6667 37.8333 36.6667C38.5237 36.6667 39.0833 36.107 39.0833 35.4167C39.0833 34.7263 38.5237 34.1667 37.8333 34.1667Z" fill="#2D225E" />
                <path d="M37.8334 34.1667C37.143 34.1667 36.5834 34.7263 36.5834 35.4167C36.5834 36.107 37.143 36.6667 37.8334 36.6667C38.5237 36.6667 39.0834 36.107 39.0834 35.4167C39.0834 34.7263 38.5237 34.1667 37.8334 34.1667Z" fill="#50C694" />
                <defs>
                  <filter id="filter0_d" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>
              </svg>
            </span>
          </div>
          <div id="point-down" class="col-md point">
            <select-point ref="PointDown" v-model="requestFilter.endPoint" placeholder="Điểm đến" prefix-icon="icon-local" class="w-100 select-point" />
          </div>
          <div class="col-md">
            <el-date-picker id="start-date" ref="DatePicker" v-model="requestFilter.startDate" :picker-options="datePickerOptions" placeholder="Ngày đi" :clearable="false" class="w-100 select-date" prefix-icon="icon-date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" />
          </div>
          <!-- <div class="col-md">
            <el-date-picker ref="DatePicker" v-model="requestFilter.endDate" :picker-options="datePickerOptions" placeholder="Ngày về" :clearable="true" class="w-100 select-date" prefix-icon="icon-date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" />
          </div> -->
          <div class="col-auto search-trip-section">
            <el-button class="btn-search-trip d-flex justify-content-center" @click.stop="searchTrip()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z" fill="white" />
              </svg>
              <span>Tìm chuyến</span>
            </el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="icon-bus-go">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z" :fill="activeTab === '1' ? '#ed196b' : '#909399'" />
          </svg></i>Thuê nguyên chuyến</span>
        <div class="row no-gutters align-items-center search-trip-wrapper">
          <div class="col-md">
            <select-vehicle v-model="bookFullTrip.vehicle" :icon-size="32" />
          </div>
          <div class="col-md">
            <el-date-picker id="start-date" ref="DatePicker" v-model="bookFullTrip.startDate" :picker-options="datePickerOptions" placeholder="Ngày đi" :clearable="false" class="w-100 select-date" prefix-icon="icon-date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" />
          </div>
          <!-- <div class="col-md">
            <el-date-picker ref="DatePicker" v-model="requestFilter.endDate" :picker-options="datePickerOptions" placeholder="Ngày về" :clearable="true" class="w-100 select-date" prefix-icon="icon-date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" />
          </div> -->
          <div class="col-auto search-trip-section">
            <el-button class="btn-search-trip d-flex justify-content-center" @click.stop="handleBookFullTrip()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z" fill="white" />
              </svg>
              <span>Thuê nguyên chuyến</span>
            </el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SelectPoint from '@/components/Province/SelectProvince.vue'
import SelectVehicle from '@/components/CreateTrip/SelectVehicle.vue'
import { mapGetters } from 'vuex'

export default {
  components: { SelectPoint, SelectVehicle },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      requestFilter: {
        startPoint: null,
        endPoint: null,
        startDate: this.$moment().format('YYYY-MM-DD'),
        endDate: ''
      },
      bookFullTrip: {
        vehicle: null,
        startDate: this.$moment().add(1, 'days').format('YYYY-MM-DD')
      },
      currentDate: this.$moment().format('YYYYMMDD'),
      datePickerOptions: {
        disabledDate(currentDate) {
          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          return currentDate <= yesterday
        }
      },
      activeTab: '0'
    }
  },
  computed: {
    setStatusReselectRoute: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    ...mapGetters([
      'provinces',
      'dateAndPoint',
      'token'
    ]),
    getDateAndPoint() {
      let dateAndPoint = this.dateAndPoint
      // console.log(typeof (dateAndPoint))
      if (typeof (dateAndPoint) === 'string') {
        dateAndPoint = JSON.parse(this.dateAndPoint)
      } else if (typeof (dateAndPoint) === 'object') {
        dateAndPoint = this.dateAndPoint
      }
      return dateAndPoint
    }
  },
  watch: {
    'requestFilter.endDate': function(val) {
      const newDate = function(param) {
        return new Date(param)
      }
      if (newDate(val).getDate() < newDate(this.requestFilter.startDate).getDate()) {
        this.$message.error('Ngày về không được nhỏ hơn ngày đi')
        this.requestFilter.endDate = ''
      }
    }
  },
  created() {
    // check if exist param in url, set value input
    if (this.dateAndPoint) {
      this.requestFilter.startPoint = this.getDateAndPoint.from ? this.getDateAndPoint.from : undefined
      this.requestFilter.endPoint = this.getDateAndPoint.to ? this.getDateAndPoint.to : undefined
      this.requestFilter.startDate = (this.getDateAndPoint.startDate && this.compareDateAndNow(this.getDateAndPoint.startDate)) ? this.$moment(this.getDateAndPoint.startDate).format('YYYY-MM-DD') : this.$moment().format('YYYY-MM-DD')
      // this.requestFilter.endDate = (this.getDateAndPoint.endDate && this.compareDateAndNow(this.getDateAndPoint.endDate)) ? this.$moment(this.getDateAndPoint.endDate).format('YYYY-MM-DD') : undefined
    }
  },
  methods: {
    swap() {
      const startPoint = this.requestFilter.startPoint
      this.requestFilter.startPoint = this.requestFilter.endPoint
      this.requestFilter.endPoint = startPoint
    },
    searchTrip() {
      if (!this.$refs.PointUp.searchPoint) {
        this.$message.error('Vui lòng chọn điểm đi')
      } else if (!this.$refs.PointDown.searchPoint) {
        this.$message.error('Vui lòng chọn điểm đến')
      } else {
        const query = {
          from: this.requestFilter.startPoint ? this.requestFilter.startPoint : undefined,
          to: this.requestFilter.endPoint ? this.requestFilter.endPoint : undefined,
          startDate: this.requestFilter.startDate
          // endDate: this.requestFilter.endDate ? this.$moment(this.requestFilter.endDate).format('YYYYMMDD') : undefined
        }
        this.$store.dispatch('trip/getPointAndDate', query)
        this.$router.push({ name: 'OrderPage' })
        this.setStatusReselectRoute = false
      }
    },
    compareDateAndNow(date) {
      if (date >= this.$moment().format('YYYY-MM-DD')) {
        return true
      } else {
        return false
      }
    },
    handleChangeTab(tab, event) {
      // console.log(tab, event)
    },
    handleBookFullTrip() {
      if (!this.token) {
        if (confirm('Vui lòng đăng nhập')) {
          this.$router.push({ name: 'Login' })
        }
      } else {
        if (!this.bookFullTrip.vehicle) {
          this.$message.error('Vui lòng chọn loại phương tiện')
        } else {
          this.$router.push({ name: 'CreateTrip', params: { bookFullTrip: this.bookFullTrip }})
        }
      }
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$white: #FFFFFF;
$pink: #FBD1E1;
$gray-70: #9399A9;

  .box-search-trip{
    margin-top: -35px;
    position: relative;
    z-index: 10;

    .icon-multi-user{
      background-image: url('~@/assets/images/multi-user.png');
      width: 24px;
      height: 24px;
    }

    .search-trip-wrapper{
      background: $white;
      border: 1px solid $pink;
      box-shadow: 0px 2px 24px rgb(80 198 148 / 20%);
      border-radius: 8px;
      padding: 0 4px 0 18px;
      min-height: 64px;
      box-sizing: content-box;

      .select-vehicle-wrapper {
        .el-input__inner {
          border: none;
          padding-left: 44px;
          font-size: 18px;
          line-height: 22px;
          font-weight: 500;
          color: $gray-70;
        }

        .icon-input {
          svg {
            left: 0;
            top: 4px;
            opacity: unset;
          }
        }
      }
    }

    .btn-search-trip{
      background: $main;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      padding: 1rem 37px;
      // max-width: 192px;
      max-height: 56px;

      span{
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: $white;
        margin-left: 0.5em;
      }
    }
  }

  .select-point input.el-input__inner, .select-date input.el-input__inner{
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: $gray-70;
    border: none;
    padding-left: 44px;
  }
</style>
