<template>
  <div style="padding-top:70px">
    <search-trip />
  </div>
</template>

<script>
import SearchTrip from '@/components/SearchTrip/SearchTrip.vue'
export default {
  components: { SearchTrip },
  data() {
    return {
      value: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
