<template>
  <el-dialog
    :visible="value"
    width="40%"
    class="signup-for-offers"
    custom-class="signup-for-offers"
    @close="handleClose"
  >
    <div class="wrapper">
      <div class="w-100">
        <label>{{ $t('follow.formSignupForOffers.label') }}</label>
      </div>
      <div class="w-100">
        <el-form ref="infoForm" :model="info" :rules="infoRules" class="info-form" auto-complete="on" label-position="left">
          <el-form-item prop="fullName">
            <el-input
              ref="fullName"
              v-model.trim="info.fullName"
              class="form-input"
              name="fullName"
              type="text"
              tabindex="1"
            />
            <label class="custom-placeholder">{{ $t('follow.formSignupForOffers.fullName') }}</label>
          </el-form-item>

          <el-form-item prop="email">
            <el-input
              ref="email"
              v-model.trim="info.email"
              class="form-input"
              type="email"
              name="email"
              tabindex="2"
            />
            <label class="custom-placeholder">{{ $t('follow.formSignupForOffers.email') }}</label>
          </el-form-item>

          <el-form-item prop="phoneNumber">
            <el-input
              ref="phoneNumber"
              v-model.trim="info.phoneNumber"
              class="form-input"
              type="number"
              name="phoneNumber"
              tabindex="3"
              @keyup.enter.native="handleSignup"
            />
            <label class="custom-placeholder">{{ $t('follow.formSignupForOffers.phoneNumber') }}</label>
          </el-form-item>

          <div class="row no-gutters align-items-center" style="gap: 12px">
            <div class="col text-right">
              <el-button class="btn-signup" :loading="loading" @click.native.prevent="handleSignup">
                {{ $t('follow.formSignupForOffers.btnSignup') }}
              </el-button>
            </div>
            <div class="col">
              <el-button class="btn-cancel" @click.native.prevent="handleCancel">
                {{ $t('follow.formSignupForOffers.btnCancel') }}
              </el-button>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  data() {
    const validateFullname = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.follow.formSignupForOffers.fullName')))
      } else {
        callback()
      }
    }
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.follow.formSignupForOffers.phoneNumber')))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.follow.formSignupForOffers.email')))
      } else {
        callback()
      }
    }
    return {
      infoRules: {
        fullName: [{ required: true, trigger: ['blur', 'change'], validator: validateFullname }],
        phoneNumber: [{ required: true, trigger: ['blur', 'change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['blur', 'change'], validator: validateEmail }]
      },
      info: {
        fullName: '',
        email: '',
        phoneNumber: ''
      },
      loading: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
    handleSignup() {
    },
    handleCancel() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss">
$light_gray: #B0B5C1;

.signup-for-offers{
  .el-form-item{
    input{
      border-color: $light_gray;
      border-radius: 8px;
      height: 40px;
    }
  }
}
</style>

<style lang="scss" scoped>
$gray: #383F47;
$main: #ED196B;

.signup-for-offers{
  .info-form{
    margin-top: 1rem;
    .el-form-item {
      margin-bottom: 32px;
      .form-input {
        background: white;
        width: 100%;
        height: 42px;
        outline: none;
        transition: 0.2s cubic-bezier(.645,.045,.355,1);
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $gray;
      }
      .custom-placeholder {
        font-family: "SFProText", sans-serif;
        font-size: 14px;
        line-height: 22px;
        position: absolute;
        top: -10px;
        left: 14px;
        user-select: none;
        pointer-events: none;
        padding: 0 10px;
        display: inline-block;
        background: white;
        color: $gray;
        transition: 0.2s cubic-bezier(.645,.045,.355,1);
      }
    }
    .btn-signup{
      padding: 16px 24px;
      background-color: $main;
      color: white;
      border-color: transparent;
      border-radius: 50px;
      font-size: 1rem;
      &:hover{
        opacity: 0.8;
      }
    }
    .btn-cancel{
      padding: 16px 24px;
      border-radius: 50px;
      font-size: 1rem;
    }
  }
}
</style>
