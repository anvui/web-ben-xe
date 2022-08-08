<template>
  <div class="filter">
    <div class="arrange-trip">
      <label class="title no-margin pb-3">{{ $t('book.filter.arrange.label') }}</label>
      <div class="arrange-by">
        <template v-for="(itemArrange, indexArrange) in listArrange">
          <a :id="itemArrange.id" :key="indexArrange" :class="{ 'active': currentArrange && currentArrange === itemArrange.id }" @click.prevent.stop="arrangeTrip(itemArrange.id)">{{ itemArrange.name }}</a>
        </template>
      </div>
    </div>
    <!-- <div class="filter-by-time">
      <label class="title no-margin pb-4">Bộ lọc</label>
      <label class="text-desc no-margin">Giờ khởi hành</label>
      <el-radio-group v-model="filters.startTime">
        <el-radio class="item" :label="1">Sáng (0h - 12h)</el-radio>
        <el-radio class="item" :label="2">Trưa (12h - 18h)</el-radio>
        <el-radio class="item" :label="3">Tối (18h - 0h)</el-radio>
      </el-radio-group>
    </div> -->
    <div class="list-banner-ads">
      <hooper :settings="hooperSettings">
        <slide>
          <!-- <div id="banner-1" class="ads"> -->
          <!-- <span>Lan toả KBus <br> niềm vui không ngớt!</span> -->
          <!-- </div> -->
          <div class="row no-gutters justify-content-center">
            <div class="col-auto">
              <a href="" @click.prevent="viewNews('kbus-khai-truong-hanh-trinh-du-lich-tu-ha-noi-di-sapa-voi-chi-phi-10k')">
                <img src="https://apikbus.anvui.vn/image/get/fa420954-27e7-483a-aff9-27383fe72b30" alt="banner 1">
              </a>
            </div>
          </div>
        </slide>
        <slide>
          <!-- <div id="banner-2" class="ads"> -->
          <!-- <span>Trở thành đối tác của KBus không lo thiếu khách.</span> -->
          <!-- </div> -->
          <div class="row no-gutters justify-content-center">
            <div class="col-auto">
              <a href="" @click.prevent="viewNews('kbus-nen-tang-chia-se-dich-vu-van-tai-du-lich-duong-dai-kbus-cuu-canh-cho-doanh-nghiep-van-tai-du-lich')">
                <img src="https://apikbus.anvui.vn/image/get/ca627588-ca60-4cad-821a-981bf3237362" alt="banner 2">
              </a>
            </div>
          </div>
        </slide>
        <slide>
          <!-- <div id="banner-3" class="ads"> -->
          <!-- <span>Trải nghiệm KBus phong cách di chuyển kiểu mới</span> -->
          <!-- </div> -->
          <div class="row no-gutters justify-content-center">
            <div class="col-auto">
              <a href="" @click.prevent="viewNews('di-xe-ha-noi-–-sapa-lao-cai-dung-quen-trai-nghiem-kbus')">
                <img src="https://apikbus.anvui.vn/image/get/363948f6-cab4-47ce-aa07-f00573477f2e" alt="banner 3">
              </a>
            </div>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons" />
        <hooper-pagination slot="hooper-addons" />
      </hooper>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
import { mapGetters } from 'vuex'

export default {
  components: { Hooper, Slide, HooperNavigation, HooperPagination },
  data() {
    return {
      listArrange: [
        // {
        //   id: 'rate-company',
        //   name: 'Nhà xe được đánh giá cao nhất'
        // },
        {
          id: 'start-time',
          name: this.$t('book.filter.arrange.startTime')
        },
        {
          id: 'cheap-price',
          name: this.$t('book.filter.arrange.price')
        }
        // {
        //   id: 'fixed-start-time',
        //   name: 'Đã chốt giờ khởi hành'
        // },
        // {
        //   id: 'most-crowded',
        //   name: 'Đông khách nhất'
        // }
      ],
      filters: {
        startTime: null
      },
      currentArrange: null,
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        trimWhiteSpace: true,
        autoPlay: true,
        playSpeed: 6000,
        wheelControl: false
      }
    }
  },
  computed: {
    ...mapGetters(['trips'])
  },
  watch: {
    'currentArrange': function(val) {
      switch (val) {
        case 'rate-company':
          console.log(1)
          break

        case 'start-time':
          this.trips.sort(function(a, b) {
            return parseInt(a.runTimeMilliseconds) - parseInt(b.runTimeMilliseconds)
          })
          break

        case 'cheap-price':
          this.trips.sort(function(a, b) {
            return parseInt(a.baseTicketPrice) - parseInt(b.baseTicketPrice)
          })
          break

        default:
          break
      }
    },
    'filters.startTime': function(val) {
      switch (val) {
        case 1:
          break

        case 2:
          break

        case 3:
          console.log(3)
          break

        default:
          break
      }
    }
  },
  methods: {
    arrangeTrip(id) {
      this.currentArrange = id
    },
    viewNews(slug) {
      // this.$router.push({ path: `news/article/${slug}` })
      window.open(`${window.location.origin}/news/article/${slug}`, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
.filter{
  label{
      display: block;
  }
  .arrange-trip, .filter-by-time{
    background: #FFFFFF;
    border: 1px solid #ECEDF1;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 1rem;
    .title{
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      color: #383F47;
    }
    .arrange-by{
      a{
        display: block;
        width: fit-content;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 24px;
        color: #383F47;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.4s ease;
        &:hover, :focus{
          color: #ED196B;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
      .active{
        color: #ED196B;
      }
    }
  }
  .filter-by-time{
    .text-desc{
      text-transform: uppercase;
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      color: #383F47;
    }
    .item{
      margin-top: 1rem;
    }
  }

  .list-banner-ads{
    margin-top: 40px;

    img{
      width: 100%;
      max-width: 259px;
      height: 250px;
      border-radius: 8px;
    }

    .ads{
      border-radius: 8px;
      height: 250px;
      position: relative;

      span{
        width: 299px;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        word-break: break-word;
      }
    }

    #banner-1{
      background: url("https://apikbus.anvui.vn/image/get/fa420954-27e7-483a-aff9-27383fe72b30") no-repeat;
      background-size: contain;
      background-position: center center;
    }

    #banner-2{
      background: url("https://apikbus.anvui.vn/image/get/ca627588-ca60-4cad-821a-981bf3237362") no-repeat;
      background-size: contain;
      background-position: center center;
    }

    #banner-3{
      background: url("https://apikbus.anvui.vn/image/get/363948f6-cab4-47ce-aa07-f00573477f2e") no-repeat;
      background-size: contain;
      background-position: center center;
    }
  }
}
</style>
