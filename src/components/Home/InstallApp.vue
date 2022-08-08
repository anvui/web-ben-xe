<template>
  <div class="app-wrapper">
    <div class="container">
      <div class="row no-margin">
        <div class="col-md">
          <div class="content-cover">
            <div class="text-desc">
              <span>{{ $t('installApp.title') }}</span>
            </div>
            <div class="btn-get-app-section">
              <a href="https://apps.apple.com/vn/app/id1602614232" target="_blank">
                <img src="@/assets/images/appstore.png" alt="image/png" width="192" height="64">
              </a>
              <a href="https://play.google.com/store/apps/details?id=vn.kbus.booking" target="_blank">
                <img src="@/assets/images/googleplay.png" alt="image/png" width="192" height="64">
              </a>
            </div>
          </div>
        </div>
        <div class="col-md text-center image-desc">
          <img src="@/assets/images/phone-full-view.webp" alt="image/png" width="209" height="397">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.app-wrapper{
    margin-top: 80px;
    padding-bottom: 80px;
    position: relative;
    &:before{
      content: "";
      background: #ED196B;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      max-height: 340px;
  }

  img{
    width: 100%;
    height: auto;
  }

  .image-desc img{
    max-width: 209px;
    aspect-ratio: 209/397;
  }

  .btn-get-app-section img{
    max-width: 192px;
    aspect-ratio: 3;
  }

  .text-desc{
    max-width: 448px;
    word-break: break-word;

    span{
      font-size: 32px;
      line-height: 42px;
      font-weight: 600;
      color: #FFFFFF;
    }
  }

  .btn-get-app-section{
    width: -webkit-fit-content;
    margin-top: 40px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 24px;
  }

  .content-cover{
    width: -webkit-fit-content;
    position: absolute;
    bottom: calc(340px - 48px - 188px - 80px);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
