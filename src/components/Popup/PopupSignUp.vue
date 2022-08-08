<template>
  <div class="form-signup">
    <el-dialog
      width="36%"
      :visible.sync="statusDialog"
    >
      <div class="w-100">
        <div class="col-12 text-center title">Đăng ký hợp tác</div>
        <div class="form-group">
          <div class="form-field">
            <input v-model="data.full_name" type="text" class="form-input">
            <label class="desc popup-text">Người liên hệ</label>
          </div>
          <div class="form-field">
            <input v-model="data.company_name" type="text" class="form-input">
            <label class="desc popup-text">Tên nhà xe</label>
          </div>
          <div class="form-field">
            <input v-model="data.phone_number" type="text" class="form-input">
            <label class="desc popup-text">Số điện thoại</label>
          </div>
          <div class="form-field">
            <input v-model="data.address" type="text" class="form-input">
            <label class="desc popup-text">Địa chỉ</label>
          </div>
        </div>
        <button class="btn-signup" :loading="loading" @click.stop="signup()">
          <span>Đăng ký hợp tác</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z" fill="white" />
            <path d="M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z" fill="white" />
          </svg>
        </button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  data() {
    return {
      data: {
        full_name: '',
        company_name: '',
        phone_number: '',
        address: ''
      },
      loading: false
    }
  },
  computed: {
    statusDialog: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    signup() {
      this.$message.warning('Tính năng đang phát triển')
    }
  }
}
</script>
<style lang="scss" scoped>
.form-signup{
  .title{
    margin-bottom: 40px;
  }

  .form-field{
    margin-top: 31px;
    position: relative;

    .form-input{
      background: #FFFFFF;
      border: 2px solid #B0B5C1;
      border-radius: 8px;
      width: 100%;
      height: 56px;
      padding: 0 24px;
      outline: none;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #383F47;

      &:focus{
        border-color: #ED196B;
        & + .desc{
          color: #ED196B;
        }
      }
    }

    .desc{
      font-family: "Roboto", sans-serif;
      position: absolute;
      top: -11px;
      left: 15px;
      user-select: none;
      pointer-events: none;
      padding: 0 10px;
      display: inline-block;
      background: #FFFFFF;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
    }
  }

  .btn-signup{
    margin-top: 1rem;
    padding: 16px 24px;
    background: #ED196B;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 28px;
    border: none;

    &:hover{
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.24);
    }

    span{
      color: #FFFFFF;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-right: 0.5rem;
    }
  }
}
</style>
