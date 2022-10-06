<template>
  <div :class="classObj" class="app-wrapper">
    <template v-if="companyConfig">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar v-if="$route.name !== 'Login' && $route.name !== 'Signup' && $route.name !== 'ResetPassword'" class="layout-width" />
      </div>
      <app-main class="layout-width main-container" />
      <menu-footer v-if="$route.name !== 'Login' && $route.name !== 'Signup' && $route.name !== 'ResetPassword'" />
    </template>
  </div>
</template>

<script>
import { AppMain } from './components'
import Navbar from '@/components/MenuHeader/Index.vue'
import ResizeMixin from './mixin/ResizeHandler'
import MenuFooter from '@/components/Footer/index.vue'
import { mapGetters } from 'vuex'
// import SlideNotify from '@/components/SlideNotify'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    MenuFooter
    // SlideNotify
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters(['companyConfig']),
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }

  // .fixed-header {
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   z-index: 9;
  //   width: calc(100% - #{$sideBarWidth});
  //   transition: width 0.28s;
  // }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
