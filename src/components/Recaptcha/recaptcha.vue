<template>
  <div
    id="g-recaptcha"
    class="g-recaptcha"
    :data-sitekey="sitekey"
    data-callback="recaptchaCallback"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sitekey: '6LfUQo0dAAAAAEKkAJ4ua_wLp20P_USt4mNv_Zpf',
      widgetId: 0
    }
  },
  mounted() {
    if (window.grecaptcha) {
      this.render()
    }
    window.recaptchaCallback = this.recaptchaCallback
  },
  methods: {
    // execute() {
    //   window.grecaptcha.execute(this.widgetId)
    // },
    render() {
      this.widgetId = window.grecaptcha.render('g-recaptcha', {
        sitekey: this.sitekey
      })
    },
    recaptchaCallback: function(response) {
      this.$emit('input', response)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
