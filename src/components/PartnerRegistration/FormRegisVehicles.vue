<template>
  <div class="form-vehicles">
    <label class="title-vehicle">Danh sách các loại xe mà đơn vị có và giá thuê của từng loại</label>
    <table class="table table-bordered">
      <thead id="table-header">
        <tr>
          <th scope="col" />
          <th scope="col">Hãng xe</th>
          <th scope="col">Loại xe</th>
          <th scope="col">Số chỗ</th>
          <th scope="col">Đời xe</th>
          <th scope="col">Đơn giá/km (VNĐ)</th>
          <th scope="col">Phí nghỉ chờ qua đêm (VNĐ)</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <template v-for="(row, r) in vehicles">
          <tr :id="`row-${r + 1}`" :key="r">
            <td>
              <el-button class="btn-remove-row" icon="el-icon-close" @click="handleRemoveRow(r)" />
            </td>
            <td>
              <el-input
                v-model="row.brandname"
                class="form-input"
                name="brand"
                type="text"
                tabindex="1"
              />
            </td>
            <td>
              <el-input
                v-model="row.type"
                class="form-input"
                name="type"
                type="text"
                tabindex="2"
              />
            </td>
            <td>
              <input
                v-model.number="row.numberOfSeat"
                class="form-input"
                name="total-seat"
                type="number"
                autocomplete="off"
                tabindex="3"
                @keypress="onlyNumber($event)"
              >
            </td>
            <td>
              <input
                v-model.number="row.model"
                class="form-input"
                name="model"
                type="number"
                autocomplete="off"
                tabindex="4"
                @keypress="onlyNumber($event)"
              >
            </td>
            <td>
              <input
                v-model.number="row.price"
                class="form-input"
                name="price"
                type="number"
                autocomplete="off"
                tabindex="5"
                @keypress="onlyNumber($event)"
              >
            </td>
            <td>
              <input
                v-model.number="row.additionPrice"
                class="form-input"
                name="addition-price"
                type="number"
                autocomplete="off"
                tabindex="6"
                @keypress="onlyNumber($event)"
              >
            </td>
          </tr>
        </template>
        <tr>
          <td>
            <el-button class="btn-add-row" icon="el-icon-plus" @click="handleAddRow" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="note">
      <div>
        <span class="title-note">Ghi chú:</span>
      </div>
      <div>
        <div>
          <span class="title-item">Hãng xe:</span>
          <span class="content-item">Là thương hiệu của Xe do hãng sản xuất qui định</span>
        </div>
        <div>
          <span class="title-item">Loại xe:</span>
          <span class="content-item">Là loại của chỗ ngồi : Ghế thường, Ghế Vip Limousine, Giường nằm thường, Giường nằm Vip.</span>
        </div>
        <div>
          <span class="title-item">Số chỗ :</span>
          <span class="content-item">Là số chỗ ngồi của khách trừ vị trí của tài xế và người phục vụ</span>
        </div>
        <div>
          <span class="title-item">Đời xe:</span>
          <span class="content-item">Là năm sản xuất phương tiện</span>
        </div>
        <div>
          <span class="title-item">Đơn giá/ Km:</span>
          <span class="content-item">Là đơn giá thuê xe tính theo Km chưa bao gồm Phí cầu đường</span>
        </div>
        <div>
          <span class="title-item">Phí nghỉ chờ qua đêm:</span>
          <span class="content-item">Là mức phí mà xe và tài xế phải chờ qua đêm (nếu có)</span>
        </div>
        <div class="mt-2">
          <span class="description">Phương tiện phải đủ điều kiện kinh doanh vận tải trong trường hợp chưa đủ điều kiện kinh doanh cần ghi rõ để KBus hỗ trợ pháp lý đăng ký đáp ứng đúng theo qui định của nhà nước</span>
        </div>
      </div>
      <div class="mt-3">
        <span class="contact-us">Mọi câu hỏi liên quan cần được giải đáp vui lòng liên hệ với Chúng tôi qua website <a href="http://kbus.vn" style="color: #ED196B;">http://kbus.vn</a> hoặc Hotline: <a href="javascript:void(0)" style="color: #ED196B;">1900 1911</a> đội ngũ tư vấn sẽ sẵn sàng trả lời Quý vị và hỗ trợ quý vị đăng ký tham gia.</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      vehicles: [
        {
          brandname: '',
          type: '',
          numberOfSeat: '',
          model: '',
          price: '',
          additionPrice: ''
        }
      ],
      focusRow: 0,
      focusLabel: ''
    }
  },
  computed: {
    ...mapGetters(['vehiclesRegist'])
  },
  mounted() {
    if (this.vehiclesRegist && this.vehiclesRegist.length > 0) {
      this.vehicles = this.vehiclesRegist
    }
  },
  methods: {
    handleAddRow() {
      this.vehicles.push({
        brandname: '',
        type: '',
        numberOfSeat: '',
        model: '',
        price: '',
        additionPrice: ''
      })
    },
    handleRemoveRow(index) {
      this.vehicles.splice(index, 1)
    },
    onlyNumber(event) {
      // console.log(event)
      event = event || window.event
      var charCode = (event.which) ? event.which : event.keyCode
      if (charCode >= 48 && charCode <= 57) {
        return true
      } else {
        // (charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46
        event.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss">
.form-vehicles{
  .table{
    td{
      input{
        border-radius: 8px;
        display: block;
        width: 100%;
        height: 40px;
        padding: 11px 16px;
        font-family: Cabin;
        font-size: 16px;
        line-height: unset;
        color: #232731;
        background-color: #ffffff;
        background-clip: padding-box;
        border: 1px solid #B0B5C1;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        transition: border-color 0.2s ease;
        &:focus{
          outline: none;
          border-color: #084388;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$gray-100: #383F47;
$red: #FF4868;
$light-red: #f3c3cb;
$gray-80: #646D84;
$main: #ED196B;
$green: #50C694;
$light-green: #DCF4EA;

.form-vehicles{
    .title-vehicle{
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        font-style: normal;
        color: $gray-100;
    }

    .btn-add-row{
        padding: 5px;
        background: $light-green;
        color: $green;
        border: none;

        &:hover, &:active{
            opacity: 0.8;
        }
    }

    .btn-remove-row{
        padding: 5px;
        background: $light-red;
        color: $red;
        border: none;

        &:hover, &:active{
            opacity: 0.8;
        }
    }

    .table{
        tr{
            td, th {
                font-size: 14px;
                line-height: 22px;
                font-style: normal;
                color: $gray-100;

                &:nth-child(2){
                    width: 112px;
                }
                &:nth-child(3){
                    width: 101px;
                }
                // &:nth-child(4){
                //     width: 64px;
                // }
                // &:nth-child(5){
                //     width: 65px;
                // }
                &:nth-child(6){
                    width: 109px;
                }
            }
            > th {
                font-weight: 500;
            }
            > td {
                font-weight: 400;
            }
        }
    }

    .note{
      font-size: 14px;
      line-height: 24px;
      font-style: normal;
      font-family: 'Roboto', sans-serif;
      .title-note{
        color: $red;
      }
      .title-item{
        font-weight: 500;
      }
      .description{
        font-weight: 500;
        margin-bottom: 3px;
      }
      .content-item{
        margin-left: 4px;
        font-weight: 400;
      }
      .contact-us{
        font-weight: 500;
        color: $gray-80;
      }
    }
}
</style>
