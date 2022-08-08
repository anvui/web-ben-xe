<template>
  <div>
    <step-box-ticket />
    <div class="container">
      <div class="filter-trip-on-small-screen text-right mt-3">
        <el-button class="btn-filter" @click="drawer.status = true">
          Lọc
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
          </svg>
        </el-button>

        <el-drawer
          size="50%"
          :visible.sync="drawer.status"
          :direction="drawer.direction"
        >
          <filter-trip />
        </el-drawer>
      </div>
      <div class="row no-margin list-trip-wrapper">
        <filter-trip />
        <list-trip />
      </div>
    </div>
  </div>
</template>

<script>
import FilterTrip from '@/components/Order/Filter.vue'
import ListTrip from '@/components/Order/Trips.vue'
import StepBoxTicket from '@/components/StepBookTicket/index.vue'

export default {
  components: {
    FilterTrip,
    ListTrip,
    StepBoxTicket
  },
  data() {
    return {
      drawer: {
        status: false,
        direction: 'rtl'
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleDrawerWhenScreenResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleDrawerWhenScreenResize)
  },
  methods: {
    handleDrawerWhenScreenResize(event) {
      if (event.target.screen.width <= 991) {
        if (this.drawer.status) {
          this.drawer.status = true
        }
      }
    }
  }
}
</script>
<style lang="scss">
.list-trip-wrapper{
  width: 100%;
  padding-top: 24px;
  font-family: 'SFProText';
  letter-spacing: -0.41px;
  min-height: 40vh;
  &>*{
    padding: 0 !important;
  }
  .filter{
    width: 259px;
    margin-right: 32px;
  }
  .list-trip{
    width: 828px;
  }
}

.filter-trip-on-small-screen{
  display: none;
  .btn-filter{
    border: 1px solid #FF4868;
    span{
      color: #FF4868;
    }
    &:hover, &:focus{
      background: rgba(251, 209, 225, 0.5) !important;
    }
  }
}
</style>
