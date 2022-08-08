<template>
  <div class="app-customer">
    <el-dialog
      :visible.sync="visible"
      width="90%"
    >
      <h4 class="title">{{ $t('downloadApp.appCustomer.title') }}</h4>
      <div class="row no-gutters align-items-center">
        <div class="col-auto">
          <img
            src="https://apikbus.anvui.vn/image/get/ce0cf40a-8055-41d5-b11f-bfefef4bb566"
            alt="logo kbus"
            class="logo"
            :style="[ { 'width': `${sizeImg}px` }, { 'height': `${sizeImg}px` } ]"
          >
        </div>
        <div class="col">
          <div class="platform">
            <!-- <span>{{ platform }}</span> -->
            <span>{{ $t('downloadApp.fee') }}</span>
          </div>
        </div>
      </div>
      <div class="description">
        <ul>
          <template v-for="(item, i) in $t('downloadApp.appCustomer.contents')">
            <li :key="i">{{ item }}</li>
          </template>
        </ul>
      </div>
      <el-button v-if="platform === 'IOS'" class="btn-get-app" @click="handleDownloadApp(appType.APP_IOS_FOR_CUSTOMER)">
        <img src="@/assets/images/icon-apple.svg" alt="icon google play" width="24" height="24">
        <span>{{ $t('downloadApp.button.ios') }}</span>
      </el-button>
      <el-button v-if="platform === 'ANDROID'" class="btn-get-app" @click="handleDownloadApp(appType.APP_ANDROID_FOR_CUSTOMER)">
        <img src="@/assets/images/icon-google-play.svg" alt="icon google play" width="24" height="24">
        <span>{{ $t('downloadApp.button.android') }}</span>
      </el-button>
    </el-dialog>
  </div>
</template>
<script>
import { getOperatingSystem } from '@/utils/index'
import { APP_TYPE } from '@/utils/enum'

export default {
  props: {
    sizeImg: {
      type: Number,
      default: 32
    }
  },
  data() {
    return {
      appType: APP_TYPE,
      visible: false,
      platform: getOperatingSystem()
    }
  },
  methods: {
    handleDownloadApp(type) {
      switch (type) {
        case 1:
          window.open('https://apps.apple.com/vn/app/id1602614232', '_blank')
          break
        case 2:
          window.open('https://play.google.com/store/apps/details?id=vn.kbus.booking', '_blank')
          break
        case 3:
          window.open('https://apps.apple.com/vn/app/id1619935412', '_blank')
          break
        case 4:
          window.open('https://play.google.com/store/apps/details?id=vn.kbus.partner', '_blank')
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$gray-40: #ECEDF1;
$gray-100: #383F47;
$main: #ED196B;
$gray-60: #B0B5C1;

.app-customer{
  .logo{
    border-radius: 50%;
    object-fit: contain;
  }
  .title{
    font-size: 12px !important;
    line-height: 18px;
    font-weight: 400;
    color: $gray-60;
  }
  .platform{
    width: fit-content;
    margin-left: auto;
    background: $main;
    border-radius: 16px;
    padding: 0 8px;
    > span{
      color: white;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
    }
  }
  .description{
    margin-top: 8px;
    ul{
      padding-left: 1rem;
      > li{
        font-size: 13px;
        line-height: 18px;
        font-weight: 500;
        color: $gray-100;
        margin-bottom: 12px;
        word-break: break-word;
        &::marker{
          color: $main;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
  .btn-get-app{
    margin-top: 1rem;
    width: 100%;
    background-color: black;
    color: white;
    box-shadow: 0px 33px 51px rgba(0, 0, 0, 0.08), 0px 9.94853px 15.375px rgba(0, 0, 0, 0.0582218), 0px 4.13211px 6.38599px rgba(0, 0, 0, 0.0399899), 0px 1.4945px 2.30969px rgba(0, 0, 0, 0.0268173);
    border-radius: 4px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    font-family: 'Metrophobic', sans-serif;
    > span{
      display: flex;
      align-items: center;
      > span{
        padding-left: 8px;
      }
    }
  }
}
</style>
