<template>
  <el-autocomplete
    ref="SelectPoint"
    v-model="searchRoute"
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
    <span slot="prefix">
      <i class="el-icon-location el-input__icon" />
    </span>
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
    }
  },
  data() {
    return {
      searchRoute: ''
    }
  },
  computed: {
    ...mapGetters([
      'routes'
    ])
  },
  watch: {
    'value': function(val) {
      this.searchRoute = val
    }
    // 'searchRoute': function(val) {
    //   this.$emit('input', val)
    // }
  },
  mounted() {
    this.getRoutes()
    if (this.value) {
      this.searchRoute = this.value
    }
  },
  methods: {
    async getRoutes() {
      await this.$store.dispatch('route/getRoutes')
    },
    querySearch(queryString, callback) {
      const routes = []
      this.routes.forEach((route, r) => {
        routes.push({
          'value': route.routeName,
          'label': route.id
        })
      })
      let results = []
      if (document.hasFocus()) {
        if (this.searchRoute !== this.value) {
          const mapRoute = routes.filter(this.createFilter(queryString))
          results = mapRoute
        } else {
          results = routes
        }
      }
      callback(results)
    },
    createFilter(queryString) {
      return (route) => {
        const lowerRoute = removeVietnameseTones(route.value.toLowerCase())
        const lowerQuery = removeVietnameseTones(queryString.toLowerCase())
        return (lowerRoute.includes(lowerQuery))
      }
    },
    handleSelect(route) {
      this.$emit('input', route.value)
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
