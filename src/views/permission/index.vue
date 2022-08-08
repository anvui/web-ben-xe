<template>
  <div class="v-template permisson-view">
    <div class="v-template-header">
      <span class="v-template-title">Khai báo nhóm quyền</span>
      <div class="v-template-action">
        <el-button type="success">Thêm nhóm quyền</el-button>
      </div>
    </div>
    <div>
      <el-card class="box-card">
        <div>
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
              label="Tên nhóm quyền"
              width="500"
            />
            <el-table-column
              prop="date"
              label="Ngày tạo"
            />
            <el-table-column
              label=""
              width="100"
            >
              <template slot-scope="scope">
                <icon-button icon-name="edit" btn-type="primary" @click.native="handleClick(scope.row)" />
                <icon-button icon-name="delete" btn-type="danger" @click.native="handleClose(scope.row)" />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <el-dialog
      title="Cập nhật nhóm quyền"
      :visible.sync="dialogVisible"
      width="70%"
    >
      <div class="display-container">
        <label for="name">Tên nhóm quyền</label>
        <el-input v-model="value1" readonly />
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Nhóm quyền 1" name="1">
            <el-checkbox-group v-model="checkboxValue">
              <el-checkbox v-for="i of 4" :key="i" :label="i">{{ `Quyền ${i}` }}</el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>

          <el-collapse-item title="Nhóm quyền 2" name="2">
            <div>asdasd</div>
          </el-collapse-item>
          <el-collapse-item title="Nhóm quyền 3" name="3">
            <div>asdasd</div>
          </el-collapse-item>
          <el-collapse-item title="Nhóm quyền 4" name="4">
            <div>asdasd</div>
          </el-collapse-item>
        </el-collapse>
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
      value1: 'Giám đốc điều hành',
      birthdayList: this.getListBirthday(),
      dialogVisible: false,
      activeNames: 1,
      checkboxValue: []
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    handleClose(done) {
      this.$confirm('Bạn có muốn xóa quyền này?')
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
          name: `Nguyễn Văn A ${i}`,
          date: `${i}-01-2021`,
          phone: '012345678',
          email: `abc${i}@gmail.com`,
          licenseType: 'A',
          dayLeft: i,
          vehicleName: '12A-12345'
        })
      }
      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.permisson-view {
  .display-container {
    display: grid;
    grid-gap: 1rem;
  }
}
</style>
