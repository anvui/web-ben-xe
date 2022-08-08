<template>
  <div class="v-template employee-view">
    <div class="v-template-header">
      <span class="v-template-title">Danh sách nhân viên</span>
      <div class="v-template-action">
        <el-button type="success" @click="handleClick()">Thêm nhân viên mới</el-button>
      </div>
    </div>
    <div>
      <el-card class="box-card">
        <!-- <div></div> -->
        <div class="v-template-report">
          <div class="v-template-report-filter">
            <div class="v-template-report-filter-item">
              <label for="">Tên nhân viên</label>
              <el-input v-model="formFilter.name" placeholder="Nhập tên" />
            </div>
            <div class="v-template-report-filter-item">
              <label for="">Loại tài khoản</label>
              <el-select v-model="formFilter.account" placeholder="Chọn loại tài khoản">
                <el-option
                  v-for="item in 3"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </div>
            <div class="v-template-report-filter-item">
              <el-button type="primary">Tìm kiếm</el-button>
            </div>
          </div>
          <el-table
            :data="birthdayList"
            style="width: 100%"
          >
            <el-table-column
              type="index"
              label="STT"
              width="50"
            />
            <el-table-column
              prop="name"
              label="Tên & tài khoản của nhân viên"
            />
            <el-table-column
              prop="phone"
              label="Điện thoại"
            />
            <el-table-column label="Giới tính">
              <template slot-scope="scope">{{ scope.row.gender == 1 ? 'Nam' : 'Nữ' }}</template>
            </el-table-column>
            <el-table-column label="Chức vụ">
              <template slot-scope="scope">{{ scope.row.gender % 1 === 0 ? 'Nhân viên hành chính' : '' }}</template>
            </el-table-column>
            <el-table-column label="Nhóm quyền">
              <template slot-scope="scope">
                <div class="permission-tag">
                  <el-tag v-for="(item, index) in scope.row.permission" :key="index">{{ item }}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="Trạng thái">
              <template slot-scope="scope">
                <i :class="scope.row.status ? 'el-icon-success' : 'el-icon-lock'" />
              </template>
            </el-table-column>
            <el-table-column
              label=""
            >
              <template slot-scope="scope">
                <icon-button icon-name="key" btn-type="primary" @click.native="handleClick(scope.row)" />
                <icon-button icon-name="info" btn-type="primary" @click.native="handleClick(scope.row)" />
                <icon-button icon-name="edit" btn-type="primary" @click.native="handleClick(scope.row)" />
                <icon-button icon-name="lock" btn-type="primary" @click.native="handleClose(scope.row)" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog
      title="Thêm nhân viên mới"
      :visible.sync="dialogVisible"
      width="70%"
    >
      <div class="create-dialog">
        <div class="create-dialog-col">
          <div>
            <div class="grid-template">
              <div class="avatar">
                <img src="https://www.tubefilter.com/wp-content/uploads/2018/07/merrell-twins.jpg" alt="user profile">
              </div>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" class="w-100" type="primary">Đổi ảnh đại diện</el-button>
                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="create-dialog-col">
          <div>
            <div class="grid-template">
              <div class="col-header">
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1999 6.79999C16.8599 6.79999 18.1899 5.45999 18.1899 3.79999C18.1899 2.13999 16.8599 0.799988 15.1999 0.799988C13.5399 0.799988 12.1999 2.13999 12.1999 3.79999C12.1999 5.45999 13.5399 6.79999 15.1999 6.79999ZM7.19995 6.79999C8.85995 6.79999 10.1899 5.45999 10.1899 3.79999C10.1899 2.13999 8.85995 0.799988 7.19995 0.799988C5.53995 0.799988 4.19995 2.13999 4.19995 3.79999C4.19995 5.45999 5.53995 6.79999 7.19995 6.79999ZM7.19995 8.79999C4.86995 8.79999 0.199951 9.96999 0.199951 12.3V13.8C0.199951 14.35 0.649951 14.8 1.19995 14.8H13.1999C13.7499 14.8 14.1999 14.35 14.1999 13.8V12.3C14.1999 9.96999 9.52995 8.79999 7.19995 8.79999ZM15.1999 8.79999C14.9099 8.79999 14.5799 8.81999 14.2299 8.84999C14.2499 8.85999 14.2599 8.87999 14.2699 8.88999C15.4099 9.71999 16.1999 10.83 16.1999 12.3V13.8C16.1999 14.15 16.1299 14.49 16.0199 14.8H21.1999C21.7499 14.8 22.1999 14.35 22.1999 13.8V12.3C22.1999 9.96999 17.5299 8.79999 15.1999 8.79999Z" fill="#F39B13" />
                </svg>
                <span class="col-title">Thông tin cá nhân</span>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Tên nhân viên</label>
                  <el-input v-model="formSubmit.name" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Giới tính</label>
                  <el-radio-group v-model="formSubmit.gender">
                    <el-radio :label="1">Nam</el-radio>
                    <el-radio :label="2">Nữ</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Số điện thoại</label>
                  <el-input v-model="formSubmit.phone" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Ngày sinh</label>
                  <el-date-picker
                    v-model="formSubmit.birdthday"
                    type="date"
                    class="w-100"
                    placeholder="Pick a day"
                  />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Địa chỉ</label>
                  <el-input v-model="formSubmit.address" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Email</label>
                  <el-input v-model="formSubmit.email" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Số CMND/Thẻ căn cước</label>
                  <el-input v-model="formSubmit.idCard" placeholder="Please input" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="create-dialog-col">
          <div class="grid-template">
            <div class="col-header">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.71423 11.1741C9.71423 10.8125 9.68912 10.476 9.6389 10.1646C9.58867 9.85323 9.50664 9.55189 9.3928 9.26059C9.27896 8.9693 9.10821 8.73995 8.88053 8.57254C8.65285 8.40513 8.38164 8.32142 8.06691 8.32142C7.63834 8.74999 7.11602 8.96428 6.49995 8.96428C5.88388 8.96428 5.36155 8.74999 4.93298 8.32142C4.61825 8.32142 4.34705 8.40513 4.11937 8.57254C3.89169 8.73995 3.72093 8.9693 3.60709 9.26059C3.49325 9.55189 3.41122 9.85323 3.361 10.1646C3.31077 10.476 3.28566 10.8125 3.28566 11.1741C3.28566 11.5424 3.39113 11.8555 3.60207 12.1133C3.81301 12.3711 4.0658 12.5 4.36044 12.5H8.63946C8.9341 12.5 9.18689 12.3711 9.39783 12.1133C9.60876 11.8555 9.71423 11.5424 9.71423 11.1741ZM8.42852 6.71428C8.42852 6.17856 8.24102 5.72321 7.86602 5.34821C7.49102 4.97321 7.03566 4.78571 6.49995 4.78571C5.96423 4.78571 5.50888 4.97321 5.13388 5.34821C4.75888 5.72321 4.57138 6.17856 4.57138 6.71428C4.57138 7.24999 4.75888 7.70535 5.13388 8.08035C5.50888 8.45535 5.96423 8.64285 6.49995 8.64285C7.03566 8.64285 7.49102 8.45535 7.86602 8.08035C8.24102 7.70535 8.42852 7.24999 8.42852 6.71428ZM18.7142 11.5357V10.8928C18.7142 10.7991 18.6841 10.7221 18.6238 10.6618C18.5636 10.6016 18.4866 10.5714 18.3928 10.5714H11.3214C11.2276 10.5714 11.1506 10.6016 11.0903 10.6618C11.0301 10.7221 10.9999 10.7991 10.9999 10.8928V11.5357C10.9999 11.6295 11.0301 11.7065 11.0903 11.7667C11.1506 11.827 11.2276 11.8571 11.3214 11.8571H18.3928C18.4866 11.8571 18.5636 11.827 18.6238 11.7667C18.6841 11.7065 18.7142 11.6295 18.7142 11.5357ZM14.8571 8.96428V8.32142C14.8571 8.22767 14.827 8.15066 14.7667 8.09039C14.7064 8.03013 14.6294 7.99999 14.5357 7.99999H11.3214C11.2276 7.99999 11.1506 8.03013 11.0903 8.09039C11.0301 8.15066 10.9999 8.22767 10.9999 8.32142V8.96428C10.9999 9.05803 11.0301 9.13504 11.0903 9.1953C11.1506 9.25557 11.2276 9.28571 11.3214 9.28571H14.5357C14.6294 9.28571 14.7064 9.25557 14.7667 9.1953C14.827 9.13504 14.8571 9.05803 14.8571 8.96428ZM18.7142 8.96428V8.32142C18.7142 8.22767 18.6841 8.15066 18.6238 8.09039C18.5636 8.03013 18.4866 7.99999 18.3928 7.99999H16.4642C16.3705 7.99999 16.2935 8.03013 16.2332 8.09039C16.1729 8.15066 16.1428 8.22767 16.1428 8.32142V8.96428C16.1428 9.05803 16.1729 9.13504 16.2332 9.1953C16.2935 9.25557 16.3705 9.28571 16.4642 9.28571H18.3928C18.4866 9.28571 18.5636 9.25557 18.6238 9.1953C18.6841 9.13504 18.7142 9.05803 18.7142 8.96428ZM18.7142 6.39285V5.74999C18.7142 5.65624 18.6841 5.57923 18.6238 5.51896C18.5636 5.4587 18.4866 5.42856 18.3928 5.42856H11.3214C11.2276 5.42856 11.1506 5.4587 11.0903 5.51896C11.0301 5.57923 10.9999 5.65624 10.9999 5.74999V6.39285C10.9999 6.4866 11.0301 6.56361 11.0903 6.62388C11.1506 6.68414 11.2276 6.71428 11.3214 6.71428H18.3928C18.4866 6.71428 18.5636 6.68414 18.6238 6.62388C18.6841 6.56361 18.7142 6.4866 18.7142 6.39285ZM1.99995 2.85713H19.9999V1.89285C19.9999 1.7991 19.9698 1.72209 19.9095 1.66182C19.8493 1.60155 19.7723 1.57142 19.6785 1.57142H2.32138C2.22763 1.57142 2.15062 1.60155 2.09035 1.66182C2.03008 1.72209 1.99995 1.7991 1.99995 1.89285V2.85713ZM21.2857 1.89285V14.1071C21.2857 14.5491 21.1283 14.9274 20.8136 15.2422C20.4988 15.5569 20.1205 15.7143 19.6785 15.7143H2.32138C1.87941 15.7143 1.50106 15.5569 1.18633 15.2422C0.871599 14.9274 0.714233 14.5491 0.714233 14.1071V1.89285C0.714233 1.45088 0.871599 1.07254 1.18633 0.757804C1.50106 0.443072 1.87941 0.285706 2.32138 0.285706H19.6785C20.1205 0.285706 20.4988 0.443072 20.8136 0.757804C21.1283 1.07254 21.2857 1.45088 21.2857 1.89285Z" fill="#F39B13" />
              </svg>
              <span class="col-title">Thông tin cá nhân</span>
            </div>
            <div class="col-form">
              <div class="col-form">
                <div class="form-item">
                  <label>Tài khoản hệ thống</label>
                  <el-input v-model="formSubmit.email" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Mật khẩu</label>
                  <el-input v-model="formSubmit.password" show-password placeholder="Please input password" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Mã nhân sự</label>
                  <el-input v-model="formSubmit.staffCode" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Nhóm quyền</label>
                  <el-select v-model="formSubmit.permission" placeholder="Select">
                    <el-option
                      v-for="(item, index) in birthdayList[0].permission"
                      :key="index"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Chức vụ</label>
                  <el-input v-model="formSubmit.position" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Bộ phận</label>
                  <el-input v-model="formSubmit.department" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Hạng bằng lái</label>
                  <el-input v-model="formSubmit.driverPaper" placeholder="Please input" />
                </div>
              </div>
              <div class="col-form">
                <div class="form-item">
                  <label>Phương tiện</label>
                  <el-input v-model="formSubmit.vehicle" placeholder="Please input" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Hủy</el-button>
        <el-button type="primary" @click="dialogVisible = false">Lưu thay đổi</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IconButton from '@/components/IconButton'

