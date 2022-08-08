<template>
  <div class="container mt-4">
    <h4 class="title">Trở thành đối tác</h4>
    <div class="partner-registration-container">
      <div class="row no-gutters">
        <div id="left" class="col-md-4">
          <el-tabs v-model="activeTab" @tab-click="handleActiveTab">
            <el-tab-pane label="Giới thiệu" name="introduction" />
            <el-tab-pane label="Câu hỏi của đối tác" name="questions" />
          </el-tabs>
          <div v-if="activeTab === 'introduction'" class="contents">
            <span class="content-introduction">
              Kính gửi : Quý đơn vị vận tải
            </span>
            <span class="content-introduction">
              Dịch bệnh Covid 19 đã tác động lớn lên ngành vận tải khiến rất nhiều doanh nghiệp phải đứng trước nguy cơ phá sản hoặc tạm dừng hoạt động. Trước tình hình đó Công ty CP Sàn Vé Trực Tuyến mong muốn chung tay hỗ trợ các doanh nghiệp vận tải, tìm kiếm khách hàng để tận dụng tối đa lượng xe dư thừa của đơn vị, tăng hệ số lấp đầy từ đó cải thiện Doanh thu và kết quả hoạt động kinh doanh.
            </span>
            <span class="content-introduction">
              Công ty Chúng tôi là nền tảng công nghệ kết nối giữa người có nhu cầu thuê xe và đơn vị vận tải sẽ đừng ra Thuê xe của quý vị hoặc cùng quý vị khai thác lượng xe dư thừa. Chính vì vậy Chúng tôi cần nắm báo giá của từng loại xe để có thể chào đến mạng lưới Khách hàng lớn mà KBus đang có.
            </span>
            <span class="content-introduction">
              <img src="@/assets/images/hiring-partner.webp" alt="hiring partner for kbus" width="100%" height="100%">
            </span>
          </div>
          <div v-if="activeTab === 'questions'" class="contents">
            <div v-if="listQuestions && listQuestions.length > 0" v-loading="loadingList">
              <template v-for="(item, i) in listQuestions">
                <div :key="i" style="margin-bottom: 8px">
                  <div :id="`question-${i + 1}`" class="question-item" @click="handleSelectQuestion(i + 1)">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66699 18.5999C6.43366 18.5999 6.19198 18.5416 5.97531 18.4249C5.50031 18.1749 5.20866 17.6749 5.20866 17.1416V15.9583C2.69199 15.6999 1.04199 13.8499 1.04199 11.1999V6.19993C1.04199 3.33326 2.96699 1.40826 5.83366 1.40826H14.167C17.0337 1.40826 18.9587 3.33326 18.9587 6.19993V11.1999C18.9587 14.0665 17.0337 15.9915 14.167 15.9915H11.0253L7.4753 18.3583C7.23363 18.5166 6.95033 18.5999 6.66699 18.5999ZM5.83366 2.64992C3.68366 2.64992 2.29199 4.04159 2.29199 6.19159V11.1916C2.29199 13.3416 3.68366 14.7333 5.83366 14.7333C6.17533 14.7333 6.45866 15.0166 6.45866 15.3583V17.1333C6.45866 17.2416 6.52533 17.2916 6.567 17.3166C6.60866 17.3416 6.692 17.3666 6.78367 17.3083L10.492 14.8416C10.592 14.775 10.717 14.7333 10.842 14.7333H14.1753C16.3253 14.7333 17.717 13.3416 17.717 11.1916V6.19159C17.717 4.04159 16.3253 2.64992 14.1753 2.64992H5.83366Z" fill="#383F47" />
                      <path d="M9.99952 10.0917C9.65786 10.0917 9.37452 9.80834 9.37452 9.46667V9.29171C9.37452 8.32504 10.0828 7.85003 10.3495 7.6667C10.6578 7.45836 10.7578 7.3167 10.7578 7.10004C10.7578 6.68337 10.4162 6.34167 9.99952 6.34167C9.58286 6.34167 9.24121 6.68337 9.24121 7.10004C9.24121 7.4417 8.95788 7.72504 8.61621 7.72504C8.27454 7.72504 7.99121 7.4417 7.99121 7.10004C7.99121 5.9917 8.89119 5.09167 9.99952 5.09167C11.1079 5.09167 12.0078 5.9917 12.0078 7.10004C12.0078 8.05004 11.3079 8.52502 11.0495 8.70002C10.7245 8.91669 10.6245 9.05837 10.6245 9.29171V9.46667C10.6245 9.81667 10.3412 10.0917 9.99952 10.0917Z" fill="#383F47" />
                      <path d="M10 12.1666C9.65 12.1666 9.375 11.8833 9.375 11.5416C9.375 11.2 9.65833 10.9166 10 10.9166C10.3417 10.9166 10.625 11.2 10.625 11.5416C10.625 11.8833 10.35 12.1666 10 12.1666Z" fill="#383F47" />
                    </svg>
                    <span>{{ item.question }}</span>
                  </div>
                  <div class="answer-item" :class="[ selectedQuestion === i + 1 ? '' : 'collapsed' ]">
                    <span v-html="item.answer" />
                  </div>
                </div>
              </template>
              <div class="note">
                <span>
                  * Mọi câu hỏi liên quan cần được giải đáp vui lòng liên hệ với Chúng tôi qua Website http://KBus.vn hoặc Hotline: <span class="hotline">1900 1911</span> đội ngũ tư vấn sẽ sẵn sàng trả lời Quý vị và hỗ trợ quý vị đăng ký tham gia.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="right" class="col-md-8">
          <div class="row no-gutters align-items-center form-signup-partner-wrap">
            <div class="col-auto">
              <h4 class="title-signup-form">Mẫu đăng ký đối tác Kbus</h4>
            </div>
            <div class="col text-right">
              <!-- <el-button v-if="breadcrumbActive === 'info'" class="button btn-continue-and-signup" @click="handleContinueToNextStep()">Tiếp tục</el-button> -->
              <!-- <el-button v-if="breadcrumbActive === 'info'" class="button btn-continue-and-signup" :loading="loadingSubmit" @click="submitForm()">Gửi mẫu đăng ký</el-button> -->
              <!-- <div v-else>
                <el-button class="button btn-go-back" @click="handleGoBackStep()">Quay lại bước 1</el-button>
                <el-button class="button btn-continue-and-signup" :loading="loadingSubmit" @click="submitForm()">Gửi mẫu đăng ký</el-button>
              </div> -->
            </div>
          </div>
          <div class="w-100">
            <div class="list-breadcrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><a href="" :class="{ 'is-active': breadcrumbActive === 'info' }" @click.prevent="handleGoBackStep()">1. THÔNG TIN LIÊN HỆ</a></el-breadcrumb-item>
                <!-- <el-breadcrumb-item><a href="" :class="{ 'is-active': breadcrumbActive === 'vehicles' }" @click.prevent="handleContinueToNextStep()">2. CÁC LOẠI XE ĐƠN VỊ CUNG CẤP VÀ GIÁ THUÊ TỪNG LOẠI</a></el-breadcrumb-item> -->
              </el-breadcrumb>
            </div>
            <div class="form-regist">
              <form-regis-info v-show="breadcrumbActive === 'info'" ref="FormPartnerInfo" :breadcrumb-active="breadcrumbActive" @setBreadcrumbActive="setBreadcrumbActive" />
              <form-regis-vehicles v-show="breadcrumbActive === 'vehicles'" ref="FormPartnerVehicle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormRegisInfo from '@/components/PartnerRegistration/FormRegisInfo.vue'
