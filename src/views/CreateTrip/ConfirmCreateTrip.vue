<template>
  <div class="confirm-create-trip-wrapper">
    <div class="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium laboriosam quae eius sunt tenetur provident tempora, perspiciatis repellendus quaerat nulla inventore voluptatem et maxime, voluptas ipsa velit consequatur facere?
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loadingGetTrip: false
    }
  },
  computed: {
    ...mapGetters([
      'tripsCreated'
    ])
  },
  mounted() {
    this.getTripsCreated()
  },
  methods: {
    getTripsCreated() {
      this.loadingGetTrip = true
      this.$store.dispatch('trip/getTripsCreated').then(resp => {
        this.loadingGetTrip = false
      }).catch(err => {
        this.loadingGetTrip = false
        console.log(err)
        this.$message.error(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
