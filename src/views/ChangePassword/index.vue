<template>
  <div class="form-change-password-container">
    <div class="container">
      <el-form
        ref="FormChangePassword"
        :model="params"
        :rules="formRules"
        class="change-password-form"
        auto-complete="on"
        label-position="left"
      >

        <div class="title-container">
          <h3 class="title">{{ $t('changePassword.title') }}</h3>
        </div>

        <el-form-item prop="currentPassword">
          <el-input
            :key="currentPasswordType"
            ref="currentPassword"
            v-model.trim="params.currentPassword"
            class="form-input"
            :type="currentPasswordType"
            name="currentPassword"
            tabindex="1"
            auto-complete="off"
          />
          <label class="custom-placeholder">{{ $t('changePassword.currentPassword') }}</label>
          <span class="show-pwd" @click="showPwd('currentPw')">
            <svg-icon :icon-class="currentPasswordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model.trim="params.password"
            class="form-input"
            :type="passwordType"
            name="password"
            tabindex="2"
            auto-complete="off"
          />
          <label class="custom-placeholder">{{ $t('changePassword.newPassword') }}</label>
          <span class="show-pwd" @click="showPwd('newPw')">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <el-form-item prop="confirmPassword">
          <el-input
            :key="confirmPasswordType"
            ref="confirmPassword"
            v-model.trim="params.confirmPassword"
            class="form-input"
            :type="confirmPasswordType"
            name="confirmPassword"
            tabindex="3"
            auto-complete="off"
            :disabled="!params.password"
            @keyup.enter.native="handleSavePassword"
          />
          <label class="custom-placeholder">{{ $t('changePassword.confirmPassword') }}</label>
          <span class="show-pwd" @click="showPwd('confirmPw')">
            <svg-icon :icon-class="confirmPasswordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <div class="row no-gutters align-items-center mt-4 button-wrap">
          <div class="col-xs-12 col text-right">
            <el-button icon="el-icon-s-promotion" class="button btn-save" :loading="loading" @click.native.prevent="handleSavePassword">
              {{ $t('changePassword.btnSave') }}
            </el-button>
          </div>
          <div class="col-xs-12 col">
            <el-button icon="el-icon-back" class="button btn-back" @click.native.prevent="handleGoBack">
              {{ $t('changePassword.btnBack') }}
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ChangePassword',
  data() {
    const validateCurrentPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.changePassword.requireCurrentPassword')))
      } else if (value !== this.userInfo.password) {
        callback(new Error(this.$t('message.changePassword.oldPasswordIncorrect')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.changePassword.requirePassword')))
      } else if (value.length < 6 || value.length > 20) {
        callback(new Error(this.$t('message.changePassword.limitPassword')))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('message.changePassword.requireConfirmPassword')))
      } else if (value !== this.params.password) {
        callback(new Error(this.$t('message.changePassword.passwordNotMatch')))
      } else {
        callback()
      }
    }
    return {
      params: {
        currentPassword: '',
        password: '',
        confirmPassword: ''
      },
      formRules: {
        currentPassword: [{ required: true, trigger: ['blur', 'change'], validator: validateCurrentPassword }],
        password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }],
        confirmPassword: [{ required: true, trigger: ['blur', 'change'], validator: validateConfirmPassword }]
      },
      loading: false,
      currentPasswordType: 'password',
      passwordType: 'password',
      confirmPasswordType: 'password'
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'userInfo'
    ])
  },
  methods: {
    showPwd(field) {
      switch (field) {
        case 'currentPw':
          if (this.currentPasswordType === 'password') {
            this.currentPasswordType = ''
          } else {
            this.currentPasswordType = 'password'
          }
          this.$nextTick(() => {
            this.$refs.currentPassword.focus()
          })
          break
        case 'newPw':
          if (this.passwordType === 'password') {
            this.passwordType = ''
          } else {
            this.passwordType = 'password'
          }
          this.$nextTick(() => {
            this.$refs.password.focus()
          })
          break
        case 'confirmPw':
          if (this.confirmPasswordType === 'password') {
            this.confirmPasswordType = ''
          } else {
            this.confirmPasswordType = 'password'
          }
          this.$nextTick(() => {
            this.$refs.confirmPassword.focus()
          })
          break
      }
    },
    handleGoBack() {
      this.$router.go(-1)
    },
    handleSavePassword() {
      this.$refs.FormChangePassword.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/update', {
            avatar: this.userInfo.avatar,
            email: this.userInfo.email,
            fullName: this.userInfo.fullName,
            password: this.params.password
          }).then(resp => {
            this.loading = false
            this.$message.success(this.$t('message.changePassword.updateSuccessful'))
          }).catch(err => {
            this.loading = false
            console.log(err.message)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #ffffff;
$light_gray: #B0B5C1;
$cursor: #383f47;
$main: #ED196B;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  // .login-container .el-input input {
  //   color: $cursor;
  // }
}

/* reset element-ui css */
.form-change-password-container {
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
      height: 48px;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    position: relative;
    .is-disabled{
        + .custom-placeholder{
            background-color: #ECEDF1 !important;
        }
    }
  }
}
</style>

<style lang="scss" scoped>
$white:#ffffff;
$dark_gray: #889aa4;
$gray: #383F47;
$light_gray: #B0B5C1;
$main: #ED196B;
$blue: #3498db;

.form-change-password-container {
  // margin-top: 10%;
  // min-height: 100vh;
  width: 100%;
  position: relative;
  margin-top: 48px;

  .change-password-form {
    width: 100%;
    max-width: 60%;
    margin-inline: auto;
    overflow: hidden;
    background-color: $white;
    padding: 24px;
    border-radius: 12px;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
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
      background: $white;
      width: 100%;
      height: 56px;
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
      background: $white;
      color: $gray;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
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

  .button-wrap{
    > [class*=col-]{
        padding-right: 16px;
    }
    .button{
      border-radius: 50px;
      color: $white;
      padding: 16px 24px;
      max-height: 56px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      font-style: normal;
      border: none;
      &.btn-back{
        background-color: $blue;
        font-size: 1em;
        &:hover, &:focus{
          opacity: 0.8;
        }
      }
      &.btn-save{
        background-color: $main;
        font-size: 1em;
        &:hover, &:focus{
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
