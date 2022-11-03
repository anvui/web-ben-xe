<template>
  <div>
    <div>
      <introduction />
      <!-- <hot-trips />
      <new-route />
      <popular-route />
      <div class="container">
        <follow />
        <benefit />
      </div>
      <install-app />
      <news />
      <general-introduce />
      <review-kbus />
      <list-rating /> -->
    </div>
    <!-- <app-customer ref="DialogAppCustomer" :size-img="48" /> -->
  </div>
</template>

<script>
import Introduction from '@/components/Home/Introduction.vue'
// import NewRoute from '@/components/Home/NewRoute.vue'
// import PopularRoute from '@/components/Home/PopularRoute.vue'
// import InstallApp from '@/components/Home/InstallApp.vue'
// import Follow from '@/components/Home/Follow.vue'
// import Benefit from '@/components/Home/Benefit.vue'
// import GeneralIntroduce from '@/components/Home/GeneralIntroduce.vue'
// import news from '@/components/Home/news.vue'
// import HotTrips from '@/components/Home/HotTrips.vue'
// import ReviewKbus from '@/components/Home/ReviewKB5us.vue'
// import ListRating from '@/components/Home/ListRating.vue'
// import AppCustomer from '@/components/DownloadApp/AppCustomer.vue'
import { getOperatingSystem } from '@/utils/index'

export default {
  components: {
    Introduction
    // NewRoute,
    // PopularRoute,
    // InstallApp,
    // Follow,
    // Benefit,
    // GeneralIntroduce,
    // news,
    // HotTrips,
    // ReviewKbus,
    // ListRating,
    // AppCustomer
  },
  mounted() {
    // if (getOperatingSystem() === 'IOS' || getOperatingSystem() === 'ANDROID') {
    //   this.$refs.DialogAppCustomer.visible = true
    // }
  }
}
</script>
