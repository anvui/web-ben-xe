<template>
  <div class="download-app-container">
    <div class="container mt-5">
      <h4 class="title">{{ $t('downloadApp.title') }}</h4>
      <div class="download-app-wrapper" :class="$route.name === 'DownloadAppPartner' ? 'is-partner' : ''">
        <div class="row no-gutters align-items-end">
          <div class="col-md">
            <h4 class="title-download">{{ $t('downloadApp.appCustomer.title') }}</h4>
            <div class="row no-gutters" style="margin-top: 40px">
              <div class="col-auto">
                <el-image src="https://apikbus.anvui.vn/image/get/e1b6cc41-17a3-4723-a623-32ae7c117549" class="img-app-kbus">
                  <div slot="placeholder" class="image-slot">
                    Loading<span class="dot">...</span>
                  </div>
                </el-image>
                <!-- <img src="@/assets/images/279517953_727583978428865_6757280311297977781_n.png" alt="" class="img-app-kbus"> -->
              </div>
              <div class="col">
                <div class="contents-download">
                  <ul>
                    <template v-for="(item, i) in $t('downloadApp.appCustomer.contents')">
                      <li :key="i">{{ item }}</li>
                    </template>
                  </ul>
                </div>
                <div class="mt-4 button-wrap">
                  <div class="w-100 text-center">
                    <label>{{ $t('downloadApp.button.label') }}</label>
                  </div>
                  <div class="row no-gutters button-group">
                    <div class="col">
                      <el-button class="btn-get-app" @click="handleDownloadApp(appType.APP_IOS_FOR_CUSTOMER)">
                        <img src="@/assets/images/icon-apple.svg" alt="icon google play" width="24" height="24">
                        <span>{{ $t('downloadApp.button.ios') }}</span>
                      </el-button>
                    </div>
                    <div class="col">
                      <el-button class="btn-get-app" @click="handleDownloadApp(appType.APP_ANDROID_FOR_CUSTOMER)">
                        <img src="@/assets/images/icon-google-play.svg" alt="icon google play" width="24" height="24">
                        <span>{{ $t('downloadApp.button.android') }}</span>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto seperate" />
          <div class="col-md" style="padding-left: 1.5rem">
            <h4 class="title-download">{{ $t('downloadApp.appPartner.title') }}</h4>
            <div class="row no-gutters" style="margin-top: 40px">
              <div class="col-auto">
                <el-image src="https://apikbus.anvui.vn/image/get/987bf08a-d7be-4252-b8e7-71c90c8069b9" class="img-app-kbus">
                  <div slot="placeholder" class="image-slot">
                    Loading<span class="dot">...</span>
                  </div>
                </el-image>
              </div>
              <div class="col">
                <div class="contents-download">
                  <ul>
                    <template v-for="(item, i) in $t('downloadApp.appPartner.contents')">
                      <li :key="i">{{ item }}</li>
                    </template>
                  </ul>
                </div>
                <div class="mt-4 button-wrap">
                  <div class="w-100 text-center">
                    <label>{{ $t('downloadApp.button.label') }}</label>
                  </div>
                  <div class="row no-gutters button-group">
                    <div class="col">
                      <el-button class="btn-get-app" @click="handleDownloadApp(appType.APP_IOS_FOR_DRIVER)">
                        <img src="@/assets/images/icon-apple.svg" alt="icon google play" width="24" height="24">
                        <span>{{ $t('downloadApp.button.ios') }}</span>
                      </el-button>
                    </div>
                    <div class="col">
                      <el-button class="btn-get-app" @click="handleDownloadApp(appType.APP_ANDROID_FOR_DRIVER)">
                        <img src="@/assets/images/icon-google-play.svg" alt="icon google play" width="24" height="24">
                        <span>{{ $t('downloadApp.button.android') }}</span>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-customer ref="DialogAppCustomer" :size-img="48" />
    <app-driver ref="DialogAppDriver" :size-img="48" />
  </div>
</template>
<script>
import { getOperatingSystem } from '@/utils/index'
import { APP_TYPE } from '@/utils/enum'
import AppCustomer from '@/components/DownloadApp/AppCustomer.vue'
import AppDriver from '@/components/DownloadApp/AppDriver.vue'

export default {
  components: { AppCustomer, AppDriver },
  data() {
    return {
      appType: APP_TYPE,
      dialogAppCustomer: false
    }
  },
  computed: {
    detectPlatform() {
      const data = getOperatingSystem()
      return data
    }
  },
  mounted() {
    if (getOperatingSystem() === 'IOS' || getOperatingSystem() === 'ANDROID') {
      if (this.$route.name === 'DownloadApp') {
        this.$refs.DialogAppCustomer.visible = true
      } else if (this.$route.name === 'DownloadAppPartner') {
        this.$refs.DialogAppDriver.visible = true
      }
    }
    this.detectAppByPlatform()
  },
  methods: {
    detectAppByPlatform() {
      if (this.$route.name === 'DownloadApp') {
        if (this.detectPlatform === 'IOS') {
          this.handleDownloadApp(this.appType.APP_IOS_FOR_CUSTOMER)
        } else if (this.detectPlatform === 'ANDROID') {
          this.handleDownloadApp(this.appType.APP_ANDROID_FOR_CUSTOMER)
        }
      } else if (this.$route.name === 'DownloadAppPartner') {
        if (this.detectPlatform === 'IOS') {
          this.handleDownloadApp(this.appType.APP_IOS_FOR_DRIVER)
        } else if (this.detectPlatform === 'ANDROID') {
          this.handleDownloadApp(this.appType.APP_ANDROID_FOR_DRIVER)
        }
      }
    },
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
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Metrophobic&display=swap');

$gray-100: #383F47;
$main: #ED196B;
$gray-40: #ECEDF1;

.download-app-container{
  min-height: 93vh;

  .title{
    font-family: 'SFProText', sans-serif;
    line-height: 29px;
    font-weight: 500;
    color: black;
  }

  .download-app-wrapper{
    margin-top: 1rem;
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    .title-download{
      line-height: 36px;
      font-weight: 700;
      color: $gray-100;
    }

    .img-app-kbus{
      width: 100%;
      max-width: 178px;
      height: auto;
    }

    .contents-download{
      padding-left: 12px;
      ul > li{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: $gray-100;
        margin-bottom: 12px;
        &::marker{
          color: $main;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
    }

    .button-wrap{
      padding-left: 1.5rem;
    }

    .seperate{
      background-color: $gray-40;
      width: 1px;
      height: 360px;
    }

    .button-group{
      .btn-get-app{
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
  }
}
</style>
