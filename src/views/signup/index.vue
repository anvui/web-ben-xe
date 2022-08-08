<template>
  <div class="signup-container">
    <el-form ref="signupForm" :model="signupForm" :rules="signupRules" class="signup-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">{{ $t('signup.title') }}</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model.trim="signupForm.username"
          class="form-input"
          name="username"
          type="text"
          tabindex="1"
        />
        <label class="custom-placeholder">{{ $t('signup.userName') }}</label>
      </el-form-item>

      <el-form-item prop="fullname">
        <el-input
          ref="fullname"
          v-model="signupForm.fullname"
          class="form-input"
          name="fullname"
          type="text"
          tabindex="2"
        />
        <label class="custom-placeholder">{{ $t('signup.fullName') }}</label>
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          ref="email"
          v-model.trim="signupForm.email"
          class="form-input"
          name="email"
          type="text"
          tabindex="3"
        />
        <label class="custom-placeholder">{{ $t('signup.email') }}</label>
      </el-form-item>

      <el-form-item prop="phoneNumber">
        <!-- <form @submit.prevent="sendOtp"> -->
        <div class="row no-gutters">
          <div class="col" style="padding-right: 8px">
            <el-input
              ref="phoneNumber"
              v-model.trim="signupForm.phoneNumber"
              class="form-input"
              name="phoneNumber"
              type="number"
              tabindex="4"
            />
            <label class="custom-placeholder">{{ $t('signup.phoneNumber') }}</label>
          </div>
          <div class="col-auto">
            <el-button id="btn-send-otp-code" :loading="loadingSend" @click="sendOtp">
              <span>{{ $t('signup.btnSend') }}</span>
              <i class="el-icon-s-promotion" />
            </el-button>
          </div>
        </div>
        <!-- </form> -->
      </el-form-item>

      <el-form-item prop="otp">
        <!-- <form @submit.prevent="sendOtp"> -->
        <div class="row no-gutters">
          <div class="col" style="padding-right: 8px">
            <el-input
              ref="otp"
              v-model.trim="signupForm.otp"
              class="form-input"
              name="otp"
              type="number"
              tabindex="4"
              :disabled="!isSendOtp"
            />
            <label class="custom-placeholder">{{ $t('signup.otp') }}</label>
          </div>
          <div class="col-auto d-flex align-items-center">
            <el-button v-if="!isConfirmOtp" type="primary" class="btn-verify-otp" :loading="loadingConfirm" :disabled="!isSendOtp" @click="verifyOtp">
              <span>{{ $t('signup.btnVerify') }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style="fill:white;"
              >
                <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z" />
              </svg>
            </el-button>
            <span v-else class="checkmark">
              <div class="checkmark_circle" />
              <div class="checkmark_stem" />
              <div class="checkmark_kick" />
            </span>
          </div>
        </div>
        <!-- </form> -->
      </el-form-item>

      <el-form-item prop="password" class="mb-0">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="signupForm.password"
          class="form-input"
          :type="passwordType"
          name="password"
          tabindex="5"
          auto-complete="off"
          @keyup.enter.native="handleSignup"
        />
        <label class="custom-placeholder">{{ $t('signup.password') }}</label>
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <div class="row no-gutters align-items-center mt-4">
        <div class="col-auto">
          <el-button class="btn-sign-in" :loading="loading" @click.native.prevent="handleSignup">
            {{ $t('signup.btnSignup') }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z" fill="white" />
              <path d="M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z" fill="white" />
            </svg>
          </el-button>
        </div>
        <div class="col text-right">
          <div class="have-account">
            <span>{{ $t('signup.haveAccount.label') }} </span>
            <a href="" class="btn-login-now" @click.prevent="handleLogin">{{ $t('signup.haveAccount.btnLogin') }}</a>
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      // const regWhiteSpace = /\s/g
      if (value.length < 6 || value.length > 20) {
        callback(new Error(this.$t('message.signup.limitUsername')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('message.signup.limitPassword')))
      } else {
        callback()
      }
    }
    const validateFullname = (rule, value, callback) => {
      const reg = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.signup.fullNameCorrect')))
      } else {
        callback()
      }
    }
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = /(0[3|5|7|8|9])+([0-9]{8})\b/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.signup.phoneNumberCorrect')))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.signup.emailCorrect')))
      } else {
        callback()
      }
    }
    const validateOtp = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error(this.$t('message.signup.otpIncorrect')))
      } else {
        callback()
      }
    }

    return {
      signupForm: {
        username: '',
        fullname: '',
        email: '',
        phoneNumber: '',
        password: '',
        otp: ''
      },
      signupRules: {
        username: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
        fullname: [{ required: true, trigger: ['blur', 'change'], validator: validateFullname }],
        phoneNumber: [{ required: true, trigger: ['blur', 'change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['blur', 'change'], validator: validateEmail }],
        password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }],
        otp: [{ required: true, trigger: ['blur', 'change'], validator: validateOtp }]
      },
      passwordType: 'password',
      loading: false,
      loadingSend: false,
      loadingConfirm: false,
      isSendOtp: false,
      isConfirmOtp: false
    }
  },
  created() {
    this.renderRecaptcha()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleSignup() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          if (!this.isConfirmOtp) {
            this.$message.error(this.$t('message.signup.confirmOtpError'))
            return false
          }
          this.loading = true
          this.$store.dispatch('user/signup', this.signupForm).then(() => {
            this.$message.success(this.$t('message.signup.signupSuccessful'))
            this.$router.push({ name: 'Login' })
            this.loading = false
          }).catch((err) => {
            this.loading = false
            console.log(err)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleLogin() {
      // this.$router.push({ name: 'Login' })
      window.location.href = `/${this.$i18n.locale}/login`
    },
    renderRecaptcha() {
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('btn-send-otp-code', {
          'size': 'invisible',
          'callback': function(response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': function() {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        })
        //
      }, 1000)
    },
    sendOtp() {
      //
      const self = this
      const regPhoneNumber = new RegExp(/(0[3|5|7|8|9])+([0-9]{8})\b/)
      if (!this.signupForm.phoneNumber || !regPhoneNumber.test(this.signupForm.phoneNumber)) {
        self.$message.error(self.$t('message.signup.phoneNumberCorrect'))
      } else {
        self.loadingSend = true
        const countryCode = '+84' // vietnam
        const formatPhoneNumber = this.signupForm.phoneNumber.substring(1)
        const phoneNumber = countryCode + formatPhoneNumber
        //
        const appVerifier = window.recaptchaVerifier
        //
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function(confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult
            //
            self.$message.success(self.$t('message.signup.sendOtpSuccess'))
            self.loadingSend = false
            self.isSendOtp = true
          }).catch(function(error) {
            // Error; SMS not sent
            // ...
            console.log(error)
            self.$message.error(self.$t('message.signup.sendOtpError'))
            self.loadingSend = false
            window.grecaptcha.reset()
            self.isSendOtp = false
          })
      }
    },
    verifyOtp() {
      const self = this
      if (!this.signupForm.otp) {
        self.$message.error(self.$t('message.signup.otpIncorrect'))
      } else {
        self.loadingConfirm = true
        const code = self.signupForm.otp

        window.confirmationResult.confirm(code).then(function(result) {
          // User signed in successfully.
          // const user = result.user
          // console.log(user)
          self.loadingConfirm = false
          self.isConfirmOtp = true
          // ...
          // route to set password !
          // self.$router.push({ name: 'Login' })
        }).catch(function(error) {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error)
          self.$message.error(self.$t('message.signup.confirmOtpError'))
          self.loadingConfirm = false
          self.isConfirmOtp = false
        })
      }
    }
  }
}
</script>
<style lang="scss">
$bg: #ffffff;
$light_gray: #B0B5C1;
$cursor: #383f47;
$main: #ED196B;

