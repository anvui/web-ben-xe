<template>
  <div class="list-banner-ads">
    <hooper :settings="hooperSettings">
      <template v-for="(item, i) in $t('ads.banner')">
        <slide :key="i">
          <div :id="`banner-${i + 1}`" class="ads">
            <span>{{ item }}</span>
          </div>
        </slide>
      </template>
      <hooper-navigation slot="hooper-addons" />
      <hooper-pagination slot="hooper-addons" />
    </hooper>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: { Hooper, Slide, HooperNavigation, HooperPagination },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        infiniteScroll: true,
        trimWhiteSpace: true,
        breakpoints: {
          992: {
            itemsToShow: 3
          },
          768: {
            itemsToShow: 2
          },
          0: {
            itemsToShow: 1
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$white: #ffffff;

.list-banner-ads{
  margin-top: 40px;

  .ads{
    margin: 0 8px;
    border-radius: 8px;
    height: 160px;
    position: relative;

    span{
      width: 299px;
      font-size: 24px;
      line-height: 32px;
      color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      word-break: break-word;
    }
  }

  #banner-1{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://apikbus.anvui.vn/image/get/0081046f-86f8-4f65-9c96-daf6f627d53c") no-repeat;
    // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/banner-1.webp") no-repeat;
    background-size: cover;
    background-position: center center;
  }

  #banner-2{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://apikbus.anvui.vn/image/get/275e85a2-e1a2-4412-aa7e-c5589b2b0fb1") no-repeat;
    // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/banner-2.webp") no-repeat;
    background-size: cover;
    background-position: center center;
  }

  #banner-3{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://apikbus.anvui.vn/image/get/5fefbf3d-1850-4e6d-9971-f3824d9c9fef") no-repeat;
    // background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/banner-3.webp") no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>
