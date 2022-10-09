<template>
  <el-form v-if="labelFormCustomerActive === getIndexForm" id="form-customer-info" ref="customerInfo" :model="customerInfo" :rules="formCustomerRules" class="customer-info-form pt-3" auto-complete="on" label-position="left" @validate="validateForm">
    <el-form-item prop="fullname">
      <el-input
        ref="fullname"
        v-model="customerInfo.fullname"
        class="form-input"
        name="fullname"
        type="text"
        tabindex="1"
        @change="handleValueChange"
      />
      <label class="custom-placeholder">{{ $t('book.formCustomerInfo.fullName') }} <span style="color: red">*</span></label>
    </el-form-item>
    <el-form-item prop="phoneNumber">
      <el-input
        ref="phoneNumber"
        v-model="customerInfo.phoneNumber"
        class="form-input"
        name="phoneNumber"
        type="text"
        tabindex="2"
        @change="handleValueChange"
      />
      <label class="custom-placeholder">{{ $t('book.formCustomerInfo.phoneNumber') }} <span style="color: red">*</span></label>
    </el-form-item>
    <el-form-item prop="email">
      <el-input
        ref="email"
        v-model="customerInfo.email"
        class="form-input"
        name="email"
        type="text"
        tabindex="3"
        @change="handleValueChange"
      />
      <label class="custom-placeholder">{{ $t('book.formCustomerInfo.email') }} <span style="color: red">*</span></label>
    </el-form-item>
    <el-form-item prop="sex">
      <label style="margin-right: 8px">{{ $t('book.formCustomerInfo.sex.label') }} <span style="color: red">*</span></label>
      <el-radio-group v-model="customerInfo.sex" tabindex="5" @change="handleValueChange">
        <el-radio :label="1">{{ $t('book.formCustomerInfo.sex.male') }}</el-radio>
        <el-radio :label="2">{{ $t('book.formCustomerInfo.sex.female') }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <div
      v-if="$route.name === 'OrderPage' || $route.name === 'CreateTrip'"
      class="row no-gutters"
      style="gap: 16px"
    >
      <div class="col">
        <el-form-item prop="promotionCode">
          <el-input
            ref="promotionCode"
            v-model="customerInfo.promotionCode"
            class="form-input"
            name="promotionCode"
            type="text"
            tabindex="6"
            :disabled="promotionResponse && promotionResponse.tripId === tripId ? true : false"
            @change="handleValueChange"
          />
          <label class="custom-placeholder">{{ $t('book.formCustomerInfo.promotionCode') }}</label>
        </el-form-item>
      </div>
      <div class="col-auto">
        <el-button
          v-if="!promotionResponse || promotionResponse && promotionResponse.tripId !== tripId"
          class="btn-confirm-promotion"
          :loading="loadingConfirmPromotion"
          @click="confirmPromotion()"
        >
          {{ $t('book.formCustomerInfo.btnConfirm') }}
        </el-button>
        <el-button
          v-else
          class="btn-remove-promotion"
          :loading="loadingConfirmPromotion"
          @click="removePromotion()"
        >
          {{ $t('book.formCustomerInfo.btnRemove') }}
        </el-button>
      </div>
    </div>
    <span class="text-note">{{ promotionResponse && promotionResponse.tripId === tripId && promotionResponse.note ? promotionResponse.note : '' }}</span>
    <el-form-item v-if="$route.params.tripId && $route.params.referralUser" prop="referralUser" style="margin-block: 1rem">
      <el-input
        ref="referralUser"
        v-model="customerInfo.referralUser"
        class="form-input"
        name="referralUser"
        type="text"
        disabled
      />
      <label class="custom-placeholder">{{ $t('book.formCustomerInfo.referralUser') }}</label>
    </el-form-item>
    <el-form-item>
      <el-checkbox
        v-if="$route.name === 'OrderPage' || $route.name === 'CreateTrip'"
        :value="fillAllCustomer"
        @change="handleFillAll"
      >
        {{ $t('book.formCustomerInfo.btnFillAll') }}
      </el-checkbox>
    </el-form-item>
  </el-form>
</template>
<script>
// import { getUserInfo } from '@/utils/auth'
import { mapGetters } from 'vuex'

export default {
  props: {
    labelFormCustomerActive: {
      type: Number,
      default: 1
    },
    value: {
      type: Array,
      default: null
    },
    tripId: {
      type: [Number, String, Array],
      default: 0
    },
    passengerInfo: {
      type: Object,
      default: null
    }
  },

  data() {
    const validateFullname = (rule, value, callback) => {
      // const reg = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
      if (value.length <= 0) {
        callback(new Error(this.$t('message.book.validate.fullName')))
      } else {
        callback()
      }
    }
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.book.validate.phoneNumber')))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.book.validate.email')))
      } else {
        callback()
      }
    }

    return {
      formCustomerRules: {
        fullname: [{ required: true, trigger: ['blur', 'change'], validator: validateFullname }],
        phoneNumber: [{ required: true, trigger: ['blur', 'change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['blur', 'change'], validator: validateEmail }]
      },
      customerInfo: {
        ticketId: null,
        fullname: '',
        phoneNumber: '',
        email: '',
        sex: 1,
        referralUser: this.$route.params.referralUser || '',
        promotionCode: ''
      },
      sexLabel: {
        1: 'MALE',
        2: 'FEMALE'
      },
      loadingConfirmPromotion: false
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
    getIndexForm() {
      return this.$vnode.key
    }
  },
  watch: {
    'fillAllCustomer': function(val) {
      if (val) {
        if (this.validate.length > 0) {
          this.$store.dispatch('trip/validateInfo', [])
        }

        if (this.getIndexForm > 1) {
          this.customerInfo.fullname = this.firstCustomerInfo.fullname
          this.customerInfo.phoneNumber = this.firstCustomerInfo.phoneNumber
          this.customerInfo.email = this.firstCustomerInfo.email
          this.customerInfo.sex = this.firstCustomerInfo.sex
        }
      } else {
        if (this.getIndexForm > 1) {
          this.customerInfo.fullname = ''
          this.customerInfo.phoneNumber = ''
          this.customerInfo.email = ''
          this.customerInfo.sex = 1
        }
      }
    },
    'customerInfo.fullname': function(newval, oldval) {
      if (newval && this.fillAllCustomer) {
        // console.log(newval, oldval)
        // const info = { ...this.customerInfo }
        // console.log(info)
        this.firstCustomerInfo.fullname = newval
      }
    },
    'customerInfo.phoneNumber': function(newval, oldval) {
      if (newval && this.fillAllCustomer) {
        // console.log(newval, oldval)
        this.firstCustomerInfo.phoneNumber = newval
      }
    },
    'customerInfo.email': function(newval, oldval) {
      if (newval && this.fillAllCustomer) {
        // console.log(newval, oldval)
        this.firstCustomerInfo.email = newval
      }
    },
    'customerInfo.sex': function(newval, oldval) {
      if (newval && this.fillAllCustomer) {
        // console.log(newval, oldval)
        this.firstCustomerInfo.sex = newval
      }
    },
    'customerInfo.promotionCode': function(val) {
      this.firstCustomerInfo.promotionCode = val
    },
    'firstCustomerInfo.promotionCode': function(val) {
      this.customerInfo.promotionCode = val
    }
  },
  mounted() {
    this.setDataCustomerInfo()
  },
  methods: {
    setDataCustomerInfo() {
      // check promotion code not null -> set customerInfo.promotionCode = firstCustomerInfo.promotionCode
      if (this.firstCustomerInfo && this.firstCustomerInfo.promotionCode) {
        this.customerInfo.promotionCode = this.firstCustomerInfo.promotionCode
      }

      // set customerInfo = authUserInfo and check isFillAll -> set customerInfo = firstCustomerInfo
      if (this.getIndexForm === 1) {
        this.customerInfo.fullname = this.userInfo ? this.userInfo.fullName : ''
        this.customerInfo.phoneNumber = this.userInfo ? this.userInfo.phoneNumber : ''
        this.customerInfo.email = this.userInfo ? this.userInfo.email : ''

        const firstCustomerInfo = this.customerInfo
        this.$store.dispatch('trip/firstCustomerInfo', firstCustomerInfo)
      } else {
        if (this.fillAllCustomer) {
          this.customerInfo.fullname = this.firstCustomerInfo ? this.firstCustomerInfo.fullname : ''
          this.customerInfo.phoneNumber = this.firstCustomerInfo ? this.firstCustomerInfo.phoneNumber : ''
          this.customerInfo.email = this.firstCustomerInfo ? this.firstCustomerInfo.email : ''
          this.customerInfo.sex = this.firstCustomerInfo ? this.firstCustomerInfo.sex : ''
        }
      }

      // check has passengerInfo => set customerInfo = passengerInfo
      // (passengerInfo not null -> click 'sửa thông tin' in history view)
      if (this.passengerInfo) {
        this.customerInfo.ticketId = this.passengerInfo.ticketId
        this.customerInfo.fullname = this.passengerInfo.fullName
        this.customerInfo.phoneNumber = this.passengerInfo.phoneNumber
        this.customerInfo.email = this.passengerInfo.email
        this.customerInfo.sex = this.passengerInfo.sex === 'MALE' ? 1 : 2
      }
    },
    validateForm(field, valid, message) {
      // console.log(field, valid, message)
      const validateError = {
        field: field,
        valid: valid,
        message: message,
        index: this.getIndexForm
      }
      const validateArr = this.validate
      if (!valid) {
        if (!this.containsValidate(validateError, validateArr)) {
          validateArr.push(validateError)
        }
      } else {
        if (this.containsValidate(validateError, validateArr)) {
          const objContain = this.containsValidate(validateError, validateArr)
          const mapIndex = validateArr.indexOf(objContain)
          if (mapIndex > -1) {
            validateArr.splice(mapIndex, 1)
          }
          // console.log(mapIndex)
        }

        // if (this.fillAllCustomer) {
        //   validateArr = []
        // } else {
        //   if (this.containsValidate(validateError, validateArr)) {
        //     const objContain = this.containsValidate(validateError, validateArr)
        //     const mapIndex = validateArr.indexOf(objContain)
        //     if (mapIndex > -1) {
        //       validateArr.splice(mapIndex, 1)
        //     }
        //     // console.log(mapIndex)
        //   }
        // }
      }
      this.$store.dispatch('trip/validateInfo', validateArr)
    },
    containsValidate(obj, list) {
      var i
      for (i = 0; i < list.length; i++) {
        if (list[i].field === obj.field && list[i].index === obj.index) {
          return list[i]
        }
      }

      return null
    },
    handleFillAll(value) {
      this.$store.dispatch('trip/fillAllCustomer', value)
    },
    handleValueChange() {
    },
    confirmPromotion() {
      this.loadingConfirmPromotion = true
      this.$store.dispatch('promotion/getRespPromotion', {
        promotionCode: this.customerInfo.promotionCode,
        tripId: this.tripId
      }).then(resp => {
        this.loadingConfirmPromotion = false
        this.$message.success(this.$t('message.book.applyPromotion'))
      }).catch(err => {
        this.loadingConfirmPromotion = false
        console.log(err)
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
      })
    },
    removePromotion() {
      this.customerInfo.promotionCode = ''
      this.$store.dispatch('promotion/resetPromotionResp')
    }
  }
}
</script>
<style lang="scss">
$light_gray: #B0B5C1;
$deep_sea: #084388;

#form-customer-info{
  .el-form-item{
    input{
      border-color: $light_gray;

      &:focus{
        border-color: $deep_sea;
      }
    }

    &.is-error{
      input{
        border-color: #F56C6C !important;
      }
    }

    .el-form-item__error{
      padding-top: 0;
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

#form-customer-info{
  .el-form-item {
    margin-bottom: 1.5rem;

    &:nth-child(3), &:nth-child(4){
      margin-bottom: 0.75rem;
    }

    // &:nth-child(5){
    //   margin-bottom: 0.25rem;
    // }

    &:last-child{
      margin-bottom: 0 !important;
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

    .is-disabled {
      + .custom-placeholder {
        background-color: #ecedf1;
      }
    }
  }

  .btn-confirm-promotion{
    height: 40px;
    font-family: 'Cabin';
    background: #FBD1E1;
    border: 1px solid #FBD1E1;
    border-radius: 8px;
    color: $main;
    padding: 8px 16px;
    outline: none;
    transition: all 0.2s ease;
    &:hover{
      background: rgb(251 209 225 / 80%) !important;
      border-color: rgb(251 209 225 / 80%);
      color: rgb(255 72 104 / 80%) !important;
    }
  }

  .btn-remove-promotion{
    height: 40px;
    font-family: 'Cabin';
    background: $blue-100;
    border: transparent;
    border-radius: 8px;
    color: $white;
    padding: 8px 16px;
    outline: none;
    transition: all 0.2s ease;
    &:hover{
      background: rgb(0 145 254 / 80%) !important;
      border-color: rgb(0 145 254 / 80%);
      color: rgb(255 255 255 / 80%) !important;
    }
  }

  .text-note{
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    color: $main;
  }
}
</style>
