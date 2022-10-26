<template>
  <div class="header">
    <div class="menu container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link :to="`/${$i18n.locale}`" class="navbar-brand"><img class="logo" :src="companyConfig ? companyConfig.logo : ''" width="97.66px" height="40px" alt="logo kbus"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="handleCollapseNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav nav-header" style="margin-left: auto">
            <li class="nav-item">
              <a href="#" class="navi-link">{{ $t('header.introduction') }}</a>
            </li>
            <li class="nav-item">
              <a href="#" class="navi-link">{{ $t('header.servicePrice') }}</a>
            </li>
            <!-- <li class="nav-item">
              <a href="" class="navi-link">{{ $t('header.partnerRegistration') }}</a>
            </li> -->
            <!-- <li class="nav-item dropdown">
              <router-link :to="{ path: '/help' }" class="navi-link">Trợ giúp</router-link>
            </li> -->
            <li class="nav-item dropdown">
              <a href="#" class="navi-link">{{ $t('header.downloadApp') }}</a>
            </li>
            <li class="nav-item" style="margin-right: 16px">
              <select-language />
            </li>
            <!-- <li v-if="!userInfo" class="nav-item">
              <button class="btn-become-partner" @click="handleNaviLink(routerType.LOGIN)">
                <span>
                  {{ $t('header.signup') }} / {{ $t('header.login') }}
                </span>
              </button>
            </li>
            <li v-else class="nav-item dropdown">
              <a
                id="navbarDropdown"
                v-click-outside="closeMenu"
                class="nav-link dropdown-toggle user-info"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                :aria-expanded="showUserMenu"
                @click.prevent="changeStatusShowMenu"
              >
                <img
                  width="24"
                  height="24"
                  :src="userInfo && userInfo.avatar ? userInfo.avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                  class="avatar-user"
                  alt="avatar user login"
                  :style="{ 'background': userInfo && userInfo.avatar ? 'transparent' : '#C0C4CC' }"
                >
                {{ userInfo.fullName }}
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a href="" class="dropdown-item" @click.prevent.stop="handleNaviLink(routerType.EDIT_USER)">Thông tin tài khoản</a>
                <a href="" class="dropdown-item" @click.prevent.stop="handleNaviLink(routerType.CHANGE_PASSWORD)">Đổi mật khẩu</a>
                <a href="" class="dropdown-item" @click.prevent.stop="handleNaviLink(routerType.HISTORY)">Lịch sử đặt vé</a>
                <a href="" class="dropdown-item" @click.stop="handleNaviLink(routerType.LOGOUT)">
                  Đăng xuất
                </a>
              </div>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
    <popup-sign-up v-model="dialog_signup" />
    <popup-intro v-model="dialog_intro" />
    <!-- <popup-policy v-model="dialog_policy"></popup-policy> -->
  </div>
</template>
<script>
import PopupSignUp from '@/components/Popup/PopupSignUp.vue'
import PopupIntro from '@/components/Popup/PopupIntro.vue'
import { mapGetters } from 'vuex'
import SelectLanguage from '@/components/SelectLanguage/index.vue'

