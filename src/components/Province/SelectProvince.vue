<template>
  <el-autocomplete
    ref="SelectPoint"
    v-model="searchPoint"
    class="w-100"
    :placeholder="placeholder"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="true"
    :clearable="false"
    :highlight-first-item="false"
    @select="handleSelect"
    @input="handleInput"
    @focus="handleFocus"
  >
    <div slot="prefix" class="icon-prefix">
      <!-- <img src="@/assets/images/icon-bus.svg" alt="icon prefix"> -->
      <div class="el-input__icon" :class="prefixIcon" :style="{'height': iconSize + 'px'}" />
    </div>
  </el-autocomplete>
</template>

<script>
import { removeVietnameseTones } from '@/utils/index'
import { mapGetters } from 'vuex'

export default {
  props: {
    // provinces: {
    //   type: Array,
    //   default: null
    // },
    value: {
      default: null,
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    prefixIcon: {
      type: String,
      default: null
    },
    iconSize: {
      type: Number,
      default: 32
    }
  },
  data() {
    return {
      searchPoint: ''
    }
  },
  computed: {
    ...mapGetters([
      'provinces'
    ])
  },
  watch: {
    'value': function(val) {
      this.searchPoint = val
    }
    // 'searchPoint': function(val) {
    //   this.$emit('input', val)
    // }
  },
  mounted() {
    this.getProvinces()
    if (this.value) {
      this.searchPoint = this.value
    }
  },
  methods: {
    async getProvinces() {
      await this.$store.dispatch('route/getProvinces')
    },
    querySearch(queryString, callback) {
      const provinces = []
      this.provinces.forEach((province, p) => {
        provinces.push({
          'value': province.provinceName,
          'label': province.id
        })
      })
      let results = []
      if (document.hasFocus()) {
        if (this.searchPoint !== this.value) {
          // console.log(1)
          const mapProvince = provinces.filter(this.createFilter(queryString))
          results = mapProvince
        } else {
          // console.log(2)
          results = provinces
        }
      }
      callback(results)
    },
    createFilter(queryString) {
      return (province) => {
        // console.log(province, queryString)
        const lowerProvince = removeVietnameseTones(province.value ? province.value.toLowerCase() : '')
        const lowerQuery = removeVietnameseTones(queryString.toLowerCase())
        return (lowerProvince.includes(lowerQuery))
      }
    },
    handleSelect(province) {
      this.$emit('input', province.value)
    },
    handleInput(value) {
      // this.$emit('input', value)
    },
    handleFocus(event) {
      event.target.select()
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-prefix{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
