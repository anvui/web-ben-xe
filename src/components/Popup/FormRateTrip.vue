<template>
  <div class="rate-trip-wrapper">
    <el-dialog
      :visible.sync="dialog"
      width="50%"
    >
      <div class="w-100">
        <el-rate v-model="rate" />
        <div class="suggestions">
          <template v-for="(item, i) in suggestions">
            <el-button :key="i" class="suggestion-item active" round @click="handleSelectSuggestion(i, item)">{{ item }}</el-button>
          </template>
        </div>
        <el-input
          v-model="content"
          type="textarea"
          :rows="4"
          placeholder="Nhập nội dung đánh giá..."
        />
        <div>
          <el-button type="primary" class="btn-send-rate" :loading="loading" @click="handleRateTrip()">Gửi đánh giá</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { COMMENT_TYPE } from '@/utils/enum'

export default {
  props: {
    value: {
      type: Boolean
    },
    tickets: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      rate: 5,
      content: '',
      loading: false,
      suggestions: [
        'Tài xế thân thiện',
        'Lái xe an toàn',
        'Xe đầy đủ tiện nghi',
        'Xe đến đúng giờ'
      ],
      selectedSuggestion: []
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleRateTrip() {
      this.loading = true
      this.$store.dispatch('comment/createComments', {
        rating: this.rate,
        content: this.content,
        type: COMMENT_TYPE.ROUTE,
        typeId: this.tickets[0].trip.route.id
      }).then(resp => {
        this.loading = false
        this.$message.success('Đã đánh giá chuyến đi')
        this.dialog = false
      }).catch(err => {
        this.loading = false
        console.log(err)
        this.$message.error(err.message ? err.message : 'Đã có lỗi xảy ra')
      })
    },
    handleSelectSuggestion(index, content) {
      this.selectedSuggestion.push(content)
      this.content = this.selectedSuggestion.join('. ')
      // const elementBtn = document.querySelector(`.suggestion-item #suggest-${index}`)
      // elementBtn.classList.add('active')
    }
  }
}
</script>
<style lang="scss">
$main: #ED196B;
$white: #FFFFFF;

.rate-trip-wrapper{
  .el-rate{
    text-align: center;
  }

  .el-textarea{
    margin-top: 16px;
  }

  .btn-send-rate{
    margin-top: 16px;
  }

  .el-rate{
    height: 32px;
    .el-rate__icon{
      font-size: 32px;
    }
  }

  .suggestions{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .suggestion-item{
      width: fit-content;
      margin-top: 8px;
      text-align: left;
      margin-right: 8px;
      height: 16px;
      display: flex;
      align-items: center;

      &.el-button{
        margin-left: 0;
      }

      &.active{
        background-color: $white;
        color: $main;
        border-color: $main;
      }
    }
  }
}
</style>
