<template>
  <el-select
    v-model="selectedLang"
    placeholder="Chọn ngôn ngữ"
    size="mini"
    class="multi-language"
    popper-class="multi-language-dropdown"
    @change="handleLanguageChange"
  >
    <template slot="prefix">
      <!-- <img src="https://apikbus.anvui.vn/image/get/1a9fd800-4218-4677-80e9-00fe37a4e7e7" alt="icon flag" width="24" height="24"> -->
      <div class="el-input__icon icon-flag" :style="{ 'background-image': `url(${findLangSelected.icon})` }" />
    </template>
    <el-option
      v-for="(item, i) in optionsLang"
      :key="i"
      :label="item.label"
      :value="item.value"
    >
      <div class="row no-gutters align-items-center">
        <div class="col-auto">
          <img :src="item.icon" alt="icon flag" width="24" height="24" class="icon-flag">
        </div>
        <div class="col label-language">
          <span>{{ item.label }}</span>
        </div>
      </div>
    </el-option>
  </el-select>
</template>
<script>
export default {
  data() {
    return {
      optionsLang: [
        {
          icon: 'https://apikbus.anvui.vn/image/get/1a9fd800-4218-4677-80e9-00fe37a4e7e7',
          label: 'VI',
          value: 'vi'
        },
        {
          icon: 'https://apikbus.anvui.vn/image/get/85a81ce1-4df4-43c1-afbf-24f3a4b33c4e',
          label: 'EN',
          value: 'en'
        }
      ],
      selectedLang: 'vi',
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  },
  computed: {
    findLangSelected() {
      return this.optionsLang.find((option) => {
        return this.selectedLang === option.value
      })
    }
  },
  mounted() {
    if (this.$route.params.locale) {
      this.selectedLang = this.$route.params.locale
    }
  },
  methods: {
    handleLanguageChange(value) {
      this.$i18n.locale = value
      const to = this.$router.resolve({ params: { locale: value }})
      // console.log(to)
      this.$router.push(to.location)
    }
  }
}
</script>
<style lang="scss">
$matte-gray: #e4e7ed;

.multi-language-dropdown{
    .label-language{
        padding-left: 8px;
    }
    &.el-select-dropdown{
        border: 1px solid $matte-gray;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
}

.multi-language{
    input.el-input__inner{
        padding-left: 36px;
        width: 90px;
        border: none;
    }
}
</style>

<style lang="scss" scoped>
.multi-language{
    .icon-flag{
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        height: 24px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.5s ease-out;
    }
}
</style>
