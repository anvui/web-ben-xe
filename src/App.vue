<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      packageNameForConfig: '',
      config: null
    }
  },
  async created() {
    const sitename = window.location.host
    await this.getCompanyConfig(sitename)
  },
  mounted() {},
  methods: {
    ...mapActions({
      testAction: 'system/testAction',
      getCompanyConfig: 'system/getCompanyConfig'
    })
  }
}
</script>
<style lang="scss" scoped>
</style>

