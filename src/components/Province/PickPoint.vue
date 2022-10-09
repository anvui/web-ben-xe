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
      <div class="el-input__icon" :class="prefixIcon" :style="{'height': iconSize + 'px'}" />
    </div>
  </el-autocomplete>
</template>

<script>
import { removeVietnameseTones } from '@/utils/index'
import { mapGetters } from 'vuex'

export default {
  props: {
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
      'listPoint'
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
    this.getListData()
    if (this.value) {
      this.searchPoint = this.value
    }
  },
  methods: {
    async getListData() {
      await this.$store.dispatch('system/getPoints')
    },
    querySearch(queryString, callback) {
      const listData = this.listPoint.map(point => {
        return {
          label: point.pointId,
          value: point.pointName
        }
      })

      let results = []
      if (document.hasFocus()) {
        if (this.searchPoint !== this.value) {
          // console.log(1)
          const mapProvince = listData.filter(this.createFilter(queryString))
          results = mapProvince
        } else {
          // console.log(2)
          results = listData
        }
      }
      console.log(results)
      callback(results)
    },
    createFilter(queryString) {
      return (province) => {
        // console.log(province, queryString)
        const lowerProvince = removeVietnameseTones(province.pointName ? province.pointName.toLowerCase() : '')
        const lowerQuery = removeVietnameseTones(queryString.toLowerCase())
        return (lowerProvince.includes(lowerQuery))
      }
    },
    handleSelect(province) {
      console.log(province)
      console.log('searchPoint', this.searchPoint)
      this.$emit('input', province.label)
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
