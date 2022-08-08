<template>
  <div v-if="popularRoutes.length > 0" class="list-popular-route mt-5">
    <div class="container">
      <h2 class="title" style="margin-bottom: 21px">
        {{ $t('popularRoute.title') }}
      </h2>
      <div v-loading="loading" class="route-wrapper">
        <hooper :settings="hooperSettings">
          <template v-for="(route, idx) in popularRoutes">
            <slide :key="idx">
              <div class="route-item">
                <!-- :id="`route-overview-${idx+1}`" -->
                <div
                  class="route-overview"
                  :style="{ 'background' : route.images && route.images.length > 0 ? `linear-gradient(
                  0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${route.images[0]}) center center / cover no-repeat` : `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))` }"
                  @click.prevent="searchTripByRoute(route.points[0].district.provinceName, route.points[route.points.length - 1].district.provinceName)"
                >
                  <div class="point mb-auto">
                    <!-- <span class="from">KBus đi</span>
                    <span class="to">{{ route.points[route.points.length - 1].name }}</span> -->
                  </div>
                  <div class="price mt-auto">
                    <div class="row no-margin align-items-center">
                      <div class="col">
                        <!-- <span class="hire">Tuyển thêm X khách đi {{ route.to }}</span> -->
                        <!-- <span class="end-price">Chỉ còn {{ route.price }}</span> -->
                        <span>{{ route.routeName }}</span>
                        <span>{{ route.distance }} km</span>
                      </div>
                      <div class="col-auto">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.0476 26.1342C13.3376 25.4241 13.3376 24.2729 14.0476 23.5629L19.1256 18.4849L7.15143 18.4849C6.14728 18.4849 5.33325 17.6708 5.33325 16.6667C5.33325 15.6625 6.14728 14.8485 7.15143 14.8485L19.1256 14.8485L14.0476 9.77052C13.3376 9.06047 13.3376 7.90926 14.0476 7.19922C14.7576 6.48917 15.9089 6.48917 16.6189 7.19922L24.8007 15.381C25.5108 16.0911 25.5108 17.2423 24.8007 17.9523L16.6189 26.1342C15.9089 26.8442 14.7576 26.8442 14.0476 26.1342Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="route-detail">
                  <div class="w-100">
                    <div>
                      <span class="description">{{ $t('popularRoute.from') }}</span>
                    </div>
                    <div>
                      <label
                        :title="route.points[0].address"
                        @click.prevent="searchTripByRoute(route.points[0].district.provinceName, route.points[route.points.length - 1].district.provinceName)"
                      >
                        {{ route.points[0].address }}
                        <!-- <div class="col text-right">
                          <span>{{ numeral(parseInt(item.price)).format(0,0) }}đ</span>
                        </div> -->
                      </label>
                    </div>
                    <div>
                      <span class="description">{{ $t('popularRoute.to') }}</span>
                    </div>
                    <div>
                      <label
                        :title="route.points[route.points.length - 1].address"
                        @click.prevent="searchTripByRoute(route.points[0].district.provinceName, route.points[route.points.length - 1].district.provinceName)"
                      >
                        {{ route.points[route.points.length - 1].address }}
                        <!-- <div>
                          <span>{{ numeral(parseInt(item.price)).format(0,0) }}đ</span>
                        </div> -->
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </template>
          <hooper-navigation slot="hooper-addons" />
          <hooper-pagination slot="hooper-addons" />
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: { Hooper, Slide, HooperNavigation, HooperPagination },
  data() {
    return {
      // routesDemo: [
      //   {
      //     to: 'Sapa',
      //     price: '150K',
      //     routeItems: [
      //       {
      //         route: 'Hà Nội',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Hạ Long',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Lạng Sơn',
      //         price: '200000'
      //       }
      //     ]
      //   },
      //   {
      //     to: 'Đà Nẵng',
      //     price: '150K',
      //     routeItems: [
      //       {
      //         route: 'Hà Nội',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Hạ Long',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Lạng Sơn',
      //         price: '200000'
      //       }
      //     ]
      //   },
      //   {
      //     to: 'Nam Định',
      //     price: '150K',
      //     routeItems: [
      //       {
      //         route: 'Hà Nội',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Hạ Long',
      //         price: '200000'
      //       },
      //       {
      //         route: 'Lạng Sơn',
      //         price: '200000'
      //       }
      //     ]
      //   }
      // ],
      loading: false,
      popularRoutes: [],
      selectedRoute: '',
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
      }
    }
  },
  computed: {
    ...mapGetters([
      'routes'
    ])
  },
  mounted() {
    this.getRoutes()
  },
  methods: {
    getRoutes() {
      this.loading = true
      this.$store.dispatch('route/getRoutes').then(resp => {
        this.loading = false
        this.popularRoutes = this.routes.filter((route, r) => route.priority > 0)
        if (this.popularRoutes.length > 1) {
          this.popularRoutes.sort((a, b) => b.priority - a.priority)
        }
      }).catch(err => {
        this.loading = false
        console.log(err)
        // this.$message.error('Đã có lỗi xảy ra')
      })
    },
    searchTripByRoute(startProvince, endProvince) {
      const query = {
        from: startProvince,
        to: endProvince,
        startDate: this.$moment().format('YYYY-MM-DD')
      }
      this.$store.dispatch('trip/getPointAndDate', query)
      this.$router.push({ name: 'OrderPage' })
    }
  }
}
</script>
<style lang="scss">
.list-popular-route{
  .route-wrapper{
    .hooper{
      height: auto;

      .hooper-track{
        // gap: 32px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.list-popular-route{
  padding-bottom: 80px;
  position: relative;

  &:before{
    content: "";
    background: #FBD1E1;
    position: absolute;
    bottom: 0;
    height: 400px;
    width: 100%;
  }

  .route-wrapper{
    // display: grid;
    // grid-gap: 32px;
    // grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
  }

  .route-item{
    padding-inline: 0.5rem;

    .route-overview{
      border-radius: 8px 8px 0px 0px;
      height: 320px;
      padding: 32px 24px 16px 24px;
      display: grid;
      position: relative;
      background-size: cover;
      background-position: center center;
      cursor: pointer;

      span{
        display: block;
        color: #FFFFFF;

        &.from{
          font-size: 22px;
          line-height: 29px;
        }

        &.to{
          font-size: 44px;
          line-height: 58px;
          font-weight: 600;
        }

        &.hire{
          font-size: 18px;
          line-height: 36px;
        }

        &.end-price{
          font-size: 22px;
          line-height: 28px;
          font-weight: 600;
        }
      }

      .point, .price{
        cursor: pointer;
      }
    }

    #route-overview-1{
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #171717 100%), url("https://images.unsplash.com/photo-1606654986771-d4f799bd649e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") no-repeat;
      background-size: cover;
      background-position: center center;
    }

    #route-overview-2{
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #171717 100%), url("https://images.unsplash.com/photo-1614140510679-96ae6ebd078e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80") no-repeat;
      background-size: cover;
      background-position: center center;
    }

    #route-overview-3{
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #171717 100%), url("https://images.unsplash.com/photo-1584566444402-18d31900511c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80") no-repeat;
      background-size: cover;
      background-position: center center;
    }

    .route-detail{
      background: #FFFFFF;
      padding: 16px 16px 8px 16px;
      border-radius: 0px 0px 8px 8px;
      position: relative;

      .description{
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #646D84;
        cursor: default;
      }

      label{
        font-size: 17px;
        line-height: 24px;
        font-weight: 600;
        color: #383F47;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        &:hover, &:focus{
          color: #ED196B;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
