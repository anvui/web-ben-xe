<template>
  <div class="image-container">
    <img class="image-logo" :src="logoUrl" alt="Company Logo">
  </div>
</template>

<script>
export default {
  name: 'CompanyLogo',
  props: {
    logoUrl: {
      type: String,
      required: true
    }
  },
  computed: {}
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
