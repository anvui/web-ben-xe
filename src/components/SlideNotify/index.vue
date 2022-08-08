<template>
  <marquee class="slide-notify" behavior="scroll" direction="left" scrollamount="10">
    <div class="slide-notify-container">
      <notify-icon :icon-type="1" />
      <span class="slide-notify-title">Trung tam An Vui</span>
      <span class="slide-notify-content">AN VUI chuẩn bị cho Ra mắt phiên bản mới 4.2.0 với hàng loạt tính năng được nâng cấp</span>
    </div>
  </marquee>
</template>

<script>
import NotifyIcon from '@/components/NotifyIcon'
export default {
  name: 'SlideNotify',
  components: { NotifyIcon },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.slide-notify {
  background: #ECEDF1;
  line-height: 40px;
  color: #232731;
  border-top: 1px solid #B0B5C1;
  &-container {
    display: flex;
    align-items: center;
  }
  &-title {
    color: #084388;
    font-weight: 600;
    font-size: 16px;
    margin: 0px 15px 0px 5px;
  }
  &-content {
    display: flex;
    align-items: center;
  }
}
</style>
