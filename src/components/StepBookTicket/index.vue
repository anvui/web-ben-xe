<template>
  <div class="box-step-to-book-ticket">
    <div class="container">
      <div class="w-100">
        <div class="row no-gutters process-booking">
          <div id="select-trip" class="col-md">
            <div class="title active">
              <span class="text-step">1. </span><span class="text-title">Chọn chuyến</span>
            </div>
            <div class="route-info">
              <div class="route">
                <div class="province-name">
                  <template v-if="searchTripQuery">
                    <span id="start-point">{{ searchTripQuery.startPoint }}</span>
                    <span> - </span>
                    <span id="end-point">{{ searchTripQuery.endPoint }}</span>
                  </template>
                </div>
                <a v-if="$route.name !== 'payment'" href="" :style="{ 'padding-left': searchTripQuery ? '8px' : '' }" @click.prevent="reselectRoute = true">Chọn lại</a>
              </div>
              <div class="date">
                <p>{{ searchTripQuery ? $moment(searchTripQuery.date).format("DD/MM/YYYY") : '' }}</p>
              </div>
            </div>
          </div>
          <div id="select-trip-and-enter-info" class="col-md">
            <div class="title active">
              <span class="text-step">2. </span><span class="text-title">Chọn chuyến và nhập thông tin</span>
            </div>
          </div>
          <div id="booking" class="col-md">
            <div class="title" :class="[ $route.name === 'pay' ? 'active' : '' ]">
              <span class="text-step">3. </span><span class="text-title">Tiến hành thanh toán</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="reselectRoute"
      width="74%"
    >
      <search-trip v-model="reselectRoute" />
    </el-dialog>
  </div>
</template>

<script>
import SearchTrip from '@/components/SearchTrip/SearchTrip.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'StepBookTicket',
  components: { SearchTrip },
  data() {
    return {
      reselectRoute: false
    }
  },
  computed: {
    ...mapGetters([
      'provinces',
      'dateAndPoint',
      'searchTripQuery',
      'listPoint'
    ]),
    getDateAndPoint() {
      let dateAndPoint = this.dateAndPoint
      if (typeof (dateAndPoint) === 'string') {
        dateAndPoint = JSON.parse(this.dateAndPoint)
      } else if (typeof (dateAndPoint) === 'object') {
        dateAndPoint = this.dateAndPoint
      }
      return dateAndPoint
    },
    mapStartPoint() {
      const point = this.getDateAndPoint ? this.provinces.find((item, index) => item.id === this.getDateAndPoint.from) : null
      return point
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
    .box-step-to-book-ticket{
      .el-dialog__wrapper{
        .el-dialog__body{
            padding: 56px;
        }
      }
    }

    .el-dialog__wrapper{
      .el-dialog__body{
        .box-search-trip{
          margin-top: 0;
        }
      }
    }
</style>

<style lang="scss" scoped>
$bg: #ffffff;
$main: #ED196B;
$font: 'SFProText';
$gray: #B0B5C1;
$blue_primary: #0091FE;
$red: #FF4868;

.box-step-to-book-ticket{
	background: $bg;
  font-family: $font;
  font-style: normal;
  letter-spacing: -0.41px;

  .title{
    color: $gray;

    .text-step{
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
    }

    .text-title{
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .active{
    color: $main;
  }

  .process-booking{
    margin-top: 40px;
    padding: 8px 0 16px;
    font-style: normal;
  }

  #select-trip{
    .route-info{
      margin-top: 6px;
      display: grid;
      gap: 6px;

      .route{
        > .province-name{
          display: inline-block;
        }
      }

      .route > a, .date > p{
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
.q-select-with-prefix input.el-input__inner{
	padding-left: 100px;
}
.process-booking .route a{
	color: $blue_primary;
}
.process-booking .date, .process-booking .seat-info, .process-booking .payment-expire-description{
	padding-top: 8px;
	color: #646D84;
}
.process-booking .payment-expire{
	color: $red;
}
</style>
