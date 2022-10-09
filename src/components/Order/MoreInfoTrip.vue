<template>
  <div class="more-info-wrapper">
    <ul class="nav">
      <template v-for="(itemNav, indexNav) in navItem">
        <li :key="indexNav" class="nav-item">
          <a class="nav-link" :class="{ 'active': navActiveStatus === indexNav + 1 }" href="#" @click.prevent="setActive(indexNav)">{{ itemNav }}</a>
        </li>
      </template>
    </ul>
    <div v-if="navActiveStatus === 1" id="list-image">
      <div v-if="trip.images">
        <hooper :settings="hooperSettings">
          <template v-for="(itemImg, indexImg) in trip.images">
            <slide :key="indexImg">
              <div class="row no-gutters justify-content-center">
                <div class="col-auto">
                  <a href="" @click.prevent="handleShowImage(itemImg)">
                    <img :src="itemImg" alt="image/png">
                  </a>
                </div>
              </div>
            </slide>
          </template>
          <hooper-navigation slot="hooper-addons" />
          <hooper-pagination slot="hooper-addons" />
        </hooper>
        <span class="img-description">{{ $t('book.moreInfoTrip.imagesDescription') }}</span>
      </div>
      <div v-else class="w-100 text-center">{{ $t('book.moreInfoTrip.noData') }}</div>
    </div>
    <div v-if="navActiveStatus === 2" id="list-policy">
      <ul>
        <template v-for="(item, i) in $t('book.moreInfoTrip.policyContent')">
          <li :key="i">{{ item }}</li>
        </template>
      </ul>
      <!-- <div class="policy-note">
        <span></span>
      </div> -->
    </div>
    <div v-if="navActiveStatus === 3" id="list-services">
      <div v-if="trip.vehicle.services.length > 0" class="row no-gutters p-2" style="gap: 16px">
        <template v-for="(service, s) in trip.vehicle.services">
          <div :key="s" class="col-auto text-center" style="height: 24px">
            <div class="d-flex" style="gap: 8px">
              <img :src="service.icon" alt="image/png">
              <label>{{ service.name }}</label>
            </div>
          </div>
        </template>
      </div>
      <div v-else class="w-100 text-center">{{ $t('book.moreInfoTrip.noData') }}</div>
    </div>
    <div v-if="navActiveStatus === 4" id="list-comments">
      <div v-if="listComments.length > 0" v-loading="">
        <template v-for="(comment, c) in listComments">
          <div :key="c" class="comment-item">
            <div class="col-auto">
              <el-avatar
                icon="el-icon-user-solid"
                fit="contain"
                :src="comment.createdBy.avatar"
                :size="24"
                :style="{ 'background': comment.createdBy.avatar ? 'transparent' : '#C0C4CC' }"
              />
            </div>
            <div class="col">
              <div class="user-created">{{ comment.createdBy.fullName }}</div>
              <el-rate
                :value="comment.rating"
                disabled
                class="mt-2"
              />
              <div class="content">{{ comment.content }}</div>
              <div class="time-created">{{ $moment(comment.createdAt).format('DD/MM/YYYY HH:mm') }}</div>
            </div>
          </div>
        </template>
      </div>
      <div v-else class="w-100 text-center">{{ $t('book.moreInfoTrip.noData') }}</div>
    </div>
    <el-dialog :visible.sync="dialog.status">
      <img :src="dialog.imageUrl" alt="image/png" width="100%">
    </el-dialog>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
import { COMMENT_TYPE } from '@/utils/enum'
import { mapGetters } from 'vuex'

export default {
  components: { Hooper, Slide, HooperNavigation, HooperPagination },
  props: {
    trip: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // nav-menu
      navItem: [
        'Hình ảnh',
        'Chính sách',
        'Dịch vụ',
        'Đánh giá'
      ],
      navActiveStatus: 1,

      // list image

      // hooper settings
      hooperSettings: {
        infiniteScroll: false,
        trimWhiteSpace: true,
        wheelControl: false,
        breakpoints: {
          1200: {
            itemsToShow: 3
          },
          768: {
            itemsToShow: 2
          },
          0: {
            itemsToShow: 1
          }
        }
      },
      loadingRate: false,
      dialog: {
        status: false,
        imageUrl: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'listComments'
    ])
  },
  watch: {
    'navActiveStatus': function(val) {
      if (val === 4) {
        this.getAllRate()
      }
    }
  },
  methods: {
    setActive(index) {
      this.navActiveStatus = index + 1
    },
    getAllRate() {
      this.loadingRate = true
      this.$store.dispatch('comment/getListComments', {
        type: COMMENT_TYPE.ROUTE,
        typeId: this.trip.route ? this.trip.route.id : -1
      }).then(resp => {
        this.loadingRate = false
      }).catch(err => {
        this.loadingRate = false
        console.log(err)
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
      })
    },
    handleShowImage(url) {
      this.dialog.status = true
      this.dialog.imageUrl = url
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$white: #ffffff;

#list-image > .hooper{
    height: auto !important;
    .hooper-navigation{
        .hooper-prev, .hooper-next {
            padding: 0.5rem;
            border: 1px solid $main;
            background-color: $main;
            border-radius: 50px;
            > svg {
                fill: $white;
            }
        }

        .hooper-prev {
            left: 0 !important;
        }
        .hooper-next {
            right: 0 !important;
        }
    }
}
</style>

<style lang="scss" scoped>
$gray: #9399A9;
$main: #ED196B;
$dark_gray: #383F47;
$light_gray: #ECEDF1;

.more-info-wrapper{
  margin-top: 1rem;
  border-top: 1px solid $light_gray;
  .nav-item > .nav-link {
      font-size: 14px;
      line-height: 24px;
      color: $gray;
      &:hover {
          color: $main;
      }

      &:first-child{
          padding-left: 0;
      }
  }

  #list-image{
    img {
      max-width: 245px;
      padding: 2px;
      height: 180px;
      object-fit: cover;
    }

    .img-description{
      font-size: 14px;
      line-height: 1;
      font-style: italic;
      color: $dark_gray;
    }
  }

  #list-policy {
    margin-top: 0.5rem;
    font-size: 14px;
    line-height: 18px;
    > ul > li{
      margin-bottom: 0.5rem;
      font-size: 1em;
      line-height: 1em;
      color: $dark_gray;
      &::marker{
        color: $main;
      }
    }
    .policy-note{
      margin-top: 8px;
      font-size: 1em;
      line-height: 1em;
      font-style: italic;
    }
  }

  #list-services{
    label{
      display: block;
    }

    img{
      height: 24px;
    }
  }

  #list-comments{
    padding: 0;
    max-height: 500px;
    overflow-y: auto;

    .comment-item{
      display: flex;
      gap: 16px;
      margin-bottom: 8px;

      &:last-child{
        margin-bottom: 0;
      }

      .user-created{
        margin-top: 2px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        color: #2d3436;
      }

      .content{
        margin-top: 0.5em;
        word-break: break-word;
      }

      .time-created{
        margin-top: 0.5em;
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        color: #95a5a6;
      }
    }
  }

  .active{
    color: $main !important;
  }
}
</style>
