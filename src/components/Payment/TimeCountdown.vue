<template>
  <span class="content">{{ data }}</span>
</template>
<script>

export default {
  props: {
    expire: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      data: '',
      expireDefault: 900000,
      interval: ''
    }
  },
  computed: {
  },
  watch: {
    'expire': function(val) {
      if (val) {
        this.startTimer(this.expire)
      }
    }
  },
  mounted() {
    if (this.expire) {
      this.startTimer(this.expire)
    }
  },
  methods: {
    startTimer(expire) {
      let minutes
      let seconds
      const self = this
      function timer() {
        const currentHour = new Date()
        const currentMillisec = currentHour.getTime()
        const distanceTime = (expire - currentMillisec) / 1000

        // does the same job as parseInt truncates the float
        minutes = Math.floor((distanceTime / 60)) | 0
        seconds = Math.floor((distanceTime % 60)) | 0

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        // display.textContent = minutes + ':' + seconds
        self.data = minutes + ':' + seconds
        self.$emit('remaining', self.data)
        // console.log(distanceTime)

        if (distanceTime <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          self.data = '00:00'
          self.$emit('pay-expire', self.data)
          clearInterval(this.interval)
        }
      }
      // we don't want to wait a full second before the timer starts
      timer()
      this.interval = setInterval(timer, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
$gray-80: #646D84;
$secondary: #2D225E;

.content {
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: $secondary;
}
</style>
