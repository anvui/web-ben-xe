<template>
  <div v-if="userInfo" class="edit-user-container">
    <div class="col-md-6" style="margin: 0 auto;">
      <el-form ref="editForm" :model="editForm" :rules="editRules" class="edit-form" auto-complete="on" label-position="left">

        <div class="title-container">
          <h3 class="title">{{ $t('editUser.title') }}</h3>
        </div>

        <el-form-item prop="avatar">
          <!-- <label class="label-avatar">Ảnh đại diện</label> -->
          <upload-avatar v-model="editForm.avatar" file-type="IMAGE" :multiple="false" />
        </el-form-item>

        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model.trim="editForm.username"
            class="form-input"
            name="username"
            type="text"
            tabindex="1"
            disabled
          />
          <label class="custom-placeholder">{{ $t('editUser.formEdit.userName') }}</label>
        </el-form-item>

        <el-form-item prop="phoneNumber">
          <el-input
            ref="phoneNumber"
            v-model.trim="editForm.phoneNumber"
            class="form-input"
            name="phoneNumber"
            type="number"
            tabindex="2"
            disabled
          />
          <label class="custom-placeholder">{{ $t('editUser.formEdit.phoneNumber') }}</label>
        </el-form-item>

        <el-form-item prop="fullname">
          <el-input
            ref="fullname"
            v-model="editForm.fullname"
            class="form-input"
            name="fullname"
            type="text"
            tabindex="3"
          />
          <label class="custom-placeholder">{{ $t('editUser.formEdit.fullName') }}</label>
        </el-form-item>

        <el-form-item prop="email">
          <el-input
            ref="email"
            v-model.trim="editForm.email"
            class="form-input"
            name="email"
            type="text"
            tabindex="4"
          />
          <label class="custom-placeholder">{{ $t('editUser.formEdit.email') }}</label>
        </el-form-item>

        <div class="w-100 text-center mt-4">
          <el-button class="btn-sign-in" :loading="loading" @click.native.prevent="handleSaveInfo">
            {{ $t('editUser.formEdit.btnSave') }}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40995 21.75C4.28995 21.75 3.57995 21.37 3.12995 20.92C2.24995 20.04 1.62995 18.17 3.60995 14.2L4.47995 12.47C4.58995 12.24 4.58995 11.76 4.47995 11.53L3.60995 9.80002C1.61995 5.83002 2.24995 3.95002 3.12995 3.08002C3.99995 2.20002 5.87995 1.57002 9.83995 3.56002L18.3999 7.84002C20.5299 8.90002 21.6999 10.38 21.6999 12C21.6999 13.62 20.5299 15.1 18.4099 16.16L9.84995 20.44C7.90995 21.41 6.46995 21.75 5.40995 21.75ZM5.40995 3.75002C4.86995 3.75002 4.44995 3.88002 4.18995 4.14002C3.45995 4.86002 3.74995 6.73002 4.94995 9.12002L5.81995 10.86C6.13995 11.51 6.13995 12.49 5.81995 13.14L4.94995 14.87C3.74995 17.27 3.45995 19.13 4.18995 19.85C4.90995 20.58 6.77995 20.29 9.17995 19.09L17.7399 14.81C19.3099 14.03 20.1999 13 20.1999 11.99C20.1999 10.98 19.2999 9.95002 17.7299 9.17002L9.16995 4.90002C7.64995 4.14002 6.33995 3.75002 5.40995 3.75002Z" fill="white" />
              <path d="M10.8399 12.75H5.43994C5.02994 12.75 4.68994 12.41 4.68994 12C4.68994 11.59 5.02994 11.25 5.43994 11.25H10.8399C11.2499 11.25 11.5899 11.59 11.5899 12C11.5899 12.41 11.2499 12.75 10.8399 12.75Z" fill="white" />
            </svg>
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import UploadAvatar from '@/components/Upload/UploadAvatar.vue'

export default {
  components: { UploadAvatar },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 6 || value.length > 20) {
        callback(new Error(this.$t('message.editUser.limitUsername')))
      } else {
        callback()
      }
    }
    const validateFullname = (rule, value, callback) => {
      const reg = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.editUser.fullName')))
      } else {
        callback()
      }
    }
    const validatePhoneNumber = (rule, value, callback) => {
      const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.editUser.phoneNumber')))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (value.length <= 0 || !reg.test(value)) {
        callback(new Error(this.$t('message.editUser.email')))
      } else {
        callback()
      }
    }

    return {
      editForm: {
        username: '',
        fullname: '',
        phoneNumber: '',
        email: '',
        avatar: ''
      },
      editRules: {
        username: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
        fullname: [{ required: true, trigger: ['blur', 'change'], validator: validateFullname }],
        phoneNumber: [{ required: true, trigger: ['blur', 'change'], validator: validatePhoneNumber }],
        email: [{ required: true, trigger: ['blur', 'change'], validator: validateEmail }]
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {
    if (this.userInfo) {
      this.editForm.username = this.userInfo.userName
      this.editForm.phoneNumber = this.userInfo.phoneNumber
      this.editForm.fullname = this.userInfo.fullName
      this.editForm.email = this.userInfo.email
      this.editForm.avatar = this.userInfo.avatar
    }
  },
  methods: {
    handleSaveInfo() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/update', {
            fullName: this.editForm.fullname,
            email: this.editForm.email,
            avatar: this.editForm.avatar
          }).then(resp => {
            this.loading = false
            this.$message.success(this.$t('message.editUser.updateSuccessful'))
            this.$store.dispatch('user/getUserInfo', resp)
          }).catch(err => {
            this.loading = false
            console.log(err)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
$bg: #ffffff;
$light_gray: #B0B5C1;
$cursor: #383f47;
$main: #ED196B;

.edit-user-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      font-family: 'Roboto', sans-serif;
      border: 2px solid $light_gray;
      border-radius: 8px;
      -webkit-appearance: none;
      padding: 0 24px;
      height: 100%;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}

</style>

<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray: #889aa4;
$gray: #383F47;
$light_gray: #B0B5C1;
$main: #ED196B;

.edit-user-container {
  // min-height: 92vh;
  overflow: hidden;
  position: relative;
  padding-top: 48px;

  .edit-form {
    width: 100%;
    overflow: hidden;
    background-color: $bg;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 12%);
  }

  .title-container {
    position: relative;

    .title {
      font-size: 24px;
      line-height: 29px;
      color: $gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: normal;
    }
  }

  .el-form-item {
    margin-bottom: 32px;
    .form-input {
      background: $bg;
      width: 100%;
      height: 56px;
      outline: none;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $gray;
    }
    .custom-placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 22px;
      position: absolute;
      top: -10px;
      left: 14px;
      user-select: none;
      pointer-events: none;
      padding: 0 10px;
      display: inline-block;
      background: $bg;
      color: $gray;
      transition: 0.2s cubic-bezier(.645,.045,.355,1);
    }
    .label-avatar {
      font-family: 'SFProText', sans-serif;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .have-account {
    .btn-login-now {
      color: $main;
    }
  }
}
</style>
