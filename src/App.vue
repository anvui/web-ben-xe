<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      packageNameForConfig: 'vn.kbus.booking'
    }
  },
  mounted() {
    this.getConfig()
  },
  methods: {
    getConfig() {
      this.$store.dispatch('config/getConfig', { packageName: this.packageNameForConfig })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

