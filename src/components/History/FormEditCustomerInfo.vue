<template>
  <div>
    <el-dialog
      :visible="value"
      width="50%"
      @close="closeDialogEdit"
    >
      <div class="customer-info-wrapper">
        <!-- <el-input-number :value="totalPassengers" :step="1" :min="0" :max="10" @change="handlePassengersChange" /> -->
        <div id="list-label" :style="{ 'border-bottom': totalPassengers > 0 ? '1px solid #ECEDF1' : '' }">
          <div class="nav">
            <template v-for="(info, index) in infos">
              <div :key="index + 1" class="nav-item">
                <label
                  class="pb-1"
                  :class="{ 'label-active': labelFormCustomerActive === index + 1 }"
                  @click="handelFormCustomerActive(index + 1)"
                >
                  HK{{ index + 1 }}
                </label>
                <!-- <i v-if="index !== 1" class="el-icon-circle-close pl-1 pt-1" @click="removeFormCustomer(index)" /> -->
              </div>
            </template>
          </div>
        </div>
        <div id="form-customer-info">
          <template v-for="(info, index) in infos">
            <form-customer-info
              :key="index + 1"
              ref="FormCustomerInfo"
              v-model="customerInfos"
              :label-form-customer-active="labelFormCustomerActive"
              :passenger-info="info"
            />
          </template>
        </div>
        <div class="button-wrapper">
          <el-button class="btn-save" :loading="loadingSaveInfo" @click="saveInfo">{{ $t('history.btnSave') }}</el-button>
          <el-button class="btn-cancel-edit" @click="closeDialogEdit">{{ $t('history.btnClose') }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import FormCustomerInfo from '@/components/Order/FormCustomerInfo.vue'
import { mapGetters } from 'vuex'

export default {
  components: { FormCustomerInfo },
  props: {
    value: {
      type: Boolean
    },
    infos: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      totalPassengers: 1,
      labelFormCustomerActive: 1,
      listIndexTotalPassengers: [1],
      customerInfos: [],
      loadingSaveInfo: false
    }
  },
  computed: {
    ...mapGetters([
      'validate'
    ])
  },
  watch: {
    'value': function(val) {
      if (val) {
        this.$store.dispatch('trip/fillAllCustomer', false)
      }
    }
  },
  methods: {
    handelFormCustomerActive(index) {
      this.labelFormCustomerActive = index
    },
    // handlePassengersChange(currentVal, oldVal) {
    //   const res = []
    //   let i
    //   for (i = 1; i <= currentVal; i++) {
    //     res.push(i)
    //   }
    //   this.listIndexTotalPassengers = res
    //   this.totalPassengers = this.listIndexTotalPassengers.length
    // },
    saveInfo() {
      if (this.validate.length > 0) {
        this.$message.error(this.$t('message.history.checkCustomerInfo'))
      } else {
        // set customer infos
        const data = []
        this.$refs.FormCustomerInfo.forEach((item, i) => {
          if (item.validate.length === 0 && item.customerInfo.fullname && item.customerInfo.phoneNumber && item.customerInfo.email && item.customerInfo.sex) {
            const params = {
              id: item.customerInfo.ticketId,
              fullName: item.customerInfo.fullname,
              phoneNumber: item.customerInfo.phoneNumber,
              email: item.customerInfo.email,
              sex: item.sexLabel[item.customerInfo.sex]
            }
            data.push(params)
          }
        })
        this.customerInfos = data

        // define params pass to api and call api update customer info
        this.loadingSaveInfo = true
        setTimeout(() => {
          this.$store.dispatch('ticket/updateTicket', { tickets: this.customerInfos }).then(resp => {
            this.loadingSaveInfo = false
            // console.log(resp)
            this.$message.success(this.$t('message.history.updateInfoComplete'))
            this.$emit('input', false)
          }).catch(err => {
            this.loadingCreateTrip = false
            console.log(err)
            this.$message.error(err.message ? err.message : this.$t('message.common.undefinedError'))
          })
        }, 200)
      }
    },
    closeDialogEdit() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss" scoped>
$main: #ED196B;
$light_gray: #ECEDF1;
$pink: #FBD1E1;
$white: #FFFFFF;
$blue-100: #0091FE;

.customer-info-wrapper{
    // margin-left: 1rem;
    // margin-bottom: -1rem;

    label{
        margin-bottom: 0;
    }

    #list-label{
        padding-left: 1rem;
        max-width: 100%;
        overflow-x: auto;
        .nav{
            flex-wrap: nowrap;

            > .nav-item{
                padding-right: 1rem;
                display: flex;
                &:last-child{
                    padding-right: 0;
                }

                label{
                    cursor: pointer;
                    user-select: none;
                    &:hover{
                    color: $main;
                    }
                }

                .el-icon-circle-close{
                    cursor: pointer;

                    &:hover{
                        color: $main;
                    }
                }
            }
        }
    }

    #form-customer-info{
        // border-top: 1px solid $light_gray;
    }

    .label-active{
        color: $main !important;
        border-bottom: 4px solid $main !important;
        border-radius: 2px;
    }

    .button-wrapper{
        font-size: 16px;
        line-height: 22px;
        text-align: center;

        .btn-save{
            border-radius: 50px;
            background-color: $blue-100;
            color: $white;
            border: none;
            outline: none;
            height: 48px;
            &:hover, &:focus{
                opacity: 0.8;
            }
        }

        .btn-cancel-edit{
            border-radius: 50px;
            background-color: transparent;
            outline: none;
            height: 48px;
        }
    }
}
</style>
