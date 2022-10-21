<template>
  <div class="image-container">
    <img class="image-logo" :src="companyConfig ? companyConfig.logo : ''" alt="Company Logo">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CompanyLogo',
  props: {
    logoUrl: {
      type: String,
      default: null,
      required: false
    }
  },
  computed: {
    ...mapGetters([
      'companyConfig'
    ])
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  height: 100%;
  width: auto;
  .image-logo {
    height: 100%;
  }
}
</style>