export default {
  components: { PopupSignUp, PopupIntro, SelectLanguage },
  data() {
    const RouterType = {
      INTRODUCE: 1,
      SERVICE_PRICE: 2,
      BECOME_PARTNER: 3,
      HELP: 4,
      DOWNLOAD_APP: 5,
      LOGIN: 6,
      EDIT_USER: 7,
      CHANGE_PASSWORD: 8,
      HISTORY: 9,
      LOGOUT: 10
    }
    return {
      dialog_signup: false,
      dialog_intro: false,
      showUserMenu: false,
      collapseNavbar: false,
      screenWidth: window.innerWidth || 0,
      //    dialog_policy: false,
      routerType: RouterType
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'userInfo',
      'companyConfig'
    ])
  },
  watch: {
    'showUserMenu': function(val) {
      const navbarDropdown = document.querySelector('.nav-header .nav-item #navbarDropdown')
      if (val) {
        // console.log(navbarDropdown.parentElement, navbarDropdown.nextElementSibling)
        navbarDropdown.parentElement.classList.add('show')
        navbarDropdown.nextElementSibling.classList.add('show')
      } else {
        navbarDropdown.parentElement.classList.remove('show')
        navbarDropdown.nextElementSibling.classList.remove('show')
      }
    },
    'screenWidth': function(val) {
    },
    'collapseNavbar': function(val) {
      const collapseNavbar = document.querySelector('.navbar .navbar-toggler')
      if (val) {
        collapseNavbar.classList.remove('collapsed')
        collapseNavbar.nextElementSibling.classList.add('show')
      } else {
        collapseNavbar.classList.add('collapsed')
        collapseNavbar.nextElementSibling.classList.remove('show')
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleDialogWhenScreenResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleDialogWhenScreenResize)
  },
  methods: {
    closeMenu() {
      if (this.showUserMenu) {
        this.showUserMenu = false
      }
    },
    changeStatusShowMenu() {
      this.showUserMenu = !this.showUserMenu
    },
    handleDialogWhenScreenResize(event) {
      this.screenWidth = event.target.screen.width
    },
    handleCollapseNavbar() {
      this.collapseNavbar = !this.collapseNavbar
    },
    getLastPath(path) {
      if (this.$route.name === 'Home') {
        return ''
      } else {
        return path.replace(`/${this.$route.params.locale}/`, '')
      }
    },
    handleNaviLink(router) {
      this.handleCollapseNavbar()
      switch (router) {
        case this.routerType.INTRODUCE:
          this.dialog_intro = true
          break
        case this.routerType.SERVICE_PRICE:
          this.$router.push({ name: 'ServicePrice', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.BECOME_PARTNER:
          // window.open('https://forms.gle/SjUiSpmNRMPxoXL88', '_blank')
          this.$router.push({ name: 'PartnerRegistration', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.DOWNLOAD_APP:
          this.$router.push({ name: 'DownloadApp', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.LOGIN:
          // this.$router.push({ name: 'Login', query: { redirect: this.getLastPath(this.$route.path) }})
          window.location.href = `/${this.$i18n.locale}/login?redirect=${this.getLastPath(this.$route.path)}`
          break
        case this.routerType.EDIT_USER:
          this.$router.push({ name: 'EditUser', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.CHANGE_PASSWORD:
          this.$router.push({ name: 'ChangePassword', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.HISTORY:
          this.$router.push({ name: 'BookedHistory', params: { locale: this.$i18n.locale }})
          break
        case this.routerType.LOGOUT:
          this.$store.dispatch('user/logout')
          break
      }
    }
  }
}
</script>
<style scoped lang="scss">
$white: #ffffff;
$shadow: #ecedf1;
$main: #ED196B;
$dark_gray: #383F47;

.header{
    background: $white;
    box-shadow: 0px 0px 10px 0px $shadow;
    position: sticky;
    top: 0;
    z-index: 1000;
    .nav-item{
      margin-right: 48px;
      &:last-of-type{
        margin-right: 0;
      }
      a{
        text-decoration-line: none;
      }

      .navi-link {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        // margin-right: 48px;
        color: $dark_gray;
        text-decoration: none;
        transition: all 0.2s ease;
        &:hover{
          text-decoration: none;
          color: $main;
        }
      }

      .user-info{
        display: flex;
        flex-wrap: nowrap;
        gap: 6px;
        align-items: center;
        justify-content: flex-end;
        color: $dark_gray;
        font-size: 16px;
        line-height: 24px;
      }

      .avatar-user{
        width: 24px;
        height: 24px;
        line-height: 24px;
        object-fit: cover;
        border-radius: 50px;
      }
    }
}
</style>
