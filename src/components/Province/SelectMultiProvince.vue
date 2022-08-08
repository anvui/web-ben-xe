<template>
  <el-select
    v-model="selected"
    multiple
    filterable
    remote
    reserve-keyword
    class="select-multi-province"
    popper-class="select-multi-province"
    :clearable="clearable"
    :placeholder="placeholder"
    :remote-method="remoteSearch"
    :loading="loading"
    @change="handleChangeValue"
    @focus="handleFocus"
  >
    <template slot="empty">
      <div v-if="loading" class="loading-province">
        <span>Loading...</span>
      </div>
    </template>
    <el-option
      v-for="(item) in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
<script>
import provinces from '@/utils/province'
import { removeVietnameseTones } from '@/utils/index'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      default: '',
      type: String
    },
    clearable: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      options: [],
      loading: false,
      querySearch: '',
      selected: []
    }
  },
  computed: {
    listProvince() {
      return provinces.map((province) => {
        return {
          value: province.name,
          label: province.name
        }
      })
    }
  },
  mounted() {
    this.options = this.listProvince
  },
  methods: {
    remoteSearch(query) {
      this.querySearch = query
      if (this.querySearch) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          const filterProvince = this.listProvince.filter(function(province) {
            const lowerProvince = removeVietnameseTones(province.label ? province.label.toLowerCase() : '')
            const lowerQuery = removeVietnameseTones(query.toLowerCase())
            return (lowerProvince.includes(lowerQuery))
          })
          //   console.log(filterProvince)
          this.options = filterProvince
        }, 200)
      } else {
        this.options = this.listProvince
      }
    },
    handleChangeValue(value) {
      this.$emit('input', JSON.stringify(value))
    },
    handleFocus() {
      this.querySearch = ''
      this.options = this.listProvince
    }
  }
}
</script>
<style lang="scss">
.select-multi-province{
    .el-input__inner{
        height: 48px;
    }
    .el-select__input{
        height: 48px;
    }
}
</style>
<style lang="scss" scoped>
.select-multi-province{
    .loading-province{
        padding: 12px;
        text-align: center;
    }
}
</style>
