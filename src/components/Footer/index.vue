<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="overview">
        <div class="logo">
          <img :src="companyConfig ? companyConfig.logo : ''" alt="logo kbus" width="117" height="48">
          <span id="company-name" class="text-note">{{ companyConfig ? companyConfig.packageName : '' }}</span>
        </div>
        <div class="about-us">
          <h3 class="title-footer">Về chúng tôi</h3>
          <div class="nav-footer">
            <a href="#" @click.prevent="dialogIntro = true">Giới thiệu</a>
            <!-- <a href="#">Liên hệ</a> -->
            <!-- <a href="#">Tuyển dụng</a> -->
          </div>
        </div>
        <!-- <div class="partners">
          <h5 class="title-footer">Đối tác</h5>
          <div class="nav-footer">
            <a href="#">Đối tác đăng nhập</a>
            <a href="#">Đối tác liên kết</a>
            <router-link :to="{ path: '/signup' }">Hợp tác cùng chúng tôi</router-link>
          </div>
        </div> -->
        <div class="policy">
          <h3 class="title-footer">Điều khoản</h3>
          <div class="nav-footer">
            <router-link :to="{ name: 'TermsOfUse' }">Điều khoản sử dụng</router-link>
            <!-- <router-link :to="{ name: 'PrivacyPolicy' }">Chính sách bảo mật</router-link> -->
            <router-link :to="{ name: 'ComplaintsPolicy' }">Chính sách khiếu nại</router-link>
            <!-- <router-link :to="{ name: 'BookingPolicy' }">Điều khoản đặt vé</router-link> -->
            <router-link :to="{ name: 'CancellationPolicy' }">Chính sách hủy vé</router-link>
          </div>
        </div>
        <div class="get-app">
          <div id="desc-get-app">
            <span class="text-note">Tải ứng dụng KBus để đặt vé nhanh trên điện thoại</span>
          </div>
          <div class="btn-get-app">
            <a href="https://apps.apple.com/vn/app/id1602614232" target="_blank">
              <img src="@/assets/images/appstore.png" alt="app store image" width="120" height="40">
            </a>
            <a href="https://play.google.com/store/apps/details?id=vn.kbus.booking" target="_blank">
              <img src="@/assets/images/googleplay.png" alt="google play image" width="120" height="40">
            </a>
          </div>
        </div>
      </div>
      <div class="desc">
        <div class="develop-by w-100 text-center">
          <span>Copyright &copy; KBus version 2022. Dev by <a href="https://anvui.vn">ANVUI</a></span>
        </div>
        <div class="version-number text-center mt-3">
          <span>Số phiên bản: {{ versionNumber }}</span>
        </div>
      </div>
    </div>
    <popup-intro v-model="dialogIntro" />
  </div>
</template>
<script>
import PopupIntro from '@/components/Popup/PopupIntro.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PopupIntro
  },
  data() {
    return {
      versionNumber: '0.31.84',
      dialogIntro: false
    }
  },
  computed: {
    ...mapGetters(['companyConfig'])
  }
}
</script>
<style lang="scss" scoped>
$light_gray: #ECEDF1;
$gray: #9399A9;
$dark_gray: #383F47;
$main: #ED196B;
$gray_80: #646D84;

.footer-wrapper{
  background: $light_gray;
  // height: 258px;
  padding: 48px 0;
  // margin-top: 48px;
  // position: fixed;
  // bottom: 0;
  width: 100%;
  a{
    &:hover{
      text-decoration: underline;
    }
  }
  img{
    width: 100%;
    height: auto;
  }
  span.text-note{
    font-size: 14px;
    line-height: 18px;
  }
  .overview{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 12px;
    .logo{
      > img{
        display: block;
        max-width: 117px;
        margin-bottom: 1.5rem;
        aspect-ratio: 117/48;
      }
      > #company-name{
        color: $gray;
      }
    }
    .title-footer{
      font-size: 18px;
      line-height: 22px;
      color: $dark_gray;
    }
    .nav-footer > a{
      display: block;
      width: fit-content;
      margin-top: 1rem;
      font-size: 14px;
      line-height: 20px;
      color: $gray;
      transition: all .4s ease;
      &:hover{
        color: $main;
        text-decoration: none;
      }
    }
    .get-app{
      width: fit-content;
      > #desc-get-app{
        color: $gray_80;
        max-width: 176px;
        word-break: break-word;
      }
      .btn-get-app{
        width: -webkit-fit-content;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        grid-auto-flow: column;
        grid-gap: 16px;
        a{
          display: inline-block;
          > img{
            width: 110px;
            aspect-ratio: 3;
          }
        }
      }
    }
  }

  .desc{
    margin-top: 32px;
    .develop-by, .version-number{
      font-size: 14px;
      line-height: 20px;
      color: $gray;

      a{
        color: $main;
      }
    }
  }
}
</style>