.signup-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      font-family: 'Roboto', sans-serif;
      border: 2px solid $light_gray;
      border-radius: 8px;
      -webkit-appearance: none;
      padding: 0 24px;
      height: 100%;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .grecaptcha-badge{
    visibility: hidden;
  }
}

</style>

<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray: #889aa4;
$gray: #383F47;
$light_gray: #B0B5C1;
$main: #ED196B;

.signup-container {
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;

  .signup-form {
    width: 500px;
    max-width: 100%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title-container {
    position: relative;

    .title {
      font-size: 24px;
      line-height: 29px;
      color: $gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: normal;
    }
  }

  .el-form-item {
    margin-bottom: 31px;
    .form-input {
      background: $bg;
      width: 100%;
      // height: 56px;
      outline: none;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $gray;
    }
    .custom-placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 22px;
      position: absolute;
      top: -10px;
      left: 14px;
      user-select: none;
      pointer-events: none;
      padding: 0 10px;
      display: inline-block;
      background: $bg;
      color: $gray;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
    }
    #btn-send-otp-code{
      background-color: $main;
      color: white;
      border: none;
      border-radius: 8px;
      height: 100%;
      padding: 8px 16px;
      &:hover, &:focus{
        opacity: 0.8;
      }
      span{
        padding-right: 6px;
      }
    }
    .btn-verify-otp{
      height: 100%;
      border-radius: 8px;
      padding: 8px 16px;
      span{
        padding-right: 6px;
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .have-account {
    .btn-login-now {
      color: $main;
    }
  }
}
</style>
