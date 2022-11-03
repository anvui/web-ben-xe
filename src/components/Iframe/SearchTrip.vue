<template>
  <div class="w-100 box-search-trip" v-if="companyConfig">
    <div class="row no-gutters align-items-center search-trip-wrapper">
      <div id="point-up" class="col-md point">
        <el-autocomplete
          ref="SelectPoint"
          v-model="requestFilter.startPoint"
          class="w-100 select-point"
          placeholder="Chọn điểm"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="true"
          :clearable="false"
          :highlight-first-item="false"
          @focus="handleFocus"
        >
          <div slot="prefix" class="icon-prefix">
            <div
              class="el-input__icon icon-bus"
              :style="{ height: 32 + 'px' }"
            />
          </div>
        </el-autocomplete>
        <!-- <select-point ref="PointUp" v-model="requestFilter.startPoint" placeholder="Điểm đi" prefix-icon="icon-bus" class="w-100 select-point" /> -->
      </div>
      <div class="col-auto swap-section">
        <span class="button-swap" style="cursor: pointer" @click="swap()">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <circle cx="32" cy="30" r="20" fill="white" />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.8333 25.4167C32.8333 24.2102 33.7102 23.3333 34.9167 23.3333C36.1231 23.3333 37 24.2102 37 25.4167V32.6208C35.7952 32.9793 34.9167 34.0954 34.9167 35.4167C34.9167 37.0275 36.2225 38.3333 37.8333 38.3333C39.4442 38.3333 40.75 37.0275 40.75 35.4167C40.75 34.0954 39.8715 32.9793 38.6667 32.6208V25.4167C38.6667 23.2897 37.0436 21.6667 34.9167 21.6667C32.7898 21.6667 31.1667 23.2898 31.1667 25.4167V34.5833C31.1667 35.7898 30.2898 36.6667 29.0833 36.6667C27.8769 36.6667 27 35.7898 27 34.5833V24.5118L27.6607 25.1726C27.9862 25.498 28.5138 25.498 28.8393 25.1726C29.1647 24.8471 29.1647 24.3195 28.8393 23.9941L26.756 21.9108C26.6052 21.76 26.3968 21.6667 26.1667 21.6667C26.0537 21.6667 25.9459 21.6891 25.8477 21.7299C25.7494 21.7706 25.6573 21.8308 25.5774 21.9107L23.4941 23.9941C23.1686 24.3195 23.1686 24.8471 23.4941 25.1726C23.8195 25.498 24.3472 25.498 24.6726 25.1726L25.3333 24.5118V34.5833C25.3333 36.7102 26.9564 38.3333 29.0833 38.3333C31.2102 38.3333 32.8333 36.7102 32.8333 34.5833V25.4167ZM37.8333 34.1667C37.143 34.1667 36.5833 34.7263 36.5833 35.4167C36.5833 36.107 37.143 36.6667 37.8333 36.6667C38.5237 36.6667 39.0833 36.107 39.0833 35.4167C39.0833 34.7263 38.5237 34.1667 37.8333 34.1667Z"
              fill="#2D225E"
            />
            <path
              d="M37.8334 34.1667C37.143 34.1667 36.5834 34.7263 36.5834 35.4167C36.5834 36.107 37.143 36.6667 37.8334 36.6667C38.5237 36.6667 39.0834 36.107 39.0834 35.4167C39.0834 34.7263 38.5237 34.1667 37.8334 34.1667Z"
              fill="#50C694"
            />
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="64"
                height="64"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="6" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </div>
      <div id="point-down" class="col-md point">
        <el-autocomplete
          ref="SelectPoint"
          v-model="requestFilter.endPoint"
          class="w-100 select-point"
          placeholder="Chọn điểm"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="true"
          :clearable="false"
          :highlight-first-item="false"
          @focus="handleFocus"
        >
          <div slot="prefix" class="icon-prefix">
            <div
              class="el-input__icon icon-local"
              :style="{ height: 32 + 'px' }"
            />
          </div>
        </el-autocomplete>
        <!-- <select-point ref="PointDown" v-model="requestFilter.endPoint" placeholder="Điểm đến" prefix-icon="icon-local" class="w-100 select-point" /> -->
      </div>
      <div class="col-md">
        <el-date-picker
          id="start-date"
          ref="DatePicker"
          v-model="requestFilter.startDate"
          :picker-options="datePickerOptions"
          placeholder="Ngày đi"
          :clearable="false"
          class="w-100 select-date"
          prefix-icon="icon-date"
          format="dd-MM-yyyy"
          value-format="yyyy-MM-dd"
        />
      </div>
      <!-- <div class="col-md">
            <el-date-picker ref="DatePicker" v-model="requestFilter.endDate" :picker-options="datePickerOptions" placeholder="Ngày về" :clearable="true" class="w-100 select-date" prefix-icon="icon-date" format="dd-MM-yyyy" value-format="yyyy-MM-dd" />
          </div> -->
      <div class="col-auto search-trip-section">
        <el-button
          class="btn-search-trip d-flex justify-content-center"
          :loading="loading.SEARCHTRIP"
          @click.stop="searchTrip()"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z"
              fill="white"
            />
          </svg>
          <span>Tìm chuyến</span>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import SelectPoint from '@/components/Province/PickProvince.vue'
import { removeVietnameseTones } from "@/utils/index";
import { mapGetters } from "vuex";
import { getListProvinces } from "@/api/system";

