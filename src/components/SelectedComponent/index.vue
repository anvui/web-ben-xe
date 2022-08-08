<template>
  <el-select v-model="formFilter.account" placeholder="Chọn loại tài khoản">
    <el-option
      v-for="item in listPreSelected"
      :key="item"
      :label="item.label"
      :value="item.value"
    />
    <el-option
      v-for="item in listOptions"
      :key="item"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  props: {
    listPreSelected: {
      type: Array,
      default() { return [] },
      require: false
    },
    listOptions: {
      type: Array,
      default() { return [] },
      require: false
    }
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
