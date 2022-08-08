<template>
  <div class="benefit-wrapper">
    <h2 class="title">Tại sao bạn nên sử dụng KBus</h2>
    <div class="content">
      <div class="item">
        <img src="@/assets/images/icon-sale.png" alt="image/png">
        <span>{{ $t('benefits.sale') }}</span>
      </div>
      <div class="item">
        <img src="@/assets/images/icon-money.png" alt="image/png">
        <span>{{ $t('benefits.money') }}</span>
      </div>
      <div class="item">
        <img src="@/assets/images/icon-security.png" alt="image/png">
        <span>{{ $t('benefits.security') }}</span>
      </div>
      <div class="item">
        <img src="@/assets/images/icon-star.png" alt="image/png">
        <span>{{ $t('benefits.star') }}</span>
      </div>
      <div class="item">
        <img src="@/assets/images/icon-cashback.png" alt="image/png">
        <span>{{ $t('benefits.cashback') }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
$white: #ffffff;
$gray-80: #646D84;

.benefit-wrapper{
    margin-top: 80px;

    img {
        width: 40px;
        height: 40px;
        display: block;
        margin-bottom: 1.5rem;
    }

    .content {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(204px, 1fr));
        grid-gap: 1.5rem;

        .item{
            padding: 16px;
            background-color: $white;
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            width: 204px;

            span{
                font-size: 16px;
                line-height: 24px;
                color: $gray-80;
            }
        }
    }
}
</style>