import FormRegisVehicles from '@/components/PartnerRegistration/FormRegisVehicles.vue'
import { mapGetters } from 'vuex'

export default {
  components: { FormRegisInfo, FormRegisVehicles },
  data() {
    return {
      activeTab: 'introduction',
      breadcrumbActive: 'info',
      loadingSubmit: false,
      selectedQuestion: 0,
      loadingList: false
    }
  },
  computed: {
    ...mapGetters([
      'companyInfo',
      'vehiclesRegist',
      'listQuestions'
    ])
  },
  mounted() {
    this.getListQuestions()
  },
  methods: {
    handleActiveTab() {
    },
    handleContinueToNextStep() {
      if (this.$refs.FormPartnerInfo) {
        const partnerInfo = this.$refs.FormPartnerInfo.partnerInfo
        const otherService = this.$refs.FormPartnerInfo.otherService
        const listServices = this.$refs.FormPartnerInfo.listServices
        if (partnerInfo.services.includes(listServices[6]) && !otherService) {
          this.$message.error('Vui lòng ghi rõ loại hình dịch vụ')
        } else {
          this.$store.dispatch('partner/getCompanyInfo', {
            info: partnerInfo,
            otherService: otherService
          })
          this.breadcrumbActive = 'vehicles'
        }
      }
    },
    handleGoBackStep() {
      this.breadcrumbActive = 'info'
      if (this.$refs.FormRegisVehicles) {
        const vehicles = this.$refs.FormPartnerVehicle.vehicles
        this.$store.dispatch('partner/getVehicles', vehicles)
      }
    },
    submitForm() {
      // const vehicles = this.$refs.FormPartnerVehicle.vehicles
      // this.$store.dispatch('partner/getVehicles', vehicles)
      // call api regist company
      const listServices = this.$refs.FormPartnerInfo.listServices
      const info = this.$refs.FormPartnerInfo.partnerInfo
      const otherService = this.$refs.FormPartnerInfo.otherService
      const indexOtherService = info.services.indexOf(listServices[6])
      info.services[indexOtherService] = otherService
      // console.log(info)
      // const params = { ...info, vehicles: this.vehiclesRegist }
      this.loadingSubmit = true
      setTimeout(() => {
        this.$store.dispatch('partner/registCompany', info).then(resp => {
          this.loadingSubmit = false
          this.$message.success('Đã gửi form đăng ký')
          this.$store.dispatch('partner/resetData')
          this.resetData()
        }).catch(err => {
          this.loadingSubmit = false
          console.log(err)
          this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
          // this.resetData()
        })
      }, 500)
    },
    resetData() {
      this.$refs.FormPartnerInfo.partnerInfo = {
        fullname: '',
        email: '',
        address: '',
        contactFullname: '',
        contactPosition: '',
        contactPhone: '',
        representativeFullname: '',
        representativePosition: '',
        representativePhone: '',
        area: '',
        services: []
      }
      this.$refs.FormPartnerInfo.otherService = ''
      this.$refs.FormPartnerVehicle.vehicles = [
        {
          brandname: '',
          type: '',
          numberOfSeat: '',
          model: '',
          price: '',
          additionPrice: ''
        }
      ]
      this.$store.dispatch('partner/resetData')
    },
    getListQuestions() {
      this.loadingList = true
      this.$store.dispatch('question/getListQuestions').then(resp => {
        this.loadingList = false
      }).catch(err => {
        this.loadingList = false
        console.log(err)
        this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
      })
    },
    handleSelectQuestion(index) {
      const questionWrapByIndex = document.querySelector(`.partner-registration-container .contents #question-${index}`)
      const questionWrapBySelected = document.querySelector(`.partner-registration-container .contents #question-${this.selectedQuestion}`)
      if (this.selectedQuestion === index) {
        this.selectedQuestion = 0
        questionWrapByIndex.classList.remove('active')
        questionWrapByIndex.nextElementSibling.classList.add('collapsed')
      } else if (this.selectedQuestion !== index) {
        // questionWrapBySelected.classList.remove('active')
        if (this.selectedQuestion > 0) {
          questionWrapBySelected.classList.remove('active')
        }
        this.selectedQuestion = index
        questionWrapByIndex.classList.add('active')
        questionWrapByIndex.nextElementSibling.classList.remove('collapsed')
      }
    },
    setBreadcrumbActive(value) {
      this.breadcrumbActive = value
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$gray-40: #ECEDF1;
$gray-70: #9399A9;

.partner-registration-container{
  .el-tabs__active-bar{
    background: $main;
  }
  .el-tabs__item{
    padding: 6.5px 0;
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
    &:hover{
      color: $main;
    }
    &.is-active{
      color: $main;
    }
  }
  .el-tabs__nav{
    display: flex;
    flex-wrap: wrap;
    float: unset;
  }
  .el-tabs__nav-wrap{
    border-bottom: 1px solid $gray-40;
    margin-left: -24px;
    padding-left: 24px;
  }

  .el-breadcrumb{
    font-size: 16px;
    .el-breadcrumb__item{
      .el-breadcrumb__inner{
        // color: $gray-70;
        // font-weight: 400;
        &.is-link{
          color: $main;
        }
        a{
          cursor: pointer;
          color: $gray-70;
          font-weight: 400;

          &.is-active{
            color: $main;
            text-decoration: none;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$white: #FFFFFF;
$gray-100: #383F47;
$black: #000000;
$gray-40: #ECEDF1;
$pink: #FBD1E1;
$main: #ED196B;
$red-20: #FFDAE1;
$gray-80: #646D84;
$gray-20: #F9FAFC;

.partner-registration-container{
  margin-top: 16px;
  background: $white;
  padding: 8px 8px 24px 24px;
  border-radius: 8px;

  #left{
    border-right: 1px solid #ECEDF1;

    .contents{
      padding-right: 1.5rem;
      // max-height: 884px;
      overflow-y: auto;
      .content-introduction{
        display: block;
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        color: $gray-100;

        img{
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
      }

      .question-item{
        background: $gray-40;
        padding: 8px;
        border-radius: 8px;
        color: $gray-100;
        font-size: 14px;
        line-height: 22px;
        font-style: normal;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &.active{
          background: $red-20;
          color: $main;
          > svg{
            // convert hex code to filter color: https://codepen.io/sosuke/pen/Pjoqqp
            filter: invert(20%) sepia(82%) saturate(3643%) hue-rotate(325deg) brightness(94%) contrast(97%);
          }
        }
        span{
          margin-left: 4px;
        }
      }

      .answer-item{
        padding: 8px;
        background: $gray-20;
        border-radius: 8px;
        margin-top: 4px;
        max-height: 1000px;
        overflow: hidden;
        transition: all 0.4s ease-in-out;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 18px;
        font-style: normal;
        font-weight: 400;
        color: $gray-80;
        &.collapsed{
          max-height: 0;
          padding: 0;
        }
      }

      .note{
        font-size: 14px;
        line-height: 22px;
        font-style: italic;
        font-weight: 500;
        color: red;
        .hotline{
          font-size: 1.1em;
        }
      }
    }
  }

  #right{
    .form-signup-partner-wrap{
      border-bottom: 1px solid $gray-40;
      padding: 0 0 8px 24px;
      .title-signup-form{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: $black;
      }

      .button{
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        outline: none;
        height: 40px;
        font-family: 'SFProText', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.41px;
        &:hover, &:focus{
          opacity: 0.8;
        }

        &.btn-continue-and-signup{
          background: $pink;
          color: $main;
        }

        &.btn-go-back{
          background: $gray-40;
          color: $gray-80;
        }
      }
    }

    :is(.list-breadcrumb, .form-regist){
      margin-top: 1rem;
      padding-left: 1.5rem;
    }
  }
}
</style>