export default {
  name: 'Dashboard',
  components: { IconButton },
  data() {
    return {
      formFilter: {
        name: null,
        account: null
      },
      formSubmit: {
        name: 'Nguyễn Văn A',
        gender: 2,
        phone: '0123456789',
        birdthday: null,
        address: null,
        email: 'abc2gmail.com',
        idCard: '4124125325',
        userName: 'anvui102',
        password: 'anvui102',
        staffCode: 'av102',
        permission: [],
        position: null,
        department: null,
        driverPaper: null,
        vehicle: null
      },
      value1: null,
      birthdayList: this.getListBirthday(),
      dialogVisible: true,
      fileList: []
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`)
    },
    handleClose(done) {
      this.$confirm('Bạn chắc chắn muốn đặt lại mật khẩu? Mật khẩu mới sẽ là 123456789')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleClick(item) {
      console.log('click')
      this.dialogVisible = true
    },
    getListBirthday() {
      const list = []
      for (let i = 0; i < 6; i++) {
        list.push({
          id: i,
          label: i,
          name: `Nguyễn Văn A ${i}`,
          date: `${i}-01-2021`,
          phone: '012345678',
          email: `abc${i}@gmail.com`,
          userName: `abc${i}`,
          licenseType: 'A',
          dayLeft: i,
          vehicleName: '12A-12345',
          permission: ['Admin', 'Bán vé', 'Điều hành', 'Quản lý'],
          status: i % 3 === 0,
          gender: i % 3 === 0 ? 1 : 0
        })
      }
      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.employee-view {
  .permission-tag {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
  }
  .el-icon-success:before {
    font-size: 30px;
    color: #49D193;
  }
  .el-icon-lock:before {
    font-size: 30px;
    color: #FF4868;
  }
  .create-dialog {
    display: grid;
    grid-template-columns: 22% 36% 36%;
    grid-gap: 2rem;
    &-col {
      .grid-template {
        display: grid;
        grid-gap: 1rem;
        width: 100%;
        .avatar {
          width: 100%;
          height: auto;
          margin: 0 auto;
          border-radius: 12px;
          img {
            width: 100%;
            height: auto;
          }
        }
        .col-header {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          svg {
            margin-right: 7px;
          }
          .col-title {
            color: #383F47;
            font-size: 18px;
            font-weight: normal;
          }
        }
        .col-form {
          display: grid;
          grid-gap: 1rem;
          .form-item {
            display: grid;
            grid-gap: 5px;
            label {
              color: #646D84;
              font-weight: 500;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
.test-flex {
  display: flex;
  border: 1px solid orange;
  &-item {
    display: flex;
    border: 1px solid grey;
  }
}
</style>
