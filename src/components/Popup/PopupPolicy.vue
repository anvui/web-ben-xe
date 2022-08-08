<template>
  <div class="popup-policy">
    <el-dialog
      :visible.sync="statusDialog"
    >
      <div class="w-100">
        <h4 class="title text-center mb-4">Chính sách và điều khoản</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus voluptas quasi aperiam qui tenetur sit, non laborum et id fugiat architecto ad ullam rem animi voluptate quia eveniet facilis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto necessitatibus temporibus ratione illo amet, animi hic, provident similique suscipit facere itaque reprehenderit eum, quis maiores omnis. Ullam, corrupti magni?</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['value'],
  computed: {
    statusDialog: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
<style scoped>
.popup-policy p{
    font-size: 14px;
    line-height: 26px;
    color: #383F47;
}
</style>
