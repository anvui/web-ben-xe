<template lang="">
  <el-select
    class="select-bank-wrapper"
    :value="value"
    filterable
    :clearable="clearable"
    :placeholder="placeholder"
    @change="handleChangeValue"
  >
    <el-option
      v-for="(bank, b) in listBanks"
      :key="b"
      class="bank-item"
      :label="bank.label"
      :value="bank.label"
    />
  </el-select>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      default: '',
      type: String
    },
    clearable: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      listBanks: [
        {
          label: 'Agribank',
          value: 'VBAAVNVX'
        },
        {
          label: 'BIDV',
          value: 'BIDVVNVX'
        },
        {
          label: 'Vietcombank',
          value: 'BFTVVNVX'
        },
        {
          label: 'Vietinbank',
          value: 'ICBVVNVX'
        },
        {
          label: 'VPBank',
          value: 'VPBKVNVX'
        },
        {
          label: 'Techcombank',
          value: 'VTCBVNVX'
        },
        {
          label: 'ACB',
          value: 'ASCBVNVX'
        },
        {
          label: 'Sacombank',
          value: 'SGTTVNVX'
        },
        {
          label: 'TPBank',
          value: 'TPBVVNVX'
        },
        {
          label: 'MBBank',
          value: 'MSCBVNVX'
        },
        {
          label: 'MaritimeBank',
          value: 'MCOBVNVX'
        },
        {
          label: 'SHB',
          value: 'SHBAVNVX'
        },
        {
          label: 'SeABank',
          value: 'SEAVVNVX'
        },
        {
          label: 'VIB',
          value: 'VNIBVNVX'
        },
        {
          label: 'HSBC',
          value: 'HSBCVNVX'
        },
        {
          label: 'Eximbank',
          value: 'EBVIVNCX'
        },
        {
          label: 'ABBank',
          value: 'ABBKVNVX'
        },
        {
          label: 'Citibank',
          value: 'CITIVNVX'
        },
        {
          label: 'ANZ',
          value: 'ANZBVNVX'
        },
        {
          label: 'HDBank',
          value: 'HDBCVNVX'
        },
        {
          label: 'LienVietPostBank',
          value: 'LVBKVNVX'
        },
        {
          label: 'PVcomBank',
          value: 'WBVNVNVX'
        },
        {
          label: 'BacABank',
          value: 'NASCVNVX'
        },
        {
          label: 'BAOVIETBank',
          value: 'BVBVVNVX'
        },
        {
          label: 'DongABank',
          value: 'EACBVNVX'
        },
        {
          label: 'KienlongBank',
          value: 'KLBKVNVX'
        },
        {
          label: 'NamABank',
          value: 'NAMAVNVX'
        },
        {
          label: 'NCB',
          value: 'NVBAVNVX'
        },
        {
          label: 'OceanBank',
          value: 'OJBAVNVX'
        },
        {
          label: 'OCB',
          value: 'ORCOVNVX'
        },
        {
          label: 'PGBank',
          value: 'PGBLVNVX'
        },
        {
          label: 'SCB',
          value: 'SACLVNVX'
        },
        {
          label: 'Vietcapital Bank',
          value: 'VCBCVNVX'
        },
        {
          label: 'SaigonBank',
          value: 'SBITVNVX'
        },
        {
          label: 'Hong Leong Bank',
          value: 'HLBBVNVX'
        },
        {
          label: 'Indovinabank',
          value: 'IABBVNVX'
        }
      ]
    }
  },
  methods: {
    handleChangeValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="">

</style>
