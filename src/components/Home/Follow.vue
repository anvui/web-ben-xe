<template>
  <div class="follow-wrapper">
    <div id="left" />
    <div id="right">
      <span class="description">{{ $t('follow.title') }}</span>
      <el-button class="btn-follow" @click="signupToGetInfo()">{{ $t('follow.btnSignup') }}</el-button>
    </div>
    <form-signup-for-offers v-model="visible" />
  </div>
</template>
<script>
import FormSignupForOffers from '@/components/Popup/FormSignupForOffers.vue'

export default {
  components: {
    FormSignupForOffers
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    signupToGetInfo() {
      // this.$message.warning(this.$t('message.follow.featureIncoming'))
      this.visible = true
    }
  }
}
</script>
<style lang="scss" scoped>
$main: #ED196B;
$white: #ffffff;

.follow-wrapper{
  margin-top: 80px;
  display: flex;
  flex-wrap: nowrap;

  #left{
    background: linear-gradient(-270deg, rgba(237, 25, 107, 0) 0%, $main 100%), url('https://apikbus.anvui.vn/image/get/12fddec3-0f90-41a2-bd8b-b51bb87502a5') no-repeat;
    background-position: left;
    background-size: cover;
    width: 288px;
    height: 184px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  #right{
    background-color: $main;
    width: 832px;
    height: 184px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-left: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .description {
      font-size: 48px;
      font-weight: 600;
      line-height: 58px;
      color: $white;
      width: 408px;
      word-break: break-word;
    }

    .btn-follow{
      margin-left: auto;
      height: 56px;
      width: 220px;
      margin-right: 56px;
      background-color: $white;
      border-radius: 8px;
      font-size: 16px;
      line-height: 19px;
      font-weight: 600;
      color: $main;
      border: transparent;

      &:focus, &:hover{
        background-color: rgb(255 255 255 / 98%);
      }
    }
  }
}
</style>
