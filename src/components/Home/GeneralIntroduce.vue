<template>
  <div class="general-introduce-wrapper">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6 pr-4">
          <div id="content">
            <h2 class="title">{{ $t('generalIntroduce.title') }}</h2>
            <span>{{ $t('generalIntroduce.content') }}</span>
          </div>
        </div>
        <div class="col-md-6">
          <div id="image">
            <iframe src="https://www.youtube.com/embed/-Of27DeiaXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
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
$gray-80: #646D84;
$gray-40: #ECEDF1;
$white: #ffffff;

.general-introduce-wrapper{
  margin-top: 80px;
  padding: 80px 0;
  background-color: $gray-40;

  #content{
    .title{
      font-size: 30px;
      margin-bottom: 40px;
    }

    span{
      font-size: 16px;
      line-height: 26px;
      color: $gray-80;
    }
  }

  #image{
    iframe{
      width: 100%;
      max-width: 560px;
      height: 340px;
    }
  }
}
</style>
