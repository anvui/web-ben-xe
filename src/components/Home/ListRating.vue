<template>
  <div v-if="listComments && listComments.length > 0" v-loading="loadingListRating" element-loading-spinner="el-icon-kbus-loading" class="list-rating-container">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xs-12 col-md-4">
          <div style="margin-top: 80px">
            <h2 class="title">{{ $t('listRating.title') }}</h2>
            <!-- <div class="data">
              <label class="data-statistics">123</label>
              <label class="description">Phương tiện</label>
            </div>
            <div class="data">
              <label class="data-statistics">3470</label>
              <label class="description">Chuyến đi</label>
            </div>
            <div class="data">
              <label class="data-statistics">168000</label>
              <label class="description">Hành khách</label>
            </div> -->
          </div>
        </div>
        <div class="col-xs-12 col-md-8" style="padding: 30px 0 30px 32px;">
          <div class="mask" />
          <div class="list-rating" @scroll.passive="scroll">
            <template v-for="(rating, r) in listComments">
              <div :key="r" class="rating-item">
                <!-- <el-avatar :size="80" :src="rating.created_by.avatar" fit="contain" alt="avatar user rating" /> -->
                <div class="d-flex flex-column align-items-center" style="gap: 6px">
                  <img
                    :src="rating.createdBy.avatar ? rating.createdBy.avatar : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                    alt="avatar user rating"
                    width="64"
                    height="64"
                  >
                  <div class="full-name">{{ rating.createdBy.fullName }}</div>
                </div>
                <div class="content">{{ rating.content }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { COMMENT_TYPE } from '@/utils/enum'

export default {
  data() {
    return {
      loadingListRating: false
      // elem: elem
    }
  },
  computed: {
    ...mapGetters(['listComments'])
  },
  mounted() {
    this.getListRating()
  },
  methods: {
    scroll(event) {
      // console.log(event.target.scrollTop)
      const eleFilter = document.querySelector('.mask')
      const eleListRating = document.querySelector('.list-rating')
      if (event.target.scrollTop !== 0) {
        eleFilter.style.height = '24px'
        eleListRating.style.marginTop = '-24px'
      } else {
        eleFilter.style.height = '0'
        eleListRating.style.marginTop = '0'
      }
    },
    getListRating() {
      this.loadingListRating = true
      this.$store.dispatch('comment/getListComments', {
        type: COMMENT_TYPE.KBUS
      }).then(resp => {
        this.loadingListRating = false
      }).catch(err => {
        this.loadingListRating = false
        console.log(err)
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
      })
    }
  }
}
</script>
<style lang="scss" scoped>
$gray-80: #646D84;
$gray-40: #ECEDF1;
$white: #ffffff;
$main: #ED196B;

.list-rating-container{
  margin-top: 80px;
  background: $gray-40;

  .data{
    &:first-of-type{
      margin-top: 32px;
    }
    .data-statistics{
      font-size: 32px;
      line-height: 35px;
      font-weight: bold;
      color: $main;
    }

    .description{
      margin-left: 8px;
      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
      color: $gray-80;
    }
  }

  .mask{
    background: linear-gradient(180deg, rgba(236, 237, 241, 0) 0%, #ECEDF1 48.96%);
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  .list-rating{
    // padding-right: 4px;
    max-height: 365px;
    overflow-y: auto;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    &::-webkit-scrollbar{
      display: none;
    }
    .rating-item{
      padding: 16px;
      background: $white;
      border-radius: 8px;
      margin-bottom: 8px;
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 16px;
      // place-items: center;
      align-items: center;

      &:last-child{
        margin-bottom: 0;
      }

      img{
        border-radius: 50px;
        object-fit: cover;
        aspect-ratio: 1;
      }

      .content{
        font-size: 0.875em;
        line-height: 24px;
        font-weight: normal;
      }

      .full-name{
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
      }
    }
  }
}
</style>
