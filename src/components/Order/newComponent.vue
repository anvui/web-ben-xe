<template>
  <div>
    <span>hello</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trip from '@/components/Order/Trip.vue'
import { convertHourToMilliseconds, getUTCTime } from '@/utils/index'
import FormCreateTrip from '@/components/CreateTrip/FormCreateTrip.vue'

export default {
  components: {
  },
  data() {
    return {
      moreInfoStatus: null,
      selectedTripStatus: null,
      loading: false,
      mapStartPoint: null,
      mapEndPoint: null
      // trips: []
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'trips',
      'dateAndPoint',
      'provinces'
    ]),
  },
  watch: {

  },
  async mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
