<template>
  <div class="container">
    <div class="list-service-price-container">
      <h4 class="title-container">{{ $t('servicePrice.title') }}</h4>
      <div class="list-service-price-wrapper">
        <h4 class="title-list">{{ $t('servicePrice.table.title') }}</h4>
        <span class="description-list">
          <template v-for="(item, i) in $t('servicePrice.table.content')">
            <div :key="i">
              <span>{{ item }}</span>
            </div>
          </template>
        </span>
        <div class="service-price-table">
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr>
                <template v-for="(item, i) in $t('servicePrice.table.columnTitle')">
                  <th :key="i" scope="col" class="table-title">{{ item }}</th>
                </template>
              </tr>
            </thead>
            <tbody>
              <template v-for="(vehicle, v) in vehicles">
                <tr :key="v">
                  <td class="model">
                    <span>{{ vehicle.brandName }}</span>
                    <div style="min-height: 40.5px">
                      <template v-for="(image, i) in vehicle.images">
                        <!-- <img :key="i" :src="image" alt="image vehicle" class="image-vehicle" width="60" height="40" @click="showImage(image)"> -->
                        <gallery-image
                          :key="i"
                          :src="image"
                          :src-list="vehicle.images"
                          :width="60"
                          :height="40"
                        />
                      </template>
                    </div>
                  </td>
                  <td>
                    <div class="row no-gutters list-service">
                      <template v-for="(service, s) in vehicle.services">
                        <div :key="s" class="col-md-6 service-item">
                          <!-- <img :src="service.icon" alt="icon" width="20" height="20"> -->
                          <el-image :src="service.icon" width="20" height="20" class="icon-service">
                            <div slot="error" class="image-slot-error">
                              <i class="el-icon-picture-outline" />
                            </div>
                          </el-image>
                          <span>{{ service.name }}</span>
                        </div>
                      </template>
                    </div>
                  </td>
                  <td class="price-per-km">
                    <span>~ {{ numeral(vehicle.pricePerKm).format(0,0) }} / Km</span>
                  </td>
                  <td>
                    <span>{{ vehicle.note }}</span>
                  </td>
                  <td>
                    <el-button class="btn-book-car" @click="bookCar(vehicle)">{{ $t('servicePrice.table.btnBookCar') }}</el-button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="book-car">
          <div class="description-book-car">
            <span>{{ $t('servicePrice.description') }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-dialog :visible.sync="dialogShowImage">
      <img :src="imageUrl" alt="image/png" width="100%">
    </el-dialog> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import GalleryImage from '@/components/Gallery/GalleryImage.vue'

export default {
  components: {
    GalleryImage
  },
  data() {
    return {
      loadingView: false,
      dialogShowImage: false,
      imageUrl: ''
    }
  },
  computed: {
    ...mapGetters([
      'vehicles',
      'token'
    ])
  },
  mounted() {
    this.getListVehicle()
  },
  methods: {
    getListVehicle() {
      this.loaloadingViewding = true
      this.$store.dispatch('vehicle/listVehicles').then(resp => {
        // console.log(resp)
        this.loadingView = false
      }).catch(err => {
        this.loading = false
        console.error(err)
        this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
      })
    },
    showImage(url) {
      this.dialogShowImage = true
      this.imageUrl = url
    },
    bookCar(vehicle) {
      if (this.token) {
        this.$router.push({ name: 'CreateTrip', params: { vehicle: vehicle }})
      } else {
        if (confirm(this.$t('message.servicePrice.checkLogin'))) {
          this.$router.push({ name: 'Login' })
        }
      }
    }
  }
}
</script>
<style lang="scss">
.service-price-table{
  .image-item{
    padding-left: 0;
    padding-right: 8px;
  }
}
</style>
<style lang="scss" scoped>
$white: #FFFFFF;
$gray-100: #383F47;
$black: #000000;
$main: #ED196B;
$gray-80: #646D84;
$gray-40: #ECEDF1;
$gray-20: #F9FAFC;
$gray-60: #B0B5C1;

.list-service-price-container {
  margin-top: 24px;

  .title-container {
    line-height: 29px;
    font-weight: 500;
    letter-spacing: -0.41px;
    color: $black;
  }

  .list-service-price-wrapper {
    margin-top: 16px;
    padding: 24px;
    background-color: $white;
    border-radius: 8px;

    .title-list {
      line-height: 36px;
      font-weight: 400;
      margin-bottom: 8px;
    }

    .description-list {
    }

    .service-price-table {
      margin-inline: -24px;
      margin-top: 16px;

      .table {
        .table-title{
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: black;
        }

        tr {
          th, td {
            padding-left: 24px;

            &:nth-child(1){
              width: 268px;
            }
            &:nth-child(2){
              width: 331px;
            }
          }
        }

        .model {
          > span{
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
            color: $main;
          }
        }

        .price-per-km {
          > span{
            font-size: 20px;
            line-height: 32px;
            font-weight: 400;
            color: $main;
            white-space: nowrap;
          }
        }

        .image-vehicle {
          width: 100%;
          max-width: 60px;
          height: 40px;
          margin-right: 8px;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
        }

        .list-service {
          .service-item {
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            display: flex;
            align-items: center;
            &:last-of-type{
              margin-bottom: 0;
            }

            span {
              margin-left: 8px;
              font-size: 14px;
              line-height: 24px;
              font-weight: 400;
            }

            .icon-service{
              width: 20px;
              height: 20px;
              line-height: 20px;

              .image-slot-error{
                > i{
                  font-size: 20px;
                }
              }
            }
          }
        }

        .btn-book-car {
          width: 128px;
          height: 40px;
          background: #ED196B;
          border-radius: 8px;
          color: $white;
          border: none;
          padding: 8px 16px;
          &:hover {
              opacity: 0.8;
          }
        }
      }
    }

    .book-car {
      .description-book-car {
        margin-top: 1.5rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}

@media only screen and (max-width: 768px){
  .list-service-price-wrapper{
    .service-price-table{
      /* Force table to not be like tables anymore */
      table, thead, tbody, th, td, tr {
        display: block;
      }

      .table{
        > :not(:first-child){
          border-top: 0 !important;
        }
      }

      /* Hide table headers (but not display: none;, for accessibility) */
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }

      tr { border: 1px solid $gray-60; }

      td {
        /* Behave  like a "row" */
        border: none;
        border-bottom: 1px solid $gray-40;
        position: relative;
        padding-left: 50% !important;
        min-height: 5vh;
      }

      td:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 50%;
        left: 6px;
        transform: translateY(-50%);
        width: 45%;
        padding-inline: 8px;
        white-space: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: black;
      }

      /*
      Label the data
      */
      td:nth-of-type(1){
        width: auto !important;
        &:before { content: "LOẠI XE"; }
      }
      td:nth-of-type(2){
        width: auto !important;
        &:before { content: "TIÊU CHUẨN"; }
      }
      td:nth-of-type(3){
        width: auto !important;
        &:before { content: "ĐƠN GIÁ"; }
      }
      td:nth-of-type(4){
        width: auto !important;
        &:before { content: "GHI CHÚ"; }
      }
      td:nth-of-type(5){
        width: auto !important;
        &:before { content: ""; }
      }
    }
  }
}
</style>
