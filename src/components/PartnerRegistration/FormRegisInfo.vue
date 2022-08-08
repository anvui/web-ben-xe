<template>
  <div>
    <el-form
      ref="FormPartnerInfo"
      :model="partnerInfo"
      class="form-partner-info"
      :rules="partnerInfo.type === 2 ? partnerInfoRules : personInfoRules"
      auto-complete="on"
      label-position="left"
    >
      <div class="row no-gutters justify-content-between">
        <div class="col-12">
          <el-radio-group v-model="partnerInfo.type" class="select-type">
            <template v-for="(item, i) in $t('formRegisPartner.type')">
              <el-radio :key="i" :label="i + 1">{{ item }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="col-xs-12 col-md-6">
          <el-form-item prop="companyName">
            <el-input
              ref="companyName"
              v-model="partnerInfo.companyName"
              class="form-input"
              name="companyName"
              type="text"
              tabindex="1"
            />
            <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.companyName') }}</label>
          </el-form-item>
        </div>
        <div class="col-xs-12 col-md-6">
          <el-form-item prop="email">
            <el-input
              ref="email"
              v-model="partnerInfo.email"
              class="form-input"
              name="email"
              type="email"
              tabindex="2"
            />
            <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.email') }}</label>
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item prop="address">
            <el-input
              ref="address"
              v-model="partnerInfo.address"
              class="form-input"
              name="address"
              type="text"
              tabindex="3"
            />
            <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.address') }}</label>
          </el-form-item>
        </div>
        <div class="col-xs-12 col-md-6">
          <el-form-item prop="phoneNumber">
            <el-input
              ref="phoneNumber"
              v-model.trim="partnerInfo.phoneNumber"
              class="form-input"
              name="phoneNumber"
              type="number"
              tabindex="4"
            />
            <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.phoneNumber') }}</label>
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item prop="area">
            <select-multi-province v-model="partnerInfo.area" />
            <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.area') }}</label>
          </el-form-item>
        </div>
        <div class="enterprise-info" :class="partnerInfo.type === 1 ? 'collapsed' : ''">
          <div class="col-12">
            <div class="col-xs-12 col-md-6">
              <el-form-item prop="representativeFullname">
                <el-input
                  ref="representativeFullname"
                  v-model="partnerInfo.representativeFullname"
                  class="form-input"
                  name="representativeFullname"
                  type="text"
                  tabindex="5"
                />
                <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.representativeFullname') }}</label>
              </el-form-item>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="representativePosition">
              <el-input
                ref="representativePosition"
                v-model="partnerInfo.representativePosition"
                class="form-input"
                name="representativePosition"
                type="text"
                tabindex="6"
              />
              <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.representativePosition') }}</label>
            </el-form-item>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="representativePhone">
              <el-input
                ref="representativePhone"
                v-model.trim="partnerInfo.representativePhone"
                class="form-input"
                name="representativePhone"
                type="number"
                tabindex="7"
              />
              <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.representativePhone') }}</label>
            </el-form-item>
          </div>
          <div class="col-12">
            <div class="col-xs-12 col-md-6">
              <el-form-item prop="contactFullname">
                <el-input
                  ref="contactFullname"
                  v-model="partnerInfo.contactFullname"
                  class="form-input"
                  name="contactFullname"
                  type="text"
                  tabindex="8"
                />
                <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.contactFullname') }}</label>
              </el-form-item>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="contactPosition">
              <el-input
                ref="contactPosition"
                v-model="partnerInfo.contactPosition"
                class="form-input"
                name="contactPosition"
                type="text"
                tabindex="9"
              />
              <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.contactPosition') }}</label>
            </el-form-item>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="contactPhone">
              <el-input
                ref="contactPhone"
                v-model.trim="partnerInfo.contactPhone"
                class="form-input"
                name="contactPhone"
                type="number"
                tabindex="10"
              />
              <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.contactPhone') }}</label>
            </el-form-item>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="businessLicense">
              <el-input
                ref="businessLicense"
                v-model.trim="partnerInfo.businessLicense"
                class="form-input"
                name="businessLicense"
                type="text"
                tabindex="11"
              />
              <label class="custom-placeholder">{{ $t('formRegisPartner.partnerInfo.businessLicense') }}</label>
            </el-form-item>
          </div>
          <!-- <div class="col-xs-12 col-md-6">
            <el-form-item prop="taxNumber">
              <el-input
                ref="taxNumber"
                v-model.trim="partnerInfo.taxNumber"
                class="form-input"
                name="taxNumber"
                type="number"
                tabindex="12"
              />
              <label class="custom-placeholder">Mã số thuế</label>
            </el-form-item>
          </div> -->
        </div>
        <!-- <div class="bank-info" :class="partnerInfo.type === 2 ? 'collapsed' : ''">
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="bankNumber">
              <el-input
                ref="bankNumber"
                v-model.trim="partnerInfo.bankNumber"
                class="form-input"
                name="bankNumber"
                type="text"
                tabindex="13"
              />
              <label class="custom-placeholder">Số tài khoản ngân hàng</label>
            </el-form-item>
          </div>
          <div class="col-xs-12 col-md-6">
            <el-form-item prop="bankOwner">
              <el-input
                ref="bankOwner"
                v-model="partnerInfo.bankOwner"
                class="form-input"
                name="bankOwner"
                type="text"
                tabindex="14"
              />
              <label class="custom-placeholder">Chủ tài khoản</label>
            </el-form-item>
          </div>
          <div class="col-12">
            <div class="col-xs-12 col-md-6">
              <el-form-item prop="bankCode">
                <select-bank v-model="partnerInfo.bankCode" />
                <label class="custom-placeholder">Tên ngân hàng</label>
              </el-form-item>
            </div>
          </div>
        </div> -->
        <div class="enterprise-info" :class="partnerInfo.type === 1 ? 'collapsed' : ''">
          <div class="col-12">
            <el-form-item prop="licenseImage">
              <label>{{ $t('formRegisPartner.partnerInfo.licenseImage') }}</label>
              <upload-avatar v-model="partnerInfo.licenseImage" file-type="IMAGE" :multiple="false" />
              <span id="validate-license-image-message" class="validate-message">Vui lòng tải lên ảnh GPKD</span>
            </el-form-item>
          </div>
        </div>
        <div class="col-12 services">
          <label class="title-service">{{ $t('formRegisPartner.partnerInfo.services') }}</label>
          <el-checkbox-group v-model="partnerInfo.services" class="mt-3" @change="handleChangeCheckbox">
            <template v-for="(service, s) in listServices">
              <el-checkbox :key="s" class="d-block" :label="service" />
            </template>
            <el-input
              ref="contentService"
              v-model="otherService"
              class="form-input"
              name="content-service"
              type="text"
              tabindex="17"
              :disabled="!partnerInfo.services.includes(listServices[6])"
            />
          </el-checkbox-group>
          <span id="validate-services-message" class="validate-message">Chọn đủ loại hình dịch vụ</span>
          <span id="validate-other-services-message" class="validate-message">Bạn đang chọn loại hình dịch vụ khác. Vui lòng ghi rõ</span>
        </div>
        <div class="col-12 mt-3">
          <!-- <el-button v-if="breadcrumbActive === 'info'" class="button btn-continue-and-signup" @click="handleContinueToNextStep()">Tiếp tục</el-button> -->
          <el-button class="button btn-continue-and-signup" :loading="loadingSubmit" @click="submitForm()">{{ $t('formRegisPartner.partnerInfo.btnSubmit') }}</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import SelectBank from '@/components/Bank/SelectBank.vue'
import UploadAvatar from '@/components/Upload/UploadAvatar.vue'
import SelectMultiProvince from '@/components/Province/SelectMultiProvince.vue'

export default {
  components: {
    // SelectBank,
    UploadAvatar,
    SelectMultiProvince
  },
  props: {
    breadcrumbActive: {
      type: String,
      default: 'info'
    }
  },
  data() {
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (!reg.test(value)) {
        callback(new Error(this.$t('message.formRegisPartner.phoneNumber')))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!reg.test(value)) {
        callback(new Error(this.$t('message.formRegisPartner.email')))
      } else {
        callback()
      }
    }
    const validateCompanyName = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.companyName')))
      } else {
        callback()
      }
    }
    const validateAddress = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.address')))
      } else {
        callback()
      }
    }
    const validateArea = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.area')))
      } else {
        callback()
      }
    }
    const validateRepresentativeFullname = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.representativeFullname')))
      } else {
        callback()
      }
    }
    const validateRepresentativePosition = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.representativePosition')))
      } else {
        callback()
      }
    }
    const validateContactFullname = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.contactFullname')))
      } else {
        callback()
      }
    }
    const validateContactPosition = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.contactPosition')))
      } else {
        callback()
      }
    }
    const validateBusinessLicense = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.businessLicense')))
      } else {
        callback()
      }
    }
    const validateTaxNumber = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.taxNumber')))
      } else {
        callback()
      }
    }
    const validateBankNumber = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.bankNumber')))
      } else {
        callback()
      }
    }
    const validateBankOwner = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.bankOwner')))
      } else {
        callback()
      }
    }
    const validateBankCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.formRegisPartner.bankCode')))
      } else {
        callback()
      }
    }

    return {
      partnerInfoRules: {
        phoneNumber: [{ required: true, trigger: ['change'], validator: validatePhoneNumber }],
        representativePhone: [{ required: true, trigger: ['change'], validator: validatePhoneNumber }],
        contactPhone: [{ required: true, trigger: ['change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['change'], validator: validateEmail }],
        companyName: [{ required: true, trigger: ['change'], validator: validateCompanyName }],
        address: [{ required: true, trigger: ['change'], validator: validateAddress }],
        area: [{ required: true, trigger: ['change'], validator: validateArea }],
        representativeFullname: [{ required: true, trigger: ['change'], validator: validateRepresentativeFullname }],
        representativePosition: [{ required: true, trigger: ['change'], validator: validateRepresentativePosition }],
        contactFullname: [{ required: true, trigger: ['change'], validator: validateContactFullname }],
        contactPosition: [{ required: true, trigger: ['change'], validator: validateContactPosition }],
        businessLicense: [{ required: true, trigger: ['change'], validator: validateBusinessLicense }],
        taxNumber: [{ required: true, trigger: ['change'], validator: validateTaxNumber }],
        bankNumber: [{ required: true, trigger: ['change'], validator: validateBankNumber }],
        bankOwner: [{ required: true, trigger: ['change'], validator: validateBankOwner }],
        bankCode: [{ required: true, trigger: ['change'], validator: validateBankCode }]
      },
      personInfoRules: {
        phoneNumber: [{ required: true, trigger: ['change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['change'], validator: validateEmail }],
        companyName: [{ required: true, trigger: ['change'], validator: validateCompanyName }],
        address: [{ required: true, trigger: ['change'], validator: validateAddress }],
        area: [{ required: true, trigger: ['change'], validator: validateArea }]
      },
      partnerInfo: {
        type: 2,
        fullname: '',
        email: '',
        address: '',
        phoneNumber: '',
        contactFullname: '',
        contactPosition: '',
        contactPhone: '',
        representativeFullname: '',
        representativePosition: '',
        representativePhone: '',
        area: '',
        services: [],
        businessLicense: '',
        taxNumber: '',
        bankNumber: '',
        bankOwner: '',
        bankCode: '',
        licenseImage: ''
      },
      listServices: this.$t('message.formRegisPartner.listServices'),
      otherService: '',
      loadingSubmit: false
    }
  },
  computed: {
    ...mapGetters(['companyInfo']),
    getBreadcrumbActive: {
      get() {
        return this.breadcrumbActive
      },
      set(value) {
        this.$emit('setBreadcrumbActive', value)
      }
    }
  },
  mounted() {
    if (this.companyInfo.info) {
      this.partnerInfo = this.companyInfo.info
    }
    this.otherService = this.companyInfo.otherService ? this.companyInfo.otherService : ''
  },
  methods: {
    handleChangeCheckbox(val) {
    },
    handleContinueToNextStep() {
      // const partnerInfo = this.$refs.FormPartnerInfo.partnerInfo
      // const otherService = this.$refs.FormPartnerInfo.otherService
      // const listServices = this.$refs.FormPartnerInfo.listServices
      if (this.partnerInfo.services.includes(this.listServices[6]) && !this.otherService) {
        this.$message.error(this.$t('message.formRegisPartner.otherService'))
      } else {
        this.$store.dispatch('partner/getCompanyInfo', {
          info: this.partnerInfo,
          otherService: this.otherService
        })
        this.getBreadcrumbActive = 'vehicles'
      }
    },
    submitForm() {
      this.$refs.FormPartnerInfo.validate(valid => {
        if (valid) {
          if (this.partnerInfoRules.type === 2 && !this.partnerInfo.licenseImage) {
            this.$message.error(this.$t('message.formRegisPartner.licenseImage'))
          } else if (this.partnerInfo.services.length <= 0) {
            this.$message.error(this.$t('message.formRegisPartner.services'))
          } else if (this.partnerInfo.services.includes(this.listServices[6]) && !this.otherService) {
            this.$message.error(this.$t('message.formRegisPartner.otherService'))
          } else {
            // const vehicles = this.$refs.FormPartnerVehicle.vehicles
            // this.$store.dispatch('partner/getVehicles', vehicles)
            // call api regist company
            const listServices = this.listServices
            // const info = JSON.parse(JSON.stringify(this.partnerInfo))
            let info = _.cloneDeep(this.partnerInfo)
            const otherService = this.otherService
            const indexOtherService = info.services.indexOf(listServices[6])
            if (indexOtherService > -1) {
              info.services[indexOtherService] = otherService
            }

            // set info by type
            if (this.partnerInfo.type === 1) {
              info = {
                type: info.type,
                companyName: info.companyName,
                email: info.email,
                address: info.address,
                phoneNumber: info.phoneNumber,
                area: info.area,
                services: info.services
              }
            }
            // console.log(info)
            // const params = { ...info, vehicles: this.vehiclesRegist }
            this.loadingSubmit = true
            setTimeout(() => {
              this.$store.dispatch('partner/registCompany', info).then(resp => {
                this.loadingSubmit = false
                this.$message.success(this.$t('message.formRegisPartner.submitSuccessful'))
                // this.$store.dispatch('partner/resetData')
                // this.resetData()
              }).catch(err => {
                this.loadingSubmit = false
                console.log(err)
                this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
                // this.resetData()
              })
            }, 500)
          }
        }
      })
    }
  }
}
</script>
<style lang="scss">
$light_gray: #B0B5C1;
$deep_sea: #084388;
$red: #F56C6C;
$dark_gray: #383F47;

.form-partner-info{
  .el-form-item{
    input{
      border-color: $light_gray;
      border-radius: 8px;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;

      &:focus{
        border-color: $deep_sea;
      }
    }

    &.is-error{
      input{
        border-color: $red !important;
      }
    }
  }

  .el-checkbox{
    margin-bottom: 6px;
  }

  .el-radio{
    .el-radio__label{
      font-family: 'SFProText', sans-serif;
      font-size: 14px;
      line-height: 22px;
      color: $dark_gray;
    }
  }

  .services{
    input{
      width: 338px;
      border-color: $light_gray;
      border-radius: 8px;
    }
  }

  .avatar-uploader{
    margin: 0;
    .el-upload{
      border-radius: 6px;
    }
  }

  .select-type{
    margin-bottom: 1rem;
    .el-radio{
      margin-right: 80px;
    }
  }
}
</style>
<style lang="scss" scoped>
$white: #ffffff;
$main: #ED196B;
$dark_gray: #383F47;
$gray: #9399A9;
$light_gray: #B0B5C1;
$blue-100: #0091FE;
$pink: #FBD1E1;
$red: #F56C6C;

.form-partner-info{
  padding-right: 8px;
  .col-md-6{
    max-width: 338px;
  }

  .validate-message{
    color: $red;
    display: none;
  }

  :is(.enterprise-info, .bank-info){
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    max-height: 1000px;
    opacity: 1;
    transition: all 0.25s ease-out;

    &.collapsed{
      // display: none;
      max-height: 0;
      opacity: 0;
    }
  }

  .el-form-item {
    margin-bottom: 2rem;

    label{
      margin-bottom: 0;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: $dark_gray;
      display: inline-block;
      user-select: none;
    }

    .form-input {
      background: $white;
      width: 100%;
      // height: 48px;
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

  .services{
    .title-service{
      display: block;
      font-size: 14px;
      line-height: 22px;
      font-style: normal;
      font-weight: 400;
      color: $dark_gray;
    }
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
  }
}
</style>
