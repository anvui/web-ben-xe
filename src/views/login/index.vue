<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model.trim="loginForm.username"
          class="form-input"
          name="username"
          type="text"
          tabindex="1"
        />
        <label class="custom-placeholder">{{ $t('login.usernameOrPhone') }}</label>
      </el-form-item>

      <el-form-item prop="password" class="mb-4">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          class="form-input"
          :type="passwordType"
          name="password"
          tabindex="2"
          auto-complete="off"
          @keyup.enter.native="handleLogin"
        />
        <label class="custom-placeholder">{{ $t('login.password') }}</label>
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <!-- <recaptcha ref="recaptcha" v-model="loginForm.responseRecaptcha" /> -->

      <div class="row no-gutters align-items-center mt-4">
        <div class="col-auto">
          <el-button class="btn-sign-in" :loading="loading" @click.native.prevent="handleLogin">
            {{ $t('login.btnLogin') }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z" fill="white" />
              <path d="M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z" fill="white" />
            </svg>
          </el-button>
        </div>
        <div class="col text-right">
          <router-link :to="{ name: 'ResetPassword' }">{{ $t('login.btnForgotPassword') }}</router-link>
        </div>
      </div>

      <!-- <div style="margin-top: 1rem">
        <div
          id="g_id_onload"
          data-client_id="939383271889-24rrrnchf83qa14tc09ejgnfl950ttkg.apps.googleusercontent.com"
          data-callback="handleCredentialResponse"
          data-context="signin"
          data-ux_mode="popup"
          data-auto_prompt="false"
        />
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign in"
          data-shape="rectangular"
          data-logo_alignment="left"
        />
      </div> -->

      <div>
        <div class="seperate-line" />
        <div class="seperate-text">{{ $t('login.seperateText') }}</div>
      </div>
      <div id="signin_button" style="margin-top: 0.5rem" />

      <div class="have-not-account">
        <span>{{ $t('login.haveNotAccount.label') }} </span>
        <a href="" class="btn-sign-up-now" @click.prevent="$router.push({ name: 'Signup' })">{{ $t('login.haveNotAccount.btnSignupNow') }}</a>
      </div>

      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->

    </el-form>
  </div>
</template>

<script>
// import Recaptcha from '@/components/Recaptcha/recaptcha.vue'
import { mapGetters } from 'vuex'
import { parseJwt } from '@/utils/index'

export default {
  name: 'Login',
  components: {
    // Recaptcha
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error(this.$t('message.login.requireUsername')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('message.login.limitPassword')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        responseRecaptcha: 'anvui'
      },
      loginRules: {
        username: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
        password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.redirect = from.fullPath
  //   })
  // },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  watch: {
    $route: {
      handler: function(route) {
        // console.log(route)
        if (route.query && route.query.redirect) {
          if (route.query.redirect === '') {
            this.redirect = `/${this.$i18n.locale}`
          } else {
            this.redirect = route.query.redirect
          }
        } else {
          this.redirect = `/${this.$i18n.locale}`
        }
        // this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.renderButton()
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
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || `/${this.$i18n.locale}` })
            this.loading = false
          }).catch((err) => {
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
            console.log(err)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    renderButton() {
      const googleScript = document.createElement('script')
      googleScript.src = 'https://accounts.google.com/gsi/client'
      document.head.appendChild(googleScript)
      window.addEventListener('load', () => {
        console.log(window.google)
        window.google.accounts.id.initialize({
          client_id: '939383271889-24rrrnchf83qa14tc09ejgnfl950ttkg.apps.googleusercontent.com',
          callback: this.handleCredentialResponse
        })
        window.google.accounts.id.renderButton(
          document.getElementById('signin_button'),
          { theme: 'outline', size: 'large' } // customization attributes
        )
        window.google.accounts.id.prompt() // also display the One Tap dialog
      })
    },
    handleCredentialResponse(response) {
      const user = parseJwt(response.credential)
      // console.log(user)
      this.$store.dispatch('user/loginSocial', {
        email: user.email,
        userName: user.email,
        captcha: 'anvuiuserInfo.',
        fullName: user.name,
        avatar: user.picture,
        googleId: user.sub
      }).then(resp => {
        // console.log(resp)
        this.$router.push({ path: this.redirect || `/${this.$i18n.locale}` })
      }).catch(err => {
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
        console.log(err)
        this.loading = false
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
.login-container {
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

  .el-form-item {
    position: relative;
    // margin-bottom: 31px;
    // &:last-child {
    //   margin-bottom: 24px !important;
    // }
  }
}
</style>

<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray: #889aa4;
$gray: #383F47;
$light_gray: #B0B5C1;
$main: #ED196B;

.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;

  .login-form {
    width: 500px;
    max-width: 100%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      background: $bg;
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
      background: $bg;
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

  .have-not-account {
    margin-top: 18px;
    padding-top: 24px;
    font-weight: 600;
    border-top: 1px solid #C4C4C4;
    text-align: center;
    .btn-sign-up-now {
      color: $main;
    }
  }

  .seperate-line{
    margin-top: 1rem;
    background-color: #C4C4C4;
    height: 1px;
  }
  .seperate-text{
    margin-top: -12px;
    padding: 0 6px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }
}
</style>
