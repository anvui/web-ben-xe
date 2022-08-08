<template>
  <el-image
    class="image-item"
    :style="[ { 'width': `${width}px`, 'height': `${height}px` } ]"
    :src="src"
    :preview-src-list="srcList"
  />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    srcList: {
      type: Array,
      default: null
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 50
    }
  }
}
</script>
<style lang="scss" scoped>
.image-item{
  padding-left: 8px;
  &:first-of-type{
    padding-left: 0;
  }
}
</style>
