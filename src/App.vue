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
      packageNameForConfig: 'vn.kbus.booking',
      config: null
    }
  },
  async created() {
    const sitename = window.location.host
    await this.getCompanyConfig(sitename)
  },
  mounted() {
    // this.getConfig()
  },
  methods: {
    // getConfig() {
    //   this.$store.dispatch('config/getConfig', { packageName: this.packageNameForConfig })
    // },
    async getCompanyConfig(sitename) {
      const config = await this.callApiGetConfig(sitename)
      this.config = config
      this.$store.dispatch('system/saveCompanyConfig', config)
      console.log(this.config)
    },
    callApiGetConfig(sitename) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const config = {
            packageName: 'nhà xe An Vui',
            sitename: sitename
          }
          resolve(config)
        }, 5000)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

