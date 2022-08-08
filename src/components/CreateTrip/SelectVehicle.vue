<template>
  <el-select
    class="select-vehicle-wrapper"
    :value="value ? value.brandName + ' / ' + value.totalSeat + ' ghế' : ''"
    filterable
    :clearable="clearable"
    :placeholder="placeholder"
    :loading="loading"
    loading-text="Loading..."
    no-match-text="Không có dữ liệu phù hợp"
    no-data-text="Không có dữ liệu"
    :remote="true"
    :remote-method="remoteSearch"
    @change="handleChangeValue"
    @visible-change="handleVisibleChange"
  >
    <span slot="prefix">
      <span class="icon-input">
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V17C1 17.5523 1.44772 18 2 18H3.17071C3.58254 19.1652 4.69378 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H15.1707C15.5825 19.1652 16.6938 20 18 20C19.3062 20 20.4175 19.1652 20.8293 18H22C22.5523 18 23 17.5523 23 17V12C23 9.96761 22.4257 7.97606 21.3493 6.46901C20.2698 4.95773 18.7207 4 17 4H3ZM11 6H8V9H11V6ZM13 9V6H15.1915L15.8344 9H13ZM3 11V16H3.17071C3.58254 14.8348 4.69378 14 6 14C7.30622 14 8.41746 14.8348 8.82929 16H15.1707C15.5825 14.8348 16.6938 14 18 14C19.3062 14 20.4175 14.8348 20.8293 16H21V13.0002H17.5C17.0284 13.0002 16.621 12.6708 16.5222 12.2097L16.2629 11H3ZM3 6H6V9H3V6ZM18.3084 11.0002H20.9429C20.7938 9.70509 20.3597 8.52454 19.7218 7.63149C18.9937 6.61221 18.0995 6.09249 17.2393 6.01132L18.3084 11.0002Z" fill="#383F47" />
        </svg>
      </span>
    </span>
    <el-option
      v-for="item in options"
      :key="item.id"
      class="vehicle-item"
      :value="item"
    >
      <div v-if="vehicles.length > 0" class="d-flex" :class="[ value && item.id === value.id ? 'selected' : '' ]">
        <div class="col">
          {{ item.brandName }}
        </div>
        <div class="col text-right">
          {{ item.totalSeat }} chỗ HK
        </div>
      </div>
      <div v-else>
        <span>Không có dữ liệu</span>
      </div>
    </el-option>
  </el-select>
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
      default: 'Chọn phương tiện (nhập tên hoặc số chỗ)',
      type: String
    },
    clearable: {
      default: false,
      type: Boolean
    },
    iconSize: {
      default: 16,
      type: Number
    }
  },
  data() {
    return {
      loading: false,
      options: []
    }
  },
  computed: {
    ...mapGetters([
      'vehicles'
    ]),
    getVehicle: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  mounted() {
    this.getListVehicles()
  },
  methods: {
    getListVehicles() {
      this.loading = true
      this.$store.dispatch('vehicle/listVehicles').then(resp => {
        // console.log(resp)
        this.loading = false
        this.options = this.vehicles
      }).catch(err => {
        this.loading = false
        console.error(err)
        this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
      })
    },
    handleChangeValue(value) {
      this.getVehicle = value
    },
    remoteSearch(query) {
      if (query) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          const regNumber = new RegExp('^[0-9]*$')
          if (regNumber.test(query)) {
            this.options = this.vehicles.filter(vehicle => {
              return vehicle.totalSeat === parseInt(query)
            })
          } else {
            this.options = this.vehicles.filter(vehicle => {
              return vehicle.model.toLowerCase().includes(query.toLowerCase())
            })
          }
        }, 100)
      } else {
        this.options = this.vehicles
      }
    },
    handleVisibleChange(visible) {
      if (!visible) {
        setTimeout(() => {
          this.options = this.vehicles
        }, 100)
      }
    }
  }
}
</script>
<style lang="scss">
.select-vehicle-wrapper{
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

.vehicle-item{
  &.selected{
    font-weight: unset;
  }

  .selected{
    font-weight: 700;
  }
}
</style>
