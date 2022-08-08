<template lang="">
  <div>
    <el-upload
      ref="FormUploadImage"
      class="avatar-uploader"
      :action="action"
      :headers="getHeader"
      list-type="avatar-uploader"
      :show-file-list="false"
      :auto-upload="true"
      :on-change="handleChange"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :data="dataRequest"
      :disabled="disabled"
    >
      <!-- <el-button size="small" type="primary">Click to upload</el-button> -->
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-if="loadingUpload" class="el-icon-loading" />
      <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
    <!-- <el-dialog :visible.sync="dialogShowImage">
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog> -->
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    fileType: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      action: process.env.VUE_APP_BASE_API + '/image/upload',
      disabled: false,
      dataRequest: {
        fileType: this.fileType
      },
      imageUrl: '',
      loadingUpload: false
      // dialogShowImage: false
    }
  },
  computed: {
    getHeader() {
      const header = {
        Authorization: `Bearer ${getToken()}`
      }
      return header
    }
  },
  mounted() {
    if (this.value) {
      // this.listImage.push({
      //   name: '',
      //   url: this.value
      // })
      this.imageUrl = this.value
    }
  },
  methods: {
    handleRemove(file) {
    },
    handleChange(file, fileList) {
      // console.log(file)
    },
    handleProgress(event, file, fileList) {
      this.disabled = true
      this.loadingUpload = true
      document.querySelector('.avatar-uploader .el-upload').classList.add('is-disabled')
    },
    handleSuccess(response, file, fileList) {
      this.disabled = false
      this.loadingUpload = false
      document.querySelector('.avatar-uploader .el-upload').classList.remove('is-disabled')
      const data = response.results.data
      this.imageUrl = process.env.VUE_APP_BASE_API + `/image/get/${data.id}`
      this.$emit('input', this.imageUrl)
    },
    handleError(err, file, fileList) {
      console.log(err)
      this.disabled = false
      document.querySelector('.avatar-uploader .el-upload').classList.remove('is-disabled')
      this.loadingUpload = false
      this.imageUrl = ''
      this.$message.error('Đã có lỗi xảy ra')
    },
    handleExceed(file, fileList) {
      // this.$message.warning('Tải lên tối đa 1 ảnh')
    },
    handlePreview(file, fileList) {
      // this.dialogShowImage = true
    }
  }
}
</script>
<style lang="scss">
$gray-60: #d9d9d9;
$blue-100: #409EFF;
$gray-80: #8c939d;
$white: #ffffff;

.avatar-uploader{
  width: fit-content;
  margin: 0 auto;
  .el-upload{
    border: 1px dashed $gray-60;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &.is-disabled{
      cursor: not-allowed;
      // pointer-events: none;
      opacity: 0.5;
    }

    &:hover{
      border-color: $blue-100;
    }
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: $gray-80;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    display: block;
    position: relative;
    object-fit: contain;
  }

  .el-icon-loading{
    position: absolute;
    top: 46%;
    left: 46%;
    // transform: translate(-50%,-50%);
    color: $white;
  }
}
</style>
