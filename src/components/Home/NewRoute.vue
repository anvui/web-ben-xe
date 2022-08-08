<template>
  <div class="new-route-wrapper mt-5 pt-5 pb-5">
    <div class="container">
      <h2 class="title mb-4" style="color: #FFFFFF">
        {{ $t('newRoute.title') }}
      </h2>
      <hooper :settings="hooperSettings">
        <slide>
          <div class="item-1">
            <div class="text">
              <span class="route">{{ $t('newRoute.route') }}</span>
              <span class="date">{{ $t('newRoute.date') }}</span>
            </div>
          </div>
        </slide>
        <slide>
          <div class="item-2" />
        </slide>
        <hooper-navigation slot="hooper-addons" />
        <hooper-pagination slot="hooper-addons" />
      </hooper>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        infiniteScroll: true,
        trimWhiteSpace: true,
        breakpoints: {
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
<style scoped>
.new-route-wrapper{
    background: #ED196B;
}
.new-route-wrapper .item-1, .new-route-wrapper .item-2{
    height: 100%;
    padding: 24px;
    margin: 0 10px;
    border-radius: 12px;
}
.new-route-wrapper .item-1{
    background: linear-gradient(0deg, rgba(237, 25, 107, 0.3), rgba(237, 25, 107, 0.3)), url("https://apikbus.anvui.vn/image/get/739a339e-4442-4f80-bf37-11c3822ce282") no-repeat center center;
    /* background: linear-gradient(0deg, rgba(237, 25, 107, 0.3), rgba(237, 25, 107, 0.3)), url("~@/assets/images/new-route-1.webp") no-repeat center center; */
    background-size: cover;
    position: relative;
}
.new-route-wrapper .item-1 .route{
    display: block;
    font-size: 32px;
    line-height: 49px;
    font-weight: 600;
    color: #FFFFFF;
}
.new-route-wrapper .item-1 .date{
    display: block;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: #FFFFFF;
}
.new-route-wrapper .item-1 .text{
    position: absolute;
    bottom: 24px;
}
.new-route-wrapper .item-2{
    background: linear-gradient(0deg, rgba(237, 25, 107, 0.3), rgba(237, 25, 107, 0.3)), url("https://apikbus.anvui.vn/image/get/774c3468-8bea-4e37-a785-5330f07093ba") no-repeat center center;
    /* background: linear-gradient(0deg, rgba(237, 25, 107, 0.3), rgba(237, 25, 107, 0.3)), url("~@/assets/images/new-route-2.webp") no-repeat center center; */
    background-size: cover;
}
</style>
