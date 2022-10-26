<template>
  <div class="intro-container">
    <div class="intro-wrapper" :style="styleBackground">
      <!-- <img :src="bg" alt=""> -->
      <div class="intro-text">
        <h1 class="text">
          Chào mừng quý khách đã đến với nhà xe An Vui
          <br>
        </h1>
        <div class="line mt-3 mb-3" />
        <div class="d-flex align-items-center special-features" style="flex-wrap: wrap;">
          <div class="col-md">
            <i class="icon-money-intro" />
            <span>{{ $t('introduction.save') }}</span>
          </div>
          <div class="col-md">
            <i class="icon-security-intro" />
            <span>{{ $t('introduction.safe') }}</span>
          </div>
          <div class="col-md">
            <i class="icon-star-intro" />
            <span>{{ $t('introduction.quicks') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <search-trip />
    </div>
  </div>
</template>
<script>
import SearchTrip from '../SearchTrip/SearchTrip.vue'
import { mapGetters } from 'vuex'

export default {
  components: { SearchTrip },
  data() {
    return {
      urlBg: 'https://apikbus.anvui.vn/image/get/bd5d0690-5a99-4bf7-ab04-e233beda8cd2'
    }
  },
  computed: {
    ...mapGetters(['companyConfig']),
    styleBackground() {
      return {
        'background-image': `linear-gradient(86.99deg, rgba(237, 25, 107, 0) 1.65%, ${this.companyConfig.premiumColor} 100%), url('${this.companyConfig.slide}')`,
        'background-position': 'center center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      }
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.intro-container{

  .intro-wrapper{
    // background-image: linear-gradient(86.99deg, rgba(237, 25, 107, 0) 1.65%, #ED196B 100%), url('https://apikbus.anvui.vn/image/get/bd5d0690-5a99-4bf7-ab04-e233beda8cd2');
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;
    height: 380px;
    max-width: 1440px;
    margin: auto;

    .intro-text{
      max-width: 707px;
      word-break: break-word;
      margin: 0 189px 0 auto;
      padding-top: 40px;

      .text{
        font-size: 42px;
        line-height: 64px;
        font-weight: 600;
        color: #FFFFFF;
      }

      .line{
        background: #FFFFFF;
        height: 1px;
        width: 480px;
      }

      .special-features{
        > div{
          display: flex;
          width: fit-content;
          margin: 0 auto;
          align-items: center;
        }

        span{
          font-size: 24px;
          line-height: 24px;
          font-weight: 500;
          color: #FFFFFF;
          margin-left: 1rem;
        }

        .icon-money-intro {
          display: inline-block;
          line-height: 1;

          &:before{
            content: url("~@/assets/images/icon-money-intro.svg");
          }
        }

        .icon-security-intro{
          display: inline-block;
          line-height: 1;

          &:before{
            content: url("~@/assets/images/icon-security-intro.svg");
          }
        }

        .icon-star-intro{
          display: inline-block;
          line-height: 1;

          &:before{
            content: url("~@/assets/images/icon-star-intro.svg");
          }
        }
      }
    }
  }
}
</style>