export default {
  // components: { SelectPoint },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      requestFilter: {
        startPoint: "",
        endPoint: "",
        startDate: this.$moment().format("YYYY-MM-DD"),
        endDate: "",
      },
      bookFullTrip: {
        vehicle: null,
        startDate: this.$moment().add(1, "days").format("YYYY-MM-DD"),
      },
      currentDate: this.$moment().format("YYYYMMDD"),
      datePickerOptions: {
        disabledDate(currentDate) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          return currentDate <= yesterday;
        },
      },
      activeTab: "0",
      loading: {
        SEARCHTRIP: false,
      },
      listProvince: [],
    };
  },
  computed: {
    setStatusReselectRoute: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    ...mapGetters([
      "provinces",
      "dateAndPoint",
      "token",
      "companyConfig",
      "listPoint",
      "searchTripQuery",
    ]),
    premiumColor() {
      return this.companyConfig.premiumColor;
    },
    getDateAndPoint() {
      let dateAndPoint = this.dateAndPoint;
      if (typeof dateAndPoint === "string") {
        dateAndPoint = JSON.parse(this.dateAndPoint);
      } else if (typeof dateAndPoint === "object") {
        dateAndPoint = this.dateAndPoint;
      }
      return dateAndPoint;
    },
  },
  watch: {
    companyConfig: {
      handler(newVal, oldValue) {
        if (newVal) {
          this.getListProvince();
        }
      },
      immediate: true,
      deep: true,
    },
    searchTripQuery: {
      handler(newVal, oldValue) {
        if (newVal) {
          this.requestFilter.startPoint = newVal.startPoint;
          this.requestFilter.endPoint = newVal.endPoint;
          this.requestFilter.startDate = this.$moment(newVal.date).format(
            "YYYY-MM-DD"
          );
        }
      },
      immediate: true,
      deep: true,
    },
    "requestFilter.endDate": function (val) {
      const newDate = function (param) {
        return new Date(param);
      };
      if (
        newDate(val).getDate() < newDate(this.requestFilter.startDate).getDate()
      ) {
        this.$message.error("Ngày về không được nhỏ hơn ngày đi");
        this.requestFilter.endDate = "";
      }
    },
  },
  created() {
    // this.getListProvince()
  },
  mounted() {
    this.getListProvince();
  },
  methods: {
    swap() {
      const startPoint = this.requestFilter.startPoint;
      this.requestFilter.startPoint = this.requestFilter.endPoint;
      this.requestFilter.endPoint = startPoint;
    },
    searchTrip() {
      console.log(this.companyConfig);
      console.log(this.requestFilter);
      const querySearch = encodeURI(JSON.stringify(this.requestFilter))
      // const querySearch = Object.keys(this.requestFilter).map((key) => {
      //     return encodeURI(key) + '=' + encodeURI(this.requestFilter[key])
      // }).join('&')
      console.log(querySearch);
      const link2 = `${window.location.origin}/vi/book/querysearch/${querySearch}`
      console.log(link2);
      window.open(link2, '_blank')
    },
    getListProvince() {
      const params = {
        count: 1000,
        searchKey: "",
      };
      const self = this;
      getListProvinces(params)
        .then((response) => {
          const data = response.results.provinces;
          self.listProvince = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    querySearch(queryString, callback) {
      const listData = this.listProvince.map((item) => {
        return {
          label: item.province,
          value: item.province,
        };
      });

      let results = [];
      if (document.hasFocus()) {
        if (this.searchPoint !== this.value) {
          // console.log(1)
          const mapProvince = listData.filter(this.createFilter(queryString));
          results = mapProvince;
        } else {
          // console.log(2)
          results = listData;
        }
      }
      callback(results);
    },
    createFilter(queryString) {
      return (province) => {
        const lowerProvince = removeVietnameseTones(
          province.value ? province.value.toLowerCase() : ""
        );
        const lowerQuery = removeVietnameseTones(queryString.toLowerCase());
        return lowerProvince.includes(lowerQuery);
      };
    },
    handleFocus(event) {
      event.target.select();
    },

    compareDateAndNow(date) {
      if (date >= this.$moment().format("YYYY-MM-DD")) {
        return true;
      } else {
        return false;
      }
    },
    handleChangeTab(tab, event) {
      // console.log(tab, event)
    },
  },
};
</script>
<style lang="scss">
// $main: #ED196B;
$white: #ffffff;
$pink: #fbd1e1;
$gray-70: #9399a9;
@import "~@/styles/anvui/abstracts/_variables.scss";

.box-search-trip {
  position: relative;
  z-index: 10;

  .icon-multi-user {
    background-image: url("~@/assets/images/multi-user.png");
    width: 24px;
    height: 24px;
  }

  .search-trip-wrapper {
    background: $white;
    border: 1px solid $pink;
    box-shadow: 0px 2px 24px rgb(80 198 148 / 20%);
    border-radius: 8px;
    padding: 0 4px 0 18px;
    min-height: 64px;
    box-sizing: content-box;

    .select-vehicle-wrapper {
      .el-input__inner {
        border: none;
        padding-left: 44px;
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        color: $gray-70;
      }

      .icon-input {
        svg {
          left: 0;
          top: 4px;
          opacity: unset;
        }
      }
    }
  }

  .btn-search-trip {
    background: $main;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 1rem 37px;
    // max-width: 192px;
    max-height: 56px;

    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: $white;
      margin-left: 0.5em;
    }
  }
}

.select-point input.el-input__inner,
.select-date input.el-input__inner {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: $gray-70;
  border: none;
  padding-left: 44px;
}
.select-point input.el-input__inner, .select-date input.el-input__inner{
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: $gray-70;
  border: none;
  padding-left: 44px;
}
</style>
