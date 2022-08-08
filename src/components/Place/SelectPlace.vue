<template>
  <el-autocomplete
    ref="SelectPlace"
    v-model="querySearch"
    class="autocomplete-place"
    popper-class="list-place-wrap"
    :trigger-on-focus="false"
    :fetch-suggestions="remoteSearch"
    :debounce="600"
    placeholder="Chọn điểm đón/trả"
    @select="handleChangeValue"
    @focus="handleFocus"
  >
    <template slot="prefix">
      <span class="icon-input">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9999 14.1699C9.86988 14.1699 8.12988 12.4399 8.12988 10.2999C8.12988 8.15994 9.86988 6.43994 11.9999 6.43994C14.1299 6.43994 15.8699 8.16994 15.8699 10.3099C15.8699 12.4499 14.1299 14.1699 11.9999 14.1699ZM11.9999 7.93994C10.6999 7.93994 9.62988 8.99994 9.62988 10.3099C9.62988 11.6199 10.6899 12.6799 11.9999 12.6799C13.3099 12.6799 14.3699 11.6199 14.3699 10.3099C14.3699 8.99994 13.2999 7.93994 11.9999 7.93994Z" fill="#292D32" />
          <path d="M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z" fill="#292D32" />
        </svg>
      </span>
    </template>
    <template slot-scope="{ item }">
      <span>{{ item.address }}</span>
    </template>
    <!-- <div slot="empty" class="loading-option-place">
      <span v-if="loading">Đang tải dữ liệu...</span>
      <div class="text-center">
        <label class="d-block mt-1">Không có điểm bạn cần tìm?</label>
        <el-button class="btn-search-more-place" type="primary" @click="searchMorePlace">Tìm kiếm nâng cao</el-button>
      </div>
    </div> -->
    <!-- <div class="text-center">
      <label class="d-block mt-1">Không có điểm bạn cần tìm?</label>
      <el-button class="btn-search-more-place" type="primary" @click="searchMorePlace">Tìm kiếm nâng cao</el-button>
    </div> -->
  </el-autocomplete>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    value: {
      default: null,
      type: Object
    },
    placeholder: {
      default: 'Chọn điểm đón/trả',
      type: String
    },
    clearable: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      loading: false,
      options: null,
      loadingBtnSearchMore: false,
      querySearch: '',
      timeout: null
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'listPlaces'
    ]),
    getPlace: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
    // offsetWidth() {
    //   return this.$refs.SelectPlace.inputWidth
    // }
  },
  mounted() {
    if (this.value) {
      this.querySearch = this.value.address
    }
  },
  methods: {
    handleChangeValue(value) {
      // console.log(value)
      if (!value.lat || !value.lng || !value.province || !value.district) {
        this.$store.dispatch('place/getPlaceDetails', { input: value.placeId }).then(resp => {
          value.lat = resp.lat
          value.lng = resp.lng
          // value.wardId = resp.detail.wardId
          // value.ward = resp.detail
          value.province = resp.province
          value.district = resp.district
        }).catch(err => {
          console.log(err)
          this.$message.error(err.message ? err.message : 'Không tìm thấy tọa độ')
        })
      }
      this.querySearch = value.address
      this.getPlace = value
    },
    remoteSearch(query, cb) {
      if (query) {
        this.querySearch = query
        this.loading = true
        this.$store.dispatch('place/getPlaces', { input: query }).then(resp => {
          this.loading = false
          this.options = resp
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            // console.log(this.options)
            cb(this.options)
          }, 300)
          if (this.options.length <= 0) {
            this.searchMorePlace()
          }
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      }
    },
    searchMorePlace() {
      this.loading = true
      this.$store.dispatch('place/getMorePlaces', { input: this.querySearch }).then(resp => {
        this.loading = false
        resp.forEach((item) => {
          this.options.push(item)
        })
      }).catch(err => {
        this.loading = false
        console.log(err)
        // this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
      })
    },
    handleFocus(event) {
      event.target.select()
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$white: #FFFFFF;
$blue-100: #0091FE;

.select-place-wrapper{
  .icon-input{
    position: relative;

    svg{
      position: absolute;
      top: 12px;
      left: 6px;
      opacity: 0.6;
    }
  }
}

.autocomplete-place{
  width: 100%;
  .icon-input{
    position: relative;

    svg{
      position: absolute;
      top: 12px;
      left: 6px;
      opacity: 0.6;
    }
  }
}

.list-place-wrap{
  &.is-loading li{
    line-height: normal;
  }
  // li > span{
  //   max-width: 600px;
  //   white-space: nowrap;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   // display: block;
  // }
}

.loading-option-place{
    padding: 4px 0;
    text-align: center;
}

.btn-search-more-place{
  margin-bottom: 4px;
  padding: 8px 16px;
  border: none;
}

.place-item{
  &.selected{
    font-weight: unset;
  }

  .selected{
    font-weight: 700;
  }
  .address-place{
    > span{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
  }
}
</style>
